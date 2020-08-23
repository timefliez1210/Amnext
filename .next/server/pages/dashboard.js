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
    href: "/dashboard",
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
    href: "/office",
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
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/statistics",
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
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/instructions",
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
  }, "nav.jsx-334056973{background:rgba(28,22,85,1);height:auto;width:100%;position:fixed;top:0px;padding:5px 0;z-index:999;font-size:20px;color:grex;}nav.jsx-334056973 ul.jsx-334056973{background:rgba(28,22,85,1);display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-margin-before:0;margin-block-start:0;-webkit-margin-after:0;margin-block-end:0;-webkit-padding-start:0;padding-inline-start:0;height:100%;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:90%;margin:0 auto;}nav.jsx-334056973 figure.jsx-334056973{display:none;cursor:pointer;}nav.jsx-334056973 ul.jsx-334056973 li.jsx-334056973{list-style-type:none;padding:10px 20px;}nav.jsx-334056973 ul.jsx-334056973 li.jsx-334056973 a.jsx-334056973{color:#6a668f;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXE5hdmlnYXRpb24uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDa0IsQUFHMEMsQUFZQSxBQW1CbEIsQUFLUSxBQUtQLGFBVEMsQ0FVakIsT0FMb0IsT0FwQ04sQUFZUSxBQW9CdEIsV0FLQSxDQXBDYSxRQVlTLEdBWEwsZUFDUCxFQVdLLE1BVkMsY0FDRixZQUNHLGVBQ0osV0FDYixnQkFPMEIsd0JBQ0gscUJBQ0UsdUJBQ0osbUJBQ0ssd0JBQ0QsdUJBQ1gsWUFDYSx5QkFDSCxzQkFDSCw2RkFDVCxVQUNJLGNBQ2hCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXE5hdmlnYXRpb24uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgTmF2aWdhdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPG5hdj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkXCI+XHJcbiAgICAgICAgICAgIDxhIHRpdGxlPVwiXCI+TWFpbjwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvb2ZmaWNlXCI+XHJcbiAgICAgICAgICAgIDxhIHRpdGxlPVwiXCI+T2ZmaWNlPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgey8qIDxsaT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJcIj5cclxuICAgICAgICAgICAgPGEgdGl0bGU9XCJcIj5QYXJ0bmVyczwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPiAqL31cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3N0YXRpc3RpY3NcIj5cclxuICAgICAgICAgICAgPGEgdGl0bGU9XCJcIj5TdGF0aXN0aWNzPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgey8qIDxsaT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJcIj5cclxuICAgICAgICAgICAgPGEgdGl0bGU9XCJcIj5Hb2FsPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+ICovfVxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaW5zdHJ1Y3Rpb25zXCI+XHJcbiAgICAgICAgICAgIDxhIHRpdGxlPVwiXCI+SW5zdHJ1Y3Rpb25zPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBuYXYge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyOCwgMjIsIDg1LCAxKTtcclxuICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIGNvbG9yOiBncmV4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmF2IHVsIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjgsIDIyLCA4NSwgMSk7XHJcbiAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIC13ZWJraXQtbWFyZ2luLWJlZm9yZTogMDtcclxuICAgICAgICAgIG1hcmdpbi1ibG9jay1zdGFydDogMDtcclxuICAgICAgICAgIC13ZWJraXQtbWFyZ2luLWFmdGVyOiAwO1xyXG4gICAgICAgICAgbWFyZ2luLWJsb2NrLWVuZDogMDtcclxuICAgICAgICAgIC13ZWJraXQtcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmF2IGZpZ3VyZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmF2IHVsIGxpIHtcclxuICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hdiB1bCBsaSBhIHtcclxuICAgICAgICAgIGNvbG9yOiAjNmE2NjhmO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\components\\\\Navigation.jsx */"));
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
    className: "jsx-1995315051" + " " + "holder",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-1995315051" + " " + "heart-holder",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1995315051" + " " + "lds-heart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1995315051",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 11
    }
  })), __jsx("h1", {
    className: "jsx-1995315051",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, "Connecting to the Contract and getting your Dashboard")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1995315051",
    __self: undefined
  }, ".holder.jsx-1995315051{background:none;padding-top:20%;}.heart-holder.jsx-1995315051{color:white;text-align:center;max-width:600px;max-height:200px;margin:auto auto;}.lds-heart.jsx-1995315051{display:inline-block;position:relative;width:80px;height:80px;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:40px 40px;-ms-transform-origin:40px 40px;transform-origin:40px 40px;}.lds-heart.jsx-1995315051 div.jsx-1995315051{top:32px;left:32px;position:absolute;width:32px;height:32px;background:red;-webkit-animation:lds-heart-jsx-1995315051 1.2s infinite cubic-bezier(0.215,0.61,0.355,1);animation:lds-heart-jsx-1995315051 1.2s infinite cubic-bezier(0.215,0.61,0.355,1);}.lds-heart.jsx-1995315051 div.jsx-1995315051:after,.lds-heart.jsx-1995315051 div.jsx-1995315051:before{content:\" \";position:absolute;display:block;width:32px;height:32px;background:red;}.lds-heart.jsx-1995315051 div.jsx-1995315051:before{left:-24px;border-radius:50% 0 0 50%;}.lds-heart.jsx-1995315051 div.jsx-1995315051:after{top:-24px;border-radius:50% 50% 0 0;}@-webkit-keyframes lds-heart-jsx-1995315051{0%{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);}5%{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}39%{-webkit-transform:scale(0.85);-ms-transform:scale(0.85);transform:scale(0.85);}45%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}60%{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);}100%{-webkit-transform:scale(0.9);-ms-transform:scale(0.9);transform:scale(0.9);}}@keyframes lds-heart-jsx-1995315051{0%{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);}5%{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}39%{-webkit-transform:scale(0.85);-ms-transform:scale(0.85);transform:scale(0.85);}45%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}60%{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);}100%{-webkit-transform:scale(0.9);-ms-transform:scale(0.9);transform:scale(0.9);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXFNwaW5uZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVrQixBQUcyQixBQUlKLEFBT1MsQUFRWixBQVVHLEFBUUQsQUFJRCxBQUtjLEFBR0QsQUFHQyxBQUdILEFBR0csQUFHRCxTQXpDYixDQXNCZ0IsQ0FKQSxDQWpDUixBQXlCQSxJQTdCRixHQW9CRSxFQVRBLFNBTkYsQUF5QkYsRUE3QmhCLElBeUNBLENBckJhLEFBaUJiLEVBMUJhLEtBbUJBLEVBekJNLEVBZ0JMLEVBVEEsS0FtQkEsS0FURyxFQVRTLENBUFAsSUEwQkYsRUFzQmYsTUEvQnNFLEFBeUJ0RSxBQVlBLEdBZkEsQUFNQSxBQU1BLEVBbERGLEVBMEJBLGdFQW5CNkIsNkZBQzdCLFFBU0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxjcmZhYlxcRGVza3RvcFxcZm9yc2FnZS1ib2lsZXJwbGF0ZVxcY29tcG9uZW50c1xcU3Bpbm5lci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTcGlubmVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbGRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYXJ0LWhvbGRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGRzLWhlYXJ0XCI+XHJcbiAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxoMT5Db25uZWN0aW5nIHRvIHRoZSBDb250cmFjdCBhbmQgZ2V0dGluZyB5b3VyIERhc2hib2FyZDwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5ob2xkZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAyMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5oZWFydC1ob2xkZXIge1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sZHMtaGVhcnQge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA0MHB4IDQwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sZHMtaGVhcnQgZGl2IHtcclxuICAgICAgICAgIHRvcDogMzJweDtcclxuICAgICAgICAgIGxlZnQ6IDMycHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB3aWR0aDogMzJweDtcclxuICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICAgICAgICAgIGFuaW1hdGlvbjogbGRzLWhlYXJ0IDEuMnMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sZHMtaGVhcnQgZGl2OmFmdGVyLFxyXG4gICAgICAgIC5sZHMtaGVhcnQgZGl2OmJlZm9yZSB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIiBcIjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sZHMtaGVhcnQgZGl2OmJlZm9yZSB7XHJcbiAgICAgICAgICBsZWZ0OiAtMjRweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJSAwIDAgNTAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGRzLWhlYXJ0IGRpdjphZnRlciB7XHJcbiAgICAgICAgICB0b3A6IC0yNHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlIDUwJSAwIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBrZXlmcmFtZXMgbGRzLWhlYXJ0IHtcclxuICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDUlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMzklIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjg1KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDQ1JSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA2MCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFNwaW5uZXI7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\components\\\\Spinner.jsx */"));
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
    try {
      this.setState({
        account: this.props.account
      });
      await Object(_utils_utility__WEBPACK_IMPORTED_MODULE_5__["loadWeb3"])();
      await this.loadBlockchainData();
    } catch (err) {
      window.alert("Something went wrong.. Check: " + err);
    }
  }

  async loadBlockchainData() {
    try {
      const web3 = new web3__WEBPACK_IMPORTED_MODULE_3___default.a(web3__WEBPACK_IMPORTED_MODULE_3___default.a.givenProvider || "http://localhost:8545");
      const contract = new web3.eth.Contract(_utils_globals__WEBPACK_IMPORTED_MODULE_4__["ABI"], _utils_globals__WEBPACK_IMPORTED_MODULE_4__["ADDRESS"]);
      this.setState({
        contract
      });
      const costs = await contract.methods.registrationCost().call();

      const _costs = web3.utils.fromWei(costs, "ether");

      this.setState({
        cost: _costs
      }); // Matrix Calls for the X3

      const x3 = [];

      for (let i = 1; i < 13; i++) {
        const res = await contract.methods.usersX3Matrix(this.state.account, i).call();
        x3.push({
          level: i,
          userX3: res
        });
      }

      const elementsX3 = [];

      for (let i = 0; i < 12; i++) {
        let j = i + 1;
        const downlines = x3[i].userX3[1].length;
        elementsX3.push({
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

      const x3Payload = this.x3Infos(x3Exist, elementsX3);
      this.setState({
        x3Payload
      }); // Matrix Calls for the X4

      const x4Exist = [];

      for (let i = 1; i < 13; i++) {
        const res = await contract.methods.usersActiveX6Levels(this.state.account, i).call();
        x4Exist.push({
          id: i,
          userX4Exist: res,
          key: i,
          cost: this.state.cost / 2 * i
        });
      }

      const x6 = [];

      for (let i = 1; i < 13; i++) {
        const res = await contract.methods.usersX6Matrix(this.state.account, i).call();
        x6.push({
          id: i,
          userX6: res
        });
      }

      const x6Payload = this.x3Infos(x4Exist, x6);
      this.setState({
        x6Payload
      });
    } catch (err) {
      window.alert("Something went wrong.. Check: " + err);
    }
  } // Merging X3 quereries into 1 Payload


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
        lineNumber: 114,
        columnNumber: 9
      }
    }), __jsx(_X4MatrixHolder__WEBPACK_IMPORTED_MODULE_2__["default"], {
      struc: this.state.x6Payload,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
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
/* harmony import */ var _Spinner_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Spinner.jsx */ "./components/Spinner.jsx");
/* harmony import */ var _X4matrix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./X4matrix */ "./components/matrix/X4matrix.jsx");
var _jsxFileName = "C:\\Users\\crfab\\Desktop\\forsage-boilerplate\\components\\matrix\\X4MatrixHolder.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const X4MatrixHolder = props => {
  const {
    0: reload,
    1: setReload
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (props.struc != undefined) {
      setReload(1);
    }
  }, reload);
  console.log(props.struc);

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
    }, "Forsage x4")), __jsx("div", {
      className: "jsx-732823435" + " " + "bottom-part",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, __jsx(_Spinner_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
    }, ".upper-holder.jsx-732823435{margin-bottom:20px;text-align:left;}.top-part.jsx-732823435{width:100%;background:rgba(28,22,85,1);border-radius:20px 20px 0 0;padding:10px 10px;}.bottom-part.jsx-732823435{width:100%;background:rgba(28,22,85,1);border-radius:0 0 20px 20px;padding:10px 10px;border-top:2px solid black;display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));grid-gap:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXG1hdHJpeFxcWDRNYXRyaXhIb2xkZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCb0IsQUFHZ0MsQUFJUixBQU1BLFdBTG9CLEFBTUEsUUFWZixnQkFDbEIsSUFJOEIsQUFNQSw0QkFMVixBQU1BLGtCQUxwQixBQU02QiwyQkFDZCxhQUM4Qyx5REFDN0MsY0FDaEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxjcmZhYlxcRGVza3RvcFxcZm9yc2FnZS1ib2lsZXJwbGF0ZVxcY29tcG9uZW50c1xcbWF0cml4XFxYNE1hdHJpeEhvbGRlci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vU3Bpbm5lci5qc3hcIjtcclxuaW1wb3J0IFg0TWF0cml4IGZyb20gXCIuL1g0bWF0cml4XCI7XHJcblxyXG5jb25zdCBYNE1hdHJpeEhvbGRlciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtyZWxvYWQsIHNldFJlbG9hZF0gPSB1c2VTdGF0ZSgwKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHByb3BzLnN0cnVjICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBzZXRSZWxvYWQoMSk7XHJcbiAgICB9XHJcbiAgfSwgcmVsb2FkKTtcclxuICBjb25zb2xlLmxvZyhwcm9wcy5zdHJ1Yyk7XHJcbiAgaWYgKHByb3BzLnN0cnVjID09PSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBwZXItaG9sZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtcGFydFwiPlxyXG4gICAgICAgICAgPGgxPkZvcnNhZ2UgeDQ8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tLXBhcnRcIj5cclxuICAgICAgICAgIDxTcGlubmVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHA+SGFsbG8gaWNoIGJpbiBkZXIgTMO8Y2tlbmbDvGxsZXIgVGV4dCBmw7xyIGRpZSBJY29uZXM8L3A+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLnVwcGVyLWhvbGRlciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudG9wLXBhcnQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyOCwgMjIsIDg1LCAxKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJvdHRvbS1wYXJ0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjgsIDIyLCA4NSwgMSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcclxuICAgICAgICAgICAgZ3JpZC1nYXA6IDMwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cHBlci1ob2xkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLXBhcnRcIj5cclxuICAgICAgICAgICAgPGgxPkZvcnNhZ2UgeDQ8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbS1wYXJ0XCI+XHJcbiAgICAgICAgICAgIHtwcm9wcy5zdHJ1Yy5tYXAoKG1hdHJpeCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8WDRNYXRyaXhcclxuICAgICAgICAgICAgICAgIGlkPXttYXRyaXguaWR9XHJcbiAgICAgICAgICAgICAgICBrZXk9e21hdHJpeC5rZXl9XHJcbiAgICAgICAgICAgICAgICBjb3N0PXttYXRyaXguY29zdH1cclxuICAgICAgICAgICAgICAgIGJvdWdodD17bWF0cml4LnVzZXJYNEV4aXN0fVxyXG4gICAgICAgICAgICAgICAgc3RydWN0dXJlPXttYXRyaXgudXNlclg2fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8cD5IYWxsbyBpY2ggYmluIGRlciBMw7xja2VuZsO8bGxlci4gVGV4dCBmw7xyIGRpZSBJY29uZXM8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLnVwcGVyLWhvbGRlciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudG9wLXBhcnQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyOCwgMjIsIDg1LCAxKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJvdHRvbS1wYXJ0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjgsIDIyLCA4NSwgMSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcclxuICAgICAgICAgICAgZ3JpZC1nYXA6IDMwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBYNE1hdHJpeEhvbGRlcjtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\components\\\\matrix\\\\X4MatrixHolder.jsx */"));
  } else {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
      className: "jsx-3545879239" + " " + "upper-holder",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "jsx-3545879239" + " " + "top-part",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 11
      }
    }, __jsx("h1", {
      className: "jsx-3545879239",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }
    }, "Forsage x4")), __jsx("div", {
      className: "jsx-3545879239" + " " + "bottom-part",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 11
      }
    }, props.struc.map((matrix, index) => __jsx(_X4matrix__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: matrix.id,
      key: matrix.key,
      cost: matrix.cost,
      bought: matrix.userX4Exist,
      structure: matrix.userX6,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 15
      }
    }))), __jsx("p", {
      className: "jsx-3545879239",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 11
      }
    }, "Hallo ich bin der L\xFCckenf\xFCller. Text f\xFCr die Icones")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3545879239",
      __self: undefined
    }, ".upper-holder.jsx-3545879239{margin-bottom:20px;text-align:left;}.top-part.jsx-3545879239{width:100%;background:rgba(28,22,85,1);border-radius:20px 20px 0 0;padding:10px 20px;}.bottom-part.jsx-3545879239{width:100%;background:rgba(28,22,85,1);border-radius:0 0 20px 20px;padding:10px 10px;border-top:2px solid black;display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));grid-gap:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXG1hdHJpeFxcWDRNYXRyaXhIb2xkZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtFb0IsQUFHZ0MsQUFJUixBQU1BLFdBTG9CLEFBTUEsUUFWZixnQkFDbEIsSUFJOEIsQUFNQSw0QkFMVixBQU1BLGtCQUxwQixBQU02QiwyQkFDZCxhQUM4Qyx5REFDN0MsY0FDaEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxjcmZhYlxcRGVza3RvcFxcZm9yc2FnZS1ib2lsZXJwbGF0ZVxcY29tcG9uZW50c1xcbWF0cml4XFxYNE1hdHJpeEhvbGRlci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vU3Bpbm5lci5qc3hcIjtcclxuaW1wb3J0IFg0TWF0cml4IGZyb20gXCIuL1g0bWF0cml4XCI7XHJcblxyXG5jb25zdCBYNE1hdHJpeEhvbGRlciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtyZWxvYWQsIHNldFJlbG9hZF0gPSB1c2VTdGF0ZSgwKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHByb3BzLnN0cnVjICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBzZXRSZWxvYWQoMSk7XHJcbiAgICB9XHJcbiAgfSwgcmVsb2FkKTtcclxuICBjb25zb2xlLmxvZyhwcm9wcy5zdHJ1Yyk7XHJcbiAgaWYgKHByb3BzLnN0cnVjID09PSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBwZXItaG9sZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtcGFydFwiPlxyXG4gICAgICAgICAgPGgxPkZvcnNhZ2UgeDQ8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tLXBhcnRcIj5cclxuICAgICAgICAgIDxTcGlubmVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHA+SGFsbG8gaWNoIGJpbiBkZXIgTMO8Y2tlbmbDvGxsZXIgVGV4dCBmw7xyIGRpZSBJY29uZXM8L3A+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLnVwcGVyLWhvbGRlciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudG9wLXBhcnQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyOCwgMjIsIDg1LCAxKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJvdHRvbS1wYXJ0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjgsIDIyLCA4NSwgMSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcclxuICAgICAgICAgICAgZ3JpZC1nYXA6IDMwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cHBlci1ob2xkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLXBhcnRcIj5cclxuICAgICAgICAgICAgPGgxPkZvcnNhZ2UgeDQ8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbS1wYXJ0XCI+XHJcbiAgICAgICAgICAgIHtwcm9wcy5zdHJ1Yy5tYXAoKG1hdHJpeCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8WDRNYXRyaXhcclxuICAgICAgICAgICAgICAgIGlkPXttYXRyaXguaWR9XHJcbiAgICAgICAgICAgICAgICBrZXk9e21hdHJpeC5rZXl9XHJcbiAgICAgICAgICAgICAgICBjb3N0PXttYXRyaXguY29zdH1cclxuICAgICAgICAgICAgICAgIGJvdWdodD17bWF0cml4LnVzZXJYNEV4aXN0fVxyXG4gICAgICAgICAgICAgICAgc3RydWN0dXJlPXttYXRyaXgudXNlclg2fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8cD5IYWxsbyBpY2ggYmluIGRlciBMw7xja2VuZsO8bGxlci4gVGV4dCBmw7xyIGRpZSBJY29uZXM8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLnVwcGVyLWhvbGRlciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudG9wLXBhcnQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyOCwgMjIsIDg1LCAxKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJvdHRvbS1wYXJ0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjgsIDIyLCA4NSwgMSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcclxuICAgICAgICAgICAgZ3JpZC1nYXA6IDMwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBYNE1hdHJpeEhvbGRlcjtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\components\\\\matrix\\\\X4MatrixHolder.jsx */"));
  }
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
/* harmony import */ var _x4structure_FirstLine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./x4structure/FirstLine */ "./components/matrix/x4structure/FirstLine.jsx");
/* harmony import */ var _x4structure_SecondLine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./x4structure/SecondLine */ "./components/matrix/x4structure/SecondLine.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\crfab\\Desktop\\forsage-boilerplate\\components\\matrix\\X4matrix.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




