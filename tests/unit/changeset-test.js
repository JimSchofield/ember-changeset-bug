import { module, test } from 'qunit';
import { Changeset } from 'ember-changeset';

module('Unit | changeset test', function () {
  test('sets `attributes` as a proper value in the changeset', async function (assert) {
    const thing = Changeset({ name: 'something else', attributes: { thing: 'description' } });

    assert.equal(
      thing.name,
      'something else',
      'other props work',
    );
    assert.deepEqual(
      thing.data.attributes,
      { thing: 'description' },
      'Data is included'
    );
    assert.deepEqual(
      thing.attributes,
      { thing: 'description' },
      'Data is not accessed correctly'
    );
  });

  test('sets any key/object pair as a proper value in the changeset', async function (assert) {
    const thing = Changeset({ name: 'something else', otherData: { thing: 'description' } });

    assert.deepEqual(
      thing.data.otherData,
      { thing: 'description' },
      'Data is included'
    );
    assert.deepEqual(
      thing.otherData,
      { thing: 'description' },
      'Data is not accessed correctly'
    );
  });
});
