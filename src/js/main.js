import playVideo from "./modules/playVideo";
import MainSlider from "./modules/slider/main_slider";
import MiniSlider from "./modules/slider/mini_slider";
//import Slider from "./modules/slider/slider";

const slider = new MainSlider({
    container: '.page',
    btns: '.next'
});
slider.render();

const miniSlider = new MiniSlider({
    container: '.showup__content-slider',
    nextBtn: '.showup__next',
    prevBtn: '.showup__prev',
    activeClassname: 'card-active',
    animated: true
})
miniSlider.init();

const video = new playVideo('.play__circle', '.overlay', '.close');
video.render();

const moduleSlider = new MiniSlider({
    container: '.modules__content-slider',
    nextBtn: '.slick-next',
    prevBtn: '.slick-prev',
    animated: true,
    activeClassname: 'card-active',
    interval: true
})
moduleSlider.init();

const feedSlider = new MiniSlider({
    container: '.feed__slider',
    nextBtn: '.feed__slider .slick-next .play__content',
    prevBtn: '.feed__slider .slick-prev .play__content',
    activeClassname: 'feed__item-active'
})
feedSlider.init(); 