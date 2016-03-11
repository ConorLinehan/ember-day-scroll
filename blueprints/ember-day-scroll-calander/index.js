/*jshint node:true*/
module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function(options) {
    return this.addAddonsToProject({
      packages: [
        { name: 'ember-collection'},
        { name: 'ember-moment', target: '6.0.0' }
      ]
    });
  }
};
