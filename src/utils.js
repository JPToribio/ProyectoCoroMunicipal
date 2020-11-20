function myFunction() {
     /*var vid = document.createElement("VIDEO");
  
    if (vid.canPlayType("video/mp4")) {
      vid.setAttribute("src","videos/video.mp4");
    } else {
      x.setAttribute("src","videos/video.ogg");
    }
  
    vid.setAttribute("width", "320");
    vid.setAttribute("height", "240");
    vid.setAttribute("controls", "controls");
    vid.autoplay = true;
    vid.loop = true;
  vid.muted = true;
    document.getElementById("div1").appendChild(vid);
  
  
  snd1.play(); snd2.play(); snd3.play(); snd4.play(); // Now both will play at the same time
  
  }
*/

vid.play(); snd1.play(); snd2.play(); snd3.play(); snd4.play();
}
function pause(){
  vid.pause(); snd1.pause(); snd2.pause(); snd3.pause(); snd4.pause();
}

function rewind(){
  vid.pause(); 
  vid.currentTime = 0;
  snd1.pause();
  snd1.currentTime = 0;
  snd2.pause();
  snd2.currentTime = 0;
  snd3.pause();
  snd3.currentTime = 0;
  snd4.pause();
  snd4.currentTime = 0;
}
var vid = document.getElementById("myVid");
vid.loop = true;

var snd1  = new Audio();
  var src1  = document.createElement("source");
  src1.type = "audio/mp3";
  src1.src  = "audio/sopranos.mp3";
  snd1.loop = true;
  snd1.appendChild(src1);
  
  var snd2  = new Audio();
  var src2  = document.createElement("source");
  src2.type = "audio/mp3";
  src2.src  = "audio/contraltos.mp3";
  snd2.loop = true;
  snd2.appendChild(src2);
  
  var snd3  = new Audio();
  var src3  = document.createElement("source");
  src3.type = "audio/mp3";
  src3.src  = "audio/tenores.mp3";
  snd3.loop = true;
  snd3.appendChild(src3);

  var snd4  = new Audio();
  var src4  = document.createElement("source");
  src4.type = "audio/mp3";
  src4.src  = "audio/bajos.mp3";
  snd4.loop = true;
  snd4.appendChild(src4);

  function enableDisableMute(x) { 
    if (x.muted === false){
      x.muted = true;
    }
    else {
      x.muted = false;
    }
    ;
  } 
  /*
  function change1()

  {
    if (document.getElementById("myButton1").value == "Sopranos") {
      document.getElementById("myButton1").value = "Sopranos";
    } else {
      document.getElementById("myButton1").value = "Sopranos";
    }
  }

  function change2()

  {
    if (document.getElementById("myButton2").value == "Contraltos") {
      document.getElementById("myButton2").value = "Contraltos";
    } else {
      document.getElementById("myButton2").value = "Contraltos";
    }
  }

  function change3()

  {
    if (document.getElementById("myButton3").value == "Tenores") {
      document.getElementById("myButton3").value = "Tenores";
    } else {
      document.getElementById("myButton3").value = "Tenores";
    }
  }

  function change4()

  {
    if (document.getElementById("myButton4").value == "Bajos") {
      document.getElementById("myButton4").value = "Bajos";
      
    } else {
      document.getElementById("myButton4").value = "Bajos";
    }
  }
*/

  function colorBtn1() {
    var btn1 = document.getElementById("myButton1");
    btn1.classList.toggle("button1");
    }

    function colorBtn2() {
      var btn2 = document.getElementById("myButton2");
      btn2.classList.toggle("button2");
      }

function colorBtn3() {
        var btn3 = document.getElementById("myButton3");
        btn3.classList.toggle("button3");
        }

function colorBtn4() {
          var btn4 = document.getElementById("myButton4");
          btn4.classList.toggle("button4");
          }

/* function img1() {
  var img1 = document.getElementById("img1");
  img1.classList.toggle("img1");
  }
  

function img2() {
  
  var img2 = document.getElementById("img2");
  img2.classList.toggle("img1");
  }

  function img3() {
    var img3 = document.getElementById("img3");
    img3.classList.toggle("img1");
    } */