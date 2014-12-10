'use strict';

var urlsRef = new Firebase('https://puffant-urls.firebaseio.com/');

urlsRef.set({
  title: "Hello World!",
  author: "Firebase",
  location: {
    city: "San Francisco",
    state: "California",
    zip: 94103
  }
});
