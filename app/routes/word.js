import Route from '@ember/routing/route';

export default class WordRoute extends Route {
  async model(params) {
    const {
      base
    } = params;

    const response = await fetch("https://localhost:5001/word/" + base);
    if (response.ok)
      return await response.json();
    return null;
  }
}
