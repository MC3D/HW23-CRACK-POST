/*globals Application, Ember*/

(function () {
  'use strict';

  Application.PostsController = Ember.ArrayController.extend({
  needs: ['application'],
  newPost: '',
  filteredBy: '',

  posts: function(){
    return this.get();
  },
  //   var self = this;
  //   return this.get('model').filter(function(i){
  //     var username = self.get('filteredBy').toLowerCase();
  //     var message = i.get('message').toLowerCase();
  //     return message.match( username );
  //   });
  // }.property('filteredBy','@each'),

  actions: {
    createPost: function(){
      var username = this.get('controllers.application.currentUser.username');
      var post = this.store.createRecord('post', {
        username: username,
        message: this.get('newPost'),
        timestamp: new Date()
      });
      post.save();
      this.set('newPost', '');
    }
  }
});
})();
