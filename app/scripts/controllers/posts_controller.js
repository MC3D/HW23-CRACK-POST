/*globals Application, Ember, moment */

(function() {
  'use strict';

  Application.PostsController = Ember.ArrayController.extend({
    needs: ['application'],
    newPost: '',
    filterBy: '',

    posts: function() {
      return this.get();
    },

    actions: {
      createPost: function() {
        var username = this.get('controllers.application.currentUser.username');
        var post = this.store.createRecord('post', {
          username: username,
          message: this.get('newPost'),
          timestamp: moment()
        });
        post.save();
        this.set('newPost', '');
      }
    }
  });

  Ember.Handlebars.helper('formattedDate', function(timestamp) {
    return moment(timestamp).format('lll');
});

})();
