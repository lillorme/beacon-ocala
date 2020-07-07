export const slideSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    cssEase: 'linear',
    arrows: false,
};

export const rowSlideSettings = {
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    cssEase: 'linear',
    responsive: [
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            }
        }
    ]
};