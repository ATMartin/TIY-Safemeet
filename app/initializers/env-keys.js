import config from '../config/environment';

export function initialize(container, application) {
  // application.inject('route', 'foo', 'service:foo');
  application.register('env:keys', config.keys, {instantiate: false});
  application.inject('route', 'envKeys', 'env:keys');
  application.inject('controller', 'envKeys', 'env:keys');
}

export default {
  name: 'env-keys',
  initialize: initialize
};
