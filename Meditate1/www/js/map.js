



var marker = [];
var mydata={"data":[{"lname": "OscarOlin", "ltwitter": "oscar@olin.com", "linstagram": ""},
                    {"lname": "OlaffReff", "ltwitter": "olafreff@89.com", "linstagram": "olafreff@89.com"},
                    {"lname": "Koscha.K", "ltwitter": "Koscha@k.com", "linstagram": ""}]};
var myCenter={"geolocation1":[
             {"lat": 52.03, "lng": 5.33},
             {"lat": 51.29, "lng": 6.02},
             {"lat": 52.55, "lng": 5.82}]};
for (var i = 0; i < 3; i++) {
  marker[i] = new google.maps.Marker({
    position:myCenter.geolocation1[i], url:'/', animation:google.maps.Animation.DROP
  });
  marker[i].set("id", i);
};

function initialize(){
  var map=new google.maps.Map(document.getElementById("map"), {zoom: 4, center:myCenter.geolocation1[0]});
  for (var i = 0; i < 3; i++) {
    marker[i].setMap(map);
  }
  for (var i = 0; i < 3; i++) {
    google.maps.event.addListener(marker[i], 'click', function(e) {
      window.localStorage["latlng"]="Lat:" + myCenter.geolocation1[this.id].lat + ",Lng:" + myCenter.geolocation1[this.id].lng;
      window.localStorage["lname"]=mydata.data[this.id].lname;
      window.localStorage["ltwitter"]=mydata.data[this.id].ltwitter
      window.localStorage["linstagram"]=mydata.data[this.id].linstagram
      window.location.href = "../templete/self-profile.html";
    });
  };
}
google.maps.event.addDomListener(window, 'load', initialize);

/*getLocation(); 
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}
function showPosition(position) {
  var lat1 = position.coords.latitude;
  var lng1 = position.coords.longitude;
  map.setCenter(new google.maps.LatLng(lat1, lng1));
  alert(google.maps.LatLng(lat1, lng1));
}
*/


