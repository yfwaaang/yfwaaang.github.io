$(document).ready(function(){ 

  //animate the aquare randomly
   animateDiv();
    

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $('.ball').height() - 50;
    var w = $('.ball').width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('.ball').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('.ball').animate({ top: newq[0], left: newq[1] }, speed, function(){
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

 });