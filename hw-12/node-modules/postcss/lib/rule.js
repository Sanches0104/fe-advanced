'use strict';

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _container = require('./container');

var _container2 = _interopRequireDefault(_container);

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Represents a CSS rule: a selector followed by a declaration block.
 *
 * @extends Container
 *
 * @example
 * const root = postcss.parse('a{}')
 * const rule = root.first
 * rule.type       //=> 'rule'
 * rule.toString() //=> 'a{}'
 */
var Rule = function (_Container) {
  _inherits(Rule, _Container);

  function Rule(defaults) {
    _classCallCheck(this, Rule);

    var _this = _possibleConstructorReturn(this, _Container.call(this, defaults));

    _this.type = 'rule';
    if (!_this.nodes) _this.nodes = [];
    return _this;
  }

  /**
   * An array containing the rule’s individual selectors.
   * Groups of selectors are split at commas.
   *
   * @type {string[]}
   *
   * @example
   * const root = postcss.parse('a, b { }')
   * const rule = root.first
   *
   * rule.selector  //=> 'a, b'
   * rule.selectors //=> ['a', 'b']
   *
   * rule.selectors = ['a', 'strong']
   * rule.selector //=> 'a, strong'
   */


  _createClass(Rule, [{
    key: 'selectors',
    get: function get() {
      return _list2.default.comma(this.selector);
    },
    set: function set(values) {
      var match = this.selector ? this.selector.match(/,\s*/) : null;
      var sep = match ? match[0] : ',' + this.raw('between', 'beforeOpen');
      this.selector = values.join(sep);
    }

    /**
     * @memberof Rule#
     * @member {string} selector The rule’s full selector represented
     *                           as a string.
     *
     * @example
     * const root = postcss.parse('a, b { }')
     * const rule = root.first
     * rule.selector //=> 'a, b'
     */

    /**
     * @memberof Rule#
     * @member {object} raws Information to generate byte-to-byte equal
     *                       node string as it was in the origin input.
     *
     * Every parser saves its own properties,
     * but the default CSS parser uses:
     *
     * * `before`: the space symbols before the node. It also stores `*`
     *   and `_` symbols before the declaration (IE hack).
     * * `after`: the space symbols after the last child of the node
     *   to the end of the node.
     * * `between`: the symbols between the property and value
     *   for declarations, selector and `{` for rules, or last parameter
     *   and `{` for at-rules.
     * * `semicolon`: contains `true` if the last child has
     *   an (optional) semicolon.
     * * `ownSemicolon`: contains `true` if there is semicolon after rule.
     *
     * PostCSS cleans selectors from comments and extra spaces,
     * but it stores origin content in raws properties.
     * As such, if you don’t change a declaration’s value,
     * PostCSS will use the raw value with comments.
     *
     * @example
     * const root = postcss.parse('a {\n  color:black\n}')
     * root.first.first.raws //=> { before: '', between: ' ', after: '\n' }
     */

  }]);

  return Rule;
}(_container2.default);

