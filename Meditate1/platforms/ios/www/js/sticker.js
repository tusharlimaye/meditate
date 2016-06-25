


$("#table-row1, #table-row2, #table-row3, #table-row4, #table-row5, #table-row6").hide();
var today1 = new Date();
var to_day1=today1.getDay()+1;
switch(to_day1){
	case 1:
	   window.localStorage["today_sticker1"] = Number(window.localStorage["sticker"]);
	   break;
	case 2:
	   window.localStorage["today_sticker2"] = Number(window.localStorage["sticker"]);
	   break;
	case 3:
	   window.localStorage["today_sticker3"] = Number(window.localStorage["sticker"]);
	   break;
	case 4:
	   window.localStorage["today_sticker4"] = Number(window.localStorage["sticker"]);
	   break;
	case 5:
	   window.localStorage["today_sticker5"] = Number(window.localStorage["sticker"]);
	   break;
	case 6:
	   window.localStorage["today_sticker6"] = Number(window.localStorage["sticker"]);
	   break;
}
if (Number(window.localStorage["today_sticker1"]) > 0) {
	$("#table-row1").show();
};
if (Number(window.localStorage["today_sticker2"]) > 4) {
	$("#table-row2").show();
};
if (Number(window.localStorage["today_sticker3"]) > 9) {
	$("#table-row3").show();
};
if (Number(window.localStorage["today_sticker4"]) > 14) {
	$("#table-row4").show();
};
if (Number(window.localStorage["today_sticker5"]) > 19) {
	$("#table-row5").show();
};
if (Number(window.localStorage["today_sticker6"]) > 23) {
	$("#table-row6").show();
};