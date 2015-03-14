import Ember from 'ember';

export default Ember.Mixin.create({
  // a list of Materialize class bindings that can just be set to true within
  // a component that extends from this mixin or from the template on a component
  // that extends this mixin
  classNameBindings: ['red', 'purple', 'pink', 'deepPurple:deep-purple', 'indigo',
                      'blue', 'lightBlue:light-blue', 'cyan', 'teal', 'green',
                      'lightGreen:light-green', 'lime', 'yellow', 'amber', 'orange',
                      'deepOrange:deep-orange', 'brown', 'grey', 'blueGrey:blue-grey', 'lighten5:lighten-5',
                      'lighten4:lighten-4', 'lighten3:lighten-3', 'lighten2:lighten-2', 'lighten1:lighten-1',
                      'darken1:darken-1', 'darken2:darken-2', 'darken3:darken-3', 'darken4:darken-4',
                      'accent1:accent-1', 'accent2:accent-2', 'accent3:accent-3', 'accent4:accent-4']
});
