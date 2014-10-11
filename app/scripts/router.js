/*globals Application, Ember */

(function () {
  'use strict';

  Application.Router.map(function(){ // The map method is invoked to define URL mappings.
  this.route('login', {path: '/'}); // When the user visits /login, Ember.js will render the login template.
  this.route('posts', {path: '/posts'});
});

Application.PostsRoute = Ember.Route.extend({ // When the user visits /#, Ember.js will render the post model
  beforeModel: function(){
    var user = this.controllerFor('application').get('currentUser');
    if( ! user ) {
      this.transitionTo('login');
    }
  },

  model: function(){
    return this.store.find('post'); // 'post' references the post model
  }
});
})();
