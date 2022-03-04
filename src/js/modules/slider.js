export default class Slider {
    constructor(page, btns, slideControl) {
        this.page = document.querySelector(page);
        this.btns = document.querySelectorAll(btns);
        this.pageIndex = 1
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
    }

    movePage(number) {
        this.showPage(this.pageIndex += number);
    }

    render() {
        console.log(this.page.children);
        this.hidePages();
        this.showPage(this.pageIndex);

        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.movePage(1);
            });

            btn.parentNode.previousElementSibling.addEventListener('click', () => {
                console.log('hey')
                this.pageIndex = 1;
                this.showPage(this.pageIndex);
            })
        })
    }
}