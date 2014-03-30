export default Ember.Route.extend({
  setupController: function(controller, model) {
    controller.setProperties({
      targetBearing: 0
    });
  }
});
