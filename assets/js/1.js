$(document).ready(function() {
  getLocationF();
  function getLocationF() {
    $.getJSON("https://ipapi.co/json/", function(ip) {
      console.log(ip);
      $("#ip").html(ip.ip);
      $("#provider").html(ip.org);
        $("#country").html(ip.country_name);
        $("#region").html(ip.region);
        $("#city").html(ip.city);
      
      
    getWeatherF(ip.postal);  
    }, 'jsonp');
  }
  });
