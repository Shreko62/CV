function moveClouds(){
    /* clouds 1 & 2 move to the left 
       clouds 3 & 4 to the right */
     for(i = 1; i < 5; i++){
       var cloud = 
       document.getElementById("cloud" + i);
       cloud.style.transitionTimingFunction = "ease-out";
       cloud.style.transitionDuration = "700ms";
       var top =  window.getComputedStyle(cloud, null).getPropertyValue("top");
       
         topValue = parseInt(top);
         topValue = topValue - 20;
         top = topValue + "px";
      
       cloud.style.top = top;
       
       var left = window.getComputedStyle(cloud, null).getPropertyValue("left");
         leftValue = parseInt(left);
       
         if(i < 3){
           leftValue = leftValue - 30;
         }else {
           leftValue = leftValue + 30;
         }
         left = leftValue + "px";
       
       cloud.style.left = left;
      
     }
   }
  
/*PARTIE FIRST*/

// set up text to print, each item in array is new line
var aText = new Array(
  "Gordet Axel ", 
  
  
  );
  var iSpeed = 100; // time delay of print out
  var iIndex = 0; // start printing array at this posision
  var iArrLength = aText[0].length; // the length of the text array
  var iScrollAt = 20; // start scrolling up at this many lines
   
  var iTextPos = 0; // initialise text position
  var sContents = ''; // initialise contents variable
  var iRow; // initialise current row
   
  function typewriter()
  {
   sContents =  ' ';
   iRow = Math.max(0, iIndex-iScrollAt);
   var destination = document.getElementById("typedtext");
   
   while ( iRow < iIndex ) {
    sContents += aText[iRow++] + '<br />';
   }
   destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
   if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    if ( iIndex != aText.length ) {
     iArrLength = aText[iIndex].length;
     setTimeout("typewriter()", 500);
    }
   } else {
    setTimeout("typewriter()", iSpeed);
   }
  }
  
  
  typewriter();

  