import Component from "@glimmer/component";
import {tracked} from "@glimmer/tracking";
import { action } from '@ember/object';
import { A } from '@ember/array';

class Word {
  @tracked base;
  @tracked meanings = A([]);
}

class Meaning {
  @tracked description;
  @tracked partOfSpeech;
  @tracked synonyms = A([]);
}

class Synonym {
  @tracked base;
}

export default class EditComponent extends Component {

  constructor(owner, args) {
    super(owner, args);

    this.model.base = args.model.base;
    if(!!args.model.meanings) {
      args.model.meanings.forEach(
        meaning =>
          this.model.meanings.pushObject(this.meaningToTracked(meaning))
      );
    }
  }

  @tracked model = new Word();

  async getMyJson(){
    let poco = {};
    poco.base = this.model.base;
    poco.meanings = [];
    if (!!this.model.meanings)
    {
      this.model.meanings.forEach(
        meaning =>
          poco.meanings.push(this.meaningToPoco(meaning))
      );
    }
    return JSON.stringify(poco);
  }

  meaningToPoco(meaning) {
    let pocoMeaning = {};
    pocoMeaning.description = meaning.description;
    pocoMeaning.partOfSpeech = meaning.partOfSpeech;

    pocoMeaning.synonyms = [];
    meaning.synonyms.forEach(
      synonym => {
        let pocoSynonym = {};
        pocoSynonym.base = synonym.base;
        pocoMeaning.synonyms.push(pocoSynonym);
      }
    )

    return pocoMeaning;
  }

  meaningToTracked(meaning) {
    let trackedMeaning = new Meaning();
    trackedMeaning.description = meaning.description;
    trackedMeaning.partOfSpeech = meaning.partOfSpeech;

    meaning.synonyms.forEach(
      synonym => {
        let trackedSynonym = new Synonym();
        trackedSynonym.base = synonym.base;
        trackedMeaning.synonyms.pushObject(trackedSynonym);
      }
    )

    return trackedMeaning;
  }

  @action
  async showMe() {
    let json = await this.getMyJson();
    alert(json);
  }

  @action
  async addMeaning() {
    this.model.meanings.pushObject(new Meaning());
  }

  @action
  async save() {
    let json = await this.getMyJson();
    await fetch(
      "https://localhost:5001/word/",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: json
      }
    );
  }

}
