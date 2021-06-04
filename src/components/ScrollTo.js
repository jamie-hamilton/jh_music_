import smoothscroll from 'smoothscroll-polyfill';
 
class SmoothScroller {
    constructor() {
        this.anchors = document.querySelectorAll('.smooth-scroll a');
        this.events()
    }

    events() {
        smoothscroll.polyfill();
        this.anchors.forEach(anchor => {
            anchor.addEventListener('click', () => this.smoothlyDoesIt(anchor.getAttribute('href')))
        })
    }

    smoothlyDoesIt(location) {
        document.querySelector(location).scrollIntoView({ behavior: 'smooth' });
    }
}

export default SmoothScroller;