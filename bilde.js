const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const artikkel = intro.querySelector("article");


//scroll magic
const controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
    duration: 10000,
    triggerElement: intro,
    triggerHook: 0,
})
/* .addIndicators() */
.setPin(intro)
.addTo(controller);


let accelamount = 0.3;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
    scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollpos - delay)* accelamount;
    console.log(scrollpos, delay);

    video.currentTime = delay;
}, 55);