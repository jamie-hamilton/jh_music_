class LazyLoader {
    constructor() {
        this.loader;
        this.events()
    }

    events() {
        if ("IntersectionObserver" in window) {
            this.loader = this.lazyLoadObserver
        } else {
            this.loader = this.lazyload
        }
        this.loader()
    }

    lazyLoadObserver() {
        var lazyImages = [].slice.call(document.querySelectorAll("img.lazy-img"));
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    setTimeout(function() {
                        let lazyImage = entry.target;
                        lazyImage.src = lazyImage.dataset.src;
                        lazyImage.classList.remove("lazy-img");
                        lazyImageObserver.unobserve(lazyImage);
                    }, 250)
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    }

    lazyload() {
        let lazyImages = [].slice.call(document.querySelectorAll("img.lazy-img"));
        let active = false;

        const lazyLoader = function() {
            if (active === false) {
                active = true;

                setTimeout(function() {
                    lazyImages.forEach(function(lazyImage) {
                        if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
                            setTimeout(function() {
                                lazyImage.src = lazyImage.dataset.src;
                                lazyImage.classList.remove("lazy-img");

                                lazyImages = lazyImages.filter(function(image) {
                                    return image !== lazyImage;
                                });

                                if (lazyImages.length === 0) {
                                    document.removeEventListener("scroll", lazyLoader);
                                    window.removeEventListener("resize", lazyLoader);
                                    window.removeEventListener("orientationchange", lazyLoader);
                                }
                            }, 250)
                        }
                    });

                    active = false;
                }, 200);
            }
        };

        document.addEventListener("scroll", lazyLoader);
        window.addEventListener("resize", lazyLoader);
        window.addEventListener("orientationchange", lazyLoader);
    }
}

export default LazyLoader;