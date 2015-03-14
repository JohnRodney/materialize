import Ember from 'ember';
import MaterializeColorsMixin from '../../../mixins/materialize-colors';
import { module, test } from 'qunit';

module('MaterializeColorsMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var MaterializeColorsObject = Ember.Object.extend(MaterializeColorsMixin);
  var subject = MaterializeColorsObject.create();
  assert.ok(subject);
});
