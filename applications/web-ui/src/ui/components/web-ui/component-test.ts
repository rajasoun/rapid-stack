import { setupRenderingTest } from '@glimmer/test-helpers';
import hbs from '@glimmer/inline-precompile';

const { module, test } = QUnit;

module('Component: web-ui', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await this.render(hbs`<web-ui />`);
    //assert.equal(this.containerElement.textContent, 'Rapid Stack\n');
    assert.ok(this.containerElement.querySelector('div'));
  });
});
