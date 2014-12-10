'use strict';

$(document).ready(function(){

   $('body').on('click', 'a', function(){
     chrome.tabs.create({url: $(this).attr('href')});
     return false;
   });

  var urlsRef = new Firebase('https://puffant-urls.firebaseio.com/');

  urlsRef.on('value', function(snapshot) {
    _.each(snapshot.val(), function(item) {
      $('ul').append(
        $('<li>').append(
          $('<a>').attr('href', item.url).append(item.name)
      ));
    });
  });

});


