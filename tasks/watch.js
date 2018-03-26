/**
 *
 *   Watch
 *
 *   For usage docs see: https://github.com/gruntjs/grunt-contrib-watch
 *
 */

module.exports = function(grunt) {

    grunt.config.set('watch', {

        templates: {
            files: ['src/templates/**/*.{hbs,js}'],
            tasks: ['compile-handlebars']
        },

        scripts: {
            files: ['src/scripts/**/*.{js,json}'],
            tasks: ['browserify']
        },

        styles: {
            files: ['src/styles/**/*.scss'],
            tasks: ['sass']
        },

        livereload: {
            files: ['docs/**/*'],
            options: {
                livereload: true
            }
        },

        grunt: {
            files: ['Gruntfile.js', 'tasks/**/*.js', '!**/node_modules/**'],
            options: {
                dot: false,
                reload: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
};
