import Route from '@ember/routing/route';
import ENV from 'thesaurus-ui/config/environment';

export default class IndexRoute extends Route {
  async model() {
    const response = await fetch( ENV.apiBaseUrl + 'word/');
    return await response.json();
  }
}
