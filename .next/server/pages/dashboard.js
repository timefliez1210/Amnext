module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/dashboard.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/AccountContext.jsx":
/*!***************************************!*\
  !*** ./components/AccountContext.jsx ***!
  \***************************************/
/*! exports provided: AccountProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountProvider", function() { return AccountProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\crfab\\Desktop\\forsage-boilerplate\\components\\AccountContext.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const AccountContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(); // export const AccountProvider = AccountContext.Provider;
// export const AccountConsumer = AccountContext.Consumer;

class AccountProvider extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      account: ""
    });

    _defineProperty(this, "setAccount", account => {
      this.setState(prevState => ({
        account
      }));
    });
  }

  render() {
    const {
      children
    } = this.props;
    const {
      account
    } = this.state;
    const {
      setAccount
    } = this;
    return __jsx(AccountContext.Provider, {
      value: {
        account,
        setAccount
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7
      }
    }, children);
  }

}


/* harmony default export */ __webpack_exports__["default"] = (AccountContext);

/***/ }),

/***/ "./components/InfoHeader.jsx":
/*!***********************************!*\
  !*** ./components/InfoHeader.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _infoheader_ItemHolder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./infoheader/ItemHolder */ "./components/infoheader/ItemHolder.jsx");
var _jsxFileName = "C:\\Users\\crfab\\Desktop\\forsage-boilerplate\\components\\InfoHeader.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const InfoHeader = props => {
  return __jsx("div", {
    className: "jsx-3049233130" + " " + "info-margin",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx(_infoheader_ItemHolder__WEBPACK_IMPORTED_MODULE_2__["default"], {
    pic: "/assets/img/user_icon.png",
    title: "All Participants",
    amount: props.totalUsers,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }), __jsx(_infoheader_ItemHolder__WEBPACK_IMPORTED_MODULE_2__["default"], {
    pic: "/assets/img/last_24.jpg",
    title: "Joined in 24 hours",
    amount: props.totalUsers,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), __jsx(_infoheader_ItemHolder__WEBPACK_IMPORTED_MODULE_2__["default"], {
    pic: "/assets/img/ethereum.jpg",
    title: "Participant MATIC",
    amount: props.totalUsers * 300,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx(_infoheader_ItemHolder__WEBPACK_IMPORTED_MODULE_2__["default"], {
    pic: "/assets/img/euro.jpg",
    title: "Participant USD",
    amount: props.totalUsers * 300 * 130,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3049233130",
    __self: undefined
  }, ".info-margin.jsx-3049233130{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));grid-gap:50px;margin:auto auto;margin-top:10vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXEluZm9IZWFkZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCa0IsQUFHd0IsYUFDOEMseURBQzdDLGNBQ0csaUJBQ0QsZ0JBQ2xCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXEluZm9IZWFkZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEl0ZW1Ib2xkZXIgZnJvbSBcIi4vaW5mb2hlYWRlci9JdGVtSG9sZGVyXCI7XHJcblxyXG5jb25zdCBJbmZvSGVhZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1tYXJnaW5cIj5cclxuICAgICAgPEl0ZW1Ib2xkZXJcclxuICAgICAgICBwaWM9XCIvYXNzZXRzL2ltZy91c2VyX2ljb24ucG5nXCJcclxuICAgICAgICB0aXRsZT1cIkFsbCBQYXJ0aWNpcGFudHNcIlxyXG4gICAgICAgIGFtb3VudD17cHJvcHMudG90YWxVc2Vyc31cclxuICAgICAgLz5cclxuICAgICAgPEl0ZW1Ib2xkZXJcclxuICAgICAgICBwaWM9XCIvYXNzZXRzL2ltZy9sYXN0XzI0LmpwZ1wiXHJcbiAgICAgICAgdGl0bGU9XCJKb2luZWQgaW4gMjQgaG91cnNcIlxyXG4gICAgICAgIGFtb3VudD17cHJvcHMudG90YWxVc2Vyc31cclxuICAgICAgLz5cclxuICAgICAgPEl0ZW1Ib2xkZXJcclxuICAgICAgICBwaWM9XCIvYXNzZXRzL2ltZy9ldGhlcmV1bS5qcGdcIlxyXG4gICAgICAgIHRpdGxlPVwiUGFydGljaXBhbnQgTUFUSUNcIlxyXG4gICAgICAgIGFtb3VudD17cHJvcHMudG90YWxVc2VycyAqIDMwMH1cclxuICAgICAgLz5cclxuICAgICAgPEl0ZW1Ib2xkZXJcclxuICAgICAgICBwaWM9XCIvYXNzZXRzL2ltZy9ldXJvLmpwZ1wiXHJcbiAgICAgICAgdGl0bGU9XCJQYXJ0aWNpcGFudCBVU0RcIlxyXG4gICAgICAgIGFtb3VudD17cHJvcHMudG90YWxVc2VycyAqIDMwMCAqIDEzMH1cclxuICAgICAgLz5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5pbmZvLW1hcmdpbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XHJcbiAgICAgICAgICBncmlkLWdhcDogNTBweDtcclxuICAgICAgICAgIG1hcmdpbjogYXV0byBhdXRvO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTB2aDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmZvSGVhZGVyO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\components\\\\InfoHeader.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (InfoHeader);

/***/ }),

/***/ "./components/Navigation.jsx":
/*!***********************************!*\
  !*** ./components/Navigation.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\crfab\\Desktop\\forsage-boilerplate\\components\\Navigation.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Navigation = () => {
  return __jsx("nav", {
    className: "jsx-334056973",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("ul", {
    className: "jsx-334056973",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("li", {
    className: "jsx-334056973",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }
  }, __jsx("a", {
    title: "",
    className: "jsx-334056973",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, "Main"))), __jsx("li", {
    className: "jsx-334056973",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, __jsx("a", {
    title: "",
    className: "jsx-334056973",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, "Office"))), __jsx("li", {
    className: "jsx-334056973",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, __jsx("a", {
    title: "",
    className: "jsx-334056973",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, "Partners"))), __jsx("li", {
    className: "jsx-334056973",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, __jsx("a", {
    title: "",
    className: "jsx-334056973",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, "Statistics"))), __jsx("li", {
    className: "jsx-334056973",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx("a", {
    title: "",
    className: "jsx-334056973",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, "Goal"))), __jsx("li", {
    className: "jsx-334056973",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx("a", {
    title: "",
    className: "jsx-334056973",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, "Instructions")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "334056973",
    __self: undefined
  }, "nav.jsx-334056973{background:rgba(28,22,85,1);height:auto;width:100%;position:fixed;top:0px;padding:5px 0;z-index:999;font-size:20px;color:grex;}nav.jsx-334056973 ul.jsx-334056973{background:rgba(28,22,85,1);display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-margin-before:0;margin-block-start:0;-webkit-margin-after:0;margin-block-end:0;-webkit-padding-start:0;padding-inline-start:0;height:100%;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:90%;margin:0 auto;}nav.jsx-334056973 figure.jsx-334056973{display:none;cursor:pointer;}nav.jsx-334056973 ul.jsx-334056973 li.jsx-334056973{list-style-type:none;padding:10px 20px;}nav.jsx-334056973 ul.jsx-334056973 li.jsx-334056973 a.jsx-334056973{color:#6a668f;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXE5hdmlnYXRpb24uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDa0IsQUFHMEMsQUFZQSxBQW1CbEIsQUFLUSxBQUtQLGFBVEMsQ0FVakIsT0FMb0IsT0FwQ04sQUFZUSxBQW9CdEIsV0FLQSxDQXBDYSxRQVlTLEdBWEwsZUFDUCxFQVdLLE1BVkMsY0FDRixZQUNHLGVBQ0osV0FDYixnQkFPMEIsd0JBQ0gscUJBQ0UsdUJBQ0osbUJBQ0ssd0JBQ0QsdUJBQ1gsWUFDYSx5QkFDSCxzQkFDSCw2RkFDVCxVQUNJLGNBQ2hCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXE5hdmlnYXRpb24uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgTmF2aWdhdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPG5hdj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJcIj5cclxuICAgICAgICAgICAgPGEgdGl0bGU9XCJcIj5NYWluPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIlwiPlxyXG4gICAgICAgICAgICA8YSB0aXRsZT1cIlwiPk9mZmljZTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJcIj5cclxuICAgICAgICAgICAgPGEgdGl0bGU9XCJcIj5QYXJ0bmVyczwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJcIj5cclxuICAgICAgICAgICAgPGEgdGl0bGU9XCJcIj5TdGF0aXN0aWNzPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIlwiPlxyXG4gICAgICAgICAgICA8YSB0aXRsZT1cIlwiPkdvYWw8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiXCI+XHJcbiAgICAgICAgICAgIDxhIHRpdGxlPVwiXCI+SW5zdHJ1Y3Rpb25zPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBuYXYge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyOCwgMjIsIDg1LCAxKTtcclxuICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIGNvbG9yOiBncmV4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmF2IHVsIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjgsIDIyLCA4NSwgMSk7XHJcbiAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIC13ZWJraXQtbWFyZ2luLWJlZm9yZTogMDtcclxuICAgICAgICAgIG1hcmdpbi1ibG9jay1zdGFydDogMDtcclxuICAgICAgICAgIC13ZWJraXQtbWFyZ2luLWFmdGVyOiAwO1xyXG4gICAgICAgICAgbWFyZ2luLWJsb2NrLWVuZDogMDtcclxuICAgICAgICAgIC13ZWJraXQtcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmF2IGZpZ3VyZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmF2IHVsIGxpIHtcclxuICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hdiB1bCBsaSBhIHtcclxuICAgICAgICAgIGNvbG9yOiAjNmE2NjhmO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\components\\\\Navigation.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./components/Spinner.jsx":
/*!********************************!*\
  !*** ./components/Spinner.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\crfab\\Desktop\\forsage-boilerplate\\components\\Spinner.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Spinner = () => {
  return __jsx("div", {
    className: "jsx-926516333" + " " + "holder",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-926516333" + " " + "heart-holder",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-926516333" + " " + "lds-heart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-926516333",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 11
    }
  })), __jsx("h1", {
    className: "jsx-926516333",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, "Connecting to the Contract and getting your Dashboard")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "926516333",
    __self: undefined
  }, ".holder.jsx-926516333{background:none;padding-top:20vh;}.heart-holder.jsx-926516333{color:white;text-align:center;max-width:600px;max-height:200px;margin:auto auto;}.lds-heart.jsx-926516333{display:inline-block;position:relative;width:80px;height:80px;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:40px 40px;-ms-transform-origin:40px 40px;transform-origin:40px 40px;}.lds-heart.jsx-926516333 div.jsx-926516333{top:32px;left:32px;position:absolute;width:32px;height:32px;background:red;-webkit-animation:lds-heart-jsx-926516333 1.2s infinite cubic-bezier(0.215,0.61,0.355,1);animation:lds-heart-jsx-926516333 1.2s infinite cubic-bezier(0.215,0.61,0.355,1);}.lds-heart.jsx-926516333 div.jsx-926516333:after,.lds-heart.jsx-926516333 div.jsx-926516333:before{content:\" \";position:absolute;display:block;width:32px;height:32px;background:red;}.lds-heart.jsx-926516333 div.jsx-926516333:before{left:-24px;border-radius:50% 0 0 50%;}.lds-heart.jsx-926516333 div.jsx-926516333:after{top:-24px;border-radius:50% 50% 0 0;}@-webkit-keyframes lds-heart-jsx-926516333{0%{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);}5%{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}39%{-webkit-transform:scale(0.85);-ms-transform:scale(0.85);transform:scale(0.85);}45%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}60%{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);}100%{-webkit-transform:scale(0.9);-ms-transform:scale(0.9);transform:scale(0.9);}}@keyframes lds-heart-jsx-926516333{0%{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);}5%{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}39%{-webkit-transform:scale(0.85);-ms-transform:scale(0.85);transform:scale(0.85);}45%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}60%{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);}100%{-webkit-transform:scale(0.9);-ms-transform:scale(0.9);transform:scale(0.9);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXFNwaW5uZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVrQixBQUcyQixBQUlKLEFBT1MsQUFRWixBQVVHLEFBUUQsQUFJRCxBQUtjLEFBR0QsQUFHQyxBQUdILEFBR0csQUFHRCxTQXpDYixDQXNCZ0IsQ0FKQSxDQWpDUixBQXlCQSxJQTdCRCxHQW9CQyxFQVRBLFNBTkYsQUF5QkYsR0E3QmhCLEdBeUNBLENBckJhLEFBaUJiLEVBMUJhLEtBbUJBLEVBekJNLEVBZ0JMLEVBVEEsS0FtQkEsS0FURyxFQVRTLENBUFAsSUEwQkYsRUFzQmYsTUEvQnNFLEFBeUJ0RSxBQVlBLEdBZkEsQUFNQSxBQU1BLEVBbERGLEVBMEJBLGdFQW5CNkIsNkZBQzdCLE1BU0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxjcmZhYlxcRGVza3RvcFxcZm9yc2FnZS1ib2lsZXJwbGF0ZVxcY29tcG9uZW50c1xcU3Bpbm5lci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTcGlubmVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbGRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYXJ0LWhvbGRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGRzLWhlYXJ0XCI+XHJcbiAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxoMT5Db25uZWN0aW5nIHRvIHRoZSBDb250cmFjdCBhbmQgZ2V0dGluZyB5b3VyIERhc2hib2FyZDwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5ob2xkZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHZoO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaGVhcnQtaG9sZGVyIHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgIG1hcmdpbjogYXV0byBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGRzLWhlYXJ0IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNDBweCA0MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGRzLWhlYXJ0IGRpdiB7XHJcbiAgICAgICAgICB0b3A6IDMycHg7XHJcbiAgICAgICAgICBsZWZ0OiAzMnB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICAgICAgICBhbmltYXRpb246IGxkcy1oZWFydCAxLjJzIGluZmluaXRlIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGRzLWhlYXJ0IGRpdjphZnRlcixcclxuICAgICAgICAubGRzLWhlYXJ0IGRpdjpiZWZvcmUge1xyXG4gICAgICAgICAgY29udGVudDogXCIgXCI7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGRzLWhlYXJ0IGRpdjpiZWZvcmUge1xyXG4gICAgICAgICAgbGVmdDogLTI0cHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCUgMCAwIDUwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxkcy1oZWFydCBkaXY6YWZ0ZXIge1xyXG4gICAgICAgICAgdG9wOiAtMjRweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgMCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAa2V5ZnJhbWVzIGxkcy1oZWFydCB7XHJcbiAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA1JSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDM5JSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44NSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA0NSUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgNjAlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTcGlubmVyO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\components\\\\Spinner.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Spinner);

/***/ }),

/***/ "./components/infoheader/ItemHolder.jsx":
/*!**********************************************!*\
  !*** ./components/infoheader/ItemHolder.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\crfab\\Desktop\\forsage-boilerplate\\components\\infoheader\\ItemHolder.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const ItemHolder = props => {
  return __jsx("div", {
    className: "jsx-2618775409" + " " + "upper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-2618775409" + " " + "holder",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: props.pic,
    className: "jsx-2618775409" + " " + "display",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "jsx-2618775409",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "jsx-2618775409",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 11
    }
  }, props.title), __jsx("h3", {
    className: "jsx-2618775409",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }
  }, props.amount))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2618775409",
    __self: undefined
  }, ".upper.jsx-2618775409{background:rgba(28,22,85,1);border-radius:20px;}.holder.jsx-2618775409{width:90%;margin:0 auto;display:grid;grid-template-columns:80px auto;}.display.jsx-2618775409{margin-top:20px;width:60px;border-radius:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXGluZm9oZWFkZXJcXEl0ZW1Ib2xkZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVrQixBQUcwQyxBQUlyQixBQU1NLFVBTEYsTUFNSCxRQUxFLEdBTUssQ0FYQyxTQU1hLFFBTWxDLEVBWEEsc0JBTUEiLCJmaWxlIjoiQzpcXFVzZXJzXFxjcmZhYlxcRGVza3RvcFxcZm9yc2FnZS1ib2lsZXJwbGF0ZVxcY29tcG9uZW50c1xcaW5mb2hlYWRlclxcSXRlbUhvbGRlci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBJdGVtSG9sZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidXBwZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJob2xkZXJcIj5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImRpc3BsYXlcIiBzcmM9e3Byb3BzLnBpY30gLz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgzPntwcm9wcy50aXRsZX08L2gzPlxyXG4gICAgICAgICAgPGgzPntwcm9wcy5hbW91bnR9PC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAudXBwZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyOCwgMjIsIDg1LCAxKTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ob2xkZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODBweCBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGlzcGxheSB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXRlbUhvbGRlcjtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\components\\\\infoheader\\\\ItemHolder.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ItemHolder);

/***/ }),

/***/ "./components/matrix/Circle.jsx":
/*!**************************************!*\
  !*** ./components/matrix/Circle.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\crfab\\Desktop\\forsage-boilerplate\\components\\matrix\\Circle.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Circle = props => {
  if (props.exist === true) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
      className: "jsx-3911087242" + " " + "circle",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 9
      }
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3911087242",
      __self: undefined
    }, ".circle.jsx-3911087242{height:30px;width:30px;border-radius:50%;border:1.5px solid #1ea6ff;background:#1ea6ff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXG1hdHJpeFxcQ2lyY2xlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLb0IsQUFHbUIsWUFDSyxXQUNPLGtCQUNTLDJCQUNSLG1CQUMzQiIsImZpbGUiOiJDOlxcVXNlcnNcXGNyZmFiXFxEZXNrdG9wXFxmb3JzYWdlLWJvaWxlcnBsYXRlXFxjb21wb25lbnRzXFxtYXRyaXhcXENpcmNsZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDaXJjbGUgPSAocHJvcHMpID0+IHtcclxuICBpZiAocHJvcHMuZXhpc3QgPT09IHRydWUpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVcIj48L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAuY2lyY2xlIHtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDEuNXB4IHNvbGlkICMxZWE2ZmY7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxZWE2ZmY7XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGUtZW1wdHlcIj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuY2lyY2xlLWVtcHR5IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDEuNXB4IHNvbGlkICMxZWE2ZmY7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2lyY2xlO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\components\\\\matrix\\\\Circle.jsx */"));
  } else {
    return __jsx("div", {
      className: "jsx-445317706" + " " + "circle-empty",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }
    }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "445317706",
      __self: undefined
    }, ".circle-empty.jsx-445317706{height:30px;width:30px;border-radius:50%;border:1.5px solid #1ea6ff;background:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXG1hdHJpeFxcQ2lyY2xlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQm9CLEFBR3lCLFlBQ0QsV0FDTyxrQkFDUywyQkFDWCxnQkFDbEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxjcmZhYlxcRGVza3RvcFxcZm9yc2FnZS1ib2lsZXJwbGF0ZVxcY29tcG9uZW50c1xcbWF0cml4XFxDaXJjbGUuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ2lyY2xlID0gKHByb3BzKSA9PiB7XHJcbiAgaWYgKHByb3BzLmV4aXN0ID09PSB0cnVlKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlXCI+PC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgLmNpcmNsZSB7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjMWVhNmZmO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMWVhNmZmO1xyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlLWVtcHR5XCI+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmNpcmNsZS1lbXB0eSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjMWVhNmZmO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENpcmNsZTtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\components\\\\matrix\\\\Circle.jsx */"));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Circle);

/***/ }),

/***/ "./components/matrix/MatrixSystem.jsx":
/*!********************************************!*\
  !*** ./components/matrix/MatrixSystem.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _X3MatrixHolder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./X3MatrixHolder */ "./components/matrix/X3MatrixHolder.jsx");
/* harmony import */ var _X4MatrixHolder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./X4MatrixHolder */ "./components/matrix/X4MatrixHolder.jsx");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/globals */ "./utils/globals.js");
/* harmony import */ var _utils_utility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/utility */ "./utils/utility.js");
var _jsxFileName = "C:\\Users\\crfab\\Desktop\\forsage-boilerplate\\components\\matrix\\MatrixSystem.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







class MatrixSystem extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  async UNSAFE_componentWillMount() {
    this.setState({
      account: this.props.account
    });
    await Object(_utils_utility__WEBPACK_IMPORTED_MODULE_5__["loadWeb3"])();
    await this.loadBlockchainData();
  }

  async loadBlockchainData() {
    try {
      const web3 = new web3__WEBPACK_IMPORTED_MODULE_3___default.a(web3__WEBPACK_IMPORTED_MODULE_3___default.a.givenProvider || "http://localhost:8545");
      const contract = new web3.eth.Contract(_utils_globals__WEBPACK_IMPORTED_MODULE_4__["ABI"], _utils_globals__WEBPACK_IMPORTED_MODULE_4__["ADDRESS"]);
      this.setState({
        contract
      }); // Matrix Calls

      const costs = await contract.methods.registrationCost().call();

      const _costs = web3.utils.fromWei(costs, "ether");

      this.setState({
        cost: _costs
      });
      const x3 = [];

      for (let i = 1; i < 13; i++) {
        const res = await contract.methods.usersX3Matrix(this.state.account, i).call();
        x3.push({
          level: i,
          userX3: res
        });
      }

      const elements = [];

      for (let i = 0; i < 12; i++) {
        let j = i + 1;
        const downlines = x3[i].userX3[1].length;
        elements.push({
          id: j,
          number: downlines,
          key: j,
          cost: this.state.cost / 2 * j
        });
      }

      const x3Exist = [];

      for (let i = 1; i < 13; i++) {
        const res = await contract.methods.usersActiveX3Levels(this.state.account, i).call();
        x3Exist.push({
          id: i,
          userX3Exist: res
        });
      }

      const x3Payload = this.x3Infos(x3Exist, elements);
      this.setState({
        x3Payload
      });
    } catch (err) {
      window.alert(err);
    }
  }

  x3Infos(arr1, arr2) {
    return arr1.map((item, i) => {
      if (item.id === arr2[i].id) {
        return Object.assign({}, item, arr2[i]);
      }
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      parnterCount: "",
      cost: ""
    };
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_X3MatrixHolder__WEBPACK_IMPORTED_MODULE_1__["default"], {
      struc: this.state.x3Payload,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }
    }), __jsx(_X4MatrixHolder__WEBPACK_IMPORTED_MODULE_2__["default"], {
      cost: this.state.cost,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MatrixSystem);

/***/ }),

/***/ "./components/matrix/X3MatrixHolder.jsx":
/*!**********************************************!*\
  !*** ./components/matrix/X3MatrixHolder.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _X3matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./X3matrix */ "./components/matrix/X3matrix.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Spinner_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Spinner.jsx */ "./components/Spinner.jsx");
var _jsxFileName = "C:\\Users\\crfab\\Desktop\\forsage-boilerplate\\components\\matrix\\X3MatrixHolder.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




