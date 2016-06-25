

/*------------------------Loading Gif File------------------------*/

$(".loading_img").hide();
$("#loadindgif").on("click",function(){
   $(".loading_img").show();
   window.localStorage["myprofile"]=0;
   window.location.href = "../templete/insight.html";
});

/*---------------------------Profile select----------------------*/

$("#myprofile").on("click",function(){
    window.localStorage["myprofile"]=1;
    window.location.href = "../templete/self-profile.html"
});
$("#whose").on("click",function(){
    $(".loading_img").show();
    window.localStorage["myprofile"]=0;
    window.location.href = "../templete/insight.html"
});

/*------------------------Dropdown Menu------------------------*/

$(".dropdown").hide();
var dropx = 0;

$("#dropdownmenu").on("click",function(){  
  if (dropx == 0) {
    $(".dropdown").show();
    dropx = 1;
  }else{
    $(".dropdown").hide();
    dropx = 0;
  } 
});
$("#undrop").on("click",function(){
  if (dropx == 1) {
    $(".dropdown").hide(); 
    dropx = 0;
  };  
});

/*-----------------Meditation Type Select-------------------*/

var medisele = 0;
if (localStorage["listmed"]==1) {
    $("#play_button1, #play_button2, #play_button3, #play_button4, #play_button5, #play_button6, #play_button7, #play_button8").hide();
    $("#time_text1, #time_text2, #time_text3, #time_text4, #time_text5, #time_text6, #time_text7, #time_text8").hide();
    $("#left1, #left2, #left3, #left4, #left5, #left6, #left7, #left8").show();    
    $("#right1, #right2, #right3, #right4, #right5, #right6, #right7, #right8").hide();   
}else{
    $("#play_button1, #play_button2, #play_button3, #play_button4, #play_button5, #play_button6, #play_button7, #play_button8").show();   
    $("#time_text1, #time_text2, #time_text3, #time_text4, #time_text5, #time_text6, #time_text7, #time_text8").show();    
    $("#left1, #left2, #left3, #left4, #left5, #left6, #left7, #left8").hide();   
    $("#right1, #right2, #right3, #right4, #right5, #right6, #right7, #right8").show();
}

$("#atten").on("click",function(){
   $("#atten").css("background","#e24f55");
   $("#concen, #senso, #medi").css("background", "white");
   medisele = 1;
});
$("#concen").on("click",function(){
   $("#concen").css("background","#e24f55");
   $("#atten, #senso, #medi").css("background", "white");
   medisele = 2;
});
$("#senso").on("click",function(){
   $("#senso").css("background","#e24f55");
   $("#atten, #concen, #medi").css("background", "white");
   medisele = 3;
});
$("#medi").on("click",function(){
   $("#medi").css("background","#e24f55");
   $("#atten, #senso, #concen").css("background", "white");
   medisele = 4;
});

/*---------------Meditation And Meditation List discrimination--------------*/

$("#listmed").on("click",function(){
    window.localStorage["listmed"]=1;
});
$("#startbutton").on("click",function(){
    window.localStorage["listmed"]=0;
});

/*-----------------Maditation Run Button Event--------------------------*/

$("#go1").on("click",function(){
    switch(medisele){
        case 1:
          window.location.href = "../templete/candle.html";
          break;
        case 2:
           window.location.href = "../templete/concentration.html";
           break;
        case 3:
           window.location.href = "../templete/sensory-per.html";
           break;
        case 4:
           window.location.href = "../templete/meditation-ex.html";
           break;
    }
});

/*----------------------ATTENTION Meditation Time Count--------------------------*/

var datetime = 0;
var datetime1 = 0;
var second = 59;
var minute1 = 2;
var minute2 = 4;
var second_end = 0;

$("#play_button1").on("click",function(){
  window.localStorage["setnum"]=1;
  var myAudio1 = document.getElementById("myAudio1");
  if (myAudio1.paused) {
    myAudio1.play();
    updatetime1();
    updatetime9();
    $("#play_button1").css("background","red");
    setTimeout(function(){
    myAudio1.pause();
    window.location.href = "../templete/rate.html";  
    },3000);
  } else {
    myAudio1.pause();
    clearTimeout(datetime);
    clearTimeout(datetime1);
    $("#play_button1").css("background","blue");
    clearTimeout(myAudio1.paused);
  }  
});
function updatetime1(){
  if (second < 10) {
    $("#time_text1").html('0' + minute1 + ":" + '0' + second);
  }else{
    $("#time_text1").html('0' + minute1 + ":" + second);
  };
  if(second == 0){
    second = 59;
    minute1--;
  }else{
    second--;
  }
  datetime = setTimeout(updatetime1, 1000);
}

