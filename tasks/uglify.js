/**
 *
 *   Uglify
 *
 *   For usage docs see: https://github.com/gruntjs/grunt-contrib-uglify
 *
 */

var _ = require('lodash');

module.exports = function(g) {

    var dest = g.option('dest');

    g.config.set('uglify', {

        build: {

            options: {
                drop_console: true,
                sourceMap: false,
                mangle: false
            },

            files: _.set({}, dest + '/js/main.min.js', [ dest + '/js/main.js' ])
        }
    });

    g.loadNpmTasks('grunt-contrib-uglify-es');
}
