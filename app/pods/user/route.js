import * as ajax from 'ic-ajax';
import Ember from 'ember';

export default Ember.Route.extend({
  model(options) {
    return ajax.request(`//api.github.com/users/${options.login}`)
  }
});