/*------------------------Total Meditation Time Count---------------------------*/

function updatetime9(){ 
    window.localStorage["second_end"] = second_end;
    second_end++;
    datetime1 = setTimeout(updatetime9, 1000);
}

/*-------------------Concentration Meditation Time count------------------------*/

$("#play_button2").on("click",function(){
  window.localStorage["setnum"]=2;
  var myAudio2 = document.getElementById("myAudio2");
  if (myAudio2.paused) {
    myAudio2.play();
    updatetime2();
    updatetime9();
    $("#play_button2").css("background","red");
    setTimeout(function(){
    myAudio2.pause();
    window.location.href = "../templete/rate.html";
    },300000);
  } else {
    myAudio2.pause();
    clearTimeout(datetime);
    $("#play_button2").css("background","blue");
    clearTimeout(myAudio2.paused);
  }  
});
function updatetime2(){
    if (second < 10) {
      $("#time_text2").html('0' + minute2 + ":" + '0' + second);
    }else{
      $("#time_text2").html('0' + minute2 + ":" + second);
    };
    if(second == 0){
        second = 59;
        minute2--;
    }else{
        second--;
    }
    datetime = setTimeout(updatetime2, 1000);
}

/*------------------Sensory-Sight Meditation Time count--------------------*/

$("#play_button3").on("click",function(){
  window.localStorage["setnum"]=3;
  var myAudio3 = document.getElementById("myAudio3");
  if (myAudio3.paused) {
    myAudio3.play();
    updatetime3();
    updatetime9();
    $("#play_button3").css("background","red");
    setTimeout(function(){
    myAudio3.pause();
    window.location.href = "../templete/rate.html";
    },300000);
  } else {
    myAudio3.pause();
    clearTimeout(datetime);
    $("#play_button3").css("background","blue");
    clearTimeout(myAudio3.paused);
  }  
});
function updatetime3(){
    if (second < 10) {
      $("#time_text3").html('0' + minute2 + ":" + '0' + second);
    }else{
      $("#time_text3").html('0' + minute2 + ":" + second);
    };
    if(second == 0){
        second = 59;
        minute2--;
    }else{
        second--;
    }
    datetime = setTimeout(updatetime3, 1000);
}

/*-------------------Sensory-Smell Meditation Time count----------------------*/

$("#play_button4").on("click",function(){
  window.localStorage["setnum"]=4;
  var myAudio4 = document.getElementById("myAudio4");
  if (myAudio4.paused) {
    myAudio4.play();
    updatetime4();
    updatetime9();
    $("#play_button4").css("background","red");
    setTimeout(function(){
    myAudio4.pause();
    window.location.href = "../templete/rate.html";
    },300000);
  } else {
    myAudio4.pause();
    clearTimeout(datetime);
    $("#play_button4").css("background","blue");
    clearTimeout(myAudio4.paused);
  }  
});
function updatetime4(){
    if (second < 10) {
      $("#time_text4").html('0' + minute2 + ":" + '0' + second);
    }else{
      $("#time_text4").html('0' + minute2 + ":" + second);
    };
    if(second == 0){
        second = 59;
        minute2--;
    }else{
        second--;
    }
    datetime = setTimeout(updatetime4, 1000);
}

/*-------------------Sensory-Sound Meditation Time count----------------------*/

$("#play_button5").on("click",function(){
  window.localStorage["setnum"]=5;
  var myAudio5 = document.getElementById("myAudio5");
  if (myAudio5.paused) {
    myAudio5.play();
    updatetime5();
    updatetime9();
    $("#play_button5").css("background","red");
    setTimeout(function(){
    myAudio5.pause();
    window.location.href = "../templete/rate.html";
    },300000);
  } else {
    myAudio5.pause();
    clearTimeout(datetime);
    $("#play_button5").css("background","blue");
    clearTimeout(myAudio5.paused);
  } 
});
function updatetime5(){
    if (second < 10) {
      $("#time_text5").html('0' + minute2 + ":" + '0' + second);
    }else{
      $("#time_text5").html('0' + minute2 + ":" + second);
    };
    if(second == 0){
        second = 59;
        minute2--;
    }else{
        second--;
    }
    datetime = setTimeout(updatetime5, 1000);
}

