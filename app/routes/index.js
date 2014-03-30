export default Ember.Route.extend({
  setupController: function(controller, model) {
    controller.setProperties({
      targetBearing: 0.0,
      bearing: 0.0,
      rudderAngle: 0.0
    });
  }
});