const X4matrix = props => {
  const {
    0: exist1,
    1: setExist1
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const {
    0: exist2,
    1: setExist2
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const {
    0: exist3,
    1: setExist3
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const {
    0: exist4,
    1: setExist4
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const {
    0: exist5,
    1: setExist5
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const {
    0: exist6,
    1: setExist6
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    if (props.structure[1].length != 0) {
      if (props.structure[1].length === 1) {
        setExist1(true);
      } else if (props.structure[1].length === 2) {
        setExist1(true);
        setExist2(true);
      }

      console.log(props.id);
      console.log(props.structure);
    }

    if (props.structure[2].length != 0) {
      if (props.structure[1].length === 1) {
        setExist3(true);
      } else if (props.structure[1].length === 2) {
        setExist3(true);
        setExist4(true);
      } else if (props.structure[1].length === 3) {
        setExist3(true);
        setExist4(true);
        setExist5(true);
      } else if (props.structure[1].length === 4) {
        setExist3(true);
        setExist4(true);
        setExist5(true);
        setExist6(true);
      }

      console.log(props.id);
      console.log(props.structure);
    }
  });

  if (props.bought) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("div", {
      className: "jsx-1679309585" + " " + "holder",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "jsx-1679309585" + " " + "matrix-head",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "jsx-1679309585" + " " + "level",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }
    }, props.id), __jsx("div", {
      className: "jsx-1679309585" + " " + "id",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }
    }, props.cost)), __jsx(_x4structure_FirstLine__WEBPACK_IMPORTED_MODULE_1__["default"], {
      exist1: exist1,
      exist2: exist2,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }
    }), __jsx("div", {
      className: "jsx-1679309585" + " " + "squares",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "jsx-1679309585" + " " + "struc",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 13
      }
    }), __jsx("div", {
      className: "jsx-1679309585" + " " + "struc",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 13
      }
    })), __jsx(_x4structure_SecondLine__WEBPACK_IMPORTED_MODULE_2__["default"], {
      exist3: exist3,
      exist4: exist4,
      exist5: exist5,
      exist6: exist6,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1679309585",
      __self: undefined
    }, ".holder.jsx-1679309585{width:auto;width:200px;}.matrix-head.jsx-1679309585{background:rgb(31,169,255);background:linear-gradient( 270deg, rgba(31,169,255,1) 31%, rgba(21,117,251,1) 77% );display:grid;grid-template-columns:50px 150px;border-radius:20px;font-style:bold;font-size:1.2em;height:70px;overflow:hidden;}.level.jsx-1679309585{background:#338eff;padding:20px 20px;border-radius:20px;}.id.jsx-1679309585{padding:20px 20px;}.lines.jsx-1679309585{height:25px;width:2px;background:lightblue;margin:auto auto;}.items.jsx-1679309585{display:grid;grid-template-columns:100px 100px;text-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.downlines.jsx-1679309585{display:grid;grid-template-columns:100px 100px;}.squares.jsx-1679309585{display:grid;grid-template-columns:100px 100px;}.struc.jsx-1679309585{height:2px;width:50%;background:lightblue;margin:auto auto;}.items4.jsx-1679309585{display:grid;grid-template-columns:50px 50px 50px 50px;}.downlines4.jsx-1679309585{display:grid;grid-template-columns:50px 50px 50px 50px;}.circle.jsx-1679309585{height:30px;width:30px;border-radius:50%;border:1.5px solid #1ea6ff;background:#1ea6ff;margin:auto auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXG1hdHJpeFxcWDRtYXRyaXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdFb0IsQUFHd0IsQUFJa0IsQUFlVixBQUtELEFBSU4sQUFNQyxBQU1BLEFBSUEsQUFJRixBQU9FLEFBSUEsQUFJRCxXQTlEQSxBQWdERixDQXBCQSxBQW1DQyxDQTdCdUIsQUFNQSxBQUlBLEFBV1EsQUFJQSxLQW5DNUMsQ0FMb0IsRUE4QkcsQ0FwQkEsQ0E1QnZCLEFBK0RvQixJQXhEakIsVUFZa0IsSUE2Q1EsQ0FmVixDQXBCQSxJQUtDLEFBTXBCLEFBSUEsUUFXQSxBQUlBLENBdkNBLEdBOEJBLENBcEJBLEtBS3FCLEdBOEJBLG1CQUNGLGlCQUNuQixRQTNEZSxhQUNvQixpQ0FDZCxBQTBCckIsbUJBekJrQixnQkFDQSxnQkFDSixZQUNJLGdCQUNsQiIsImZpbGUiOiJDOlxcVXNlcnNcXGNyZmFiXFxEZXNrdG9wXFxmb3JzYWdlLWJvaWxlcnBsYXRlXFxjb21wb25lbnRzXFxtYXRyaXhcXFg0bWF0cml4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGaXJzdExpbmUgZnJvbSBcIi4veDRzdHJ1Y3R1cmUvRmlyc3RMaW5lXCI7XHJcbmltcG9ydCBTZWNvbmRMaW5lIGZyb20gXCIuL3g0c3RydWN0dXJlL1NlY29uZExpbmVcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFg0bWF0cml4ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2V4aXN0MSwgc2V0RXhpc3QxXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXhpc3QyLCBzZXRFeGlzdDJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtleGlzdDMsIHNldEV4aXN0M10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2V4aXN0NCwgc2V0RXhpc3Q0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXhpc3Q1LCBzZXRFeGlzdDVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtleGlzdDYsIHNldEV4aXN0Nl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocHJvcHMuc3RydWN0dXJlWzFdLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgIGlmIChwcm9wcy5zdHJ1Y3R1cmVbMV0ubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgc2V0RXhpc3QxKHRydWUpO1xyXG4gICAgICB9IGVsc2UgaWYgKHByb3BzLnN0cnVjdHVyZVsxXS5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICBzZXRFeGlzdDEodHJ1ZSk7XHJcbiAgICAgICAgc2V0RXhpc3QyKHRydWUpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKHByb3BzLmlkKTtcclxuICAgICAgY29uc29sZS5sb2cocHJvcHMuc3RydWN0dXJlKTtcclxuICAgIH1cclxuICAgIGlmIChwcm9wcy5zdHJ1Y3R1cmVbMl0ubGVuZ3RoICE9IDApIHtcclxuICAgICAgaWYgKHByb3BzLnN0cnVjdHVyZVsxXS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICBzZXRFeGlzdDModHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAocHJvcHMuc3RydWN0dXJlWzFdLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgIHNldEV4aXN0Myh0cnVlKTtcclxuICAgICAgICBzZXRFeGlzdDQodHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAocHJvcHMuc3RydWN0dXJlWzFdLmxlbmd0aCA9PT0gMykge1xyXG4gICAgICAgIHNldEV4aXN0Myh0cnVlKTtcclxuICAgICAgICBzZXRFeGlzdDQodHJ1ZSk7XHJcbiAgICAgICAgc2V0RXhpc3Q1KHRydWUpO1xyXG4gICAgICB9IGVsc2UgaWYgKHByb3BzLnN0cnVjdHVyZVsxXS5sZW5ndGggPT09IDQpIHtcclxuICAgICAgICBzZXRFeGlzdDModHJ1ZSk7XHJcbiAgICAgICAgc2V0RXhpc3Q0KHRydWUpO1xyXG4gICAgICAgIHNldEV4aXN0NSh0cnVlKTtcclxuICAgICAgICBzZXRFeGlzdDYodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2cocHJvcHMuaWQpO1xyXG4gICAgICBjb25zb2xlLmxvZyhwcm9wcy5zdHJ1Y3R1cmUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBpZiAocHJvcHMuYm91Z2h0KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9sZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hdHJpeC1oZWFkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWxcIj57cHJvcHMuaWR9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWRcIj57cHJvcHMuY29zdH08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEZpcnN0TGluZSBleGlzdDE9e2V4aXN0MX0gZXhpc3QyPXtleGlzdDJ9IC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNxdWFyZXNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdHJ1Y1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0cnVjXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxTZWNvbmRMaW5lXHJcbiAgICAgICAgICAgIGV4aXN0Mz17ZXhpc3QzfVxyXG4gICAgICAgICAgICBleGlzdDQ9e2V4aXN0NH1cclxuICAgICAgICAgICAgZXhpc3Q1PXtleGlzdDV9XHJcbiAgICAgICAgICAgIGV4aXN0Nj17ZXhpc3Q2fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuaG9sZGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tYXRyaXgtaGVhZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigzMSwgMTY5LCAyNTUpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgMjcwZGVnLFxyXG4gICAgICAgICAgICAgIHJnYmEoMzEsIDE2OSwgMjU1LCAxKSAzMSUsXHJcbiAgICAgICAgICAgICAgcmdiYSgyMSwgMTE3LCAyNTEsIDEpIDc3JVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggMTUwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5sZXZlbCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzhlZmY7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pZCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubGluZXMge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXRlbXMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMHB4IDEwMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZG93bmxpbmVzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCAxMDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zcXVhcmVzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCAxMDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdHJ1YyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0byBhdXRvO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5pdGVtczQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggNTBweCA1MHB4IDUwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZG93bmxpbmVzNCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCA1MHB4IDUwcHggNTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jaXJjbGUge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMS41cHggc29saWQgIzFlYTZmZjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzFlYTZmZjtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob2xkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF0cml4LWhlYWRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbFwiPntwcm9wcy5pZH08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpZFwiPntwcm9wcy5jb3N0fTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Rmlyc3RMaW5lIGV4aXN0PXtwcm9wcy5ib3VnaHR9IC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNxdWFyZXNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdHJ1Y1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0cnVjXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxTZWNvbmRMaW5lIGV4aXN0PXtwcm9wcy5ib3VnaHR9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmhvbGRlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWF0cml4LWhlYWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBncmV5O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggMTUwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5sZXZlbCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzhlZmY7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pZCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubGluZXMge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXRlbXMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMHB4IDEwMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZG93bmxpbmVzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCAxMDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zcXVhcmVzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCAxMDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdHJ1YyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0byBhdXRvO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5pdGVtczQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggNTBweCA1MHB4IDUwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZG93bmxpbmVzNCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCA1MHB4IDUwcHggNTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jaXJjbGUge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMS41cHggc29saWQgIzFlYTZmZjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzFlYTZmZjtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgWDRtYXRyaXg7XHJcblxyXG4vLyAjZmQ4NTc2XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\components\\\\matrix\\\\X4matrix.jsx */"));
  } else {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("div", {
      className: "jsx-3881253507" + " " + "holder",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "jsx-3881253507" + " " + "matrix-head",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "jsx-3881253507" + " " + "level",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 13
      }
    }, props.id), __jsx("div", {
      className: "jsx-3881253507" + " " + "id",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 13
      }
    }, props.cost)), __jsx(_x4structure_FirstLine__WEBPACK_IMPORTED_MODULE_1__["default"], {
      exist: props.bought,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 11
      }
    }), __jsx("div", {
      className: "jsx-3881253507" + " " + "squares",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "jsx-3881253507" + " " + "struc",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 13
      }
    }), __jsx("div", {
      className: "jsx-3881253507" + " " + "struc",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 13
      }
    })), __jsx(_x4structure_SecondLine__WEBPACK_IMPORTED_MODULE_2__["default"], {
      exist: props.bought,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 11
      }
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3881253507",
      __self: undefined
    }, ".holder.jsx-3881253507{width:auto;width:200px;}.matrix-head.jsx-3881253507{background:grey;display:grid;grid-template-columns:50px 150px;border-radius:20px;font-style:bold;font-size:1.2em;height:70px;overflow:hidden;}.level.jsx-3881253507{background:#338eff;padding:20px 20px;border-radius:20px;}.id.jsx-3881253507{padding:20px 20px;}.lines.jsx-3881253507{height:25px;width:2px;background:lightblue;margin:auto auto;}.items.jsx-3881253507{display:grid;grid-template-columns:100px 100px;text-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.downlines.jsx-3881253507{display:grid;grid-template-columns:100px 100px;}.squares.jsx-3881253507{display:grid;grid-template-columns:100px 100px;}.struc.jsx-3881253507{height:2px;width:50%;background:lightblue;margin:auto auto;}.items4.jsx-3881253507{display:grid;grid-template-columns:50px 50px 50px 50px;}.downlines4.jsx-3881253507{display:grid;grid-template-columns:50px 50px 50px 50px;}.circle.jsx-3881253507{height:30px;width:30px;border-radius:50%;border:1.5px solid #1ea6ff;background:#1ea6ff;margin:auto auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXG1hdHJpeFxcWDRtYXRyaXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBKb0IsQUFHd0IsQUFJSyxBQVVHLEFBS0QsQUFJTixBQU1DLEFBTUEsQUFJQSxBQUlGLEFBT0UsQUFJQSxBQUlELFdBekRBLEFBMkNGLENBcEJBLEFBbUNDLENBN0J1QixBQU1BLEFBSUEsQUFXUSxBQUlBLEdBbEQ3QixFQWVmLENBTG9CLEVBOEJHLENBcEJBLENBdkJ2QixBQTBEb0IsTUF0RGUsUUFVZCxJQTZDUSxDQWZWLENBcEJBLElBS0MsQUFNcEIsQUFJQSxRQVdBLEFBSUEsQ0F2Q0EsR0E4QkEsQ0FwQkEsRUFwQnFCLEdBeUJBLEdBOEJBLGFBdERILE1BdURDLFVBdERELE9BdURsQixTQXREYyxZQUNJLGdCQUNsQixpQkFxQkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxjcmZhYlxcRGVza3RvcFxcZm9yc2FnZS1ib2lsZXJwbGF0ZVxcY29tcG9uZW50c1xcbWF0cml4XFxYNG1hdHJpeC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmlyc3RMaW5lIGZyb20gXCIuL3g0c3RydWN0dXJlL0ZpcnN0TGluZVwiO1xyXG5pbXBvcnQgU2Vjb25kTGluZSBmcm9tIFwiLi94NHN0cnVjdHVyZS9TZWNvbmRMaW5lXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBYNG1hdHJpeCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtleGlzdDEsIHNldEV4aXN0MV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2V4aXN0Miwgc2V0RXhpc3QyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXhpc3QzLCBzZXRFeGlzdDNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtleGlzdDQsIHNldEV4aXN0NF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2V4aXN0NSwgc2V0RXhpc3Q1XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXhpc3Q2LCBzZXRFeGlzdDZdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHByb3BzLnN0cnVjdHVyZVsxXS5sZW5ndGggIT0gMCkge1xyXG4gICAgICBpZiAocHJvcHMuc3RydWN0dXJlWzFdLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIHNldEV4aXN0MSh0cnVlKTtcclxuICAgICAgfSBlbHNlIGlmIChwcm9wcy5zdHJ1Y3R1cmVbMV0ubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgc2V0RXhpc3QxKHRydWUpO1xyXG4gICAgICAgIHNldEV4aXN0Mih0cnVlKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhwcm9wcy5pZCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHByb3BzLnN0cnVjdHVyZSk7XHJcbiAgICB9XHJcbiAgICBpZiAocHJvcHMuc3RydWN0dXJlWzJdLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgIGlmIChwcm9wcy5zdHJ1Y3R1cmVbMV0ubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgc2V0RXhpc3QzKHRydWUpO1xyXG4gICAgICB9IGVsc2UgaWYgKHByb3BzLnN0cnVjdHVyZVsxXS5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICBzZXRFeGlzdDModHJ1ZSk7XHJcbiAgICAgICAgc2V0RXhpc3Q0KHRydWUpO1xyXG4gICAgICB9IGVsc2UgaWYgKHByb3BzLnN0cnVjdHVyZVsxXS5sZW5ndGggPT09IDMpIHtcclxuICAgICAgICBzZXRFeGlzdDModHJ1ZSk7XHJcbiAgICAgICAgc2V0RXhpc3Q0KHRydWUpO1xyXG4gICAgICAgIHNldEV4aXN0NSh0cnVlKTtcclxuICAgICAgfSBlbHNlIGlmIChwcm9wcy5zdHJ1Y3R1cmVbMV0ubGVuZ3RoID09PSA0KSB7XHJcbiAgICAgICAgc2V0RXhpc3QzKHRydWUpO1xyXG4gICAgICAgIHNldEV4aXN0NCh0cnVlKTtcclxuICAgICAgICBzZXRFeGlzdDUodHJ1ZSk7XHJcbiAgICAgICAgc2V0RXhpc3Q2KHRydWUpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKHByb3BzLmlkKTtcclxuICAgICAgY29uc29sZS5sb2cocHJvcHMuc3RydWN0dXJlKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgaWYgKHByb3BzLmJvdWdodCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbGRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXRyaXgtaGVhZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsXCI+e3Byb3BzLmlkfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlkXCI+e3Byb3BzLmNvc3R9PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxGaXJzdExpbmUgZXhpc3QxPXtleGlzdDF9IGV4aXN0Mj17ZXhpc3QyfSAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcXVhcmVzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RydWNcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdHJ1Y1wiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8U2Vjb25kTGluZVxyXG4gICAgICAgICAgICBleGlzdDM9e2V4aXN0M31cclxuICAgICAgICAgICAgZXhpc3Q0PXtleGlzdDR9XHJcbiAgICAgICAgICAgIGV4aXN0NT17ZXhpc3Q1fVxyXG4gICAgICAgICAgICBleGlzdDY9e2V4aXN0Nn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmhvbGRlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWF0cml4LWhlYWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMzEsIDE2OSwgMjU1KTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgIDI3MGRlZyxcclxuICAgICAgICAgICAgICByZ2JhKDMxLCAxNjksIDI1NSwgMSkgMzElLFxyXG4gICAgICAgICAgICAgIHJnYmEoMjEsIDExNywgMjUxLCAxKSA3NyVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDE1MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubGV2ZWwge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzM4ZWZmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaWQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmxpbmVzIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0byBhdXRvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLml0ZW1zIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCAxMDBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmRvd25saW5lcyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggMTAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3F1YXJlcyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggMTAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3RydWMge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0bztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaXRlbXM0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDUwcHggNTBweCA1MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmRvd25saW5lczQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggNTBweCA1MHB4IDUwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY2lyY2xlIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDEuNXB4IHNvbGlkICMxZWE2ZmY7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxZWE2ZmY7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0byBhdXRvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9sZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hdHJpeC1oZWFkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWxcIj57cHJvcHMuaWR9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWRcIj57cHJvcHMuY29zdH08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEZpcnN0TGluZSBleGlzdD17cHJvcHMuYm91Z2h0fSAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcXVhcmVzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RydWNcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdHJ1Y1wiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8U2Vjb25kTGluZSBleGlzdD17cHJvcHMuYm91Z2h0fSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5ob2xkZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1hdHJpeC1oZWFkIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogZ3JleTtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDE1MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubGV2ZWwge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzM4ZWZmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaWQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmxpbmVzIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0byBhdXRvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLml0ZW1zIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCAxMDBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmRvd25saW5lcyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggMTAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3F1YXJlcyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggMTAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3RydWMge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0bztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaXRlbXM0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDUwcHggNTBweCA1MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmRvd25saW5lczQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggNTBweCA1MHB4IDUwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY2lyY2xlIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDEuNXB4IHNvbGlkICMxZWE2ZmY7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxZWE2ZmY7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0byBhdXRvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFg0bWF0cml4O1xyXG5cclxuLy8gI2ZkODU3NlxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\components\\\\matrix\\\\X4matrix.jsx */"));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (X4matrix); // #fd8576

