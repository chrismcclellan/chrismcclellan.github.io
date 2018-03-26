/**
 *
 *   Handlebars
 *
 *   For usage docs see: https://github.com/gruntjs/grunt-contrib-handlebars
 *
 */
var _       = require('lodash');
var data    = require('../data');
var helpers = require('../src/templates/helpers');

module.exports = function(grunt) {

    var paths     = getTemplatePaths(grunt);
    var contents  = getTemplateContents(grunt, paths);
    var templates = _.zipObject(paths, contents);
    var grouped   = groupTemplates(templates);

    grunt.config.set('handlebars_to_static', {

        build: {

            options: {

                global_context: {
                    data: data,
                    helpers: helpers,
                    partials: grouped.partials
                },

                file_context: function(src, dest, ctx) {

                    var key = src.replace(/\.hbs$/, '');

                    if (key.indexOf('pages/') > -1) 
                        key = key.split('pages/')[1];

                    var body = _.get(grouped.pages, key);

                    return {
                        src: './src/templates/layouts/default.hbs',
                        partials: _.set(grouped.partials, 'body', body)
                    };
                }
            },

            cwd: 'src/templates/pages/',
            src: ['*.hbs'],
            dest: 'build/'
        }
    });

    grunt.loadNpmTasks('grunt-handlebars-to-static');
};

function getTemplatePaths(grunt) {
    return grunt.file.expand(['src/templates/**/*.hbs'], {
        cwd: './src/templates',
        filter: 'isFile'
    });
}

function getTemplateContents(grunt, paths) {
    return _.map(paths, grunt.file.read);
}

function cleanPaths(templates) {
    return _.zipObject(_.map(templates, function (_path) {
        return _path.replace('.hbs', '').replace('src/templates/', '');
    }), contents);
}

function groupTemplates(templates) {

    var o = {};
        o.pages = {};
        o.partials = {};
        o.layouts = {};

    _.each(templates, function(val, key) {

        var match = key.match(/.*\/templates\/(partials|layouts|pages)\/.*/)[1];

        if (!_.has(o, match))
            return _.set(o, ['unmatched', key], val);

        var cleankey = key.split(match)[1].replace(/(\.hbs)$/, '').replace(/^(\/)/, '');

        _.set(o, [match, cleankey], val);
    });

    return o;
}

function composePartials(paths, grunt) {
    var keys = _.map(paths, sanitizePartials);
    var vals = _.map(paths, grunt.file.read);
    return _.zipObject(keys, vals);
}

function sanitizePartials(path) {
    return path.replace('.hbs', '')
        .replace('src/templates/', '')
        .replace('pages/', '')
        .replace('partials/', '');
}
