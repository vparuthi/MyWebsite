$(document).ready(function() {
    $('#about, #landing-page, #work, #contact').click(function() {
        var target = $(this).attr('href');
        console.log(target);
        $('html, body').animate({
          scrollTop: $(target).offset().top
        }, 1500)
    });
});
