(($) => {
    $(document).ready(() => {
        $('.js-news-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            autoplay: false,
            autoplaySpeed: 4000,
            infinite: false,
            responsive: [{
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 3,
                        arrows: false,
                        draggable: false,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                        draggable: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        draggable: true
                    }
                }
            ]
        });
        $('[data-fancybox="gallery"]').fancybox({
            animationEffect: 'zoom-in-out',
            transitionEffect: 'slide'
        });
    });
})(jQuery)