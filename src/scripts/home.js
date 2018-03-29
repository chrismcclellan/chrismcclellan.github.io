
module.exports = function() {

    var $pronunciation = $('.pronunciation a');
    var audio = new Audio('/build/other/chrismcclellan.mp3');

    audio.onplay = function() {
        $pronunciation.addClass('playing');
    };

    audio.onended = function() {
        $pronunciation.removeClass('playing');
    };

    $pronunciation.on('click', function(event) {
        console.log('fuck');
        event.preventDefault();
        audio.play();
    });
}