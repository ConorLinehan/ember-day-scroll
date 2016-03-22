import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,

  init(){
    this._super(...arguments);
    this.set('items', new Array(100));
  }
});
