(($) => {
    $(document).ready(() => {
        $('.js-news-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots:true,
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: false,
            swipeToSlide: false,
            draggable: false,
            responsive: [
                {
                  breakpoint: 1300,
                  settings: {
                    arrows: false,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        });
    });

    $('[data-fancybox="gallery"]').fancybox({
        animationEffect: 'zoom-in-out',
        transitionEffect: 'slide'
    });


    // window.activeGMaps = [];
    // const $map = $('.map__container');
    // const map = new google.maps.Map(
    //     $map[0], {
    //         center: {
    //             lat: 41.00270267,
    //             lng: -74.24972534
    //         },
    //         zoom: 10
    //     });
})(jQuery)