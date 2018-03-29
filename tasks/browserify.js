/**
 *
 *   Browserify
 *
 *   For usage docs see: https://github.com/jmreidy/grunt-browserify
 *
 */

module.exports = function(g) {

    g.config.set('browserify', {

        build: {
            src: 'src/scripts/**/*.js',
            dest: g.option('dest') + '/js/main.js',
            options:  {

                alias: {
                    jquery: './node_modules/jquery/dist/jquery.js'
                }
            }
        }
    });

    g.loadNpmTasks('grunt-browserify');
};
