$(document).ready(function() {
      $.getJSON("https://blockchain.info/ticker?cors=true", function(json) {
        var html = "";
        var usd = "";
        var eur = "";
        jQuery.each(json, function(key, val) {
          if (key == "USD"){
            usd += val["last"] + " " + key
          }
          else if (key == "RUB"){
            rub += val["last"] + " " + key
          }

        });
        html += "</tbody></table>";
        $(".prices").html(html);
        $(".usd-price").html(usd);
        $(".rub-price").html(rub);

    });
});