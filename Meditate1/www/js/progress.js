
//localStorage.setItem("count123",0);

/*-----------------DISPLAY1 (Check-In Sticker)-------------------*/

var count_trans = Number(window.localStorage["count123"]);
var count_trans1 = 0;
var count_trans2 = 0;
var count_trans3 = 0;
if (count_trans > 9) {
    $("#number4").html(count_trans % 10);
    count_trans1=parseInt(count_trans/10);
    if (count_trans1 > 9) {
        $("#number3").html(count_trans1 % 10);
        count_trans2=parseInt(count_trans1/10);
        if (count_trans2 > 9) {
           $("#number2").html(count_trans2 % 10);
           count_trans3=parseInt(count_trans2/10);
           $("#number1").html(count_trans3);
        }else{
           $("#number2").html(count_trans2); 
        };
    }else{
        $("#number3").html(count_trans1);
    };
}else{
    $("#number4").html(count_trans);
};

/*-------------DISPLAY2 (Total Meditation Time)------------------*/

var second_count = Number(window.localStorage["count_second"]);
if (second_count == 0) {
    $("#text2").html(00 + ":" + 00 + ":" + 00);
};
var second_dis = 0;
var minute_dis = 0;
var hour_dis = 0;
var sss=0;
var mmm=0;
var hhh=0;
if (second_count < 60) {
    second_dis = second_count;
    minute_dis = 0;
    hour_dis = 0;
}else{
    second_dis = second_count % 60;
    if (parseInt(second_count/60) > 59) {
        minute_dis = parseInt(second_count/60) % 60;
        hour_dis = parseInt(parseInt(second_count/60) / 60);
    }else{
        minute_dis = parseInt(second_count/60);
    };
};
if (second_dis < 10) {
    sss = '0'  + second_dis;
}else{
    sss = second_dis;
};
if (minute_dis < 10) {
    mmm = '0' + minute_dis;
}else{
    mmm = minute_dis;
};
if (hour_dis < 10) {
    hhh = '0' + hour_dis;
}else{hhh = hour_dis;};
$("#text2").html(hhh + ":" + mmm + ":" + sss); 

/*-----------------------DISPLAY3 (1st-Day Result)-----------------------------------*/

switch(Number(window.localStorage["ratecount1"])){
    case 0: case 0.5:
        $("#st1").html("N/A");
        break;
    case 1: case 1.5:
        $("#st1").html("ROUGH");
        $("#img1").attr("src","../img/head2-200.png");
        break;
    case 2: case 2.5:
        $("#st1").html("POOR");
        $("#img1").attr("src","../img/head2-200.png");
        break;
    case 3: case 3.5:
        $("#st1").html("OK");
        $("#img1").attr("src","../img/head2-200.png");
        break;
    case 4: case 4.5:
        $("#st1").html("GOOD");
        $("#img1").attr("src","../img/head2-200.png");
        break;
    case 5:
        $("#st1").html("GREAT");
        $("#img1").attr("src","../img/head2-200.png");
        break;
}

/*-----------------------DISPLAY4 (2nd-Day Result)-----------------------------------*/

switch(Number(window.localStorage["ratecount2"])){
    case 0: case 0.5:
        $("#st2").html("N/A");
        break;
    case 1: case 1.5:
        $("#st2").html("ROUGH");
        $("#img2").attr("src","../img/head2-200.png");
        break;
    case 2: case 2.5:
        $("#st2").html("POOR");
        $("#img2").attr("src","../img/head2-200.png");
        break;
    case 3: case 3.5:
        $("#st2").html("OK");
        $("#img2").attr("src","../img/head2-200.png");
        break;
    case 4: case 4.5:
        $("#st2").html("GOOD");
        $("#img2").attr("src","../img/head2-200.png");
        break;
    case 5:
        $("#st2").html("GREAT");
        $("#img2").attr("src","../img/head2-200.png");
        break;
}

/*-----------------------DISPLAY5 (3rd-Day Result)-----------------------------------*/

