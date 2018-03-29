/**
 *
 *   Compass (SCSS)
 *
 *   For usage docs see: https://github.com/gruntjs/grunt-contrib-compass
 *
 */

module.exports = function(g) {

    g.config.set('sass', {

        build: {
            options: {
                style: 'nested',
                require: ['sass-globbing'],
                loadPath: [
                    'node_modules/foundation-sites/scss'
                ]
            },
            files: [{
                expand: true,
                cwd: 'src/styles',
                src: ['*.scss'],
                dest: g.option('dest') + '/css',
                ext: '.css'
            }]
        }
    });

    g.loadNpmTasks('grunt-contrib-sass');
}
