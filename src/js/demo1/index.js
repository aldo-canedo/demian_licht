import { preloadImages } from '../utils';
import { Navigation } from '../navigation';
import { Slideshow } from './slideshow';

// Preload all images
preloadImages('.slide__img').then(() => {
    // remove loader (loading class) 
    document.body.classList.remove('loading');
    // initialize the slideshow and navigation
    const slideshow = new Slideshow(document.querySelector('.slideshow'));    
    const navigation = new Navigation(document.querySelector('.slides-nav'));
    const menu1=document.getElementById("1");
    const menu2=document.getElementById("2");
    const menu3=document.getElementById("3");
    const menu4=document.getElementById("4");
    const menu5=document.getElementById("5");
    const menu6=document.getElementById("6");
    const menu7=document.getElementById("7");
    const menu8=document.getElementById("8");
    const menu9=document.getElementById("9");
    
    
    console.log(menu1);
    // navigation events
    menu1.addEventListener('click', () => slideshow.uno());
    menu2.addEventListener('click', () => slideshow.dos());
    menu3.addEventListener('click', () => slideshow.tres());
    menu4.addEventListener('click', () => slideshow.cuatro());
    menu5.addEventListener('click', () => slideshow.cinco());
    menu6.addEventListener('click', () => slideshow.seis());
    menu7.addEventListener('click', () => slideshow.siete());
    menu8.addEventListener('click', () => slideshow.ocho());
    menu9.addEventListener('click', () => slideshow.nueve());

    navigation.DOM.ctrls.next.addEventListener('click', () => slideshow.next());
    navigation.DOM.ctrls.prev.addEventListener('click', () => slideshow.prev());
   
    // set the initial navigation current slide value
    navigation.updateCurrent(slideshow.current);
    // set the navigation total number of slides
    navigation.DOM.total.innerHTML = slideshow.current < 10 ? `0${slideshow.slidesTotal}` : slideshow.slidesTotal;
    // when a new slide is shown, update the navigation current slide value
    slideshow.on('updateCurrent', position => navigation.updateCurrent(position));
});