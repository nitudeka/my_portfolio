module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(3);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "classnames"
var external__classnames_ = __webpack_require__(1);
var external__classnames__default = /*#__PURE__*/__webpack_require__.n(external__classnames_);

// CONCATENATED MODULE: ./components/Navigation/NavToggler/NavToggler.js



var NavToggler_NavToggler = function NavToggler(props) {
  var navTogglerIcon = external__classnames__default()('nav__toggler', props.navShow ? 'nav__toggler-icon--active' : null);
  return external__react__default.a.createElement("div", {
    onClick: props.toggleNav,
    className: navTogglerIcon
  }, external__react__default.a.createElement("span", {
    className: "nav__toggler-icon"
  }));
};

/* harmony default export */ var Navigation_NavToggler_NavToggler = (NavToggler_NavToggler);
// CONCATENATED MODULE: ./components/Navigation/Navbar/Navbar.js





var Navbar_Navbar = function Navbar(props) {
  var navList = external__classnames__default()('nav__list', props.navShow ? 'nav--show' : 'nav--hide');
  return external__react__default.a.createElement("div", null, external__react__default.a.createElement(Navigation_NavToggler_NavToggler, {
    navShow: props.navShow,
    toggleNav: props.toggleNav
  }), external__react__default.a.createElement("ul", {
    className: navList
  }, external__react__default.a.createElement("li", {
    className: "nav__item nav__item--1"
  }, external__react__default.a.createElement(link__default.a, {
    href: "/"
  }, external__react__default.a.createElement("p", {
    className: "nav__link"
  }, "Home"))), external__react__default.a.createElement("li", {
    className: "nav__item nav__item--2"
  }, external__react__default.a.createElement(link__default.a, {
    href: "/projects"
  }, external__react__default.a.createElement("p", {
    className: "nav__link"
  }, "Projects"))), external__react__default.a.createElement("li", {
    className: "nav__item nav__item--3"
  }, external__react__default.a.createElement(link__default.a, {
    href: "/about"
  }, external__react__default.a.createElement("p", {
    className: "nav__link"
  }, "About Me")))));
};

/* harmony default export */ var Navigation_Navbar_Navbar = (Navbar_Navbar);
// CONCATENATED MODULE: ./components/Layout.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var Layout_Layout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Layout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Layout.__proto__ || Object.getPrototypeOf(Layout)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        navShow: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "toggleNav", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          navShow: !_this.state.navShow
        });
      }
    }), _temp));
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement(Navigation_Navbar_Navbar, {
        navShow: this.state.navShow,
        toggleNav: this.toggleNav
      }), this.props.children);
    }
  }]);

  return Layout;
}(external__react__default.a.Component);

/* harmony default export */ var components_Layout = __webpack_exports__["a"] = (Layout_Layout);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var Svg = function Svg(props) {
  switch (props.name) {
    case 'link':
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
        className: props.className,
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", null, "View project"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
        d: "M18 7.762v-7.762l12 12-12 12v-7.932c-13.961-0.328-13.362 9.493-9.808 15.932-8.772-9.482-6.909-24.674 9.808-24.238z"
      }));

    case 'github':
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
        className: props.className,
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", null, "View on github"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
        d: "M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"
      }));

    case 'facebook':
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
        className: props.className,
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", null, "Facebook"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
        d: "M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h13v-14h-4v-4h4v-2c0-3.306 2.694-6 6-6h4v4h-4c-1.1 0-2 0.9-2 2v2h6l-1 4h-5v14h9c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3z"
      }));

    case 'linkedin':
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
        className: props.className,
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", null, "Linkedin"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
        d: "M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM12 26h-4v-14h4v14zM10 10c-1.106 0-2-0.894-2-2s0.894-2 2-2c1.106 0 2 0.894 2 2s-0.894 2-2 2zM26 26h-4v-8c0-1.106-0.894-2-2-2s-2 0.894-2 2v8h-4v-14h4v2.481c0.825-1.131 2.087-2.481 3.5-2.481 2.488 0 4.5 2.238 4.5 5v9z"
      }));

    default:
      return null;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (Svg);

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Svg_Svg__ = __webpack_require__(4);




var About = function About() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "about"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "about__background"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "about__content"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "avatar"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "../static/img/about-avatar.jpg",
    className: "avatar__img",
    alt: "avatar"
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
    className: "about__heading"
  }, "Nitu Deka"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "about__paragraphs"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "about__paragraph"
  }, "Hey, you are here it means that you want to know about me. Let me introduce myself!"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "about__paragraph"
  }, "I am from India. My complete name is ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "bold-font"
  }, "Nitu Moni Deka"), ", a self-taught web developer with an addiction to mastering and adopting new skills. I want to work on complex tasks because I want to test and sharpen my skills."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "about__paragraph"
  }, "I want to satisfy my clients not just by doing what they say me to do, but by adding a little bit more from me to make the project even more beautiful."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "about__paragraph"
  }, "Like what you see? You can check me out on social media or can email me at ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "bold-font"
  }, "nitumonideka327@gmail.com"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "about__accounts"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "https://www.facebook.com/profile.php?id=100008786917030&ref",
    rel: "noopener noreferrer",
    target: "_blank"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Svg_Svg__["a" /* default */], {
    className: "svg__about-facebook accounts-link",
    name: "facebook"
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "https://github.com/nitudeka",
    rel: "noopener noreferrer",
    target: "_blank"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Svg_Svg__["a" /* default */], {
    className: "svg__about-github accounts-link",
    name: "github"
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "https://www.linkedin.com/in/nitu-deka-12bb42160/",
    rel: "noopener noreferrer",
    target: "_blank"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Svg_Svg__["a" /* default */], {
    className: "svg__about-linkedin accounts-link",
    name: "linkedin"
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ })
/******/ ]);