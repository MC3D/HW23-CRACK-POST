/* globals Application, DS, Ember, Firebase */

(function () {
  'use strict';

  window.Application = Ember.Application.create({
    LOG_TRANSITIONS: true // To have Ember write out transition events to the log.
  });

  Application.ApplicationAdapter = DS.FirebaseAdapter.extend({
    firebase: new Firebase('https://crack.firebaseio.com/rooms/'),
    pathForType: function() {
    	return 'general';
  	}
});

  // Application.ApplicationAdapter = DS.FixtureAdapter.extend();

})();
