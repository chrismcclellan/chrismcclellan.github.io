/**
 *
 *   Watch
 *
 *   For usage docs see: https://github.com/gruntjs/grunt-contrib-watch
 *
 */

module.exports = function(g) {

    g.config.set('watch', {

        templates: {
            files: ['src/templates/**/*.{hbs,js}'],
            tasks: ['handlebars_to_static']
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
            files: ['./*.html', g.option('dest') + '/**/*'],
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

    g.loadNpmTasks('grunt-contrib-watch');
};
