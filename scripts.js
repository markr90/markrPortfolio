$(document).ready(function(){
    $(".fancy-toggler").click(function(){
        $(this).toggleClass("activeToggle");
    });
});

$(document).click(function(e){
    var dropdown = $(".navbar-collapse");

    if (!dropdown.is(e.target) && dropdown.has(e.target).length === 0) {
        dropdown.removeClass("show");
    }
});

$('a.homeLink').click(function(){
    positionport = $('#headerSection').offset().top - $('.navbar').height();
    $("html, body").animate({scrollTop:positionport}, '500', 'swing');
})

$('a.aboutMeLink').click(function(){
    positionport = $('#aboutMeSection').offset().top - $('.navbar').height();
    $("html, body").animate({scrollTop:positionport}, '500', 'swing');
})

$('a.projectsLink').click(function(){
    positionport = $('#projectsSection').offset().top - $('.navbar').height();
    $("html, body").animate({scrollTop:positionport}, '500', 'swing');
})

$('a.contactLink').click(function(){
    positionport = $('#contactSection').offset().top - $('.navbar').height();
    $("html, body").animate({scrollTop:positionport}, '500', 'swing');
})

$('a.skillsLink').click(function(){
    positionport = $('#skillsSection').offset().top - $('.navbar').height();
    $("html, body").animate({scrollTop:positionport}, '500', 'swing');
})