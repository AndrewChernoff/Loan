import Slider from "./slider";

export default class MainSlider extends Slider {
    constructor(container, btns) {
        super(container, btns);
    }

    hidePages() {
        this.slides.forEach((el) => {
            el.style.display = 'none';
        });
    }

    showPage(number) {
        if (number === this.slides.length + 1) {
            this.pageIndex = 1;
        } else if (number < 1) {
            this.pageIndex = this.slides.length + 1;
        }

        this.hidePages();
        this.slides[this.pageIndex - 1].style.display = 'block';

        try { ///show popup of teacher in th 3rd page
            this.teacherImg = document.querySelector('.hanson');
            this.teacherImg.style.display = 'none';
            if (this.pageIndex === 3) {
                this.teacherImg.style.display = 'block';
                this.teacherImg.classList.add('animated', 'fadeInUp');
                setTimeout(() => this.teacherImg.style.display = 'block', 3000);
            }
        } catch (e) { }
    }

    movePage(number) {
        this.showPage(this.pageIndex += number);
    }

    render() {
        try {
            this.hidePages();
            this.showPage(this.pageIndex);

            this.btns.forEach(btn => {
                btn.addEventListener('click', () => {
                    this.movePage(1);
                });

                btn.parentNode.previousElementSibling.addEventListener('click', () => {
                    this.pageIndex = 1;
                    this.showPage(this.pageIndex);
                })
            })
        } catch (e) { }

    }
}