const X3MatrixHolder = props => {
  const {
    0: reload,
    1: setReload
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (props.struc != undefined) {
      setReload(1);
    }
  }, reload);

  if (props.struc === undefined) {
    return __jsx("div", {
      className: "jsx-732823435" + " " + "upper-holder",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "jsx-732823435" + " " + "top-part",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }
    }, __jsx("h1", {
      className: "jsx-732823435",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }
    }, "Forsage x3")), __jsx("div", {
      className: "jsx-732823435" + " " + "bottom-part",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, __jsx(_Spinner_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }
    })), __jsx("p", {
      className: "jsx-732823435",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }
    }, "Hallo ich bin der L\xFCckenf\xFCller Text f\xFCr die Icones"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "732823435",
      __self: undefined
    }, ".upper-holder.jsx-732823435{margin-bottom:20px;text-align:left;}.top-part.jsx-732823435{width:100%;background:rgba(28,22,85,1);border-radius:20px 20px 0 0;padding:10px 10px;}.bottom-part.jsx-732823435{width:100%;background:rgba(28,22,85,1);border-radius:0 0 20px 20px;padding:10px 10px;border-top:2px solid black;display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));grid-gap:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXG1hdHJpeFxcWDNNYXRyaXhIb2xkZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCb0IsQUFHZ0MsQUFJUixBQU1BLFdBTG9CLEFBTUEsUUFWZixnQkFDbEIsSUFJOEIsQUFNQSw0QkFMVixBQU1BLGtCQUxwQixBQU02QiwyQkFDZCxhQUM4Qyx5REFDN0MsY0FDaEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxjcmZhYlxcRGVza3RvcFxcZm9yc2FnZS1ib2lsZXJwbGF0ZVxcY29tcG9uZW50c1xcbWF0cml4XFxYM01hdHJpeEhvbGRlci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgWDNNYXRyaXggZnJvbSBcIi4vWDNtYXRyaXhcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uL1NwaW5uZXIuanN4XCI7XHJcblxyXG5jb25zdCBYM01hdHJpeEhvbGRlciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtyZWxvYWQsIHNldFJlbG9hZF0gPSB1c2VTdGF0ZSgwKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHByb3BzLnN0cnVjICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBzZXRSZWxvYWQoMSk7XHJcbiAgICB9XHJcbiAgfSwgcmVsb2FkKTtcclxuXHJcbiAgaWYgKHByb3BzLnN0cnVjID09PSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBwZXItaG9sZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtcGFydFwiPlxyXG4gICAgICAgICAgPGgxPkZvcnNhZ2UgeDM8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tLXBhcnRcIj5cclxuICAgICAgICAgIDxTcGlubmVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHA+SGFsbG8gaWNoIGJpbiBkZXIgTMO8Y2tlbmbDvGxsZXIgVGV4dCBmw7xyIGRpZSBJY29uZXM8L3A+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLnVwcGVyLWhvbGRlciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudG9wLXBhcnQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyOCwgMjIsIDg1LCAxKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJvdHRvbS1wYXJ0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjgsIDIyLCA4NSwgMSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcclxuICAgICAgICAgICAgZ3JpZC1nYXA6IDMwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cHBlci1ob2xkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLXBhcnRcIj5cclxuICAgICAgICAgICAgPGgxPkZvcnNhZ2UgeDM8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbS1wYXJ0XCI+XHJcbiAgICAgICAgICAgIHtwcm9wcy5zdHJ1Yy5tYXAoKG1hdHJpeCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8WDNNYXRyaXhcclxuICAgICAgICAgICAgICAgIGlkPXttYXRyaXguaWR9XHJcbiAgICAgICAgICAgICAgICBrZXk9e21hdHJpeC5rZXl9XHJcbiAgICAgICAgICAgICAgICBjb3N0PXttYXRyaXguY29zdH1cclxuICAgICAgICAgICAgICAgIGFjdGl2ZT17bWF0cml4Lm51bWJlcn1cclxuICAgICAgICAgICAgICAgIGJvdWdodD17bWF0cml4LnVzZXJYM0V4aXN0fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPHA+SGFsbG8gaWNoIGJpbiBkZXIgTMO8Y2tlbmbDvGxsZXIgVGV4dCBmw7xyIGRpZSBJY29uZXM8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLnVwcGVyLWhvbGRlciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudG9wLXBhcnQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyOCwgMjIsIDg1LCAxKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJvdHRvbS1wYXJ0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjgsIDIyLCA4NSwgMSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcclxuICAgICAgICAgICAgZ3JpZC1nYXA6IDMwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBYM01hdHJpeEhvbGRlcjtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\components\\\\matrix\\\\X3MatrixHolder.jsx */"));
  } else {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
      className: "jsx-732823435" + " " + "upper-holder",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "jsx-732823435" + " " + "top-part",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 11
      }
    }, __jsx("h1", {
      className: "jsx-732823435",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }
    }, "Forsage x3")), __jsx("div", {
      className: "jsx-732823435" + " " + "bottom-part",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 11
      }
    }, props.struc.map((matrix, index) => __jsx(_X3matrix__WEBPACK_IMPORTED_MODULE_1__["default"], {
      id: matrix.id,
      key: matrix.key,
      cost: matrix.cost,
      active: matrix.number,
      bought: matrix.userX3Exist,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 15
      }
    }))), __jsx("p", {
      className: "jsx-732823435",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 11
      }
    }, "Hallo ich bin der L\xFCckenf\xFCller Text f\xFCr die Icones")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "732823435",
      __self: undefined
    }, ".upper-holder.jsx-732823435{margin-bottom:20px;text-align:left;}.top-part.jsx-732823435{width:100%;background:rgba(28,22,85,1);border-radius:20px 20px 0 0;padding:10px 10px;}.bottom-part.jsx-732823435{width:100%;background:rgba(28,22,85,1);border-radius:0 0 20px 20px;padding:10px 10px;border-top:2px solid black;display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));grid-gap:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXG1hdHJpeFxcWDNNYXRyaXhIb2xkZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Fb0IsQUFHZ0MsQUFJUixBQU1BLFdBTG9CLEFBTUEsUUFWZixnQkFDbEIsSUFJOEIsQUFNQSw0QkFMVixBQU1BLGtCQUxwQixBQU02QiwyQkFDZCxhQUM4Qyx5REFDN0MsY0FDaEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxjcmZhYlxcRGVza3RvcFxcZm9yc2FnZS1ib2lsZXJwbGF0ZVxcY29tcG9uZW50c1xcbWF0cml4XFxYM01hdHJpeEhvbGRlci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgWDNNYXRyaXggZnJvbSBcIi4vWDNtYXRyaXhcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uL1NwaW5uZXIuanN4XCI7XHJcblxyXG5jb25zdCBYM01hdHJpeEhvbGRlciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtyZWxvYWQsIHNldFJlbG9hZF0gPSB1c2VTdGF0ZSgwKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHByb3BzLnN0cnVjICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBzZXRSZWxvYWQoMSk7XHJcbiAgICB9XHJcbiAgfSwgcmVsb2FkKTtcclxuXHJcbiAgaWYgKHByb3BzLnN0cnVjID09PSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBwZXItaG9sZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtcGFydFwiPlxyXG4gICAgICAgICAgPGgxPkZvcnNhZ2UgeDM8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tLXBhcnRcIj5cclxuICAgICAgICAgIDxTcGlubmVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHA+SGFsbG8gaWNoIGJpbiBkZXIgTMO8Y2tlbmbDvGxsZXIgVGV4dCBmw7xyIGRpZSBJY29uZXM8L3A+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLnVwcGVyLWhvbGRlciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudG9wLXBhcnQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyOCwgMjIsIDg1LCAxKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJvdHRvbS1wYXJ0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjgsIDIyLCA4NSwgMSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcclxuICAgICAgICAgICAgZ3JpZC1nYXA6IDMwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cHBlci1ob2xkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLXBhcnRcIj5cclxuICAgICAgICAgICAgPGgxPkZvcnNhZ2UgeDM8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbS1wYXJ0XCI+XHJcbiAgICAgICAgICAgIHtwcm9wcy5zdHJ1Yy5tYXAoKG1hdHJpeCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8WDNNYXRyaXhcclxuICAgICAgICAgICAgICAgIGlkPXttYXRyaXguaWR9XHJcbiAgICAgICAgICAgICAgICBrZXk9e21hdHJpeC5rZXl9XHJcbiAgICAgICAgICAgICAgICBjb3N0PXttYXRyaXguY29zdH1cclxuICAgICAgICAgICAgICAgIGFjdGl2ZT17bWF0cml4Lm51bWJlcn1cclxuICAgICAgICAgICAgICAgIGJvdWdodD17bWF0cml4LnVzZXJYM0V4aXN0fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPHA+SGFsbG8gaWNoIGJpbiBkZXIgTMO8Y2tlbmbDvGxsZXIgVGV4dCBmw7xyIGRpZSBJY29uZXM8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLnVwcGVyLWhvbGRlciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudG9wLXBhcnQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyOCwgMjIsIDg1LCAxKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJvdHRvbS1wYXJ0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjgsIDIyLCA4NSwgMSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcclxuICAgICAgICAgICAgZ3JpZC1nYXA6IDMwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBYM01hdHJpeEhvbGRlcjtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\components\\\\matrix\\\\X3MatrixHolder.jsx */"));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (X3MatrixHolder);

/***/ }),

/***/ "./components/matrix/X3matrix.jsx":
/*!****************************************!*\
  !*** ./components/matrix/X3matrix.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Circle */ "./components/matrix/Circle.jsx");
