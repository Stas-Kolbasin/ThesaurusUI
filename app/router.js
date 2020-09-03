import EmberRouter from '@ember/routing/router';
import config from 'thesaurus-ui/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('not-found', { path: '/*path' });
  this.route('word', { path: '/word/:base' });
  this.route('edit', { path: '/edit/:base' });
  this.route('create', { path: '/create' });
});
