import "./main.scss";
import TargetBuilder from './components/ExternalLinks';
import BackgroundLoader from './components/Background';
import LazyLoader from './components/LazyLoad';
import ColourChanger from './components/SexAndMagic';

document.addEventListener('DOMContentLoaded', () => {
    const backyMcBackground = new BackgroundLoader();
    const clickyMcLinkerson = new TargetBuilder();
    const lazyMcLoaderson = new LazyLoader();
    const colourMcChangerson = new ColourChanger();
})