var _jsxFileName = "C:\\Users\\crfab\\Desktop\\forsage-boilerplate\\components\\matrix\\X3matrix.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const X3matrix = props => {
  if (props.bought) {
    if (props.active === 0) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
        className: "jsx-2568916271" + " " + "holder",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "jsx-2568916271" + " " + "matrix-head",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "jsx-2568916271" + " " + "level",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 15
        }
      }, props.id), __jsx("div", {
        className: "jsx-2568916271" + " " + "id",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 15
        }
      }, props.cost)), __jsx("div", {
        className: "jsx-2568916271" + " " + "items",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "jsx-2568916271" + " " + "lines",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 15
        }
      }), __jsx("div", {
        className: "jsx-2568916271" + " " + "lines",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 15
        }
      }), __jsx("div", {
        className: "jsx-2568916271" + " " + "lines",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 15
        }
      })), __jsx("div", {
        className: "jsx-2568916271" + " " + "downlines",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 13
        }
      }, __jsx(_Circle__WEBPACK_IMPORTED_MODULE_2__["default"], {
        exist: false,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 15
        }
      }), __jsx(_Circle__WEBPACK_IMPORTED_MODULE_2__["default"], {
        exist: false,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 15
        }
      }), __jsx(_Circle__WEBPACK_IMPORTED_MODULE_2__["default"], {
        exist: false,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 15
        }
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        id: "2568916271",
        __self: undefined
      }, ".holder.jsx-2568916271{width:auto;width:200px;}.matrix-head.jsx-2568916271{background:rgb(31,169,255);background:linear-gradient( 270deg, rgba(31,169,255,1) 31%, rgba(21,117,251,1) 77% );display:grid;grid-template-columns:50px 150px;border-radius:20px;font-style:bold;font-size:1.2em;height:70px;overflow:hidden;cursor:pointer;}.level.jsx-2568916271{background:#338eff;padding:20px 20px;border-radius:20px;}.id.jsx-2568916271{padding:20px 20px;}.items.jsx-2568916271{display:grid;grid-template-columns:30px 30px 30px;grid-gap:43px;}.lines.jsx-2568916271{height:25px;width:2px;background:lightblue;margin:auto auto;}.downlines.jsx-2568916271{display:grid;grid-template-columns:30px 30px 30px;grid-gap:43px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXG1hdHJpeFxcWDNtYXRyaXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCc0IsQUFHMEIsQUFJa0IsQUFnQlYsQUFLRCxBQUdMLEFBS0QsQUFNQyxXQXRDRCxDQWlDRixDQUwyQixBQVdBLEtBZHZDLENBTG9CLEdBY0csQ0FqQ3ZCLElBT0csVUFha0IsTUFjRixPQU5ILEFBV0EsTUFsQmhCLElBY0EsSUFOQSxBQVdBLGdEQWhDZSxhQUNvQixpQ0FDZCxtQkFDSCxnQkFDQSxnQkFDSixZQUNJLGdCQUNELGVBQ2pCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXG1hdHJpeFxcWDNtYXRyaXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENpcmNsZSBmcm9tIFwiLi9DaXJjbGVcIjtcclxuXHJcbmNvbnN0IFgzbWF0cml4ID0gKHByb3BzKSA9PiB7XHJcbiAgaWYgKHByb3BzLmJvdWdodCkge1xyXG4gICAgaWYgKHByb3BzLmFjdGl2ZSA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbGRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hdHJpeC1oZWFkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbFwiPntwcm9wcy5pZH08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlkXCI+e3Byb3BzLmNvc3R9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvd25saW5lc1wiPlxyXG4gICAgICAgICAgICAgIDxDaXJjbGUgZXhpc3Q9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICAgIDxDaXJjbGUgZXhpc3Q9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICAgIDxDaXJjbGUgZXhpc3Q9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAuaG9sZGVyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1hdHJpeC1oZWFkIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMzEsIDE2OSwgMjU1KTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgICAyNzBkZWcsXHJcbiAgICAgICAgICAgICAgICByZ2JhKDMxLCAxNjksIDI1NSwgMSkgMzElLFxyXG4gICAgICAgICAgICAgICAgcmdiYSgyMSwgMTE3LCAyNTEsIDEpIDc3JVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggMTUwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICBmb250LXN0eWxlOiBib2xkO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sZXZlbCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzMzOGVmZjtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaWQge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaXRlbXMge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDMwcHggMzBweDtcclxuICAgICAgICAgICAgICBncmlkLWdhcDogNDNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGluZXMge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcclxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZG93bmxpbmVzIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAzMHB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDQzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAocHJvcHMuYWN0aXZlID09PSAxKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9sZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF0cml4LWhlYWRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsXCI+e3Byb3BzLmlkfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWRcIj57cHJvcHMuY29zdH08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG93bmxpbmVzXCI+XHJcbiAgICAgICAgICAgICAgPENpcmNsZSBleGlzdD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICA8Q2lyY2xlIGV4aXN0PXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgICA8Q2lyY2xlIGV4aXN0PXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmhvbGRlciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tYXRyaXgtaGVhZCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDMxLCAxNjksIDI1NSk7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgICAgMjcwZGVnLFxyXG4gICAgICAgICAgICAgICAgcmdiYSgzMSwgMTY5LCAyNTUsIDEpIDMxJSxcclxuICAgICAgICAgICAgICAgIHJnYmEoMjEsIDExNywgMjUxLCAxKSA3NyVcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDE1MHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogYm9sZDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGV2ZWwge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzhlZmY7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmlkIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLml0ZW1zIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAzMHB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDQzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxpbmVzIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRvd25saW5lcyB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMzBweCAzMHB4O1xyXG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiA0M3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKHByb3BzLmFjdGl2ZSA9PT0gMikge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbGRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hdHJpeC1oZWFkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbFwiPntwcm9wcy5pZH08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlkXCI+e3Byb3BzLmNvc3R9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvd25saW5lc1wiPlxyXG4gICAgICAgICAgICAgIDxDaXJjbGUgZXhpc3Q9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgPENpcmNsZSBleGlzdD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICA8Q2lyY2xlIGV4aXN0PXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmhvbGRlciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tYXRyaXgtaGVhZCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDMxLCAxNjksIDI1NSk7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgICAgMjcwZGVnLFxyXG4gICAgICAgICAgICAgICAgcmdiYSgzMSwgMTY5LCAyNTUsIDEpIDMxJSxcclxuICAgICAgICAgICAgICAgIHJnYmEoMjEsIDExNywgMjUxLCAxKSA3NyVcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDE1MHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogYm9sZDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGV2ZWwge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzhlZmY7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmlkIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLml0ZW1zIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAzMHB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDQzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxpbmVzIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRvd25saW5lcyB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMzBweCAzMHB4O1xyXG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiA0M3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbGRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hdHJpeC1oZWFkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbFwiPntwcm9wcy5pZH08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlkXCI+e3Byb3BzLmNvc3R9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvd25saW5lc1wiPlxyXG4gICAgICAgICAgICAgIDxDaXJjbGUgZXhpc3Q9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgPENpcmNsZSBleGlzdD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICA8Q2lyY2xlIGV4aXN0PXt0cnVlfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAuaG9sZGVyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1hdHJpeC1oZWFkIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMzEsIDE2OSwgMjU1KTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgICAyNzBkZWcsXHJcbiAgICAgICAgICAgICAgICByZ2JhKDMxLCAxNjksIDI1NSwgMSkgMzElLFxyXG4gICAgICAgICAgICAgICAgcmdiYSgyMSwgMTE3LCAyNTEsIDEpIDc3JVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggMTUwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICBmb250LXN0eWxlOiBib2xkO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sZXZlbCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzMzOGVmZjtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaWQge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaXRlbXMge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDMwcHggMzBweDtcclxuICAgICAgICAgICAgICBncmlkLWdhcDogNDNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGluZXMge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcclxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZG93bmxpbmVzIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAzMHB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDQzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbGRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXRyaXgtaGVhZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsXCI+e3Byb3BzLmlkfTwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV5LWxldmVsXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQocHJvcHMuY29zdCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEJ1eSBmb3Ige3Byb3BzLmNvc3R9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVzXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG93bmxpbmVzXCI+XHJcbiAgICAgICAgICAgIDxDaXJjbGUgZXhpc3Q9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICA8Q2lyY2xlIGV4aXN0PXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgPENpcmNsZSBleGlzdD17ZmFsc2V9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuYnV5LWxldmVsIHtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhvbGRlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWF0cml4LWhlYWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2LCAxLCA2MiwgMSk7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCAxNTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubGV2ZWwge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzM4ZWZmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaWQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXRlbXMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMzBweCAzMHB4O1xyXG4gICAgICAgICAgICBncmlkLWdhcDogNDNweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5saW5lcyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kb3dubGluZXMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMzBweCAzMHB4O1xyXG4gICAgICAgICAgICBncmlkLWdhcDogNDNweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBYM21hdHJpeDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\components\\\\matrix\\\\X3matrix.jsx */"));
    } else if (props.active === 1) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
        className: "jsx-2568916271" + " " + "holder",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "jsx-2568916271" + " " + "matrix-head",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "jsx-2568916271" + " " + "level",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 15
        }
      }, props.id), __jsx("div", {
        className: "jsx-2568916271" + " " + "id",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 15
        }
      }, props.cost)), __jsx("div", {
        className: "jsx-2568916271" + " " + "items",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "jsx-2568916271" + " " + "lines",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 15
        }
      }), __jsx("div", {
        className: "jsx-2568916271" + " " + "lines",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 15
        }
      }), __jsx("div", {
        className: "jsx-2568916271" + " " + "lines",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 15
        }
      })), __jsx("div", {
        className: "jsx-2568916271" + " " + "downlines",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 13
        }
      }, __jsx(_Circle__WEBPACK_IMPORTED_MODULE_2__["default"], {
        exist: true,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 15
        }
      }), __jsx(_Circle__WEBPACK_IMPORTED_MODULE_2__["default"], {
        exist: false,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 15
        }
      }), __jsx(_Circle__WEBPACK_IMPORTED_MODULE_2__["default"], {
        exist: false,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 15
        }
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        id: "2568916271",
        __self: undefined
      }, ".holder.jsx-2568916271{width:auto;width:200px;}.matrix-head.jsx-2568916271{background:rgb(31,169,255);background:linear-gradient( 270deg, rgba(31,169,255,1) 31%, rgba(21,117,251,1) 77% );display:grid;grid-template-columns:50px 150px;border-radius:20px;font-style:bold;font-size:1.2em;height:70px;overflow:hidden;cursor:pointer;}.level.jsx-2568916271{background:#338eff;padding:20px 20px;border-radius:20px;}.id.jsx-2568916271{padding:20px 20px;}.items.jsx-2568916271{display:grid;grid-template-columns:30px 30px 30px;grid-gap:43px;}.lines.jsx-2568916271{height:25px;width:2px;background:lightblue;margin:auto auto;}.downlines.jsx-2568916271{display:grid;grid-template-columns:30px 30px 30px;grid-gap:43px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXG1hdHJpeFxcWDNtYXRyaXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBGc0IsQUFHMEIsQUFJa0IsQUFnQlYsQUFLRCxBQUdMLEFBS0QsQUFNQyxXQXRDRCxDQWlDRixDQUwyQixBQVdBLEtBZHZDLENBTG9CLEdBY0csQ0FqQ3ZCLElBT0csVUFha0IsTUFjRixPQU5ILEFBV0EsTUFsQmhCLElBY0EsSUFOQSxBQVdBLGdEQWhDZSxhQUNvQixpQ0FDZCxtQkFDSCxnQkFDQSxnQkFDSixZQUNJLGdCQUNELGVBQ2pCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXG1hdHJpeFxcWDNtYXRyaXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENpcmNsZSBmcm9tIFwiLi9DaXJjbGVcIjtcclxuXHJcbmNvbnN0IFgzbWF0cml4ID0gKHByb3BzKSA9PiB7XHJcbiAgaWYgKHByb3BzLmJvdWdodCkge1xyXG4gICAgaWYgKHByb3BzLmFjdGl2ZSA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbGRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hdHJpeC1oZWFkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbFwiPntwcm9wcy5pZH08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlkXCI+e3Byb3BzLmNvc3R9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvd25saW5lc1wiPlxyXG4gICAgICAgICAgICAgIDxDaXJjbGUgZXhpc3Q9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICAgIDxDaXJjbGUgZXhpc3Q9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICAgIDxDaXJjbGUgZXhpc3Q9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAuaG9sZGVyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1hdHJpeC1oZWFkIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMzEsIDE2OSwgMjU1KTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgICAyNzBkZWcsXHJcbiAgICAgICAgICAgICAgICByZ2JhKDMxLCAxNjksIDI1NSwgMSkgMzElLFxyXG4gICAgICAgICAgICAgICAgcmdiYSgyMSwgMTE3LCAyNTEsIDEpIDc3JVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggMTUwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICBmb250LXN0eWxlOiBib2xkO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sZXZlbCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzMzOGVmZjtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaWQge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaXRlbXMge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDMwcHggMzBweDtcclxuICAgICAgICAgICAgICBncmlkLWdhcDogNDNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGluZXMge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcclxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZG93bmxpbmVzIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAzMHB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDQzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAocHJvcHMuYWN0aXZlID09PSAxKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9sZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF0cml4LWhlYWRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsXCI+e3Byb3BzLmlkfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWRcIj57cHJvcHMuY29zdH08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG93bmxpbmVzXCI+XHJcbiAgICAgICAgICAgICAgPENpcmNsZSBleGlzdD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICA8Q2lyY2xlIGV4aXN0PXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgICA8Q2lyY2xlIGV4aXN0PXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmhvbGRlciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tYXRyaXgtaGVhZCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDMxLCAxNjksIDI1NSk7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgICAgMjcwZGVnLFxyXG4gICAgICAgICAgICAgICAgcmdiYSgzMSwgMTY5LCAyNTUsIDEpIDMxJSxcclxuICAgICAgICAgICAgICAgIHJnYmEoMjEsIDExNywgMjUxLCAxKSA3NyVcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDE1MHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogYm9sZDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGV2ZWwge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzhlZmY7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmlkIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLml0ZW1zIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAzMHB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDQzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxpbmVzIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRvd25saW5lcyB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMzBweCAzMHB4O1xyXG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiA0M3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKHByb3BzLmFjdGl2ZSA9PT0gMikge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbGRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hdHJpeC1oZWFkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbFwiPntwcm9wcy5pZH08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlkXCI+e3Byb3BzLmNvc3R9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvd25saW5lc1wiPlxyXG4gICAgICAgICAgICAgIDxDaXJjbGUgZXhpc3Q9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgPENpcmNsZSBleGlzdD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICA8Q2lyY2xlIGV4aXN0PXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmhvbGRlciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tYXRyaXgtaGVhZCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDMxLCAxNjksIDI1NSk7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgICAgMjcwZGVnLFxyXG4gICAgICAgICAgICAgICAgcmdiYSgzMSwgMTY5LCAyNTUsIDEpIDMxJSxcclxuICAgICAgICAgICAgICAgIHJnYmEoMjEsIDExNywgMjUxLCAxKSA3NyVcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDE1MHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogYm9sZDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGV2ZWwge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzhlZmY7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmlkIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLml0ZW1zIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAzMHB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDQzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxpbmVzIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRvd25saW5lcyB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMzBweCAzMHB4O1xyXG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiA0M3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbGRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hdHJpeC1oZWFkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbFwiPntwcm9wcy5pZH08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlkXCI+e3Byb3BzLmNvc3R9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvd25saW5lc1wiPlxyXG4gICAgICAgICAgICAgIDxDaXJjbGUgZXhpc3Q9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgPENpcmNsZSBleGlzdD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICA8Q2lyY2xlIGV4aXN0PXt0cnVlfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAuaG9sZGVyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1hdHJpeC1oZWFkIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMzEsIDE2OSwgMjU1KTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgICAyNzBkZWcsXHJcbiAgICAgICAgICAgICAgICByZ2JhKDMxLCAxNjksIDI1NSwgMSkgMzElLFxyXG4gICAgICAgICAgICAgICAgcmdiYSgyMSwgMTE3LCAyNTEsIDEpIDc3JVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggMTUwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICBmb250LXN0eWxlOiBib2xkO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sZXZlbCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzMzOGVmZjtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaWQge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaXRlbXMge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDMwcHggMzBweDtcclxuICAgICAgICAgICAgICBncmlkLWdhcDogNDNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGluZXMge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcclxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZG93bmxpbmVzIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAzMHB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDQzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbGRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXRyaXgtaGVhZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsXCI+e3Byb3BzLmlkfTwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV5LWxldmVsXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQocHJvcHMuY29zdCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEJ1eSBmb3Ige3Byb3BzLmNvc3R9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVzXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG93bmxpbmVzXCI+XHJcbiAgICAgICAgICAgIDxDaXJjbGUgZXhpc3Q9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICA8Q2lyY2xlIGV4aXN0PXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgPENpcmNsZSBleGlzdD17ZmFsc2V9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuYnV5LWxldmVsIHtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhvbGRlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWF0cml4LWhlYWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2LCAxLCA2MiwgMSk7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCAxNTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubGV2ZWwge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzM4ZWZmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaWQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXRlbXMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMzBweCAzMHB4O1xyXG4gICAgICAgICAgICBncmlkLWdhcDogNDNweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5saW5lcyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kb3dubGluZXMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMzBweCAzMHB4O1xyXG4gICAgICAgICAgICBncmlkLWdhcDogNDNweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBYM21hdHJpeDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\components\\\\matrix\\\\X3matrix.jsx */"));
    } else if (props.active === 2) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
        className: "jsx-2568916271" + " " + "holder",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "jsx-2568916271" + " " + "matrix-head",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "jsx-2568916271" + " " + "level",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 15
        }
      }, props.id), __jsx("div", {
        className: "jsx-2568916271" + " " + "id",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 15
        }
      }, props.cost)), __jsx("div", {
        className: "jsx-2568916271" + " " + "items",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "jsx-2568916271" + " " + "lines",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 15
        }
      }), __jsx("div", {
        className: "jsx-2568916271" + " " + "lines",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 15
        }
      }), __jsx("div", {
        className: "jsx-2568916271" + " " + "lines",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 15
        }
      })), __jsx("div", {
        className: "jsx-2568916271" + " " + "downlines",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 13
        }
      }, __jsx(_Circle__WEBPACK_IMPORTED_MODULE_2__["default"], {
        exist: true,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 15
        }
      }), __jsx(_Circle__WEBPACK_IMPORTED_MODULE_2__["default"], {
        exist: true,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 15
        }
      }), __jsx(_Circle__WEBPACK_IMPORTED_MODULE_2__["default"], {
        exist: false,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 15
        }
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        id: "2568916271",
        __self: undefined
      }, ".holder.jsx-2568916271{width:auto;width:200px;}.matrix-head.jsx-2568916271{background:rgb(31,169,255);background:linear-gradient( 270deg, rgba(31,169,255,1) 31%, rgba(21,117,251,1) 77% );display:grid;grid-template-columns:50px 150px;border-radius:20px;font-style:bold;font-size:1.2em;height:70px;overflow:hidden;cursor:pointer;}.level.jsx-2568916271{background:#338eff;padding:20px 20px;border-radius:20px;}.id.jsx-2568916271{padding:20px 20px;}.items.jsx-2568916271{display:grid;grid-template-columns:30px 30px 30px;grid-gap:43px;}.lines.jsx-2568916271{height:25px;width:2px;background:lightblue;margin:auto auto;}.downlines.jsx-2568916271{display:grid;grid-template-columns:30px 30px 30px;grid-gap:43px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXG1hdHJpeFxcWDNtYXRyaXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZKc0IsQUFHMEIsQUFJa0IsQUFnQlYsQUFLRCxBQUdMLEFBS0QsQUFNQyxXQXRDRCxDQWlDRixDQUwyQixBQVdBLEtBZHZDLENBTG9CLEdBY0csQ0FqQ3ZCLElBT0csVUFha0IsTUFjRixPQU5ILEFBV0EsTUFsQmhCLElBY0EsSUFOQSxBQVdBLGdEQWhDZSxhQUNvQixpQ0FDZCxtQkFDSCxnQkFDQSxnQkFDSixZQUNJLGdCQUNELGVBQ2pCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXG1hdHJpeFxcWDNtYXRyaXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENpcmNsZSBmcm9tIFwiLi9DaXJjbGVcIjtcclxuXHJcbmNvbnN0IFgzbWF0cml4ID0gKHByb3BzKSA9PiB7XHJcbiAgaWYgKHByb3BzLmJvdWdodCkge1xyXG4gICAgaWYgKHByb3BzLmFjdGl2ZSA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbGRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hdHJpeC1oZWFkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbFwiPntwcm9wcy5pZH08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlkXCI+e3Byb3BzLmNvc3R9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvd25saW5lc1wiPlxyXG4gICAgICAgICAgICAgIDxDaXJjbGUgZXhpc3Q9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICAgIDxDaXJjbGUgZXhpc3Q9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICAgIDxDaXJjbGUgZXhpc3Q9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAuaG9sZGVyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1hdHJpeC1oZWFkIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMzEsIDE2OSwgMjU1KTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgICAyNzBkZWcsXHJcbiAgICAgICAgICAgICAgICByZ2JhKDMxLCAxNjksIDI1NSwgMSkgMzElLFxyXG4gICAgICAgICAgICAgICAgcmdiYSgyMSwgMTE3LCAyNTEsIDEpIDc3JVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggMTUwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICBmb250LXN0eWxlOiBib2xkO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sZXZlbCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzMzOGVmZjtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaWQge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaXRlbXMge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDMwcHggMzBweDtcclxuICAgICAgICAgICAgICBncmlkLWdhcDogNDNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGluZXMge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcclxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZG93bmxpbmVzIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAzMHB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDQzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAocHJvcHMuYWN0aXZlID09PSAxKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9sZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF0cml4LWhlYWRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsXCI+e3Byb3BzLmlkfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWRcIj57cHJvcHMuY29zdH08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG93bmxpbmVzXCI+XHJcbiAgICAgICAgICAgICAgPENpcmNsZSBleGlzdD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICA8Q2lyY2xlIGV4aXN0PXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgICA8Q2lyY2xlIGV4aXN0PXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmhvbGRlciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tYXRyaXgtaGVhZCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDMxLCAxNjksIDI1NSk7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgICAgMjcwZGVnLFxyXG4gICAgICAgICAgICAgICAgcmdiYSgzMSwgMTY5LCAyNTUsIDEpIDMxJSxcclxuICAgICAgICAgICAgICAgIHJnYmEoMjEsIDExNywgMjUxLCAxKSA3NyVcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDE1MHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogYm9sZDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGV2ZWwge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzhlZmY7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmlkIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLml0ZW1zIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAzMHB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDQzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxpbmVzIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRvd25saW5lcyB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMzBweCAzMHB4O1xyXG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiA0M3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKHByb3BzLmFjdGl2ZSA9PT0gMikge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbGRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hdHJpeC1oZWFkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbFwiPntwcm9wcy5pZH08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlkXCI+e3Byb3BzLmNvc3R9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvd25saW5lc1wiPlxyXG4gICAgICAgICAgICAgIDxDaXJjbGUgZXhpc3Q9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgPENpcmNsZSBleGlzdD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICA8Q2lyY2xlIGV4aXN0PXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmhvbGRlciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tYXRyaXgtaGVhZCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDMxLCAxNjksIDI1NSk7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgICAgMjcwZGVnLFxyXG4gICAgICAgICAgICAgICAgcmdiYSgzMSwgMTY5LCAyNTUsIDEpIDMxJSxcclxuICAgICAgICAgICAgICAgIHJnYmEoMjEsIDExNywgMjUxLCAxKSA3NyVcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDE1MHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogYm9sZDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGV2ZWwge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzhlZmY7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmlkIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLml0ZW1zIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAzMHB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDQzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxpbmVzIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRvd25saW5lcyB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMzBweCAzMHB4O1xyXG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiA0M3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbGRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hdHJpeC1oZWFkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbFwiPntwcm9wcy5pZH08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlkXCI+e3Byb3BzLmNvc3R9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvd25saW5lc1wiPlxyXG4gICAgICAgICAgICAgIDxDaXJjbGUgZXhpc3Q9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgPENpcmNsZSBleGlzdD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICA8Q2lyY2xlIGV4aXN0PXt0cnVlfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAuaG9sZGVyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1hdHJpeC1oZWFkIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMzEsIDE2OSwgMjU1KTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgICAyNzBkZWcsXHJcbiAgICAgICAgICAgICAgICByZ2JhKDMxLCAxNjksIDI1NSwgMSkgMzElLFxyXG4gICAgICAgICAgICAgICAgcmdiYSgyMSwgMTE3LCAyNTEsIDEpIDc3JVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggMTUwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICBmb250LXN0eWxlOiBib2xkO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sZXZlbCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzMzOGVmZjtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaWQge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaXRlbXMge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDMwcHggMzBweDtcclxuICAgICAgICAgICAgICBncmlkLWdhcDogNDNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGluZXMge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcclxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZG93bmxpbmVzIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAzMHB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDQzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbGRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXRyaXgtaGVhZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsXCI+e3Byb3BzLmlkfTwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV5LWxldmVsXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQocHJvcHMuY29zdCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEJ1eSBmb3Ige3Byb3BzLmNvc3R9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVzXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG93bmxpbmVzXCI+XHJcbiAgICAgICAgICAgIDxDaXJjbGUgZXhpc3Q9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICA8Q2lyY2xlIGV4aXN0PXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgPENpcmNsZSBleGlzdD17ZmFsc2V9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuYnV5LWxldmVsIHtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhvbGRlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWF0cml4LWhlYWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2LCAxLCA2MiwgMSk7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCAxNTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubGV2ZWwge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzM4ZWZmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaWQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXRlbXMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMzBweCAzMHB4O1xyXG4gICAgICAgICAgICBncmlkLWdhcDogNDNweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5saW5lcyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kb3dubGluZXMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMzBweCAzMHB4O1xyXG4gICAgICAgICAgICBncmlkLWdhcDogNDNweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBYM21hdHJpeDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\components\\\\matrix\\\\X3matrix.jsx */"));
    } else {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
        className: "jsx-2568916271" + " " + "holder",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "jsx-2568916271" + " " + "matrix-head",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "jsx-2568916271" + " " + "level",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 15
        }
      }, props.id), __jsx("div", {
        className: "jsx-2568916271" + " " + "id",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 15
        }
      }, props.cost)), __jsx("div", {
        className: "jsx-2568916271" + " " + "items",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "jsx-2568916271" + " " + "lines",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 15
        }
      }), __jsx("div", {
        className: "jsx-2568916271" + " " + "lines",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 15
        }
      }), __jsx("div", {
        className: "jsx-2568916271" + " " + "lines",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 15
        }
      })), __jsx("div", {
        className: "jsx-2568916271" + " " + "downlines",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 13
        }
      }, __jsx(_Circle__WEBPACK_IMPORTED_MODULE_2__["default"], {
        exist: true,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 15
        }
      }), __jsx(_Circle__WEBPACK_IMPORTED_MODULE_2__["default"], {
        exist: true,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 15
        }
      }), __jsx(_Circle__WEBPACK_IMPORTED_MODULE_2__["default"], {
        exist: true,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 15
        }
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        id: "2568916271",
        __self: undefined
      }, ".holder.jsx-2568916271{width:auto;width:200px;}.matrix-head.jsx-2568916271{background:rgb(31,169,255);background:linear-gradient( 270deg, rgba(31,169,255,1) 31%, rgba(21,117,251,1) 77% );display:grid;grid-template-columns:50px 150px;border-radius:20px;font-style:bold;font-size:1.2em;height:70px;overflow:hidden;cursor:pointer;}.level.jsx-2568916271{background:#338eff;padding:20px 20px;border-radius:20px;}.id.jsx-2568916271{padding:20px 20px;}.items.jsx-2568916271{display:grid;grid-template-columns:30px 30px 30px;grid-gap:43px;}.lines.jsx-2568916271{height:25px;width:2px;background:lightblue;margin:auto auto;}.downlines.jsx-2568916271{display:grid;grid-template-columns:30px 30px 30px;grid-gap:43px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXG1hdHJpeFxcWDNtYXRyaXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdPc0IsQUFHMEIsQUFJa0IsQUFnQlYsQUFLRCxBQUdMLEFBS0QsQUFNQyxXQXRDRCxDQWlDRixDQUwyQixBQVdBLEtBZHZDLENBTG9CLEdBY0csQ0FqQ3ZCLElBT0csVUFha0IsTUFjRixPQU5ILEFBV0EsTUFsQmhCLElBY0EsSUFOQSxBQVdBLGdEQWhDZSxhQUNvQixpQ0FDZCxtQkFDSCxnQkFDQSxnQkFDSixZQUNJLGdCQUNELGVBQ2pCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXG1hdHJpeFxcWDNtYXRyaXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENpcmNsZSBmcm9tIFwiLi9DaXJjbGVcIjtcclxuXHJcbmNvbnN0IFgzbWF0cml4ID0gKHByb3BzKSA9PiB7XHJcbiAgaWYgKHByb3BzLmJvdWdodCkge1xyXG4gICAgaWYgKHByb3BzLmFjdGl2ZSA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbGRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hdHJpeC1oZWFkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbFwiPntwcm9wcy5pZH08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlkXCI+e3Byb3BzLmNvc3R9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvd25saW5lc1wiPlxyXG4gICAgICAgICAgICAgIDxDaXJjbGUgZXhpc3Q9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICAgIDxDaXJjbGUgZXhpc3Q9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICAgIDxDaXJjbGUgZXhpc3Q9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAuaG9sZGVyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1hdHJpeC1oZWFkIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMzEsIDE2OSwgMjU1KTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgICAyNzBkZWcsXHJcbiAgICAgICAgICAgICAgICByZ2JhKDMxLCAxNjksIDI1NSwgMSkgMzElLFxyXG4gICAgICAgICAgICAgICAgcmdiYSgyMSwgMTE3LCAyNTEsIDEpIDc3JVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggMTUwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICBmb250LXN0eWxlOiBib2xkO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sZXZlbCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzMzOGVmZjtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaWQge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaXRlbXMge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDMwcHggMzBweDtcclxuICAgICAgICAgICAgICBncmlkLWdhcDogNDNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGluZXMge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcclxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZG93bmxpbmVzIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAzMHB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDQzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAocHJvcHMuYWN0aXZlID09PSAxKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9sZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF0cml4LWhlYWRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsXCI+e3Byb3BzLmlkfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWRcIj57cHJvcHMuY29zdH08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG93bmxpbmVzXCI+XHJcbiAgICAgICAgICAgICAgPENpcmNsZSBleGlzdD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICA8Q2lyY2xlIGV4aXN0PXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgICA8Q2lyY2xlIGV4aXN0PXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmhvbGRlciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tYXRyaXgtaGVhZCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDMxLCAxNjksIDI1NSk7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgICAgMjcwZGVnLFxyXG4gICAgICAgICAgICAgICAgcmdiYSgzMSwgMTY5LCAyNTUsIDEpIDMxJSxcclxuICAgICAgICAgICAgICAgIHJnYmEoMjEsIDExNywgMjUxLCAxKSA3NyVcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDE1MHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogYm9sZDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGV2ZWwge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzhlZmY7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmlkIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLml0ZW1zIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAzMHB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDQzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxpbmVzIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRvd25saW5lcyB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMzBweCAzMHB4O1xyXG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiA0M3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKHByb3BzLmFjdGl2ZSA9PT0gMikge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbGRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hdHJpeC1oZWFkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbFwiPntwcm9wcy5pZH08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlkXCI+e3Byb3BzLmNvc3R9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvd25saW5lc1wiPlxyXG4gICAgICAgICAgICAgIDxDaXJjbGUgZXhpc3Q9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgPENpcmNsZSBleGlzdD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICA8Q2lyY2xlIGV4aXN0PXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmhvbGRlciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tYXRyaXgtaGVhZCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDMxLCAxNjksIDI1NSk7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgICAgMjcwZGVnLFxyXG4gICAgICAgICAgICAgICAgcmdiYSgzMSwgMTY5LCAyNTUsIDEpIDMxJSxcclxuICAgICAgICAgICAgICAgIHJnYmEoMjEsIDExNywgMjUxLCAxKSA3NyVcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDE1MHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogYm9sZDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGV2ZWwge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzhlZmY7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmlkIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLml0ZW1zIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAzMHB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDQzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxpbmVzIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRvd25saW5lcyB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMzBweCAzMHB4O1xyXG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiA0M3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbGRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hdHJpeC1oZWFkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbFwiPntwcm9wcy5pZH08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlkXCI+e3Byb3BzLmNvc3R9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvd25saW5lc1wiPlxyXG4gICAgICAgICAgICAgIDxDaXJjbGUgZXhpc3Q9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgPENpcmNsZSBleGlzdD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICA8Q2lyY2xlIGV4aXN0PXt0cnVlfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAuaG9sZGVyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1hdHJpeC1oZWFkIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMzEsIDE2OSwgMjU1KTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgICAyNzBkZWcsXHJcbiAgICAgICAgICAgICAgICByZ2JhKDMxLCAxNjksIDI1NSwgMSkgMzElLFxyXG4gICAgICAgICAgICAgICAgcmdiYSgyMSwgMTE3LCAyNTEsIDEpIDc3JVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggMTUwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICBmb250LXN0eWxlOiBib2xkO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sZXZlbCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzMzOGVmZjtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaWQge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaXRlbXMge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDMwcHggMzBweDtcclxuICAgICAgICAgICAgICBncmlkLWdhcDogNDNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGluZXMge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcclxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZG93bmxpbmVzIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAzMHB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDQzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbGRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXRyaXgtaGVhZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsXCI+e3Byb3BzLmlkfTwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV5LWxldmVsXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQocHJvcHMuY29zdCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEJ1eSBmb3Ige3Byb3BzLmNvc3R9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVzXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG93bmxpbmVzXCI+XHJcbiAgICAgICAgICAgIDxDaXJjbGUgZXhpc3Q9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICA8Q2lyY2xlIGV4aXN0PXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgPENpcmNsZSBleGlzdD17ZmFsc2V9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuYnV5LWxldmVsIHtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhvbGRlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWF0cml4LWhlYWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2LCAxLCA2MiwgMSk7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCAxNTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubGV2ZWwge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzM4ZWZmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaWQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXRlbXMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMzBweCAzMHB4O1xyXG4gICAgICAgICAgICBncmlkLWdhcDogNDNweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5saW5lcyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kb3dubGluZXMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMzBweCAzMHB4O1xyXG4gICAgICAgICAgICBncmlkLWdhcDogNDNweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBYM21hdHJpeDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\components\\\\matrix\\\\X3matrix.jsx */"));
    }
  } else {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
      className: "jsx-643270859" + " " + "holder",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "jsx-643270859" + " " + "matrix-head",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "jsx-643270859" + " " + "level",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 13
      }
    }, props.id), __jsx("button", {
      onClick: () => {
        window.alert(props.cost);
      },
      className: "jsx-643270859" + " " + "buy-level",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 13
      }
    }, "Buy for ", props.cost)), __jsx("div", {
      className: "jsx-643270859" + " " + "items",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "jsx-643270859" + " " + "lines",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 13
      }
    }), __jsx("div", {
      className: "jsx-643270859" + " " + "lines",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 13
      }
    }), __jsx("div", {
      className: "jsx-643270859" + " " + "lines",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 13
      }
    })), __jsx("div", {
      className: "jsx-643270859" + " " + "downlines",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 11
      }
    }, __jsx(_Circle__WEBPACK_IMPORTED_MODULE_2__["default"], {
      exist: false,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 13
      }
    }), __jsx(_Circle__WEBPACK_IMPORTED_MODULE_2__["default"], {
      exist: false,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 13
      }
    }), __jsx(_Circle__WEBPACK_IMPORTED_MODULE_2__["default"], {
      exist: false,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 13
      }
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "643270859",
      __self: undefined
    }, ".buy-level.jsx-643270859{border:none;background:none;color:white;font-size:1em;}.holder.jsx-643270859{width:auto;width:200px;}.matrix-head.jsx-643270859{background:rgba(16,1,62,1);display:grid;grid-template-columns:50px 150px;border-radius:20px;font-style:bold;font-size:1.2em;height:70px;overflow:hidden;cursor:pointer;}.level.jsx-643270859{background:#338eff;padding:20px 20px;border-radius:20px;}.id.jsx-643270859{padding:20px 20px;}.items.jsx-643270859{display:grid;grid-template-columns:30px 30px 30px;grid-gap:43px;}.lines.jsx-643270859{height:25px;width:2px;background:lightblue;margin:auto auto;}.downlines.jsx-643270859{display:grid;grid-template-columns:30px 30px 30px;grid-gap:43px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXG1hdHJpeFxcWDNtYXRyaXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJTb0IsQUFHeUIsQUFNRCxBQUltQixBQVdYLEFBS0QsQUFHTCxBQUtELEFBTUMsV0FqQ0QsQ0FOSSxBQWtDTixDQUwyQixBQVdBLEtBZHZDLENBTG9CLEdBY0csQ0E1QnZCLElBR2UsQ0FURCxTQXFCTyxHQXBCTCxBQVNtQixHQXlCaEIsT0FOSCxBQVdBLElBdENoQixFQW9CQSxJQWNBLElBTkEsQUFXQSxTQTlCcUIsbUJBQ0gsZ0JBQ0EsZ0JBQ0osWUFDSSxnQkFDRCxlQUNqQiIsImZpbGUiOiJDOlxcVXNlcnNcXGNyZmFiXFxEZXNrdG9wXFxmb3JzYWdlLWJvaWxlcnBsYXRlXFxjb21wb25lbnRzXFxtYXRyaXhcXFgzbWF0cml4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaXJjbGUgZnJvbSBcIi4vQ2lyY2xlXCI7XHJcblxyXG5jb25zdCBYM21hdHJpeCA9IChwcm9wcykgPT4ge1xyXG4gIGlmIChwcm9wcy5ib3VnaHQpIHtcclxuICAgIGlmIChwcm9wcy5hY3RpdmUgPT09IDApIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob2xkZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXRyaXgtaGVhZFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWxcIj57cHJvcHMuaWR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpZFwiPntwcm9wcy5jb3N0fTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtc1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3dubGluZXNcIj5cclxuICAgICAgICAgICAgICA8Q2lyY2xlIGV4aXN0PXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgICA8Q2lyY2xlIGV4aXN0PXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgICA8Q2lyY2xlIGV4aXN0PXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmhvbGRlciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tYXRyaXgtaGVhZCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDMxLCAxNjksIDI1NSk7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgICAgMjcwZGVnLFxyXG4gICAgICAgICAgICAgICAgcmdiYSgzMSwgMTY5LCAyNTUsIDEpIDMxJSxcclxuICAgICAgICAgICAgICAgIHJnYmEoMjEsIDExNywgMjUxLCAxKSA3NyVcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDE1MHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogYm9sZDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGV2ZWwge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzhlZmY7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmlkIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLml0ZW1zIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAzMHB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDQzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxpbmVzIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRvd25saW5lcyB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMzBweCAzMHB4O1xyXG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiA0M3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKHByb3BzLmFjdGl2ZSA9PT0gMSkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbGRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hdHJpeC1oZWFkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbFwiPntwcm9wcy5pZH08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlkXCI+e3Byb3BzLmNvc3R9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvd25saW5lc1wiPlxyXG4gICAgICAgICAgICAgIDxDaXJjbGUgZXhpc3Q9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgPENpcmNsZSBleGlzdD17ZmFsc2V9IC8+XHJcbiAgICAgICAgICAgICAgPENpcmNsZSBleGlzdD17ZmFsc2V9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5ob2xkZXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubWF0cml4LWhlYWQge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigzMSwgMTY5LCAyNTUpO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICAgIDI3MGRlZyxcclxuICAgICAgICAgICAgICAgIHJnYmEoMzEsIDE2OSwgMjU1LCAxKSAzMSUsXHJcbiAgICAgICAgICAgICAgICByZ2JhKDIxLCAxMTcsIDI1MSwgMSkgNzclXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCAxNTBweDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxldmVsIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzM4ZWZmO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pZCB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pdGVtcyB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMzBweCAzMHB4O1xyXG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiA0M3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5saW5lcyB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogYXV0byBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kb3dubGluZXMge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDMwcHggMzBweDtcclxuICAgICAgICAgICAgICBncmlkLWdhcDogNDNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIGlmIChwcm9wcy5hY3RpdmUgPT09IDIpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob2xkZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXRyaXgtaGVhZFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWxcIj57cHJvcHMuaWR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpZFwiPntwcm9wcy5jb3N0fTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtc1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3dubGluZXNcIj5cclxuICAgICAgICAgICAgICA8Q2lyY2xlIGV4aXN0PXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgIDxDaXJjbGUgZXhpc3Q9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgPENpcmNsZSBleGlzdD17ZmFsc2V9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5ob2xkZXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubWF0cml4LWhlYWQge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigzMSwgMTY5LCAyNTUpO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICAgIDI3MGRlZyxcclxuICAgICAgICAgICAgICAgIHJnYmEoMzEsIDE2OSwgMjU1LCAxKSAzMSUsXHJcbiAgICAgICAgICAgICAgICByZ2JhKDIxLCAxMTcsIDI1MSwgMSkgNzclXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCAxNTBweDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxldmVsIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzM4ZWZmO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pZCB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pdGVtcyB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMzBweCAzMHB4O1xyXG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiA0M3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5saW5lcyB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogYXV0byBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kb3dubGluZXMge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDMwcHggMzBweDtcclxuICAgICAgICAgICAgICBncmlkLWdhcDogNDNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob2xkZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXRyaXgtaGVhZFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWxcIj57cHJvcHMuaWR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpZFwiPntwcm9wcy5jb3N0fTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtc1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3dubGluZXNcIj5cclxuICAgICAgICAgICAgICA8Q2lyY2xlIGV4aXN0PXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgIDxDaXJjbGUgZXhpc3Q9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgPENpcmNsZSBleGlzdD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmhvbGRlciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tYXRyaXgtaGVhZCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDMxLCAxNjksIDI1NSk7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgICAgMjcwZGVnLFxyXG4gICAgICAgICAgICAgICAgcmdiYSgzMSwgMTY5LCAyNTUsIDEpIDMxJSxcclxuICAgICAgICAgICAgICAgIHJnYmEoMjEsIDExNywgMjUxLCAxKSA3NyVcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDE1MHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogYm9sZDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGV2ZWwge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzhlZmY7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmlkIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLml0ZW1zIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAzMHB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDQzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxpbmVzIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRvd25saW5lcyB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMzBweCAzMHB4O1xyXG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiA0M3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob2xkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF0cml4LWhlYWRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbFwiPntwcm9wcy5pZH08L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1eS1sZXZlbFwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KHByb3BzLmNvc3QpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBCdXkgZm9yIHtwcm9wcy5jb3N0fVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lc1wiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvd25saW5lc1wiPlxyXG4gICAgICAgICAgICA8Q2lyY2xlIGV4aXN0PXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgPENpcmNsZSBleGlzdD17ZmFsc2V9IC8+XHJcbiAgICAgICAgICAgIDxDaXJjbGUgZXhpc3Q9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmJ1eS1sZXZlbCB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ob2xkZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1hdHJpeC1oZWFkIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxNiwgMSwgNjIsIDEpO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggMTUwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxldmVsIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzMzOGVmZjtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmlkIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLml0ZW1zIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDMwcHggMzBweDtcclxuICAgICAgICAgICAgZ3JpZC1nYXA6IDQzcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubGluZXMge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZG93bmxpbmVzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDMwcHggMzBweDtcclxuICAgICAgICAgICAgZ3JpZC1nYXA6IDQzcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgWDNtYXRyaXg7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\components\\\\matrix\\\\X3matrix.jsx */"));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (X3matrix);

/***/ }),

