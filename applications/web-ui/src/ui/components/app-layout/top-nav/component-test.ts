import { setupRenderingTest } from '@glimmer/test-helpers';
import hbs from '@glimmer/inline-precompile';

const { module, test } = QUnit;

module('Component: top-nav', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await this.render(hbs`<top-nav />`);
    assert.ok(this.containerElement.querySelector('div'));
  });
});
