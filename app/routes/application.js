import Ember from 'ember';
import fetch from "ember-network/fetch";

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  model() {
    return fetch('https://26q4xbqcn2.execute-api.us-east-1.amazonaws.com/prod/getTombotData')
      .then(response => response.json())
      .then(data => {
        return Object.keys(data).map(key => {
          return { command: key, result: data[key] };
        });
      });
  }
});
