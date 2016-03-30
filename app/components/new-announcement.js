import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    announcementFormShow() {
      this.set('addNewAnnouncement', true);
    },

    save() {
      var params = {
        admin: this.get('admin'),
        date: this.get('date'),
        title: this.get('title'),
        body: this.get('body')
      };
      this.set('addNewAnnouncement', false);
      this.sendAction('save', params);
    }
  }
});
