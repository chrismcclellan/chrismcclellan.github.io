module.exports = function pronounce() {

    var $el = $('#canopy .pronounce a');
    var audio = new Audio('/build/other/pronounce.mp3');

    audio.onplay = function() {
        $el.addClass('playing');
    };

    audio.onended = function() {
        $el.removeClass('playing');
    };

    $el.on('click', function(event) {

        event.preventDefault();

        // If already playing... pause
        if ($el.data('playing')) {
            audio.pause();
        }

        // Not already playing... play
        $el.data('playing', true);
        audio.play();
    });
}