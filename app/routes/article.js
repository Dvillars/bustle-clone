import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('article', params.article_id);
  }
  // actions: {
  //   updateArticle(params) {
  //     for (key in Object.keys(params)) {
  //       if (params[key]) {
  //         article.set(key, params[key]);
  //       }
  //     };
  //   }
  // }
});