/*-------------------Sensory-Taste Meditation Time count----------------------*/

$("#play_button6").on("click",function(){
  window.localStorage["setnum"]=6;
  var myAudio6 = document.getElementById("myAudio6");
  if (myAudio6.paused) {
    myAudio6.play();
    updatetime6();
    updatetime9();
    $("#play_button6").css("background","red");
    setTimeout(function(){
    myAudio6.pause();
    window.location.href = "../templete/rate.html";
    },300000);
  } else {
    myAudio6.pause();
    clearTimeout(datetime);
    $("#play_button6").css("background","blue");
    clearTimeout(myAudio6.paused);
  }  
});
function updatetime6(){
    if (second < 10) {
      $("#time_text6").html('0' + minute2 + ":" + '0' + second);
    }else{
      $("#time_text6").html('0' + minute2 + ":" + second);
    };
    if(second == 0){
        second = 59;
        minute2--;
    }else{
        second--;
    }
    datetime = setTimeout(updatetime6, 1000);
}

/*-------------------Sensory-Touch Meditation Time count----------------------*/

$("#play_button7").on("click",function(){
  window.localStorage["setnum"]=7;
  var myAudio7 = document.getElementById("myAudio7");
  if (myAudio7.paused) {
    myAudio7.play();
    updatetime7();
    updatetime9();
    $("#play_button7").css("background","red");
    setTimeout(function(){
    myAudio7.pause();
    window.location.href = "../templete/rate.html";
    },300000);
  } else {
    myAudio7.pause();
    clearTimeout(datetime);
    $("#play_button7").css("background","blue");
    clearTimeout(myAudio7.paused);
  } 
});
function updatetime7(){
    if (second < 10) {
      $("#time_text7").html('0' + minute2 + ":" + '0' + second);
    }else{
      $("#time_text7").html('0' + minute2 + ":" + second);
    };
    if(second == 0){
        second = 59;
        minute2--;
    }else{
        second--;
    }
    datetime = setTimeout(updatetime7, 1000);
}

/*-------------------Exercise Meditation Time count----------------------*/

$("#play_button8").on("click",function(){
  window.localStorage["setnum"]=8;
  var myAudio8 = document.getElementById("myAudio8");
  if (myAudio8.paused) {
    myAudio8.play();
    updatetime8();
    updatetime9();
    $("#play_button8").css("background","red");
    setTimeout(function(){
    myAudio8.pause();
    window.location.href = "../templete/rate.html";
    },300000);
  } else {
    myAudio8.pause();
    clearTimeout(datetime);
    $("#play_button8").css("background","blue");
    clearTimeout(myAudio8.paused);
  }  
});
function updatetime8(){
    if (second < 10) {
      $("#time_text8").html('0' + minute2 + ":" + '0' + second);
    }else{
      $("#time_text8").html('0' + minute2 + ":" + second);
    };
    if(second == 0){
        second = 59;
        minute2--;
    }else{
        second--;
    }
    datetime = setTimeout(updatetime8, 1000);
}

/*-------------------------Rate Calculating-----------------------------*/

var men_row = 0;
var phy_row = 0;
var rate_count = 0;
var totalcount = 0;

