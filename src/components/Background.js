class BackgroundLoader {
    constructor() {
        this.image;
        this.intro;
        this.events()
    }

    events() {
        document.addEventListener('DOMContentLoaded', () => {
            this.intro = document.querySelector('#intro')
            this.image = new Image();
            let imgSrc = this.intro.getAttribute('data-bgUrl')
            this.image.src = imgSrc
            this.image.onload = () => {
                this.switchImage()
            }
        })
    }

    switchImage() {
        this.intro.style.backgroundImage = `url(${this.image.src})`;
    }
}

export default BackgroundLoader;