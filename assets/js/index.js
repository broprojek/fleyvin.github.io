$(document).ready(function(){
  
  $("button").hide();
  $("button").each(function(i) {
      var name = $(this).attr('value');
      $(this).delay(i*100).slideDown(60);
      $(this).html(name);
  });
  
  $("button").click(function(){
    var name = $(this).attr('value');
    if (name=="") {
    } else {
      console.log('else')
    }
    
  });
});