/***/ }),

/***/ "./components/matrix/x4structure/CircleBlue.jsx":
/*!******************************************************!*\
  !*** ./components/matrix/x4structure/CircleBlue.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\crfab\\Desktop\\forsage-boilerplate\\components\\matrix\\x4structure\\CircleBlue.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const CircleBlue = props => {
  if (props.exist === true) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
      className: "jsx-3071601901" + " " + "circle",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 9
      }
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3071601901",
      __self: undefined
    }, ".circle.jsx-3071601901{height:30px;width:30px;border-radius:50%;border:1.5px solid #1ea6ff;background:#1ea6ff;margin:auto auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXG1hdHJpeFxceDRzdHJ1Y3R1cmVcXENpcmNsZUJsdWUuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtvQixBQUdxQixZQUNLLFdBQ08sa0JBQ1MsMkJBQ1IsbUJBQ0YsaUJBQ3pCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXG1hdHJpeFxceDRzdHJ1Y3R1cmVcXENpcmNsZUJsdWUuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ2lyY2xlQmx1ZSA9IChwcm9wcykgPT4ge1xyXG4gIGlmIChwcm9wcy5leGlzdCA9PT0gdHJ1ZSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZVwiPjwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLmNpcmNsZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICBib3JkZXI6IDEuNXB4IHNvbGlkICMxZWE2ZmY7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzFlYTZmZjtcclxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0bztcclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlLWVtcHR5XCI+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmNpcmNsZS1lbXB0eSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjMWVhNmZmO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaXJjbGVCbHVlO1xyXG5cclxuLy8gI2ZkODU3NlxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\components\\\\matrix\\\\x4structure\\\\CircleBlue.jsx */"));
  } else {
    return __jsx("div", {
      className: "jsx-4076197635" + " " + "circle-empty",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 7
      }
    }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "4076197635",
      __self: undefined
    }, ".circle-empty.jsx-4076197635{height:30px;width:30px;border-radius:50%;border:1.5px solid #1ea6ff;background:none;margin:auto auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXG1hdHJpeFxceDRzdHJ1Y3R1cmVcXENpcmNsZUJsdWUuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Cb0IsQUFHeUIsWUFDRCxXQUNPLGtCQUNTLDJCQUNYLGdCQUNDLGlCQUNuQiIsImZpbGUiOiJDOlxcVXNlcnNcXGNyZmFiXFxEZXNrdG9wXFxmb3JzYWdlLWJvaWxlcnBsYXRlXFxjb21wb25lbnRzXFxtYXRyaXhcXHg0c3RydWN0dXJlXFxDaXJjbGVCbHVlLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENpcmNsZUJsdWUgPSAocHJvcHMpID0+IHtcclxuICBpZiAocHJvcHMuZXhpc3QgPT09IHRydWUpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVcIj48L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5jaXJjbGUge1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjMWVhNmZmO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxZWE2ZmY7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZS1lbXB0eVwiPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5jaXJjbGUtZW1wdHkge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMS41cHggc29saWQgIzFlYTZmZjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2lyY2xlQmx1ZTtcclxuXHJcbi8vICNmZDg1NzZcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\components\\\\matrix\\\\x4structure\\\\CircleBlue.jsx */"));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (CircleBlue); // #fd8576

/***/ }),

/***/ "./components/matrix/x4structure/FirstLine.jsx":
/*!*****************************************************!*\
  !*** ./components/matrix/x4structure/FirstLine.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CircleBlue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CircleBlue */ "./components/matrix/x4structure/CircleBlue.jsx");
var _jsxFileName = "C:\\Users\\crfab\\Desktop\\forsage-boilerplate\\components\\matrix\\x4structure\\FirstLine.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const FirstLine = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-991766595" + " " + "items",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-991766595" + " " + "lines",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "jsx-991766595" + " " + "lines",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "jsx-991766595" + " " + "downlines",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx(_CircleBlue__WEBPACK_IMPORTED_MODULE_2__["default"], {
    exist: props.exist1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }), __jsx(_CircleBlue__WEBPACK_IMPORTED_MODULE_2__["default"], {
    exist: props.exist2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "jsx-991766595" + " " + "items",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-991766595" + " " + "lines",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "jsx-991766595" + " " + "lines",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "991766595",
    __self: undefined
  }, ".lines.jsx-991766595{height:25px;width:2px;background:lightblue;margin:auto auto;}.items.jsx-991766595{display:grid;grid-template-columns:100px 100px;text-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.downlines.jsx-991766595{display:grid;grid-template-columns:100px 100px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXG1hdHJpeFxceDRzdHJ1Y3R1cmVcXEZpcnN0TGluZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JrQixBQUd1QixBQU1DLEFBTUEsWUFYSCxDQU13QixBQU1BLFNBWGIscUJBQ0osSUFLQyxBQU1wQixhQVZBLEtBS3FCLDZGQUNyQiIsImZpbGUiOiJDOlxcVXNlcnNcXGNyZmFiXFxEZXNrdG9wXFxmb3JzYWdlLWJvaWxlcnBsYXRlXFxjb21wb25lbnRzXFxtYXRyaXhcXHg0c3RydWN0dXJlXFxGaXJzdExpbmUuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENpcmNsZUJsdWUgZnJvbSBcIi4vQ2lyY2xlQmx1ZVwiO1xyXG5jb25zdCBGaXJzdExpbmUgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVzXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvd25saW5lc1wiPlxyXG4gICAgICAgIDxDaXJjbGVCbHVlIGV4aXN0PXtwcm9wcy5leGlzdDF9IC8+XHJcbiAgICAgICAgPENpcmNsZUJsdWUgZXhpc3Q9e3Byb3BzLmV4aXN0Mn0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVzXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lc1wiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5saW5lcyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pdGVtcyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCAxMDBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kb3dubGluZXMge1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggMTAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlyc3RMaW5lO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\components\\\\matrix\\\\x4structure\\\\FirstLine.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (FirstLine);

/***/ }),

/***/ "./components/matrix/x4structure/SecondLine.jsx":
/*!******************************************************!*\
  !*** ./components/matrix/x4structure/SecondLine.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CircleBlue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CircleBlue */ "./components/matrix/x4structure/CircleBlue.jsx");
