import Ember from 'ember';
import layout from './template';
import moment from 'moment';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  layout: layout,
  tagName: 'table',

  month: null,

  selection: [],
  disabledDates: [],
  maxPastDate: null,
  maxFutureDate: null,

  onSelect: null,

  days: computed('month', function() {
    const month = moment(this.get('month')).startOf('month');
    const daysInMonth = month.daysInMonth();
    const dayOfWeek = month.day();
    const slots = [];

    for (let i = 0; i < dayOfWeek; i++) {
      slots.push(undefined);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      slots.push(i);
    }

    return slots;
  }),

  weeks: computed('days', {
    get() {
      var days = this.get('days');

      let weeks = [];
      while (days.length) {
        weeks.push(days.splice(0, 7));
      }
      return weeks;
    }
  })
});
