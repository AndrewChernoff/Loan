export default class playVideo {
    constructor(trigger, modal, close) {
        this.trigger = document.querySelectorAll(trigger);
        this.modal = document.querySelector(modal);
        this.close = document.querySelector(close);
    }

    onYouTubeIframeAPIReady(url) { /// youtube API
        this.player = new YT.Player('frame', {
            height: '360',
            width: '640',
            videoId: `${url}`,
        });
    }

    play() { ///open popup with youtube video
        this.trigger.forEach(btn => {
            btn.addEventListener('click', () => {
                if (document.querySelector('iframe#frame')) { ///when iframe created
                    this.modal.style.display = 'flex';
                }
                else {
                    this.modal.style.display = 'flex';
                    let path = btn.parentNode.getAttribute('data-url');
                    this.onYouTubeIframeAPIReady(path);
                }
            })
        })
    }

    closeModal() { ///close popup with youtube video
        this.close.addEventListener('click', () => {
            this.modal.style.display = 'none';
            this.player.pauseVideo();
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