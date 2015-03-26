export function initialize(container, application ) {
  application.inject('route', 'parse', 'service:parse');
  application.inject('controller', 'parse', 'service:parse');

  application.inject('route', 'rails', 'service:rails');
  application.inject('controller', 'rails', 'service:rails');

  application.inject('route', 'store', 'service:store');
  application.inject('controller', 'store', 'service:store');
}

export default {
  name: 'store-service',
  initialize: initialize
};
