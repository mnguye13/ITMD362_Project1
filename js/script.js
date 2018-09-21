function navResponsive() {
    var x = document.getElementById("myNav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}

function confirmSubmit(evt){
  var fullname = document.getElementById("firstname");
  var span = document.getElementsByClassName("close")[0];
  var modal = document.getElementById('confirmBox');
  var btn = document.getElementById('submit');

  btn.onclick = function() {
    modal.style.display = "block";
  }
  span.onclick = function() {
    modal.style.display = "none";
  }
  alert("Thanks " + firstname.value + " for joining us");
  /*
  //Assign Form by Id to a Variabe
  var myForm = document.getElementById("signUpForm");
  //Extract Each Element Value
  for (var i = 0; i < myForm.elements.length; i++) {
    alert(myForm.elements[i].value);
  }*/
}
function locationModal(){
  var btn = document.getElementById('locationBtn');
  var span = document.getElementsByClassName("close")[0];
  var modal = document.getElementById('locationBox');
  btn.onclick = function() {
    modal.style.display = "block";
  }
  span.onclick = function() {
    modal.style.display = "none";
  }
}

function policyModal(){
  var btn = document.getElementById('policyBtn');
  var span = document.getElementsByClassName("close")[1];
  var modal = document.getElementById('policyBox');
  btn.onclick = function() {
    modal.style.display = "block";
  }
  span.onclick = function() {
    modal.style.display = "none";
  }
}
var map;
var marker;
var current;
function initMap() {
  current = {lat: 36.1125, lng: -115.1707};
  map = new google.maps.Map(document.getElementById('map'), {
  zoom: 10,
  center: current
  });

  document.getElementById("demo").innerHTML = "Paris Las Vegas, 3655 S Las Vegas Blvd, Las Vegas, NV 89109";

  marker = new google.maps.Marker({
  position: current,
  map: map
  });
}

var places=["paris","ballys","planet_hollywood"];
var paris = {lat: 36.1125, lng: -115.1707};
var ballys = {lat: 36.1141, lng: -115.1706};
var planet_hollywood = {lat: 36.1100, lng: -115.1718};
function goto(location, title){


  map.panTo(location);
  map.setZoom(12);
  marker = new google.maps.Marker({
  position: location,
  map: map
  });
  if (title==places[0]){
    document.getElementById("demo").innerHTML = "Paris Las Vegas, 3655 S Las Vegas Blvd, Las Vegas, NV 89109";
    }
  else if (title==places[1]){
    document.getElementById("demo").innerHTML = "Bally's Las Vegas, 3645 S Las Vegas Blvd, Las Vegas, NV 89109";
    }
  else if (title==places[2]){
    document.getElementById("demo").innerHTML = "Planet Hollywood, 3667 S Las Vegas Blvd, Las Vegas, NV 89109";
    }
  else
    {
    document.getElementById("demo").innerHTML = "Not Found";
    }
}