$("#sel-row1").on("click",function(){
    $("#sel-row1").css("background","#ff6853");
    $("#sel-row2, #sel-row3, #sel-row4, #sel-row5").css("background","#f4f4f4");   
    men_row = 5;
    if (phy_row > 0) {
        rate_count = (men_row + phy_row)/2;
        window.location.href = "../templete/progress.html";
        var aa=Number(localStorage.getItem("count123"));
        localStorage.setItem("count123",aa+1);
        switch(phy_row){
            case 1:
              window.localStorage["sticker"] = 21;
              break;
            case 2:
              window.localStorage["sticker"] = 22;
              break;
            case 3:
              window.localStorage["sticker"] = 23;
              break;
            case 4:
              window.localStorage["sticker"] = 24;
              break;
            case 5:
              window.localStorage["sticker"] = 25;
              break;
        }
        switch(to_day){
           case 1:
              window.localStorage["ratecount1"] = rate_count;
              break;
           case 2:
              window.localStorage["ratecount2"] = rate_count;
              break;
           case 3:
              window.localStorage["ratecount3"] = rate_count;
              break;
           case 4:
              window.localStorage["ratecount4"] = rate_count;
              break;
           case 5:
              window.localStorage["ratecount5"] = rate_count;
              break;
           case 6:
              window.localStorage["ratecount6"] = rate_count;
              break;
           case 7:
              window.localStorage["ratecount7"] = rate_count;
              break;
        }
        var bb=Number(localStorage.getItem("count_second"));
        localStorage.setItem("count_second",bb+Number(window.localStorage["second_end"]));
    }
});

//---------------------------------------------------------------//

$("#sel-row2").on("click",function(){
    $("#sel-row2").css("background","#ff6853");
    $("#sel-row1, #sel-row3, #sel-row4, #sel-row5").css("background","#f4f4f4");   
    men_row = 4;
    if (phy_row > 0) {
        rate_count = (men_row + phy_row)/2;       
        window.location.href = "../templete/progress.html";
        var aa=Number(localStorage.getItem("count123"));
        localStorage.setItem("count123",aa+1);
        switch(phy_row){
            case 1:
              window.localStorage["sticker"] = 20;
              break;
            case 2:
              window.localStorage["sticker"] = 19;
              break;
            case 3:
              window.localStorage["sticker"] = 18;
              break;
            case 4:
              window.localStorage["sticker"] = 17;
              break;
            case 5:
              window.localStorage["sticker"] = 16;
              break;
        }
        switch(to_day){
           case 1:
              window.localStorage["ratecount1"] = rate_count;
              break;
           case 2:
              window.localStorage["ratecount2"] = rate_count;
              break;
           case 3:
              window.localStorage["ratecount3"] = rate_count;
              break;
           case 4:
              window.localStorage["ratecount4"] = rate_count;
              break;
           case 5:
              window.localStorage["ratecount5"] = rate_count;
              break;
           case 6:
              window.localStorage["ratecount6"] = rate_count;
              break;
           case 7:
              window.localStorage["ratecount7"] = rate_count;
              break;
        }
        var bb=Number(localStorage.getItem("count_second"));
        localStorage.setItem("count_second",bb+Number(window.localStorage["second_end"]));
    }
});

//---------------------------------------------------------------//

$("#sel-row3").on("click",function(){
    $("#sel-row3").css("background","#ff6853");
    $("#sel-row2, #sel-row1, #sel-row4, #sel-row5").css("background","#f4f4f4");   
    men_row = 3;
    if (phy_row > 0) {
        rate_count = (men_row + phy_row)/2;       
        window.location.href = "../templete/progress.html";
        var aa=Number(localStorage.getItem("count123"));
        localStorage.setItem("count123",aa+1);
        switch(phy_row){
            case 1:
              window.localStorage["sticker"] = 15;
              break;
            case 2:
              window.localStorage["sticker"] = 14;
              break;
            case 3:
              window.localStorage["sticker"] = 13;
              break;
            case 4:
              window.localStorage["sticker"] = 12;
              break;
            case 5:
              window.localStorage["sticker"] = 11;
              break;
        }
        switch(to_day){
           case 1:
              window.localStorage["ratecount1"] = rate_count;
              break;
           case 2:
              window.localStorage["ratecount2"] = rate_count;
              break;
           case 3:
              window.localStorage["ratecount3"] = rate_count;
              break;
           case 4:
              window.localStorage["ratecount4"] = rate_count;
              break;
           case 5:
              window.localStorage["ratecount5"] = rate_count;
              break;
           case 6:
              window.localStorage["ratecount6"] = rate_count;
              break;
           case 7:
              window.localStorage["ratecount7"] = rate_count;
              break;
        }
        var bb=Number(localStorage.getItem("count_second"));
        localStorage.setItem("count_second",bb+Number(window.localStorage["second_end"]));
    }
});

