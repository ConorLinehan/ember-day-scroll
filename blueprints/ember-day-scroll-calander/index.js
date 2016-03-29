/*jshint node:true*/
module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function(options) {
    var self = this;
    return this.addAddonsToProject({
      packages: [
        { name: 'smoke-and-mirrors'}
      ]
    })
    .then(function(){
      return self.addPackagesToProject([
        { name: 'moment', target: '2.0.0'}
      ]);
    });
  }
};
