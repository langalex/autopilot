export default Ember.Controller.extend({
  currentTimeBinding: Ember.Binding.oneWay('Autopilot.currentTime'),

  updateBearing: function() {
    if(this.get('rudderAngle') !== 0) {
      var newBearing = (this.get('bearing') + this.get('rudderAngle') / 90 + 360) % 360;
      this.set('bearing', newBearing);
    }
  }.observes('currentTime'),

  distanceTotargetBearing: function() {
    var deltaAngle = mod(this.get('targetBearing') - this.get('bearing') + 180, 360) - 180;
    return deltaAngle;

    function mod(number, max) {
      return (number % max + max) % max;
    }
  },

  updateRudderAngle: function() {
    var bearing = this.get('bearing');
    var angle = this.get('rudderAngle');
    if(bearing === parseFloat(this.get('targetBearing'))) {
      this.steerAngle(0);
    } else {
      var distanceAngle = this.distanceTotargetBearing();
      this.steerAngle(Math.pow(distanceAngle, 2) * (distanceAngle < 0 ? -1 : 1));
    }
  }.observes('currentTime'),

  steerAngle: function(angle) {
    var rudderAngle = this.get('rudderAngle');
    var newAngle = rudderAngle;
    if(rudderAngle > angle) {
      newAngle = Math.max(rudderAngle - 4, angle, -90);
    } else if(rudderAngle < angle) {
      newAngle =  Math.min(rudderAngle + 4, angle, 90);
    }
    this.set('rudderAngle', newAngle);
  }
});
