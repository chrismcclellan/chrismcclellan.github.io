module.exports = function() {

    var $icons = [];
    var frames = 5;

    for (var i = 1; i <= frames; i++) {

        var $link =  $('<link />');

        $link.attr({
            rel: 'icon',
            type: 'image/gif',
            href: '/build/images/favicon/'+i+'.gif'
        });

        $icons.push($link);
    }

    var n = 0;
    window.setInterval(function() {

        $("link[rel='icon']").detach();
        $("link[rel='shortcut icon']").detach();
        $("head").append($icons[n]);

        if(n >= frames) n = 0;
        else n++;

    }, 600);

};