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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Layout/AccountContext.jsx":
/*!***********************************!*\
  !*** ./Layout/AccountContext.jsx ***!
  \***********************************/
/*! exports provided: AccountProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountProvider", function() { return AccountProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\crfab\\Desktop\\forsage-boilerplate\\Layout\\AccountContext.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const AccountContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(); // export const AccountProvider = AccountContext.Provider;
// export const AccountConsumer = AccountContext.Consumer;

class AccountProvider extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      account: "",
      detailViewAccount: "",
      matrixView: ""
    });

    _defineProperty(this, "setAccount", account => {
      this.setState(prevState => ({
        account
      }));
    });

    _defineProperty(this, "setDetailViewAccount", detailViewAccount => {
      this.setState(prevState => ({
        detailViewAccount
      }));
    });

    _defineProperty(this, "setMatrixView", matrixView => {
      this.setState(prevState => ({
        matrixView
      }));
    });
  }

  render() {
    const {
      children
    } = this.props;
    const {
      account,
      matrixView,
      detailViewAccount
    } = this.state;
    const {
      setAccount,
      setMatrixView,
      setDetailViewAccount
    } = this;
    return __jsx(AccountContext.Provider, {
      value: {
        detailViewAccount,
        setDetailViewAccount,
        account,
        setAccount,
        matrixView,
        setMatrixView
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 7
      }
    }, children);
  }

}


/* harmony default export */ __webpack_exports__["default"] = (AccountContext);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layout_AccountContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Layout/AccountContext */ "./Layout/AccountContext.jsx");
var _jsxFileName = "C:\\Users\\crfab\\Desktop\\forsage-boilerplate\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




