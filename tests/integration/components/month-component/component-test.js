import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import moment from 'moment';
import PageObject from 'dummy/tests/page-object';

const month = moment(new Date(2016, 3));

const {
  text,
  collection,
  clickable
} = PageObject;

const page = PageObject.create({
  monthHeading: text('thead'),
  days: collection({
    itemScope: 'tbody tr td',
    item: {
      name: text(),
      click: clickable()
    }
  })
});

moduleForComponent('month-component', 'Integration | Component | month component', {
  integration: true,

  beforeEach() {
    page.setContext(this);
  },

  afterEach() {
    page.removeContext();
  }
});

test('it renders month table', function(assert) {
  const month = moment();
  this.set('month', month);
  this.set('selectedDay', () =>{});
  page.render(hbs`{{month-component month=month selectedDay=selectedDay}}`);

  assert.equal(page.monthHeading, month.format('MMM YYYY'));
  assert.equal(page.days().count, 35);
});

test('it handles selection of day', function(assert) {
  this.set('month', month);
  this.set('selectedDay', day =>{
    assert.equal(day, 30, 'passed selectedDay');
  });
  page.render(hbs`{{month-component month=month selectedDay=selectedDay}}`);

  page.days(
    page.days().count -1
  ).click();
});
