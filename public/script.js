if( typeof jQuery !== "undefined") {
  jQuery(document).ready(function($) {
    $('#profileDescription').textillate({
      selector: '.profileDescription',
      loop: true,
      minDisplayTime: 1000,
      autoStart: true,
      inEffects: ['bounceIn','rotateIn','rotateInUpRight','fadeInLeftBig', 'flipInY'],
      outEffects: ['bounceOut', 'rotateOutDownLeft', 'flipOutY' ],
      in: {
        effect: 'pulse',
        delayScale: 1,
        delay: 50,
        sync: false,
        shuffle: false,
        reverse: false,
        callback: function () {}
      },
      out: {
        effect: 'rotateOut',
        delayScale: 1,
        delay: 50,
        sync: false,
        shuffle: true,
        reverse: false,
        callback: function () {}
      },
      callback: function () {},
      type: 'char' //word
    });
  });//ready
}