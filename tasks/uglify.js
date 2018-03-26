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
                'build/scripts/main.min.js': [
                    'build/scripts/main.js'
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify-es');
}
