import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import moment from 'moment';

const month = moment(new Date(2016, 3));

moduleForComponent('month-component', 'Integration | Component | month component', {
  integration: true
});

test('it renders month table', function(assert) {
  this.set('month', month);
  this.render(hbs`{{month-component month=month}}`);

  assert.equal(this.$('thead tr:first').text().trim(), month.format('MMM YYYY'));
  assert.equal(this.$('tbody td').length, 35);
});

test('it handles selection of day', function(assert) {
  this.set('month', month);
  this.render(hbs`{{month-component month=month}}`);

  this.$('tbody td:last').click();
});
