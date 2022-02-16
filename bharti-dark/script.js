// import Waypoint from './waypoint/lib/noframework.waypoints'

function splitScroll(){
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '320%',
        triggerElement: '.image-title',
        triggerHook: 0
    })
    .setPin('.image-title')
    .addTo(controller);
}

splitScroll();



// //Event-listner

// window.onscroll = function () {
//     scrollFunction();
// };

// function scrollFunction() {
//     var image = document.getElementById("myImage");
//     if (document.documentElement.scrollTop > 2500 && document.documentElement.scrollTop <3300 ){
//         image.src = "assests/basma1.png";
//         image.classList.add("animate__animated", "animate__fadeIn");
//         image.classList.remove("animate__animated", "animate__fadeIn");
//         console.log(image.classList);
//     }
//     else if(document.documentElement.scrollTop > 3300 && document.documentElement.scrollTop <4100){
//         // image.classList.remove("animate__animated", "animate__fadeIn");
        
//         image.src = "assests/basma2.png";
//         image.classList.add("animate__animated", "animate__fadeIn");
//         image.classList.add("animate__animated", "animate__fadeIn");
        
//     } else if(document.documentElement.scrollTop > 4100){
//         // image.classList.remove("animate__animated", "animate__fadeIn");
//         image.src = "assests/basma7.png";
//         image.classList.add("animate__animated", "animate__fadeIn");
//     }
//     else{
//         // image.classList.remove("animate__animated", "animate__fadeIn");
//         image.src = "assests/chap3.png";
//         image.classList.add("animate__animated", "animate__fadeIn");
//     }
// }
