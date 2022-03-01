
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

var myVideo = document.getElementById('exampleVideo');
function playvid(){
    if (myVideo.paused) {
        myVideo.play();
        myVideo.controls = true;
        $('.c1').hide();
    } else {
        myVideo.pause();
        myVideo.controls = false;
        $('.c1').show();
    }
};
function check(){
    if(myVideo.paused){
        $('.c1').show();
        myVideo.controls = false;
        $(myVideo).get(0).currentTime = 0;
    }
}

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  function myFunction2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  function myFunction3() {
    var dots = document.getElementById("dots3");
    var moreText = document.getElementById("more3");
    var btnText = document.getElementById("myBtn3");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  function myFunction4() {
    var dots = document.getElementById("dots4");
    var moreText = document.getElementById("more4");
    var btnText = document.getElementById("myBtn4");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  function redirectYoutube(){
    window.location = "https://youtube.com/playlist?list=PL_UNwumabFwXn1JXG_kvPkj8DnIX-8639";
  }

  // let width = screen.width;
  // console.log(width);



  var A = document.querySelector('.A-test');
  var B = document.querySelector('.B-test'); 

  if(localStorage.getItem('x-value')===null){
    x = Math.floor(Math.random() * 2);
    localStorage.setItem('x-value',x);
  }

  
  // console.log('x = ', x);
  if(localStorage.getItem('x-value')!=null){
    if(localStorage.getItem('x-value')==0){
      // renders A section 
      B.classList.add('off')
    } else if (localStorage.getItem('x-value')==1){
      // renders B Section
      A.classList.add('off');
    }
  }
