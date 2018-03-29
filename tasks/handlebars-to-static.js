/**
 *
 *   Handlebars
 *
 *   For usage docs see: https://github.com/gruntjs/grunt-contrib-handlebars
 *
 */
var _ = require('lodash');
var data = require('../data');
var helpers = require('../src/templates/helpers');

module.exports = function(g) {

    var dest = g.option('dest');

    var paths = getTemplatePaths(g);
    var contents = getTemplateContents(g, paths);
    var templates = _.zipObject(paths, contents);
    var grouped = groupTemplates(templates);

    g.config.set('handlebars_to_static', {

        build: {

            options: {

                global_context: {
                    data: data,
                    helpers: helpers,
                    partials: grouped.partials
                },

                file_context: function(src, dest, ctx) {

                    var key = src.replace(/\/page\.hbs$/, '').replace(/\.hbs$/, '');
                    if (key.indexOf('pages/') > -1) key = key.split('pages/')[1];

                    var body = _.get(grouped.pages, key);
                    var partials = _.set(grouped.partials, 'body', body);

                    return {
                        src: './src/templates/layouts/default.hbs',
                        partials: partials,
                        dest: key + '.html'
                    };
                }
            },
            expand: true,
            cwd: 'src/templates/pages/',
            src: ['**/*.hbs'],
            dest: 'build/pages/'
        }
    });

    g.loadNpmTasks('grunt-handlebars-to-static');
};

function getTemplatePaths(g) {
    return g.file.expand(['src/templates/**/*.hbs'], {
        cwd: './src/templates',
        filter: 'isFile'
    });
}

function getTemplateContents(g, paths) {
    return _.map(paths, g.file.read);
}

function cleanPaths(templates) {
    return _.zipObject(_.map(templates, function(_p) {
        return _p.replace('/page.hbs', '').replace('.hbs', '').replace('src/templates/', '');
    }), contents);
}

function groupTemplates(templates) {

    var o = {};
    o.pages = {};
    o.partials = {};
    o.layouts = {};

    _.each(templates, function(val, key) {

        var islayout  = key.indexOf('layouts/') > -1;
        var ispage    = key.indexOf('pages/') > -1;
        var ispartial = key.indexOf('partials/') > -1;

        if (!islayout && !ispage && !ispartial) throw "Does not match any of " + _.join(_.keys(o), ", ");

        var match = islayout ? 'layouts' : ispartial ? 'partials' : 'pages';
        var cleankey = key.split(match)[1].replace(/(\/page\.hbs)$/, '').replace(/(\.hbs)$/, '').replace(/^(\/)/, '');

        _.set(o, [match, cleankey], val);
    });

    return o;
}

function composePartials(paths, g) {
    var keys = _.map(paths, sanitizePartials);
    var vals = _.map(paths, g.file.read);
    return _.zipObject(keys, vals);
}

function sanitizePartials(path) {
    return path.replace('/page.hbs', '')
        .replace('.hbs', '')
        .replace('src/templates/', '')
        .replace('pages/', '')
        .replace('partials/', '');
}