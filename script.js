$(document).ready(function(){


navigator.geolocation.getCurrentPosition(position => {
console.log(position);


var latitude = position.coords.latitude;
  console.log(latitude);
var longitude = position.coords.longitude;
  console.log(longitude);
var apikey = "7975291d9b983f7792c4307b9d279ed0";



 $.getJSON("http://api.weatherstack.com/current?access_key="+apikey+"&query="+latitude+"," +longitude, function(data){
  console.log(data);

  var temperature = data.current.temperature;
  console.log(temperature)

  var location = data.location.name;
  console.log(location)

  var country = data.location.country;
  console.log(country)

  var wicon = data.current.weather_icons["0"];
  console.log(wicon)

//This is how to get the current time in a variable
var today = new Date();
var hourNow = today.getHours();

//This is how to display a different message depending on ther time of day
var greeting;
if (hourNow > 18){
  greeting = 'Good evening. ';
} else if (hourNow > 12){
  greeting = 'Good afternoon. ';
} else if (hourNow > 0) {
  greeting = 'Good morning. ';
}

console.log("We gonna say " +greeting+ "at this time");

$('.temperture').html(greeting+ "<br>The temperature in "+location+", "+country+" is " +temperature+ " celcius. ");
//IM GETTING FUCKING PISSED OFF WHY WONT THE IMAGE GO ONTO THE HTML

$('#icon').append("<img src='"+wicon+"'></img>");



});
});
});
