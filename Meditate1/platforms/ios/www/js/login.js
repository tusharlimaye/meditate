

/*------------------------Error Screen(Log-in)------------------------*/

$(".login-alert").hide();
$("#loginbutton").on("click",function(){
   if (!$("#logintext").val() || !$("#passtext").val()) {
    $(".login-alert").show();
    $("#disp10").html("Please Input Username/Password");
    $("#disp11").html();
   }else{
    //alert(window.localStorage["signusername"] + window.localStorage["signpassname"]);
    if($("#logintext").val()==window.localStorage["signusername"] && $("#passtext").val()==window.localStorage["signpassname"]) {
      window.location.href= "../templete/main.html";
    }else{
      $(".login-alert").show();
      $("#disp10").html("Your Username/Password isn't correct.");
      $("#disp11").html("Please check again.");
      $("#ok1").on("click",function(){
        $(".login-alert").hide();
      });
    }
   };
});
$("#ok1").on("click",function(){
  $(".login-alert").hide();
});

/*------------------------Error Screen(Sign-up)------------------------*/

//alert(window.localStorage["signusername"]);
$(".singin-alert").hide();
$("#signstart").on("click",function(){
   if (!$("#signusername").val() || !$("#signpassname").val()) {
    $(".singin-alert").show();
    $("#disp20").html("Please Input Username/Password");
    $("#disp21").html();
   }else{
     if (!$("#self-latitude").val() || !$("#self-longitude").val()) {
        $(".singin-alert").show();
        $("#disp20").html("Please Input your location");
        $("#disp21").html();
       }else{
        window.localStorage["signusername"]=document.getElementById("signusername").value;
        window.localStorage["signpassname"]=document.getElementById("signpassname").value;
        //window.localStorage["signtwittername"]=document.getElementById("signmailaddressname").value;
        window.localStorage["signinstagramname"]=document.getElementById("signinstagramname").value;
        window.localStorage["signfacebookname"]=document.getElementById("signfacebookname").value;
        
        window.localStorage["self-latitude"]=document.getElementById("self-latitude").value;
        window.localStorage["self-longitude"]=document.getElementById("self-longitude").value;
        $(".singin-alert").show();
        $("#noti-text").html("Notification");
        $("#disp20").html("Your account was correctly signed.");
        $("#ok2").on("click", function(){
          $(".singin-alert").hide();
          window.location.href= "../templete/main.html";
        });
       }
    //alert(window.localStorage["signusername"]);
   };

});
$("#ok2").on("click", function(){
  $(".singin-alert").hide();
});

/*-------------------------------Forgot Password---------------------------------------*/

$(".login-check").hide();
$("#forgot").on("click", function(){
  $(".login-check").show();
});
$("#submit").on("click", function(){
  if ($("#checkin").val() == window.localStorage["signusername"]) {
    window.location.href = "../templete/main.html";
  }else{
    window.location.href = "../templete/sign.html";
  };
});





















