
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

  function redirectWebsite(){
    window.location = "https://www.basmafaris.com";
  }

  var test1 = document.getElementById('test1');
  var test2 = document.getElementById('test2');
  var test3 = document.getElementById('test3');
  var test4 = document.getElementById('test4');
  var mainVideo = document.getElementById('main-video');

  function removeActive(){
    test1.classList.remove('active')
    test2.classList.remove('active')
    test3.classList.remove('active')
    test4.classList.remove('active')
  }


  function testimonial1(){
    removeActive();
    test1.classList.add('active');
    mainVideo.src = "https://iframe.videodelivery.net/bf04ea73c2d9ff1fdc7807a7d6ef729a?poster=https%3A%2F%2Fvideodelivery.net%2Fbf04ea73c2d9ff1fdc7807a7d6ef729a%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
  }

  function testimonial2(){
    removeActive();
    test2.classList.add('active');
    mainVideo.src = "https://iframe.videodelivery.net/973eb94f8e1e5d2a8b102693150be98c?poster=https%3A%2F%2Fvideodelivery.net%2F973eb94f8e1e5d2a8b102693150be98c%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
  }

  function testimonial3(){
    removeActive();
    test3.classList.add('active');
    mainVideo.src = "https://iframe.videodelivery.net/0be582fa2307e5451a72227aa98ac0e9?poster=https%3A%2F%2Fvideodelivery.net%2F0be582fa2307e5451a72227aa98ac0e9%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
  }

  function testimonial4(){
    removeActive();
    test4.classList.add('active');
    mainVideo.src = "https://iframe.videodelivery.net/e7a5c5de997124818c5366510c050de9?poster=https%3A%2F%2Fvideodelivery.net%2Fe7a5c5de997124818c5366510c050de9%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
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