//-------------------------------------------------------------------//

$("#sel-row4").on("click",function(){
    $("#sel-row4").css("background","#ff6853");
    $("#sel-row2, #sel-row3, #sel-row1, #sel-row5").css("background","#f4f4f4");   
    men_row = 2;
    if (phy_row > 0) {
        rate_count = (men_row + phy_row)/2;        
        window.location.href = "../templete/progress.html";
        var aa=Number(localStorage.getItem("count123"));
        localStorage.setItem("count123",aa+1);
        switch(phy_row){
            case 1:
              window.localStorage["sticker"] = 10;
              break;
            case 2:
              window.localStorage["sticker"] = 9;
              break;
            case 3:
              window.localStorage["sticker"] = 8;
              break;
            case 4:
              window.localStorage["sticker"] = 7;
              break;
            case 5:
              window.localStorage["sticker"] = 6;
              break;
        }
        switch(to_day){
           case 1:
              window.localStorage["ratecount1"] = rate_count;
              break;
           case 2:
              window.localStorage["ratecount2"] = rate_count;
              break;
           case 3:
              window.localStorage["ratecount3"] = rate_count;
              break;
           case 4:
              window.localStorage["ratecount4"] = rate_count;
              break;
           case 5:
              window.localStorage["ratecount5"] = rate_count;
              break;
           case 6:
              window.localStorage["ratecount6"] = rate_count;
              break;
           case 7:
              window.localStorage["ratecount7"] = rate_count;
              break;
        }
        var bb=Number(localStorage.getItem("count_second"));
        localStorage.setItem("count_second",bb+Number(window.localStorage["second_end"]));
    }
});

//-----------------------------------------------------------------//

$("#sel-row5").on("click",function(){
    $("#sel-row5").css("background","#ff6853");
    $("#sel-row2, #sel-row3, #sel-row4, #sel-row1").css("background","#f4f4f4");   
    men_row = 1;
    if (phy_row > 0) {
        rate_count = (men_row + phy_row)/2;        
        window.location.href = "../templete/progress.html";
        var aa=Number(localStorage.getItem("count123"));
        localStorage.setItem("count123",aa+1);
        switch(phy_row){
            case 1:
              window.localStorage["sticker"] = 5;
              break;
            case 2:
              window.localStorage["sticker"] = 4;
              break;
            case 3:
              window.localStorage["sticker"] = 3;
              break;
            case 4:
              window.localStorage["sticker"] = 2;
              break;
            case 5:
              window.localStorage["sticker"] = 1;
              break;
        }
        switch(to_day){
           case 1:
              window.localStorage["ratecount1"] = rate_count;
              break;
           case 2:
              window.localStorage["ratecount2"] = rate_count;
              break;
           case 3:
              window.localStorage["ratecount3"] = rate_count;
              break;
           case 4:
              window.localStorage["ratecount4"] = rate_count;
              break;
           case 5:
              window.localStorage["ratecount5"] = rate_count;
              break;
           case 6:
              window.localStorage["ratecount6"] = rate_count;
              break;
           case 7:
              window.localStorage["ratecount7"] = rate_count;
              break;
        }
        var bb=Number(localStorage.getItem("count_second"));
        localStorage.setItem("count_second",bb+Number(window.localStorage["second_end"]));
    }
});

//-------------------------------------------------------------------//

$("#sel-row6").on("click",function(){
    $("#sel-row6").css("background","#ff6853");
    $("#sel-row7, #sel-row8, #sel-row9, #sel-row10").css("background","#f4f4f4");   
    phy_row = 5;
    if (men_row > 0) {
        rate_count = (men_row + phy_row)/2;        
        window.location.href = "../templete/progress.html";
        var aa=Number(localStorage.getItem("count123"));
        localStorage.setItem("count123",aa+1);
        switch(men_row){
            case 1:
              window.localStorage["sticker"] = 5;
              break;
            case 2:
              window.localStorage["sticker"] = 10;
              break;
            case 3:
              window.localStorage["sticker"] = 15;
              break;
            case 4:
              window.localStorage["sticker"] = 20;
              break;
            case 5:
              window.localStorage["sticker"] = 25;
              break;
        }
        switch(to_day){
           case 1:
              window.localStorage["ratecount1"] = rate_count;
              break;
           case 2:
              window.localStorage["ratecount2"] = rate_count;
              break;
           case 3:
              window.localStorage["ratecount3"] = rate_count;
              break;
           case 4:
              window.localStorage["ratecount4"] = rate_count;
              break;
           case 5:
              window.localStorage["ratecount5"] = rate_count;
              break;
           case 6:
              window.localStorage["ratecount6"] = rate_count;
              break;
           case 7:
              window.localStorage["ratecount7"] = rate_count;
              break;
        }
        var bb=Number(localStorage.getItem("count_second"));
        localStorage.setItem("count_second",bb+Number(window.localStorage["second_end"]));     
    }
});

