
var list = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

var listURL =[];

list.forEach(function(x){
  var a = "https://wind-bow.gomix.me/twitch-api/streams/" + x + "?callback=?";
  listURL.push(a);
})
$.each(listURL, function(i, val){
  $.getJSON(val, function(data){
   console.log(data);
    
    if(data.stream === null){
      var streaming = "Offline";
      $.getJSON("https://wind-bow.gomix.me/twitch-api/channels/" + list[i] + "?callback=?", function(data){
        $(".container").append("<div class='row offline'><div class='col-md-4'>"  + list[i].toUpperCase() + "</div><div class='col-md-8'><a href='" + data.url + "' target='_blank'>" + streaming + "</a></div></div>")})
      
    } 
    else {
      var streaming = "Online";
       $(".container").append("<div class='row online'><div class='col-md-4'>" + data.stream.channel.display_name.toUpperCase() +  "</div><div class='col-md-8'><a href='" + data.stream.channel.url + "' target='_blank'>" + streaming + " ( Details: " + data.stream.channel.status + "</a></div></div>")
    }
    
  })
});



