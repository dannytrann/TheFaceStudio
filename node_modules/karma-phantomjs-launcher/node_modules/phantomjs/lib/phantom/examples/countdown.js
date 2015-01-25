(function() {
  var interval, t;

  t = 10;

  interval = setInterval(function() {
    if (t > 0) {
      return console.log(t--);
    } else {
      console.log('BLAST OFF!');
      return phantom.exit();
    }
  }, 1000);

}).call(this);
