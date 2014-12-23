'use strict';

$(document).ready(function(){

  AV.initialize('jprz3okeh2rb5jmsddof3tpz4pv8ztt1hjvtsw4odh2wejkk', 'tgd7rocqao5yj7crfql1wm1qgshdjmkxxwvakkmvc9nafj3t');

  $('body').on('click', 'a', function(){
   chrome.tabs.create({url: $(this).attr('href')});
   return false;
  });

  // Create one example url for testing.
  //
  // var Url = AV.Object.extend('Url');
  // var one = new Url();
  // one.save({
  //   name: '网站：小象网',
  //   url: 'http://puffant.com'
  // }, {
  //   success: function(url) {
  //     console.log(url);
  //   }
  // })

  // Fetch all urls.
  var query = new AV.Query('Url');
  query.find({
    success: function(results) {
      showUrls(results);
    }
  });

  function showUrls (data) {
    _.each(data, function(item) {
      $('ul').append(
        $('<li>').append(
          $('<a>').attr('href', item.get('url')).append(item.get('name'))
      ));
    });
  }
});
