function splitScroll(){
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '300%',
        triggerElement: '.image-title',
        triggerHook: 0
    })
    .setPin('.image-title')
    .addIndicators()
    .addTo(controller);
}

splitScroll();


//Event-listner

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var image = document.getElementById("myImage");
    if (document.documentElement.scrollTop > 2500 && document.documentElement.scrollTop <3300 ){
        image.src = "assests/basma1.png";
        image.classList.add("animate__animated", "animate__fadeIn");
    }
    else if(document.documentElement.scrollTop > 3300 && document.documentElement.scrollTop <4100){
        image.src = "assests/basma2.png";
        image.classList.add("animate__animated", "animate__fadeIn");
    } else if(document.documentElement.scrollTop > 4100){
        image.src = "assests/basma7.png";
        image.classList.add("animate__animated", "animate__fadeIn");
    }
    else{
        image.src = "assests/chap3.png";
        image.classList.add("animate__animated", "animate__fadeIn");
    }
}
