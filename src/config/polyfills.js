import Headers from 'fetch-headers';

// This is necessary for IE / Microsoft Edge because of a problem with apollo-link-rest
// https://github.com/apollographql/apollo-link-rest/issues/93
window.Headers = Headers;

// The polyfill doesn't provide a forEach function which apollo rest uses
window.Headers.prototype.forEach = function(fn) {
  for (let [key, value] of this.entries()) {
    fn(value, key, this);
  }
};
