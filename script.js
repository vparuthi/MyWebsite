$(document).ready(function() {

  $(".btn-light").click(function(){
    var parents = $(this).parents();
    // $(parents[2]).css("width", "500px");
    console.log(parents);
    console.log($(parents[0]).siblings());
  //   $(parents[2]).flip({
  //     trigger: 'manual',
  //     autoSize: true
  //   });
  //   $(parents[2]).flip('toggle');
  $(parents[0]).siblings().fadeIn();
  $(parents[0]).fadeOut();

  })

});
