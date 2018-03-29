/**
 *
 *   Connect
 *
 *   For usage docs see: https://github.com/gruntjs/grunt-contrib-connect
 *
 */
var _ = require('lodash');
var fs = require('fs');
var path = require('path');
var static = require('serve-static');
var include = require('include-all');

module.exports = function(g) {

    g.config.set('connect', {

        server: {

            options: {
                open: true,
                livereload: true,
                base: {
                    path: '.',
                    options: {
                        index: 'index.html'
                    }
                }
            }
        }
    });

    g.loadNpmTasks('grunt-contrib-connect');
};


// middleware: function(connect, options) {

//     var opts  = options || {};
//     opts.base = !_.isArray(opts.base) ? [opts.base] : opts.base;

//     var dir = opts.directory || opts.base[opts.base.length - 1];
//     var middleware = [];

//     // Serve static files
//     _.each(opts.base, function(base) {
//         middleware.push(static(base));
//     });

//     // Make directory browseable
//     // middleware.push(connect.directory(dir));

//     // Not found - just serve index.html
//     middleware.push(function(req, res, next) {

//         var baselen = opts.base.length;

//         for (var file, i = 0; i < baselen; i++) {
//             file = opts.base + "/index.html";
//             if (grunt.file.exists(file)) return fs.createReadStream(file).pipe(res);
//         }

//         console.log('response', res);

//         // where's index.html?
//         res.end();
//         res.sendStatus(404).end();
//     });

//     return middleware;
// }