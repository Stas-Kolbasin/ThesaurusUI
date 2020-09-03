import Component from "@glimmer/component";

import {tracked} from "@glimmer/tracking";
import { action } from '@ember/object';

export default class EditComponent extends Component {

  @action
  async save(model) {
    let json = await JSON.stringify(model);
    let res = await fetch(
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
