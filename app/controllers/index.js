export default Ember.Controller.extend({
  bearing: function() {
    return this.get('targetBearing');
  }.property('targetBearing')
});
