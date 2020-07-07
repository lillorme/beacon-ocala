import $ from 'jquery';

export const avocardroSlider = () => {
    console.log('here');
    const targetClass = $('.avocardro-slider-container');
    targetClass.each(function(e){
        console.log(e);
        const sliderId = $(this).data('id');
        const slider = $('#' + sliderId);
        slider.slick({});
    });
}
