/**
 *
 * Bootstrap one-page template with Parallax effect | Script Tutorials
 * http://www.script-tutorials.com/bootstrap-one-page-template-with-parallax-effect/
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Script Tutorials
 * http://www.script-tutorials.com/
 */
function strip(html)
{
   var html = html.replace("<br>","||br||");  
   var tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   html = tmp.textContent||tmp.innerText;
   return html.replace("||br||","<br>");  
}

function trim_words(theString, numWords) {
    expString = theString.split(/\s+/,numWords);
    theNewString=expString.join(" ");
    return theNewString;
}

$(document).ready(function (){


    $.get( 'proxy.php', { url : 'https://www.flickr.com/services/feeds/photos_public.gne?id=138398754@N06&lang=es-us&format=atom' },
      function(feed) {
        jQuery('#feedItems').html("");
        var html = '';

        for(var i = 0; i < feed.entry.length && i < 4; i++) {
          
          var item = feed.entry[i];
          html += 
            '<div class="col-sm-6">' +
              '<div class="panel panel-default">' +
                '<div class="panel-body rssDescription">' + 
                  '<h4>' + item.title + '</h4>' +
                  trim_words(strip(item.content), 70) + ' ...</div>' +
                '<div class="panel-footer"><a class="btn btn-primary pull-right" target="_blank" href="'+item.link[4]["@attributes"].href+'">Seguir Leyendo</a><br clear="all" /></div>' +
              '</div>' +
            '</div>';

        }
        jQuery('#feedItems').append(html);
      });
   


  // create a LatLng object containing the coordinate for the center of the map
  
  var latlng = new google.maps.LatLng(-34.6277202,-58.4466281);

  // prepare the map properties
  var options = {
    zoom: 15,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    navigationControl: true,
    mapTypeControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true
  };

  // initialize the map object
  var map = new google.maps.Map(document.getElementById('google_map'), options);

  // add Marker
  var marker1 = new google.maps.Marker({
    position: latlng, map: map
  });

  // add listener for a click on the pin
  google.maps.event.addListener(marker1, 'click', function() {
    infowindow.open(map, marker1);
  });

  // add information window
  var infowindow = new google.maps.InfoWindow({
    content:  '<div class="info"><strong>This is my company</strong><br><br>My company address is here<br> 32846 Sydney</div>'
  });  
});
