import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({
  model() {
    var arr = new Array(30);
    var month = moment();
    var content = [month];
    for (var i = 0; i < arr.length; i++) {
      var newMonth = moment().add(i, 'month');
      content.push(newMonth);
    }
    return {
      content: content
    };
  }
});
