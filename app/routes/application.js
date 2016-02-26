import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  model() {
    return this.get('ajax').request('https://26q4xbqcn2.execute-api.us-east-1.amazonaws.com/prod/getTombotData')
  }
});
