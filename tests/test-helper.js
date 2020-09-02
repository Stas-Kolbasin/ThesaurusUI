import Application from 'thesaurus-ui/app';
import config from 'thesaurus-ui/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
