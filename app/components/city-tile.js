import Ember from 'ember';

export default Ember.Component.extend({

  fullLocation: Ember.computed('city.name', 'city.country', function() {
    return this.get('city.name') + ', ' + this.get('city.country');
  }),

  sortedRentals: Ember.computed.sort('city.rentals', 'sortBy'),
  sortBy: ['cost:asc'],

  actions: {
    delete(city) {
      if(confirm('Are you sure you want to delete this city and all associated rentals?')) {
        this.sendAction('destroyCity', city);
      }
    }
  }
});
