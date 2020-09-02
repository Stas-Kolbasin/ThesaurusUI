import Route from '@ember/routing/route';

export default class EditRoute extends Route {
  async model(params) {
    const {
      base
    } = params;

    if (!!base) {
      const response = await fetch("https://localhost:5001/word/" + base);
      return await response.json();
    }
    return {};
  }
}
