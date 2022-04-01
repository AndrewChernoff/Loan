export default class Accordeon {
    constructor({ clickSelector } = '') {
        this.plus = document.querySelectorAll(clickSelector);
    }

    init() {
        this.plus.forEach((el, i) => {
            el.addEventListener('click', () => {
                const sibling = el.closest('.module__info-show').nextElementSibling;
                sibling.style.marginTop = '16px'
                sibling.classList.toggle('msg');
            })
        })
    }
}