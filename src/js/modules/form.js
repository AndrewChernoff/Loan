export default class Form {
    constructor({ selector = null } = '') {
        this.form = document.querySelector(selector);
    }

    init() {
        console.log(this.form)
    }
}