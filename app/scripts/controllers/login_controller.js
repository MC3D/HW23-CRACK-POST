/*globals Application, Ember */

(function() {
  'use strict';

  Application.LoginController = Ember.Controller.extend({
  needs: ['application'], // Establishes a connection between the LoginController and the ApplicationController
  username: '',
  email: '',

  actions: {
    logIn: function(){
      this.set('controllers.application.currentUser', {
        username: this.get('username'),
        email: this.get('email')
      });
      this.transitionToRoute('posts');
    }
  }
});

})();
