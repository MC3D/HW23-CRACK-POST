/*globals Application, DS */

(function () {
  'use strict';

  Application.Post = DS.Model.extend({
  username: DS.attr('string'),
  timestamp: DS.attr('date'),
  message: DS.attr('string')
});

  // Application.Post.FIXTURES = [
  // {
  //   id: 1,
  //   username: 'Mady',
  //   timestamp: Date(),
  //   message: 'You said it!'
  // },
  // {
  //   id: 2,
  //   username: 'David',
  //   timestamp: Date(),
  //   message: 'I said it!'
  // },
  // {
  //   id: 3,
  //   username: 'Charlie',
  //   timestamp: Date(),
  //   message: 'We said it!'
  // }
  // ];

})();
