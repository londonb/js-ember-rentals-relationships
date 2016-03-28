import DS from 'ember-data';

export default DS.Model.extend({
  admin: DS.attr(),
  date: DS.attr(),
  title: DS.attr(),
  body: DS.attr()
});
