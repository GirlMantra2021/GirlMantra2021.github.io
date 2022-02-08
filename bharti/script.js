var myVideo = document.getElementById('exampleVideo');
var video2 = document.getElementById('video2');
var video3 = document.getElementById('video3');

function playvid(){
    if (myVideo.paused) {
        myVideo.play();
        myVideo.controls = true;
        $('.c1').hide();
        // console.log('Video Playing');
    } else {
        myVideo.pause();
        myVideo.controls = false;
        $('.c1').show();
        // console.log('Video Paused');
    }
};

// $(myVideo).on('click touchstart', function() {
//     if(myVideo.paused){
//         $('.c1').show();
//         myVideo.controls = false;
//         $(myVideo).get(0).currentTime = 0;
//      }
// });

function check(){
    if(myVideo.paused){
        $('.c1').show();
        myVideo.controls = false;
        $(myVideo).get(0).currentTime = 0;
    }
}
//-------------------------------------------------------
function playvid2(){
    if (video2.paused) {
        video2.play();
        video2.controls = true;
        $('.c2').hide();
        // console.log('Video Playing');
    } else {
        video2.pause();
        video2.controls = false;
        $('.c2').show();
        // console.log('Video Paused');
    }
};

function check2(){
    if(video2.paused){
        $('.c2').show();
        video2.controls = false;
        $(video2).get(0).currentTime = 0;
    }
}

//-----------------------------------------------------------

function playvid3(){
    if (video3.paused) {
        video3.play();
        video3.controls = true;
        $('.c3').hide();
        // console.log('Video Playing');
    } else {
        video3.pause();
        video3.controls = false;
        $('.c3').show();
        // console.log('Video Paused');
    }
};

function check3(){
    if(video3.paused){
        $('.c3').show();
        video3.controls = false;
        $(video3).get(0).currentTime = 0;
    }
}