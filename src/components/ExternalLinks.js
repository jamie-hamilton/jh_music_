class TargetBuilder {
    constructor() {
        this.events()
    }

    events() {
        document.addEventListener('DOMContentLoaded',() => this.linkHandler())
    }
    linkHandler() {
        var links = document.links;
        for (var i = 0, linksLength = links.length; i < linksLength; i++) {
          if (links[i].hostname != window.location.hostname && !links[i].target) {
            links[i].target = "_blank";
            links[i].setAttribute("rel", "noopener noreferrer");
          }
        }
    }
}

export default TargetBuilder;