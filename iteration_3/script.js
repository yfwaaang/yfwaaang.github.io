$(document).ready(function(){ 
  
  //get funtion on ball
 
  $('.ball').mouseover(function(){
    $(this).animate({
      width: '+=300px'
    });
  });
  $('.ball').mouseout(function(){
    $(this).animate({
      width: '-=300px'
    });
  });
  /* -------------------------------------------
  Code to run sequentially
  ----------------------------------------------- */
 $.getJSON("http://api.openweathermap.org/data/2.5/weather?zip=90210,us&appid=004f3a6544db0eca0337482ce30f67ff",function(result){

  var windSpeed = result.wind.speed;

  console.log("wind speed: " + windSpeed+  "meter/sec"); 

   drawGridObjects(windSpeed);
  /* -------------------------------------------
  Custom functions used above are defined below
  ----------------------------------------------- */
  function drawGridObjects(){
    //append new element 1000 times (50*20=1000)
    for (j = 0; j < 5; j++){
      for (i = 0; i < 8; i++) { 
        $("body").append( "<div class='element' style='left:" + i*5 + "vw; top:" + j*50 + "px;'></div>" );
        // console.log("element " + j + ", " + i + " added");
      }
    }
  }
     //mouse interaction
  $('.element').mouseover(function(){
    $(this).css('background-color', '#0073e6');
  });
  $('.element').mouseout(function(){
    $(this).css('background-color','#2eb8b8');
  });
  $('.element').click(function(){
    $(this).toggle(1000);
  });
 
 function rotateGridObjects(){
    //getting the time
    var now = new Date();
    var second = now.getSeconds();
    //console.log("currently: " + second);

    //rotating the elements
    $('.element').css('transform','rotate(' + second*6 + 'deg)');
    //console.log("degrees:" + second * 6);
  }



   setInterval(function(){
     rotateGridObjects();
     //console.log('function is running');
   },1000); 
  //drawRandomObject();

  });









  });
  


