/***/ "./components/matrix/X4MatrixHolder.jsx":
/*!**********************************************!*\
  !*** ./components/matrix/X4MatrixHolder.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _X4matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./X4matrix */ "./components/matrix/X4matrix.jsx");
var _jsxFileName = "C:\\Users\\crfab\\Desktop\\forsage-boilerplate\\components\\matrix\\X4MatrixHolder.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const X4MatrixHolder = props => {
  const elements = [];

  for (let i = 1; i < 13; i++) {
    elements.push({
      id: i,
      key: i,
      cost: props.cost / 2 * i
    });
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-4106301516" + " " + "upper-holder",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-4106301516" + " " + "top-part",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "jsx-4106301516",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, "Forsage x4")), __jsx("div", {
    className: "jsx-4106301516" + " " + "bottom-part",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, elements.map((matrix, index) => __jsx(_X4matrix__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: matrix.id,
    key: matrix.key,
    cost: matrix.cost,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }))), __jsx("p", {
    className: "jsx-4106301516",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, "Hallo ich bin der L\xFCckenf\xFCller. Text f\xFCr die Icones")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4106301516",
    __self: undefined
  }, ".upper-holder.jsx-4106301516{margin-bottom:20px;text-align:left;}.top-part.jsx-4106301516{width:100%;background:rgba(28,22,85,1);border-radius:20px 20px 0 0;padding:10px 20px;}.bottom-part.jsx-4106301516{width:100%;background:rgba(28,22,85,1);border-radius:0 0 20px 20px;padding:10px 10px;border-top:2px solid black;display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));grid-gap:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXG1hdHJpeFxcWDRNYXRyaXhIb2xkZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCa0IsQUFHOEIsQUFJUixBQU1BLFdBTG9CLEFBTUEsUUFWZixnQkFDbEIsSUFJOEIsQUFNQSw0QkFMVixBQU1BLGtCQUxwQixBQU02QiwyQkFDZCxhQUM4Qyx5REFDN0MsY0FDaEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxjcmZhYlxcRGVza3RvcFxcZm9yc2FnZS1ib2lsZXJwbGF0ZVxcY29tcG9uZW50c1xcbWF0cml4XFxYNE1hdHJpeEhvbGRlci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgWDRNYXRyaXggZnJvbSBcIi4vWDRtYXRyaXhcIjtcclxuXHJcbmNvbnN0IFg0TWF0cml4SG9sZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgZWxlbWVudHMgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMTsgaSA8IDEzOyBpKyspIHtcclxuICAgIGVsZW1lbnRzLnB1c2goe1xyXG4gICAgICBpZDogaSxcclxuICAgICAga2V5OiBpLFxyXG4gICAgICBjb3N0OiAocHJvcHMuY29zdCAvIDIpICogaSxcclxuICAgIH0pO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cHBlci1ob2xkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1wYXJ0XCI+XHJcbiAgICAgICAgICA8aDE+Rm9yc2FnZSB4NDwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b20tcGFydFwiPlxyXG4gICAgICAgICAge2VsZW1lbnRzLm1hcCgobWF0cml4LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8WDRNYXRyaXggaWQ9e21hdHJpeC5pZH0ga2V5PXttYXRyaXgua2V5fSBjb3N0PXttYXRyaXguY29zdH0gLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwPkhhbGxvIGljaCBiaW4gZGVyIEzDvGNrZW5mw7xsbGVyLiBUZXh0IGbDvHIgZGllIEljb25lczwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAudXBwZXItaG9sZGVyIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9wLXBhcnQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI4LCAyMiwgODUsIDEpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJvdHRvbS1wYXJ0IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyOCwgMjIsIDg1LCAxKTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XHJcbiAgICAgICAgICBncmlkLWdhcDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFg0TWF0cml4SG9sZGVyO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\components\\\\matrix\\\\X4MatrixHolder.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (X4MatrixHolder);

/***/ }),

/***/ "./components/matrix/X4matrix.jsx":
/*!****************************************!*\
  !*** ./components/matrix/X4matrix.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\crfab\\Desktop\\forsage-boilerplate\\components\\matrix\\X4matrix.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const X4matrix = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-3239599233" + " " + "holder",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3239599233" + " " + "matrix-head",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3239599233" + " " + "level",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 11
    }
  }, props.id), __jsx("div", {
    className: "jsx-3239599233" + " " + "id",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 11
    }
  }, props.cost)), __jsx("div", {
    className: "jsx-3239599233" + " " + "items",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3239599233" + " " + "lines",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "jsx-3239599233" + " " + "lines",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "jsx-3239599233" + " " + "lines",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-3239599233" + " " + "downlines",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3239599233" + " " + "circle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "jsx-3239599233" + " " + "circle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "jsx-3239599233" + " " + "circle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3239599233",
    __self: undefined
  }, ".holder.jsx-3239599233{width:auto;width:200px;}.matrix-head.jsx-3239599233{background:rgb(31,169,255);background:linear-gradient( 270deg, rgba(31,169,255,1) 31%, rgba(21,117,251,1) 77% );display:grid;grid-template-columns:50px 150px;border-radius:20px;font-style:bold;font-size:1.2em;height:70px;overflow:hidden;}.level.jsx-3239599233{background:#338eff;padding:20px 20px;border-radius:20px;}.id.jsx-3239599233{padding:20px 20px;}.items.jsx-3239599233{display:grid;grid-template-columns:30px 30px 30px;grid-gap:43px;}.lines.jsx-3239599233{height:25px;width:2px;background:lightblue;margin:auto auto;}.downlines.jsx-3239599233{display:grid;grid-template-columns:30px 30px 30px;grid-gap:43px;}.circle.jsx-3239599233{height:30px;width:30px;border-radius:50%;border:1.5px solid #1ea6ff;background:#1ea6ff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXG1hdHJpeFxcWDRtYXRyaXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Ca0IsQUFHc0IsQUFJa0IsQUFlVixBQUtELEFBR0wsQUFLRCxBQU1DLEFBS0QsV0ExQ0EsQ0FnQ0YsQUFXQyxDQWhCMEIsQUFXQSxLQWR2QyxDQUxvQixHQWNHLENBaEN2QixBQTJDb0IsSUFwQ2pCLFVBWWtCLElBeUJRLEVBWFYsT0FOSCxBQVdBLE1BbEJoQixJQWNBLElBTkEsQUFXQSxJQU1xQixtQkFDckIseUJBdENlLGFBQ29CLGlDQUNkLG1CQUNILGdCQUNBLGdCQUNKLFlBQ0ksZ0JBQ2xCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXG1hdHJpeFxcWDRtYXRyaXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgWDRtYXRyaXggPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJob2xkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hdHJpeC1oZWFkXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsXCI+e3Byb3BzLmlkfTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpZFwiPntwcm9wcy5jb3N0fTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvd25saW5lc1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZVwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5ob2xkZXIge1xyXG4gICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYXRyaXgtaGVhZCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMzEsIDE2OSwgMjU1KTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgMjcwZGVnLFxyXG4gICAgICAgICAgICByZ2JhKDMxLCAxNjksIDI1NSwgMSkgMzElLFxyXG4gICAgICAgICAgICByZ2JhKDIxLCAxMTcsIDI1MSwgMSkgNzclXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCAxNTBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICBmb250LXN0eWxlOiBib2xkO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sZXZlbCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzM4ZWZmO1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmlkIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLml0ZW1zIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMzBweCAzMHB4O1xyXG4gICAgICAgICAgZ3JpZC1nYXA6IDQzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5saW5lcyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kb3dubGluZXMge1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAzMHB4IDMwcHg7XHJcbiAgICAgICAgICBncmlkLWdhcDogNDNweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNpcmNsZSB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIGJvcmRlcjogMS41cHggc29saWQgIzFlYTZmZjtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMxZWE2ZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgWDRtYXRyaXg7XHJcblxyXG4vLyAjZmQ4NTc2XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\components\\\\matrix\\\\X4matrix.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (X4matrix); // #fd8576

/***/ }),

/***/ "./components/sidebar/Divider.jsx":
/*!****************************************!*\
  !*** ./components/sidebar/Divider.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Divider; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\crfab\\Desktop\\forsage-boilerplate\\components\\sidebar\\Divider.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Divider() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-2481809389" + " " + "divider",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2481809389",
    __self: this
  }, ".divider.jsx-2481809389{width:90%;margin:20px auto;background:grey;height:1px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXHNpZGViYXJcXERpdmlkZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1rQixBQUdxQixVQUNPLGlCQUNELGdCQUNMLFdBQ2IiLCJmaWxlIjoiQzpcXFVzZXJzXFxjcmZhYlxcRGVza3RvcFxcZm9yc2FnZS1ib2lsZXJwbGF0ZVxcY29tcG9uZW50c1xcc2lkZWJhclxcRGl2aWRlci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEaXZpZGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZXJcIj48L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5kaXZpZGVyIHtcclxuICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGdyZXk7XHJcbiAgICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\components\\\\sidebar\\\\Divider.jsx */"));
}

/***/ }),

/***/ "./components/sidebar/Sidebar.jsx":
/*!****************************************!*\
  !*** ./components/sidebar/Sidebar.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SidebarContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SidebarContent */ "./components/sidebar/SidebarContent.jsx");
/* harmony import */ var _Divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Divider */ "./components/sidebar/Divider.jsx");
/* harmony import */ var _UserContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserContent */ "./components/sidebar/UserContent.jsx");
/* harmony import */ var _utils_globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/globals */ "./utils/globals.js");
var _jsxFileName = "C:\\Users\\crfab\\Desktop\\forsage-boilerplate\\components\\sidebar\\Sidebar.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const Sidebar = props => {
  return __jsx("div", {
    className: "jsx-4200931425" + " " + "sidebar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-4200931425" + " " + "profile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-4200931425",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "jsx-4200931425",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/assets/img/user_simple.jpg",
    height: "40px",
    className: "jsx-4200931425",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }), " ", "", " ", "", "ID: ", props.userIds), __jsx("br", {
    className: "jsx-4200931425",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }), __jsx("br", {
    className: "jsx-4200931425",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }), __jsx("img", {
    src: "/assets/img/partners.jpg",
    width: "60px",
    className: "jsx-4200931425",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }), props.partnersCount, __jsx("br", {
    className: "jsx-4200931425",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }), __jsx("br", {
    className: "jsx-4200931425",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  })), __jsx("img", {
    src: "/assets/img/cube.jpg",
    width: "100%",
    className: "jsx-4200931425",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "jsx-4200931425" + " " + "earnings",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("b", {
    className: "jsx-4200931425",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "$4,000,000")), __jsx(_SidebarContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Balance",
    balance_usd: props.balance * 2 + " $",
    balance_eth: props.balance + " ETH",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "jsx-4200931425" + " " + "oneMillion",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), __jsx(_Divider__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }), __jsx(_SidebarContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Forsage",
    matrix: "x3",
    balance_usd: props.balance * 2 + " $",
    balance_eth: props.balance + " ETH",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }), __jsx(_SidebarContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Forsage",
    matrix: "x4",
    balance_usd: props.balance * 2 + " $",
    balance_eth: props.balance + " ETH",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }), __jsx(_Divider__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }), __jsx(_UserContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Affiliate Link",
    placeholder: _utils_globals__WEBPACK_IMPORTED_MODULE_5__["BASE_URL"] + "ref/" + props.userIds,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }), __jsx(_UserContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Your Ethereum Wallet",
    placeholder: props.account,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }), __jsx(_UserContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Smart Contract Address",
    placeholder: props.address,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4200931425",
    __self: undefined
  }, ".sidebar.jsx-4200931425{height:100%;background:rgba(28,22,85,1);border-radius:20px;padding:10px;}.earnings.jsx-4200931425{width:90%;margin:10px auto;background:rgb(252,132,118);background:linear-gradient( 223deg, rgba(252,132,118,1) 22%, rgba(252,94,125,1) 73% );border:none;color:white;border-radius:10px;padding:15px 20px;text-align:center;font-size:1.3em;}.profile.jsx-4200931425{width:90%;margin:auto auto;display:grid;grid-template-columns:150px auto;}.profile.jsx-4200931425 p.jsx-4200931425{font-size:25px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXHNpZGViYXJcXFNpZGViYXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFEa0IsQUFHdUIsQUFNRixBQWdCQSxBQU1LLFVBckJFLEFBZ0JBLEVBdEJjLEdBNEJqQyxZQXJCZ0MsQUFnQmpCLGFBdEJNLEFBdUJjLGVBWmhDLElBVlksYUFDZixDQXNCQSxvRUFaYyxZQUNBLFlBQ08sbUJBQ0Qsa0JBQ0Esa0JBQ0YsZ0JBQ2xCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXHNpZGViYXJcXFNpZGViYXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpZGViYXJDb250ZW50IGZyb20gXCIuL1NpZGViYXJDb250ZW50XCI7XHJcbmltcG9ydCBEaXZpZGVyIGZyb20gXCIuL0RpdmlkZXJcIjtcclxuaW1wb3J0IFVzZXJDb250ZW50IGZyb20gXCIuL1VzZXJDb250ZW50XCI7XHJcbmltcG9ydCB7IEJBU0VfVVJMIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2dsb2JhbHNcIjtcclxuXHJcbmNvbnN0IFNpZGViYXIgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZVwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltZy91c2VyX3NpbXBsZS5qcGdcIiBoZWlnaHQ9XCI0MHB4XCIgLz4ge1wiXCJ9IHtcIlwifVxyXG4gICAgICAgICAgICBJRDoge3Byb3BzLnVzZXJJZHN9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltZy9wYXJ0bmVycy5qcGdcIiB3aWR0aD1cIjYwcHhcIiAvPlxyXG4gICAgICAgICAge3Byb3BzLnBhcnRuZXJzQ291bnR9XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvY3ViZS5qcGdcIiB3aWR0aD1cIjEwMCVcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJlYXJuaW5nc1wiPlxyXG4gICAgICAgIDxiPiQ0LDAwMCwwMDA8L2I+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPFNpZGViYXJDb250ZW50XHJcbiAgICAgICAgdGl0bGU9XCJCYWxhbmNlXCJcclxuICAgICAgICBiYWxhbmNlX3VzZD17cHJvcHMuYmFsYW5jZSAqIDIgKyBcIiAkXCJ9XHJcbiAgICAgICAgYmFsYW5jZV9ldGg9e3Byb3BzLmJhbGFuY2UgKyBcIiBFVEhcIn1cclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvbmVNaWxsaW9uXCI+PC9kaXY+XHJcbiAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgIDxTaWRlYmFyQ29udGVudFxyXG4gICAgICAgIHRpdGxlPVwiRm9yc2FnZVwiXHJcbiAgICAgICAgbWF0cml4PVwieDNcIlxyXG4gICAgICAgIGJhbGFuY2VfdXNkPXtwcm9wcy5iYWxhbmNlICogMiArIFwiICRcIn1cclxuICAgICAgICBiYWxhbmNlX2V0aD17cHJvcHMuYmFsYW5jZSArIFwiIEVUSFwifVxyXG4gICAgICAvPlxyXG4gICAgICA8U2lkZWJhckNvbnRlbnRcclxuICAgICAgICB0aXRsZT1cIkZvcnNhZ2VcIlxyXG4gICAgICAgIG1hdHJpeD1cIng0XCJcclxuICAgICAgICBiYWxhbmNlX3VzZD17cHJvcHMuYmFsYW5jZSAqIDIgKyBcIiAkXCJ9XHJcbiAgICAgICAgYmFsYW5jZV9ldGg9e3Byb3BzLmJhbGFuY2UgKyBcIiBFVEhcIn1cclxuICAgICAgLz5cclxuICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgPFVzZXJDb250ZW50XHJcbiAgICAgICAgdGl0bGU9XCJBZmZpbGlhdGUgTGlua1wiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9e0JBU0VfVVJMICsgXCJyZWYvXCIgKyBwcm9wcy51c2VySWRzfVxyXG4gICAgICAvPlxyXG4gICAgICA8VXNlckNvbnRlbnQgdGl0bGU9XCJZb3VyIEV0aGVyZXVtIFdhbGxldFwiIHBsYWNlaG9sZGVyPXtwcm9wcy5hY2NvdW50fSAvPlxyXG4gICAgICA8VXNlckNvbnRlbnQgdGl0bGU9XCJTbWFydCBDb250cmFjdCBBZGRyZXNzXCIgcGxhY2Vob2xkZXI9e3Byb3BzLmFkZHJlc3N9IC8+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuc2lkZWJhciB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI4LCAyMiwgODUsIDEpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5lYXJuaW5ncyB7XHJcbiAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjUyLCAxMzIsIDExOCk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgIDIyM2RlZyxcclxuICAgICAgICAgICAgcmdiYSgyNTIsIDEzMiwgMTE4LCAxKSAyMiUsXHJcbiAgICAgICAgICAgIHJnYmEoMjUyLCA5NCwgMTI1LCAxKSA3MyVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2ZpbGUge1xyXG4gICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgIG1hcmdpbjogYXV0byBhdXRvO1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTUwcHggYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2ZpbGUgcCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\components\\\\sidebar\\\\Sidebar.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./components/sidebar/SidebarContent.jsx":
/*!***********************************************!*\
  !*** ./components/sidebar/SidebarContent.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\crfab\\Desktop\\forsage-boilerplate\\components\\sidebar\\SidebarContent.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const SidebarContent = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-2150689125" + " " + "content-goals",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }, __jsx("h4", {
    className: "jsx-2150689125",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, props.title, " ", props.matrix), __jsx("p", {
    className: "jsx-2150689125",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, props.balance_usd), __jsx("p", {
    className: "jsx-2150689125" + " " + "light-blue",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, props.balance_eth)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2150689125",
    __self: undefined
  }, "p.jsx-2150689125{padding:0 20px;}.content-goals.jsx-2150689125{background:#10013e;width:90%;margin:15px 0;text-align:left;margin:20px auto;border-radius:20px;padding-top:5px;}.light-blue.jsx-2150689125{width:100%;background:#1262ff;border-radius:0 0 20px 20px;padding:20px 20px;}h4.jsx-2150689125{padding:0 20px;font-size:1.3em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXHNpZGViYXJcXFNpZGViYXJDb250ZW50LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZa0IsQUFHMEIsQUFHSSxBQVNSLEFBTUksV0FMSSxJQVpyQixBQWtCa0IsSUFmTixVQUNJLENBU2MsQ0FNOUIsWUFka0IsZUFTRSxDQVJELGlCQUNFLEFBUXJCLG1CQVBrQixnQkFDbEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxjcmZhYlxcRGVza3RvcFxcZm9yc2FnZS1ib2lsZXJwbGF0ZVxcY29tcG9uZW50c1xcc2lkZWJhclxcU2lkZWJhckNvbnRlbnQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU2lkZWJhckNvbnRlbnQgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWdvYWxzXCI+XHJcbiAgICAgICAgPGg0PlxyXG4gICAgICAgICAge3Byb3BzLnRpdGxlfSB7cHJvcHMubWF0cml4fVxyXG4gICAgICAgIDwvaDQ+XHJcblxyXG4gICAgICAgIDxwPntwcm9wcy5iYWxhbmNlX3VzZH08L3A+XHJcblxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxpZ2h0LWJsdWVcIj57cHJvcHMuYmFsYW5jZV9ldGh9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGVudC1nb2FscyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTAwMTNlO1xyXG4gICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5saWdodC1ibHVlIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzEyNjJmZjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhckNvbnRlbnQ7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\components\\\\sidebar\\\\SidebarContent.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (SidebarContent);

/***/ }),

/***/ "./components/sidebar/UserContent.jsx":
/*!********************************************!*\
  !*** ./components/sidebar/UserContent.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\crfab\\Desktop\\forsage-boilerplate\\components\\sidebar\\UserContent.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const UserContent = props => {
  const {
    0: copySuccess,
    1: setCopySuccess
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const inputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  function copyToClipboard(e) {
    inputRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    setCopySuccess("Copied!");
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-1517296701" + " " + "content-user",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("h4", {
    className: "jsx-1517296701",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, props.title), __jsx("form", {
    className: "jsx-1517296701",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("input", {
    ref: inputRef,
    value: props.placeholder,
    className: "jsx-1517296701",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  })), __jsx("br", {
    className: "jsx-1517296701",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }),
  /* Logical shortcut for only displaying the 
  button if the copy command exists */
  document.queryCommandSupported("copy") && __jsx("div", {
    className: "jsx-1517296701",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: copyToClipboard,
    className: "jsx-1517296701" + " " + "copy",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, "Copy"), __jsx("button", {
    className: "jsx-1517296701" + " " + "etherscan",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, "To Etherscan")), __jsx("div", {
    className: "jsx-1517296701" + " " + "success",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, copySuccess)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1517296701",
    __self: undefined
  }, "h4.jsx-1517296701{margin-top:5px;}.content-user.jsx-1517296701{background:rgba(16,1,62,1);width:90%;padding:10px 10px;margin:20px auto;border-radius:20px;text-align:center;}input.jsx-1517296701{width:auto;margin:10px auto;text-align:center;padding:5px 10px;overflow:auto;border-radius:10px;background:#271950;border:none;color:white;}.success.jsx-1517296701{background:rgb(0,237,47);background:linear-gradient( 306deg, rgba(0,237,47,1) 29%, rgba(0,179,35,1) 64%, rgba(0,179,35,1) 83% );color:white;width:50%;margin:20px auto;font-style:bold;}.success.jsx-1517296701{background:rgb(0,237,47);background:linear-gradient( 306deg, rgba(0,237,47,1) 29%, rgba(0,179,35,1) 64%, rgba(0,179,35,1) 83% );color:white;width:50%;margin:20px auto;font-style:bold;}.success.jsx-1517296701{background:rgb(0,237,47);background:linear-gradient( 306deg, rgba(0,237,47,1) 29%, rgba(0,179,35,1) 64%, rgba(0,179,35,1) 83% );color:white;width:50%;margin:20px auto;font-style:bold;}.success.jsx-1517296701{background:rgb(0,237,47);background:linear-gradient( 306deg, rgba(0,237,47,1) 29%, rgba(0,179,35,1) 64%, rgba(0,179,35,1) 83% );color:white;width:50%;margin:20px auto;font-style:bold;}button.jsx-1517296701{margin:10px 15px;border:none;color:white;border-radius:10px;padding:10px 25px;}.copy.jsx-1517296701{background:rgb(31,168,255);background:linear-gradient( 223deg, rgba(31,168,255,1) 22%, rgba(19,108,255,1) 47% );}.etherscan.jsx-1517296701{background:#271950;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXHNpZGViYXJcXFVzZXJDb250ZW50LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ2tCLEFBRzBCLEFBR2UsQUFRbkIsQUFhZ0IsQUFhVixBQU9ZLEFBUVYsV0F4Q0YsSUFYbkIsRUFxQ2MsRUFlZCxNQXZCRyxFQTFCUyxBQTZDVCxDQXBDaUIsQ0EwQk4sUUFsQ00sSUFtQ0MsS0ExQkYsU0FSQSxLQW1DQyxHQTFCSixTQVJLLEtBU0EsQ0EwQnJCLGFBbENvQixLQVNDLGFBUnJCLEdBeUNBLEdBaENjLFlBQ0EsQ0FZQSxXQVhkLENBWVksVUFDTyxpQkFDRCxnQkFDbEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxjcmZhYlxcRGVza3RvcFxcZm9yc2FnZS1ib2lsZXJwbGF0ZVxcY29tcG9uZW50c1xcc2lkZWJhclxcVXNlckNvbnRlbnQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFVzZXJDb250ZW50ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2NvcHlTdWNjZXNzLCBzZXRDb3B5U3VjY2Vzc10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZihudWxsKTtcclxuICBmdW5jdGlvbiBjb3B5VG9DbGlwYm9hcmQoZSkge1xyXG4gICAgaW5wdXRSZWYuY3VycmVudC5zZWxlY3QoKTtcclxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcclxuICAgIGUudGFyZ2V0LmZvY3VzKCk7XHJcbiAgICBzZXRDb3B5U3VjY2VzcyhcIkNvcGllZCFcIik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LXVzZXJcIj5cclxuICAgICAgICA8aDQ+e3Byb3BzLnRpdGxlfTwvaDQ+XHJcbiAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICA8aW5wdXQgcmVmPXtpbnB1dFJlZn0gdmFsdWU9e3Byb3BzLnBsYWNlaG9sZGVyfSAvPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAvKiBMb2dpY2FsIHNob3J0Y3V0IGZvciBvbmx5IGRpc3BsYXlpbmcgdGhlIFxyXG4gICAgICAgICAgYnV0dG9uIGlmIHRoZSBjb3B5IGNvbW1hbmQgZXhpc3RzICovXHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeUNvbW1hbmRTdXBwb3J0ZWQoXCJjb3B5XCIpICYmIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNvcHlcIiBvbkNsaWNrPXtjb3B5VG9DbGlwYm9hcmR9PlxyXG4gICAgICAgICAgICAgICAgQ29weVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZXRoZXJzY2FuXCI+VG8gRXRoZXJzY2FuPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Y2Nlc3NcIj57Y29weVN1Y2Nlc3N9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRlbnQtdXNlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2LCAxLCA2MiwgMSk7XHJcbiAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjcxOTUwO1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3VjY2VzcyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMjM3LCA0Nyk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgIDMwNmRlZyxcclxuICAgICAgICAgICAgcmdiYSgwLCAyMzcsIDQ3LCAxKSAyOSUsXHJcbiAgICAgICAgICAgIHJnYmEoMCwgMTc5LCAzNSwgMSkgNjQlLFxyXG4gICAgICAgICAgICByZ2JhKDAsIDE3OSwgMzUsIDEpIDgzJVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgICAgICAgIGZvbnQtc3R5bGU6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICBtYXJnaW46IDEwcHggMTVweDtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb3B5IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigzMSwgMTY4LCAyNTUpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAyMjNkZWcsXHJcbiAgICAgICAgICAgIHJnYmEoMzEsIDE2OCwgMjU1LCAxKSAyMiUsXHJcbiAgICAgICAgICAgIHJnYmEoMTksIDEwOCwgMjU1LCAxKSA0NyVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ldGhlcnNjYW4ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzI3MTk1MDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyQ29udGVudDtcclxuXHJcbntcclxuICAvKiA8ZGl2PlxyXG57XHJcbiAgZG9jdW1lbnQucXVlcnlDb21tYW5kU3VwcG9ydGVkKFwiY29weVwiKSAmJiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NvcHlUb0NsaXBib2FyZH0+Q29weTwvYnV0dG9uPlxyXG4gICAgICB7Y29weVN1Y2Nlc3N9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuPGZvcm0+XHJcbiAgPHRleHRhcmVhIHJlZj17aW5wdXRSZWZ9IHZhbHVlPVwiU29tZSB0ZXh0IHRvIGNvcHlcIiAvPlxyXG48L2Zvcm0+XHJcbjwvZGl2PiAqL1xyXG59XHJcblxyXG4vLyB0eXBlPVwidGV4dFwiXHJcbi8vIGRpc2FibGVkPVwiZGlzYWJsZWRcIlxyXG4vLyBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2Vob2xkZXJ9XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\components\\\\sidebar\\\\UserContent.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (UserContent);
{
  /* <div>
  {
  document.queryCommandSupported("copy") && (
    <div>
      <button onClick={copyToClipboard}>Copy</button>
      {copySuccess}
    </div>
  )
  }
  <form>
  <textarea ref={inputRef} value="Some text to copy" />
  </form>
  </div> */
} // type="text"
// disabled="disabled"
// placeholder={props.placeholder}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }

  return _react.default.cloneElement(child, childProps);
}

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

    return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
  } catch (_) {
    return urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

function tryParseRelativeUrl(url) {
  try {
    return (0, _parseRelativeUrl.parseRelativeUrl)(url);
  } catch (err) {
    if (true) {
      setTimeout(() => {
        throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
      }, 0);
    }

    return null;
  }
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, options);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as);
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return false;
    let {
      pathname,
      searchParams
    } = parsed;
    const query = (0, _querystring.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options;

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(cleanedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      const {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo);

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), as, __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return;
    const {
      pathname
    } = parsed; // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, item));
    } else {
      result.set(key, value);
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/globals */ "./utils/globals.js");
/* harmony import */ var _utils_utility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utility */ "./utils/utility.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Spinner */ "./components/Spinner.jsx");
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Navigation */ "./components/Navigation.jsx");
/* harmony import */ var _components_InfoHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/InfoHeader */ "./components/InfoHeader.jsx");
/* harmony import */ var _components_sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/sidebar/Sidebar */ "./components/sidebar/Sidebar.jsx");
/* harmony import */ var _components_matrix_MatrixSystem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/matrix/MatrixSystem */ "./components/matrix/MatrixSystem.jsx");
/* harmony import */ var _components_AccountContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/AccountContext */ "./components/AccountContext.jsx");
var _jsxFileName = "C:\\Users\\crfab\\Desktop\\forsage-boilerplate\\pages\\dashboard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










 // Context API



