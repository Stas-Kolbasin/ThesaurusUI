import Route from '@ember/routing/route';

export default class WordRoute extends Route {
  async model(params) {
    const{
      word_base
    } = params;
    const response = await fetch("https://localhost:5001/word/"+word_base);
    const wordModel = await response.json();
    return wordModel;
  }
}
