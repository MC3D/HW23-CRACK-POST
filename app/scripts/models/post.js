/*globals Application, DS */

(function () {
  'use strict';

  Application.Post = DS.Model.extend({
  username: DS.attr('string'),
  timestamp: DS.attr('date'),
  message: DS.attr('string')
});

})();
