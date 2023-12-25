const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    centeredSlides: true,
    effect: 'coverflow',
    spaceBetween: 30,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});