



var marker = [];
var selflat = Number(window.localStorage["self-latitude"]);
var selflon = Number(window.localStorage["self-longitude"]);
var mydata={"data":[{"lname": window.localStorage["signusername"], "ltwitter": "", "linstagram": window.localStorage["signinstagramname"], "lfacebook": window.localStorage["signfacebookname"]},
                    {"lname": "OscarOlin", "ltwitter": "oscar@olin.com", "linstagram": "", "lfacebook": "oscar@facebook.com"},
                    {"lname": "OlaffReff", "ltwitter": "olafreff@89.com", "linstagram": "olafreff@89.com", "lfacebook": "olafreff@facebook.com"},
                    {"lname": "Koscha.K", "ltwitter": "Koscha@k.com", "linstagram": "", "lfacebook": "Koscha.k@facebook.com"}]};
var myCenter={"geolocation1":[
             {"lat": selflat, "lng":selflon},
             {"lat": 52.03, "lng": 5.33},
             {"lat": 51.29, "lng": 6.02},
             {"lat": 52.55, "lng": 5.82}]};
for (var i = 1; i < 4; i++) {
  marker[i] = new google.maps.Marker({
    position:myCenter.geolocation1[i], url:'/', animation:google.maps.Animation.DROP
  });
  marker[i].set("id", i);
};
marker[0] = new google.maps.Marker({
    position:myCenter.geolocation1[0], url:'/', animation:google.maps.Animation.DROP,
    label:'M'
});
marker[0].set("id", 0);
//marker[0].label("M");
function initialize(){
  var map=new google.maps.Map(document.getElementById("map"), {zoom: 4, center:myCenter.geolocation1[0]});
  for (var i = 0; i < 4; i++) {
    marker[i].setMap(map);
  }
  for (var i = 0; i < 4; i++) {
    google.maps.event.addListener(marker[i], 'click', function(e) {
      window.localStorage["latlng"]="Lat:" + myCenter.geolocation1[this.id].lat + ",Lng:" + myCenter.geolocation1[this.id].lng;
      window.localStorage["lname"]=mydata.data[this.id].lname;
      window.localStorage["ltwitter"]=mydata.data[this.id].ltwitter;
      window.localStorage["linstagram"]=mydata.data[this.id].linstagram;
      window.localStorage["lfacebook"]=mydata.data[this.id].lfacebook;
      window.location.href = "../templete/self-profile.html";
    });
  };
}
google.maps.event.addDomListener(window, 'load', initialize);


