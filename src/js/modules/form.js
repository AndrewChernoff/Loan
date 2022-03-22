export default class Form {
    constructor({ selector = null } = '') {
        this.forms = document.querySelectorAll(selector);
        this.email = document.querySelectorAll('[name="email"]');
        this.phone = document.querySelectorAll('[name="phone"]');
        this.inputs = document.querySelectorAll('input');
        this.messages = {
            success: 'We\'ll hit you up',
            loading: 'Loading...',
            error: 'Something wrong'
        }
    }

    clearInputs() {
        this.inputs.forEach(input => input.value = '');
    }

    async postData(data) {
        let response = await fetch('assets/question.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return await response.text();
    }

    maskNumber() {
        function createMask(event) {
            let matrix = '+1 (___) ___-____',
                i = 0,
                def = matrix.replace(/\D/g, ''),
                val = this.value.replace(/\D/g, '');

            if (def.length >= val.length) {
                val = def;
            }

            this.value = matrix.replace(/./g, function (a) {
                return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
            });

            if (event.type === 'blur') {
                if (this.value.length == 2) {
                    this.value = '';
                }
            }
        }

        this.phone.forEach(input => {
            input.addEventListener('input', createMask);
            input.addEventListener('focus', createMask);
            input.addEventListener('blur', createMask);
        });
    }

    init() {
        this.email.forEach(item => {
            item.addEventListener('input', () => item.value = item.value.replace(/[^a-z 1-9 @]/i, ""))
        })

        this.maskNumber();

        console.log(this.email)
        this.forms.forEach(item => {

            item.addEventListener('submit', (e) => {
                e.preventDefault();
                const div = document.createElement('div');
                let color = item.style.backgroundColor;
                div.style.cssText = `
                margin: 10px;
                color: ${color};
                font-size: 25px;
                font-weight: 900;
                `
                div.textContent = this.messages.loading;
                item.appendChild(div);

                let formData = new FormData(item);
                let obj = {};
                formData.forEach((value, key) => {
                    obj[key] = value;
                });
                this.postData(obj)
                    .then(response => {
                        div.textContent = this.messages.success;
                        item.querySelector('.btn').disabled = true;
                        setTimeout(() => {
                            div.remove();
                        }, 3000)
                        console.log(response)
                    }).catch(() => {
                        div.textContent = this.messages.error;
                    }).finally(() => {
                        setTimeout(() => {
                            item.reset();
                            item.querySelector('.btn').disabled = false;
                        }, 3000)
                    })
            })
        })
    }
}