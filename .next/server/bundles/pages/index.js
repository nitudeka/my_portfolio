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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
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
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./components/Layout.js + 2 modules
var Layout = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Header/Header.js


var Header_Header = function Header() {
  return external__react__default.a.createElement("div", {
    className: "header"
  }, external__react__default.a.createElement("h1", {
    className: "heading__primary"
  }, external__react__default.a.createElement("span", {
    className: "heading__primary--main"
  }, "Nitu Deka"), external__react__default.a.createElement("span", {
    className: "heading__primary--sub"
  }, "Full stack web developer")));
};

/* harmony default export */ var components_Header_Header = (Header_Header);
// CONCATENATED MODULE: ./pages/index.js




var pages_index = function index() {
  return external__react__default.a.createElement(Layout["a" /* default */], null, external__react__default.a.createElement(components_Header_Header, null));
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_index);

/***/ })
/******/ ]);