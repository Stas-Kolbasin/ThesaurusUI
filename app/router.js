import EmberRouter from '@ember/routing/router';
import config from 'thesaurus-ui/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('word', { path: '/word/:word_base' });
  this.route('not-found', { path: '/*path' });
});
