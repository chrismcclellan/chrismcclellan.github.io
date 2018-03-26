/**
 *
 *   Uglify
 *
 *   For usage docs see: https://github.com/gruntjs/grunt-contrib-uglify
 *
 */

module.exports = function(grunt) {

    grunt.config.set('uglify', {

        build: {

            options: {
                drop_console: true,
                sourceMap: false,
                mangle: false
            },

            files: {
                'docs/js/main.min.js': [
                    'docs/js/main.js'
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify-es');
}
