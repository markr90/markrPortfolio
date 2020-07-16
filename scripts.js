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