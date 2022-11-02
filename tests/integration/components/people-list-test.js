import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-quickstart/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
// import { scientistsList } from 'app/routes/data/index.ts'; <- why the heck can't I import this?
// I followed config files instructions here:
// https://github.com/testem/testem/blob/master/docs/config_file.md
// Need to look into this more later. Current guesses are it's either:
//  1. possible/permissable or I am missing
//  2. more config
//  3. my testem config is somehow wrong

module('Integration | Component | people-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    const scientistsList = ['Marie Curie', 'Mae Jemison', 'Albert Hofmann'];

    this.set('people', scientistsList);
    await render(hbs`<PeopleList @people={{this.people}}/>`);

    // this.pauseTest(); Nice for debugging

    scientistsList.forEach((scientist) => {
      assert.dom(this.element).includesText(scientist);
    });
  });
});
