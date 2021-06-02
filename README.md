# :control_knobs: j_h__music

My music site was initially built with Ruby & now rebuilt in Django.

__tl;dr:__
- webpack x Django! Sass! Lazy Load Images! Observer API! Full-screen-section-niceness!

- see the finished project [here](https://wambamjamham.com)

- favourite code snippet:
```JavaScript
    // Observer API for changing style of header logo according to viewport position
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
```

- what it looks like:

![portfolio screenshot](https://s3.eu-west-2.amazonaws.com/media.jh-portfolio/media/project_images/jh_music-1.png)