//----------------------------------------------------------------//

$("#sel-row7").on("click",function(){
    $("#sel-row7").css("background","#ff6853");
    $("#sel-row6, #sel-row8, #sel-row9, #sel-row10").css("background","#f4f4f4");   
    phy_row = 4;
    if (men_row > 0) {
        rate_count = (men_row + phy_row)/2;       
        window.location.href = "../templete/progress.html";
        var aa=Number(localStorage.getItem("count123"));
        localStorage.setItem("count123",aa+1);
        switch(men_row){
            case 1:
              window.localStorage["sticker"] = 4;
              break;
            case 2:
              window.localStorage["sticker"] = 9;
              break;
            case 3:
              window.localStorage["sticker"] = 14;
              break;
            case 4:
              window.localStorage["sticker"] = 19;
              break;
            case 5:
              window.localStorage["sticker"] = 24;
              break;
        }
        switch(to_day){
           case 1:
              window.localStorage["ratecount1"] = rate_count;
              break;
           case 2:
              window.localStorage["ratecount2"] = rate_count;
              break;
           case 3:
              window.localStorage["ratecount3"] = rate_count;
              break;
           case 4:
              window.localStorage["ratecount4"] = rate_count;
              break;
           case 5:
              window.localStorage["ratecount5"] = rate_count;
              break;
           case 6:
              window.localStorage["ratecount6"] = rate_count;
              break;
           case 7:
              window.localStorage["ratecount7"] = rate_count;
              break;
        }
        var bb=Number(localStorage.getItem("count_second"));
        localStorage.setItem("count_second",bb+Number(window.localStorage["second_end"]));     
    }
});

//--------------------------------------------------------------//

$("#sel-row8").on("click",function(){
    $("#sel-row8").css("background","#ff6853");
    $("#sel-row7, #sel-row6, #sel-row9, #sel-row10").css("background","#f4f4f4");   
    phy_row = 3;
    if (men_row > 0) {
        rate_count = (men_row + phy_row)/2;       
        window.location.href = "../templete/progress.html";
        var aa=Number(localStorage.getItem("count123"));
        localStorage.setItem("count123",aa+1);
        switch(men_row){
            case 1:
              window.localStorage["sticker"] = 3;
              break;
            case 2:
              window.localStorage["sticker"] = 8;
              break;
            case 3:
              window.localStorage["sticker"] = 13;
              break;
            case 4:
              window.localStorage["sticker"] = 18;
              break;
            case 5:
              window.localStorage["sticker"] = 23;
              break;
        }
        switch(to_day){
           case 1:
              window.localStorage["ratecount1"] = rate_count;
              break;
           case 2:
              window.localStorage["ratecount2"] = rate_count;
              break;
           case 3:
              window.localStorage["ratecount3"] = rate_count;
              break;
           case 4:
              window.localStorage["ratecount4"] = rate_count;
              break;
           case 5:
              window.localStorage["ratecount5"] = rate_count;
              break;
           case 6:
              window.localStorage["ratecount6"] = rate_count;
              break;
           case 7:
              window.localStorage["ratecount7"] = rate_count;
              break;
        }
        var bb=Number(localStorage.getItem("count_second"));
        localStorage.setItem("count_second",bb+Number(window.localStorage["second_end"]));      
    }
});

//-----------------------------------------------------------------------//

