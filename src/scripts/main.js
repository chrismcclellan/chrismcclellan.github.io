var jQuery = require('jquery');
window.$ = window.jQuery = jQuery;

var Home = require('./home');

module.exports = (function() {

    require('livereload-js');

    var home = new Home();

})();
