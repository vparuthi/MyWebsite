$(document).ready(function() {
  $('#about, #landing-page, #work, #contact, #get-in-touch-link, .links').click(function() {
      var target = $(this).attr('href');
      console.log(target);
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 1500)
  });
  $(".btn-light").click(function(){
    var parents = $(this).parents();
    // $(parents[2]).css("width", "500px");
    console.log(parents);
    console.log($(parents[0]).siblings());

  $(parents[0]).siblings().fadeIn();
  $(parents[0]).fadeOut();
  })

});
