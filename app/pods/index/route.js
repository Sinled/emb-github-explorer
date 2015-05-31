import Ember from 'ember';

const developers = [
  {
    name: 'Dovgan Dmytro',
    login: 'Sinled'
  },
  {
    name: 'Paul Irish',
    login: 'paulirish'
  },
  {
    name: 'Yehuda Katz',
    login: 'wycats'
  },
  {
    name: 'Addy Osmani',
    login: 'addyosmani'
  }
]

export default Ember.Route.extend({
  model: function() {
    return developers;
  }
});
