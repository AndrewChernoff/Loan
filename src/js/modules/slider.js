export default class Slider {
    constructor(page, btns) {
        this.page = document.querySelector(page);
        this.btns = document.querySelectorAll(btns);
        this.pageIndex = 1;
    }

    hidePages() {
        this.page.children.forEach((el) => {
            el.style.display = 'none';
        });
    }

    showPage(number) {
        if (number === this.page.children.length) {
            this.pageIndex = 1;
        } else if (number < 1) {
            this.pageIndex = this.page.children.length;
        }

        this.hidePages();
        this.page.children[this.pageIndex - 1].style.display = 'block';

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
    }
}