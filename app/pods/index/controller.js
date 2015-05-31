import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    clickMe: function() {
      alert('clicked button');
    }
  }
});
