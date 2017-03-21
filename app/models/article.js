import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  image: DS.attr(),
  alt: DS.attr(),
  description: DS.attr(),
  text: DS.attr()
});