exports.default = Rule;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGUuZXM2Il0sIm5hbWVzIjpbIlJ1bGUiLCJkZWZhdWx0cyIsInR5cGUiLCJub2RlcyIsImxpc3QiLCJjb21tYSIsInNlbGVjdG9yIiwidmFsdWVzIiwibWF0Y2giLCJzZXAiLCJyYXciLCJqb2luIiwiQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7SUFXTUEsSTs7O0FBQ0osZ0JBQWFDLFFBQWIsRUFBdUI7QUFBQTs7QUFBQSxpREFDckIsc0JBQU1BLFFBQU4sQ0FEcUI7O0FBRXJCLFVBQUtDLElBQUwsR0FBWSxNQUFaO0FBQ0EsUUFBSSxDQUFDLE1BQUtDLEtBQVYsRUFBaUIsTUFBS0EsS0FBTCxHQUFhLEVBQWI7QUFISTtBQUl0Qjs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBZ0JpQjtBQUNmLGFBQU9DLGVBQUtDLEtBQUwsQ0FBVyxLQUFLQyxRQUFoQixDQUFQO0FBQ0QsSztzQkFFY0MsTSxFQUFRO0FBQ3JCLFVBQUlDLFFBQVEsS0FBS0YsUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWNFLEtBQWQsQ0FBb0IsTUFBcEIsQ0FBaEIsR0FBOEMsSUFBMUQ7QUFDQSxVQUFJQyxNQUFNRCxRQUFRQSxNQUFNLENBQU4sQ0FBUixHQUFtQixNQUFNLEtBQUtFLEdBQUwsQ0FBUyxTQUFULEVBQW9CLFlBQXBCLENBQW5DO0FBQ0EsV0FBS0osUUFBTCxHQUFnQkMsT0FBT0ksSUFBUCxDQUFZRixHQUFaLENBQWhCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7O0FBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBNUNpQkcsbUI7O2tCQTBFSlosSSIsImZpbGUiOiJydWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL2NvbnRhaW5lcidcbmltcG9ydCBsaXN0IGZyb20gJy4vbGlzdCdcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgQ1NTIHJ1bGU6IGEgc2VsZWN0b3IgZm9sbG93ZWQgYnkgYSBkZWNsYXJhdGlvbiBibG9jay5cbiAqXG4gKiBAZXh0ZW5kcyBDb250YWluZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3Qgcm9vdCA9IHBvc3Rjc3MucGFyc2UoJ2F7fScpXG4gKiBjb25zdCBydWxlID0gcm9vdC5maXJzdFxuICogcnVsZS50eXBlICAgICAgIC8vPT4gJ3J1bGUnXG4gKiBydWxlLnRvU3RyaW5nKCkgLy89PiAnYXt9J1xuICovXG5jbGFzcyBSdWxlIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgY29uc3RydWN0b3IgKGRlZmF1bHRzKSB7XG4gICAgc3VwZXIoZGVmYXVsdHMpXG4gICAgdGhpcy50eXBlID0gJ3J1bGUnXG4gICAgaWYgKCF0aGlzLm5vZGVzKSB0aGlzLm5vZGVzID0gW11cbiAgfVxuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBjb250YWluaW5nIHRoZSBydWxl4oCZcyBpbmRpdmlkdWFsIHNlbGVjdG9ycy5cbiAgICogR3JvdXBzIG9mIHNlbGVjdG9ycyBhcmUgc3BsaXQgYXQgY29tbWFzLlxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nW119XG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGNvbnN0IHJvb3QgPSBwb3N0Y3NzLnBhcnNlKCdhLCBiIHsgfScpXG4gICAqIGNvbnN0IHJ1bGUgPSByb290LmZpcnN0XG4gICAqXG4gICAqIHJ1bGUuc2VsZWN0b3IgIC8vPT4gJ2EsIGInXG4gICAqIHJ1bGUuc2VsZWN0b3JzIC8vPT4gWydhJywgJ2InXVxuICAgKlxuICAgKiBydWxlLnNlbGVjdG9ycyA9IFsnYScsICdzdHJvbmcnXVxuICAgKiBydWxlLnNlbGVjdG9yIC8vPT4gJ2EsIHN0cm9uZydcbiAgICovXG4gIGdldCBzZWxlY3RvcnMgKCkge1xuICAgIHJldHVybiBsaXN0LmNvbW1hKHRoaXMuc2VsZWN0b3IpXG4gIH1cblxuICBzZXQgc2VsZWN0b3JzICh2YWx1ZXMpIHtcbiAgICBsZXQgbWF0Y2ggPSB0aGlzLnNlbGVjdG9yID8gdGhpcy5zZWxlY3Rvci5tYXRjaCgvLFxccyovKSA6IG51bGxcbiAgICBsZXQgc2VwID0gbWF0Y2ggPyBtYXRjaFswXSA6ICcsJyArIHRoaXMucmF3KCdiZXR3ZWVuJywgJ2JlZm9yZU9wZW4nKVxuICAgIHRoaXMuc2VsZWN0b3IgPSB2YWx1ZXMuam9pbihzZXApXG4gIH1cblxuICAvKipcbiAgICogQG1lbWJlcm9mIFJ1bGUjXG4gICAqIEBtZW1iZXIge3N0cmluZ30gc2VsZWN0b3IgVGhlIHJ1bGXigJlzIGZ1bGwgc2VsZWN0b3IgcmVwcmVzZW50ZWRcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICBhcyBhIHN0cmluZy5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogY29uc3Qgcm9vdCA9IHBvc3Rjc3MucGFyc2UoJ2EsIGIgeyB9JylcbiAgICogY29uc3QgcnVsZSA9IHJvb3QuZmlyc3RcbiAgICogcnVsZS5zZWxlY3RvciAvLz0+ICdhLCBiJ1xuICAgKi9cblxuICAvKipcbiAgICogQG1lbWJlcm9mIFJ1bGUjXG4gICAqIEBtZW1iZXIge29iamVjdH0gcmF3cyBJbmZvcm1hdGlvbiB0byBnZW5lcmF0ZSBieXRlLXRvLWJ5dGUgZXF1YWxcbiAgICogICAgICAgICAgICAgICAgICAgICAgIG5vZGUgc3RyaW5nIGFzIGl0IHdhcyBpbiB0aGUgb3JpZ2luIGlucHV0LlxuICAgKlxuICAgKiBFdmVyeSBwYXJzZXIgc2F2ZXMgaXRzIG93biBwcm9wZXJ0aWVzLFxuICAgKiBidXQgdGhlIGRlZmF1bHQgQ1NTIHBhcnNlciB1c2VzOlxuICAgKlxuICAgKiAqIGBiZWZvcmVgOiB0aGUgc3BhY2Ugc3ltYm9scyBiZWZvcmUgdGhlIG5vZGUuIEl0IGFsc28gc3RvcmVzIGAqYFxuICAgKiAgIGFuZCBgX2Agc3ltYm9scyBiZWZvcmUgdGhlIGRlY2xhcmF0aW9uIChJRSBoYWNrKS5cbiAgICogKiBgYWZ0ZXJgOiB0aGUgc3BhY2Ugc3ltYm9scyBhZnRlciB0aGUgbGFzdCBjaGlsZCBvZiB0aGUgbm9kZVxuICAgKiAgIHRvIHRoZSBlbmQgb2YgdGhlIG5vZGUuXG4gICAqICogYGJldHdlZW5gOiB0aGUgc3ltYm9scyBiZXR3ZWVuIHRoZSBwcm9wZXJ0eSBhbmQgdmFsdWVcbiAgICogICBmb3IgZGVjbGFyYXRpb25zLCBzZWxlY3RvciBhbmQgYHtgIGZvciBydWxlcywgb3IgbGFzdCBwYXJhbWV0ZXJcbiAgICogICBhbmQgYHtgIGZvciBhdC1ydWxlcy5cbiAgICogKiBgc2VtaWNvbG9uYDogY29udGFpbnMgYHRydWVgIGlmIHRoZSBsYXN0IGNoaWxkIGhhc1xuICAgKiAgIGFuIChvcHRpb25hbCkgc2VtaWNvbG9uLlxuICAgKiAqIGBvd25TZW1pY29sb25gOiBjb250YWlucyBgdHJ1ZWAgaWYgdGhlcmUgaXMgc2VtaWNvbG9uIGFmdGVyIHJ1bGUuXG4gICAqXG4gICAqIFBvc3RDU1MgY2xlYW5zIHNlbGVjdG9ycyBmcm9tIGNvbW1lbnRzIGFuZCBleHRyYSBzcGFjZXMsXG4gICAqIGJ1dCBpdCBzdG9yZXMgb3JpZ2luIGNvbnRlbnQgaW4gcmF3cyBwcm9wZXJ0aWVzLlxuICAgKiBBcyBzdWNoLCBpZiB5b3UgZG9u4oCZdCBjaGFuZ2UgYSBkZWNsYXJhdGlvbuKAmXMgdmFsdWUsXG4gICAqIFBvc3RDU1Mgd2lsbCB1c2UgdGhlIHJhdyB2YWx1ZSB3aXRoIGNvbW1lbnRzLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBjb25zdCByb290ID0gcG9zdGNzcy5wYXJzZSgnYSB7XFxuICBjb2xvcjpibGFja1xcbn0nKVxuICAgKiByb290LmZpcnN0LmZpcnN0LnJhd3MgLy89PiB7IGJlZm9yZTogJycsIGJldHdlZW46ICcgJywgYWZ0ZXI6ICdcXG4nIH1cbiAgICovXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJ1bGVcbiJdfQ==
