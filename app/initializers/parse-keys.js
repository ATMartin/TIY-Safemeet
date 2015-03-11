import Ember from "ember";

export function initialize(/* container, application */) {
  Ember.$.ajaxSetup({
    headers: {
      "X-Parse-Application-Id" : "eJJ7oTZ4GZBMaTkIp8GRlDlp4w1qYkdf615WLAWS", 
        "X-Parse-REST-API-Key" : "KbUs53V9hflSjKn43IZF5i26Yqpdjdb7NdAaK4cJ"
    }
  });
}

export default {
  name: 'parse-keys',
  initialize: initialize
};
