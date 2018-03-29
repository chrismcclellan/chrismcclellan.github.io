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

    var paths = getPaths(g);

    var partials = _.filter(paths, function(path) {
        return path.indexOf('partials/') > -1;
    });

    g.config.set('compile-handlebars', {

        build: {
            files: [{
                expand: true,
                cwd: './src/templates/pages/',
                src: '**/*.hbs',
                dest: './',
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

    g.loadNpmTasks('grunt-compile-handlebars');
};

function getPaths(g) {
    return g.file.expand(['src/templates/**/*.hbs'], {
        cwd: './src/templates',
        filter: 'isFile'
    });
}
