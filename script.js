$(document).ready(function(){


$.getJSON("https://www.googleapis.com/youtube/v3/activities?part=snippet,contentDetails&channelId=UCklSpaoHcKc3LMfT5XBoRgA&key=AIzaSyAXwusx-FeUx1q-VaxFMjeOhsbXaSgSc6w" , function(video){
console.log(video);

var title = video.items[0].snippet.title;
console.log(title);

var description = video.items[0].snippet.description;
console.log(description);

var vidThumbnail = video.items[0].snippet.thumbnails.medium.url;
console.log(vidThumbnail);

var pullLink = video.items[0].contentDetails.upload.videoId;
console.log(pullLink);

var link = "https://www.youtube.com/embed/"+pullLink;
console.log(link)

$(".secondtitle").html(title);
$(".vidDescription").html(description);
$('#thumbnailvid').attr('src', +vidThumbnail);
$("#linkus").append('<iframe width="500" height="315" src="'+link+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
$('#thumbnailvid').append("<img src='"+vidThumbnail+"'alt='YouTube video thumbnail'></img>");



navigator.geolocation.getCurrentPosition(position =>{
$('.locationWarning').hide()
console.log(position);


var latitude = position.coords.latitude;
  console.log(latitude);
var longitude = position.coords.longitude;
  console.log(longitude);
var apikey = "3d486351bcd34e2e90b163543200602";




 $.getJSON("https://api.weatherapi.com/v1/current.json?key="+apikey+"&query="+latitude+"," +longitude, function(data){
  console.log(data);

  var temperature = data.current.temp_c;
  console.log(temperature)

  var location = data.location.name;
  console.log(location)

  var country = data.location.country;
  console.log(country)

  //var wicon = data.current.weather_icons["0"];
  //console.log(wicon)

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

//$('#icon').append("<img src='"+wicon+"'></img>");


});
});
});
});