function MyApp({
  Component,
  pageProps
}) {
  const account = {
    address: ""
  };
  const detailViewAccount = {
    detailViewAccount: ""
  };
  const matrixView = {
    matrixView: ""
  };
  return __jsx(_Layout_AccountContext__WEBPACK_IMPORTED_MODULE_2__["AccountProvider"], {
    value: (account, matrixView, detailViewAccount),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vTGF5b3V0L0FjY291bnRDb250ZXh0LmpzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiQWNjb3VudENvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJBY2NvdW50UHJvdmlkZXIiLCJDb21wb25lbnQiLCJhY2NvdW50IiwiZGV0YWlsVmlld0FjY291bnQiLCJtYXRyaXhWaWV3Iiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJyZW5kZXIiLCJjaGlsZHJlbiIsInByb3BzIiwic3RhdGUiLCJzZXRBY2NvdW50Iiwic2V0TWF0cml4VmlldyIsInNldERldGFpbFZpZXdBY2NvdW50IiwiTXlBcHAiLCJwYWdlUHJvcHMiLCJhZGRyZXNzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBRUEsTUFBTUEsY0FBYyxHQUFHQyw0Q0FBSyxDQUFDQyxhQUFOLEVBQXZCLEMsQ0FFQTtBQUNBOztBQUVBLE1BQU1DLGVBQU4sU0FBOEJDLCtDQUE5QixDQUF3QztBQUFBO0FBQUE7O0FBQUEsbUNBRTlCO0FBQ05DLGFBQU8sRUFBRSxFQURIO0FBRU5DLHVCQUFpQixFQUFFLEVBRmI7QUFHTkMsZ0JBQVUsRUFBRTtBQUhOLEtBRjhCOztBQUFBLHdDQVN4QkYsT0FBRCxJQUFhO0FBQ3hCLFdBQUtHLFFBQUwsQ0FBZUMsU0FBRCxLQUFnQjtBQUFFSjtBQUFGLE9BQWhCLENBQWQ7QUFDRCxLQVhxQzs7QUFBQSxrREFhZEMsaUJBQUQsSUFBdUI7QUFDNUMsV0FBS0UsUUFBTCxDQUFlQyxTQUFELEtBQWdCO0FBQUVIO0FBQUYsT0FBaEIsQ0FBZDtBQUNELEtBZnFDOztBQUFBLDJDQWlCckJDLFVBQUQsSUFBZ0I7QUFDOUIsV0FBS0MsUUFBTCxDQUFlQyxTQUFELEtBQWdCO0FBQUVGO0FBQUYsT0FBaEIsQ0FBZDtBQUNELEtBbkJxQztBQUFBOztBQXFCdENHLFFBQU0sR0FBRztBQUNQLFVBQU07QUFBRUM7QUFBRixRQUFlLEtBQUtDLEtBQTFCO0FBQ0EsVUFBTTtBQUFFUCxhQUFGO0FBQVdFLGdCQUFYO0FBQXVCRDtBQUF2QixRQUE2QyxLQUFLTyxLQUF4RDtBQUNBLFVBQU07QUFBRUMsZ0JBQUY7QUFBY0MsbUJBQWQ7QUFBNkJDO0FBQTdCLFFBQXNELElBQTVEO0FBRUEsV0FDRSxNQUFDLGNBQUQsQ0FBZ0IsUUFBaEI7QUFDRSxXQUFLLEVBQUU7QUFDTFYseUJBREs7QUFFTFUsNEJBRks7QUFHTFgsZUFISztBQUlMUyxrQkFKSztBQUtMUCxrQkFMSztBQU1MUTtBQU5LLE9BRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVVHSixRQVZILENBREY7QUFjRDs7QUF4Q3FDOztBQTJDeEM7QUFFZVgsNkVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERBO0FBQ0E7O0FBRUEsU0FBU2lCLEtBQVQsQ0FBZTtBQUFFYixXQUFGO0FBQWFjO0FBQWIsQ0FBZixFQUF5QztBQUN2QyxRQUFNYixPQUFPLEdBQUc7QUFDZGMsV0FBTyxFQUFFO0FBREssR0FBaEI7QUFHQSxRQUFNYixpQkFBaUIsR0FBRztBQUN4QkEscUJBQWlCLEVBQUU7QUFESyxHQUExQjtBQUdBLFFBQU1DLFVBQVUsR0FBRztBQUNqQkEsY0FBVSxFQUFFO0FBREssR0FBbkI7QUFHQSxTQUNFLE1BQUMsc0VBQUQ7QUFBaUIsU0FBSyxHQUFHRixPQUFPLEVBQUVFLFVBQUYsRUFBY0QsaUJBQXhCLENBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFNBQUQsZUFBZVksU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREYsQ0FERjtBQUtEOztBQUVjRCxvRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLGtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBBY2NvdW50Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBBY2NvdW50UHJvdmlkZXIgPSBBY2NvdW50Q29udGV4dC5Qcm92aWRlcjtcclxuLy8gZXhwb3J0IGNvbnN0IEFjY291bnRDb25zdW1lciA9IEFjY291bnRDb250ZXh0LkNvbnN1bWVyO1xyXG5cclxuY2xhc3MgQWNjb3VudFByb3ZpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAvLyBjb250ZXh0IHN0YXRlXHJcbiAgc3RhdGUgPSB7XHJcbiAgICBhY2NvdW50OiBcIlwiLFxyXG4gICAgZGV0YWlsVmlld0FjY291bnQ6IFwiXCIsXHJcbiAgICBtYXRyaXhWaWV3OiBcIlwiLFxyXG4gIH07XHJcblxyXG4gIC8vTWV0aG9kIHRvIHVwZGF0ZVxyXG4gIHNldEFjY291bnQgPSAoYWNjb3VudCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoeyBhY2NvdW50IH0pKTtcclxuICB9O1xyXG5cclxuICBzZXREZXRhaWxWaWV3QWNjb3VudCA9IChkZXRhaWxWaWV3QWNjb3VudCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoeyBkZXRhaWxWaWV3QWNjb3VudCB9KSk7XHJcbiAgfTtcclxuXHJcbiAgc2V0TWF0cml4VmlldyA9IChtYXRyaXhWaWV3KSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7IG1hdHJpeFZpZXcgfSkpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCB7IGFjY291bnQsIG1hdHJpeFZpZXcsIGRldGFpbFZpZXdBY2NvdW50IH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc3QgeyBzZXRBY2NvdW50LCBzZXRNYXRyaXhWaWV3LCBzZXREZXRhaWxWaWV3QWNjb3VudCB9ID0gdGhpcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QWNjb3VudENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgZGV0YWlsVmlld0FjY291bnQsXHJcbiAgICAgICAgICBzZXREZXRhaWxWaWV3QWNjb3VudCxcclxuICAgICAgICAgIGFjY291bnQsXHJcbiAgICAgICAgICBzZXRBY2NvdW50LFxyXG4gICAgICAgICAgbWF0cml4VmlldyxcclxuICAgICAgICAgIHNldE1hdHJpeFZpZXcsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9BY2NvdW50Q29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBBY2NvdW50UHJvdmlkZXIgfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjY291bnRDb250ZXh0O1xyXG4iLCJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB7IEFjY291bnRQcm92aWRlciB9IGZyb20gXCIuLi9MYXlvdXQvQWNjb3VudENvbnRleHRcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IGFjY291bnQgPSB7XG4gICAgYWRkcmVzczogXCJcIixcbiAgfTtcbiAgY29uc3QgZGV0YWlsVmlld0FjY291bnQgPSB7XG4gICAgZGV0YWlsVmlld0FjY291bnQ6IFwiXCIsXG4gIH07XG4gIGNvbnN0IG1hdHJpeFZpZXcgPSB7XG4gICAgbWF0cml4VmlldzogXCJcIixcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8QWNjb3VudFByb3ZpZGVyIHZhbHVlPXsoYWNjb3VudCwgbWF0cml4VmlldywgZGV0YWlsVmlld0FjY291bnQpfT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0FjY291bnRQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9