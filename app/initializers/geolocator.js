export function initialize(fcontainer, application) {
  application.inject('route', 'geolocator', 'service:geolocator');
  application.inject('controller', 'geolocator', 'service:geolocator');
}

export default {
  name: 'geolocator',
  initialize: initialize
};
