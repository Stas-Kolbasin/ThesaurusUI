import Route from '@ember/routing/route';
import ENV from 'thesaurus-ui/config/environment';

export default class EditRoute extends Route {
  async model(params) {
    const {
      base
    } = params;

    const response = await fetch(ENV.apiBaseUrl + 'word/' + base);
    return await response.json();
  }
}
