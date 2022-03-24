import Slider from "./slider"

export default class MiniSlider extends Slider {
    constructor(container, nextBtn, prevBtn, slides, activeClassname, animated, interval) {
        super(container, nextBtn, prevBtn, slides, activeClassname, animated, interval);
        this.tab = document.querySelector(`.card`);
    }

    classManage() {
        this.slides.forEach((slide) => {
            slide.classList.remove(this.activeClassname);
        })
        this.slides[0].classList.add(this.activeClassname);
        if (this.animated) {
            this.slides.forEach((slide) => {
                slide.classList.remove(this.activeClassname);
                slide.querySelector('.card__title').style.opacity = '0.4';
                slide.querySelector('.card__controls-arrow').style.opacity = '0';
            })
            this.slides[0].classList.add(this.activeClassname);
            this.slides[0].querySelector('.card__title').style.opacity = '1';
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
        }
    }

    moveNextSlide() {
        if (this.slides[1].tagName == 'BUTTON' && this.slides[2].tagName == 'BUTTON') {
            this.container.appendChild(this.slides[0]);
            this.container.appendChild(this.slides[0]);
            this.container.appendChild(this.slides[0]);
            this.classManage();
        } else if (this.slides[1].tagName == 'BUTTON') {
            this.container.appendChild(this.slides[0]);
        } else {
            let active = this.slides[0];
            this.container.appendChild(active);
            this.classManage();
        }
    }

    bindTriggers() {
        if (this.animated) {
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
            this.tab.querySelector('.card__title').style.opacity = '1';
        }

        this.container.style.cssText = `
         display: flex;
         flex-wrap: wrap;
         align-items: center;
         overflow: hidden;
         `

        this.nextBtn.addEventListener('click', () => {
            this.moveNextSlide();
        })

        this.prevBtn.addEventListener('click', () => {

            for (let i = this.slides.length - 1; i > 0; i--) {
                if (this.slides[i].tagName === 'BUTTON') {
                    let active = this.slides[i];
                    this.container.insertBefore(active, this.slides[this.slides.length - 1]);
                    this.container.appendChild(this.slides[0]);
                    this.classManage();
                } else {
                    let active = this.slides[0];
                    this.container.appendChild(active);
                    this.classManage();
                }
            }
        })

    }

    init() {
        try {
            this.bindTriggers();
            if (this.interval) {
                let sliderAnimation = setInterval(() => this.moveNextSlide(), 5000);

                this.container.addEventListener('mouseenter', () => clearInterval(sliderAnimation));
                this.container.addEventListener('mouseleave', () => this.moveNextSlide());
            }
        } catch (e) { }

    }
}