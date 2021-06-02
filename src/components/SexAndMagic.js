class ColourChanger {
    constructor() {
        this.sections = [].slice.call(document.querySelectorAll(".panel"))
        this.observer;
        this.events()
    }

    events() {
        if ("IntersectionObserver" in window) {
            this.changeyBoxObserver()
            window.addEventListener('resize', () => this.changeyBoxObserver());
            window.addEventListener("orientationchange", () => this.changeyBoxObserver());
        }
    }

    changeyBoxObserver() {
        if (this.observer) this.observer.disconnect();

        let header = document.querySelector('.navbar')
        const {
            top,
            height
        } = header.getBoundingClientRect();
        let options = {
            root: null,
            rootMargin: `-${top}px 0px -${window.innerHeight - top - (height - 5)}px 0px`,
            threshold: 0.05
        };

        this.observer = new IntersectionObserver(this.callback, options)

        this.sections.forEach(changeyBox => {
            this.observer.observe(changeyBox);
        });
    }

    callback(entries, observer) {
        let logos = [].slice.call(document.querySelectorAll(".scroller"))
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                if (!logos[0].classList.contains(entry.target.id)) {
                    let changeyBox = entry.target;
                    logos.forEach(logo => {
                        logo.classList = "scroller";
                        logo.classList.add(changeyBox.id)
                    })
                    history.pushState(null, null, `#${changeyBox.id}`);
                }
            }
        });
    }
}

export default ColourChanger;