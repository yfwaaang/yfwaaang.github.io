$(document).ready(function(){ 

  drawGridObjects();  
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



//------------------------------------------------------------------------------------------------------
  //animate the aquare randomly
   animateDiv();
    

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $('.square').height() - 50;
    var w = $('.square').width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('.square').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('.square').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();        
    });
    
}

function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}
  /* ----------------------------------------------------------------------------------------
  Code to run sequentially
  ----------------------------------------------- */
  /*
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?zip=90210,us&appid=004f3a6544db0eca0337482ce30f67ff",function(result){

  var windSpeed = result.wind.speed;

  console.log("wind speed: " + windSpeed+  "meter/sec"); 
  */
  
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
