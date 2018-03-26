/**
 *
 *   Browserify
 *
 *   For usage docs see: https://github.com/jmreidy/grunt-browserify
 *
 */

module.exports = function(grunt) {

    grunt.config.set('browserify', {

        build: {
            src: 'src/scripts/**/*.js',
            dest: 'docs/js/main.js',
            options:  {

                alias: {
                    jquery: './node_modules/jquery/dist/jquery.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
};
