import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    const response = await fetch("https://localhost:5001/word/");
    return await response.json();
  }
}
