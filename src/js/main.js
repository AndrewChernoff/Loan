import playVideo from "./modules/playVideo";
import Slider from "./modules/slider";

const slider = new Slider('.page', '.next');
slider.render();

const video = new playVideo('.play__circle', '.overlay', '.close');
video.render();