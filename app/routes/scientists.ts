import Route from '@ember/routing/route';
import { scientistsList } from 'ember-quickstart/routes/data';

export default class ScientistsRoute extends Route {
  model() {
    return scientistsList;
  }
}
