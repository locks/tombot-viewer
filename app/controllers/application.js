import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({
  queryParams: [{
    filterTerm: 'filter'
  }],

  filterTerm: undefined,

  filteredModel: computed('filterTerm', 'model', {
    get() {
      var models = this.get('model');
      var term = this.get('filterTerm');

      if (!term) {
        return models;
      }

      term = term.toLowerCase();

      return models.filter(item => {
        let command = item.command.toLowerCase();
        let result = item.result.toLowerCase();
        return command.indexOf(term) !== -1 || result.indexOf(term) !== -1;
      });
    }
  })
});
