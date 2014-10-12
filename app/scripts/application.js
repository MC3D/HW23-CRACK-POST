/* globals Application, DS, Ember, Firebase */

(function () {
  'use strict';

  window.Application = Ember.Application.create({
    LOG_TRANSITIONS: true // Write out transition events to the log.
  });

  Application.ApplicationAdapter = DS.FirebaseAdapter.extend({
    firebase: new Firebase('https://crack.firebaseio.com/rooms/'),
    pathForType: function() {
    	return 'general';
  	}
});

  var ref = new Firebase('https://crack.firebaseio.com/rooms/');
    ref.once('value', function(data){
      data.forEach(function(room){
        var chatrooms = [];
        chatrooms.push(room.name());
        console.log(chatrooms);
      });
    });

})();
