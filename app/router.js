import EmberRouter from '@ember/routing/router';
import config from 'ela/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('help');
  this.route('server');
  this.route('ela');
});
