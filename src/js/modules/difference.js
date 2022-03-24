export default class Difference {
    constructor({ container = null, items = null, clickItem = null } = '') {
        this.container = document.querySelector(container);
        this.items = document.querySelectorAll(items);
        try { this.clickItem = this.container.querySelector(clickItem) } catch (e) { };
        this.index = 0;
    };

    hideItems() {
        this.items.forEach(el => {
            el.style.display = 'none'
            this.items[this.items.length - 1].style.display = 'flex';
        })
    }

    showItem() {
        if (this.index == this.items.length - 2) {
            this.clickItem.parentNode.parentNode.remove();
        }
        this.items[this.index].style.display = 'flex';
        this.index++;
    }

    addElement() {
        this.clickItem.addEventListener('click', () => this.showItem())
    }

    init() {
        try {
            this.hideItems();
            this.addElement();
        } catch (e) { }
    }
}