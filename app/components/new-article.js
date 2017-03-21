import Ember from 'ember';

export default Ember.Component.extend({
  addNewArticle: false,
  actions: {
    articleFormShow() {
      this.set('addNewArticle', true);
    },

    saveArticle1() {
      console.log("in level one");
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        alt: this.get('alt'),
        description: this.get('description'),
        image: this.get('image'),
        text: this.get('text')
      };
      this.set('addNewArticle', false);
      this.sendAction('saveArticle2', params);
      console.log("finished level one");
    }
  }
});
