$(document).ready(function(){


navigator.geolocation.getCurrentPosition(position => {
console.log(position);


var latitude = position.coords.latitude;
  console.log(latitude);
var longitude = position.coords.longitude;
  console.log(longitude);
var apikey = "7975291d9b983f7792c4307b9d279ed0";
var temp = 'celcius today';



 $.getJSON("http://api.weatherstack.com/current?access_key="+apikey+"&query="+latitude+"," +longitude, function(data){
  console.log(data);

  var temperature = data.current.temperature;
  console.log(temperature)

  var location = data.location.name;
  console.log(location)

  var wicon = data.current.weather_icons["0"];
  console.log(wicon)

$('.temperture').html("The temperature in "+location+" is " +temperature+ " celcius ");
//IM GETTING FUCKING PISSED OFF WHY WONT THE IMAGE GO ONTO THE HTML

$('#icon').append("<img src='"+wicon+"'></img>");


});
});
})
