import Ember from 'ember';

export default Ember.Component.extend({
  updateCurrentArticle: false,

  actions: {
    articleFormShow() {
      this.set('updateCurrentArticle', true);
    },

    updateArticle(model) {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        alt: this.get('alt'),
        description: this.get('description'),
        image: this.get('image'),
        text: this.get('text')
      };
      this.set('updateCurrentArticle', false);
      Object.keys(params).forEach(function(key) {
         if(params[key]!==undefined) {
           model.set(key, params[key]);
         }
       });
      model.save();
    }
  }
});
