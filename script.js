
let  currentSlider = 0;


function toggleSlider (count) {
    if (count < 0) {
       currentSlider = 3
    }

    if (count > 3) {
       currentSlider = 0
    }

    const offset = currentSlider * 256;
    sliderLine.style.left = -offset + 'px';
};

