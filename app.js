$(function() {

  var photos = [
    'backyard', 'beach', 'birdwatchers', 'confirmation', 'crazies', 'drivers',
    'florida', 'hiking', 'pool', 'resort', 'spring', 'statues', 'stylin',
    'xmas', 'xmascard', 'xmastree'
  ];

  var $canvas = $('.canvas');

  var counter = 0;

  setInterval(function() {
    $canvas.fadeOut('slow', function() {
      $canvas.attr('src', '/photos/' + photos[counter++ % photos.length] + '.jpg');
      $canvas.fadeIn('slow');
    });
    console.log('hit');
  }, 5000);

});
