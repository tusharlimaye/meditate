


//alert(Number(window.localStorage["myprofile"]));

if (Number(window.localStorage["myprofile"]) == 1) {
	document.getElementById("self-username").value = window.localStorage["signusername"];
	document.getElementById("myname").innerHTML = window.localStorage["signusername"];
	document.getElementById("self-location").value = window.localStorage["latlng"];
	document.getElementById("self-instagram").value = window.localStorage["signinstagramname"];
	document.getElementById("self-facebook").value = window.localStorage["signfacebookname"];
}
if (Number(window.localStorage["myprofile"]) == 0) {
	document.getElementById("self-username").value = window.localStorage["lname"];
	document.getElementById("myname").innerHTML = window.localStorage["lname"];
	document.getElementById("self-location").value = window.localStorage["latlng"];
	//document.getElementById("self-twitter").value = window.localStorage["ltwitter"];
	document.getElementById("self-instagram").value = window.localStorage["linstagram"];
	document.getElementById("self-facebook").value = window.localStorage["lfacebook"];
}