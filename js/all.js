const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 2000,
    },
    // effect: 'cube',
    // 頁次
    // pagination: {
    //     el: '.swiper-pagination',
    // },
    // 左右箭頭按鈕
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    // 卷軸
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

$(document).ready(function () {
    // 子menu
    $('.menu > li > a').click(function (e) {
        e.preventDefault();
        $(this).parent().siblings().find('ul').slideUp();
        $(this).parent().find('ul').slideToggle();
    });

    // 點選右下箭頭圖案到最上面
    $('.top a').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700)
    });
});