$("#sel-row9").on("click",function(){
    $("#sel-row9").css("background","#ff6853");
    $("#sel-row7, #sel-row8, #sel-row6, #sel-row10").css("background","#f4f4f4");   
    phy_row = 2;
    if (men_row > 0) {
        rate_count = (men_row + phy_row)/2;        
        window.location.href = "../templete/progress.html";
        var aa=Number(localStorage.getItem("count123"));
        localStorage.setItem("count123",aa+1);
        switch(men_row){
            case 1:
              window.localStorage["sticker"] = 2;
              break;
            case 2:
              window.localStorage["sticker"] = 7;
              break;
            case 3:
              window.localStorage["sticker"] = 12;
              break;
            case 4:
              window.localStorage["sticker"] = 17;
              break;
            case 5:
              window.localStorage["sticker"] = 22;
              break;
        }
        switch(to_day){
           case 1:
              window.localStorage["ratecount1"] = rate_count;
              break;
           case 2:
              window.localStorage["ratecount2"] = rate_count;
              break;
           case 3:
              window.localStorage["ratecount3"] = rate_count;
              break;
           case 4:
              window.localStorage["ratecount4"] = rate_count;
              break;
           case 5:
              window.localStorage["ratecount5"] = rate_count;
              break;
           case 6:
              window.localStorage["ratecount6"] = rate_count;
              break;
           case 7:
              window.localStorage["ratecount7"] = rate_count;
              break;
        }
        var bb=Number(localStorage.getItem("count_second"));
        localStorage.setItem("count_second",bb+Number(window.localStorage["second_end"]));      
    }
});

//------------------------------------------------------------------//

var sticker = [];
$("#sel-row10").on("click",function(){
    $("#sel-row10").css("background","#ff6853");
    $("#sel-row7, #sel-row8, #sel-row9, #sel-row6").css("background","#f4f4f4");   
    phy_row = 1;
    if (men_row > 0) {
        rate_count = (men_row + phy_row)/2;       
        window.location.href = "../templete/progress.html";        
        var aa=Number(localStorage.getItem("count123"));
        localStorage.setItem("count123",aa+1);
        switch(men_row){
            case 1:
              window.localStorage["sticker"] = 1;
              break;
            case 2:
              window.localStorage["sticker"] = 6;
              break;
            case 3:
              window.localStorage["sticker"] = 11;
              break;
            case 4:
              window.localStorage["sticker"] = 16;
              break;
            case 5:
              window.localStorage["sticker"] = 21;
              break;
        }
        switch(to_day){
           case 1:
              window.localStorage["ratecount1"] = rate_count;
              break;
           case 2:
              window.localStorage["ratecount2"] = rate_count;
              break;
           case 3:
              window.localStorage["ratecount3"] = rate_count;
              break;
           case 4:
              window.localStorage["ratecount4"] = rate_count;
              break;
           case 5:
              window.localStorage["ratecount5"] = rate_count;
              break;
           case 6:
              window.localStorage["ratecount6"] = rate_count;
              break;
           case 7:
              window.localStorage["ratecount7"] = rate_count;
              break;
        }
        var bb=Number(localStorage.getItem("count_second"));
        localStorage.setItem("count_second",bb+Number(window.localStorage["second_end"]));      
    }
});

/*-------------------------------Disply1 (Date)--------------------------------*/

//localStorage.setItem("count123",0);
//window.localStorage["sticker"] = 0;
var today = new Date();
var dd = today.getDate();
var mm1 = today.getMonth()+1; //January is 0!
//alert(mm1);
var mm2 = [];//next month;
var ff = [];
ff[1] = dd - today.getDay(); // First day is the day of the month - the day of the week
mm2[1] = mm1;
for (var i = 2; i < 8; i++) {
  ff[i] = ff[i-1] + 1;
  mm2[i] = mm2[i-1];
  switch(mm1){
      case 1: case 3: case 5: case 7: case 8: case 10:
        if (ff[i-1]==31) {
          ff[i]=1;
          mm2[i]=mm1+1;
        }
        break;
      case 2:
        if(ff[i-1]==28){
          ff[i]=1;
          mm2[i]=mm1+1;
        }
        break;
      case 4: case 6: case 9: case 11:
        if(ff[i-1]==30){
          ff[i]=1;
          mm2[i]=mm1+1;
        }
        break;
      case 12:
        if(ff[i-1]==31){
          ff[i]=1;
          mm2[i]=1;
        }
        break;
  }
};
var week_first = mm1*100 + dd;
//alert(week_first);
//window.localStorage["week_end"] = 0;
//alert(window.localStorage["week_end"]);
if (week_first > window.localStorage["week_end"]) {
  window.localStorage["ratecount1"] = 0;
  window.localStorage["ratecount2"] = 0;
  window.localStorage["ratecount3"] = 0;
  window.localStorage["ratecount4"] = 0;
  window.localStorage["ratecount5"] = 0;
  window.localStorage["ratecount6"] = 0;
  window.localStorage["ratecount7"] = 0;
  window.localStorage["today_sticker1"] = 0;
  window.localStorage["today_sticker2"] = 0;
  window.localStorage["today_sticker3"] = 0;
  window.localStorage["today_sticker4"] = 0;
  window.localStorage["today_sticker5"] = 0;
  window.localStorage["today_sticker6"] = 0;
  localStorage.setItem("count_second",0);
  window.localStorage["sticker"] = 0;
  window.localStorage["week_end"] = mm2[7]*100 + ff[7];
};

