import Ember from 'ember';
import layout from './template';
import moment from 'moment';

const {
  computed,
  run
} = Ember;

export default Ember.Component.extend({
  layout,

  debounceTime: 1000,
  intialScrollPosition: 100,

  init(){
    this._super(...arguments);
    const month = moment();
    const months = this._genMonths(month, 10);
    this.set('model', {first: 1, months: months});
  },

  _genMonths(month, total) {
    let months = [];
    for (let i = 0; i < total; i++) {
      months.push(moment(month).add(i, 'months'));
    }
    return months;
  },

  actions: {

    loadAbove() {
      run.debounce(this, () =>{
        let first = this.get('model.months')[0];
        let months = this.get('model.months');
        let aboveMonth = this._genMonths(first.add(-20, 'months'), 20);
        let newMonths = aboveMonth.concat(months);
        this.set('model.months', newMonths);
        this.set('model.first', first);
      }, this.get('debounceTime'));
    },

    loadBelow() {
      run.debounce(this, () =>{
        let last = this.get('model.months')[9];
        let endMonth = last.add(10, 'months');
        let months = this._genMonths(endMonth, 10);
        this.set('model.months', this.get('model.months').concat(months));
      }, this.get('debounceTime'));
    },

    selectedDay(day) {
      console.log(day);
    }

  }
});
