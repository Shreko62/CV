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
