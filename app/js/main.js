$(function() {
    $(".menu__item-link").on("click", function(e) {
        e.preventDefault();
        $(".drop__list").toggleClass("nameClass--active");
    });

    $(".wordi").on("click", function(e) {
        e.preventDefault();
        $(".wordi-drop").toggleClass("nameClass--active");
    });

    $(".prod").on("click", function(e) {
        e.preventDefault();
        $(".prod-list").toggleClass("nameClass--active");
    });

    $(".pages__drop").on("click", function(e) {
        e.preventDefault();
        $(".page__wrapper").toggleClass("nameClass--active");
    });



    $(".rate-star").rateYo({
        rating: 3.6,
        starWidth: "12px"
    });
    $(".weekly-star").rateYo({
        rating: 3.6,
        starWidth: "12px"
    });

    $("#example").ionRangeSlider({
        type: "double",

        min: 0,
        max: 330,
        from: 30,
        to: 300,
        prefix: "$"
    });

    $('.icon-list').on('click', function() {
        $('.categories__items').addClass('list');
        $('.icon-list').addClass('active');
        $('.icon-code').removeClass('active');
        $('.breadcrumbs__list').addClass('grid');
        // $('.icon-list').addClass('active');

    });
    $('.icon-code').on('click', function() {
        $('.categories__items').removeClass('list');
        $('.icon-code').addClass('active');
        $('.icon-list').removeClass('active');
        $('.breadcrumbs__list').removeClass('grid');

    });
    new WOW().init();

    var mixer = mixitup('.shop__inner');





});