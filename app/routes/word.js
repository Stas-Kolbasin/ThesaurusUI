import Route from '@ember/routing/route';
import ENV from 'thesaurus-ui/config/environment';

export default class WordRoute extends Route {
  async model(params) {
    const {
      base
    } = params;

    const response = await fetch(ENV.apiBaseUrl + 'word/' + base);
    if (response.ok)
      return await response.json();
    return null;
  }
}