var _jsxFileName = "C:\\Users\\crfab\\Desktop\\forsage-boilerplate\\components\\matrix\\x4structure\\SecondLine.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const SecondLine = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-190261827" + " " + "items4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-190261827" + " " + "lines",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "jsx-190261827" + " " + "lines",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "jsx-190261827" + " " + "lines",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "jsx-190261827" + " " + "lines",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "jsx-190261827" + " " + "downlines4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx(_CircleBlue__WEBPACK_IMPORTED_MODULE_2__["default"], {
    exist: props.exist3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }), __jsx(_CircleBlue__WEBPACK_IMPORTED_MODULE_2__["default"], {
    exist: props.exist4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }), __jsx(_CircleBlue__WEBPACK_IMPORTED_MODULE_2__["default"], {
    exist: props.exist5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }), __jsx(_CircleBlue__WEBPACK_IMPORTED_MODULE_2__["default"], {
    exist: props.exist6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "190261827",
    __self: undefined
  }, ".lines.jsx-190261827{height:25px;width:2px;background:lightblue;margin:auto auto;}.items4.jsx-190261827{display:grid;grid-template-columns:50px 50px 50px 50px;}.downlines4.jsx-190261827{display:grid;grid-template-columns:50px 50px 50px 50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXG1hdHJpeFxceDRzdHJ1Y3R1cmVcXFNlY29uZExpbmUuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCa0IsQUFHdUIsQUFNQyxBQUlBLFlBVEgsQ0FNZ0MsQUFJQSxTQVRyQixxQkFDSixZQUtuQixBQUlBLEtBUkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxjcmZhYlxcRGVza3RvcFxcZm9yc2FnZS1ib2lsZXJwbGF0ZVxcY29tcG9uZW50c1xcbWF0cml4XFx4NHN0cnVjdHVyZVxcU2Vjb25kTGluZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2lyY2xlQmx1ZSBmcm9tIFwiLi9DaXJjbGVCbHVlXCI7XHJcbmNvbnN0IFNlY29uZExpbmUgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtczRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVzXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lc1wiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVzXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvd25saW5lczRcIj5cclxuICAgICAgICA8Q2lyY2xlQmx1ZSBleGlzdD17cHJvcHMuZXhpc3QzfSAvPlxyXG4gICAgICAgIDxDaXJjbGVCbHVlIGV4aXN0PXtwcm9wcy5leGlzdDR9IC8+XHJcbiAgICAgICAgPENpcmNsZUJsdWUgZXhpc3Q9e3Byb3BzLmV4aXN0NX0gLz5cclxuICAgICAgICA8Q2lyY2xlQmx1ZSBleGlzdD17cHJvcHMuZXhpc3Q2fSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5saW5lcyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pdGVtczQge1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCA1MHB4IDUwcHggNTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRvd25saW5lczQge1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCA1MHB4IDUwcHggNTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWNvbmRMaW5lO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\components\\\\matrix\\\\x4structure\\\\SecondLine.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (SecondLine);

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
      parnterCount: "",
      page: "main"
    };
  }

  render() {
    if (this.state.loading === true) {
      return __jsx(_components_Spinner__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 14
        }
      });
    } else {
      if (this.state.isExist === true) {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_7__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }
        }), __jsx("div", {
          className: "jsx-2544248236" + " " + "dashboard",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }
        }, __jsx(_components_InfoHeader__WEBPACK_IMPORTED_MODULE_8__["default"], {
          totalUsers: this.state.totalUsers,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 15
          }
        }), __jsx("div", {
          className: "jsx-2544248236" + " " + "pagination",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 15
          }
        }, __jsx("div", {
          className: "jsx-2544248236" + " " + "small-box",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105,
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
            lineNumber: 106,
            columnNumber: 19
          }
        })), __jsx("div", {
          className: "jsx-2544248236" + " " + "big-box",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 17
          }
        }, __jsx(_components_matrix_MatrixSystem__WEBPACK_IMPORTED_MODULE_10__["default"], {
          account: this.state.account,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 19
          }
        }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          id: "2544248236",
          __self: this
        }, ".dashboard.jsx-2544248236{background:rgba(16,1,62,1);width:100vw;max-width:1420px;margin:auto auto;padding:5px;}.pagination.jsx-2544248236{margin-top:2vh;display:grid;grid-template-columns:30% 65%;grid-gap:5%;}@media only screen and (max-width:900px){.pagination.jsx-2544248236{grid-template-columns:1fr;grid-gap:5%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXHBhZ2VzXFxkYXNoYm9hcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0gwQixBQUdpRCxBQU9mLEFBT2EsZUFOZixXQU9DLENBZEYsQ0FRa0IsVUFPOUIsQ0FkaUIsaUJBQ0EsRUFPTCxZQUNkLEdBUGMsWUFDZCIsImZpbGUiOiJDOlxcVXNlcnNcXGNyZmFiXFxEZXNrdG9wXFxmb3JzYWdlLWJvaWxlcnBsYXRlXFxwYWdlc1xcZGFzaGJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xyXG5pbXBvcnQgeyBBQkksIEFERFJFU1MgfSBmcm9tIFwiLi4vdXRpbHMvZ2xvYmFsc1wiO1xyXG5pbXBvcnQgeyBsb2FkV2ViMyB9IGZyb20gXCIuLi91dGlscy91dGlsaXR5XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi9jb21wb25lbnRzL1NwaW5uZXJcIjtcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgSW5mb0hlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9JbmZvSGVhZGVyXCI7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuLi9jb21wb25lbnRzL3NpZGViYXIvU2lkZWJhclwiO1xyXG5pbXBvcnQgTWF0cml4U3lzdGVtIGZyb20gXCIuLi9jb21wb25lbnRzL21hdHJpeC9NYXRyaXhTeXN0ZW1cIjtcclxuXHJcbi8vIENvbnRleHQgQVBJXHJcbmltcG9ydCBBY2NvdW50Q29udGV4dCBmcm9tIFwiLi4vY29tcG9uZW50cy9BY2NvdW50Q29udGV4dFwiO1xyXG5cclxuY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgY29udGV4dFR5cGUgPSBBY2NvdW50Q29udGV4dDtcclxuXHJcbiAgYXN5bmMgVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBhY2NvdW50OiB0aGlzLmNvbnRleHQuYWNjb3VudCB9KTtcclxuICAgIGF3YWl0IGxvYWRXZWIzKCk7XHJcbiAgICBhd2FpdCB0aGlzLmxvYWRCbG9ja2NoYWluRGF0YSgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgbG9hZEJsb2NrY2hhaW5EYXRhKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgd2ViMyA9IG5ldyBXZWIzKFdlYjMuZ2l2ZW5Qcm92aWRlciB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6ODU0NVwiKTtcclxuICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoQUJJLCBBRERSRVNTKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRyYWN0IH0pO1xyXG4gICAgICBjb25zdCBhZGRyZXNzID0gQUREUkVTUztcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFkZHJlc3MgfSk7XHJcblxyXG4gICAgICBjb25zdCB1c2VySWQgPSBhd2FpdCB0aGlzLnN0YXRlLmNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAudXNlcnModGhpcy5zdGF0ZS5hY2NvdW50KVxyXG4gICAgICAgIC5jYWxsKCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHVzZXJJZHM6IHVzZXJJZC5pZCxcclxuICAgICAgICBwYXJudGVyQ291bnQ6IHVzZXJJZC5wYXJ0bmVyc0NvdW50LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgdXNlckNvdW50ID0gYXdhaXQgdGhpcy5zdGF0ZS5jb250cmFjdC5tZXRob2RzLmxhc3RVc2VySWQoKS5jYWxsKCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0b3RhbFVzZXJzOiB1c2VyQ291bnQgfSk7XHJcbiAgICAgIGNvbnN0IGJhbGFuY2UgPSBhd2FpdCB0aGlzLnN0YXRlLmNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAuYmFsYW5jZXModGhpcy5zdGF0ZS5hY2NvdW50KVxyXG4gICAgICAgIC5jYWxsKCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBiYWxhbmNlIH0pO1xyXG5cclxuICAgICAgLy8gTWF0cml4IENhbGxzXHJcbiAgICAgIGNvbnN0IGNvc3RzID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy5yZWdpc3RyYXRpb25Db3N0KCkuY2FsbCgpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY29zdDogY29zdHMgfSk7XHJcblxyXG4gICAgICAvLyBFcnJvciBDYXRjaCAtPiBGZXRjaCB0aGUgbmV3IERhdGEgZGlyZWN0bHkgZnJvbSB3ZWIzIHByb3ZpZGVyIGFmdGVyIHJlbG9hZFxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyhXZWIzLmdpdmVuUHJvdmlkZXIgfHwgXCJodHRwOi8vbG9jYWxob3N0Ojg1NDVcIik7XHJcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFjY291bnQ6IGFjY291bnRzWzBdIH0pO1xyXG4gICAgICBjb25zdCBjb250cmFjdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChBQkksIEFERFJFU1MpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY29udHJhY3QgfSk7XHJcbiAgICAgIGNvbnN0IGFkZHJlc3MgPSBBRERSRVNTO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYWRkcmVzcyB9KTtcclxuICAgICAgY29uc3QgaXNFeGlzdHMgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgLmlzVXNlckV4aXN0cyh0aGlzLnN0YXRlLmFjY291bnQpXHJcbiAgICAgICAgLmNhbGwoKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRXhpc3Q6IGlzRXhpc3RzIH0pO1xyXG4gICAgICAvLyBCdW5kbGVkIFByb21pc2VzXHJcbiAgICAgIGNvbnN0IHVzZXJJZCA9IGF3YWl0IHRoaXMuc3RhdGUuY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgIC51c2Vycyh0aGlzLnN0YXRlLmFjY291bnQpXHJcbiAgICAgICAgLmNhbGwoKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgdXNlcklkczogdXNlcklkLmlkLFxyXG4gICAgICAgIHBhcm50ZXJDb3VudDogdXNlcklkLnBhcnRuZXJzQ291bnQsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB1c2VyQ291bnQgPSBhd2FpdCB0aGlzLnN0YXRlLmNvbnRyYWN0Lm1ldGhvZHMubGFzdFVzZXJJZCgpLmNhbGwoKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRvdGFsVXNlcnM6IHVzZXJDb3VudCB9KTtcclxuICAgICAgY29uc3QgYmFsYW5jZSA9IGF3YWl0IHRoaXMuc3RhdGUuY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgIC5iYWxhbmNlcyh0aGlzLnN0YXRlLmFjY291bnQpXHJcbiAgICAgICAgLmNhbGwoKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJhbGFuY2UgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgYWNjb3VudDogXCJcIixcclxuICAgICAgaXNFeGlzdDogdHJ1ZSxcclxuICAgICAgdXNlcklkczogXCJcIixcclxuICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgdG90YWxVc2VyczogXCJcIixcclxuICAgICAgcGFybnRlckNvdW50OiBcIlwiLFxyXG4gICAgICBwYWdlOiBcIm1haW5cIixcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5sb2FkaW5nID09PSB0cnVlKSB7XHJcbiAgICAgIHJldHVybiA8U3Bpbm5lciAvPjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLmlzRXhpc3QgPT09IHRydWUpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPE5hdmlnYXRpb24gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoYm9hcmRcIj5cclxuICAgICAgICAgICAgICA8SW5mb0hlYWRlciB0b3RhbFVzZXJzPXt0aGlzLnN0YXRlLnRvdGFsVXNlcnN9IC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8U2lkZWJhclxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZHM9e3RoaXMuc3RhdGUudXNlcklkc31cclxuICAgICAgICAgICAgICAgICAgICBwYXJ0bmVyc0NvdW50PXt0aGlzLnN0YXRlLnBhcm50ZXJDb3VudH1cclxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnN0YXRlLmFjY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcz17dGhpcy5zdGF0ZS5hZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgIGJhbGFuY2U9e3RoaXMuc3RhdGUuYmFsYW5jZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWctYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxNYXRyaXhTeXN0ZW0gYWNjb3VudD17dGhpcy5zdGF0ZS5hY2NvdW50fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5kYXNoYm9hcmQge1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2LCAxLCA2MiwgMSk7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0byBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucGFnaW5hdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJ2aDtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgNjUlO1xyXG4gICAgICAgICAgICAgICAgICBncmlkLWdhcDogNSU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgIC5wYWdpbmF0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICAgICAgICAgICAgICBncmlkLWdhcDogNSU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBSb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\pages\\\\dashboard.js */")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FjY291bnRDb250ZXh0LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0luZm9IZWFkZXIuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2aWdhdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TcGlubmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2luZm9oZWFkZXIvSXRlbUhvbGRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tYXRyaXgvQ2lyY2xlLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21hdHJpeC9NYXRyaXhTeXN0ZW0uanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWF0cml4L1gzTWF0cml4SG9sZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21hdHJpeC9YM21hdHJpeC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tYXRyaXgvWDRNYXRyaXhIb2xkZXIuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWF0cml4L1g0bWF0cml4LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21hdHJpeC94NHN0cnVjdHVyZS9DaXJjbGVCbHVlLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21hdHJpeC94NHN0cnVjdHVyZS9GaXJzdExpbmUuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWF0cml4L3g0c3RydWN0dXJlL1NlY29uZExpbmUuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2lkZWJhci9EaXZpZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NpZGViYXIvU2lkZWJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaWRlYmFyL1NpZGViYXJDb250ZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NpZGViYXIvVXNlckNvbnRlbnQuanN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9kYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZ2xvYmFscy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy91dGlsaXR5LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndlYjNcIiJdLCJuYW1lcyI6WyJBY2NvdW50Q29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsIkFjY291bnRQcm92aWRlciIsIkNvbXBvbmVudCIsImFjY291bnQiLCJzZXRTdGF0ZSIsInByZXZTdGF0ZSIsInJlbmRlciIsImNoaWxkcmVuIiwicHJvcHMiLCJzdGF0ZSIsInNldEFjY291bnQiLCJJbmZvSGVhZGVyIiwidG90YWxVc2VycyIsIk5hdmlnYXRpb24iLCJTcGlubmVyIiwiSXRlbUhvbGRlciIsInBpYyIsInRpdGxlIiwiYW1vdW50IiwiQ2lyY2xlIiwiZXhpc3QiLCJNYXRyaXhTeXN0ZW0iLCJVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50IiwibG9hZFdlYjMiLCJsb2FkQmxvY2tjaGFpbkRhdGEiLCJlcnIiLCJ3aW5kb3ciLCJhbGVydCIsIndlYjMiLCJXZWIzIiwiZ2l2ZW5Qcm92aWRlciIsImNvbnRyYWN0IiwiZXRoIiwiQ29udHJhY3QiLCJBQkkiLCJBRERSRVNTIiwiY29zdHMiLCJtZXRob2RzIiwicmVnaXN0cmF0aW9uQ29zdCIsImNhbGwiLCJfY29zdHMiLCJ1dGlscyIsImZyb21XZWkiLCJjb3N0IiwieDMiLCJpIiwicmVzIiwidXNlcnNYM01hdHJpeCIsInB1c2giLCJsZXZlbCIsInVzZXJYMyIsImVsZW1lbnRzWDMiLCJqIiwiZG93bmxpbmVzIiwibGVuZ3RoIiwiaWQiLCJudW1iZXIiLCJrZXkiLCJ4M0V4aXN0IiwidXNlcnNBY3RpdmVYM0xldmVscyIsInVzZXJYM0V4aXN0IiwieDNQYXlsb2FkIiwieDNJbmZvcyIsIng0RXhpc3QiLCJ1c2Vyc0FjdGl2ZVg2TGV2ZWxzIiwidXNlclg0RXhpc3QiLCJ4NiIsInVzZXJzWDZNYXRyaXgiLCJ1c2VyWDYiLCJ4NlBheWxvYWQiLCJhcnIxIiwiYXJyMiIsIm1hcCIsIml0ZW0iLCJPYmplY3QiLCJhc3NpZ24iLCJjb25zdHJ1Y3RvciIsInBhcm50ZXJDb3VudCIsIlgzTWF0cml4SG9sZGVyIiwicmVsb2FkIiwic2V0UmVsb2FkIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHJ1YyIsInVuZGVmaW5lZCIsIm1hdHJpeCIsImluZGV4IiwiWDNtYXRyaXgiLCJib3VnaHQiLCJhY3RpdmUiLCJYNE1hdHJpeEhvbGRlciIsImNvbnNvbGUiLCJsb2ciLCJYNG1hdHJpeCIsImV4aXN0MSIsInNldEV4aXN0MSIsImV4aXN0MiIsInNldEV4aXN0MiIsImV4aXN0MyIsInNldEV4aXN0MyIsImV4aXN0NCIsInNldEV4aXN0NCIsImV4aXN0NSIsInNldEV4aXN0NSIsImV4aXN0NiIsInNldEV4aXN0NiIsInN0cnVjdHVyZSIsIkNpcmNsZUJsdWUiLCJGaXJzdExpbmUiLCJTZWNvbmRMaW5lIiwiRGl2aWRlciIsIlNpZGViYXIiLCJ1c2VySWRzIiwicGFydG5lcnNDb3VudCIsImJhbGFuY2UiLCJCQVNFX1VSTCIsImFkZHJlc3MiLCJTaWRlYmFyQ29udGVudCIsImJhbGFuY2VfdXNkIiwiYmFsYW5jZV9ldGgiLCJVc2VyQ29udGVudCIsImNvcHlTdWNjZXNzIiwic2V0Q29weVN1Y2Nlc3MiLCJpbnB1dFJlZiIsInVzZVJlZiIsImNvcHlUb0NsaXBib2FyZCIsImUiLCJjdXJyZW50Iiwic2VsZWN0IiwiZG9jdW1lbnQiLCJleGVjQ29tbWFuZCIsInRhcmdldCIsImZvY3VzIiwicGxhY2Vob2xkZXIiLCJxdWVyeUNvbW1hbmRTdXBwb3J0ZWQiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJyb3V0ZXIiLCJocmVmIiwiZXZlbnQiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJoYXNXYXJuZWQiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEhyZWYiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsInByZWZldGNoIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUHJvcHMiLCJyZWYiLCJlbCIsInNldENoaWxkRWxtIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJ3YXJuIiwiUHJvcFR5cGVzIiwicmVxdWlyZSIsImV4YWN0IiwiTGluayIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInZhbHVlIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJQQUdFX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhZGRCYXNlUGF0aCIsInJlc29sdmVIcmVmIiwic2V0VGltZW91dCIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJyb3V0ZSIsInF1ZXJ5IiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiX19ORVhUX0RBVEFfXyIsInVwZGF0ZSIsIm1vZCIsImRhdGEiLCJuZXdEYXRhIiwiYmFjayIsIm9wdGlvbnMiLCJwcmVwYXJlVXJsQXMiLCJpc0xvY2FsVVJMIiwiU1QiLCJwZXJmb3JtYW5jZSIsImNsZWFuZWRBcyIsImRlbEJhc2VQYXRoIiwicGFyc2VkIiwidHJ5UGFyc2VSZWxhdGl2ZVVybCIsIm1ldGhvZCIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwibWlzc2luZ1BhcmFtcyIsInBhcmFtIiwiYXNQYXRobmFtZSIsInJvdXRlSW5mbyIsImFwcENvbXAiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiZXJyb3IiLCJjYWNoZWRSb3V0ZUluZm8iLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJoYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiUHJvbWlzZSIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImVuY29kZVVSSUNvbXBvbmVudCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsInNlYXJjaFBhcmFtcyIsIkFycmF5IiwicmVzdWx0Iiwic2VhcmNoUGFyYW1zTGlzdCIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsIm9wdGlvbmFsIiwicmVwZWF0Iiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwic2VnbWVudCIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwiaXNOYU4iLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiRGFzaGJvYXJkIiwiY29udGV4dCIsImxvYWRpbmciLCJ1c2VySWQiLCJ1c2VycyIsInVzZXJDb3VudCIsImxhc3RVc2VySWQiLCJiYWxhbmNlcyIsImFjY291bnRzIiwiZ2V0QWNjb3VudHMiLCJpc0V4aXN0cyIsImlzVXNlckV4aXN0cyIsImlzRXhpc3QiLCJ0eXBlIiwic3RhdGVNdXRhYmlsaXR5IiwicGF5YWJsZSIsIm91dHB1dHMiLCJpbnRlcm5hbFR5cGUiLCJpbnB1dHMiLCJjb25zdGFudCIsImluZGV4ZWQiLCJhbm9ueW1vdXMiLCJPV05FUiIsImV0aGVyZXVtIiwiZW5hYmxlIiwiY3VycmVudFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztR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QUNtVyxRQUFoQixDQUFkO0FBQ0EsWUFBTW5XLE1BQU0sQ0FBQ21XLFFBQVAsQ0FBZ0JDLE1BQWhCLEVBQU47QUFDRCxLQUhELE1BR08sSUFBSXBXLE1BQU0sQ0FBQ0UsSUFBWCxFQUFpQjtBQUN0QkYsWUFBTSxDQUFDRSxJQUFQLEdBQWMsSUFBSUMsMkNBQUosQ0FBU0gsTUFBTSxDQUFDRSxJQUFQLENBQVltVyxlQUFyQixDQUFkO0FBQ0QsS0FGTSxNQUVBO0FBQ0xyVyxZQUFNLENBQUNDLEtBQVAsQ0FDRSxxRUFERjtBQUdEO0FBQ0YsR0FYRCxDQVdFLE9BQU9GLEdBQVAsRUFBWTtBQUNaQyxVQUFNLENBQUNDLEtBQVAsQ0FBYSwyQ0FBYjtBQUNEO0FBQ0YsQ0FmTSxDOzs7Ozs7Ozs7OztBQ0xQLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6InBhZ2VzL2Rhc2hib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvZGFzaGJvYXJkLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEFjY291bnRDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IEFjY291bnRQcm92aWRlciA9IEFjY291bnRDb250ZXh0LlByb3ZpZGVyO1xyXG4vLyBleHBvcnQgY29uc3QgQWNjb3VudENvbnN1bWVyID0gQWNjb3VudENvbnRleHQuQ29uc3VtZXI7XHJcblxyXG5jbGFzcyBBY2NvdW50UHJvdmlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIC8vIGNvbnRleHQgc3RhdGVcclxuICBzdGF0ZSA9IHtcclxuICAgIGFjY291bnQ6IFwiXCIsXHJcbiAgfTtcclxuXHJcbiAgLy9NZXRob2QgdG8gdXBkYXRlXHJcbiAgc2V0QWNjb3VudCA9IChhY2NvdW50KSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7IGFjY291bnQgfSkpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCB7IGFjY291bnQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCB7IHNldEFjY291bnQgfSA9IHRoaXM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEFjY291bnRDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgIGFjY291bnQsXHJcbiAgICAgICAgICBzZXRBY2NvdW50LFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvQWNjb3VudENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgQWNjb3VudFByb3ZpZGVyIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50Q29udGV4dDtcclxuIiwiaW1wb3J0IEl0ZW1Ib2xkZXIgZnJvbSBcIi4vaW5mb2hlYWRlci9JdGVtSG9sZGVyXCI7XHJcblxyXG5jb25zdCBJbmZvSGVhZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1tYXJnaW5cIj5cclxuICAgICAgPEl0ZW1Ib2xkZXJcclxuICAgICAgICBwaWM9XCIvYXNzZXRzL2ltZy91c2VyX2ljb24ucG5nXCJcclxuICAgICAgICB0aXRsZT1cIkFsbCBQYXJ0aWNpcGFudHNcIlxyXG4gICAgICAgIGFtb3VudD17cHJvcHMudG90YWxVc2Vyc31cclxuICAgICAgLz5cclxuICAgICAgPEl0ZW1Ib2xkZXJcclxuICAgICAgICBwaWM9XCIvYXNzZXRzL2ltZy9sYXN0XzI0LmpwZ1wiXHJcbiAgICAgICAgdGl0bGU9XCJKb2luZWQgaW4gMjQgaG91cnNcIlxyXG4gICAgICAgIGFtb3VudD17cHJvcHMudG90YWxVc2Vyc31cclxuICAgICAgLz5cclxuICAgICAgPEl0ZW1Ib2xkZXJcclxuICAgICAgICBwaWM9XCIvYXNzZXRzL2ltZy9ldGhlcmV1bS5qcGdcIlxyXG4gICAgICAgIHRpdGxlPVwiUGFydGljaXBhbnQgTUFUSUNcIlxyXG4gICAgICAgIGFtb3VudD17cHJvcHMudG90YWxVc2VycyAqIDMwMH1cclxuICAgICAgLz5cclxuICAgICAgPEl0ZW1Ib2xkZXJcclxuICAgICAgICBwaWM9XCIvYXNzZXRzL2ltZy9ldXJvLmpwZ1wiXHJcbiAgICAgICAgdGl0bGU9XCJQYXJ0aWNpcGFudCBVU0RcIlxyXG4gICAgICAgIGFtb3VudD17cHJvcHMudG90YWxVc2VycyAqIDMwMCAqIDEzMH1cclxuICAgICAgLz5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5pbmZvLW1hcmdpbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XHJcbiAgICAgICAgICBncmlkLWdhcDogNTBweDtcclxuICAgICAgICAgIG1hcmdpbjogYXV0byBhdXRvO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTB2aDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmZvSGVhZGVyO1xyXG4iLCJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBOYXZpZ2F0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2PlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9kYXNoYm9hcmRcIj5cclxuICAgICAgICAgICAgPGEgdGl0bGU9XCJcIj5NYWluPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9vZmZpY2VcIj5cclxuICAgICAgICAgICAgPGEgdGl0bGU9XCJcIj5PZmZpY2U8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICB7LyogPGxpPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIlwiPlxyXG4gICAgICAgICAgICA8YSB0aXRsZT1cIlwiPlBhcnRuZXJzPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+ICovfVxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc3RhdGlzdGljc1wiPlxyXG4gICAgICAgICAgICA8YSB0aXRsZT1cIlwiPlN0YXRpc3RpY3M8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICB7LyogPGxpPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIlwiPlxyXG4gICAgICAgICAgICA8YSB0aXRsZT1cIlwiPkdvYWw8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT4gKi99XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9pbnN0cnVjdGlvbnNcIj5cclxuICAgICAgICAgICAgPGEgdGl0bGU9XCJcIj5JbnN0cnVjdGlvbnM8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIG5hdiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI4LCAyMiwgODUsIDEpO1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgY29sb3I6IGdyZXg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYXYgdWwge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyOCwgMjIsIDg1LCAxKTtcclxuICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgLXdlYmtpdC1tYXJnaW4tYmVmb3JlOiAwO1xyXG4gICAgICAgICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xyXG4gICAgICAgICAgLXdlYmtpdC1tYXJnaW4tYWZ0ZXI6IDA7XHJcbiAgICAgICAgICBtYXJnaW4tYmxvY2stZW5kOiAwO1xyXG4gICAgICAgICAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYXYgZmlndXJlIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYXYgdWwgbGkge1xyXG4gICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmF2IHVsIGxpIGEge1xyXG4gICAgICAgICAgY29sb3I6ICM2YTY2OGY7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjtcclxuIiwiY29uc3QgU3Bpbm5lciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJob2xkZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFydC1ob2xkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxkcy1oZWFydFwiPlxyXG4gICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aDE+Q29ubmVjdGluZyB0byB0aGUgQ29udHJhY3QgYW5kIGdldHRpbmcgeW91ciBEYXNoYm9hcmQ8L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuaG9sZGVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMjAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaGVhcnQtaG9sZGVyIHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgIG1hcmdpbjogYXV0byBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGRzLWhlYXJ0IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNDBweCA0MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGRzLWhlYXJ0IGRpdiB7XHJcbiAgICAgICAgICB0b3A6IDMycHg7XHJcbiAgICAgICAgICBsZWZ0OiAzMnB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICAgICAgICBhbmltYXRpb246IGxkcy1oZWFydCAxLjJzIGluZmluaXRlIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGRzLWhlYXJ0IGRpdjphZnRlcixcclxuICAgICAgICAubGRzLWhlYXJ0IGRpdjpiZWZvcmUge1xyXG4gICAgICAgICAgY29udGVudDogXCIgXCI7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGRzLWhlYXJ0IGRpdjpiZWZvcmUge1xyXG4gICAgICAgICAgbGVmdDogLTI0cHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCUgMCAwIDUwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxkcy1oZWFydCBkaXY6YWZ0ZXIge1xyXG4gICAgICAgICAgdG9wOiAtMjRweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgMCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAa2V5ZnJhbWVzIGxkcy1oZWFydCB7XHJcbiAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA1JSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDM5JSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44NSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA0NSUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgNjAlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTcGlubmVyO1xyXG4iLCJjb25zdCBJdGVtSG9sZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidXBwZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJob2xkZXJcIj5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImRpc3BsYXlcIiBzcmM9e3Byb3BzLnBpY30gLz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgzPntwcm9wcy50aXRsZX08L2gzPlxyXG4gICAgICAgICAgPGgzPntwcm9wcy5hbW91bnR9PC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAudXBwZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyOCwgMjIsIDg1LCAxKTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ob2xkZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODBweCBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGlzcGxheSB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXRlbUhvbGRlcjtcclxuIiwiY29uc3QgQ2lyY2xlID0gKHByb3BzKSA9PiB7XHJcbiAgaWYgKHByb3BzLmV4aXN0ID09PSB0cnVlKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlXCI+PC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgLmNpcmNsZSB7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjMWVhNmZmO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMWVhNmZmO1xyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlLWVtcHR5XCI+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmNpcmNsZS1lbXB0eSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjMWVhNmZmO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENpcmNsZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgWDNNYXRyaXhIb2xkZXIgZnJvbSBcIi4vWDNNYXRyaXhIb2xkZXJcIjtcclxuaW1wb3J0IFg0TWF0cml4SG9sZGVyIGZyb20gXCIuL1g0TWF0cml4SG9sZGVyXCI7XHJcbmltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCI7XHJcbmltcG9ydCB7IEFCSSwgQUREUkVTUyB9IGZyb20gXCIuLi8uLi91dGlscy9nbG9iYWxzXCI7XHJcbmltcG9ydCB7IGxvYWRXZWIzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3V0aWxpdHlcIjtcclxuXHJcbmNsYXNzIE1hdHJpeFN5c3RlbSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgYXN5bmMgVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY2NvdW50OiB0aGlzLnByb3BzLmFjY291bnQgfSk7XHJcbiAgICAgIGF3YWl0IGxvYWRXZWIzKCk7XHJcbiAgICAgIGF3YWl0IHRoaXMubG9hZEJsb2NrY2hhaW5EYXRhKCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiU29tZXRoaW5nIHdlbnQgd3JvbmcuLiBDaGVjazogXCIgKyBlcnIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgbG9hZEJsb2NrY2hhaW5EYXRhKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgd2ViMyA9IG5ldyBXZWIzKFdlYjMuZ2l2ZW5Qcm92aWRlciB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6ODU0NVwiKTtcclxuICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoQUJJLCBBRERSRVNTKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRyYWN0IH0pO1xyXG5cclxuICAgICAgY29uc3QgY29zdHMgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLnJlZ2lzdHJhdGlvbkNvc3QoKS5jYWxsKCk7XHJcbiAgICAgIGNvbnN0IF9jb3N0cyA9IHdlYjMudXRpbHMuZnJvbVdlaShjb3N0cywgXCJldGhlclwiKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvc3Q6IF9jb3N0cyB9KTtcclxuICAgICAgLy8gTWF0cml4IENhbGxzIGZvciB0aGUgWDNcclxuICAgICAgY29uc3QgeDMgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMzsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgICAgLnVzZXJzWDNNYXRyaXgodGhpcy5zdGF0ZS5hY2NvdW50LCBpKVxyXG4gICAgICAgICAgLmNhbGwoKTtcclxuICAgICAgICB4My5wdXNoKHtcclxuICAgICAgICAgIGxldmVsOiBpLFxyXG4gICAgICAgICAgdXNlclgzOiByZXMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZWxlbWVudHNYMyA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpKyspIHtcclxuICAgICAgICBsZXQgaiA9IGkgKyAxO1xyXG4gICAgICAgIGNvbnN0IGRvd25saW5lcyA9IHgzW2ldLnVzZXJYM1sxXS5sZW5ndGg7XHJcbiAgICAgICAgZWxlbWVudHNYMy5wdXNoKHtcclxuICAgICAgICAgIGlkOiBqLFxyXG4gICAgICAgICAgbnVtYmVyOiBkb3dubGluZXMsXHJcbiAgICAgICAgICBrZXk6IGosXHJcbiAgICAgICAgICBjb3N0OiAodGhpcy5zdGF0ZS5jb3N0IC8gMikgKiBqLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHgzRXhpc3QgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMzsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgICAgLnVzZXJzQWN0aXZlWDNMZXZlbHModGhpcy5zdGF0ZS5hY2NvdW50LCBpKVxyXG4gICAgICAgICAgLmNhbGwoKTtcclxuICAgICAgICB4M0V4aXN0LnB1c2goe1xyXG4gICAgICAgICAgaWQ6IGksXHJcbiAgICAgICAgICB1c2VyWDNFeGlzdDogcmVzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHgzUGF5bG9hZCA9IHRoaXMueDNJbmZvcyh4M0V4aXN0LCBlbGVtZW50c1gzKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHgzUGF5bG9hZCB9KTtcclxuXHJcbiAgICAgIC8vIE1hdHJpeCBDYWxscyBmb3IgdGhlIFg0XHJcbiAgICAgIGNvbnN0IHg0RXhpc3QgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMzsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgICAgLnVzZXJzQWN0aXZlWDZMZXZlbHModGhpcy5zdGF0ZS5hY2NvdW50LCBpKVxyXG4gICAgICAgICAgLmNhbGwoKTtcclxuICAgICAgICB4NEV4aXN0LnB1c2goe1xyXG4gICAgICAgICAgaWQ6IGksXHJcbiAgICAgICAgICB1c2VyWDRFeGlzdDogcmVzLFxyXG4gICAgICAgICAga2V5OiBpLFxyXG4gICAgICAgICAgY29zdDogKHRoaXMuc3RhdGUuY29zdCAvIDIpICogaSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB4NiA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDEzOyBpKyspIHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgICAudXNlcnNYNk1hdHJpeCh0aGlzLnN0YXRlLmFjY291bnQsIGkpXHJcbiAgICAgICAgICAuY2FsbCgpO1xyXG4gICAgICAgIHg2LnB1c2goe1xyXG4gICAgICAgICAgaWQ6IGksXHJcbiAgICAgICAgICB1c2VyWDY6IHJlcyxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgeDZQYXlsb2FkID0gdGhpcy54M0luZm9zKHg0RXhpc3QsIHg2KTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHg2UGF5bG9hZCB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJTb21ldGhpbmcgd2VudCB3cm9uZy4uIENoZWNrOiBcIiArIGVycik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBNZXJnaW5nIFgzIHF1ZXJlcmllcyBpbnRvIDEgUGF5bG9hZFxyXG4gIHgzSW5mb3MoYXJyMSwgYXJyMikge1xyXG4gICAgcmV0dXJuIGFycjEubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgIGlmIChpdGVtLmlkID09PSBhcnIyW2ldLmlkKSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIGFycjJbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBhY2NvdW50OiBcIlwiLFxyXG4gICAgICBwYXJudGVyQ291bnQ6IFwiXCIsXHJcbiAgICAgIGNvc3Q6IFwiXCIsXHJcbiAgICB9O1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxYM01hdHJpeEhvbGRlciBzdHJ1Yz17dGhpcy5zdGF0ZS54M1BheWxvYWR9IC8+XHJcbiAgICAgICAgPFg0TWF0cml4SG9sZGVyIHN0cnVjPXt0aGlzLnN0YXRlLng2UGF5bG9hZH0gLz5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWF0cml4U3lzdGVtO1xyXG4iLCJpbXBvcnQgWDNNYXRyaXggZnJvbSBcIi4vWDNtYXRyaXhcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uL1NwaW5uZXIuanN4XCI7XHJcblxyXG5jb25zdCBYM01hdHJpeEhvbGRlciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtyZWxvYWQsIHNldFJlbG9hZF0gPSB1c2VTdGF0ZSgwKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHByb3BzLnN0cnVjICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBzZXRSZWxvYWQoMSk7XHJcbiAgICB9XHJcbiAgfSwgcmVsb2FkKTtcclxuXHJcbiAgaWYgKHByb3BzLnN0cnVjID09PSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBwZXItaG9sZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtcGFydFwiPlxyXG4gICAgICAgICAgPGgxPkZvcnNhZ2UgeDM8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tLXBhcnRcIj5cclxuICAgICAgICAgIDxTcGlubmVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHA+SGFsbG8gaWNoIGJpbiBkZXIgTMO8Y2tlbmbDvGxsZXIgVGV4dCBmw7xyIGRpZSBJY29uZXM8L3A+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLnVwcGVyLWhvbGRlciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudG9wLXBhcnQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyOCwgMjIsIDg1LCAxKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJvdHRvbS1wYXJ0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjgsIDIyLCA4NSwgMSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcclxuICAgICAgICAgICAgZ3JpZC1nYXA6IDMwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cHBlci1ob2xkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLXBhcnRcIj5cclxuICAgICAgICAgICAgPGgxPkZvcnNhZ2UgeDM8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbS1wYXJ0XCI+XHJcbiAgICAgICAgICAgIHtwcm9wcy5zdHJ1Yy5tYXAoKG1hdHJpeCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8WDNNYXRyaXhcclxuICAgICAgICAgICAgICAgIGlkPXttYXRyaXguaWR9XHJcbiAgICAgICAgICAgICAgICBrZXk9e21hdHJpeC5rZXl9XHJcbiAgICAgICAgICAgICAgICBjb3N0PXttYXRyaXguY29zdH1cclxuICAgICAgICAgICAgICAgIGFjdGl2ZT17bWF0cml4Lm51bWJlcn1cclxuICAgICAgICAgICAgICAgIGJvdWdodD17bWF0cml4LnVzZXJYM0V4aXN0fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPHA+SGFsbG8gaWNoIGJpbiBkZXIgTMO8Y2tlbmbDvGxsZXIgVGV4dCBmw7xyIGRpZSBJY29uZXM8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLnVwcGVyLWhvbGRlciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudG9wLXBhcnQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyOCwgMjIsIDg1LCAxKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJvdHRvbS1wYXJ0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjgsIDIyLCA4NSwgMSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcclxuICAgICAgICAgICAgZ3JpZC1nYXA6IDMwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBYM01hdHJpeEhvbGRlcjtcclxuIiwiaW1wb3J0IENpcmNsZSBmcm9tIFwiLi9DaXJjbGVcIjtcclxuXHJcbmNvbnN0IFgzbWF0cml4ID0gKHByb3BzKSA9PiB7XHJcbiAgaWYgKHByb3BzLmJvdWdodCkge1xyXG4gICAgaWYgKHByb3BzLmFjdGl2ZSA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbGRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hdHJpeC1oZWFkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbFwiPntwcm9wcy5pZH08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlkXCI+e3Byb3BzLmNvc3R9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvd25saW5lc1wiPlxyXG4gICAgICAgICAgICAgIDxDaXJjbGUgZXhpc3Q9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICAgIDxDaXJjbGUgZXhpc3Q9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICAgIDxDaXJjbGUgZXhpc3Q9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAuaG9sZGVyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1hdHJpeC1oZWFkIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMzEsIDE2OSwgMjU1KTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgICAyNzBkZWcsXHJcbiAgICAgICAgICAgICAgICByZ2JhKDMxLCAxNjksIDI1NSwgMSkgMzElLFxyXG4gICAgICAgICAgICAgICAgcmdiYSgyMSwgMTE3LCAyNTEsIDEpIDc3JVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggMTUwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICBmb250LXN0eWxlOiBib2xkO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sZXZlbCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzMzOGVmZjtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaWQge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaXRlbXMge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDMwcHggMzBweDtcclxuICAgICAgICAgICAgICBncmlkLWdhcDogNDNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGluZXMge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcclxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZG93bmxpbmVzIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAzMHB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDQzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAocHJvcHMuYWN0aXZlID09PSAxKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9sZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF0cml4LWhlYWRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsXCI+e3Byb3BzLmlkfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWRcIj57cHJvcHMuY29zdH08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG93bmxpbmVzXCI+XHJcbiAgICAgICAgICAgICAgPENpcmNsZSBleGlzdD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICA8Q2lyY2xlIGV4aXN0PXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgICA8Q2lyY2xlIGV4aXN0PXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmhvbGRlciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tYXRyaXgtaGVhZCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDMxLCAxNjksIDI1NSk7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgICAgMjcwZGVnLFxyXG4gICAgICAgICAgICAgICAgcmdiYSgzMSwgMTY5LCAyNTUsIDEpIDMxJSxcclxuICAgICAgICAgICAgICAgIHJnYmEoMjEsIDExNywgMjUxLCAxKSA3NyVcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDE1MHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogYm9sZDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGV2ZWwge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzhlZmY7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmlkIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLml0ZW1zIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAzMHB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDQzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxpbmVzIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRvd25saW5lcyB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMzBweCAzMHB4O1xyXG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiA0M3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKHByb3BzLmFjdGl2ZSA9PT0gMikge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbGRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hdHJpeC1oZWFkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbFwiPntwcm9wcy5pZH08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlkXCI+e3Byb3BzLmNvc3R9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvd25saW5lc1wiPlxyXG4gICAgICAgICAgICAgIDxDaXJjbGUgZXhpc3Q9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgPENpcmNsZSBleGlzdD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICA8Q2lyY2xlIGV4aXN0PXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmhvbGRlciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tYXRyaXgtaGVhZCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDMxLCAxNjksIDI1NSk7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgICAgMjcwZGVnLFxyXG4gICAgICAgICAgICAgICAgcmdiYSgzMSwgMTY5LCAyNTUsIDEpIDMxJSxcclxuICAgICAgICAgICAgICAgIHJnYmEoMjEsIDExNywgMjUxLCAxKSA3NyVcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDE1MHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogYm9sZDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGV2ZWwge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzhlZmY7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmlkIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLml0ZW1zIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAzMHB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDQzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxpbmVzIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRvd25saW5lcyB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMzBweCAzMHB4O1xyXG4gICAgICAgICAgICAgIGdyaWQtZ2FwOiA0M3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbGRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hdHJpeC1oZWFkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbFwiPntwcm9wcy5pZH08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlkXCI+e3Byb3BzLmNvc3R9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVzXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvd25saW5lc1wiPlxyXG4gICAgICAgICAgICAgIDxDaXJjbGUgZXhpc3Q9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgPENpcmNsZSBleGlzdD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICA8Q2lyY2xlIGV4aXN0PXt0cnVlfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAuaG9sZGVyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1hdHJpeC1oZWFkIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMzEsIDE2OSwgMjU1KTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgICAyNzBkZWcsXHJcbiAgICAgICAgICAgICAgICByZ2JhKDMxLCAxNjksIDI1NSwgMSkgMzElLFxyXG4gICAgICAgICAgICAgICAgcmdiYSgyMSwgMTE3LCAyNTEsIDEpIDc3JVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggMTUwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICBmb250LXN0eWxlOiBib2xkO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sZXZlbCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzMzOGVmZjtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaWQge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaXRlbXMge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDMwcHggMzBweDtcclxuICAgICAgICAgICAgICBncmlkLWdhcDogNDNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGluZXMge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcclxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZG93bmxpbmVzIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAzMHB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgZ3JpZC1nYXA6IDQzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbGRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXRyaXgtaGVhZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsXCI+e3Byb3BzLmlkfTwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV5LWxldmVsXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQocHJvcHMuY29zdCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEJ1eSBmb3Ige3Byb3BzLmNvc3R9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVzXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG93bmxpbmVzXCI+XHJcbiAgICAgICAgICAgIDxDaXJjbGUgZXhpc3Q9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICA8Q2lyY2xlIGV4aXN0PXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgPENpcmNsZSBleGlzdD17ZmFsc2V9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuYnV5LWxldmVsIHtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhvbGRlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWF0cml4LWhlYWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2LCAxLCA2MiwgMSk7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCAxNTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubGV2ZWwge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzM4ZWZmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaWQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXRlbXMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMzBweCAzMHB4O1xyXG4gICAgICAgICAgICBncmlkLWdhcDogNDNweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5saW5lcyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kb3dubGluZXMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMzBweCAzMHB4O1xyXG4gICAgICAgICAgICBncmlkLWdhcDogNDNweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBYM21hdHJpeDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uL1NwaW5uZXIuanN4XCI7XHJcbmltcG9ydCBYNE1hdHJpeCBmcm9tIFwiLi9YNG1hdHJpeFwiO1xyXG5cclxuY29uc3QgWDRNYXRyaXhIb2xkZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbcmVsb2FkLCBzZXRSZWxvYWRdID0gdXNlU3RhdGUoMCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChwcm9wcy5zdHJ1YyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgc2V0UmVsb2FkKDEpO1xyXG4gICAgfVxyXG4gIH0sIHJlbG9hZCk7XHJcbiAgY29uc29sZS5sb2cocHJvcHMuc3RydWMpO1xyXG4gIGlmIChwcm9wcy5zdHJ1YyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwcGVyLWhvbGRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLXBhcnRcIj5cclxuICAgICAgICAgIDxoMT5Gb3JzYWdlIHg0PC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbS1wYXJ0XCI+XHJcbiAgICAgICAgICA8U3Bpbm5lciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwPkhhbGxvIGljaCBiaW4gZGVyIEzDvGNrZW5mw7xsbGVyIFRleHQgZsO8ciBkaWUgSWNvbmVzPC9wPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC51cHBlci1ob2xkZXIge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRvcC1wYXJ0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjgsIDIyLCA4NSwgMSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ib3R0b20tcGFydCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI4LCAyMiwgODUsIDEpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgMjBweCAyMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XHJcbiAgICAgICAgICAgIGdyaWQtZ2FwOiAzMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBwZXItaG9sZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1wYXJ0XCI+XHJcbiAgICAgICAgICAgIDxoMT5Gb3JzYWdlIHg0PC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b20tcGFydFwiPlxyXG4gICAgICAgICAgICB7cHJvcHMuc3RydWMubWFwKChtYXRyaXgsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPFg0TWF0cml4XHJcbiAgICAgICAgICAgICAgICBpZD17bWF0cml4LmlkfVxyXG4gICAgICAgICAgICAgICAga2V5PXttYXRyaXgua2V5fVxyXG4gICAgICAgICAgICAgICAgY29zdD17bWF0cml4LmNvc3R9XHJcbiAgICAgICAgICAgICAgICBib3VnaHQ9e21hdHJpeC51c2VyWDRFeGlzdH1cclxuICAgICAgICAgICAgICAgIHN0cnVjdHVyZT17bWF0cml4LnVzZXJYNn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHA+SGFsbG8gaWNoIGJpbiBkZXIgTMO8Y2tlbmbDvGxsZXIuIFRleHQgZsO8ciBkaWUgSWNvbmVzPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC51cHBlci1ob2xkZXIge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRvcC1wYXJ0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjgsIDIyLCA4NSwgMSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ib3R0b20tcGFydCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI4LCAyMiwgODUsIDEpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgMjBweCAyMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XHJcbiAgICAgICAgICAgIGdyaWQtZ2FwOiAzMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgWDRNYXRyaXhIb2xkZXI7XHJcbiIsImltcG9ydCBGaXJzdExpbmUgZnJvbSBcIi4veDRzdHJ1Y3R1cmUvRmlyc3RMaW5lXCI7XHJcbmltcG9ydCBTZWNvbmRMaW5lIGZyb20gXCIuL3g0c3RydWN0dXJlL1NlY29uZExpbmVcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFg0bWF0cml4ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2V4aXN0MSwgc2V0RXhpc3QxXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXhpc3QyLCBzZXRFeGlzdDJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtleGlzdDMsIHNldEV4aXN0M10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2V4aXN0NCwgc2V0RXhpc3Q0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXhpc3Q1LCBzZXRFeGlzdDVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtleGlzdDYsIHNldEV4aXN0Nl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocHJvcHMuc3RydWN0dXJlWzFdLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgIGlmIChwcm9wcy5zdHJ1Y3R1cmVbMV0ubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgc2V0RXhpc3QxKHRydWUpO1xyXG4gICAgICB9IGVsc2UgaWYgKHByb3BzLnN0cnVjdHVyZVsxXS5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICBzZXRFeGlzdDEodHJ1ZSk7XHJcbiAgICAgICAgc2V0RXhpc3QyKHRydWUpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKHByb3BzLmlkKTtcclxuICAgICAgY29uc29sZS5sb2cocHJvcHMuc3RydWN0dXJlKTtcclxuICAgIH1cclxuICAgIGlmIChwcm9wcy5zdHJ1Y3R1cmVbMl0ubGVuZ3RoICE9IDApIHtcclxuICAgICAgaWYgKHByb3BzLnN0cnVjdHVyZVsxXS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICBzZXRFeGlzdDModHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAocHJvcHMuc3RydWN0dXJlWzFdLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgIHNldEV4aXN0Myh0cnVlKTtcclxuICAgICAgICBzZXRFeGlzdDQodHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAocHJvcHMuc3RydWN0dXJlWzFdLmxlbmd0aCA9PT0gMykge1xyXG4gICAgICAgIHNldEV4aXN0Myh0cnVlKTtcclxuICAgICAgICBzZXRFeGlzdDQodHJ1ZSk7XHJcbiAgICAgICAgc2V0RXhpc3Q1KHRydWUpO1xyXG4gICAgICB9IGVsc2UgaWYgKHByb3BzLnN0cnVjdHVyZVsxXS5sZW5ndGggPT09IDQpIHtcclxuICAgICAgICBzZXRFeGlzdDModHJ1ZSk7XHJcbiAgICAgICAgc2V0RXhpc3Q0KHRydWUpO1xyXG4gICAgICAgIHNldEV4aXN0NSh0cnVlKTtcclxuICAgICAgICBzZXRFeGlzdDYodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2cocHJvcHMuaWQpO1xyXG4gICAgICBjb25zb2xlLmxvZyhwcm9wcy5zdHJ1Y3R1cmUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBpZiAocHJvcHMuYm91Z2h0KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9sZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hdHJpeC1oZWFkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV2ZWxcIj57cHJvcHMuaWR9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWRcIj57cHJvcHMuY29zdH08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEZpcnN0TGluZSBleGlzdDE9e2V4aXN0MX0gZXhpc3QyPXtleGlzdDJ9IC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNxdWFyZXNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdHJ1Y1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0cnVjXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxTZWNvbmRMaW5lXHJcbiAgICAgICAgICAgIGV4aXN0Mz17ZXhpc3QzfVxyXG4gICAgICAgICAgICBleGlzdDQ9e2V4aXN0NH1cclxuICAgICAgICAgICAgZXhpc3Q1PXtleGlzdDV9XHJcbiAgICAgICAgICAgIGV4aXN0Nj17ZXhpc3Q2fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuaG9sZGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tYXRyaXgtaGVhZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigzMSwgMTY5LCAyNTUpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgMjcwZGVnLFxyXG4gICAgICAgICAgICAgIHJnYmEoMzEsIDE2OSwgMjU1LCAxKSAzMSUsXHJcbiAgICAgICAgICAgICAgcmdiYSgyMSwgMTE3LCAyNTEsIDEpIDc3JVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggMTUwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5sZXZlbCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzhlZmY7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pZCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubGluZXMge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXRlbXMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMHB4IDEwMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZG93bmxpbmVzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCAxMDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zcXVhcmVzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCAxMDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdHJ1YyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0byBhdXRvO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5pdGVtczQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggNTBweCA1MHB4IDUwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZG93bmxpbmVzNCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCA1MHB4IDUwcHggNTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jaXJjbGUge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMS41cHggc29saWQgIzFlYTZmZjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzFlYTZmZjtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob2xkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF0cml4LWhlYWRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZXZlbFwiPntwcm9wcy5pZH08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpZFwiPntwcm9wcy5jb3N0fTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Rmlyc3RMaW5lIGV4aXN0PXtwcm9wcy5ib3VnaHR9IC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNxdWFyZXNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdHJ1Y1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0cnVjXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxTZWNvbmRMaW5lIGV4aXN0PXtwcm9wcy5ib3VnaHR9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmhvbGRlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWF0cml4LWhlYWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBncmV5O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggMTUwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5sZXZlbCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzhlZmY7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pZCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubGluZXMge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXRlbXMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMHB4IDEwMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZG93bmxpbmVzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCAxMDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zcXVhcmVzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCAxMDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdHJ1YyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0byBhdXRvO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5pdGVtczQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggNTBweCA1MHB4IDUwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZG93bmxpbmVzNCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCA1MHB4IDUwcHggNTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jaXJjbGUge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMS41cHggc29saWQgIzFlYTZmZjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzFlYTZmZjtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgWDRtYXRyaXg7XHJcblxyXG4vLyAjZmQ4NTc2XHJcbiIsImNvbnN0IENpcmNsZUJsdWUgPSAocHJvcHMpID0+IHtcclxuICBpZiAocHJvcHMuZXhpc3QgPT09IHRydWUpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVcIj48L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5jaXJjbGUge1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjMWVhNmZmO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxZWE2ZmY7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZS1lbXB0eVwiPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5jaXJjbGUtZW1wdHkge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMS41cHggc29saWQgIzFlYTZmZjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2lyY2xlQmx1ZTtcclxuXHJcbi8vICNmZDg1NzZcclxuIiwiaW1wb3J0IENpcmNsZUJsdWUgZnJvbSBcIi4vQ2lyY2xlQmx1ZVwiO1xyXG5jb25zdCBGaXJzdExpbmUgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVzXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvd25saW5lc1wiPlxyXG4gICAgICAgIDxDaXJjbGVCbHVlIGV4aXN0PXtwcm9wcy5leGlzdDF9IC8+XHJcbiAgICAgICAgPENpcmNsZUJsdWUgZXhpc3Q9e3Byb3BzLmV4aXN0Mn0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbXNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVzXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lc1wiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5saW5lcyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pdGVtcyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCAxMDBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kb3dubGluZXMge1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggMTAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlyc3RMaW5lO1xyXG4iLCJpbXBvcnQgQ2lyY2xlQmx1ZSBmcm9tIFwiLi9DaXJjbGVCbHVlXCI7XHJcbmNvbnN0IFNlY29uZExpbmUgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtczRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVzXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lc1wiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZXNcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVzXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvd25saW5lczRcIj5cclxuICAgICAgICA8Q2lyY2xlQmx1ZSBleGlzdD17cHJvcHMuZXhpc3QzfSAvPlxyXG4gICAgICAgIDxDaXJjbGVCbHVlIGV4aXN0PXtwcm9wcy5leGlzdDR9IC8+XHJcbiAgICAgICAgPENpcmNsZUJsdWUgZXhpc3Q9e3Byb3BzLmV4aXN0NX0gLz5cclxuICAgICAgICA8Q2lyY2xlQmx1ZSBleGlzdD17cHJvcHMuZXhpc3Q2fSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5saW5lcyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pdGVtczQge1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCA1MHB4IDUwcHggNTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRvd25saW5lczQge1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCA1MHB4IDUwcHggNTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWNvbmRMaW5lO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEaXZpZGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZXJcIj48L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5kaXZpZGVyIHtcclxuICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGdyZXk7XHJcbiAgICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFNpZGViYXJDb250ZW50IGZyb20gXCIuL1NpZGViYXJDb250ZW50XCI7XHJcbmltcG9ydCBEaXZpZGVyIGZyb20gXCIuL0RpdmlkZXJcIjtcclxuaW1wb3J0IFVzZXJDb250ZW50IGZyb20gXCIuL1VzZXJDb250ZW50XCI7XHJcbmltcG9ydCB7IEJBU0VfVVJMIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2dsb2JhbHNcIjtcclxuXHJcbmNvbnN0IFNpZGViYXIgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZVwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltZy91c2VyX3NpbXBsZS5qcGdcIiBoZWlnaHQ9XCI0MHB4XCIgLz4ge1wiXCJ9IHtcIlwifVxyXG4gICAgICAgICAgICBJRDoge3Byb3BzLnVzZXJJZHN9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltZy9wYXJ0bmVycy5qcGdcIiB3aWR0aD1cIjYwcHhcIiAvPlxyXG4gICAgICAgICAge3Byb3BzLnBhcnRuZXJzQ291bnR9XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWcvY3ViZS5qcGdcIiB3aWR0aD1cIjEwMCVcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJlYXJuaW5nc1wiPlxyXG4gICAgICAgIDxiPiQ0LDAwMCwwMDA8L2I+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPFNpZGViYXJDb250ZW50XHJcbiAgICAgICAgdGl0bGU9XCJCYWxhbmNlXCJcclxuICAgICAgICBiYWxhbmNlX3VzZD17cHJvcHMuYmFsYW5jZSAqIDIgKyBcIiAkXCJ9XHJcbiAgICAgICAgYmFsYW5jZV9ldGg9e3Byb3BzLmJhbGFuY2UgKyBcIiBFVEhcIn1cclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvbmVNaWxsaW9uXCI+PC9kaXY+XHJcbiAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgIDxTaWRlYmFyQ29udGVudFxyXG4gICAgICAgIHRpdGxlPVwiRm9yc2FnZVwiXHJcbiAgICAgICAgbWF0cml4PVwieDNcIlxyXG4gICAgICAgIGJhbGFuY2VfdXNkPXtwcm9wcy5iYWxhbmNlICogMiArIFwiICRcIn1cclxuICAgICAgICBiYWxhbmNlX2V0aD17cHJvcHMuYmFsYW5jZSArIFwiIEVUSFwifVxyXG4gICAgICAvPlxyXG4gICAgICA8U2lkZWJhckNvbnRlbnRcclxuICAgICAgICB0aXRsZT1cIkZvcnNhZ2VcIlxyXG4gICAgICAgIG1hdHJpeD1cIng0XCJcclxuICAgICAgICBiYWxhbmNlX3VzZD17cHJvcHMuYmFsYW5jZSAqIDIgKyBcIiAkXCJ9XHJcbiAgICAgICAgYmFsYW5jZV9ldGg9e3Byb3BzLmJhbGFuY2UgKyBcIiBFVEhcIn1cclxuICAgICAgLz5cclxuICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgPFVzZXJDb250ZW50XHJcbiAgICAgICAgdGl0bGU9XCJBZmZpbGlhdGUgTGlua1wiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9e0JBU0VfVVJMICsgXCJyZWYvXCIgKyBwcm9wcy51c2VySWRzfVxyXG4gICAgICAvPlxyXG4gICAgICA8VXNlckNvbnRlbnQgdGl0bGU9XCJZb3VyIEV0aGVyZXVtIFdhbGxldFwiIHBsYWNlaG9sZGVyPXtwcm9wcy5hY2NvdW50fSAvPlxyXG4gICAgICA8VXNlckNvbnRlbnQgdGl0bGU9XCJTbWFydCBDb250cmFjdCBBZGRyZXNzXCIgcGxhY2Vob2xkZXI9e3Byb3BzLmFkZHJlc3N9IC8+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuc2lkZWJhciB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI4LCAyMiwgODUsIDEpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5lYXJuaW5ncyB7XHJcbiAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjUyLCAxMzIsIDExOCk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgIDIyM2RlZyxcclxuICAgICAgICAgICAgcmdiYSgyNTIsIDEzMiwgMTE4LCAxKSAyMiUsXHJcbiAgICAgICAgICAgIHJnYmEoMjUyLCA5NCwgMTI1LCAxKSA3MyVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2ZpbGUge1xyXG4gICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgIG1hcmdpbjogYXV0byBhdXRvO1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTUwcHggYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2ZpbGUgcCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcclxuIiwiY29uc3QgU2lkZWJhckNvbnRlbnQgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWdvYWxzXCI+XHJcbiAgICAgICAgPGg0PlxyXG4gICAgICAgICAge3Byb3BzLnRpdGxlfSB7cHJvcHMubWF0cml4fVxyXG4gICAgICAgIDwvaDQ+XHJcblxyXG4gICAgICAgIDxwPntwcm9wcy5iYWxhbmNlX3VzZH08L3A+XHJcblxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxpZ2h0LWJsdWVcIj57cHJvcHMuYmFsYW5jZV9ldGh9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGVudC1nb2FscyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTAwMTNlO1xyXG4gICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5saWdodC1ibHVlIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzEyNjJmZjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhckNvbnRlbnQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBVc2VyQ29udGVudCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtjb3B5U3VjY2Vzcywgc2V0Q29weVN1Y2Nlc3NdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgZnVuY3Rpb24gY29weVRvQ2xpcGJvYXJkKGUpIHtcclxuICAgIGlucHV0UmVmLmN1cnJlbnQuc2VsZWN0KCk7XHJcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XHJcbiAgICBlLnRhcmdldC5mb2N1cygpO1xyXG4gICAgc2V0Q29weVN1Y2Nlc3MoXCJDb3BpZWQhXCIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC11c2VyXCI+XHJcbiAgICAgICAgPGg0Pntwcm9wcy50aXRsZX08L2g0PlxyXG4gICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgPGlucHV0IHJlZj17aW5wdXRSZWZ9IHZhbHVlPXtwcm9wcy5wbGFjZWhvbGRlcn0gLz5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgLyogTG9naWNhbCBzaG9ydGN1dCBmb3Igb25seSBkaXNwbGF5aW5nIHRoZSBcclxuICAgICAgICAgIGJ1dHRvbiBpZiB0aGUgY29weSBjb21tYW5kIGV4aXN0cyAqL1xyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlDb21tYW5kU3VwcG9ydGVkKFwiY29weVwiKSAmJiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjb3B5XCIgb25DbGljaz17Y29weVRvQ2xpcGJvYXJkfT5cclxuICAgICAgICAgICAgICAgIENvcHlcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImV0aGVyc2NhblwiPlRvIEV0aGVyc2NhbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWNjZXNzXCI+e2NvcHlTdWNjZXNzfTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBoNCB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250ZW50LXVzZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxNiwgMSwgNjIsIDEpO1xyXG4gICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzI3MTk1MDtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnN1Y2Nlc3Mge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiKDAsIDIzNywgNDcpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAzMDZkZWcsXHJcbiAgICAgICAgICAgIHJnYmEoMCwgMjM3LCA0NywgMSkgMjklLFxyXG4gICAgICAgICAgICByZ2JhKDAsIDE3OSwgMzUsIDEpIDY0JSxcclxuICAgICAgICAgICAgcmdiYSgwLCAxNzksIDM1LCAxKSA4MyVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICAgICAgICBmb250LXN0eWxlOiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDE1cHg7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweCAyNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29weSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMzEsIDE2OCwgMjU1KTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgMjIzZGVnLFxyXG4gICAgICAgICAgICByZ2JhKDMxLCAxNjgsIDI1NSwgMSkgMjIlLFxyXG4gICAgICAgICAgICByZ2JhKDE5LCAxMDgsIDI1NSwgMSkgNDclXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZXRoZXJzY2FuIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMyNzE5NTA7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlckNvbnRlbnQ7XHJcblxyXG57XHJcbiAgLyogPGRpdj5cclxue1xyXG4gIGRvY3VtZW50LnF1ZXJ5Q29tbWFuZFN1cHBvcnRlZChcImNvcHlcIikgJiYgKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjb3B5VG9DbGlwYm9hcmR9PkNvcHk8L2J1dHRvbj5cclxuICAgICAge2NvcHlTdWNjZXNzfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbjxmb3JtPlxyXG4gIDx0ZXh0YXJlYSByZWY9e2lucHV0UmVmfSB2YWx1ZT1cIlNvbWUgdGV4dCB0byBjb3B5XCIgLz5cclxuPC9mb3JtPlxyXG48L2Rpdj4gKi9cclxufVxyXG5cclxuLy8gdHlwZT1cInRleHRcIlxyXG4vLyBkaXNhYmxlZD1cImRpc2FibGVkXCJcclxuLy8gcGxhY2Vob2xkZXI9e3Byb3BzLnBsYWNlaG9sZGVyfVxyXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIFByZWZldGNoT3B0aW9ucyxcbiAgTmV4dFJvdXRlcixcbiAgaXNMb2NhbFVSTCxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBleGVjT25jZSB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgYWRkQmFzZVBhdGgsIHJlc29sdmVIcmVmIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdyB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hcyA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcykgOiByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoYXMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgY29uc3Qgd2FybiA9IGV4ZWNPbmNlKGNvbnNvbGUuZXJyb3IpXG5cbiAgLy8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG4gIGNvbnN0IFByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKVxuICBjb25zdCBleGFjdCA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMtZXhhY3QnKVxuICAvLyBAdHMtaWdub3JlIHRoZSBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQsIHdoZW4gZGVjbGFyaW5nIGl0IG9uIHRoZSBjbGFzcyBpdCBvdXRwdXRzIGFuIGV4dHJhIGJpdCBvZiBjb2RlIHdoaWNoIGlzIG5vdCBuZWVkZWQuXG4gIExpbmsucHJvcFR5cGVzID0gZXhhY3Qoe1xuICAgIGhyZWY6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLFxuICAgIGFzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgcHJlZmV0Y2g6IFByb3BUeXBlcy5ib29sLFxuICAgIHJlcGxhY2U6IFByb3BUeXBlcy5ib29sLFxuICAgIHNoYWxsb3c6IFByb3BUeXBlcy5ib29sLFxuICAgIHBhc3NIcmVmOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzY3JvbGw6IFByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgKHByb3BzOiBhbnksIHByb3BOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wc1twcm9wTmFtZV1cblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICBgV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPmBcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfSxcbiAgICBdKS5pc1JlcXVpcmVkLFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQge1xuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBiYXNlUGF0aCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGJhc2VQYXRoKVxuICAgICAgOiBiYXNlUGF0aCArIHBhdGhcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoY3VycmVudFBhdGg6IHN0cmluZywgaHJlZjogVXJsKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIHJldHVybiBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgIDogZmluYWxVcmwuaHJlZlxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIHVybEFzU3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5mdW5jdGlvbiB0cnlQYXJzZVJlbGF0aXZlVXJsKFxuICB1cmw6IHN0cmluZ1xuKTogbnVsbCB8IFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgIClcbiAgICAgIH0sIDApXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cbn1cblxudHlwZSBDb21wb25lbnRSZXMgPSB7IHBhZ2U6IENvbXBvbmVudFR5cGU7IG1vZDogYW55IH1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbnR5cGUgUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBhbnlcbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUm91dGVJbmZvLCBBcHA/OiBDb21wb25lbnRUeXBlKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cblxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtMb2FkaW5nRXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IENvbXBvbmVudFR5cGVcbiAgICAgIHdyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgdXBkYXRlKHJvdXRlOiBzdHJpbmcsIG1vZDogYW55KSB7XG4gICAgY29uc3QgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlID0gbW9kLmRlZmF1bHQgfHwgbW9kXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBDb21wb25lbnQsXG4gICAgICBfX05fU1NHOiBtb2QuX19OX1NTRyxcbiAgICAgIF9fTl9TU1A6IG1vZC5fX05fU1NQLFxuICAgIH0pXG4gICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGFcblxuICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBwYXJzZWQgPSB0cnlQYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGlmICghcGFyc2VkKSByZXR1cm4gZmFsc2VcblxuICAgIGxldCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMgfSA9IHBhcnNlZFxuICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpXG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKGNsZWFuZWRBcylcbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgY29uc3QgeyBlcnJvciB9ID0gcm91dGVJbmZvXG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uICYmICdfTl9YJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKChvcHRpb25zIGFzIGFueSkuX05fWCwgKG9wdGlvbnMgYXMgYW55KS5fTl9ZKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciwgZXJyb3I6IGVyciB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgIGVycixcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSBhcyBhbnkpXG4gICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8Um91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihcbiAgICAgICAgICAgIChyZXMpID0+XG4gICAgICAgICAgICAgICh7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgICAgICB9IGFzIFJvdXRlSW5mbylcbiAgICAgICAgICApXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBfX05fU1NHXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHBhcnNlZCA9IHRyeVBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgaWYgKCFwYXJzZWQpIHJldHVyblxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGFzUGF0aCksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPENvbXBvbmVudFJlcz4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgaXRlbSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCB2YWx1ZSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJy4uLy4uL2xpYi9sb2FkLWVudi1jb25maWcnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogYW55XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgaW50ZXJmYWNlLW5hbWVcbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGZpbGVzOiBzdHJpbmdbXVxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xyXG5pbXBvcnQgeyBBQkksIEFERFJFU1MgfSBmcm9tIFwiLi4vdXRpbHMvZ2xvYmFsc1wiO1xyXG5pbXBvcnQgeyBsb2FkV2ViMyB9IGZyb20gXCIuLi91dGlscy91dGlsaXR5XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi9jb21wb25lbnRzL1NwaW5uZXJcIjtcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgSW5mb0hlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9JbmZvSGVhZGVyXCI7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuLi9jb21wb25lbnRzL3NpZGViYXIvU2lkZWJhclwiO1xyXG5pbXBvcnQgTWF0cml4U3lzdGVtIGZyb20gXCIuLi9jb21wb25lbnRzL21hdHJpeC9NYXRyaXhTeXN0ZW1cIjtcclxuXHJcbi8vIENvbnRleHQgQVBJXHJcbmltcG9ydCBBY2NvdW50Q29udGV4dCBmcm9tIFwiLi4vY29tcG9uZW50cy9BY2NvdW50Q29udGV4dFwiO1xyXG5cclxuY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgY29udGV4dFR5cGUgPSBBY2NvdW50Q29udGV4dDtcclxuXHJcbiAgYXN5bmMgVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBhY2NvdW50OiB0aGlzLmNvbnRleHQuYWNjb3VudCB9KTtcclxuICAgIGF3YWl0IGxvYWRXZWIzKCk7XHJcbiAgICBhd2FpdCB0aGlzLmxvYWRCbG9ja2NoYWluRGF0YSgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgbG9hZEJsb2NrY2hhaW5EYXRhKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgd2ViMyA9IG5ldyBXZWIzKFdlYjMuZ2l2ZW5Qcm92aWRlciB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6ODU0NVwiKTtcclxuICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoQUJJLCBBRERSRVNTKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRyYWN0IH0pO1xyXG4gICAgICBjb25zdCBhZGRyZXNzID0gQUREUkVTUztcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFkZHJlc3MgfSk7XHJcblxyXG4gICAgICBjb25zdCB1c2VySWQgPSBhd2FpdCB0aGlzLnN0YXRlLmNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAudXNlcnModGhpcy5zdGF0ZS5hY2NvdW50KVxyXG4gICAgICAgIC5jYWxsKCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHVzZXJJZHM6IHVzZXJJZC5pZCxcclxuICAgICAgICBwYXJudGVyQ291bnQ6IHVzZXJJZC5wYXJ0bmVyc0NvdW50LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgdXNlckNvdW50ID0gYXdhaXQgdGhpcy5zdGF0ZS5jb250cmFjdC5tZXRob2RzLmxhc3RVc2VySWQoKS5jYWxsKCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0b3RhbFVzZXJzOiB1c2VyQ291bnQgfSk7XHJcbiAgICAgIGNvbnN0IGJhbGFuY2UgPSBhd2FpdCB0aGlzLnN0YXRlLmNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAuYmFsYW5jZXModGhpcy5zdGF0ZS5hY2NvdW50KVxyXG4gICAgICAgIC5jYWxsKCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBiYWxhbmNlIH0pO1xyXG5cclxuICAgICAgLy8gTWF0cml4IENhbGxzXHJcbiAgICAgIGNvbnN0IGNvc3RzID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy5yZWdpc3RyYXRpb25Db3N0KCkuY2FsbCgpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY29zdDogY29zdHMgfSk7XHJcblxyXG4gICAgICAvLyBFcnJvciBDYXRjaCAtPiBGZXRjaCB0aGUgbmV3IERhdGEgZGlyZWN0bHkgZnJvbSB3ZWIzIHByb3ZpZGVyIGFmdGVyIHJlbG9hZFxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyhXZWIzLmdpdmVuUHJvdmlkZXIgfHwgXCJodHRwOi8vbG9jYWxob3N0Ojg1NDVcIik7XHJcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFjY291bnQ6IGFjY291bnRzWzBdIH0pO1xyXG4gICAgICBjb25zdCBjb250cmFjdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChBQkksIEFERFJFU1MpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY29udHJhY3QgfSk7XHJcbiAgICAgIGNvbnN0IGFkZHJlc3MgPSBBRERSRVNTO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYWRkcmVzcyB9KTtcclxuICAgICAgY29uc3QgaXNFeGlzdHMgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgLmlzVXNlckV4aXN0cyh0aGlzLnN0YXRlLmFjY291bnQpXHJcbiAgICAgICAgLmNhbGwoKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRXhpc3Q6IGlzRXhpc3RzIH0pO1xyXG4gICAgICAvLyBCdW5kbGVkIFByb21pc2VzXHJcbiAgICAgIGNvbnN0IHVzZXJJZCA9IGF3YWl0IHRoaXMuc3RhdGUuY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgIC51c2Vycyh0aGlzLnN0YXRlLmFjY291bnQpXHJcbiAgICAgICAgLmNhbGwoKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgdXNlcklkczogdXNlcklkLmlkLFxyXG4gICAgICAgIHBhcm50ZXJDb3VudDogdXNlcklkLnBhcnRuZXJzQ291bnQsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB1c2VyQ291bnQgPSBhd2FpdCB0aGlzLnN0YXRlLmNvbnRyYWN0Lm1ldGhvZHMubGFzdFVzZXJJZCgpLmNhbGwoKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRvdGFsVXNlcnM6IHVzZXJDb3VudCB9KTtcclxuICAgICAgY29uc3QgYmFsYW5jZSA9IGF3YWl0IHRoaXMuc3RhdGUuY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgIC5iYWxhbmNlcyh0aGlzLnN0YXRlLmFjY291bnQpXHJcbiAgICAgICAgLmNhbGwoKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJhbGFuY2UgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgYWNjb3VudDogXCJcIixcclxuICAgICAgaXNFeGlzdDogdHJ1ZSxcclxuICAgICAgdXNlcklkczogXCJcIixcclxuICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgdG90YWxVc2VyczogXCJcIixcclxuICAgICAgcGFybnRlckNvdW50OiBcIlwiLFxyXG4gICAgICBwYWdlOiBcIm1haW5cIixcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5sb2FkaW5nID09PSB0cnVlKSB7XHJcbiAgICAgIHJldHVybiA8U3Bpbm5lciAvPjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLmlzRXhpc3QgPT09IHRydWUpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPE5hdmlnYXRpb24gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoYm9hcmRcIj5cclxuICAgICAgICAgICAgICA8SW5mb0hlYWRlciB0b3RhbFVzZXJzPXt0aGlzLnN0YXRlLnRvdGFsVXNlcnN9IC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8U2lkZWJhclxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZHM9e3RoaXMuc3RhdGUudXNlcklkc31cclxuICAgICAgICAgICAgICAgICAgICBwYXJ0bmVyc0NvdW50PXt0aGlzLnN0YXRlLnBhcm50ZXJDb3VudH1cclxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnN0YXRlLmFjY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcz17dGhpcy5zdGF0ZS5hZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgIGJhbGFuY2U9e3RoaXMuc3RhdGUuYmFsYW5jZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWctYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxNYXRyaXhTeXN0ZW0gYWNjb3VudD17dGhpcy5zdGF0ZS5hY2NvdW50fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5kYXNoYm9hcmQge1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2LCAxLCA2MiwgMSk7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0byBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucGFnaW5hdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJ2aDtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgNjUlO1xyXG4gICAgICAgICAgICAgICAgICBncmlkLWdhcDogNSU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgIC5wYWdpbmF0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICAgICAgICAgICAgICBncmlkLWdhcDogNSU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBSb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkO1xyXG4iLCJleHBvcnQgY29uc3QgQUJJID0gW1xyXG4gIHtcclxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcclxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXHJcbiAgICBwYXlhYmxlOiBmYWxzZSxcclxuICAgIG91dHB1dHM6IFt7IHR5cGU6IFwiYm9vbFwiLCBuYW1lOiBcIlwiLCBpbnRlcm5hbFR5cGU6IFwiYm9vbFwiIH1dLFxyXG4gICAgbmFtZTogXCJ1c2Vyc0FjdGl2ZVgzTGV2ZWxzXCIsXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgeyB0eXBlOiBcImFkZHJlc3NcIiwgbmFtZTogXCJ1c2VyQWRkcmVzc1wiLCBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiIH0sXHJcbiAgICAgIHsgdHlwZTogXCJ1aW50OFwiLCBuYW1lOiBcImxldmVsXCIsIGludGVybmFsVHlwZTogXCJ1aW50OFwiIH0sXHJcbiAgICBdLFxyXG4gICAgY29uc3RhbnQ6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXHJcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxyXG4gICAgcGF5YWJsZTogZmFsc2UsXHJcbiAgICBvdXRwdXRzOiBbeyB0eXBlOiBcInVpbnQyNTZcIiwgbmFtZTogXCJcIiwgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZcIiB9XSxcclxuICAgIG5hbWU6IFwiYmFsYW5jZXNcIixcclxuICAgIGlucHV0czogW3sgdHlwZTogXCJhZGRyZXNzXCIsIG5hbWU6IFwiXCIsIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIgfV0sXHJcbiAgICBjb25zdGFudDogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcclxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXHJcbiAgICBwYXlhYmxlOiBmYWxzZSxcclxuICAgIG91dHB1dHM6IFt7IHR5cGU6IFwiYWRkcmVzc1wiLCBuYW1lOiBcIlwiLCBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiIH1dLFxyXG4gICAgbmFtZTogXCJpZFRvQWRkcmVzc1wiLFxyXG4gICAgaW5wdXRzOiBbeyB0eXBlOiBcInVpbnQyNTZcIiwgbmFtZTogXCJcIiwgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZcIiB9XSxcclxuICAgIGNvbnN0YW50OiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZTogXCJmdW5jdGlvblwiLFxyXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcclxuICAgIHBheWFibGU6IGZhbHNlLFxyXG4gICAgb3V0cHV0czogW3sgdHlwZTogXCJ1aW50MjU2XCIsIG5hbWU6IFwiXCIsIGludGVybmFsVHlwZTogXCJ1aW50MjU2XCIgfV0sXHJcbiAgICBuYW1lOiBcImxhc3RVc2VySWRcIixcclxuICAgIGlucHV0czogW10sXHJcbiAgICBjb25zdGFudDogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcclxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXHJcbiAgICBwYXlhYmxlOiBmYWxzZSxcclxuICAgIG91dHB1dHM6IFt7IHR5cGU6IFwiYWRkcmVzc1wiLCBuYW1lOiBcIlwiLCBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiIH1dLFxyXG4gICAgbmFtZTogXCJ1c2VySWRzXCIsXHJcbiAgICBpbnB1dHM6IFt7IHR5cGU6IFwidWludDI1NlwiLCBuYW1lOiBcIlwiLCBpbnRlcm5hbFR5cGU6IFwidWludDI1NlwiIH1dLFxyXG4gICAgY29uc3RhbnQ6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXHJcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxyXG4gICAgcGF5YWJsZTogZmFsc2UsXHJcbiAgICBvdXRwdXRzOiBbeyB0eXBlOiBcImJvb2xcIiwgbmFtZTogXCJcIiwgaW50ZXJuYWxUeXBlOiBcImJvb2xcIiB9XSxcclxuICAgIG5hbWU6IFwiaXNVc2VyRXhpc3RzXCIsXHJcbiAgICBpbnB1dHM6IFt7IHR5cGU6IFwiYWRkcmVzc1wiLCBuYW1lOiBcInVzZXJcIiwgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIiB9XSxcclxuICAgIGNvbnN0YW50OiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZTogXCJmdW5jdGlvblwiLFxyXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInBheWFibGVcIixcclxuICAgIHBheWFibGU6IHRydWUsXHJcbiAgICBvdXRwdXRzOiBbXSxcclxuICAgIG5hbWU6IFwicmVnaXN0cmF0aW9uRXh0XCIsXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgeyB0eXBlOiBcImFkZHJlc3NcIiwgbmFtZTogXCJyZWZlcnJlckFkZHJlc3NcIiwgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIiB9LFxyXG4gICAgXSxcclxuICAgIGNvbnN0YW50OiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcclxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXHJcbiAgICBwYXlhYmxlOiBmYWxzZSxcclxuICAgIG91dHB1dHM6IFtcclxuICAgICAgeyB0eXBlOiBcImFkZHJlc3NcIiwgbmFtZTogXCJcIiwgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIiB9LFxyXG4gICAgICB7IHR5cGU6IFwiYWRkcmVzc1tdXCIsIG5hbWU6IFwiXCIsIGludGVybmFsVHlwZTogXCJhZGRyZXNzW11cIiB9LFxyXG4gICAgICB7IHR5cGU6IFwiYm9vbFwiLCBuYW1lOiBcIlwiLCBpbnRlcm5hbFR5cGU6IFwiYm9vbFwiIH0sXHJcbiAgICBdLFxyXG4gICAgbmFtZTogXCJ1c2Vyc1gzTWF0cml4XCIsXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgeyB0eXBlOiBcImFkZHJlc3NcIiwgbmFtZTogXCJ1c2VyQWRkcmVzc1wiLCBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiIH0sXHJcbiAgICAgIHsgdHlwZTogXCJ1aW50OFwiLCBuYW1lOiBcImxldmVsXCIsIGludGVybmFsVHlwZTogXCJ1aW50OFwiIH0sXHJcbiAgICBdLFxyXG4gICAgY29uc3RhbnQ6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXHJcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxyXG4gICAgcGF5YWJsZTogZmFsc2UsXHJcbiAgICBvdXRwdXRzOiBbeyB0eXBlOiBcImFkZHJlc3NcIiwgbmFtZTogXCJcIiwgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIiB9XSxcclxuICAgIG5hbWU6IFwib3duZXJcIixcclxuICAgIGlucHV0czogW10sXHJcbiAgICBjb25zdGFudDogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcclxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXHJcbiAgICBwYXlhYmxlOiBmYWxzZSxcclxuICAgIG91dHB1dHM6IFtcclxuICAgICAgeyB0eXBlOiBcImFkZHJlc3NcIiwgbmFtZTogXCJcIiwgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIiB9LFxyXG4gICAgICB7IHR5cGU6IFwiYWRkcmVzc1tdXCIsIG5hbWU6IFwiXCIsIGludGVybmFsVHlwZTogXCJhZGRyZXNzW11cIiB9LFxyXG4gICAgICB7IHR5cGU6IFwiYWRkcmVzc1tdXCIsIG5hbWU6IFwiXCIsIGludGVybmFsVHlwZTogXCJhZGRyZXNzW11cIiB9LFxyXG4gICAgICB7IHR5cGU6IFwiYm9vbFwiLCBuYW1lOiBcIlwiLCBpbnRlcm5hbFR5cGU6IFwiYm9vbFwiIH0sXHJcbiAgICAgIHsgdHlwZTogXCJhZGRyZXNzXCIsIG5hbWU6IFwiXCIsIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIgfSxcclxuICAgIF0sXHJcbiAgICBuYW1lOiBcInVzZXJzWDZNYXRyaXhcIixcclxuICAgIGlucHV0czogW1xyXG4gICAgICB7IHR5cGU6IFwiYWRkcmVzc1wiLCBuYW1lOiBcInVzZXJBZGRyZXNzXCIsIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIgfSxcclxuICAgICAgeyB0eXBlOiBcInVpbnQ4XCIsIG5hbWU6IFwibGV2ZWxcIiwgaW50ZXJuYWxUeXBlOiBcInVpbnQ4XCIgfSxcclxuICAgIF0sXHJcbiAgICBjb25zdGFudDogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcclxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXHJcbiAgICBwYXlhYmxlOiBmYWxzZSxcclxuICAgIG91dHB1dHM6IFtcclxuICAgICAgeyB0eXBlOiBcInVpbnQyNTZcIiwgbmFtZTogXCJpZFwiLCBpbnRlcm5hbFR5cGU6IFwidWludDI1NlwiIH0sXHJcbiAgICAgIHsgdHlwZTogXCJhZGRyZXNzXCIsIG5hbWU6IFwicmVmZXJyZXJcIiwgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIiB9LFxyXG4gICAgICB7IHR5cGU6IFwidWludDI1NlwiLCBuYW1lOiBcInBhcnRuZXJzQ291bnRcIiwgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZcIiB9LFxyXG4gICAgXSxcclxuICAgIG5hbWU6IFwidXNlcnNcIixcclxuICAgIGlucHV0czogW3sgdHlwZTogXCJhZGRyZXNzXCIsIG5hbWU6IFwiXCIsIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIgfV0sXHJcbiAgICBjb25zdGFudDogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcclxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXHJcbiAgICBwYXlhYmxlOiBmYWxzZSxcclxuICAgIG91dHB1dHM6IFt7IHR5cGU6IFwiYm9vbFwiLCBuYW1lOiBcIlwiLCBpbnRlcm5hbFR5cGU6IFwiYm9vbFwiIH1dLFxyXG4gICAgbmFtZTogXCJ1c2Vyc0FjdGl2ZVg2TGV2ZWxzXCIsXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgeyB0eXBlOiBcImFkZHJlc3NcIiwgbmFtZTogXCJ1c2VyQWRkcmVzc1wiLCBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiIH0sXHJcbiAgICAgIHsgdHlwZTogXCJ1aW50OFwiLCBuYW1lOiBcImxldmVsXCIsIGludGVybmFsVHlwZTogXCJ1aW50OFwiIH0sXHJcbiAgICBdLFxyXG4gICAgY29uc3RhbnQ6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXHJcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwicGF5YWJsZVwiLFxyXG4gICAgcGF5YWJsZTogdHJ1ZSxcclxuICAgIG91dHB1dHM6IFtdLFxyXG4gICAgbmFtZTogXCJidXlOZXdMZXZlbFwiLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgIHsgdHlwZTogXCJ1aW50OFwiLCBuYW1lOiBcIm1hdHJpeFwiLCBpbnRlcm5hbFR5cGU6IFwidWludDhcIiB9LFxyXG4gICAgICB7IHR5cGU6IFwidWludDhcIiwgbmFtZTogXCJsZXZlbFwiLCBpbnRlcm5hbFR5cGU6IFwidWludDhcIiB9LFxyXG4gICAgXSxcclxuICAgIGNvbnN0YW50OiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcclxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXHJcbiAgICBwYXlhYmxlOiBmYWxzZSxcclxuICAgIG91dHB1dHM6IFt7IHR5cGU6IFwidWludDI1NlwiLCBuYW1lOiBcIlwiLCBpbnRlcm5hbFR5cGU6IFwidWludDI1NlwiIH1dLFxyXG4gICAgbmFtZTogXCJyZWdpc3RyYXRpb25Db3N0XCIsXHJcbiAgICBpbnB1dHM6IFtdLFxyXG4gICAgY29uc3RhbnQ6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXHJcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxyXG4gICAgcGF5YWJsZTogZmFsc2UsXHJcbiAgICBvdXRwdXRzOiBbeyB0eXBlOiBcImFkZHJlc3NcIiwgbmFtZTogXCJcIiwgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIiB9XSxcclxuICAgIG5hbWU6IFwiZmluZEZyZWVYNlJlZmVycmVyXCIsXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgeyB0eXBlOiBcImFkZHJlc3NcIiwgbmFtZTogXCJ1c2VyQWRkcmVzc1wiLCBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiIH0sXHJcbiAgICAgIHsgdHlwZTogXCJ1aW50OFwiLCBuYW1lOiBcImxldmVsXCIsIGludGVybmFsVHlwZTogXCJ1aW50OFwiIH0sXHJcbiAgICBdLFxyXG4gICAgY29uc3RhbnQ6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXHJcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxyXG4gICAgcGF5YWJsZTogZmFsc2UsXHJcbiAgICBvdXRwdXRzOiBbeyB0eXBlOiBcInVpbnQyNTZcIiwgbmFtZTogXCJcIiwgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZcIiB9XSxcclxuICAgIG5hbWU6IFwibGV2ZWxQcmljZVwiLFxyXG4gICAgaW5wdXRzOiBbeyB0eXBlOiBcInVpbnQ4XCIsIG5hbWU6IFwiXCIsIGludGVybmFsVHlwZTogXCJ1aW50OFwiIH1dLFxyXG4gICAgY29uc3RhbnQ6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXHJcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxyXG4gICAgcGF5YWJsZTogZmFsc2UsXHJcbiAgICBvdXRwdXRzOiBbeyB0eXBlOiBcImFkZHJlc3NcIiwgbmFtZTogXCJcIiwgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIiB9XSxcclxuICAgIG5hbWU6IFwiZmluZEZyZWVYM1JlZmVycmVyXCIsXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgeyB0eXBlOiBcImFkZHJlc3NcIiwgbmFtZTogXCJ1c2VyQWRkcmVzc1wiLCBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiIH0sXHJcbiAgICAgIHsgdHlwZTogXCJ1aW50OFwiLCBuYW1lOiBcImxldmVsXCIsIGludGVybmFsVHlwZTogXCJ1aW50OFwiIH0sXHJcbiAgICBdLFxyXG4gICAgY29uc3RhbnQ6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlOiBcImNvbnN0cnVjdG9yXCIsXHJcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwibm9ucGF5YWJsZVwiLFxyXG4gICAgcGF5YWJsZTogZmFsc2UsXHJcbiAgICBpbnB1dHM6IFt7IHR5cGU6IFwiYWRkcmVzc1wiLCBuYW1lOiBcIm93bmVyXCIsIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIgfV0sXHJcbiAgfSxcclxuICB7IHR5cGU6IFwiZmFsbGJhY2tcIiwgc3RhdGVNdXRhYmlsaXR5OiBcInBheWFibGVcIiwgcGF5YWJsZTogdHJ1ZSB9LFxyXG4gIHtcclxuICAgIHR5cGU6IFwiZXZlbnRcIixcclxuICAgIG5hbWU6IFwiUmVnaXN0cmF0aW9uXCIsXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgeyB0eXBlOiBcImFkZHJlc3NcIiwgbmFtZTogXCJ1c2VyXCIsIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIsIGluZGV4ZWQ6IHRydWUgfSxcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6IFwiYWRkcmVzc1wiLFxyXG4gICAgICAgIG5hbWU6IFwicmVmZXJyZXJcIixcclxuICAgICAgICBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiLFxyXG4gICAgICAgIGluZGV4ZWQ6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiBcInVpbnQyNTZcIixcclxuICAgICAgICBuYW1lOiBcInVzZXJJZFwiLFxyXG4gICAgICAgIGludGVybmFsVHlwZTogXCJ1aW50MjU2XCIsXHJcbiAgICAgICAgaW5kZXhlZDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6IFwidWludDI1NlwiLFxyXG4gICAgICAgIG5hbWU6IFwicmVmZXJyZXJJZFwiLFxyXG4gICAgICAgIGludGVybmFsVHlwZTogXCJ1aW50MjU2XCIsXHJcbiAgICAgICAgaW5kZXhlZDogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgYW5vbnltb3VzOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGU6IFwiZXZlbnRcIixcclxuICAgIG5hbWU6IFwiUmVpbnZlc3RcIixcclxuICAgIGlucHV0czogW1xyXG4gICAgICB7IHR5cGU6IFwiYWRkcmVzc1wiLCBuYW1lOiBcInVzZXJcIiwgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIiwgaW5kZXhlZDogdHJ1ZSB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogXCJhZGRyZXNzXCIsXHJcbiAgICAgICAgbmFtZTogXCJjdXJyZW50UmVmZXJyZXJcIixcclxuICAgICAgICBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiLFxyXG4gICAgICAgIGluZGV4ZWQ6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiBcImFkZHJlc3NcIixcclxuICAgICAgICBuYW1lOiBcImNhbGxlclwiLFxyXG4gICAgICAgIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIsXHJcbiAgICAgICAgaW5kZXhlZDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgeyB0eXBlOiBcInVpbnQ4XCIsIG5hbWU6IFwibWF0cml4XCIsIGludGVybmFsVHlwZTogXCJ1aW50OFwiLCBpbmRleGVkOiBmYWxzZSB9LFxyXG4gICAgICB7IHR5cGU6IFwidWludDhcIiwgbmFtZTogXCJsZXZlbFwiLCBpbnRlcm5hbFR5cGU6IFwidWludDhcIiwgaW5kZXhlZDogZmFsc2UgfSxcclxuICAgIF0sXHJcbiAgICBhbm9ueW1vdXM6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZTogXCJldmVudFwiLFxyXG4gICAgbmFtZTogXCJVcGdyYWRlXCIsXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgeyB0eXBlOiBcImFkZHJlc3NcIiwgbmFtZTogXCJ1c2VyXCIsIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIsIGluZGV4ZWQ6IHRydWUgfSxcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6IFwiYWRkcmVzc1wiLFxyXG4gICAgICAgIG5hbWU6IFwicmVmZXJyZXJcIixcclxuICAgICAgICBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiLFxyXG4gICAgICAgIGluZGV4ZWQ6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgdHlwZTogXCJ1aW50OFwiLCBuYW1lOiBcIm1hdHJpeFwiLCBpbnRlcm5hbFR5cGU6IFwidWludDhcIiwgaW5kZXhlZDogZmFsc2UgfSxcclxuICAgICAgeyB0eXBlOiBcInVpbnQ4XCIsIG5hbWU6IFwibGV2ZWxcIiwgaW50ZXJuYWxUeXBlOiBcInVpbnQ4XCIsIGluZGV4ZWQ6IGZhbHNlIH0sXHJcbiAgICBdLFxyXG4gICAgYW5vbnltb3VzOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGU6IFwiZXZlbnRcIixcclxuICAgIG5hbWU6IFwiTmV3VXNlclBsYWNlXCIsXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgeyB0eXBlOiBcImFkZHJlc3NcIiwgbmFtZTogXCJ1c2VyXCIsIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIsIGluZGV4ZWQ6IHRydWUgfSxcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6IFwiYWRkcmVzc1wiLFxyXG4gICAgICAgIG5hbWU6IFwicmVmZXJyZXJcIixcclxuICAgICAgICBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiLFxyXG4gICAgICAgIGluZGV4ZWQ6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgdHlwZTogXCJ1aW50OFwiLCBuYW1lOiBcIm1hdHJpeFwiLCBpbnRlcm5hbFR5cGU6IFwidWludDhcIiwgaW5kZXhlZDogZmFsc2UgfSxcclxuICAgICAgeyB0eXBlOiBcInVpbnQ4XCIsIG5hbWU6IFwibGV2ZWxcIiwgaW50ZXJuYWxUeXBlOiBcInVpbnQ4XCIsIGluZGV4ZWQ6IGZhbHNlIH0sXHJcbiAgICAgIHsgdHlwZTogXCJ1aW50OFwiLCBuYW1lOiBcInBsYWNlXCIsIGludGVybmFsVHlwZTogXCJ1aW50OFwiLCBpbmRleGVkOiBmYWxzZSB9LFxyXG4gICAgXSxcclxuICAgIGFub255bW91czogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlOiBcImV2ZW50XCIsXHJcbiAgICBuYW1lOiBcIk1pc3NlZEV0aFJlY2VpdmVcIixcclxuICAgIGlucHV0czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogXCJhZGRyZXNzXCIsXHJcbiAgICAgICAgbmFtZTogXCJyZWNlaXZlclwiLFxyXG4gICAgICAgIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIsXHJcbiAgICAgICAgaW5kZXhlZDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgeyB0eXBlOiBcImFkZHJlc3NcIiwgbmFtZTogXCJmcm9tXCIsIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIsIGluZGV4ZWQ6IHRydWUgfSxcclxuICAgICAgeyB0eXBlOiBcInVpbnQ4XCIsIG5hbWU6IFwibWF0cml4XCIsIGludGVybmFsVHlwZTogXCJ1aW50OFwiLCBpbmRleGVkOiBmYWxzZSB9LFxyXG4gICAgICB7IHR5cGU6IFwidWludDhcIiwgbmFtZTogXCJsZXZlbFwiLCBpbnRlcm5hbFR5cGU6IFwidWludDhcIiwgaW5kZXhlZDogZmFsc2UgfSxcclxuICAgIF0sXHJcbiAgICBhbm9ueW1vdXM6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZTogXCJldmVudFwiLFxyXG4gICAgbmFtZTogXCJTZW50RXh0cmFFdGhEaXZpZGVuZHNcIixcclxuICAgIGlucHV0czogW1xyXG4gICAgICB7IHR5cGU6IFwiYWRkcmVzc1wiLCBuYW1lOiBcImZyb21cIiwgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIiwgaW5kZXhlZDogdHJ1ZSB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogXCJhZGRyZXNzXCIsXHJcbiAgICAgICAgbmFtZTogXCJyZWNlaXZlclwiLFxyXG4gICAgICAgIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIsXHJcbiAgICAgICAgaW5kZXhlZDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgeyB0eXBlOiBcInVpbnQ4XCIsIG5hbWU6IFwibWF0cml4XCIsIGludGVybmFsVHlwZTogXCJ1aW50OFwiLCBpbmRleGVkOiBmYWxzZSB9LFxyXG4gICAgICB7IHR5cGU6IFwidWludDhcIiwgbmFtZTogXCJsZXZlbFwiLCBpbnRlcm5hbFR5cGU6IFwidWludDhcIiwgaW5kZXhlZDogZmFsc2UgfSxcclxuICAgIF0sXHJcbiAgICBhbm9ueW1vdXM6IGZhbHNlLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgQUREUkVTUyA9IFwiMHhlMWJCYjYzZThjQUM5MzYxZjBjMDdBZDZBRUUxMmMyODkzRDQyNzM1XCI7XHJcblxyXG5leHBvcnQgY29uc3QgT1dORVIgPSBcIjB4ZjJhQTI2NzIzZWQ3YjA5OTg0NWFmRTY5RkE0OTI5QTQ2QkMwMDI0NVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJBU0VfVVJMID0gXCJodHRwczovL2FtbmV4dC52ZXJjZWwuYXBwL1wiO1xyXG5cclxuLy8gaHR0cHM6Ly9tdW1iYWktZXhwbG9yZXIubWF0aWMudG9kYXkvYWRkcmVzcy8weGUxYkJiNjNlOGNBQzkzNjFmMGMwN0FkNkFFRTEyYzI4OTNENDI3MzUvY29udHJhY3RzXHJcbiIsImltcG9ydCB7IEFCSSwgQUREUkVTUyB9IGZyb20gXCIuL2dsb2JhbHNcIjtcclxuaW1wb3J0IFdlYjMgZnJvbSBcIndlYjNcIjtcclxuXHJcbi8vIEZldGNoaW5nIFdFQjMgUHJvdmlkZXJcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkV2ViMyA9IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xyXG4gICAgICB3aW5kb3cud2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSk7XHJcbiAgICAgIGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5lbmFibGUoKTtcclxuICAgIH0gZWxzZSBpZiAod2luZG93LndlYjMpIHtcclxuICAgICAgd2luZG93LndlYjMgPSBuZXcgV2ViMyh3aW5kb3cud2ViMy5jdXJyZW50UHJvdmlkZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFxyXG4gICAgICAgIFwiTm9uLUV0aGVyZXVtIGJyb3dzZXIgZGV0ZWN0ZWQuIFlvdSBzaG91bGQgY29uc2lkZXIgdHJ5aW5nIE1ldGFNYXNrIVwiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB3aW5kb3cuYWxlcnQoXCJUcm91YmxlIGNvbm5lY3RpbmcgdG8geW91IHdlYjMgYnJvd3Nlci4uLlwiKTtcclxuICB9XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYjNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==