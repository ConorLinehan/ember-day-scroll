/*jshint node:true*/
module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function(options) {
    var self = this;
    return this.addAddonsToProject({
      packages: [
        { name: 'smoke-and-mirrors'},
        { name: 'ember-moment'}
      ]
    });
  }
};
