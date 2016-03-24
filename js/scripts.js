$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var young = $("input:radio[value=young]:checked").val();
    var medium = $("input:radio[value=medium]:checked").val();
    var old = $("input:radio[value=old]:checked").val();

    if (young) {
        window.location.href = "http://www.justinbiebermusic.com/";
      }

    if (medium) {
        window.location.href = "http://pitchfork.com/";
      }

    if (old) {
        window.location.href = "http://www.rollingstones.com/";
      }



  });
});
