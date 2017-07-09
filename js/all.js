$(document).ready(function() {
    $('.bars').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('navshow');
    });
});

$(document).ready(function() {
    $('.bars2').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('menushow');
    });
});