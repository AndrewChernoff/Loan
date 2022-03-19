export default class Slider {
    constructor({ container = null, btns = null, nextBtn = null, prevBtn = null, activeClassname = null, animated = null, interval = null } = '') {
        this.container = document.querySelector(container);
        this.slides = this.container.children;
        this.btns = document.querySelectorAll(btns);
        this.nextBtn = document.querySelector(nextBtn);
        this.prevBtn = document.querySelector(prevBtn);
        this.activeClassname = activeClassname;
        this.animated = animated;
        this.interval = interval;
        this.pageIndex = 1;
    }

    /* hidePages() {
        this.slides.forEach((el) => {
            el.style.display = 'none';
        });
    }

    showPage(number) {
        if (number === this.slides.length) {
            this.pageIndex = 1;
        } else if (number < 1) {
            this.pageIndex = this.slides.length;
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
    } */
}