class Dashboard extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  async UNSAFE_componentWillMount() {
    this.setState({
      account: this.context.account
    });
    await Object(_utils_utility__WEBPACK_IMPORTED_MODULE_4__["loadWeb3"])();
    await this.loadBlockchainData();
    this.setState({
      loading: false
    });
  }

  async loadBlockchainData() {
    try {
      const web3 = new web3__WEBPACK_IMPORTED_MODULE_2___default.a(web3__WEBPACK_IMPORTED_MODULE_2___default.a.givenProvider || "http://localhost:8545");
      const contract = new web3.eth.Contract(_utils_globals__WEBPACK_IMPORTED_MODULE_3__["ABI"], _utils_globals__WEBPACK_IMPORTED_MODULE_3__["ADDRESS"]);
      this.setState({
        contract
      });
      const address = _utils_globals__WEBPACK_IMPORTED_MODULE_3__["ADDRESS"];
      this.setState({
        address
      });
      const userId = await this.state.contract.methods.users(this.state.account).call();
      this.setState({
        userIds: userId.id,
        parnterCount: userId.partnersCount
      });
      const userCount = await this.state.contract.methods.lastUserId().call();
      this.setState({
        totalUsers: userCount
      });
      const balance = await this.state.contract.methods.balances(this.state.account).call();
      this.setState({
        balance
      }); // Matrix Calls

      const costs = await contract.methods.registrationCost().call();
      this.setState({
        cost: costs
      }); // Error Catch -> Fetch the new Data directly from web3 provider after reload
    } catch (err) {
      const web3 = new web3__WEBPACK_IMPORTED_MODULE_2___default.a(web3__WEBPACK_IMPORTED_MODULE_2___default.a.givenProvider || "http://localhost:8545");
      const accounts = await web3.eth.getAccounts();
      this.setState({
        account: accounts[0]
      });
      const contract = new web3.eth.Contract(_utils_globals__WEBPACK_IMPORTED_MODULE_3__["ABI"], _utils_globals__WEBPACK_IMPORTED_MODULE_3__["ADDRESS"]);
      this.setState({
        contract
      });
      const address = _utils_globals__WEBPACK_IMPORTED_MODULE_3__["ADDRESS"];
      this.setState({
        address
      });
      const isExists = await contract.methods.isUserExists(this.state.account).call();
      this.setState({
        isExist: isExists
      }); // Bundled Promises

      const userId = await this.state.contract.methods.users(this.state.account).call();
      this.setState({
        userIds: userId.id,
        parnterCount: userId.partnersCount
      });
      const userCount = await this.state.contract.methods.lastUserId().call();
      this.setState({
        totalUsers: userCount
      });
      const balance = await this.state.contract.methods.balances(this.state.account).call();
      this.setState({
        balance
      });
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      isExist: true,
      userIds: "",
      loading: true,
      totalUsers: "",
      parnterCount: ""
    };
  }

  render() {
    if (this.state.loading === true) {
      return __jsx(_components_Spinner__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 14
        }
      });
    } else {
      if (this.state.isExist === true) {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_7__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 13
          }
        }), __jsx("div", {
          className: "jsx-2544248236" + " " + "dashboard",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }
        }, __jsx(_components_InfoHeader__WEBPACK_IMPORTED_MODULE_8__["default"], {
          totalUsers: this.state.totalUsers,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 15
          }
        }), __jsx("div", {
          className: "jsx-2544248236" + " " + "pagination",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 15
          }
        }, __jsx("div", {
          className: "jsx-2544248236" + " " + "small-box",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 17
          }
        }, __jsx(_components_sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_9__["default"], {
          userIds: this.state.userIds,
          partnersCount: this.state.parnterCount,
          account: this.state.account,
          address: this.state.address,
          balance: this.state.balance,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 19
          }
        })), __jsx("div", {
          className: "jsx-2544248236" + " " + "big-box",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 17
          }
        }, __jsx(_components_matrix_MatrixSystem__WEBPACK_IMPORTED_MODULE_10__["default"], {
          account: this.state.account,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 19
          }
        }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          id: "2544248236",
          __self: this
        }, ".dashboard.jsx-2544248236{background:rgba(16,1,62,1);width:100vw;max-width:1420px;margin:auto auto;padding:5px;}.pagination.jsx-2544248236{margin-top:2vh;display:grid;grid-template-columns:30% 65%;grid-gap:5%;}@media only screen and (max-width:900px){.pagination.jsx-2544248236{grid-template-columns:1fr;grid-gap:5%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXHBhZ2VzXFxkYXNoYm9hcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUgwQixBQUdpRCxBQU9mLEFBT2EsZUFOZixXQU9DLENBZEYsQ0FRa0IsVUFPOUIsQ0FkaUIsaUJBQ0EsRUFPTCxZQUNkLEdBUGMsWUFDZCIsImZpbGUiOiJDOlxcVXNlcnNcXGNyZmFiXFxEZXNrdG9wXFxmb3JzYWdlLWJvaWxlcnBsYXRlXFxwYWdlc1xcZGFzaGJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xyXG5pbXBvcnQgeyBBQkksIEFERFJFU1MgfSBmcm9tIFwiLi4vdXRpbHMvZ2xvYmFsc1wiO1xyXG5pbXBvcnQgeyBsb2FkV2ViMyB9IGZyb20gXCIuLi91dGlscy91dGlsaXR5XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi9jb21wb25lbnRzL1NwaW5uZXJcIjtcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgSW5mb0hlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9JbmZvSGVhZGVyXCI7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuLi9jb21wb25lbnRzL3NpZGViYXIvU2lkZWJhclwiO1xyXG5pbXBvcnQgTWF0cml4U3lzdGVtIGZyb20gXCIuLi9jb21wb25lbnRzL21hdHJpeC9NYXRyaXhTeXN0ZW1cIjtcclxuXHJcbi8vIENvbnRleHQgQVBJXHJcbmltcG9ydCBBY2NvdW50Q29udGV4dCBmcm9tIFwiLi4vY29tcG9uZW50cy9BY2NvdW50Q29udGV4dFwiO1xyXG5cclxuY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgY29udGV4dFR5cGUgPSBBY2NvdW50Q29udGV4dDtcclxuXHJcbiAgYXN5bmMgVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBhY2NvdW50OiB0aGlzLmNvbnRleHQuYWNjb3VudCB9KTtcclxuICAgIGF3YWl0IGxvYWRXZWIzKCk7XHJcbiAgICBhd2FpdCB0aGlzLmxvYWRCbG9ja2NoYWluRGF0YSgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgbG9hZEJsb2NrY2hhaW5EYXRhKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgd2ViMyA9IG5ldyBXZWIzKFdlYjMuZ2l2ZW5Qcm92aWRlciB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6ODU0NVwiKTtcclxuICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoQUJJLCBBRERSRVNTKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRyYWN0IH0pO1xyXG4gICAgICBjb25zdCBhZGRyZXNzID0gQUREUkVTUztcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFkZHJlc3MgfSk7XHJcblxyXG4gICAgICBjb25zdCB1c2VySWQgPSBhd2FpdCB0aGlzLnN0YXRlLmNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAudXNlcnModGhpcy5zdGF0ZS5hY2NvdW50KVxyXG4gICAgICAgIC5jYWxsKCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHVzZXJJZHM6IHVzZXJJZC5pZCxcclxuICAgICAgICBwYXJudGVyQ291bnQ6IHVzZXJJZC5wYXJ0bmVyc0NvdW50LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgdXNlckNvdW50ID0gYXdhaXQgdGhpcy5zdGF0ZS5jb250cmFjdC5tZXRob2RzLmxhc3RVc2VySWQoKS5jYWxsKCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0b3RhbFVzZXJzOiB1c2VyQ291bnQgfSk7XHJcbiAgICAgIGNvbnN0IGJhbGFuY2UgPSBhd2FpdCB0aGlzLnN0YXRlLmNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAuYmFsYW5jZXModGhpcy5zdGF0ZS5hY2NvdW50KVxyXG4gICAgICAgIC5jYWxsKCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBiYWxhbmNlIH0pO1xyXG5cclxuICAgICAgLy8gTWF0cml4IENhbGxzXHJcbiAgICAgIGNvbnN0IGNvc3RzID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy5yZWdpc3RyYXRpb25Db3N0KCkuY2FsbCgpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY29zdDogY29zdHMgfSk7XHJcblxyXG4gICAgICAvLyBFcnJvciBDYXRjaCAtPiBGZXRjaCB0aGUgbmV3IERhdGEgZGlyZWN0bHkgZnJvbSB3ZWIzIHByb3ZpZGVyIGFmdGVyIHJlbG9hZFxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyhXZWIzLmdpdmVuUHJvdmlkZXIgfHwgXCJodHRwOi8vbG9jYWxob3N0Ojg1NDVcIik7XHJcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFjY291bnQ6IGFjY291bnRzWzBdIH0pO1xyXG4gICAgICBjb25zdCBjb250cmFjdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChBQkksIEFERFJFU1MpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY29udHJhY3QgfSk7XHJcbiAgICAgIGNvbnN0IGFkZHJlc3MgPSBBRERSRVNTO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYWRkcmVzcyB9KTtcclxuICAgICAgY29uc3QgaXNFeGlzdHMgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgLmlzVXNlckV4aXN0cyh0aGlzLnN0YXRlLmFjY291bnQpXHJcbiAgICAgICAgLmNhbGwoKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRXhpc3Q6IGlzRXhpc3RzIH0pO1xyXG4gICAgICAvLyBCdW5kbGVkIFByb21pc2VzXHJcbiAgICAgIGNvbnN0IHVzZXJJZCA9IGF3YWl0IHRoaXMuc3RhdGUuY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgIC51c2Vycyh0aGlzLnN0YXRlLmFjY291bnQpXHJcbiAgICAgICAgLmNhbGwoKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgdXNlcklkczogdXNlcklkLmlkLFxyXG4gICAgICAgIHBhcm50ZXJDb3VudDogdXNlcklkLnBhcnRuZXJzQ291bnQsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB1c2VyQ291bnQgPSBhd2FpdCB0aGlzLnN0YXRlLmNvbnRyYWN0Lm1ldGhvZHMubGFzdFVzZXJJZCgpLmNhbGwoKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRvdGFsVXNlcnM6IHVzZXJDb3VudCB9KTtcclxuICAgICAgY29uc3QgYmFsYW5jZSA9IGF3YWl0IHRoaXMuc3RhdGUuY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgIC5iYWxhbmNlcyh0aGlzLnN0YXRlLmFjY291bnQpXHJcbiAgICAgICAgLmNhbGwoKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJhbGFuY2UgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgYWNjb3VudDogXCJcIixcclxuICAgICAgaXNFeGlzdDogdHJ1ZSxcclxuICAgICAgdXNlcklkczogXCJcIixcclxuICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgdG90YWxVc2VyczogXCJcIixcclxuICAgICAgcGFybnRlckNvdW50OiBcIlwiLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmxvYWRpbmcgPT09IHRydWUpIHtcclxuICAgICAgcmV0dXJuIDxTcGlubmVyIC8+O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUuaXNFeGlzdCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TmF2aWdhdGlvbiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2hib2FyZFwiPlxyXG4gICAgICAgICAgICAgIDxJbmZvSGVhZGVyIHRvdGFsVXNlcnM9e3RoaXMuc3RhdGUudG90YWxVc2Vyc30gLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxTaWRlYmFyXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcklkcz17dGhpcy5zdGF0ZS51c2VySWRzfVxyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRuZXJzQ291bnQ9e3RoaXMuc3RhdGUucGFybnRlckNvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMuc3RhdGUuYWNjb3VudH1cclxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzPXt0aGlzLnN0YXRlLmFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgYmFsYW5jZT17dGhpcy5zdGF0ZS5iYWxhbmNlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpZy1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgPE1hdHJpeFN5c3RlbSBhY2NvdW50PXt0aGlzLnN0YXRlLmFjY291bnR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmRhc2hib2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTYsIDEsIDYyLCAxKTtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE0MjBweDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5wYWdpbmF0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnZoO1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwJSA2NSU7XHJcbiAgICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiA1JTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgLnBhZ2luYXRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiA1JTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\pages\\\\dashboard.js */")));
      } else {
        next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/login");
      }
    }
  }

}

_defineProperty(Dashboard, "contextType", _components_AccountContext__WEBPACK_IMPORTED_MODULE_11__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./utils/globals.js":
/*!**************************!*\
  !*** ./utils/globals.js ***!
  \**************************/
/*! exports provided: ABI, ADDRESS, OWNER, BASE_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ABI", function() { return ABI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADDRESS", function() { return ADDRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OWNER", function() { return OWNER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
const ABI = [{
  type: "function",
  stateMutability: "view",
  payable: false,
  outputs: [{
    type: "bool",
    name: "",
    internalType: "bool"
  }],
  name: "usersActiveX3Levels",
  inputs: [{
    type: "address",
    name: "userAddress",
    internalType: "address"
  }, {
    type: "uint8",
    name: "level",
    internalType: "uint8"
  }],
  constant: true
}, {
  type: "function",
  stateMutability: "view",
  payable: false,
  outputs: [{
    type: "uint256",
    name: "",
    internalType: "uint256"
  }],
  name: "balances",
  inputs: [{
    type: "address",
    name: "",
    internalType: "address"
  }],
  constant: true
}, {
  type: "function",
  stateMutability: "view",
  payable: false,
  outputs: [{
    type: "address",
    name: "",
    internalType: "address"
  }],
  name: "idToAddress",
  inputs: [{
    type: "uint256",
    name: "",
    internalType: "uint256"
  }],
  constant: true
}, {
  type: "function",
  stateMutability: "view",
  payable: false,
  outputs: [{
    type: "uint256",
    name: "",
    internalType: "uint256"
  }],
  name: "lastUserId",
  inputs: [],
  constant: true
}, {
  type: "function",
  stateMutability: "view",
  payable: false,
  outputs: [{
    type: "address",
    name: "",
    internalType: "address"
  }],
  name: "userIds",
  inputs: [{
    type: "uint256",
    name: "",
    internalType: "uint256"
  }],
  constant: true
}, {
  type: "function",
  stateMutability: "view",
  payable: false,
  outputs: [{
    type: "bool",
    name: "",
    internalType: "bool"
  }],
  name: "isUserExists",
  inputs: [{
    type: "address",
    name: "user",
    internalType: "address"
  }],
  constant: true
}, {
  type: "function",
  stateMutability: "payable",
  payable: true,
  outputs: [],
  name: "registrationExt",
  inputs: [{
    type: "address",
    name: "referrerAddress",
    internalType: "address"
  }],
  constant: false
}, {
  type: "function",
  stateMutability: "view",
  payable: false,
  outputs: [{
    type: "address",
    name: "",
    internalType: "address"
  }, {
    type: "address[]",
    name: "",
    internalType: "address[]"
  }, {
    type: "bool",
    name: "",
    internalType: "bool"
  }],
  name: "usersX3Matrix",
  inputs: [{
    type: "address",
    name: "userAddress",
    internalType: "address"
  }, {
    type: "uint8",
    name: "level",
    internalType: "uint8"
  }],
  constant: true
}, {
  type: "function",
  stateMutability: "view",
  payable: false,
  outputs: [{
    type: "address",
    name: "",
    internalType: "address"
  }],
  name: "owner",
  inputs: [],
  constant: true
}, {
  type: "function",
  stateMutability: "view",
  payable: false,
  outputs: [{
    type: "address",
    name: "",
    internalType: "address"
  }, {
    type: "address[]",
    name: "",
    internalType: "address[]"
  }, {
    type: "address[]",
    name: "",
    internalType: "address[]"
  }, {
    type: "bool",
    name: "",
    internalType: "bool"
  }, {
    type: "address",
    name: "",
    internalType: "address"
  }],
  name: "usersX6Matrix",
  inputs: [{
    type: "address",
    name: "userAddress",
    internalType: "address"
  }, {
    type: "uint8",
    name: "level",
    internalType: "uint8"
  }],
  constant: true
}, {
  type: "function",
  stateMutability: "view",
  payable: false,
  outputs: [{
    type: "uint256",
    name: "id",
    internalType: "uint256"
  }, {
    type: "address",
    name: "referrer",
    internalType: "address"
  }, {
    type: "uint256",
    name: "partnersCount",
    internalType: "uint256"
  }],
  name: "users",
  inputs: [{
    type: "address",
    name: "",
    internalType: "address"
  }],
  constant: true
}, {
  type: "function",
  stateMutability: "view",
  payable: false,
  outputs: [{
    type: "bool",
    name: "",
    internalType: "bool"
  }],
  name: "usersActiveX6Levels",
  inputs: [{
    type: "address",
    name: "userAddress",
    internalType: "address"
  }, {
    type: "uint8",
    name: "level",
    internalType: "uint8"
  }],
  constant: true
}, {
  type: "function",
  stateMutability: "payable",
  payable: true,
  outputs: [],
  name: "buyNewLevel",
  inputs: [{
    type: "uint8",
    name: "matrix",
    internalType: "uint8"
  }, {
    type: "uint8",
    name: "level",
    internalType: "uint8"
  }],
  constant: false
}, {
  type: "function",
  stateMutability: "view",
  payable: false,
  outputs: [{
    type: "uint256",
    name: "",
    internalType: "uint256"
  }],
  name: "registrationCost",
  inputs: [],
  constant: true
}, {
  type: "function",
  stateMutability: "view",
  payable: false,
  outputs: [{
    type: "address",
    name: "",
    internalType: "address"
  }],
  name: "findFreeX6Referrer",
  inputs: [{
    type: "address",
    name: "userAddress",
    internalType: "address"
  }, {
    type: "uint8",
    name: "level",
    internalType: "uint8"
  }],
  constant: true
}, {
  type: "function",
  stateMutability: "view",
  payable: false,
  outputs: [{
    type: "uint256",
    name: "",
    internalType: "uint256"
  }],
  name: "levelPrice",
  inputs: [{
    type: "uint8",
    name: "",
    internalType: "uint8"
  }],
  constant: true
}, {
  type: "function",
  stateMutability: "view",
  payable: false,
  outputs: [{
    type: "address",
    name: "",
    internalType: "address"
  }],
  name: "findFreeX3Referrer",
  inputs: [{
    type: "address",
    name: "userAddress",
    internalType: "address"
  }, {
    type: "uint8",
    name: "level",
    internalType: "uint8"
  }],
  constant: true
}, {
  type: "constructor",
  stateMutability: "nonpayable",
  payable: false,
  inputs: [{
    type: "address",
    name: "owner",
    internalType: "address"
  }]
}, {
  type: "fallback",
  stateMutability: "payable",
  payable: true
}, {
  type: "event",
  name: "Registration",
  inputs: [{
    type: "address",
    name: "user",
    internalType: "address",
    indexed: true
  }, {
    type: "address",
    name: "referrer",
    internalType: "address",
    indexed: true
  }, {
    type: "uint256",
    name: "userId",
    internalType: "uint256",
    indexed: true
  }, {
    type: "uint256",
    name: "referrerId",
    internalType: "uint256",
    indexed: false
  }],
  anonymous: false
}, {
  type: "event",
  name: "Reinvest",
  inputs: [{
    type: "address",
    name: "user",
    internalType: "address",
    indexed: true
  }, {
    type: "address",
    name: "currentReferrer",
    internalType: "address",
    indexed: true
  }, {
    type: "address",
    name: "caller",
    internalType: "address",
    indexed: true
  }, {
    type: "uint8",
    name: "matrix",
    internalType: "uint8",
    indexed: false
  }, {
    type: "uint8",
    name: "level",
    internalType: "uint8",
    indexed: false
  }],
  anonymous: false
}, {
  type: "event",
  name: "Upgrade",
  inputs: [{
    type: "address",
    name: "user",
    internalType: "address",
    indexed: true
  }, {
    type: "address",
    name: "referrer",
    internalType: "address",
    indexed: true
  }, {
    type: "uint8",
    name: "matrix",
    internalType: "uint8",
    indexed: false
  }, {
    type: "uint8",
    name: "level",
    internalType: "uint8",
    indexed: false
  }],
  anonymous: false
}, {
  type: "event",
  name: "NewUserPlace",
  inputs: [{
    type: "address",
    name: "user",
    internalType: "address",
    indexed: true
  }, {
    type: "address",
    name: "referrer",
    internalType: "address",
    indexed: true
  }, {
    type: "uint8",
    name: "matrix",
    internalType: "uint8",
    indexed: false
  }, {
    type: "uint8",
    name: "level",
    internalType: "uint8",
    indexed: false
  }, {
    type: "uint8",
    name: "place",
    internalType: "uint8",
    indexed: false
  }],
  anonymous: false
}, {
  type: "event",
  name: "MissedEthReceive",
  inputs: [{
    type: "address",
    name: "receiver",
    internalType: "address",
    indexed: true
  }, {
    type: "address",
    name: "from",
    internalType: "address",
    indexed: true
  }, {
    type: "uint8",
    name: "matrix",
    internalType: "uint8",
    indexed: false
  }, {
    type: "uint8",
    name: "level",
    internalType: "uint8",
    indexed: false
  }],
  anonymous: false
}, {
  type: "event",
  name: "SentExtraEthDividends",
  inputs: [{
    type: "address",
    name: "from",
    internalType: "address",
    indexed: true
  }, {
    type: "address",
    name: "receiver",
    internalType: "address",
    indexed: true
  }, {
    type: "uint8",
    name: "matrix",
    internalType: "uint8",
    indexed: false
  }, {
    type: "uint8",
    name: "level",
    internalType: "uint8",
    indexed: false
  }],
  anonymous: false
}];
const ADDRESS = "0xe1bBb63e8cAC9361f0c07Ad6AEE12c2893D42735";
const OWNER = "0xf2aA26723ed7b099845afE69FA4929A46BC00245";
const BASE_URL = "https://amnext.vercel.app/"; // https://mumbai-explorer.matic.today/address/0xe1bBb63e8cAC9361f0c07Ad6AEE12c2893D42735/contracts

/***/ }),

/***/ "./utils/utility.js":
/*!**************************!*\
  !*** ./utils/utility.js ***!
  \**************************/
