import Route from '@ember/routing/route';

export default class WordRoute extends Route {
  async model(params) {
    const {
      base
    } = params;
    const response = await fetch("https://localhost:5001/word/" + base);
    return await response.json();
  }
}
