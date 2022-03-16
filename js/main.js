var swiper = new Swiper(".home-slider", {
    loop: true,
    // grabCursor:true,
    direction: "vertical",
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});