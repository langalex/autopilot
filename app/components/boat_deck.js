export default Ember.Component.extend({
  classNames: ['boat'],
  bearing: 0,
  bearingCss: function() {
    return "-webkit-transform: rotate(" + this.get('bearing') + 'deg);';
  }.property('bearing')
});