/*! exports provided: loadWeb3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadWeb3", function() { return loadWeb3; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ "./utils/globals.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_1__);

 // Fetching WEB3 Provider

const loadWeb3 = async () => {
  try {
    if (window.ethereum) {
      window.web3 = new web3__WEBPACK_IMPORTED_MODULE_1___default.a(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new web3__WEBPACK_IMPORTED_MODULE_1___default.a(window.web3.currentProvider);
    } else {
      window.alert("Non-Ethereum browser detected. You should consider trying MetaMask!");
    }
  } catch (err) {
    window.alert("Trouble connecting to you web3 browser...");
  }
};

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FjY291bnRDb250ZXh0LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0luZm9IZWFkZXIuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2aWdhdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TcGlubmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2luZm9oZWFkZXIvSXRlbUhvbGRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tYXRyaXgvQ2lyY2xlLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21hdHJpeC9NYXRyaXhTeXN0ZW0uanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWF0cml4L1gzTWF0cml4SG9sZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21hdHJpeC9YM21hdHJpeC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tYXRyaXgvWDRNYXRyaXhIb2xkZXIuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWF0cml4L1g0bWF0cml4LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NpZGViYXIvRGl2aWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaWRlYmFyL1NpZGViYXIuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2lkZWJhci9TaWRlYmFyQ29udGVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaWRlYmFyL1VzZXJDb250ZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZGFzaGJvYXJkLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2dsb2JhbHMuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdXRpbGl0eS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWIzXCIiXSwibmFtZXMiOlsiQWNjb3VudENvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJBY2NvdW50UHJvdmlkZXIiLCJDb21wb25lbnQiLCJhY2NvdW50Iiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJyZW5kZXIiLCJjaGlsZHJlbiIsInByb3BzIiwic3RhdGUiLCJzZXRBY2NvdW50IiwiSW5mb0hlYWRlciIsInRvdGFsVXNlcnMiLCJOYXZpZ2F0aW9uIiwiU3Bpbm5lciIsIkl0ZW1Ib2xkZXIiLCJwaWMiLCJ0aXRsZSIsImFtb3VudCIsIkNpcmNsZSIsImV4aXN0IiwiTWF0cml4U3lzdGVtIiwiVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCIsImxvYWRXZWIzIiwibG9hZEJsb2NrY2hhaW5EYXRhIiwid2ViMyIsIldlYjMiLCJnaXZlblByb3ZpZGVyIiwiY29udHJhY3QiLCJldGgiLCJDb250cmFjdCIsIkFCSSIsIkFERFJFU1MiLCJjb3N0cyIsIm1ldGhvZHMiLCJyZWdpc3RyYXRpb25Db3N0IiwiY2FsbCIsIl9jb3N0cyIsInV0aWxzIiwiZnJvbVdlaSIsImNvc3QiLCJ4MyIsImkiLCJyZXMiLCJ1c2Vyc1gzTWF0cml4IiwicHVzaCIsImxldmVsIiwidXNlclgzIiwiZWxlbWVudHMiLCJqIiwiZG93bmxpbmVzIiwibGVuZ3RoIiwiaWQiLCJudW1iZXIiLCJrZXkiLCJ4M0V4aXN0IiwidXNlcnNBY3RpdmVYM0xldmVscyIsInVzZXJYM0V4aXN0IiwieDNQYXlsb2FkIiwieDNJbmZvcyIsImVyciIsIndpbmRvdyIsImFsZXJ0IiwiYXJyMSIsImFycjIiLCJtYXAiLCJpdGVtIiwiT2JqZWN0IiwiYXNzaWduIiwiY29uc3RydWN0b3IiLCJwYXJudGVyQ291bnQiLCJYM01hdHJpeEhvbGRlciIsInJlbG9hZCIsInNldFJlbG9hZCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3RydWMiLCJ1bmRlZmluZWQiLCJtYXRyaXgiLCJpbmRleCIsIlgzbWF0cml4IiwiYm91Z2h0IiwiYWN0aXZlIiwiWDRNYXRyaXhIb2xkZXIiLCJYNG1hdHJpeCIsIkRpdmlkZXIiLCJTaWRlYmFyIiwidXNlcklkcyIsInBhcnRuZXJzQ291bnQiLCJiYWxhbmNlIiwiQkFTRV9VUkwiLCJhZGRyZXNzIiwiU2lkZWJhckNvbnRlbnQiLCJiYWxhbmNlX3VzZCIsImJhbGFuY2VfZXRoIiwiVXNlckNvbnRlbnQiLCJjb3B5U3VjY2VzcyIsInNldENvcHlTdWNjZXNzIiwiaW5wdXRSZWYiLCJ1c2VSZWYiLCJjb3B5VG9DbGlwYm9hcmQiLCJlIiwiY3VycmVudCIsInNlbGVjdCIsImRvY3VtZW50IiwiZXhlY0NvbW1hbmQiLCJ0YXJnZXQiLCJmb2N1cyIsInBsYWNlaG9sZGVyIiwicXVlcnlDb21tYW5kU3VwcG9ydGVkIiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJwcmVmZXRjaGVkIiwiY2FjaGVkT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJvYnNlcnZlciIsImdldE9ic2VydmVyIiwiY29uc29sZSIsInJvdXRlciIsImhyZWYiLCJldmVudCIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImhhc1dhcm5lZCIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkSHJlZiIsImNoaWxkRWxtIiwiaXNQcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRQcm9wcyIsInJlZiIsImVsIiwic2V0Q2hpbGRFbG0iLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsIndhcm4iLCJQcm9wVHlwZXMiLCJyZXF1aXJlIiwiZXhhY3QiLCJMaW5rIiwic2hhbGxvdyIsInBhc3NIcmVmIiwidmFsdWUiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJzZXRUaW1lb3V0IiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJjcmVkZW50aWFscyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImlzU2VydmVyUmVuZGVyIiwibWFya0xvYWRpbmdFcnJvciIsInJvdXRlIiwicXVlcnkiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJfX05FWFRfREFUQV9fIiwidXBkYXRlIiwibW9kIiwiZGF0YSIsIm5ld0RhdGEiLCJiYWNrIiwib3B0aW9ucyIsInByZXBhcmVVcmxBcyIsImlzTG9jYWxVUkwiLCJTVCIsInBlcmZvcm1hbmNlIiwiY2xlYW5lZEFzIiwiZGVsQmFzZVBhdGgiLCJwYXJzZWQiLCJ0cnlQYXJzZVJlbGF0aXZlVXJsIiwibWV0aG9kIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiYXBwQ29tcCIsImNoYW5nZVN0YXRlIiwiX19OIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJlcnJvciIsImNhY2hlZFJvdXRlSW5mbyIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJQcm9taXNlIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJEVU1NWV9CQVNFIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwic2VhcmNoUGFyYW1zIiwiQXJyYXkiLCJyZXN1bHQiLCJzZWFyY2hQYXJhbXNMaXN0IiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwib3B0aW9uYWwiLCJyZXBlYXQiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJzZWdtZW50IiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJpc05hTiIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJEYXNoYm9hcmQiLCJjb250ZXh0IiwibG9hZGluZyIsInVzZXJJZCIsInVzZXJzIiwidXNlckNvdW50IiwibGFzdFVzZXJJZCIsImJhbGFuY2VzIiwiYWNjb3VudHMiLCJnZXRBY2NvdW50cyIsImlzRXhpc3RzIiwiaXNVc2VyRXhpc3RzIiwiaXNFeGlzdCIsInR5cGUiLCJzdGF0ZU11dGFiaWxpdHkiLCJwYXlhYmxlIiwib3V0cHV0cyIsImludGVybmFsVHlwZSIsImlucHV0cyIsImNvbnN0YW50IiwiaW5kZXhlZCIsImFub255bW91cyIsIk9XTkVSIiwiZXRoZXJldW0iLCJlbmFibGUiLCJjdXJyZW50UHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSx3RTs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFFQSxNQUFNQSxjQUFjLEdBQUdDLDRDQUFLLENBQUNDLGFBQU4sRUFBdkIsQyxDQUVBO0FBQ0E7O0FBRUEsTUFBTUMsZUFBTixTQUE4QkMsK0NBQTlCLENBQXdDO0FBQUE7QUFBQTs7QUFBQSxtQ0FFOUI7QUFDTkMsYUFBTyxFQUFFO0FBREgsS0FGOEI7O0FBQUEsd0NBT3hC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OztBQ0FBLGlDIiwiZmlsZSI6InBhZ2VzL2Rhc2hib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvZGFzaGJvYXJkLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEFjY291bnRDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IEFjY291bnRQcm92aWRlciA9IEFjY291bnRDb250ZXh0LlByb3ZpZGVyO1xyXG4vLyBleHBvcnQgY29uc3QgQWNjb3VudENvbnN1bWVyID0gQWNjb3VudENvbnRleHQuQ29uc3VtZXI7XHJcblxyXG5jbGFzcyBBY2NvdW50UHJvdmlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIC8vIGNvbnRleHQgc3RhdGVcclxuICBzdGF0ZSA9IHtcclxuICAgIGFjY291bnQ6IFwiXCIsXHJcbiAgfTtcclxuXHJcbiAgLy9NZXRob2QgdG8gdXBkYXRlXHJcbiAgc2V0QWNjb3VudCA9IChhY2NvdW50KSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7IGFjY291bnQgfSkpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCB7IGFjY291bnQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCB7IHNldEFjY291bnQgfSA9IHRoaXM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEFjY291bnRDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgIGFjY291bnQsXHJcbiAgICAgICAgICBzZXRBY2NvdW50LFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvQWNjb3VudENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgQWNjb3VudFByb3ZpZGVyIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50Q29udGV4dDtcclxuIiwiaW1wb3J0IEl0ZW1Ib2xkZXIgZnJvbSBcIi4vaW5mb2hlYWRlci9JdGVtSG9sZGVyXCI7XHJcblxyXG5jb25zdCBJbmZvSGVhZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1tYXJnaW5cIj5cclxuICAgICAgPEl0ZW1Ib2xkZXJcclxuICAgICAgICBwaWM9XCIvYXNzZXRzL2ltZy91c2VyX2ljb24ucG5nXCJcclxuICAgICAgICB0aXRsZT1cIkFsbCBQYXJ0aWNpcGFudHNcIlxyXG4gICAgICAgIGFtb3VudD17cHJvcHMudG90YWxVc2Vyc31cclxuICAgICAgLz5cclxuICAgICAgPEl0ZW1Ib2xkZXJcclxuICAgICAgICBwaWM9XCIvYXNzZXRzL2ltZy9sYXN0XzI0LmpwZ1wiXHJcbiAgICAgICAgdGl0bGU9XCJKb2luZWQgaW4gMjQgaG91cnNcIlxyXG4gICAgICAgIGFtb3VudD17cHJvcHMudG90YWxVc2Vyc31cclxuICAgICAgLz5cclxuICAgICAgPEl0ZW1Ib2xkZXJcclxuICAgICAgICBwaWM9XCIvYXNzZXRzL2ltZy9ldGhlcmV1bS5qcGdcIlxyXG4gICAgICAgIHRpdGxlPVwiUGFydGljaXBhbnQgTUFUSUNcIlxyXG4gICAgICAgIGFtb3VudD17cHJvcHMudG90YWxVc2VycyAqIDMwMH1cclxuICAgICAgLz5cclxuICAgICAgPEl0ZW1Ib2xkZXJcclxuICAgICAgICBwaWM9XCIvYXNzZXRzL2ltZy9ldXJvLmpwZ1wiXHJcbiAgICAgICAgdGl0bGU9XCJQYXJ0aWNpcGFudCBVU0RcIlxyXG4gICAgICAgIGFtb3VudD17cHJvcHMudG90YWxVc2VycyAqIDMwMCAqIDEzMH1cclxuICAgICAgLz5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5pbmZvLW1hcmdpbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XHJcbiAgICAgICAgICBncmlkLWdhcDogNTBweDtcclxuICAgICAgICAgIG1hcmdpbjogYXV0byBhdXRvO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTB2aDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmZvSGVhZGVyO1xyXG4iLCJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBOYXZpZ2F0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2PlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIlwiPlxyXG4gICAgICAgICAgICA8YSB0aXRsZT1cIlwiPk1haW48L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiXCI+XHJcbiAgICAgICAgICAgIDxhIHRpdGxlPVwiXCI+T2ZmaWNlPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIlwiPlxyXG4gICAgICAgICAgICA8YSB0aXRsZT1cIlwiPlBhcnRuZXJzPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIlwiPlxyXG4gICAgICAgICAgICA8YSB0aXRsZT1cIlwiPlN0YXRpc3RpY3M8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiXCI+XHJcbiAgICAgICAgICAgIDxhIHRpdGxlPVwiXCI+R29hbDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJcIj5cclxuICAgICAgICAgICAgPGEgdGl0bGU9XCJcIj5JbnN0cnVjdGlvbnM8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIG5hdiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI4LCAyMiwgODUsIDEpO1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgY29sb3I6IGdyZXg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYXYgdWwge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyOCwgMjIsIDg1LCAxKTtcclxuICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgLXdlYmtpdC1tYXJnaW4tYmVmb3JlOiAwO1xyXG4gICAgICAgICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xyXG4gICAgICAgICAgLXdlYmtpdC1tYXJnaW4tYWZ0ZXI6IDA7XHJcbiAgICAgICAgICBtYXJnaW4tYmxvY2stZW5kOiAwO1xyXG4gICAgICAgICAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYXYgZmlndXJlIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYXYgdWwgbGkge1xyXG4gICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmF2IHVsIGxpIGEge1xyXG4gICAgICAgICAgY29sb3I6ICM2YTY2OGY7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjtcclxuIiwiY29uc3QgU3Bpbm5lciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJob2xkZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFydC1ob2xkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxkcy1oZWFydFwiPlxyXG4gICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aDE+Q29ubmVjdGluZyB0byB0aGUgQ29udHJhY3QgYW5kIGdldHRpbmcgeW91ciBEYXNoYm9hcmQ8L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuaG9sZGVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMjB2aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhlYXJ0LWhvbGRlciB7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgICAgICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxkcy1oZWFydCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDQwcHggNDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxkcy1oZWFydCBkaXYge1xyXG4gICAgICAgICAgdG9wOiAzMnB4O1xyXG4gICAgICAgICAgbGVmdDogMzJweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBsZHMtaGVhcnQgMS4ycyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxkcy1oZWFydCBkaXY6YWZ0ZXIsXHJcbiAgICAgICAgLmxkcy1oZWFydCBkaXY6YmVmb3JlIHtcclxuICAgICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICB3aWR0aDogMzJweDtcclxuICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxkcy1oZWFydCBkaXY6YmVmb3JlIHtcclxuICAgICAgICAgIGxlZnQ6IC0yNHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlIDAgMCA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sZHMtaGVhcnQgZGl2OmFmdGVyIHtcclxuICAgICAgICAgIHRvcDogLTI0cHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCUgNTAlIDAgMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgQGtleWZyYW1lcyBsZHMtaGVhcnQge1xyXG4gICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgNSUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAzOSUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuODUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgNDUlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDYwJSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU3Bpbm5lcjtcclxuIiwiY29uc3QgSXRlbUhvbGRlciA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInVwcGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9sZGVyXCI+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJkaXNwbGF5XCIgc3JjPXtwcm9wcy5waWN9IC8+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMz57cHJvcHMudGl0bGV9PC9oMz5cclxuICAgICAgICAgIDxoMz57cHJvcHMuYW1vdW50fTwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLnVwcGVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjgsIDIyLCA4NSwgMSk7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaG9sZGVyIHtcclxuICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwcHggYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRpc3BsYXkge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEl0ZW1Ib2xkZXI7XHJcbiIsImNvbnN0IENpcmNsZSA9IChwcm9wcykgPT4ge1xyXG4gIGlmIChwcm9wcy5leGlzdCA9PT0gdHJ1ZSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZVwiPjwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgIC5jaXJjbGUge1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMS41cHggc29saWQgIzFlYTZmZjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzFlYTZmZjtcclxuICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZS1lbXB0eVwiPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5jaXJjbGUtZW1wdHkge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMS41cHggc29saWQgIzFlYTZmZjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaXJjbGU7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFgzTWF0cml4SG9sZGVyIGZyb20gXCIuL1gzTWF0cml4SG9sZGVyXCI7XHJcbmltcG9ydCBYNE1hdHJpeEhvbGRlciBmcm9tIFwiLi9YNE1hdHJpeEhvbGRlclwiO1xyXG5pbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xyXG5pbXBvcnQgeyBBQkksIEFERFJFU1MgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZ2xvYmFsc1wiO1xyXG5pbXBvcnQgeyBsb2FkV2ViMyB9IGZyb20gXCIuLi8uLi91dGlscy91dGlsaXR5XCI7XHJcblxyXG5jbGFzcyBNYXRyaXhTeXN0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGFzeW5jIFVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgYWNjb3VudDogdGhpcy5wcm9wcy5hY2NvdW50IH0pO1xyXG4gICAgYXdhaXQgbG9hZFdlYjMoKTtcclxuICAgIGF3YWl0IHRoaXMubG9hZEJsb2NrY2hhaW5EYXRhKCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBsb2FkQmxvY2tjaGFpbkRhdGEoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB3ZWIzID0gbmV3IFdlYjMoV2ViMy5naXZlblByb3ZpZGVyIHx8IFwiaHR0cDovL2xvY2FsaG9zdDo4NTQ1XCIpO1xyXG4gICAgICBjb25zdCBjb250cmFjdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChBQkksIEFERFJFU1MpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY29udHJhY3QgfSk7XHJcblxyXG4gICAgICAvLyBNYXRyaXggQ2FsbHNcclxuICAgICAgY29uc3QgY29zdHMgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLnJlZ2lzdHJhdGlvbkNvc3QoKS5jYWxsKCk7XHJcbiAgICAgIGNvbnN0IF9jb3N0cyA9IHdlYjMudXRpbHMuZnJvbVdlaShjb3N0cywgXCJldGhlclwiKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvc3Q6IF9jb3N0cyB9KTtcclxuICAgICAgY29uc3QgeDMgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMzsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgICAgLnVzZXJzWDNNYXRyaXgodGhpcy5zdGF0ZS5hY2NvdW50LCBpKVxyXG4gICAgICAgICAgLmNhbGwoKTtcclxuICAgICAgICB4My5wdXNoKHtcclxuICAgICAgICAgIGxldmVsOiBpLFxyXG4gICAgICAgICAgdXNlclgzOiByZXMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZWxlbWVudHMgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGogPSBpICsgMTtcclxuICAgICAgICBjb25zdCBkb3dubGluZXMgPSB4M1tpXS51c2VyWDNbMV0ubGVuZ3RoO1xyXG4gICAgICAgIGVsZW1lbnRzLnB1c2goe1xyXG4gICAgICAgICAgaWQ6IGosXHJcbiAgICAgICAgICBudW1iZXI6IGRvd25saW5lcyxcclxuICAgICAgICAgIGtleTogaixcclxuICAgICAgICAgIGNvc3Q6ICh0aGlzLnN0YXRlLmNvc3QgLyAyKSAqIGosXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgeDNFeGlzdCA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDEzOyBpKyspIHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgICAudXNlcnNBY3RpdmVYM0xldmVscyh0aGlzLnN0YXRlLmFjY291bnQsIGkpXHJcbiAgICAgICAgICAuY2FsbCgpO1xyXG4gICAgICAgIHgzRXhpc3QucHVzaCh7XHJcbiAgICAgICAgICBpZDogaSxcclxuICAgICAgICAgIHVzZXJYM0V4aXN0OiByZXMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgeDNQYXlsb2FkID0gdGhpcy54M0luZm9zKHgzRXhpc3QsIGVsZW1lbnRzKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHgzUGF5bG9hZCB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoZXJyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHgzSW5mb3MoYXJyMSwgYXJyMikge1xyXG4gICAgcmV0dXJuIGFycjEubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgIGlmIChpdGVtLmlkID09PSBhcnIyW2ldLmlkKSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIGFycjJbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBhY2NvdW50OiBcIlwiLFxyXG4gICAgICBwYXJudGVyQ291bnQ6IFwiXCIsXHJcbiAgICAgIGNvc3Q6IFwiXCIsXHJcbiAgICB9O1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxYM01hdHJpeEhvbGRlciBzdHJ1Yz17dGhpcy5zdGF0ZS54M1BheWxvYWR9IC8+XHJcbiAgICAgICAgPFg0TWF0cml4SG9sZGVyIGNvc3Q9e3RoaXMuc3RhdGUuY29zdH0gLz5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWF0cml4U3lzdGVtO1xyXG4iLCJpbXBvcnQgWDNNYXRyaXggZnJvbSBcIi4vWDNtYXRyaXhcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uL1NwaW5uZXIuanN4XCI7XHJcblxyXG5jb25zdCBYM01hdHJpeEhvbGRlciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtyZWxvYWQsIHNldFJlbG9hZF0gPSB1c2VTdGF0ZSgwKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHByb3BzLnN0cnVjICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBzZXRSZWxvYWQoMSk7XHJcbiAgICB9XHJcbiAgfSwgcmVsb2FkKTtcclxuXHJcbiAgaWYgKHByb3BzLnN0cnVjID09PSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBwZXItaG9sZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtcGFydFwiPlxyXG4gICAgICAgICAgPGgxPkZvcnNhZ2UgeDM8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tLXBhcnRcIj5cclxuICAgICAgICAgIDxTcGlubmVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHA+SGFsbG8gaWNoIGJpbiBkZXIgTMO8Y2tlbmbDvGxsZXIgVGV4dCBmw7xyIGRpZSBJY29uZXM8L3A+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLnVwcGVyLWhvbGRlciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudG9wLXBhcnQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyOCwgMjIsIDg1LCAxKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJvdHRvbS1wYXJ0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjgsIDIyLCA4NSwgMSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcclxuICAgICAgICAgICAgZ3JpZC1nYXA6IDMwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cHBlci1ob2xkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLXBhcnRcIj5cclxuICAgICAgICAgICAgPGgxPkZvcnNhZ2UgeDM8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbS1wYXJ0XCI+XHJcbiAgICAgICAgICAgIHtwcm9wcy5zdHJ1Yy5tYXAoKG1hdHJpeCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8WDNNYXRyaXhcclxuICAgICAgICAgICAgICAgIGlkPXttYXRyaXguaWR9XHJcbiAgICAgICAgICAgICAgICBrZXk9e21hdHJpeC5rZXl9XHJcbiAgICAgICAgICAgICAgICBjb3N0PXttYXRyaXguY29zdH1cclxuICAgICAgICAgICAgICAgIGFjdGl2ZT17bWF0cml4Lm51bWJlcn1cclxuICAgICAgICAgICAgICAgIGJvdWdodD17bWF0cml4LnVzZXJYM0V4aXN0fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPHA+SGFsbG8gaWNoIGJpbiBkZXIgTMO8Y2tlbmbDvGxsZXIgVGV4dCBmw7xyIGRpZSBJY29uZXM8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLnVwcGVyLWhvbGRlciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudG9wLXBhcnQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyOCwgMjIsIDg1LCAxKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJvdHRvbS1wYXJ0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjgsIDIyLCA4NSwgMSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcclxuICAgICAgICAgICAgZ3JpZC1nYXA6IDMwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBYM01hdHJpeEhvbGRlcjtcclxuIiwiaW1wb3J0IENpcmNsZSBmcm9tIFwiLi9DaXJjbGVcIjtcclxuXHJcbmNvbnN0IFgzbWF0cml4ID0gKHByb3BzKSA9PiB7XHJcbiAgaWYgKHByb3BzLmJvdWdodCkge1xyXG4gICAgaWYgKHByb3BzLmFjdGl2ZSA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbGRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hdHJpeC1oZWFkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbFwiPntwcm9wcy5pZH08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlkXCI+e3Byb3BzLmNvc3R9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvd25saW5lc1wiPlxyXG4gICAgICAgICAgICAgIDxDaXJjbGUgZXhpc3Q9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICAgIDxDaXJjbGUgZXhpc3Q9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICAgIDxDaXJjbGUgZXhpc3Q9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAuaG9sZGVyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1hdHJpeC1oZWFkIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMzEsIDE2OSwgMjU1KTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgICAyNzBkZWcsXHJcbiAgICAgICAgICAgICAgICByZ2JhKDMxLCAxNjksIDI1NSwgMSkgMzElLFxyXG4gICAgICAgICAgICAgICAgcmdiYSgyMSwgMTE3LCAyNTEsIDEpIDc3JVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggMTUwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICBmb250LXN0eWxlOiBib2xkO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sZXZlbCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzMzOGVmZjtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaWQge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaXRlbXMge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDMwcHggMzBweDtcclxuICAgICAgICAgICAgICBncmlkLWdhcDogNDNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGluZXMge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcclxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZG93bmxpbmVzIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAzMHB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDQzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAocHJvcHMuYWN0aXZlID09PSAxKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9sZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF0cml4LWhlYWRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsXCI+e3Byb3BzLmlkfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWRcIj57cHJvcHMuY29zdH08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG93bmxpbmVzXCI+XHJcbiAgICAgICAgICAgICAgPENpcmNsZSBleGlzdD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICA8Q2lyY2xlIGV4aXN0PXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgICA8Q2lyY2xlIGV4aXN0PXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmhvbGRlciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tYXRyaXgtaGVhZCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDMxLCAxNjksIDI1NSk7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgICAgMjcwZGVnLFxyXG4gICAgICAgICAgICAgICAgcmdiYSgzMSwgMTY5LCAyNTUsIDEpIDMxJSxcclxuICAgICAgICAgICAgICAgIHJnYmEoMjEsIDExNywgMjUxLCAxKSA3NyVcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDE1MHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogYm9sZDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGV2ZWwge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzhlZmY7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmlkIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLml0ZW1zIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAzMHB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDQzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxpbmVzIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRvd25saW5lcyB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMzBweCAzMHB4O1xyXG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiA0M3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKHByb3BzLmFjdGl2ZSA9PT0gMikge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbGRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hdHJpeC1oZWFkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbFwiPntwcm9wcy5pZH08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlkXCI+e3Byb3BzLmNvc3R9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvd25saW5lc1wiPlxyXG4gICAgICAgICAgICAgIDxDaXJjbGUgZXhpc3Q9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgPENpcmNsZSBleGlzdD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICA8Q2lyY2xlIGV4aXN0PXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmhvbGRlciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tYXRyaXgtaGVhZCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDMxLCAxNjksIDI1NSk7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgICAgMjcwZGVnLFxyXG4gICAgICAgICAgICAgICAgcmdiYSgzMSwgMTY5LCAyNTUsIDEpIDMxJSxcclxuICAgICAgICAgICAgICAgIHJnYmEoMjEsIDExNywgMjUxLCAxKSA3NyVcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDE1MHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogYm9sZDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGV2ZWwge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzhlZmY7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmlkIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLml0ZW1zIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAzMHB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDQzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxpbmVzIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRvd25saW5lcyB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMzBweCAzMHB4O1xyXG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiA0M3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbGRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hdHJpeC1oZWFkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbFwiPntwcm9wcy5pZH08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlkXCI+e3Byb3BzLmNvc3R9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvd25saW5lc1wiPlxyXG4gICAgICAgICAgICAgIDxDaXJjbGUgZXhpc3Q9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgPENpcmNsZSBleGlzdD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICA8Q2lyY2xlIGV4aXN0PXt0cnVlfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAuaG9sZGVyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1hdHJpeC1oZWFkIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMzEsIDE2OSwgMjU1KTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgICAyNzBkZWcsXHJcbiAgICAgICAgICAgICAgICByZ2JhKDMxLCAxNjksIDI1NSwgMSkgMzElLFxyXG4gICAgICAgICAgICAgICAgcmdiYSgyMSwgMTE3LCAyNTEsIDEpIDc3JVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggMTUwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICBmb250LXN0eWxlOiBib2xkO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sZXZlbCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzMzOGVmZjtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaWQge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaXRlbXMge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDMwcHggMzBweDtcclxuICAgICAgICAgICAgICBncmlkLWdhcDogNDNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGluZXMge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcclxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZG93bmxpbmVzIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAzMHB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDQzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbGRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXRyaXgtaGVhZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsXCI+e3Byb3BzLmlkfTwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV5LWxldmVsXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQocHJvcHMuY29zdCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEJ1eSBmb3Ige3Byb3BzLmNvc3R9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVzXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG93bmxpbmVzXCI+XHJcbiAgICAgICAgICAgIDxDaXJjbGUgZXhpc3Q9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICA8Q2lyY2xlIGV4aXN0PXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgPENpcmNsZSBleGlzdD17ZmFsc2V9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuYnV5LWxldmVsIHtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhvbGRlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWF0cml4LWhlYWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2LCAxLCA2MiwgMSk7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCAxNTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubGV2ZWwge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzM4ZWZmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaWQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXRlbXMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMzBweCAzMHB4O1xyXG4gICAgICAgICAgICBncmlkLWdhcDogNDNweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5saW5lcyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kb3dubGluZXMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMzBweCAzMHB4O1xyXG4gICAgICAgICAgICBncmlkLWdhcDogNDNweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBYM21hdHJpeDtcclxuIiwiaW1wb3J0IFg0TWF0cml4IGZyb20gXCIuL1g0bWF0cml4XCI7XHJcblxyXG5jb25zdCBYNE1hdHJpeEhvbGRlciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGVsZW1lbnRzID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMzsgaSsrKSB7XHJcbiAgICBlbGVtZW50cy5wdXNoKHtcclxuICAgICAgaWQ6IGksXHJcbiAgICAgIGtleTogaSxcclxuICAgICAgY29zdDogKHByb3BzLmNvc3QgLyAyKSAqIGksXHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBwZXItaG9sZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtcGFydFwiPlxyXG4gICAgICAgICAgPGgxPkZvcnNhZ2UgeDQ8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tLXBhcnRcIj5cclxuICAgICAgICAgIHtlbGVtZW50cy5tYXAoKG1hdHJpeCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPFg0TWF0cml4IGlkPXttYXRyaXguaWR9IGtleT17bWF0cml4LmtleX0gY29zdD17bWF0cml4LmNvc3R9IC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cD5IYWxsbyBpY2ggYmluIGRlciBMw7xja2VuZsO8bGxlci4gVGV4dCBmw7xyIGRpZSBJY29uZXM8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLnVwcGVyLWhvbGRlciB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRvcC1wYXJ0IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyOCwgMjIsIDg1LCAxKTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ib3R0b20tcGFydCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjgsIDIyLCA4NSwgMSk7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgMjBweCAyMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xyXG4gICAgICAgICAgZ3JpZC1nYXA6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBYNE1hdHJpeEhvbGRlcjtcclxuIiwiY29uc3QgWDRtYXRyaXggPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJob2xkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hdHJpeC1oZWFkXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsXCI+e3Byb3BzLmlkfTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpZFwiPntwcm9wcy5jb3N0fTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvd25saW5lc1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZVwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5ob2xkZXIge1xyXG4gICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYXRyaXgtaGVhZCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMzEsIDE2OSwgMjU1KTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgMjcwZGVnLFxyXG4gICAgICAgICAgICByZ2JhKDMxLCAxNjksIDI1NSwgMSkgMzElLFxyXG4gICAgICAgICAgICByZ2JhKDIxLCAxMTcsIDI1MSwgMSkgNzclXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCAxNTBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICBmb250LXN0eWxlOiBib2xkO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sZXZlbCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzM4ZWZmO1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmlkIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLml0ZW1zIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMzBweCAzMHB4O1xyXG4gICAgICAgICAgZ3JpZC1nYXA6IDQzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5saW5lcyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kb3dubGluZXMge1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAzMHB4IDMwcHg7XHJcbiAgICAgICAgICBncmlkLWdhcDogNDNweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNpcmNsZSB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIGJvcmRlcjogMS41cHggc29saWQgIzFlYTZmZjtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMxZWE2ZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgWDRtYXRyaXg7XHJcblxyXG4vLyAjZmQ4NTc2XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERpdmlkZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlclwiPjwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmRpdmlkZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogZ3JleTtcclxuICAgICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgU2lkZWJhckNvbnRlbnQgZnJvbSBcIi4vU2lkZWJhckNvbnRlbnRcIjtcclxuaW1wb3J0IERpdmlkZXIgZnJvbSBcIi4vRGl2aWRlclwiO1xyXG5pbXBvcnQgVXNlckNvbnRlbnQgZnJvbSBcIi4vVXNlckNvbnRlbnRcIjtcclxuaW1wb3J0IHsgQkFTRV9VUkwgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZ2xvYmFsc1wiO1xyXG5cclxuY29uc3QgU2lkZWJhciA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1nL3VzZXJfc2ltcGxlLmpwZ1wiIGhlaWdodD1cIjQwcHhcIiAvPiB7XCJcIn0ge1wiXCJ9XHJcbiAgICAgICAgICAgIElEOiB7cHJvcHMudXNlcklkc31cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1nL3BhcnRuZXJzLmpwZ1wiIHdpZHRoPVwiNjBweFwiIC8+XHJcbiAgICAgICAgICB7cHJvcHMucGFydG5lcnNDb3VudH1cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltZy9jdWJlLmpwZ1wiIHdpZHRoPVwiMTAwJVwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImVhcm5pbmdzXCI+XHJcbiAgICAgICAgPGI+JDQsMDAwLDAwMDwvYj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8U2lkZWJhckNvbnRlbnRcclxuICAgICAgICB0aXRsZT1cIkJhbGFuY2VcIlxyXG4gICAgICAgIGJhbGFuY2VfdXNkPXtwcm9wcy5iYWxhbmNlICogMiArIFwiICRcIn1cclxuICAgICAgICBiYWxhbmNlX2V0aD17cHJvcHMuYmFsYW5jZSArIFwiIEVUSFwifVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9uZU1pbGxpb25cIj48L2Rpdj5cclxuICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgPFNpZGViYXJDb250ZW50XHJcbiAgICAgICAgdGl0bGU9XCJGb3JzYWdlXCJcclxuICAgICAgICBtYXRyaXg9XCJ4M1wiXHJcbiAgICAgICAgYmFsYW5jZV91c2Q9e3Byb3BzLmJhbGFuY2UgKiAyICsgXCIgJFwifVxyXG4gICAgICAgIGJhbGFuY2VfZXRoPXtwcm9wcy5iYWxhbmNlICsgXCIgRVRIXCJ9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxTaWRlYmFyQ29udGVudFxyXG4gICAgICAgIHRpdGxlPVwiRm9yc2FnZVwiXHJcbiAgICAgICAgbWF0cml4PVwieDRcIlxyXG4gICAgICAgIGJhbGFuY2VfdXNkPXtwcm9wcy5iYWxhbmNlICogMiArIFwiICRcIn1cclxuICAgICAgICBiYWxhbmNlX2V0aD17cHJvcHMuYmFsYW5jZSArIFwiIEVUSFwifVxyXG4gICAgICAvPlxyXG4gICAgICA8RGl2aWRlciAvPlxyXG4gICAgICA8VXNlckNvbnRlbnRcclxuICAgICAgICB0aXRsZT1cIkFmZmlsaWF0ZSBMaW5rXCJcclxuICAgICAgICBwbGFjZWhvbGRlcj17QkFTRV9VUkwgKyBcInJlZi9cIiArIHByb3BzLnVzZXJJZHN9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxVc2VyQ29udGVudCB0aXRsZT1cIllvdXIgRXRoZXJldW0gV2FsbGV0XCIgcGxhY2Vob2xkZXI9e3Byb3BzLmFjY291bnR9IC8+XHJcbiAgICAgIDxVc2VyQ29udGVudCB0aXRsZT1cIlNtYXJ0IENvbnRyYWN0IEFkZHJlc3NcIiBwbGFjZWhvbGRlcj17cHJvcHMuYWRkcmVzc30gLz5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5zaWRlYmFyIHtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjgsIDIyLCA4NSwgMSk7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmVhcm5pbmdzIHtcclxuICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyNTIsIDEzMiwgMTE4KTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgMjIzZGVnLFxyXG4gICAgICAgICAgICByZ2JhKDI1MiwgMTMyLCAxMTgsIDEpIDIyJSxcclxuICAgICAgICAgICAgcmdiYSgyNTIsIDk0LCAxMjUsIDEpIDczJVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvZmlsZSB7XHJcbiAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNTBweCBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvZmlsZSBwIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xyXG4iLCJjb25zdCBTaWRlYmFyQ29udGVudCA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtZ29hbHNcIj5cclxuICAgICAgICA8aDQ+XHJcbiAgICAgICAgICB7cHJvcHMudGl0bGV9IHtwcm9wcy5tYXRyaXh9XHJcbiAgICAgICAgPC9oND5cclxuXHJcbiAgICAgICAgPHA+e3Byb3BzLmJhbGFuY2VfdXNkfTwvcD5cclxuXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibGlnaHQtYmx1ZVwiPntwcm9wcy5iYWxhbmNlX2V0aH08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250ZW50LWdvYWxzIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMxMDAxM2U7XHJcbiAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxpZ2h0LWJsdWUge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTI2MmZmO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDIwcHggMjBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyQ29udGVudDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFVzZXJDb250ZW50ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2NvcHlTdWNjZXNzLCBzZXRDb3B5U3VjY2Vzc10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZihudWxsKTtcclxuICBmdW5jdGlvbiBjb3B5VG9DbGlwYm9hcmQoZSkge1xyXG4gICAgaW5wdXRSZWYuY3VycmVudC5zZWxlY3QoKTtcclxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcclxuICAgIGUudGFyZ2V0LmZvY3VzKCk7XHJcbiAgICBzZXRDb3B5U3VjY2VzcyhcIkNvcGllZCFcIik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LXVzZXJcIj5cclxuICAgICAgICA8aDQ+e3Byb3BzLnRpdGxlfTwvaDQ+XHJcbiAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICA8aW5wdXQgcmVmPXtpbnB1dFJlZn0gdmFsdWU9e3Byb3BzLnBsYWNlaG9sZGVyfSAvPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAvKiBMb2dpY2FsIHNob3J0Y3V0IGZvciBvbmx5IGRpc3BsYXlpbmcgdGhlIFxyXG4gICAgICAgICAgYnV0dG9uIGlmIHRoZSBjb3B5IGNvbW1hbmQgZXhpc3RzICovXHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeUNvbW1hbmRTdXBwb3J0ZWQoXCJjb3B5XCIpICYmIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNvcHlcIiBvbkNsaWNrPXtjb3B5VG9DbGlwYm9hcmR9PlxyXG4gICAgICAgICAgICAgICAgQ29weVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZXRoZXJzY2FuXCI+VG8gRXRoZXJzY2FuPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Y2Nlc3NcIj57Y29weVN1Y2Nlc3N9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRlbnQtdXNlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2LCAxLCA2MiwgMSk7XHJcbiAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjcxOTUwO1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3VjY2VzcyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMjM3LCA0Nyk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgIDMwNmRlZyxcclxuICAgICAgICAgICAgcmdiYSgwLCAyMzcsIDQ3LCAxKSAyOSUsXHJcbiAgICAgICAgICAgIHJnYmEoMCwgMTc5LCAzNSwgMSkgNjQlLFxyXG4gICAgICAgICAgICByZ2JhKDAsIDE3OSwgMzUsIDEpIDgzJVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgICAgICAgIGZvbnQtc3R5bGU6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICBtYXJnaW46IDEwcHggMTVweDtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb3B5IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigzMSwgMTY4LCAyNTUpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAyMjNkZWcsXHJcbiAgICAgICAgICAgIHJnYmEoMzEsIDE2OCwgMjU1LCAxKSAyMiUsXHJcbiAgICAgICAgICAgIHJnYmEoMTksIDEwOCwgMjU1LCAxKSA0NyVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ldGhlcnNjYW4ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzI3MTk1MDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyQ29udGVudDtcclxuXHJcbntcclxuICAvKiA8ZGl2PlxyXG57XHJcbiAgZG9jdW1lbnQucXVlcnlDb21tYW5kU3VwcG9ydGVkKFwiY29weVwiKSAmJiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NvcHlUb0NsaXBib2FyZH0+Q29weTwvYnV0dG9uPlxyXG4gICAgICB7Y29weVN1Y2Nlc3N9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuPGZvcm0+XHJcbiAgPHRleHRhcmVhIHJlZj17aW5wdXRSZWZ9IHZhbHVlPVwiU29tZSB0ZXh0IHRvIGNvcHlcIiAvPlxyXG48L2Zvcm0+XHJcbjwvZGl2PiAqL1xyXG59XHJcblxyXG4vLyB0eXBlPVwidGV4dFwiXHJcbi8vIGRpc2FibGVkPVwiZGlzYWJsZWRcIlxyXG4vLyBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2Vob2xkZXJ9XHJcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICBOZXh0Um91dGVyLFxuICBpc0xvY2FsVVJMLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IGV4ZWNPbmNlIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyBhZGRCYXNlUGF0aCwgcmVzb2x2ZUhyZWYgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZilcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKSA6IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcCAmJlxuICAgICAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiZcbiAgICAgIGNoaWxkRWxtICYmXG4gICAgICBjaGlsZEVsbS50YWdOYW1lICYmXG4gICAgICBpc0xvY2FsVVJMKGhyZWYpXG4gICAgKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChhcylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBjb25zdCB3YXJuID0gZXhlY09uY2UoY29uc29sZS5lcnJvcilcblxuICAvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbiAgY29uc3QgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpXG4gIGNvbnN0IGV4YWN0ID0gcmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpXG4gIC8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbiAgTGluay5wcm9wVHlwZXMgPSBleGFjdCh7XG4gICAgaHJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsXG4gICAgYXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBwcmVmZXRjaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVwbGFjZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hhbGxvdzogUHJvcFR5cGVzLmJvb2wsXG4gICAgcGFzc0hyZWY6IFByb3BUeXBlcy5ib29sLFxuICAgIHNjcm9sbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAocHJvcHM6IGFueSwgcHJvcE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3BzW3Byb3BOYW1lXVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIGBXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9LFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oe30sIF9yb3V0ZXJbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG4gIGdldExvY2F0aW9uT3JpZ2luLFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7XG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGJhc2VQYXRoICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goYmFzZVBhdGgpXG4gICAgICA6IGJhc2VQYXRoICsgcGF0aFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihjdXJyZW50UGF0aDogc3RyaW5nLCBocmVmOiBVcmwpOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgcmV0dXJuIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgOiBmaW5hbFVybC5ocmVmXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gdXJsQXNTdHJpbmdcbiAgfVxufVxuXG5jb25zdCBQQUdFX0xPQURfRVJST1IgPSBTeW1ib2woJ1BBR0VfTE9BRF9FUlJPUicpXG5leHBvcnQgZnVuY3Rpb24gbWFya0xvYWRpbmdFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgUEFHRV9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmZ1bmN0aW9uIHRyeVBhcnNlUmVsYXRpdmVVcmwoXG4gIHVybDogc3RyaW5nXG4pOiBudWxsIHwgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4ge1xuICB0cnkge1xuICAgIHJldHVybiBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgICAgKVxuICAgICAgfSwgMClcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG50eXBlIENvbXBvbmVudFJlcyA9IHsgcGFnZTogQ29tcG9uZW50VHlwZTsgbW9kOiBhbnkgfVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxudHlwZSBSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IGFueVxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBSb3V0ZUluZm8sIEFwcD86IENvbXBvbmVudFR5cGUpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQ29tcG9uZW50VHlwZVxuICAgICAgd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICB1cGRhdGUocm91dGU6IHN0cmluZywgbW9kOiBhbnkpIHtcbiAgICBjb25zdCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUgPSBtb2QuZGVmYXVsdCB8fCBtb2RcbiAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuICAgIGlmICghZGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdXBkYXRlIHVuYXZhaWxhYmxlIHJvdXRlOiAke3JvdXRlfWApXG4gICAgfVxuXG4gICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIF9fTl9TU0c6IG1vZC5fX05fU1NHLFxuICAgICAgX19OX1NTUDogbW9kLl9fTl9TU1AsXG4gICAgfSlcbiAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gbmV3RGF0YVxuXG4gICAgLy8gcGFnZXMvX2FwcC5qcyB1cGRhdGVkXG4gICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocm91dGUgPT09IHRoaXMucm91dGUpIHtcbiAgICAgIHRoaXMubm90aWZ5KG5ld0RhdGEpXG4gICAgfVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgY29uc3QgY2xlYW5lZEFzID0gaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXNcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0IHBhcnNlZCA9IHRyeVBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgaWYgKCFwYXJzZWQpIHJldHVybiBmYWxzZVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcyB9ID0gcGFyc2VkXG4gICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcylcblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwoY2xlYW5lZEFzKVxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2BcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKVxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBSb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyLCBlcnJvcjogZXJyIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKFxuICAgICAgICAgICAgKHJlcykgPT5cbiAgICAgICAgICAgICAgKHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgICAgIH0gYXMgUm91dGVJbmZvKVxuICAgICAgICAgIClcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIF9fTl9TU0dcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8Um91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgcGFyc2VkID0gdHJ5UGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBpZiAoIXBhcnNlZCkgcmV0dXJuXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgYXNQYXRoKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Q29tcG9uZW50UmVzPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBpdGVtKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHZhbHVlKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnLi4vLi4vbGliL2xvYWQtZW52LWNvbmZpZydcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBhbnlcbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBpbnRlcmZhY2UtbmFtZVxuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZmlsZXM6IHN0cmluZ1tdXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCI7XHJcbmltcG9ydCB7IEFCSSwgQUREUkVTUyB9IGZyb20gXCIuLi91dGlscy9nbG9iYWxzXCI7XHJcbmltcG9ydCB7IGxvYWRXZWIzIH0gZnJvbSBcIi4uL3V0aWxzL3V0aWxpdHlcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvU3Bpbm5lclwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBJbmZvSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0luZm9IZWFkZXJcIjtcclxuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2lkZWJhci9TaWRlYmFyXCI7XHJcbmltcG9ydCBNYXRyaXhTeXN0ZW0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbWF0cml4L01hdHJpeFN5c3RlbVwiO1xyXG5cclxuLy8gQ29udGV4dCBBUElcclxuaW1wb3J0IEFjY291bnRDb250ZXh0IGZyb20gXCIuLi9jb21wb25lbnRzL0FjY291bnRDb250ZXh0XCI7XHJcblxyXG5jbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IEFjY291bnRDb250ZXh0O1xyXG5cclxuICBhc3luYyBVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjY291bnQ6IHRoaXMuY29udGV4dC5hY2NvdW50IH0pO1xyXG4gICAgYXdhaXQgbG9hZFdlYjMoKTtcclxuICAgIGF3YWl0IHRoaXMubG9hZEJsb2NrY2hhaW5EYXRhKCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBsb2FkQmxvY2tjaGFpbkRhdGEoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB3ZWIzID0gbmV3IFdlYjMoV2ViMy5naXZlblByb3ZpZGVyIHx8IFwiaHR0cDovL2xvY2FsaG9zdDo4NTQ1XCIpO1xyXG4gICAgICBjb25zdCBjb250cmFjdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChBQkksIEFERFJFU1MpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY29udHJhY3QgfSk7XHJcbiAgICAgIGNvbnN0IGFkZHJlc3MgPSBBRERSRVNTO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYWRkcmVzcyB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHVzZXJJZCA9IGF3YWl0IHRoaXMuc3RhdGUuY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgIC51c2Vycyh0aGlzLnN0YXRlLmFjY291bnQpXHJcbiAgICAgICAgLmNhbGwoKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgdXNlcklkczogdXNlcklkLmlkLFxyXG4gICAgICAgIHBhcm50ZXJDb3VudDogdXNlcklkLnBhcnRuZXJzQ291bnQsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB1c2VyQ291bnQgPSBhd2FpdCB0aGlzLnN0YXRlLmNvbnRyYWN0Lm1ldGhvZHMubGFzdFVzZXJJZCgpLmNhbGwoKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRvdGFsVXNlcnM6IHVzZXJDb3VudCB9KTtcclxuICAgICAgY29uc3QgYmFsYW5jZSA9IGF3YWl0IHRoaXMuc3RhdGUuY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgIC5iYWxhbmNlcyh0aGlzLnN0YXRlLmFjY291bnQpXHJcbiAgICAgICAgLmNhbGwoKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJhbGFuY2UgfSk7XHJcblxyXG4gICAgICAvLyBNYXRyaXggQ2FsbHNcclxuICAgICAgY29uc3QgY29zdHMgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLnJlZ2lzdHJhdGlvbkNvc3QoKS5jYWxsKCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3N0OiBjb3N0cyB9KTtcclxuXHJcbiAgICAgIC8vIEVycm9yIENhdGNoIC0+IEZldGNoIHRoZSBuZXcgRGF0YSBkaXJlY3RseSBmcm9tIHdlYjMgcHJvdmlkZXIgYWZ0ZXIgcmVsb2FkXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc3Qgd2ViMyA9IG5ldyBXZWIzKFdlYjMuZ2l2ZW5Qcm92aWRlciB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6ODU0NVwiKTtcclxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYWNjb3VudDogYWNjb3VudHNbMF0gfSk7XHJcbiAgICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KEFCSSwgQUREUkVTUyk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb250cmFjdCB9KTtcclxuICAgICAgY29uc3QgYWRkcmVzcyA9IEFERFJFU1M7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhZGRyZXNzIH0pO1xyXG4gICAgICBjb25zdCBpc0V4aXN0cyA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAuaXNVc2VyRXhpc3RzKHRoaXMuc3RhdGUuYWNjb3VudClcclxuICAgICAgICAuY2FsbCgpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNFeGlzdDogaXNFeGlzdHMgfSk7XHJcbiAgICAgIC8vIEJ1bmRsZWQgUHJvbWlzZXNcclxuICAgICAgY29uc3QgdXNlcklkID0gYXdhaXQgdGhpcy5zdGF0ZS5jb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgLnVzZXJzKHRoaXMuc3RhdGUuYWNjb3VudClcclxuICAgICAgICAuY2FsbCgpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICB1c2VySWRzOiB1c2VySWQuaWQsXHJcbiAgICAgICAgcGFybnRlckNvdW50OiB1c2VySWQucGFydG5lcnNDb3VudCxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHVzZXJDb3VudCA9IGF3YWl0IHRoaXMuc3RhdGUuY29udHJhY3QubWV0aG9kcy5sYXN0VXNlcklkKCkuY2FsbCgpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgdG90YWxVc2VyczogdXNlckNvdW50IH0pO1xyXG4gICAgICBjb25zdCBiYWxhbmNlID0gYXdhaXQgdGhpcy5zdGF0ZS5jb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgLmJhbGFuY2VzKHRoaXMuc3RhdGUuYWNjb3VudClcclxuICAgICAgICAuY2FsbCgpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYmFsYW5jZSB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBhY2NvdW50OiBcIlwiLFxyXG4gICAgICBpc0V4aXN0OiB0cnVlLFxyXG4gICAgICB1c2VySWRzOiBcIlwiLFxyXG4gICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICB0b3RhbFVzZXJzOiBcIlwiLFxyXG4gICAgICBwYXJudGVyQ291bnQ6IFwiXCIsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUubG9hZGluZyA9PT0gdHJ1ZSkge1xyXG4gICAgICByZXR1cm4gPFNwaW5uZXIgLz47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5pc0V4aXN0ID09PSB0cnVlKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaGJvYXJkXCI+XHJcbiAgICAgICAgICAgICAgPEluZm9IZWFkZXIgdG90YWxVc2Vycz17dGhpcy5zdGF0ZS50b3RhbFVzZXJzfSAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgPFNpZGViYXJcclxuICAgICAgICAgICAgICAgICAgICB1c2VySWRzPXt0aGlzLnN0YXRlLnVzZXJJZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgcGFydG5lcnNDb3VudD17dGhpcy5zdGF0ZS5wYXJudGVyQ291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5zdGF0ZS5hY2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M9e3RoaXMuc3RhdGUuYWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICBiYWxhbmNlPXt0aGlzLnN0YXRlLmJhbGFuY2V9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlnLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8TWF0cml4U3lzdGVtIGFjY291bnQ9e3RoaXMuc3RhdGUuYWNjb3VudH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuZGFzaGJvYXJkIHtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxNiwgMSwgNjIsIDEpO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTQyMHB4O1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0bztcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnBhZ2luYXRpb24ge1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAydmg7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAlIDY1JTtcclxuICAgICAgICAgICAgICAgICAgZ3JpZC1nYXA6IDUlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAucGFnaW5hdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1nYXA6IDUlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcclxuIiwiZXhwb3J0IGNvbnN0IEFCSSA9IFtcclxuICB7XHJcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXHJcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxyXG4gICAgcGF5YWJsZTogZmFsc2UsXHJcbiAgICBvdXRwdXRzOiBbeyB0eXBlOiBcImJvb2xcIiwgbmFtZTogXCJcIiwgaW50ZXJuYWxUeXBlOiBcImJvb2xcIiB9XSxcclxuICAgIG5hbWU6IFwidXNlcnNBY3RpdmVYM0xldmVsc1wiLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgIHsgdHlwZTogXCJhZGRyZXNzXCIsIG5hbWU6IFwidXNlckFkZHJlc3NcIiwgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIiB9LFxyXG4gICAgICB7IHR5cGU6IFwidWludDhcIiwgbmFtZTogXCJsZXZlbFwiLCBpbnRlcm5hbFR5cGU6IFwidWludDhcIiB9LFxyXG4gICAgXSxcclxuICAgIGNvbnN0YW50OiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZTogXCJmdW5jdGlvblwiLFxyXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcclxuICAgIHBheWFibGU6IGZhbHNlLFxyXG4gICAgb3V0cHV0czogW3sgdHlwZTogXCJ1aW50MjU2XCIsIG5hbWU6IFwiXCIsIGludGVybmFsVHlwZTogXCJ1aW50MjU2XCIgfV0sXHJcbiAgICBuYW1lOiBcImJhbGFuY2VzXCIsXHJcbiAgICBpbnB1dHM6IFt7IHR5cGU6IFwiYWRkcmVzc1wiLCBuYW1lOiBcIlwiLCBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiIH1dLFxyXG4gICAgY29uc3RhbnQ6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXHJcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxyXG4gICAgcGF5YWJsZTogZmFsc2UsXHJcbiAgICBvdXRwdXRzOiBbeyB0eXBlOiBcImFkZHJlc3NcIiwgbmFtZTogXCJcIiwgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIiB9XSxcclxuICAgIG5hbWU6IFwiaWRUb0FkZHJlc3NcIixcclxuICAgIGlucHV0czogW3sgdHlwZTogXCJ1aW50MjU2XCIsIG5hbWU6IFwiXCIsIGludGVybmFsVHlwZTogXCJ1aW50MjU2XCIgfV0sXHJcbiAgICBjb25zdGFudDogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcclxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXHJcbiAgICBwYXlhYmxlOiBmYWxzZSxcclxuICAgIG91dHB1dHM6IFt7IHR5cGU6IFwidWludDI1NlwiLCBuYW1lOiBcIlwiLCBpbnRlcm5hbFR5cGU6IFwidWludDI1NlwiIH1dLFxyXG4gICAgbmFtZTogXCJsYXN0VXNlcklkXCIsXHJcbiAgICBpbnB1dHM6IFtdLFxyXG4gICAgY29uc3RhbnQ6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXHJcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxyXG4gICAgcGF5YWJsZTogZmFsc2UsXHJcbiAgICBvdXRwdXRzOiBbeyB0eXBlOiBcImFkZHJlc3NcIiwgbmFtZTogXCJcIiwgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIiB9XSxcclxuICAgIG5hbWU6IFwidXNlcklkc1wiLFxyXG4gICAgaW5wdXRzOiBbeyB0eXBlOiBcInVpbnQyNTZcIiwgbmFtZTogXCJcIiwgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZcIiB9XSxcclxuICAgIGNvbnN0YW50OiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZTogXCJmdW5jdGlvblwiLFxyXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcclxuICAgIHBheWFibGU6IGZhbHNlLFxyXG4gICAgb3V0cHV0czogW3sgdHlwZTogXCJib29sXCIsIG5hbWU6IFwiXCIsIGludGVybmFsVHlwZTogXCJib29sXCIgfV0sXHJcbiAgICBuYW1lOiBcImlzVXNlckV4aXN0c1wiLFxyXG4gICAgaW5wdXRzOiBbeyB0eXBlOiBcImFkZHJlc3NcIiwgbmFtZTogXCJ1c2VyXCIsIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIgfV0sXHJcbiAgICBjb25zdGFudDogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcclxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJwYXlhYmxlXCIsXHJcbiAgICBwYXlhYmxlOiB0cnVlLFxyXG4gICAgb3V0cHV0czogW10sXHJcbiAgICBuYW1lOiBcInJlZ2lzdHJhdGlvbkV4dFwiLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgIHsgdHlwZTogXCJhZGRyZXNzXCIsIG5hbWU6IFwicmVmZXJyZXJBZGRyZXNzXCIsIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIgfSxcclxuICAgIF0sXHJcbiAgICBjb25zdGFudDogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXHJcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxyXG4gICAgcGF5YWJsZTogZmFsc2UsXHJcbiAgICBvdXRwdXRzOiBbXHJcbiAgICAgIHsgdHlwZTogXCJhZGRyZXNzXCIsIG5hbWU6IFwiXCIsIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIgfSxcclxuICAgICAgeyB0eXBlOiBcImFkZHJlc3NbXVwiLCBuYW1lOiBcIlwiLCBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1tdXCIgfSxcclxuICAgICAgeyB0eXBlOiBcImJvb2xcIiwgbmFtZTogXCJcIiwgaW50ZXJuYWxUeXBlOiBcImJvb2xcIiB9LFxyXG4gICAgXSxcclxuICAgIG5hbWU6IFwidXNlcnNYM01hdHJpeFwiLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgIHsgdHlwZTogXCJhZGRyZXNzXCIsIG5hbWU6IFwidXNlckFkZHJlc3NcIiwgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIiB9LFxyXG4gICAgICB7IHR5cGU6IFwidWludDhcIiwgbmFtZTogXCJsZXZlbFwiLCBpbnRlcm5hbFR5cGU6IFwidWludDhcIiB9LFxyXG4gICAgXSxcclxuICAgIGNvbnN0YW50OiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZTogXCJmdW5jdGlvblwiLFxyXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcclxuICAgIHBheWFibGU6IGZhbHNlLFxyXG4gICAgb3V0cHV0czogW3sgdHlwZTogXCJhZGRyZXNzXCIsIG5hbWU6IFwiXCIsIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIgfV0sXHJcbiAgICBuYW1lOiBcIm93bmVyXCIsXHJcbiAgICBpbnB1dHM6IFtdLFxyXG4gICAgY29uc3RhbnQ6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXHJcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxyXG4gICAgcGF5YWJsZTogZmFsc2UsXHJcbiAgICBvdXRwdXRzOiBbXHJcbiAgICAgIHsgdHlwZTogXCJhZGRyZXNzXCIsIG5hbWU6IFwiXCIsIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIgfSxcclxuICAgICAgeyB0eXBlOiBcImFkZHJlc3NbXVwiLCBuYW1lOiBcIlwiLCBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1tdXCIgfSxcclxuICAgICAgeyB0eXBlOiBcImFkZHJlc3NbXVwiLCBuYW1lOiBcIlwiLCBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1tdXCIgfSxcclxuICAgICAgeyB0eXBlOiBcImJvb2xcIiwgbmFtZTogXCJcIiwgaW50ZXJuYWxUeXBlOiBcImJvb2xcIiB9LFxyXG4gICAgICB7IHR5cGU6IFwiYWRkcmVzc1wiLCBuYW1lOiBcIlwiLCBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiIH0sXHJcbiAgICBdLFxyXG4gICAgbmFtZTogXCJ1c2Vyc1g2TWF0cml4XCIsXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgeyB0eXBlOiBcImFkZHJlc3NcIiwgbmFtZTogXCJ1c2VyQWRkcmVzc1wiLCBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiIH0sXHJcbiAgICAgIHsgdHlwZTogXCJ1aW50OFwiLCBuYW1lOiBcImxldmVsXCIsIGludGVybmFsVHlwZTogXCJ1aW50OFwiIH0sXHJcbiAgICBdLFxyXG4gICAgY29uc3RhbnQ6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXHJcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxyXG4gICAgcGF5YWJsZTogZmFsc2UsXHJcbiAgICBvdXRwdXRzOiBbXHJcbiAgICAgIHsgdHlwZTogXCJ1aW50MjU2XCIsIG5hbWU6IFwiaWRcIiwgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZcIiB9LFxyXG4gICAgICB7IHR5cGU6IFwiYWRkcmVzc1wiLCBuYW1lOiBcInJlZmVycmVyXCIsIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIgfSxcclxuICAgICAgeyB0eXBlOiBcInVpbnQyNTZcIiwgbmFtZTogXCJwYXJ0bmVyc0NvdW50XCIsIGludGVybmFsVHlwZTogXCJ1aW50MjU2XCIgfSxcclxuICAgIF0sXHJcbiAgICBuYW1lOiBcInVzZXJzXCIsXHJcbiAgICBpbnB1dHM6IFt7IHR5cGU6IFwiYWRkcmVzc1wiLCBuYW1lOiBcIlwiLCBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiIH1dLFxyXG4gICAgY29uc3RhbnQ6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXHJcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxyXG4gICAgcGF5YWJsZTogZmFsc2UsXHJcbiAgICBvdXRwdXRzOiBbeyB0eXBlOiBcImJvb2xcIiwgbmFtZTogXCJcIiwgaW50ZXJuYWxUeXBlOiBcImJvb2xcIiB9XSxcclxuICAgIG5hbWU6IFwidXNlcnNBY3RpdmVYNkxldmVsc1wiLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgIHsgdHlwZTogXCJhZGRyZXNzXCIsIG5hbWU6IFwidXNlckFkZHJlc3NcIiwgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIiB9LFxyXG4gICAgICB7IHR5cGU6IFwidWludDhcIiwgbmFtZTogXCJsZXZlbFwiLCBpbnRlcm5hbFR5cGU6IFwidWludDhcIiB9LFxyXG4gICAgXSxcclxuICAgIGNvbnN0YW50OiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZTogXCJmdW5jdGlvblwiLFxyXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInBheWFibGVcIixcclxuICAgIHBheWFibGU6IHRydWUsXHJcbiAgICBvdXRwdXRzOiBbXSxcclxuICAgIG5hbWU6IFwiYnV5TmV3TGV2ZWxcIixcclxuICAgIGlucHV0czogW1xyXG4gICAgICB7IHR5cGU6IFwidWludDhcIiwgbmFtZTogXCJtYXRyaXhcIiwgaW50ZXJuYWxUeXBlOiBcInVpbnQ4XCIgfSxcclxuICAgICAgeyB0eXBlOiBcInVpbnQ4XCIsIG5hbWU6IFwibGV2ZWxcIiwgaW50ZXJuYWxUeXBlOiBcInVpbnQ4XCIgfSxcclxuICAgIF0sXHJcbiAgICBjb25zdGFudDogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXHJcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxyXG4gICAgcGF5YWJsZTogZmFsc2UsXHJcbiAgICBvdXRwdXRzOiBbeyB0eXBlOiBcInVpbnQyNTZcIiwgbmFtZTogXCJcIiwgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZcIiB9XSxcclxuICAgIG5hbWU6IFwicmVnaXN0cmF0aW9uQ29zdFwiLFxyXG4gICAgaW5wdXRzOiBbXSxcclxuICAgIGNvbnN0YW50OiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZTogXCJmdW5jdGlvblwiLFxyXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcclxuICAgIHBheWFibGU6IGZhbHNlLFxyXG4gICAgb3V0cHV0czogW3sgdHlwZTogXCJhZGRyZXNzXCIsIG5hbWU6IFwiXCIsIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIgfV0sXHJcbiAgICBuYW1lOiBcImZpbmRGcmVlWDZSZWZlcnJlclwiLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgIHsgdHlwZTogXCJhZGRyZXNzXCIsIG5hbWU6IFwidXNlckFkZHJlc3NcIiwgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIiB9LFxyXG4gICAgICB7IHR5cGU6IFwidWludDhcIiwgbmFtZTogXCJsZXZlbFwiLCBpbnRlcm5hbFR5cGU6IFwidWludDhcIiB9LFxyXG4gICAgXSxcclxuICAgIGNvbnN0YW50OiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZTogXCJmdW5jdGlvblwiLFxyXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcclxuICAgIHBheWFibGU6IGZhbHNlLFxyXG4gICAgb3V0cHV0czogW3sgdHlwZTogXCJ1aW50MjU2XCIsIG5hbWU6IFwiXCIsIGludGVybmFsVHlwZTogXCJ1aW50MjU2XCIgfV0sXHJcbiAgICBuYW1lOiBcImxldmVsUHJpY2VcIixcclxuICAgIGlucHV0czogW3sgdHlwZTogXCJ1aW50OFwiLCBuYW1lOiBcIlwiLCBpbnRlcm5hbFR5cGU6IFwidWludDhcIiB9XSxcclxuICAgIGNvbnN0YW50OiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZTogXCJmdW5jdGlvblwiLFxyXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcclxuICAgIHBheWFibGU6IGZhbHNlLFxyXG4gICAgb3V0cHV0czogW3sgdHlwZTogXCJhZGRyZXNzXCIsIG5hbWU6IFwiXCIsIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIgfV0sXHJcbiAgICBuYW1lOiBcImZpbmRGcmVlWDNSZWZlcnJlclwiLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgIHsgdHlwZTogXCJhZGRyZXNzXCIsIG5hbWU6IFwidXNlckFkZHJlc3NcIiwgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIiB9LFxyXG4gICAgICB7IHR5cGU6IFwidWludDhcIiwgbmFtZTogXCJsZXZlbFwiLCBpbnRlcm5hbFR5cGU6IFwidWludDhcIiB9LFxyXG4gICAgXSxcclxuICAgIGNvbnN0YW50OiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZTogXCJjb25zdHJ1Y3RvclwiLFxyXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcIm5vbnBheWFibGVcIixcclxuICAgIHBheWFibGU6IGZhbHNlLFxyXG4gICAgaW5wdXRzOiBbeyB0eXBlOiBcImFkZHJlc3NcIiwgbmFtZTogXCJvd25lclwiLCBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiIH1dLFxyXG4gIH0sXHJcbiAgeyB0eXBlOiBcImZhbGxiYWNrXCIsIHN0YXRlTXV0YWJpbGl0eTogXCJwYXlhYmxlXCIsIHBheWFibGU6IHRydWUgfSxcclxuICB7XHJcbiAgICB0eXBlOiBcImV2ZW50XCIsXHJcbiAgICBuYW1lOiBcIlJlZ2lzdHJhdGlvblwiLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgIHsgdHlwZTogXCJhZGRyZXNzXCIsIG5hbWU6IFwidXNlclwiLCBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiLCBpbmRleGVkOiB0cnVlIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiBcImFkZHJlc3NcIixcclxuICAgICAgICBuYW1lOiBcInJlZmVycmVyXCIsXHJcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIixcclxuICAgICAgICBpbmRleGVkOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogXCJ1aW50MjU2XCIsXHJcbiAgICAgICAgbmFtZTogXCJ1c2VySWRcIixcclxuICAgICAgICBpbnRlcm5hbFR5cGU6IFwidWludDI1NlwiLFxyXG4gICAgICAgIGluZGV4ZWQ6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiBcInVpbnQyNTZcIixcclxuICAgICAgICBuYW1lOiBcInJlZmVycmVySWRcIixcclxuICAgICAgICBpbnRlcm5hbFR5cGU6IFwidWludDI1NlwiLFxyXG4gICAgICAgIGluZGV4ZWQ6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIGFub255bW91czogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlOiBcImV2ZW50XCIsXHJcbiAgICBuYW1lOiBcIlJlaW52ZXN0XCIsXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgeyB0eXBlOiBcImFkZHJlc3NcIiwgbmFtZTogXCJ1c2VyXCIsIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIsIGluZGV4ZWQ6IHRydWUgfSxcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6IFwiYWRkcmVzc1wiLFxyXG4gICAgICAgIG5hbWU6IFwiY3VycmVudFJlZmVycmVyXCIsXHJcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIixcclxuICAgICAgICBpbmRleGVkOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogXCJhZGRyZXNzXCIsXHJcbiAgICAgICAgbmFtZTogXCJjYWxsZXJcIixcclxuICAgICAgICBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiLFxyXG4gICAgICAgIGluZGV4ZWQ6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgdHlwZTogXCJ1aW50OFwiLCBuYW1lOiBcIm1hdHJpeFwiLCBpbnRlcm5hbFR5cGU6IFwidWludDhcIiwgaW5kZXhlZDogZmFsc2UgfSxcclxuICAgICAgeyB0eXBlOiBcInVpbnQ4XCIsIG5hbWU6IFwibGV2ZWxcIiwgaW50ZXJuYWxUeXBlOiBcInVpbnQ4XCIsIGluZGV4ZWQ6IGZhbHNlIH0sXHJcbiAgICBdLFxyXG4gICAgYW5vbnltb3VzOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGU6IFwiZXZlbnRcIixcclxuICAgIG5hbWU6IFwiVXBncmFkZVwiLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgIHsgdHlwZTogXCJhZGRyZXNzXCIsIG5hbWU6IFwidXNlclwiLCBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiLCBpbmRleGVkOiB0cnVlIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiBcImFkZHJlc3NcIixcclxuICAgICAgICBuYW1lOiBcInJlZmVycmVyXCIsXHJcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIixcclxuICAgICAgICBpbmRleGVkOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICB7IHR5cGU6IFwidWludDhcIiwgbmFtZTogXCJtYXRyaXhcIiwgaW50ZXJuYWxUeXBlOiBcInVpbnQ4XCIsIGluZGV4ZWQ6IGZhbHNlIH0sXHJcbiAgICAgIHsgdHlwZTogXCJ1aW50OFwiLCBuYW1lOiBcImxldmVsXCIsIGludGVybmFsVHlwZTogXCJ1aW50OFwiLCBpbmRleGVkOiBmYWxzZSB9LFxyXG4gICAgXSxcclxuICAgIGFub255bW91czogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlOiBcImV2ZW50XCIsXHJcbiAgICBuYW1lOiBcIk5ld1VzZXJQbGFjZVwiLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgIHsgdHlwZTogXCJhZGRyZXNzXCIsIG5hbWU6IFwidXNlclwiLCBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiLCBpbmRleGVkOiB0cnVlIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiBcImFkZHJlc3NcIixcclxuICAgICAgICBuYW1lOiBcInJlZmVycmVyXCIsXHJcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIixcclxuICAgICAgICBpbmRleGVkOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICB7IHR5cGU6IFwidWludDhcIiwgbmFtZTogXCJtYXRyaXhcIiwgaW50ZXJuYWxUeXBlOiBcInVpbnQ4XCIsIGluZGV4ZWQ6IGZhbHNlIH0sXHJcbiAgICAgIHsgdHlwZTogXCJ1aW50OFwiLCBuYW1lOiBcImxldmVsXCIsIGludGVybmFsVHlwZTogXCJ1aW50OFwiLCBpbmRleGVkOiBmYWxzZSB9LFxyXG4gICAgICB7IHR5cGU6IFwidWludDhcIiwgbmFtZTogXCJwbGFjZVwiLCBpbnRlcm5hbFR5cGU6IFwidWludDhcIiwgaW5kZXhlZDogZmFsc2UgfSxcclxuICAgIF0sXHJcbiAgICBhbm9ueW1vdXM6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZTogXCJldmVudFwiLFxyXG4gICAgbmFtZTogXCJNaXNzZWRFdGhSZWNlaXZlXCIsXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6IFwiYWRkcmVzc1wiLFxyXG4gICAgICAgIG5hbWU6IFwicmVjZWl2ZXJcIixcclxuICAgICAgICBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiLFxyXG4gICAgICAgIGluZGV4ZWQ6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgdHlwZTogXCJhZGRyZXNzXCIsIG5hbWU6IFwiZnJvbVwiLCBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiLCBpbmRleGVkOiB0cnVlIH0sXHJcbiAgICAgIHsgdHlwZTogXCJ1aW50OFwiLCBuYW1lOiBcIm1hdHJpeFwiLCBpbnRlcm5hbFR5cGU6IFwidWludDhcIiwgaW5kZXhlZDogZmFsc2UgfSxcclxuICAgICAgeyB0eXBlOiBcInVpbnQ4XCIsIG5hbWU6IFwibGV2ZWxcIiwgaW50ZXJuYWxUeXBlOiBcInVpbnQ4XCIsIGluZGV4ZWQ6IGZhbHNlIH0sXHJcbiAgICBdLFxyXG4gICAgYW5vbnltb3VzOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGU6IFwiZXZlbnRcIixcclxuICAgIG5hbWU6IFwiU2VudEV4dHJhRXRoRGl2aWRlbmRzXCIsXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgeyB0eXBlOiBcImFkZHJlc3NcIiwgbmFtZTogXCJmcm9tXCIsIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIsIGluZGV4ZWQ6IHRydWUgfSxcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6IFwiYWRkcmVzc1wiLFxyXG4gICAgICAgIG5hbWU6IFwicmVjZWl2ZXJcIixcclxuICAgICAgICBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiLFxyXG4gICAgICAgIGluZGV4ZWQ6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgdHlwZTogXCJ1aW50OFwiLCBuYW1lOiBcIm1hdHJpeFwiLCBpbnRlcm5hbFR5cGU6IFwidWludDhcIiwgaW5kZXhlZDogZmFsc2UgfSxcclxuICAgICAgeyB0eXBlOiBcInVpbnQ4XCIsIG5hbWU6IFwibGV2ZWxcIiwgaW50ZXJuYWxUeXBlOiBcInVpbnQ4XCIsIGluZGV4ZWQ6IGZhbHNlIH0sXHJcbiAgICBdLFxyXG4gICAgYW5vbnltb3VzOiBmYWxzZSxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERFJFU1MgPSBcIjB4ZTFiQmI2M2U4Y0FDOTM2MWYwYzA3QWQ2QUVFMTJjMjg5M0Q0MjczNVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE9XTkVSID0gXCIweGYyYUEyNjcyM2VkN2IwOTk4NDVhZkU2OUZBNDkyOUE0NkJDMDAyNDVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBCQVNFX1VSTCA9IFwiaHR0cHM6Ly9hbW5leHQudmVyY2VsLmFwcC9cIjtcclxuXHJcbi8vIGh0dHBzOi8vbXVtYmFpLWV4cGxvcmVyLm1hdGljLnRvZGF5L2FkZHJlc3MvMHhlMWJCYjYzZThjQUM5MzYxZjBjMDdBZDZBRUUxMmMyODkzRDQyNzM1L2NvbnRyYWN0c1xyXG4iLCJpbXBvcnQgeyBBQkksIEFERFJFU1MgfSBmcm9tIFwiLi9nbG9iYWxzXCI7XHJcbmltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCI7XHJcblxyXG4vLyBGZXRjaGluZyBXRUIzIFByb3ZpZGVyXHJcblxyXG5leHBvcnQgY29uc3QgbG9hZFdlYjMgPSBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcclxuICAgICAgd2luZG93LndlYjMgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pO1xyXG4gICAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0uZW5hYmxlKCk7XHJcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy53ZWIzKSB7XHJcbiAgICAgIHdpbmRvdy53ZWIzID0gbmV3IFdlYjMod2luZG93LndlYjMuY3VycmVudFByb3ZpZGVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcclxuICAgICAgICBcIk5vbi1FdGhlcmV1bSBicm93c2VyIGRldGVjdGVkLiBZb3Ugc2hvdWxkIGNvbnNpZGVyIHRyeWluZyBNZXRhTWFzayFcIlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgd2luZG93LmFsZXJ0KFwiVHJvdWJsZSBjb25uZWN0aW5nIHRvIHlvdSB3ZWIzIGJyb3dzZXIuLi5cIik7XHJcbiAgfVxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXMtZXhhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWIzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=