to_day=today.getDay()+1;

$("#dat1").html(mm2[1]+'/'+ff[1]);
$("#dat2").html(mm2[2]+'/'+ff[2]);
$("#dat3").html(mm2[3]+'/'+ff[3]);
$("#dat4").html(mm2[4]+'/'+ff[4]);
$("#dat5").html(mm2[5]+'/'+ff[5]);
$("#dat6").html(mm2[6]+'/'+ff[6]);
$("#dat7").html(mm2[7]+'/'+ff[7]);
/*
$("#ago_week").on("click",function(){
    cal_first = cal_first - 7;    
    $("#dat1").html(mm+'/'+cal_first);
    $("#dat2").html(mm+'/'+(cal_first+1));
    $("#dat3").html(mm+'/'+(cal_first+2));
    $("#dat4").html(mm+'/'+(cal_first+3));
    $("#dat5").html(mm+'/'+(cal_first+4));
    $("#dat6").html(mm+'/'+(cal_first+5));
    $("#dat7").html(mm+'/'+(cal_first+6));   
});
$("#next_week").on("click",function(){
    cal_first = cal_first + 7;     
    $("#dat1").html(mm+'/'+cal_first);
    $("#dat2").html(mm+'/'+(cal_first+1));
    $("#dat3").html(mm+'/'+(cal_first+2));
    $("#dat4").html(mm+'/'+(cal_first+3));
    $("#dat5").html(mm+'/'+(cal_first+4));
    $("#dat6").html(mm+'/'+(cal_first+5));
    $("#dat7").html(mm+'/'+(cal_first+6));   
});
*/

//-----------------------Text-Slider---------------------------//

var datetime_intro = 5;
var second_intro = 5;
updatetime_intro();
intro_media();
function updatetime_intro(){
    if (second_intro % 4 == 1) {
        $("#intro1").show();
        $("#intro2, #intro3, #intro4").hide();
        $("#poit1").attr("src","img/point1.png");
    }
    else{
        $("#poit1").attr("src","img/point2.png");
    }
    if (second_intro % 4 == 2) {
        $("#intro2").show();
        $("#intro1, #intro3, #intro4").hide();
        $("#poit2").attr("src","img/point1.png");
    }
    else{
        $("#poit2").attr("src","img/point2.png");
    }
    if (second_intro % 4 == 3) {
        $("#intro3").show();
        $("#intro1, #intro2, #intro4").hide();
        $("#poit3").attr("src","img/point1.png");
    }else{
        $("#poit3").attr("src","img/point2.png");
    }
    if (second_intro % 4 == 0) {
        $("#intro4").show();
        $("#intro1, #intro2, #intro3").hide();
        $("#poit4").attr("src","img/point1.png");
    }else{
        $("#poit4").attr("src","img/point2.png");
    }
    if(second_intro == 8){
        second_intro = 5;
       
    }else{
        second_intro++;
    }
    datetime_intro = setTimeout(updatetime_intro, 3000);
}

/*---------------------------Intro Meditation Media--------------------------*/

function intro_media(){
   var myAudio_intro = document.getElementById("myAudio_intro");
    myAudio_intro.play(); 
}





