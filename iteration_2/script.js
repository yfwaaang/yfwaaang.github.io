$(document).ready(function() { //always do this first. A special event 
  
  console.log('drawGridObjects')
  //function calls
  drawGridObjects();
  
  for (i = 0; i < 50; i++){





  //mouse interaction
  $('.element').mouseover(function(){
    $(this).css('background-color','#ff9900');
  });
  $('.element').mouseout(function(){
    $(this).css('background-color','#ff80bf');
  });
  setInterval(function(){
     rotateGridObjects();
   },1000);

  //-----------------------------------------------------------------------------------
  function drawGridObjects(){
    //append new element 200 times
    for(j = 0; j<100; j++){
      for(i = 0; i<20; i++){
        $("body").append( "<div class= 'element' style='left:" + i*5 + "vw; top:" + j*50 + "px;'></div>" );
        // console.log("element" + j + ", " + i + "added");
      }
    }
  }


  function drawRandomObject(){
    //store random values between 0 to 100, to rx and ry
    var rx = Math.floor(Math.random()*100);
    var ry = Math. floor(Math.random()*100);
    var rw = Math.floor(Math.random()*100);
    var rh = Math.floor(Math.random()*100);
    var color = "#000";
    if(ry < 50) {
      //ry is smaller than 50 =above the half
      color= "yellow";
    }
  

    else {
      //square is on the right, below the half
      color= "blue";
    }
    console.log("rx: " + rx + "ry:"+ ry);
    $("body").append( "<div class= 'element random' style='left:" + rx + "vw; top:" + ry + "vh; background-color:" + color +";'></div>" );  
  };
};
});





