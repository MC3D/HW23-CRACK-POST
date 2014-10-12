/* globals Application, Ember */

(function() {
  'use strict';

  Application.Router.map(function() { // The map method is invoked to define URL mappings.
    this.route('login', {
      path: '/'
    }); // When the application's URL matches '/', Ember.js will render the login template.
    this.route('posts', {
      path: '/posts'
    });
    this.route('chatrooms', {
      path: '/chatrooms'
    });
  });

  Application.PostsRoute = Ember.Route.extend({
    beforeModel: function() {
      var user = this.controllerFor('application').get('currentUser');
      if (!user) {
        this.transitionTo('login');
      }
    },

    model: function() {
      return this.store.find('post'); // 'post' references the post model
    }
  });

  Application.ChatroomsRoute = Ember.Route.extend({

    model: function() {
      var chatrooms = ['general', 'new chat room'];
      return chatrooms;
    }
  });
})();
