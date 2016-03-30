import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      cities: this.store.findAll('city'),
      rental: this.store.findRecord('rental', params.rental_id)
    });
  },
  actions: {
    update(rental, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          rental.set(key,params[key]);
        }
      });
      rental.save();
      this.transitionTo('index');
    },
    destroyRental(rental) {
      var city = rental.get('city');
      rental.destroyRecord().then(function() {
        city.save();
      });
      this.transitionTo('index');
    }
  }
});
