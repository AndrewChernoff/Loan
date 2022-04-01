export default class Download {
    constructor({ triggers } = '') {
        this.triggers = document.querySelectorAll(triggers);
        this.path = 'assets/img/mainbg.jpg';
    }

    download(path) {
        let a = document.createElement('a');
        document.body.appendChild(a)
        a.setAttribute('href', path)
        a.setAttribute('download', 'nice_image');

        a.click();
        document.body.removeChild();
    }

    init() {
        this.triggers.forEach(el => {
            el.addEventListener('click', (e) => {
                e.stopPropagation();
                this.download(this.path);
            })
        })
    }
}