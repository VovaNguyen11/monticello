(($) => {
    $(document).ready(() => {
        $('.js-news-slider').slick({
            slidesToShow: 3,
            arrows: false,
            dots: true,
            slidesToScroll: 1,
            autoplaySpeed: 4000,
            infinite: false
        })
    })
})(jQuery)