/**
 *
 *   Clean
 *
 *   For usage docs see: https://github.com/gruntjs/grunt-contrib-clean
 *
 */

module.exports = function(g) {

    g.config.set('clean', {
        build: [
            g.option('dest') + '/**/*'
        ]
    });

    g.loadNpmTasks('grunt-contrib-clean');
};
