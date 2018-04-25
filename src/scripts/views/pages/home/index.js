module.exports = function(opts) {

    var options = opts || {};
    
    require('./canopy')();
    require('./design')();
    require('./me')();
}