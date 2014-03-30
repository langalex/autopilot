import Resolver from 'ember/resolver';

var App = Ember.Application.extend({
  LOG_ACTIVE_GENERATION: true,
  LOG_MODULE_RESOLVER: true,
  // LOG_TRANSITIONS: true,
  // LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'autopilot', // TODO: loaded via config
  Resolver: Resolver,

  ready: function() {
    var app = this;
    window.setInterval( function() {
      Ember.run.next(function() {
        app.set('currentTime', new Date().getTime());
      });
    }, 50);
  }
});

export default App;
