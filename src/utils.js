

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
  
  function change1()

  {
    if (document.getElementById("myButton1").innerHTML == "Mutear Sopranos") {
      document.getElementById("myButton1").innerHTML = "Desmutear Sopranos";
      document.getElementById("myButton1").style.opacity = "0.5";
    } else {
      document.getElementById("myButton1").innerHTML = "Mutear Sopranos";
      document.getElementById("myButton1").style.opacity = "1.0";
    }
  }

  function change2()

  {
    if (document.getElementById("myButton2").innerHTML == "Mutear Contraltos") {
      document.getElementById("myButton2").innerHTML = "Desmutear Contraltos";
      document.getElementById("myButton2").style.opacity = "0.5";
    } else {
      document.getElementById("myButton2").innerHTML = "Mutear Contraltos";
      document.getElementById("myButton2").style.opacity = "1.0";
    }
  }

  function change3()

  {
    if (document.getElementById("myButton3").innerHTML == "Mutear Tenores") {
      document.getElementById("myButton3").innerHTML = "Desmutear Tenores";
      document.getElementById("myButton3").style.opacity = "0.5";
    } else {
      document.getElementById("myButton3").innerHTML = "Mutear Tenores";
      document.getElementById("myButton3").style.opacity = "1.0";
    }
  }

  
  function change4()

  {
    if (document.getElementById("myButton4").innerHTML == "Mutear Bajos") {
      document.getElementById("myButton4").innerHTML = "Desmutear Bajos";
      document.getElementById("myButton4").style.opacity = "0.5";
    } else {
      document.getElementById("myButton4").innerHTML = "Mutear Bajos";
      document.getElementById("myButton4").style.opacity = "1.0";
    }
  }


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


    function myFunction() {
      if (vid.readyState == 4 && snd1.readyState == 4 && snd2.readyState == 4 && snd3.readyState == 4 && snd4.readyState == 4) {
        vid.play(); snd1.play(); snd2.play(); snd3.play(); snd4.play();
      } else {
        alert ("Por favor, esperar a que todos los audios estén cargados y volver a reproducir");
      }
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