

$(document).ready(function () {
    $('#fullpage').fullpage({
        anchors: ['home', 'about', 'skills', 'book'],
        menu: '#menu',
        css3: true,
        // onLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {
        //     if ($(this).attr("class").includes("homePage1")) {
        //         $("body").css("background","linear-gradient(270deg, #EB5757, #AD00B0)").fadeIn(2000);
        //     }
        //     if ($(this).attr("class").includes("aboutPage1")) {
        //         $("body").css("background","linear-gradient(150deg, #EB5757, #F2994A)").fadeIn(2000);
        //     }
        //     if ($(this).attr("class").includes("skillsPage1")) {
        //         $("body").css("background","linear-gradient(150deg, #AD00B0, #F2994A)").fadeIn(2000);
        //     }
        // }
    });
});

$(window).load(function () {
    // Animate loader off screen
    $(".loader").fadeOut(500);;
});