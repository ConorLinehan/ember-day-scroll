import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import moment from 'moment';

moduleForComponent('month-component', 'Integration | Component | month component', {
  integration: true
});

test('it renders month table', function(assert) {
  const month = moment();
  this.set('month', month);
  this.render(hbs`{{month-component month=month}}`);

  assert.equal(this.$('thead tr:first').text().trim(), month.format('MMM YYYY'));
});
