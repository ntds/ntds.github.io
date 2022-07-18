console.log('Loaded typewriter.js');
  
    var i = 0;
  var txt = 're1.pl <3';
  var speed = 36;
  
  
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("preloader").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }