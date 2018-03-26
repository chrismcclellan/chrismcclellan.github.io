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

module.exports = function(grunt) {

    var paths = getPaths(grunt);

    var partials = _.filter(paths, function(path) {
        return path.indexOf('partials/') > -1;
    });

    grunt.config.set('compile-handlebars', {

        build: {
            files: [{
                expand: true,
                cwd: './src/templates/pages/',
                src: '**/*.hbs',
                dest: 'build',
                ext: '.html'}],
            options: {
                global_context: {
                    data: data,
                    helpers: helpers,
                    partials: partials
                },
                file_context: function (src) {
                    var data = {};
                    data.data = {};
                    return data;
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-compile-handlebars');
};

function getPaths(grunt) {
    return grunt.file.expand(['src/templates/**/*.hbs'], {
        cwd: './src/templates',
        filter: 'isFile'
    });
}
