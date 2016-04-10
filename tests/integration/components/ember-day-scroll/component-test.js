import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import PageObject from 'dummy/tests/page-object';
import wait from 'ember-test-helpers/wait';
import Ember from 'ember';

const {
  collection,
} = PageObject;

const {
  run
} = Ember;

const page = PageObject.create({
  months: collection({
    itemScope: 'vertical-item'
  })
});

moduleForComponent('ember-day-scroll', 'Integration | Component | ember day scroll', {
  integration: true,

  beforeEach() {
    page.setContext(this);
  },

  afterEach() {
    page.removeContext();
  }
});

test('it renders intial state', function(assert) {
  page.render(hbs`{{ember-day-scroll}}`);
  assert.equal(page.months().count, 10);
});

test('it loads above', function(assert) {
  page.render(hbs`{{ember-day-scroll}}`);
  return run(() =>{
    return wait(() =>{
      run(() =>{
        this.$('div').scrollTop = 0;
      });
      assert.equal(page.months().count, 10);
    });
  });
});