switch(Number(window.localStorage["ratecount3"])){
    case 0: case 0.5:
        $("#st3").html("N/A");
        break;
    case 1: case 1.5:
        $("#st3").html("ROUGH");
        $("#img3").attr("src","../img/head2-200.png");
        break;
    case 2: case 2.5:
        $("#st3").html("POOR");
        $("#img3").attr("src","../img/head2-200.png");
        break;
    case 3: case 3.5:
        $("#st3").html("OK");
        $("#img3").attr("src","../img/head2-200.png");
        break;
    case 4: case 4.5:
        $("#st3").html("GOOD");
        $("#img3").attr("src","../img/head2-200.png");
        break;
    case 5:
        $("#st3").html("GREAT");
        $("#img3").attr("src","../img/head2-200.png");
        break;
}

/*-----------------------DISPLAY6 (4th-Day Result)-----------------------------------*/

switch(Number(window.localStorage["ratecount4"])){
    case 0: case 0.5:
        $("#st4").html("N/A");
        break;
    case 1: case 1.5:
        $("#st4").html("ROUGH");
        $("#img4").attr("src","../img/head2-200.png");
        break;
    case 2: case 2.5:
        $("#st4").html("POOR");
        $("#img4").attr("src","../img/head2-200.png");
        break;
    case 3: case 3.5:
        $("#st4").html("OK");
        $("#img4").attr("src","../img/head2-200.png");
        break;
    case 4: case 4.5:
        $("#st4").html("GOOD");
        $("#img4").attr("src","../img/head2-200.png");
        break;
    case 5:
        $("#st4").html("GREAT");
        $("#img4").attr("src","../img/head2-200.png");
        break;
}

/*-----------------------DISPLAY7 (5th-Day Result)-----------------------------------*/ 

switch(Number(window.localStorage["ratecount5"])){
    case 0: case 0.5:
        $("#st5").html("N/A");
        break;
    case 1: case 1.5:
        $("#st5").html("ROUGH");
        $("#img5").attr("src","../img/head2-200.png");
        break;
    case 2: case 2.5:
        $("#st5").html("POOR");
        $("#img5").attr("src","../img/head2-200.png");
        break;
    case 3: case 3.5:
        $("#st5").html("OK");
        $("#img5").attr("src","../img/head2-200.png");
        break;
    case 4: case 4.5:
        $("#st5").html("GOOD");
        $("#img5").attr("src","../img/head2-200.png");
        break;
    case 5:
        $("#st5").html("GREAT");
        $("#img5").attr("src","../img/head2-200.png");
        break;
}

/*-----------------------DISPLAY8 (6th-Day Result)-----------------------------------*/

switch(Number(window.localStorage["ratecount6"])){
    case 0: case 0.5:
        $("#st6").html("N/A");
        break;
    case 1: case 1.5:
        $("#st6").html("ROUGH");
        $("#img6").attr("src","../img/head2-200.png");
        break;
    case 2: case 2.5:
        $("#st6").html("POOR");
        $("#img6").attr("src","../img/head2-200.png");
        break;
    case 3: case 3.5:
       
        $("#st6").html("OK");
        $("#img6").attr("src","../img/head2-200.png");
        break;
    case 4: case 4.5:
        $("#st6").html("GOOD");
        $("#img6").attr("src","../img/head2-200.png");
        break;
    case 5:
        $("#st6").html("GREAT");
        $("#img6").attr("src","../img/head2-200.png");
        break;
}

/*-----------------------DISPLAY9 (7th-Day Result)-----------------------------------*/

switch(Number(window.localStorage["ratecount7"])){
    case 0: case 0.5:
        $("#st7").html("N/A");
        break;
    case 1: case 1.5:
        $("#st7").html("ROUGH");
        $("#img7").attr("src","../img/head2-200.png");
        break;
    case 2: case 2.5:
        $("#st7").html("POOR");
        $("#img7").attr("src","../img/head2-200.png");
        break;
    case 3: case 3.5:
        $("#st7").html("OK");
        $("#img7").attr("src","../img/head2-200.png");
        break;
    case 4: case 4.5:
        $("#st7").html("GOOD");
        $("#img7").attr("src","../img/head2-200.png");
        break;
    case 5:
        $("#st7").html("GREAT");
        $("#img7").attr("src","../img/head2-200.png");
        break;
}

/*-----------------------DISPLAY10 (Total Stickers)-----------------------------------*/

$("#num1").html(window.localStorage["sticker"]);































