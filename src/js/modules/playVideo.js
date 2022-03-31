export default class playVideo {
    constructor(trigger, modal, close) {
        this.trigger = document.querySelectorAll(trigger);
        this.modal = document.querySelector(modal);
        this.close = document.querySelector(close);
        this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
    }

    onYouTubeIframeAPIReady(url) { /// youtube API
        this.player = new YT.Player('frame', {
            height: '360',
            width: '640',
            videoId: `${url}`,
            events: {
                'onStateChange': this.onPlayerStateChange
            }
        });
    }



    play() { ///open popup with youtube video
        try {
            this.trigger.forEach((btn, i) => {
                if (i % 2 != 0) { // index is even
                    btn.setAttribute('data-disabled', 'true');
                } else if (i % 2 === 0) {
                    btn.setAttribute('data-disabled', 'false');
                } else if (btn.closest('.colored')) {
                    btn.setAttribute('data-disabled', 'false');
                }
                //let smt = document.querySelector('[data-disabled]')
                btn.addEventListener('click', () => {
                    if (btn.dataset.disabled != 'true') { ////////neeed to finish

                        console.log('can play')
                        this.activeBtn = btn;
                        if (document.querySelector('iframe#frame')) { ///when iframe created
                            this.modal.style.display = 'flex';
                            if (this.path != btn.parentNode.getAttribute('data-url')) {
                                this.path = btn.parentNode.getAttribute('data-url');
                                this.player.loadVideoById({ 'videoId': this.path });
                            }
                            console.log(this.activeBtn)
                        }
                        else {
                            this.path = btn.parentNode.getAttribute('data-url');
                            this.onYouTubeIframeAPIReady(this.path);
                        }
                    }
                })
            })
        } catch (error) {

        }

    }

    onPlayerStateChange(e) {
        try {
            let firstBtn = this.activeBtn;
            let blockedBtn = firstBtn.closest('.module__video-item').nextElementSibling;
            if (e.data === 0) {
                if (blockedBtn.querySelector('.play__circle').classList.contains('closed')) {
                    blockedBtn.style.opacity = '1';
                    blockedBtn.style.filter = 'grayscale(0%)';
                    blockedBtn.querySelector('.play__circle').classList.remove('closed');
                    console.log(blockedBtn.querySelector('.play__text attention'))
                    blockedBtn.querySelector('.play__text.attention').innerHTML = `
                    <div class="play__text"> play video </div>
                    `;
                    blockedBtn.querySelector('.play__circle').dataset.disabled = 'false';
                    blockedBtn.querySelector('.play__circle').querySelector('svg').remove();
                    blockedBtn.querySelector('.play__circle').appendChild(firstBtn.querySelector('svg').cloneNode(true));

                    console.log(this.activeBtn)
                }
            }
        } catch (error) {

        }

    }

    closeModal() { ///close popup with youtube video
        this.close.addEventListener('click', () => {
            this.modal.style.display = 'none';
            this.player.stopVideo();
        })
    }

    render() {
        const tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        this.play();
        this.closeModal();
    }
}