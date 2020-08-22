module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/ref/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/ref/[id].js":
/*!***************************!*\
  !*** ./pages/ref/[id].js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/globals */ "./utils/globals.js");
/* harmony import */ var _utils_utility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/utility */ "./utils/utility.js");
var _jsxFileName = "C:\\Users\\crfab\\Desktop\\forsage-boilerplate\\pages\\ref\\[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






class RefLink extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  static async getInitialProps(ctx) {
    const res = await fetch("https://api.github.com/repos/vercel/next.js");
    const json = await res.json();
    return {
      stars: json.stargazers_count
    };
  }

  async loadBlockchainData() {
    this.setState({
      id: next_router__WEBPACK_IMPORTED_MODULE_2___default.a.query.id
    });
    const web3 = new web3__WEBPACK_IMPORTED_MODULE_3___default.a(web3__WEBPACK_IMPORTED_MODULE_3___default.a.givenProvider || "http://localhost:8545");
    const accounts = await web3.eth.getAccounts();
    this.setState({
      account: accounts[0]
    });
    const contract = new web3.eth.Contract(_utils_globals__WEBPACK_IMPORTED_MODULE_4__["ABI"], _utils_globals__WEBPACK_IMPORTED_MODULE_4__["ADDRESS"]);
    this.setState({
      contract
    });
    const isExists = await contract.methods.isUserExists(this.state.account).call();
    this.setState({
      isExist: isExists
    });
    const costs = await contract.methods.registrationCost().call();
    this.setState({
      cost: costs
    });
    const refererAddress = await contract.methods.userIds(this.state.id).call();
    this.setState({
      refererAddress
    });
    this.setState({
      isLoading: false
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      isExist: false,
      cost: "",
      loading: false,
      id: ""
    };
  }

  async register(_refererAddress) {
    if (this.state.isExist) {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/dashboard");
    } else {
      await this.state.contract.methods.registrationExt(_refererAddress).send({
        value: this.state.cost,
        from: this.state.account
      }).then(function (receipt) {
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/dashboard");
      });
    }
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
      className: "jsx-2670207790" + " " + "header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "jsx-2670207790" + " " + "hero-image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "jsx-2670207790" + " " + "picture-holder",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
    })), __jsx("div", {
      className: "jsx-2670207790" + " " + "form-part",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 11
      }
    }, __jsx("h1", {
      className: "jsx-2670207790",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }
    }, "Register"), __jsx("p", {
      className: "jsx-2670207790",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }
    }, "Your inviter is ID ", this.state.id), __jsx("form", {
      onSubmit: async event => {
        event.preventDefault();
        await Object(_utils_utility__WEBPACK_IMPORTED_MODULE_5__["loadWeb3"])();
        await this.loadBlockchainData();
        await this.register(this.state.refererAddress);
      },
      className: "jsx-2670207790" + " " + "automatic",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }
    }, __jsx("button", {
      className: "jsx-2670207790" + " " + "auto",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 15
      }
    }, "Register")), __jsx("p", {
      className: "jsx-2670207790",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 13
      }
    }, "Telegram Channel @cryptoofficial"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2670207790",
      __self: this
    }, ".header.jsx-2670207790{width:100vw;height:100vh;overflow:hidden;background:rgba(16,1,62,1);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}@media only screen and (max-width:1000px){.header.jsx-2670207790{height:auto;}}.hero-image.jsx-2670207790{width:70vw;height:100vw;}.picture-holder.jsx-2670207790{width:100%;height:100vh;background-image:url(\"/assets/img/hero-picture.jpg\");background-repeat:no-repeat;background-size:contain;background-position:center;}.hero.jsx-2670207790{width:100%;}.form-part.jsx-2670207790{background:rgba(28,22,85,1);width:30vw;padding:60px;color:white;height:100vh;text-align:center;}p.jsx-2670207790{color:grey;}h1.jsx-2670207790{margin-top:15vh;margin-bottom:5vh;font-size:1.5em;}button.jsx-2670207790{width:100%;text-align:center;padding:20px 0;border-radius:30px;color:white;font-size:1.2em;}@media only screen and (max-width:1000px){.hero-image.jsx-2670207790{display:none;}.form-part.jsx-2670207790{width:95vw;margin:auto auto;}}.auto.jsx-2670207790{background:rgb(0,237,47);background:linear-gradient( 306deg, rgba(0,237,47,1) 29%, rgba(0,179,35,1) 64%, rgba(0,179,35,1) 83% );box-shadow:none;outline:none;border:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXHBhZ2VzXFxyZWZcXFtpZF0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUZvQixBQUd5QixBQVFFLEFBSUgsQUFJQSxBQVFBLEFBR29CLEFBU3BCLEFBR0ssQUFLTCxBQVVJLEFBR0YsQUFLYyxXQWpEZCxBQUlBLEFBUWYsQUFZQSxBQVFvQixBQWFDLENBekROLEFBUWIsQ0E4Q0EsR0Fma0IsUUExQnBCLEFBSXVELENBaEJyQyxBQWtFZixHQXhDVSxBQStCWCxDQWJlLEtBTEMsS0FaSCxFQTFCaUIsR0E0Q1gsTUFMckIsRUFaYyxXQWtCQSxDQWpCQyxJQTNCQSxPQTZDRyxFQTlCWSxBQWFWLGNBa0JwQixJQWpCQSxVQWIwQix1QkFpRFIsQ0FoRFcsYUFoQjdCLEVBaUVlLFlBaERmLENBaURjLFlBQ2QiLCJmaWxlIjoiQzpcXFVzZXJzXFxjcmZhYlxcRGVza3RvcFxcZm9yc2FnZS1ib2lsZXJwbGF0ZVxccGFnZXNcXHJlZlxcW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFdlYjMgZnJvbSBcIndlYjNcIjtcclxuaW1wb3J0IHsgQUJJLCBBRERSRVNTLCBPV05FUiB9IGZyb20gXCIuLi8uLi91dGlscy9nbG9iYWxzXCI7XHJcbmltcG9ydCB7IGxvYWRXZWIzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3V0aWxpdHlcIjtcclxuXHJcbmNsYXNzIFJlZkxpbmsgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoY3R4KSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvdmVyY2VsL25leHQuanNcIik7XHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHJldHVybiB7IHN0YXJzOiBqc29uLnN0YXJnYXplcnNfY291bnQgfTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGxvYWRCbG9ja2NoYWluRGF0YSgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpZDogUm91dGVyLnF1ZXJ5LmlkIH0pO1xyXG4gICAgY29uc3Qgd2ViMyA9IG5ldyBXZWIzKFdlYjMuZ2l2ZW5Qcm92aWRlciB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6ODU0NVwiKTtcclxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBhY2NvdW50OiBhY2NvdW50c1swXSB9KTtcclxuICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KEFCSSwgQUREUkVTUyk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY29udHJhY3QgfSk7XHJcbiAgICBjb25zdCBpc0V4aXN0cyA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgLmlzVXNlckV4aXN0cyh0aGlzLnN0YXRlLmFjY291bnQpXHJcbiAgICAgIC5jYWxsKCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNFeGlzdDogaXNFeGlzdHMgfSk7XHJcbiAgICBjb25zdCBjb3N0cyA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMucmVnaXN0cmF0aW9uQ29zdCgpLmNhbGwoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjb3N0OiBjb3N0cyB9KTtcclxuICAgIGNvbnN0IHJlZmVyZXJBZGRyZXNzID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy51c2VySWRzKHRoaXMuc3RhdGUuaWQpLmNhbGwoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyByZWZlcmVyQWRkcmVzcyB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0xvYWRpbmc6IGZhbHNlIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGFjY291bnQ6IFwiXCIsXHJcbiAgICAgIGlzRXhpc3Q6IGZhbHNlLFxyXG4gICAgICBjb3N0OiBcIlwiLFxyXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgaWQ6IFwiXCIsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgcmVnaXN0ZXIoX3JlZmVyZXJBZGRyZXNzKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5pc0V4aXN0KSB7XHJcbiAgICAgIFJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGF3YWl0IHRoaXMuc3RhdGUuY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgIC5yZWdpc3RyYXRpb25FeHQoX3JlZmVyZXJBZGRyZXNzKVxyXG4gICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLmNvc3QsXHJcbiAgICAgICAgICBmcm9tOiB0aGlzLnN0YXRlLmFjY291bnQsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVjZWlwdCkge1xyXG4gICAgICAgICAgUm91dGVyLnB1c2goXCIvZGFzaGJvYXJkXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWltYWdlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGljdHVyZS1ob2xkZXJcIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXBhcnRcIj5cclxuICAgICAgICAgICAgPGgxPlJlZ2lzdGVyPC9oMT5cclxuICAgICAgICAgICAgPHA+WW91ciBpbnZpdGVyIGlzIElEIHt0aGlzLnN0YXRlLmlkfTwvcD5cclxuICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdXRvbWF0aWNcIlxyXG4gICAgICAgICAgICAgIG9uU3VibWl0PXthc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBsb2FkV2ViMygpO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5sb2FkQmxvY2tjaGFpbkRhdGEoKTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucmVnaXN0ZXIodGhpcy5zdGF0ZS5yZWZlcmVyQWRkcmVzcyk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYXV0b1wiPlJlZ2lzdGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgIDxwPlRlbGVncmFtIENoYW5uZWwgQGNyeXB0b29mZmljaWFsPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxNiwgMSwgNjIsIDEpO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaGVyby1pbWFnZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3MHZ3O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZ3O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnBpY3R1cmUtaG9sZGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2hlcm8tcGljdHVyZS5qcGdcIik7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhlcm8ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb3JtLXBhcnQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI4LCAyMiwgODUsIDEpO1xyXG4gICAgICAgICAgICB3aWR0aDogMzB2dztcclxuICAgICAgICAgICAgcGFkZGluZzogNjBweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXZoO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1dmg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gICAgICAgICAgICAuaGVyby1pbWFnZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZm9ybS1wYXJ0IHtcclxuICAgICAgICAgICAgICB3aWR0aDogOTV2dztcclxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmF1dG8ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMjM3LCA0Nyk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICAzMDZkZWcsXHJcbiAgICAgICAgICAgICAgcmdiYSgwLCAyMzcsIDQ3LCAxKSAyOSUsXHJcbiAgICAgICAgICAgICAgcmdiYSgwLCAxNzksIDM1LCAxKSA2NCUsXHJcbiAgICAgICAgICAgICAgcmdiYSgwLCAxNzksIDM1LCAxKSA4MyVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVmTGluaztcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\pages\\\\ref\\\\[id].js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (RefLink);

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
const BASE_URL = "https://amnext.netlify.app/"; // https://mumbai-explorer.matic.today/address/0xe1bBb63e8cAC9361f0c07Ad6AEE12c2893D42735/contracts

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcmVmLy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9nbG9iYWxzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3V0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWIzXCIiXSwibmFtZXMiOlsiUmVmTGluayIsIkNvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInJlcyIsImZldGNoIiwianNvbiIsInN0YXJzIiwic3RhcmdhemVyc19jb3VudCIsImxvYWRCbG9ja2NoYWluRGF0YSIsInNldFN0YXRlIiwiaWQiLCJSb3V0ZXIiLCJxdWVyeSIsIndlYjMiLCJXZWIzIiwiZ2l2ZW5Qcm92aWRlciIsImFjY291bnRzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50IiwiY29udHJhY3QiLCJDb250cmFjdCIsIkFCSSIsIkFERFJFU1MiLCJpc0V4aXN0cyIsIm1ldGhvZHMiLCJpc1VzZXJFeGlzdHMiLCJzdGF0ZSIsImNhbGwiLCJpc0V4aXN0IiwiY29zdHMiLCJyZWdpc3RyYXRpb25Db3N0IiwiY29zdCIsInJlZmVyZXJBZGRyZXNzIiwidXNlcklkcyIsImlzTG9hZGluZyIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJsb2FkaW5nIiwicmVnaXN0ZXIiLCJfcmVmZXJlckFkZHJlc3MiLCJwdXNoIiwicmVnaXN0cmF0aW9uRXh0Iiwic2VuZCIsInZhbHVlIiwiZnJvbSIsInRoZW4iLCJyZWNlaXB0IiwicmVuZGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImxvYWRXZWIzIiwidHlwZSIsInN0YXRlTXV0YWJpbGl0eSIsInBheWFibGUiLCJvdXRwdXRzIiwibmFtZSIsImludGVybmFsVHlwZSIsImlucHV0cyIsImNvbnN0YW50IiwiaW5kZXhlZCIsImFub255bW91cyIsIk9XTkVSIiwiQkFTRV9VUkwiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImVuYWJsZSIsImN1cnJlbnRQcm92aWRlciIsImFsZXJ0IiwiZXJyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxPQUFOLFNBQXNCQywrQ0FBdEIsQ0FBZ0M7QUFDOUIsZUFBYUMsZUFBYixDQUE2QkMsR0FBN0IsRUFBa0M7QUFDaEMsVUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQyw2Q0FBRCxDQUF2QjtBQUNBLFVBQU1DLElBQUksR0FBRyxNQUFNRixHQUFHLENBQUNFLElBQUosRUFB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LENBQWEsMkNBQWI7QUFDRDtBQUNGLENBZk0sQzs7Ozs7Ozs7Ozs7QUNMUCx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJwYWdlcy9yZWYvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvcmVmL1tpZF0uanNcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCI7XHJcbmltcG9ydCB7IEFCSSwgQUREUkVTUywgT1dORVIgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZ2xvYmFsc1wiO1xyXG5pbXBvcnQgeyBsb2FkV2ViMyB9IGZyb20gXCIuLi8uLi91dGlscy91dGlsaXR5XCI7XHJcblxyXG5jbGFzcyBSZWZMaW5rIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGN0eCkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL3ZlcmNlbC9uZXh0LmpzXCIpO1xyXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICByZXR1cm4geyBzdGFyczoganNvbi5zdGFyZ2F6ZXJzX2NvdW50IH07XHJcbiAgfVxyXG5cclxuICBhc3luYyBsb2FkQmxvY2tjaGFpbkRhdGEoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaWQ6IFJvdXRlci5xdWVyeS5pZCB9KTtcclxuICAgIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyhXZWIzLmdpdmVuUHJvdmlkZXIgfHwgXCJodHRwOi8vbG9jYWxob3N0Ojg1NDVcIik7XHJcbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgYWNjb3VudDogYWNjb3VudHNbMF0gfSk7XHJcbiAgICBjb25zdCBjb250cmFjdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChBQkksIEFERFJFU1MpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRyYWN0IH0pO1xyXG4gICAgY29uc3QgaXNFeGlzdHMgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzXHJcbiAgICAgIC5pc1VzZXJFeGlzdHModGhpcy5zdGF0ZS5hY2NvdW50KVxyXG4gICAgICAuY2FsbCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzRXhpc3Q6IGlzRXhpc3RzIH0pO1xyXG4gICAgY29uc3QgY29zdHMgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLnJlZ2lzdHJhdGlvbkNvc3QoKS5jYWxsKCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY29zdDogY29zdHMgfSk7XHJcbiAgICBjb25zdCByZWZlcmVyQWRkcmVzcyA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMudXNlcklkcyh0aGlzLnN0YXRlLmlkKS5jYWxsKCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcmVmZXJlckFkZHJlc3MgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiBmYWxzZSB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBhY2NvdW50OiBcIlwiLFxyXG4gICAgICBpc0V4aXN0OiBmYWxzZSxcclxuICAgICAgY29zdDogXCJcIixcclxuICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIGlkOiBcIlwiLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHJlZ2lzdGVyKF9yZWZlcmVyQWRkcmVzcykge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuaXNFeGlzdCkge1xyXG4gICAgICBSb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhd2FpdCB0aGlzLnN0YXRlLmNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAucmVnaXN0cmF0aW9uRXh0KF9yZWZlcmVyQWRkcmVzcylcclxuICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5jb3N0LFxyXG4gICAgICAgICAgZnJvbTogdGhpcy5zdGF0ZS5hY2NvdW50LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlY2VpcHQpIHtcclxuICAgICAgICAgIFJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1pbWFnZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpY3R1cmUtaG9sZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1wYXJ0XCI+XHJcbiAgICAgICAgICAgIDxoMT5SZWdpc3RlcjwvaDE+XHJcbiAgICAgICAgICAgIDxwPllvdXIgaW52aXRlciBpcyBJRCB7dGhpcy5zdGF0ZS5pZH08L3A+XHJcbiAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXV0b21hdGljXCJcclxuICAgICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgbG9hZFdlYjMoKTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMubG9hZEJsb2NrY2hhaW5EYXRhKCk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnJlZ2lzdGVyKHRoaXMuc3RhdGUucmVmZXJlckFkZHJlc3MpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImF1dG9cIj5SZWdpc3RlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICA8cD5UZWxlZ3JhbSBDaGFubmVsIEBjcnlwdG9vZmZpY2lhbDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTYsIDEsIDYyLCAxKTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhlcm8taW1hZ2Uge1xyXG4gICAgICAgICAgICB3aWR0aDogNzB2dztcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2dztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5waWN0dXJlLWhvbGRlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9oZXJvLXBpY3R1cmUuanBnXCIpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5oZXJvIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9ybS1wYXJ0IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyOCwgMjIsIDg1LCAxKTtcclxuICAgICAgICAgICAgd2lkdGg6IDMwdnc7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDYwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTV2aDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXZoO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgICAgICAgICAgLmhlcm8taW1hZ2Uge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZvcm0tcGFydCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDk1dnc7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hdXRvIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDAsIDIzNywgNDcpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgMzA2ZGVnLFxyXG4gICAgICAgICAgICAgIHJnYmEoMCwgMjM3LCA0NywgMSkgMjklLFxyXG4gICAgICAgICAgICAgIHJnYmEoMCwgMTc5LCAzNSwgMSkgNjQlLFxyXG4gICAgICAgICAgICAgIHJnYmEoMCwgMTc5LCAzNSwgMSkgODMlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZkxpbms7XHJcbiIsImV4cG9ydCBjb25zdCBBQkkgPSBbXHJcbiAge1xyXG4gICAgdHlwZTogXCJmdW5jdGlvblwiLFxyXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcclxuICAgIHBheWFibGU6IGZhbHNlLFxyXG4gICAgb3V0cHV0czogW3sgdHlwZTogXCJib29sXCIsIG5hbWU6IFwiXCIsIGludGVybmFsVHlwZTogXCJib29sXCIgfV0sXHJcbiAgICBuYW1lOiBcInVzZXJzQWN0aXZlWDNMZXZlbHNcIixcclxuICAgIGlucHV0czogW1xyXG4gICAgICB7IHR5cGU6IFwiYWRkcmVzc1wiLCBuYW1lOiBcInVzZXJBZGRyZXNzXCIsIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIgfSxcclxuICAgICAgeyB0eXBlOiBcInVpbnQ4XCIsIG5hbWU6IFwibGV2ZWxcIiwgaW50ZXJuYWxUeXBlOiBcInVpbnQ4XCIgfSxcclxuICAgIF0sXHJcbiAgICBjb25zdGFudDogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcclxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXHJcbiAgICBwYXlhYmxlOiBmYWxzZSxcclxuICAgIG91dHB1dHM6IFt7IHR5cGU6IFwidWludDI1NlwiLCBuYW1lOiBcIlwiLCBpbnRlcm5hbFR5cGU6IFwidWludDI1NlwiIH1dLFxyXG4gICAgbmFtZTogXCJiYWxhbmNlc1wiLFxyXG4gICAgaW5wdXRzOiBbeyB0eXBlOiBcImFkZHJlc3NcIiwgbmFtZTogXCJcIiwgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIiB9XSxcclxuICAgIGNvbnN0YW50OiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZTogXCJmdW5jdGlvblwiLFxyXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcclxuICAgIHBheWFibGU6IGZhbHNlLFxyXG4gICAgb3V0cHV0czogW3sgdHlwZTogXCJhZGRyZXNzXCIsIG5hbWU6IFwiXCIsIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIgfV0sXHJcbiAgICBuYW1lOiBcImlkVG9BZGRyZXNzXCIsXHJcbiAgICBpbnB1dHM6IFt7IHR5cGU6IFwidWludDI1NlwiLCBuYW1lOiBcIlwiLCBpbnRlcm5hbFR5cGU6IFwidWludDI1NlwiIH1dLFxyXG4gICAgY29uc3RhbnQ6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXHJcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxyXG4gICAgcGF5YWJsZTogZmFsc2UsXHJcbiAgICBvdXRwdXRzOiBbeyB0eXBlOiBcInVpbnQyNTZcIiwgbmFtZTogXCJcIiwgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZcIiB9XSxcclxuICAgIG5hbWU6IFwibGFzdFVzZXJJZFwiLFxyXG4gICAgaW5wdXRzOiBbXSxcclxuICAgIGNvbnN0YW50OiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZTogXCJmdW5jdGlvblwiLFxyXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcclxuICAgIHBheWFibGU6IGZhbHNlLFxyXG4gICAgb3V0cHV0czogW3sgdHlwZTogXCJhZGRyZXNzXCIsIG5hbWU6IFwiXCIsIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIgfV0sXHJcbiAgICBuYW1lOiBcInVzZXJJZHNcIixcclxuICAgIGlucHV0czogW3sgdHlwZTogXCJ1aW50MjU2XCIsIG5hbWU6IFwiXCIsIGludGVybmFsVHlwZTogXCJ1aW50MjU2XCIgfV0sXHJcbiAgICBjb25zdGFudDogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcclxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXHJcbiAgICBwYXlhYmxlOiBmYWxzZSxcclxuICAgIG91dHB1dHM6IFt7IHR5cGU6IFwiYm9vbFwiLCBuYW1lOiBcIlwiLCBpbnRlcm5hbFR5cGU6IFwiYm9vbFwiIH1dLFxyXG4gICAgbmFtZTogXCJpc1VzZXJFeGlzdHNcIixcclxuICAgIGlucHV0czogW3sgdHlwZTogXCJhZGRyZXNzXCIsIG5hbWU6IFwidXNlclwiLCBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiIH1dLFxyXG4gICAgY29uc3RhbnQ6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXHJcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwicGF5YWJsZVwiLFxyXG4gICAgcGF5YWJsZTogdHJ1ZSxcclxuICAgIG91dHB1dHM6IFtdLFxyXG4gICAgbmFtZTogXCJyZWdpc3RyYXRpb25FeHRcIixcclxuICAgIGlucHV0czogW1xyXG4gICAgICB7IHR5cGU6IFwiYWRkcmVzc1wiLCBuYW1lOiBcInJlZmVycmVyQWRkcmVzc1wiLCBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiIH0sXHJcbiAgICBdLFxyXG4gICAgY29uc3RhbnQ6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZTogXCJmdW5jdGlvblwiLFxyXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcclxuICAgIHBheWFibGU6IGZhbHNlLFxyXG4gICAgb3V0cHV0czogW1xyXG4gICAgICB7IHR5cGU6IFwiYWRkcmVzc1wiLCBuYW1lOiBcIlwiLCBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiIH0sXHJcbiAgICAgIHsgdHlwZTogXCJhZGRyZXNzW11cIiwgbmFtZTogXCJcIiwgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NbXVwiIH0sXHJcbiAgICAgIHsgdHlwZTogXCJib29sXCIsIG5hbWU6IFwiXCIsIGludGVybmFsVHlwZTogXCJib29sXCIgfSxcclxuICAgIF0sXHJcbiAgICBuYW1lOiBcInVzZXJzWDNNYXRyaXhcIixcclxuICAgIGlucHV0czogW1xyXG4gICAgICB7IHR5cGU6IFwiYWRkcmVzc1wiLCBuYW1lOiBcInVzZXJBZGRyZXNzXCIsIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIgfSxcclxuICAgICAgeyB0eXBlOiBcInVpbnQ4XCIsIG5hbWU6IFwibGV2ZWxcIiwgaW50ZXJuYWxUeXBlOiBcInVpbnQ4XCIgfSxcclxuICAgIF0sXHJcbiAgICBjb25zdGFudDogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcclxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXHJcbiAgICBwYXlhYmxlOiBmYWxzZSxcclxuICAgIG91dHB1dHM6IFt7IHR5cGU6IFwiYWRkcmVzc1wiLCBuYW1lOiBcIlwiLCBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiIH1dLFxyXG4gICAgbmFtZTogXCJvd25lclwiLFxyXG4gICAgaW5wdXRzOiBbXSxcclxuICAgIGNvbnN0YW50OiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZTogXCJmdW5jdGlvblwiLFxyXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcclxuICAgIHBheWFibGU6IGZhbHNlLFxyXG4gICAgb3V0cHV0czogW1xyXG4gICAgICB7IHR5cGU6IFwiYWRkcmVzc1wiLCBuYW1lOiBcIlwiLCBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiIH0sXHJcbiAgICAgIHsgdHlwZTogXCJhZGRyZXNzW11cIiwgbmFtZTogXCJcIiwgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NbXVwiIH0sXHJcbiAgICAgIHsgdHlwZTogXCJhZGRyZXNzW11cIiwgbmFtZTogXCJcIiwgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NbXVwiIH0sXHJcbiAgICAgIHsgdHlwZTogXCJib29sXCIsIG5hbWU6IFwiXCIsIGludGVybmFsVHlwZTogXCJib29sXCIgfSxcclxuICAgICAgeyB0eXBlOiBcImFkZHJlc3NcIiwgbmFtZTogXCJcIiwgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIiB9LFxyXG4gICAgXSxcclxuICAgIG5hbWU6IFwidXNlcnNYNk1hdHJpeFwiLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgIHsgdHlwZTogXCJhZGRyZXNzXCIsIG5hbWU6IFwidXNlckFkZHJlc3NcIiwgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIiB9LFxyXG4gICAgICB7IHR5cGU6IFwidWludDhcIiwgbmFtZTogXCJsZXZlbFwiLCBpbnRlcm5hbFR5cGU6IFwidWludDhcIiB9LFxyXG4gICAgXSxcclxuICAgIGNvbnN0YW50OiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZTogXCJmdW5jdGlvblwiLFxyXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcclxuICAgIHBheWFibGU6IGZhbHNlLFxyXG4gICAgb3V0cHV0czogW1xyXG4gICAgICB7IHR5cGU6IFwidWludDI1NlwiLCBuYW1lOiBcImlkXCIsIGludGVybmFsVHlwZTogXCJ1aW50MjU2XCIgfSxcclxuICAgICAgeyB0eXBlOiBcImFkZHJlc3NcIiwgbmFtZTogXCJyZWZlcnJlclwiLCBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiIH0sXHJcbiAgICAgIHsgdHlwZTogXCJ1aW50MjU2XCIsIG5hbWU6IFwicGFydG5lcnNDb3VudFwiLCBpbnRlcm5hbFR5cGU6IFwidWludDI1NlwiIH0sXHJcbiAgICBdLFxyXG4gICAgbmFtZTogXCJ1c2Vyc1wiLFxyXG4gICAgaW5wdXRzOiBbeyB0eXBlOiBcImFkZHJlc3NcIiwgbmFtZTogXCJcIiwgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIiB9XSxcclxuICAgIGNvbnN0YW50OiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZTogXCJmdW5jdGlvblwiLFxyXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcclxuICAgIHBheWFibGU6IGZhbHNlLFxyXG4gICAgb3V0cHV0czogW3sgdHlwZTogXCJib29sXCIsIG5hbWU6IFwiXCIsIGludGVybmFsVHlwZTogXCJib29sXCIgfV0sXHJcbiAgICBuYW1lOiBcInVzZXJzQWN0aXZlWDZMZXZlbHNcIixcclxuICAgIGlucHV0czogW1xyXG4gICAgICB7IHR5cGU6IFwiYWRkcmVzc1wiLCBuYW1lOiBcInVzZXJBZGRyZXNzXCIsIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIgfSxcclxuICAgICAgeyB0eXBlOiBcInVpbnQ4XCIsIG5hbWU6IFwibGV2ZWxcIiwgaW50ZXJuYWxUeXBlOiBcInVpbnQ4XCIgfSxcclxuICAgIF0sXHJcbiAgICBjb25zdGFudDogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcclxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJwYXlhYmxlXCIsXHJcbiAgICBwYXlhYmxlOiB0cnVlLFxyXG4gICAgb3V0cHV0czogW10sXHJcbiAgICBuYW1lOiBcImJ1eU5ld0xldmVsXCIsXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgeyB0eXBlOiBcInVpbnQ4XCIsIG5hbWU6IFwibWF0cml4XCIsIGludGVybmFsVHlwZTogXCJ1aW50OFwiIH0sXHJcbiAgICAgIHsgdHlwZTogXCJ1aW50OFwiLCBuYW1lOiBcImxldmVsXCIsIGludGVybmFsVHlwZTogXCJ1aW50OFwiIH0sXHJcbiAgICBdLFxyXG4gICAgY29uc3RhbnQ6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZTogXCJmdW5jdGlvblwiLFxyXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcclxuICAgIHBheWFibGU6IGZhbHNlLFxyXG4gICAgb3V0cHV0czogW3sgdHlwZTogXCJ1aW50MjU2XCIsIG5hbWU6IFwiXCIsIGludGVybmFsVHlwZTogXCJ1aW50MjU2XCIgfV0sXHJcbiAgICBuYW1lOiBcInJlZ2lzdHJhdGlvbkNvc3RcIixcclxuICAgIGlucHV0czogW10sXHJcbiAgICBjb25zdGFudDogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcclxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXHJcbiAgICBwYXlhYmxlOiBmYWxzZSxcclxuICAgIG91dHB1dHM6IFt7IHR5cGU6IFwiYWRkcmVzc1wiLCBuYW1lOiBcIlwiLCBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiIH1dLFxyXG4gICAgbmFtZTogXCJmaW5kRnJlZVg2UmVmZXJyZXJcIixcclxuICAgIGlucHV0czogW1xyXG4gICAgICB7IHR5cGU6IFwiYWRkcmVzc1wiLCBuYW1lOiBcInVzZXJBZGRyZXNzXCIsIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIgfSxcclxuICAgICAgeyB0eXBlOiBcInVpbnQ4XCIsIG5hbWU6IFwibGV2ZWxcIiwgaW50ZXJuYWxUeXBlOiBcInVpbnQ4XCIgfSxcclxuICAgIF0sXHJcbiAgICBjb25zdGFudDogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcclxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXHJcbiAgICBwYXlhYmxlOiBmYWxzZSxcclxuICAgIG91dHB1dHM6IFt7IHR5cGU6IFwidWludDI1NlwiLCBuYW1lOiBcIlwiLCBpbnRlcm5hbFR5cGU6IFwidWludDI1NlwiIH1dLFxyXG4gICAgbmFtZTogXCJsZXZlbFByaWNlXCIsXHJcbiAgICBpbnB1dHM6IFt7IHR5cGU6IFwidWludDhcIiwgbmFtZTogXCJcIiwgaW50ZXJuYWxUeXBlOiBcInVpbnQ4XCIgfV0sXHJcbiAgICBjb25zdGFudDogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcclxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXHJcbiAgICBwYXlhYmxlOiBmYWxzZSxcclxuICAgIG91dHB1dHM6IFt7IHR5cGU6IFwiYWRkcmVzc1wiLCBuYW1lOiBcIlwiLCBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiIH1dLFxyXG4gICAgbmFtZTogXCJmaW5kRnJlZVgzUmVmZXJyZXJcIixcclxuICAgIGlucHV0czogW1xyXG4gICAgICB7IHR5cGU6IFwiYWRkcmVzc1wiLCBuYW1lOiBcInVzZXJBZGRyZXNzXCIsIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIgfSxcclxuICAgICAgeyB0eXBlOiBcInVpbnQ4XCIsIG5hbWU6IFwibGV2ZWxcIiwgaW50ZXJuYWxUeXBlOiBcInVpbnQ4XCIgfSxcclxuICAgIF0sXHJcbiAgICBjb25zdGFudDogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGU6IFwiY29uc3RydWN0b3JcIixcclxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJub25wYXlhYmxlXCIsXHJcbiAgICBwYXlhYmxlOiBmYWxzZSxcclxuICAgIGlucHV0czogW3sgdHlwZTogXCJhZGRyZXNzXCIsIG5hbWU6IFwib3duZXJcIiwgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIiB9XSxcclxuICB9LFxyXG4gIHsgdHlwZTogXCJmYWxsYmFja1wiLCBzdGF0ZU11dGFiaWxpdHk6IFwicGF5YWJsZVwiLCBwYXlhYmxlOiB0cnVlIH0sXHJcbiAge1xyXG4gICAgdHlwZTogXCJldmVudFwiLFxyXG4gICAgbmFtZTogXCJSZWdpc3RyYXRpb25cIixcclxuICAgIGlucHV0czogW1xyXG4gICAgICB7IHR5cGU6IFwiYWRkcmVzc1wiLCBuYW1lOiBcInVzZXJcIiwgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIiwgaW5kZXhlZDogdHJ1ZSB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogXCJhZGRyZXNzXCIsXHJcbiAgICAgICAgbmFtZTogXCJyZWZlcnJlclwiLFxyXG4gICAgICAgIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIsXHJcbiAgICAgICAgaW5kZXhlZDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6IFwidWludDI1NlwiLFxyXG4gICAgICAgIG5hbWU6IFwidXNlcklkXCIsXHJcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZcIixcclxuICAgICAgICBpbmRleGVkOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogXCJ1aW50MjU2XCIsXHJcbiAgICAgICAgbmFtZTogXCJyZWZlcnJlcklkXCIsXHJcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZcIixcclxuICAgICAgICBpbmRleGVkOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBhbm9ueW1vdXM6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZTogXCJldmVudFwiLFxyXG4gICAgbmFtZTogXCJSZWludmVzdFwiLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgIHsgdHlwZTogXCJhZGRyZXNzXCIsIG5hbWU6IFwidXNlclwiLCBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiLCBpbmRleGVkOiB0cnVlIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiBcImFkZHJlc3NcIixcclxuICAgICAgICBuYW1lOiBcImN1cnJlbnRSZWZlcnJlclwiLFxyXG4gICAgICAgIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIsXHJcbiAgICAgICAgaW5kZXhlZDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6IFwiYWRkcmVzc1wiLFxyXG4gICAgICAgIG5hbWU6IFwiY2FsbGVyXCIsXHJcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIixcclxuICAgICAgICBpbmRleGVkOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICB7IHR5cGU6IFwidWludDhcIiwgbmFtZTogXCJtYXRyaXhcIiwgaW50ZXJuYWxUeXBlOiBcInVpbnQ4XCIsIGluZGV4ZWQ6IGZhbHNlIH0sXHJcbiAgICAgIHsgdHlwZTogXCJ1aW50OFwiLCBuYW1lOiBcImxldmVsXCIsIGludGVybmFsVHlwZTogXCJ1aW50OFwiLCBpbmRleGVkOiBmYWxzZSB9LFxyXG4gICAgXSxcclxuICAgIGFub255bW91czogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlOiBcImV2ZW50XCIsXHJcbiAgICBuYW1lOiBcIlVwZ3JhZGVcIixcclxuICAgIGlucHV0czogW1xyXG4gICAgICB7IHR5cGU6IFwiYWRkcmVzc1wiLCBuYW1lOiBcInVzZXJcIiwgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIiwgaW5kZXhlZDogdHJ1ZSB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogXCJhZGRyZXNzXCIsXHJcbiAgICAgICAgbmFtZTogXCJyZWZlcnJlclwiLFxyXG4gICAgICAgIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIsXHJcbiAgICAgICAgaW5kZXhlZDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgeyB0eXBlOiBcInVpbnQ4XCIsIG5hbWU6IFwibWF0cml4XCIsIGludGVybmFsVHlwZTogXCJ1aW50OFwiLCBpbmRleGVkOiBmYWxzZSB9LFxyXG4gICAgICB7IHR5cGU6IFwidWludDhcIiwgbmFtZTogXCJsZXZlbFwiLCBpbnRlcm5hbFR5cGU6IFwidWludDhcIiwgaW5kZXhlZDogZmFsc2UgfSxcclxuICAgIF0sXHJcbiAgICBhbm9ueW1vdXM6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZTogXCJldmVudFwiLFxyXG4gICAgbmFtZTogXCJOZXdVc2VyUGxhY2VcIixcclxuICAgIGlucHV0czogW1xyXG4gICAgICB7IHR5cGU6IFwiYWRkcmVzc1wiLCBuYW1lOiBcInVzZXJcIiwgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIiwgaW5kZXhlZDogdHJ1ZSB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogXCJhZGRyZXNzXCIsXHJcbiAgICAgICAgbmFtZTogXCJyZWZlcnJlclwiLFxyXG4gICAgICAgIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIsXHJcbiAgICAgICAgaW5kZXhlZDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgeyB0eXBlOiBcInVpbnQ4XCIsIG5hbWU6IFwibWF0cml4XCIsIGludGVybmFsVHlwZTogXCJ1aW50OFwiLCBpbmRleGVkOiBmYWxzZSB9LFxyXG4gICAgICB7IHR5cGU6IFwidWludDhcIiwgbmFtZTogXCJsZXZlbFwiLCBpbnRlcm5hbFR5cGU6IFwidWludDhcIiwgaW5kZXhlZDogZmFsc2UgfSxcclxuICAgICAgeyB0eXBlOiBcInVpbnQ4XCIsIG5hbWU6IFwicGxhY2VcIiwgaW50ZXJuYWxUeXBlOiBcInVpbnQ4XCIsIGluZGV4ZWQ6IGZhbHNlIH0sXHJcbiAgICBdLFxyXG4gICAgYW5vbnltb3VzOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGU6IFwiZXZlbnRcIixcclxuICAgIG5hbWU6IFwiTWlzc2VkRXRoUmVjZWl2ZVwiLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiBcImFkZHJlc3NcIixcclxuICAgICAgICBuYW1lOiBcInJlY2VpdmVyXCIsXHJcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIixcclxuICAgICAgICBpbmRleGVkOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICB7IHR5cGU6IFwiYWRkcmVzc1wiLCBuYW1lOiBcImZyb21cIiwgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIiwgaW5kZXhlZDogdHJ1ZSB9LFxyXG4gICAgICB7IHR5cGU6IFwidWludDhcIiwgbmFtZTogXCJtYXRyaXhcIiwgaW50ZXJuYWxUeXBlOiBcInVpbnQ4XCIsIGluZGV4ZWQ6IGZhbHNlIH0sXHJcbiAgICAgIHsgdHlwZTogXCJ1aW50OFwiLCBuYW1lOiBcImxldmVsXCIsIGludGVybmFsVHlwZTogXCJ1aW50OFwiLCBpbmRleGVkOiBmYWxzZSB9LFxyXG4gICAgXSxcclxuICAgIGFub255bW91czogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlOiBcImV2ZW50XCIsXHJcbiAgICBuYW1lOiBcIlNlbnRFeHRyYUV0aERpdmlkZW5kc1wiLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgIHsgdHlwZTogXCJhZGRyZXNzXCIsIG5hbWU6IFwiZnJvbVwiLCBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiLCBpbmRleGVkOiB0cnVlIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiBcImFkZHJlc3NcIixcclxuICAgICAgICBuYW1lOiBcInJlY2VpdmVyXCIsXHJcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIixcclxuICAgICAgICBpbmRleGVkOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICB7IHR5cGU6IFwidWludDhcIiwgbmFtZTogXCJtYXRyaXhcIiwgaW50ZXJuYWxUeXBlOiBcInVpbnQ4XCIsIGluZGV4ZWQ6IGZhbHNlIH0sXHJcbiAgICAgIHsgdHlwZTogXCJ1aW50OFwiLCBuYW1lOiBcImxldmVsXCIsIGludGVybmFsVHlwZTogXCJ1aW50OFwiLCBpbmRleGVkOiBmYWxzZSB9LFxyXG4gICAgXSxcclxuICAgIGFub255bW91czogZmFsc2UsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERSRVNTID0gXCIweGUxYkJiNjNlOGNBQzkzNjFmMGMwN0FkNkFFRTEyYzI4OTNENDI3MzVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBPV05FUiA9IFwiMHhmMmFBMjY3MjNlZDdiMDk5ODQ1YWZFNjlGQTQ5MjlBNDZCQzAwMjQ1XCI7XHJcblxyXG5leHBvcnQgY29uc3QgQkFTRV9VUkwgPSBcImh0dHBzOi8vYW1uZXh0Lm5ldGxpZnkuYXBwL1wiO1xyXG5cclxuLy8gaHR0cHM6Ly9tdW1iYWktZXhwbG9yZXIubWF0aWMudG9kYXkvYWRkcmVzcy8weGUxYkJiNjNlOGNBQzkzNjFmMGMwN0FkNkFFRTEyYzI4OTNENDI3MzUvY29udHJhY3RzXHJcbiIsImltcG9ydCB7IEFCSSwgQUREUkVTUyB9IGZyb20gXCIuL2dsb2JhbHNcIjtcclxuaW1wb3J0IFdlYjMgZnJvbSBcIndlYjNcIjtcclxuXHJcbi8vIEZldGNoaW5nIFdFQjMgUHJvdmlkZXJcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkV2ViMyA9IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xyXG4gICAgICB3aW5kb3cud2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSk7XHJcbiAgICAgIGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5lbmFibGUoKTtcclxuICAgIH0gZWxzZSBpZiAod2luZG93LndlYjMpIHtcclxuICAgICAgd2luZG93LndlYjMgPSBuZXcgV2ViMyh3aW5kb3cud2ViMy5jdXJyZW50UHJvdmlkZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFxyXG4gICAgICAgIFwiTm9uLUV0aGVyZXVtIGJyb3dzZXIgZGV0ZWN0ZWQuIFlvdSBzaG91bGQgY29uc2lkZXIgdHJ5aW5nIE1ldGFNYXNrIVwiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB3aW5kb3cuYWxlcnQoXCJUcm91YmxlIGNvbm5lY3RpbmcgdG8geW91IHdlYjMgYnJvd3Nlci4uLlwiKTtcclxuICB9XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2ViM1wiKTsiXSwic291cmNlUm9vdCI6IiJ9