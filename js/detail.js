/**
 * Created by admin on 2018/4/30.
 */
$(".pc_btn").click(function () {
    $(".btn-outline-secondary").removeClass('active');
    $(this).addClass('active');
    $(".pc-swiper").show(300);
    $(".mobile-swiper").hide(300)

})

$(".pc_btnInMobile").click(function () {
    $(".btn-outline-secondary").removeClass('active');
    $(this).addClass('active');
    $(".pc-swiperInMobile").show(300);
    $(".mobile-swiperInMobile").hide(300)

})
var mobile_swiper = null;
var mobile_swiperInmobile = null;
$(".mobile_btn").click(function () {
    $(".btn-outline-secondary").removeClass('active');
    $(this).addClass('active');
    $(".mobile-swiper").show();
    $(".pc-swiper").hide()
    if(mobile_swiper == null){
        mobile_swiper = new Swiper('.mobile-swiper', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: -40,
                stretch: 20,
                depth: 90,
                modifier: 1,
                slideShadows : true
            },
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false
            },
            pagination: {
                el: '.swiper-pagination'
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        });
    }
});
$(".mobile_btnInMobile").click(function () {
    $(".btn-outline-secondary").removeClass('active');
    $(this).addClass('active');
    $(".mobile-swiperInMobile").show();
    $(".pc-swiperInMobile").hide()
    if(mobile_swiperInmobile == null){
        new Swiper('.mobile-swiperInMobile', {
            effect: 'cube',
            grabCursor: true,
            cubeEffect: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94
            },
            loop: true,
            pagination: {
                el: '.swiper-pagination'
            },
            autoplay: {
                delay: 2500,
                disableOnInteraction: false
            }
        });
    }
});
// var swiper = new Swiper('.pc-swiper', {
//     effect: 'coverflow',
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: 'auto',
//     coverflowEffect: {
//         rotate: -50,
//         stretch: 110,
//         depth: 220,
//         modifier: 1,
//         slideShadows : true
//     },
//     loop: true,
//     pagination: {
//         el: '.swiper-pagination'
//     },
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev'
//     }
// });

// new Swiper('.pc-swiperInMobile', {
//     effect: 'cube',
//     grabCursor: true,
//     cubeEffect: {
//         shadow: true,
//         slideShadows: true,
//         shadowOffset: 20,
//         shadowScale: 0.94
//     },
//     loop: true,
//     pagination: {
//         el: '.swiper-pagination'
//     },
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false
//     }
// });
