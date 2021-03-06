'use strict';

exports.__esModule = true;
exports.default = warnOnce;
var printed = {};

function warnOnce(message) {
  if (printed[message]) return;
  printed[message] = true;

  if (typeof console !== 'undefined' && console.warn) {
    console.warn(message);
  }
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhcm4tb25jZS5lczYiXSwibmFtZXMiOlsid2Fybk9uY2UiLCJwcmludGVkIiwibWVzc2FnZSIsImNvbnNvbGUiLCJ3YXJuIl0sIm1hcHBpbmdzIjoiOzs7a0JBRXdCQSxRO0FBRnhCLElBQUlDLFVBQVUsRUFBZDs7QUFFZSxTQUFTRCxRQUFULENBQW1CRSxPQUFuQixFQUE0QjtBQUN6QyxNQUFJRCxRQUFRQyxPQUFSLENBQUosRUFBc0I7QUFDdEJELFVBQVFDLE9BQVIsSUFBbUIsSUFBbkI7O0FBRUEsTUFBSSxPQUFPQyxPQUFQLEtBQW1CLFdBQW5CLElBQWtDQSxRQUFRQyxJQUE5QyxFQUFvRDtBQUNsREQsWUFBUUMsSUFBUixDQUFhRixPQUFiO0FBQ0Q7QUFDRiIsImZpbGUiOiJ3YXJuLW9uY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgcHJpbnRlZCA9IHsgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3YXJuT25jZSAobWVzc2FnZSkge1xuICBpZiAocHJpbnRlZFttZXNzYWdlXSkgcmV0dXJuXG4gIHByaW50ZWRbbWVzc2FnZV0gPSB0cnVlXG5cbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBjb25zb2xlLndhcm4pIHtcbiAgICBjb25zb2xlLndhcm4obWVzc2FnZSlcbiAgfVxufVxuIl19
