import Accordeon from "./modules/accordeon";
import Difference from "./modules/difference";
import Download from "./modules/download";
import Form from "./modules/form";
import playVideo from "./modules/playVideo";
import MainSlider from "./modules/slider/main_slider";
import MiniSlider from "./modules/slider/mini_slider";

const slider = new MainSlider({
    container: '.page',
    btns: '.next'
});
slider.render();

const modilesPageslider = new MainSlider({
    container: '.moduleapp',
    btns: '.next'
});
modilesPageslider.render();

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

const videoModule = new playVideo('.module__video .play__circle', '.overlay', '.close');
videoModule.render();

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

const education = new Difference({
    container: '.officerold',
    items: '.officerold .officer__card-item',
    clickItem: '.plus'
})
education.init();

const educationPast = new Difference({
    container: '.officernew',
    items: '.officernew .officer__card-item',
    clickItem: '.plus'
})
educationPast.init();

const form = new Form({
    selector: '.form'
});
form.init();

const accordeon = new Accordeon({ clickSelector: '.plus__content' });
accordeon.init();

const download = new Download({ triggers: '.download' });
download.init();