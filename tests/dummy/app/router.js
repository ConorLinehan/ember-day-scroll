import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('month');
  this.route('day-scroll');
  this.route('c-scroll');
});

export default Router;
