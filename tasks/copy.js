/**
 *
 *   Clean
 *
 *   For usage docs see: https://github.com/gruntjs/grunt-contrib-copy
 *
 */

module.exports = function(g) {

    g.config.set('copy', {
        build: {
            files: [{
                expand: true,
                cwd: 'src/',
                src: ['images/**/*'],
                dest: g.option('dest') + '/'
            }, {
                expand: true,
                cwd: 'src/',
                src: ['other/**/*'],
                dest: g.option('dest') + '/'
            }]
        }
    });

    g.loadNpmTasks('grunt-contrib-copy');
};
