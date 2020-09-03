import Component from "@glimmer/component";

import {tracked} from "@glimmer/tracking";
import { action } from '@ember/object';

class Word {
  @tracked base;

}

export default class EditComponent extends Component {

  constructor(owner, args) {
    super(owner, args);

    this.model.base = args.model.base;
  }

  @tracked model = new Word();

  async getMyJson(){
    let poco = {};
    poco.base = this.model.base;
    return JSON.stringify(poco);
  }

  @action
  async showMe() {
    let json = await this.getMyJson();
    alert(json);
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
