'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = function Item(link, src) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "a",
      { href: link },
      React.createElement("img", { src: src, className: "skill" })
    )
  );
};

var Homie = function (_React$Component) {
  _inherits(Homie, _React$Component);

  function Homie(props) {
    _classCallCheck(this, Homie);

    return _possibleConstructorReturn(this, (Homie.__proto__ || Object.getPrototypeOf(Homie)).call(this, props));
  }

  _createClass(Homie, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        "Hello World"
      );
    }
  }]);

  return Homie;
}(React.Component);

var Carousel = function Carousel() {

  return React.createElement(
    "div",
    { className: "carousel-container" },
    React.createElement(
      "div",
      { className: "carousel-wrapper" },
      React.createElement(
        "button",
        { className: "left-arrow" },
        "<"
      ),
      React.createElement(
        "div",
        { className: "carousel-content-wrapper" },
        React.createElement(
          "div",
          { className: "carousel-content" },
          React.createElement("img", { src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", className: "skill" }),
          React.createElement("img", { src: "../images/skills/nodejs.svg", className: "skill" }),
          React.createElement("img", { src: "../images/skills/aws.svg", className: "skill" }),
          React.createElement("img", { src: "../images/skills/go.svg", className: "skill" }),
          React.createElement("img", { src: "../images/skills/java.svg", className: "skill" }),
          React.createElement("img", { src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg", className: "skill" })
        )
      ),
      React.createElement(
        "button",
        { className: "right-arrow" },
        ">"
      )
    )
  );
};

var domContainer = document.querySelector('#carousel');
ReactDOM.render(e(Homie), domContainer);