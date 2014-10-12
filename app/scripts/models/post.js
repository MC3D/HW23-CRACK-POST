/*globals Application, DS, moment */

(function () {
  'use strict';

  Application.Post = DS.Model.extend({
  username: DS.attr('string'),
  timestamp: moment(DS.attr('date')).format('MMM DD, YYYY'),
  message: DS.attr('string')
});

})();
