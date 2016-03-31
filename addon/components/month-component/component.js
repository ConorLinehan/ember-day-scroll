import Ember from 'ember';
import layout from './template';
import moment from 'moment';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  layout: layout,
  divName: 'table',

  /*
  @method Returns weeks of month
  @return {Array}
   */
  weeks: computed('month', {
    get() {
      
    }
  }).readOnly(),
});
