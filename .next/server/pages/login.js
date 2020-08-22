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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/login.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./components/login/AutoLogin.jsx":
/*!****************************************!*\
  !*** ./components/login/AutoLogin.jsx ***!
  \****************************************/
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
/* harmony import */ var _utils_globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/globals */ "./utils/globals.js");
/* harmony import */ var _utils_utility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/utility */ "./utils/utility.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _AccountContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../AccountContext */ "./components/AccountContext.jsx");
var _jsxFileName = "C:\\Users\\crfab\\Desktop\\forsage-boilerplate\\components\\login\\AutoLogin.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class AutoLogin extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  async loadBlockchainData() {
    const web3 = new web3__WEBPACK_IMPORTED_MODULE_2___default.a(web3__WEBPACK_IMPORTED_MODULE_2___default.a.givenProvider || "http://localhost:8545");
    const accounts = await web3.eth.getAccounts();
    this.setState({
      account: accounts[0]
    });
    const contract = new web3.eth.Contract(_utils_globals__WEBPACK_IMPORTED_MODULE_3__["ABI"], _utils_globals__WEBPACK_IMPORTED_MODULE_3__["ADDRESS"]);
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
      refererAddress: _utils_globals__WEBPACK_IMPORTED_MODULE_3__["OWNER"]
    };
  }

  async register(_refererAddress) {
    this.setState({
      loading: true
    });
    await Object(_utils_utility__WEBPACK_IMPORTED_MODULE_4__["loadWeb3"])();
    await this.loadBlockchainData();

    if (this.state.isExist) {
      next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/dashboard");
      this.setState({
        loading: false
      });
    } else {
      await this.state.contract.methods.registrationExt(_refererAddress).send({
        value: this.state.cost,
        from: this.state.account
      }).then(function (receipt) {
        next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/dashboard");
        this.setState({
          loading: false
        });
      });
    }
  }

  render() {
    const {
      account,
      setAccount
    } = this.context;
    const isLoading = this.state.loading;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("form", {
      onSubmit: async event => {
        event.preventDefault();
        await this.register(this.state.refererAddress);
        const newUser = this.state.account;
        setAccount(newUser);
      },
      className: "jsx-585742509" + " " + "automatic",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }
    }, __jsx("button", {
      className: "jsx-585742509" + " " + "auto",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 11
      }
    }, !isLoading ? __jsx("b", {
      className: "jsx-585742509",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 27
      }
    }, "Authorisation") : __jsx("b", {
      className: "jsx-585742509",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 50
      }
    }, "Loading"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "585742509",
      __self: this
    }, ".auto.jsx-585742509{background:rgb(0,237,47);background:linear-gradient( 306deg, rgba(0,237,47,1) 29%, rgba(0,179,35,1) 64%, rgba(0,179,35,1) 83% );box-shadow:none;outline:none;border:none;}button.jsx-585742509{width:100%;text-align:center;padding:20px 0;border-radius:30px;color:white;font-size:1.2em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXGxvZ2luXFxBdXRvTG9naW4uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJFb0IsQUFHd0MsQUFZaEIsV0FDTyxjQVBqQixJQVFjLGVBQ0ksbUJBQ1AsWUFDSSxnQkFDbEIscUNBWGtCLGdCQUNILGFBQ0QsWUFDZCIsImZpbGUiOiJDOlxcVXNlcnNcXGNyZmFiXFxEZXNrdG9wXFxmb3JzYWdlLWJvaWxlcnBsYXRlXFxjb21wb25lbnRzXFxsb2dpblxcQXV0b0xvZ2luLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFdlYjMgZnJvbSBcIndlYjNcIjtcclxuaW1wb3J0IHsgQUJJLCBBRERSRVNTLCBPV05FUiB9IGZyb20gXCIuLi8uLi91dGlscy9nbG9iYWxzXCI7XHJcbmltcG9ydCB7IGxvYWRXZWIzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3V0aWxpdHlcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEFjY291bnRDb250ZXh0IGZyb20gXCIuLi9BY2NvdW50Q29udGV4dFwiO1xyXG5cclxuY2xhc3MgQXV0b0xvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgY29udGV4dFR5cGUgPSBBY2NvdW50Q29udGV4dDtcclxuXHJcbiAgYXN5bmMgbG9hZEJsb2NrY2hhaW5EYXRhKCkge1xyXG4gICAgY29uc3Qgd2ViMyA9IG5ldyBXZWIzKFdlYjMuZ2l2ZW5Qcm92aWRlciB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6ODU0NVwiKTtcclxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBhY2NvdW50OiBhY2NvdW50c1swXSB9KTtcclxuXHJcbiAgICBjb25zdCBjb250cmFjdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChBQkksIEFERFJFU1MpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRyYWN0IH0pO1xyXG4gICAgY29uc3QgaXNFeGlzdHMgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzXHJcbiAgICAgIC5pc1VzZXJFeGlzdHModGhpcy5zdGF0ZS5hY2NvdW50KVxyXG4gICAgICAuY2FsbCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzRXhpc3Q6IGlzRXhpc3RzIH0pO1xyXG4gICAgY29uc3QgY29zdHMgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLnJlZ2lzdHJhdGlvbkNvc3QoKS5jYWxsKCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY29zdDogY29zdHMgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiBmYWxzZSB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBhY2NvdW50OiBcIlwiLFxyXG4gICAgICBpc0V4aXN0OiBmYWxzZSxcclxuICAgICAgY29zdDogXCJcIixcclxuICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIHJlZmVyZXJBZGRyZXNzOiBPV05FUixcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBhc3luYyByZWdpc3RlcihfcmVmZXJlckFkZHJlc3MpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pO1xyXG4gICAgYXdhaXQgbG9hZFdlYjMoKTtcclxuICAgIGF3YWl0IHRoaXMubG9hZEJsb2NrY2hhaW5EYXRhKCk7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5pc0V4aXN0KSB7XHJcbiAgICAgIFJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXdhaXQgdGhpcy5zdGF0ZS5jb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgLnJlZ2lzdHJhdGlvbkV4dChfcmVmZXJlckFkZHJlc3MpXHJcbiAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuY29zdCxcclxuICAgICAgICAgIGZyb206IHRoaXMuc3RhdGUuYWNjb3VudCxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZWNlaXB0KSB7XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIik7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgYWNjb3VudCwgc2V0QWNjb3VudCB9ID0gdGhpcy5jb250ZXh0O1xyXG4gICAgY29uc3QgaXNMb2FkaW5nID0gdGhpcy5zdGF0ZS5sb2FkaW5nO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYXV0b21hdGljXCJcclxuICAgICAgICAgIG9uU3VibWl0PXthc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5yZWdpc3Rlcih0aGlzLnN0YXRlLnJlZmVyZXJBZGRyZXNzKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3VXNlciA9IHRoaXMuc3RhdGUuYWNjb3VudDtcclxuICAgICAgICAgICAgc2V0QWNjb3VudChuZXdVc2VyKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhdXRvXCI+XHJcbiAgICAgICAgICAgIHshaXNMb2FkaW5nID8gPGI+QXV0aG9yaXNhdGlvbjwvYj4gOiA8Yj5Mb2FkaW5nPC9iPn1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuYXV0byB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigwLCAyMzcsIDQ3KTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgIDMwNmRlZyxcclxuICAgICAgICAgICAgICByZ2JhKDAsIDIzNywgNDcsIDEpIDI5JSxcclxuICAgICAgICAgICAgICByZ2JhKDAsIDE3OSwgMzUsIDEpIDY0JSxcclxuICAgICAgICAgICAgICByZ2JhKDAsIDE3OSwgMzUsIDEpIDgzJVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dG9Mb2dpbjtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\components\\\\login\\\\AutoLogin.jsx */"));
  }

}

_defineProperty(AutoLogin, "contextType", _AccountContext__WEBPACK_IMPORTED_MODULE_6__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (AutoLogin);

/***/ }),

/***/ "./components/login/ManualLogin.jsx":
/*!******************************************!*\
  !*** ./components/login/ManualLogin.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AccountContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AccountContext */ "./components/AccountContext.jsx");
/* harmony import */ var _utils_globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/globals */ "./utils/globals.js");
/* harmony import */ var _utils_utility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/utility */ "./utils/utility.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\crfab\\Desktop\\forsage-boilerplate\\components\\login\\ManualLogin.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class ManualLogin extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  async loadBlockchainData() {
    try {
      const web3 = new web3__WEBPACK_IMPORTED_MODULE_5___default.a(web3__WEBPACK_IMPORTED_MODULE_5___default.a.givenProvider || "http://localhost:8545");
      this.setState({
        account: this.context.account
      });
      const contract = new web3.eth.Contract(_utils_globals__WEBPACK_IMPORTED_MODULE_3__["ABI"], _utils_globals__WEBPACK_IMPORTED_MODULE_3__["ADDRESS"]);
      this.setState({
        contract
      });
      const isExists = await contract.methods.isUserExists(this.state.account).call();
      this.setState({
        isExist: isExists
      });
    } catch (e) {
      window.alert("Trouble Connecting please try again!" + e);
      return;
    }
  }

  async login() {
    try {
      await Object(_utils_utility__WEBPACK_IMPORTED_MODULE_4__["loadWeb3"])();
      await this.loadBlockchainData();

      if (this.state.isExist) {
        next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/dashboard");
      } else {
        window.alert("The user you are looking for doesn't exist. Try another one!");
      }
    } catch (err) {
      window.alert("Invalid ETH ADDRESS, Checksum doesnt match");
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      isExist: false
    };
  }

  render() {
    const {
      account,
      setAccount
    } = this.context;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("form", {
      onSubmit: async event => {
        event.preventDefault();
        const newUser = this.state.account;
        setAccount(newUser);
        this.login();
      },
      className: "jsx-901526722" + " " + "manual",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }
    }, __jsx("input", {
      type: "text",
      onChange: event => {
        const address = this.input.value.toString();
        this.setState({
          account: address
        });
      },
      ref: input => {
        this.input = input;
      },
      placeholder: "Wallet Address or ID...",
      className: "jsx-901526722",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }
    }), __jsx("button", {
      className: "jsx-901526722" + " " + "manual-btn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 11
      }
    }, __jsx("b", {
      className: "jsx-901526722",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 13
      }
    }, "Viewing"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "901526722",
      __self: this
    }, ".manual-btn.jsx-901526722{background:rgb(55,214,255);background:linear-gradient( 223deg, rgba(55,214,255,1) 0%, rgba(16,83,245,1) 46% );box-shadow:none;outline:none;border:none;}input.jsx-901526722{width:100%;background:rgba(16,1,62,1);box-shadow:none;outline:none;border:none;padding:20px 20px;border-radius:30px;font-size:1.2em;margin:30px 0;color:grey;}button.jsx-901526722{width:100%;text-align:center;padding:20px 0;border-radius:30px;color:white;font-size:1.2em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXGxvZ2luXFxNYW51YWxMb2dpbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0VvQixBQUcwQyxBQVdsQixBQWFBLFdBWm1CLEFBYVosZ0JBcEJqQixFQXFCYyxTQWJDLE1BY0csVUFiTixTQWNELElBYkEsUUFjSSxJQWJFLFlBY3BCLE1BYnFCLGFBWEgsTUFZQSxVQVhILE1BWUMsT0FYRixPQVlELEtBWGIsTUFZQSIsImZpbGUiOiJDOlxcVXNlcnNcXGNyZmFiXFxEZXNrdG9wXFxmb3JzYWdlLWJvaWxlcnBsYXRlXFxjb21wb25lbnRzXFxsb2dpblxcTWFudWFsTG9naW4uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWNjb3VudENvbnRleHQgZnJvbSBcIi4uL0FjY291bnRDb250ZXh0XCI7XHJcbmltcG9ydCB7IEFCSSwgQUREUkVTUyB9IGZyb20gXCIuLi8uLi91dGlscy9nbG9iYWxzXCI7XHJcbmltcG9ydCB7IGxvYWRXZWIzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3V0aWxpdHlcIjtcclxuaW1wb3J0IFdlYjMgZnJvbSBcIndlYjNcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNsYXNzIE1hbnVhbExvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgY29udGV4dFR5cGUgPSBBY2NvdW50Q29udGV4dDtcclxuXHJcbiAgYXN5bmMgbG9hZEJsb2NrY2hhaW5EYXRhKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgd2ViMyA9IG5ldyBXZWIzKFdlYjMuZ2l2ZW5Qcm92aWRlciB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6ODU0NVwiKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFjY291bnQ6IHRoaXMuY29udGV4dC5hY2NvdW50IH0pO1xyXG4gICAgICBjb25zdCBjb250cmFjdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChBQkksIEFERFJFU1MpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY29udHJhY3QgfSk7XHJcbiAgICAgIGNvbnN0IGlzRXhpc3RzID0gYXdhaXQgY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgIC5pc1VzZXJFeGlzdHModGhpcy5zdGF0ZS5hY2NvdW50KVxyXG4gICAgICAgIC5jYWxsKCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0V4aXN0OiBpc0V4aXN0cyB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiVHJvdWJsZSBDb25uZWN0aW5nIHBsZWFzZSB0cnkgYWdhaW4hXCIgKyBlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgbG9naW4oKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBsb2FkV2ViMygpO1xyXG4gICAgICBhd2FpdCB0aGlzLmxvYWRCbG9ja2NoYWluRGF0YSgpO1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5pc0V4aXN0KSB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goXCIvZGFzaGJvYXJkXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdpbmRvdy5hbGVydChcclxuICAgICAgICAgIFwiVGhlIHVzZXIgeW91IGFyZSBsb29raW5nIGZvciBkb2Vzbid0IGV4aXN0LiBUcnkgYW5vdGhlciBvbmUhXCJcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiSW52YWxpZCBFVEggQUREUkVTUywgQ2hlY2tzdW0gZG9lc250IG1hdGNoXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGFjY291bnQ6IFwiXCIsXHJcbiAgICAgIGlzRXhpc3Q6IGZhbHNlLFxyXG4gICAgfTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBhY2NvdW50LCBzZXRBY2NvdW50IH0gPSB0aGlzLmNvbnRleHQ7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxmb3JtXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtYW51YWxcIlxyXG4gICAgICAgICAgb25TdWJtaXQ9e2FzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdVc2VyID0gdGhpcy5zdGF0ZS5hY2NvdW50O1xyXG4gICAgICAgICAgICBzZXRBY2NvdW50KG5ld1VzZXIpO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luKCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBhZGRyZXNzID0gdGhpcy5pbnB1dC52YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgYWNjb3VudDogYWRkcmVzcyxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgcmVmPXsoaW5wdXQpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmlucHV0ID0gaW5wdXQ7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2FsbGV0IEFkZHJlc3Mgb3IgSUQuLi5cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibWFudWFsLWJ0blwiPlxyXG4gICAgICAgICAgICA8Yj5WaWV3aW5nPC9iPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5tYW51YWwtYnRuIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDU1LCAyMTQsIDI1NSk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICAyMjNkZWcsXHJcbiAgICAgICAgICAgICAgcmdiYSg1NSwgMjE0LCAyNTUsIDEpIDAlLFxyXG4gICAgICAgICAgICAgIHJnYmEoMTYsIDgzLCAyNDUsIDEpIDQ2JVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2LCAxLCA2MiwgMSk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgICBtYXJnaW46IDMwcHggMDtcclxuICAgICAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYW51YWxMb2dpbjtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\components\\\\login\\\\ManualLogin.jsx */"));
  }

}

_defineProperty(ManualLogin, "contextType", _AccountContext__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (ManualLogin);

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_login_AutoLogin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/login/AutoLogin */ "./components/login/AutoLogin.jsx");
/* harmony import */ var _components_login_ManualLogin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/login/ManualLogin */ "./components/login/ManualLogin.jsx");
var _jsxFileName = "C:\\Users\\crfab\\Desktop\\forsage-boilerplate\\pages\\login.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Login = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-43039885" + " " + "header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-43039885" + " " + "hero-image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-43039885" + " " + "picture-holder",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "jsx-43039885" + " " + "form-part",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: "jsx-43039885",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, "To view account ID or enter ETH purse"), __jsx(_components_login_ManualLogin__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }), __jsx("h1", {
    className: "jsx-43039885",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, "The entrance to the office"), __jsx("p", {
    className: "jsx-43039885",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, "For access to all the functions of your personal account, use Login:"), __jsx(_components_login_AutoLogin__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }), __jsx("p", {
    className: "jsx-43039885",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "Telegram Channel @cryptoofficial"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "43039885",
    __self: undefined
  }, ".header.jsx-43039885{width:100vw;height:100vh;overflow:hidden;background:rgba(16,1,62,1);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}@media only screen and (max-width:1000px){.header.jsx-43039885{height:auto;}}.hero-image.jsx-43039885{width:70vw;height:100vw;}.picture-holder.jsx-43039885{width:100%;height:100vh;background-image:url(\"/assets/img/hero-picture.jpg\");background-repeat:no-repeat;background-size:contain;background-position:center;}.hero.jsx-43039885{width:100%;}.form-part.jsx-43039885{background:rgba(28,22,85,1);width:30vw;padding:60px;color:white;height:100vh;text-align:center;}.manual-btn.jsx-43039885{background:rgb(55,214,255);background:linear-gradient( 223deg, rgba(55,214,255,1) 0%, rgba(16,83,245,1) 46% );box-shadow:none;outline:none;border:none;}input.jsx-43039885{width:100%;background:rgba(16,1,62,1);box-shadow:none;outline:none;border:none;padding:20px 20px;border-radius:30px;font-size:1.2em;margin:30px 0;color:grey;}p.jsx-43039885{color:grey;}h1.jsx-43039885{margin-top:15vh;margin-bottom:5vh;font-size:1.5em;}button.jsx-43039885{width:100%;text-align:center;padding:20px 0;border-radius:30px;color:white;font-size:1.2em;}@media only screen and (max-width:1000px){.hero-image.jsx-43039885{display:none;}.form-part.jsx-43039885{width:95vw;margin:auto auto;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXHBhZ2VzXFxsb2dpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Qm9CLEFBR3lCLEFBUUUsQUFJSCxBQUlBLEFBUUEsQUFHb0IsQUFTRixBQVdsQixBQWFBLEFBR0ssQUFNTCxBQVNJLEFBR0YsV0FwRUEsQUFJQSxBQVFmLEFBdUJnQyxBQWFoQyxBQVNvQixBQVlDLENBakZOLEFBUWIsQ0FzRUEsR0Fma0IsUUFsRHBCLEFBSXVELENBaEJyQyxFQXVDZixDQWJVLEFBdURYLENBWmUsS0FOQyxJQWhCQSxDQXBCSCxFQTFCaUIsR0FxRVgsTUFOckIsRUFwQ2MsRUFvQkMsU0F1QkQsQ0ExQ0MsR0FvQkQsQ0EvQ0MsT0FzRUcsRUF2RFksQUFhVixFQW9CQSxZQXVCcEIsSUExQ0EsRUFvQnFCLFFBakNLLEtBc0JSLE1BWUEsVUFYSCxHQXRCYyxHQWtDYixPQVhGLEdBdkNkLElBbURhLEtBWGIsS0F2QkEsQ0FtQ0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxjcmZhYlxcRGVza3RvcFxcZm9yc2FnZS1ib2lsZXJwbGF0ZVxccGFnZXNcXGxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF1dG9Mb2dpbiBmcm9tIFwiLi4vY29tcG9uZW50cy9sb2dpbi9BdXRvTG9naW5cIjtcclxuaW1wb3J0IE1hbnVhbExvZ2luIGZyb20gXCIuLi9jb21wb25lbnRzL2xvZ2luL01hbnVhbExvZ2luXCI7XHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWltYWdlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGljdHVyZS1ob2xkZXJcIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXBhcnRcIj5cclxuICAgICAgICAgICAgPGgxPlRvIHZpZXcgYWNjb3VudCBJRCBvciBlbnRlciBFVEggcHVyc2U8L2gxPlxyXG4gICAgICAgICAgICA8TWFudWFsTG9naW4gLz5cclxuICAgICAgICAgICAgPGgxPlRoZSBlbnRyYW5jZSB0byB0aGUgb2ZmaWNlPC9oMT5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgRm9yIGFjY2VzcyB0byBhbGwgdGhlIGZ1bmN0aW9ucyBvZiB5b3VyIHBlcnNvbmFsIGFjY291bnQsIHVzZVxyXG4gICAgICAgICAgICAgIExvZ2luOlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxBdXRvTG9naW4gLz5cclxuICAgICAgICAgICAgPHA+VGVsZWdyYW0gQ2hhbm5lbCBAY3J5cHRvb2ZmaWNpYWw8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2LCAxLCA2MiwgMSk7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gICAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5oZXJvLWltYWdlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDcwdnc7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdnc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucGljdHVyZS1ob2xkZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvaGVyby1waWN0dXJlLmpwZ1wiKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaGVybyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvcm0tcGFydCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjgsIDIyLCA4NSwgMSk7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHZ3O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA2MHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubWFudWFsLWJ0biB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYig1NSwgMjE0LCAyNTUpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgMjIzZGVnLFxyXG4gICAgICAgICAgICAgIHJnYmEoNTUsIDIxNCwgMjU1LCAxKSAwJSxcclxuICAgICAgICAgICAgICByZ2JhKDE2LCA4MywgMjQ1LCAxKSA0NiVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxNiwgMSwgNjIsIDEpO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTV2aDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXZoO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgICAgICAgICAgLmhlcm8taW1hZ2Uge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZvcm0tcGFydCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDk1dnc7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\pages\\\\login.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

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
/*! exports provided: loadWeb3, loadBlockchainData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadWeb3", function() { return loadWeb3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadBlockchainData", function() { return loadBlockchainData; });
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
}; // General loading from the blockchain and instantiating the contract

const loadBlockchainData = async () => {
  const web3 = new web3__WEBPACK_IMPORTED_MODULE_1___default.a(web3__WEBPACK_IMPORTED_MODULE_1___default.a.givenProvider || "http://localhost:8545");
  undefined.setState({
    account: undefined.context.account
  });
  const contract = new web3.eth.Contract(_globals__WEBPACK_IMPORTED_MODULE_0__["ABI"], _globals__WEBPACK_IMPORTED_MODULE_0__["ADDRESS"]);
  undefined.setState({
    contract
  });
  const isExists = await contract.methods.isUserExists(undefined.state.account).call();
  undefined.setState({
    isExist: isExists
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BY2NvdW50Q29udGV4dC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sb2dpbi9BdXRvTG9naW4uanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbG9naW4vTWFudWFsTG9naW4uanN4Iiwid2VicGFjazovLy8uL3BhZ2VzL2xvZ2luLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2dsb2JhbHMuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdXRpbGl0eS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndlYjNcIiJdLCJuYW1lcyI6WyJBY2NvdW50Q29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsIkFjY291bnRQcm92aWRlciIsIkNvbXBvbmVudCIsImFjY291bnQiLCJzZXRTdGF0ZSIsInByZXZTdGF0ZSIsInJlbmRlciIsImNoaWxkcmVuIiwicHJvcHMiLCJzdGF0ZSIsInNldEFjY291bnQiLCJBdXRvTG9naW4iLCJsb2FkQmxvY2tjaGFpbkRhdGEiLCJ3ZWIzIiwiV2ViMyIsImdpdmVuUHJvdmlkZXIiLCJhY2NvdW50cyIsImV0aCIsImdldEFjY291bnRzIiwiY29udHJhY3QiLCJDb250cmFjdCIsIkFCSSIsIkFERFJFU1MiLCJpc0V4aXN0cyIsIm1ldGhvZHMiLCJpc1VzZXJFeGlzdHMiLCJjYWxsIiwiaXNFeGlzdCIsImNvc3RzIiwicmVnaXN0cmF0aW9uQ29zdCIsImNvc3QiLCJpc0xvYWRpbmciLCJjb25zdHJ1Y3RvciIsImxvYWRpbmciLCJyZWZlcmVyQWRkcmVzcyIsIk9XTkVSIiwicmVnaXN0ZXIiLCJfcmVmZXJlckFkZHJlc3MiLCJsb2FkV2ViMyIsIlJvdXRlciIsInB1c2giLCJyZWdpc3RyYXRpb25FeHQiLCJzZW5kIiwidmFsdWUiLCJmcm9tIiwidGhlbiIsInJlY2VpcHQiLCJjb250ZXh0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld1VzZXIiLCJNYW51YWxMb2dpbiIsImUiLCJ3aW5kb3ciLCJhbGVydCIsImxvZ2luIiwiZXJyIiwiYWRkcmVzcyIsImlucHV0IiwidG9TdHJpbmciLCJMb2dpbiIsInR5cGUiLCJzdGF0ZU11dGFiaWxpdHkiLCJwYXlhYmxlIiwib3V0cHV0cyIsIm5hbWUiLCJpbnRlcm5hbFR5cGUiLCJpbnB1dHMiLCJjb25zdGFudCIsImluZGV4ZWQiLCJhbm9ueW1vdXMiLCJCQVNFX1VSTCIsImV0aGVyZXVtIiwiZW5hYmxlIiwiY3VycmVudFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtR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LCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2xvZ2luLmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQWNjb3VudENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcblxyXG4vLyBleHBvcnQgY29uc3QgQWNjb3VudFByb3ZpZGVyID0gQWNjb3VudENvbnRleHQuUHJvdmlkZXI7XHJcbi8vIGV4cG9ydCBjb25zdCBBY2NvdW50Q29uc3VtZXIgPSBBY2NvdW50Q29udGV4dC5Db25zdW1lcjtcclxuXHJcbmNsYXNzIEFjY291bnRQcm92aWRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgLy8gY29udGV4dCBzdGF0ZVxyXG4gIHN0YXRlID0ge1xyXG4gICAgYWNjb3VudDogXCJcIixcclxuICB9O1xyXG5cclxuICAvL01ldGhvZCB0byB1cGRhdGVcclxuICBzZXRBY2NvdW50ID0gKGFjY291bnQpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHsgYWNjb3VudCB9KSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IHsgYWNjb3VudCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IHsgc2V0QWNjb3VudCB9ID0gdGhpcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QWNjb3VudENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgYWNjb3VudCxcclxuICAgICAgICAgIHNldEFjY291bnQsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9BY2NvdW50Q29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBBY2NvdW50UHJvdmlkZXIgfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjY291bnRDb250ZXh0O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCI7XHJcbmltcG9ydCB7IEFCSSwgQUREUkVTUywgT1dORVIgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZ2xvYmFsc1wiO1xyXG5pbXBvcnQgeyBsb2FkV2ViMyB9IGZyb20gXCIuLi8uLi91dGlscy91dGlsaXR5XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBBY2NvdW50Q29udGV4dCBmcm9tIFwiLi4vQWNjb3VudENvbnRleHRcIjtcclxuXHJcbmNsYXNzIEF1dG9Mb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIGNvbnRleHRUeXBlID0gQWNjb3VudENvbnRleHQ7XHJcblxyXG4gIGFzeW5jIGxvYWRCbG9ja2NoYWluRGF0YSgpIHtcclxuICAgIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyhXZWIzLmdpdmVuUHJvdmlkZXIgfHwgXCJodHRwOi8vbG9jYWxob3N0Ojg1NDVcIik7XHJcbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgYWNjb3VudDogYWNjb3VudHNbMF0gfSk7XHJcblxyXG4gICAgY29uc3QgY29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoQUJJLCBBRERSRVNTKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjb250cmFjdCB9KTtcclxuICAgIGNvbnN0IGlzRXhpc3RzID0gYXdhaXQgY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAuaXNVc2VyRXhpc3RzKHRoaXMuc3RhdGUuYWNjb3VudClcclxuICAgICAgLmNhbGwoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0V4aXN0OiBpc0V4aXN0cyB9KTtcclxuICAgIGNvbnN0IGNvc3RzID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy5yZWdpc3RyYXRpb25Db3N0KCkuY2FsbCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvc3Q6IGNvc3RzIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzTG9hZGluZzogZmFsc2UgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgYWNjb3VudDogXCJcIixcclxuICAgICAgaXNFeGlzdDogZmFsc2UsXHJcbiAgICAgIGNvc3Q6IFwiXCIsXHJcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICByZWZlcmVyQWRkcmVzczogT1dORVIsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgcmVnaXN0ZXIoX3JlZmVyZXJBZGRyZXNzKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KTtcclxuICAgIGF3YWl0IGxvYWRXZWIzKCk7XHJcbiAgICBhd2FpdCB0aGlzLmxvYWRCbG9ja2NoYWluRGF0YSgpO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuaXNFeGlzdCkge1xyXG4gICAgICBSb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIik7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGF3YWl0IHRoaXMuc3RhdGUuY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgIC5yZWdpc3RyYXRpb25FeHQoX3JlZmVyZXJBZGRyZXNzKVxyXG4gICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLmNvc3QsXHJcbiAgICAgICAgICBmcm9tOiB0aGlzLnN0YXRlLmFjY291bnQsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVjZWlwdCkge1xyXG4gICAgICAgICAgUm91dGVyLnB1c2goXCIvZGFzaGJvYXJkXCIpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGFjY291bnQsIHNldEFjY291bnQgfSA9IHRoaXMuY29udGV4dDtcclxuICAgIGNvbnN0IGlzTG9hZGluZyA9IHRoaXMuc3RhdGUubG9hZGluZztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGZvcm1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImF1dG9tYXRpY1wiXHJcbiAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucmVnaXN0ZXIodGhpcy5zdGF0ZS5yZWZlcmVyQWRkcmVzcyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1VzZXIgPSB0aGlzLnN0YXRlLmFjY291bnQ7XHJcbiAgICAgICAgICAgIHNldEFjY291bnQobmV3VXNlcik7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYXV0b1wiPlxyXG4gICAgICAgICAgICB7IWlzTG9hZGluZyA/IDxiPkF1dGhvcmlzYXRpb248L2I+IDogPGI+TG9hZGluZzwvYj59XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmF1dG8ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMjM3LCA0Nyk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICAzMDZkZWcsXHJcbiAgICAgICAgICAgICAgcmdiYSgwLCAyMzcsIDQ3LCAxKSAyOSUsXHJcbiAgICAgICAgICAgICAgcmdiYSgwLCAxNzksIDM1LCAxKSA2NCUsXHJcbiAgICAgICAgICAgICAgcmdiYSgwLCAxNzksIDM1LCAxKSA4MyVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRvTG9naW47XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFjY291bnRDb250ZXh0IGZyb20gXCIuLi9BY2NvdW50Q29udGV4dFwiO1xyXG5pbXBvcnQgeyBBQkksIEFERFJFU1MgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZ2xvYmFsc1wiO1xyXG5pbXBvcnQgeyBsb2FkV2ViMyB9IGZyb20gXCIuLi8uLi91dGlscy91dGlsaXR5XCI7XHJcbmltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jbGFzcyBNYW51YWxMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIGNvbnRleHRUeXBlID0gQWNjb3VudENvbnRleHQ7XHJcblxyXG4gIGFzeW5jIGxvYWRCbG9ja2NoYWluRGF0YSgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyhXZWIzLmdpdmVuUHJvdmlkZXIgfHwgXCJodHRwOi8vbG9jYWxob3N0Ojg1NDVcIik7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY2NvdW50OiB0aGlzLmNvbnRleHQuYWNjb3VudCB9KTtcclxuICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoQUJJLCBBRERSRVNTKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRyYWN0IH0pO1xyXG4gICAgICBjb25zdCBpc0V4aXN0cyA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAuaXNVc2VyRXhpc3RzKHRoaXMuc3RhdGUuYWNjb3VudClcclxuICAgICAgICAuY2FsbCgpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNFeGlzdDogaXNFeGlzdHMgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIlRyb3VibGUgQ29ubmVjdGluZyBwbGVhc2UgdHJ5IGFnYWluIVwiICsgZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGxvZ2luKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgbG9hZFdlYjMoKTtcclxuICAgICAgYXdhaXQgdGhpcy5sb2FkQmxvY2tjaGFpbkRhdGEoKTtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUuaXNFeGlzdCkge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB3aW5kb3cuYWxlcnQoXHJcbiAgICAgICAgICBcIlRoZSB1c2VyIHlvdSBhcmUgbG9va2luZyBmb3IgZG9lc24ndCBleGlzdC4gVHJ5IGFub3RoZXIgb25lIVwiXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIkludmFsaWQgRVRIIEFERFJFU1MsIENoZWNrc3VtIGRvZXNudCBtYXRjaFwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBhY2NvdW50OiBcIlwiLFxyXG4gICAgICBpc0V4aXN0OiBmYWxzZSxcclxuICAgIH07XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgYWNjb3VudCwgc2V0QWNjb3VudCB9ID0gdGhpcy5jb250ZXh0O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWFudWFsXCJcclxuICAgICAgICAgIG9uU3VibWl0PXthc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3VXNlciA9IHRoaXMuc3RhdGUuYWNjb3VudDtcclxuICAgICAgICAgICAgc2V0QWNjb3VudChuZXdVc2VyKTtcclxuICAgICAgICAgICAgdGhpcy5sb2dpbigpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgYWRkcmVzcyA9IHRoaXMuaW5wdXQudmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGFjY291bnQ6IGFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHJlZj17KGlucHV0KSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5pbnB1dCA9IGlucHV0O1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldhbGxldCBBZGRyZXNzIG9yIElELi4uXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1hbnVhbC1idG5cIj5cclxuICAgICAgICAgICAgPGI+Vmlld2luZzwvYj5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAubWFudWFsLWJ0biB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYig1NSwgMjE0LCAyNTUpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgMjIzZGVnLFxyXG4gICAgICAgICAgICAgIHJnYmEoNTUsIDIxNCwgMjU1LCAxKSAwJSxcclxuICAgICAgICAgICAgICByZ2JhKDE2LCA4MywgMjQ1LCAxKSA0NiVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxNiwgMSwgNjIsIDEpO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFudWFsTG9naW47XHJcbiIsImltcG9ydCBBdXRvTG9naW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvbG9naW4vQXV0b0xvZ2luXCI7XHJcbmltcG9ydCBNYW51YWxMb2dpbiBmcm9tIFwiLi4vY29tcG9uZW50cy9sb2dpbi9NYW51YWxMb2dpblwiO1xyXG5cclxuY29uc3QgTG9naW4gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1pbWFnZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpY3R1cmUtaG9sZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1wYXJ0XCI+XHJcbiAgICAgICAgICAgIDxoMT5UbyB2aWV3IGFjY291bnQgSUQgb3IgZW50ZXIgRVRIIHB1cnNlPC9oMT5cclxuICAgICAgICAgICAgPE1hbnVhbExvZ2luIC8+XHJcbiAgICAgICAgICAgIDxoMT5UaGUgZW50cmFuY2UgdG8gdGhlIG9mZmljZTwvaDE+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIEZvciBhY2Nlc3MgdG8gYWxsIHRoZSBmdW5jdGlvbnMgb2YgeW91ciBwZXJzb25hbCBhY2NvdW50LCB1c2VcclxuICAgICAgICAgICAgICBMb2dpbjpcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8QXV0b0xvZ2luIC8+XHJcbiAgICAgICAgICAgIDxwPlRlbGVncmFtIENoYW5uZWwgQGNyeXB0b29mZmljaWFsPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxNiwgMSwgNjIsIDEpO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaGVyby1pbWFnZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3MHZ3O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZ3O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnBpY3R1cmUtaG9sZGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2hlcm8tcGljdHVyZS5qcGdcIik7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhlcm8ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb3JtLXBhcnQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI4LCAyMiwgODUsIDEpO1xyXG4gICAgICAgICAgICB3aWR0aDogMzB2dztcclxuICAgICAgICAgICAgcGFkZGluZzogNjBweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm1hbnVhbC1idG4ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoNTUsIDIxNCwgMjU1KTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgIDIyM2RlZyxcclxuICAgICAgICAgICAgICByZ2JhKDU1LCAyMTQsIDI1NSwgMSkgMCUsXHJcbiAgICAgICAgICAgICAgcmdiYSgxNiwgODMsIDI0NSwgMSkgNDYlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTYsIDEsIDYyLCAxKTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgICAgIG1hcmdpbjogMzBweCAwO1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1dmg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDV2aDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAgICAgICAgIC5oZXJvLWltYWdlIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mb3JtLXBhcnQge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA5NXZ3O1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogYXV0byBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8Lz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcclxuIiwiZXhwb3J0IGNvbnN0IEFCSSA9IFtcclxuICB7XHJcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXHJcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxyXG4gICAgcGF5YWJsZTogZmFsc2UsXHJcbiAgICBvdXRwdXRzOiBbeyB0eXBlOiBcImJvb2xcIiwgbmFtZTogXCJcIiwgaW50ZXJuYWxUeXBlOiBcImJvb2xcIiB9XSxcclxuICAgIG5hbWU6IFwidXNlcnNBY3RpdmVYM0xldmVsc1wiLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgIHsgdHlwZTogXCJhZGRyZXNzXCIsIG5hbWU6IFwidXNlckFkZHJlc3NcIiwgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIiB9LFxyXG4gICAgICB7IHR5cGU6IFwidWludDhcIiwgbmFtZTogXCJsZXZlbFwiLCBpbnRlcm5hbFR5cGU6IFwidWludDhcIiB9LFxyXG4gICAgXSxcclxuICAgIGNvbnN0YW50OiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZTogXCJmdW5jdGlvblwiLFxyXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcclxuICAgIHBheWFibGU6IGZhbHNlLFxyXG4gICAgb3V0cHV0czogW3sgdHlwZTogXCJ1aW50MjU2XCIsIG5hbWU6IFwiXCIsIGludGVybmFsVHlwZTogXCJ1aW50MjU2XCIgfV0sXHJcbiAgICBuYW1lOiBcImJhbGFuY2VzXCIsXHJcbiAgICBpbnB1dHM6IFt7IHR5cGU6IFwiYWRkcmVzc1wiLCBuYW1lOiBcIlwiLCBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiIH1dLFxyXG4gICAgY29uc3RhbnQ6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXHJcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxyXG4gICAgcGF5YWJsZTogZmFsc2UsXHJcbiAgICBvdXRwdXRzOiBbeyB0eXBlOiBcImFkZHJlc3NcIiwgbmFtZTogXCJcIiwgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIiB9XSxcclxuICAgIG5hbWU6IFwiaWRUb0FkZHJlc3NcIixcclxuICAgIGlucHV0czogW3sgdHlwZTogXCJ1aW50MjU2XCIsIG5hbWU6IFwiXCIsIGludGVybmFsVHlwZTogXCJ1aW50MjU2XCIgfV0sXHJcbiAgICBjb25zdGFudDogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcclxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJ2aWV3XCIsXHJcbiAgICBwYXlhYmxlOiBmYWxzZSxcclxuICAgIG91dHB1dHM6IFt7IHR5cGU6IFwidWludDI1NlwiLCBuYW1lOiBcIlwiLCBpbnRlcm5hbFR5cGU6IFwidWludDI1NlwiIH1dLFxyXG4gICAgbmFtZTogXCJsYXN0VXNlcklkXCIsXHJcbiAgICBpbnB1dHM6IFtdLFxyXG4gICAgY29uc3RhbnQ6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXHJcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxyXG4gICAgcGF5YWJsZTogZmFsc2UsXHJcbiAgICBvdXRwdXRzOiBbeyB0eXBlOiBcImFkZHJlc3NcIiwgbmFtZTogXCJcIiwgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIiB9XSxcclxuICAgIG5hbWU6IFwidXNlcklkc1wiLFxyXG4gICAgaW5wdXRzOiBbeyB0eXBlOiBcInVpbnQyNTZcIiwgbmFtZTogXCJcIiwgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZcIiB9XSxcclxuICAgIGNvbnN0YW50OiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZTogXCJmdW5jdGlvblwiLFxyXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcclxuICAgIHBheWFibGU6IGZhbHNlLFxyXG4gICAgb3V0cHV0czogW3sgdHlwZTogXCJib29sXCIsIG5hbWU6IFwiXCIsIGludGVybmFsVHlwZTogXCJib29sXCIgfV0sXHJcbiAgICBuYW1lOiBcImlzVXNlckV4aXN0c1wiLFxyXG4gICAgaW5wdXRzOiBbeyB0eXBlOiBcImFkZHJlc3NcIiwgbmFtZTogXCJ1c2VyXCIsIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIgfV0sXHJcbiAgICBjb25zdGFudDogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIixcclxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJwYXlhYmxlXCIsXHJcbiAgICBwYXlhYmxlOiB0cnVlLFxyXG4gICAgb3V0cHV0czogW10sXHJcbiAgICBuYW1lOiBcInJlZ2lzdHJhdGlvbkV4dFwiLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgIHsgdHlwZTogXCJhZGRyZXNzXCIsIG5hbWU6IFwicmVmZXJyZXJBZGRyZXNzXCIsIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIgfSxcclxuICAgIF0sXHJcbiAgICBjb25zdGFudDogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXHJcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxyXG4gICAgcGF5YWJsZTogZmFsc2UsXHJcbiAgICBvdXRwdXRzOiBbXHJcbiAgICAgIHsgdHlwZTogXCJhZGRyZXNzXCIsIG5hbWU6IFwiXCIsIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIgfSxcclxuICAgICAgeyB0eXBlOiBcImFkZHJlc3NbXVwiLCBuYW1lOiBcIlwiLCBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1tdXCIgfSxcclxuICAgICAgeyB0eXBlOiBcImJvb2xcIiwgbmFtZTogXCJcIiwgaW50ZXJuYWxUeXBlOiBcImJvb2xcIiB9LFxyXG4gICAgXSxcclxuICAgIG5hbWU6IFwidXNlcnNYM01hdHJpeFwiLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgIHsgdHlwZTogXCJhZGRyZXNzXCIsIG5hbWU6IFwidXNlckFkZHJlc3NcIiwgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIiB9LFxyXG4gICAgICB7IHR5cGU6IFwidWludDhcIiwgbmFtZTogXCJsZXZlbFwiLCBpbnRlcm5hbFR5cGU6IFwidWludDhcIiB9LFxyXG4gICAgXSxcclxuICAgIGNvbnN0YW50OiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZTogXCJmdW5jdGlvblwiLFxyXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcclxuICAgIHBheWFibGU6IGZhbHNlLFxyXG4gICAgb3V0cHV0czogW3sgdHlwZTogXCJhZGRyZXNzXCIsIG5hbWU6IFwiXCIsIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIgfV0sXHJcbiAgICBuYW1lOiBcIm93bmVyXCIsXHJcbiAgICBpbnB1dHM6IFtdLFxyXG4gICAgY29uc3RhbnQ6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXHJcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxyXG4gICAgcGF5YWJsZTogZmFsc2UsXHJcbiAgICBvdXRwdXRzOiBbXHJcbiAgICAgIHsgdHlwZTogXCJhZGRyZXNzXCIsIG5hbWU6IFwiXCIsIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIgfSxcclxuICAgICAgeyB0eXBlOiBcImFkZHJlc3NbXVwiLCBuYW1lOiBcIlwiLCBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1tdXCIgfSxcclxuICAgICAgeyB0eXBlOiBcImFkZHJlc3NbXVwiLCBuYW1lOiBcIlwiLCBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1tdXCIgfSxcclxuICAgICAgeyB0eXBlOiBcImJvb2xcIiwgbmFtZTogXCJcIiwgaW50ZXJuYWxUeXBlOiBcImJvb2xcIiB9LFxyXG4gICAgICB7IHR5cGU6IFwiYWRkcmVzc1wiLCBuYW1lOiBcIlwiLCBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiIH0sXHJcbiAgICBdLFxyXG4gICAgbmFtZTogXCJ1c2Vyc1g2TWF0cml4XCIsXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgeyB0eXBlOiBcImFkZHJlc3NcIiwgbmFtZTogXCJ1c2VyQWRkcmVzc1wiLCBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiIH0sXHJcbiAgICAgIHsgdHlwZTogXCJ1aW50OFwiLCBuYW1lOiBcImxldmVsXCIsIGludGVybmFsVHlwZTogXCJ1aW50OFwiIH0sXHJcbiAgICBdLFxyXG4gICAgY29uc3RhbnQ6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXHJcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxyXG4gICAgcGF5YWJsZTogZmFsc2UsXHJcbiAgICBvdXRwdXRzOiBbXHJcbiAgICAgIHsgdHlwZTogXCJ1aW50MjU2XCIsIG5hbWU6IFwiaWRcIiwgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZcIiB9LFxyXG4gICAgICB7IHR5cGU6IFwiYWRkcmVzc1wiLCBuYW1lOiBcInJlZmVycmVyXCIsIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIgfSxcclxuICAgICAgeyB0eXBlOiBcInVpbnQyNTZcIiwgbmFtZTogXCJwYXJ0bmVyc0NvdW50XCIsIGludGVybmFsVHlwZTogXCJ1aW50MjU2XCIgfSxcclxuICAgIF0sXHJcbiAgICBuYW1lOiBcInVzZXJzXCIsXHJcbiAgICBpbnB1dHM6IFt7IHR5cGU6IFwiYWRkcmVzc1wiLCBuYW1lOiBcIlwiLCBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiIH1dLFxyXG4gICAgY29uc3RhbnQ6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXHJcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxyXG4gICAgcGF5YWJsZTogZmFsc2UsXHJcbiAgICBvdXRwdXRzOiBbeyB0eXBlOiBcImJvb2xcIiwgbmFtZTogXCJcIiwgaW50ZXJuYWxUeXBlOiBcImJvb2xcIiB9XSxcclxuICAgIG5hbWU6IFwidXNlcnNBY3RpdmVYNkxldmVsc1wiLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgIHsgdHlwZTogXCJhZGRyZXNzXCIsIG5hbWU6IFwidXNlckFkZHJlc3NcIiwgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIiB9LFxyXG4gICAgICB7IHR5cGU6IFwidWludDhcIiwgbmFtZTogXCJsZXZlbFwiLCBpbnRlcm5hbFR5cGU6IFwidWludDhcIiB9LFxyXG4gICAgXSxcclxuICAgIGNvbnN0YW50OiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZTogXCJmdW5jdGlvblwiLFxyXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInBheWFibGVcIixcclxuICAgIHBheWFibGU6IHRydWUsXHJcbiAgICBvdXRwdXRzOiBbXSxcclxuICAgIG5hbWU6IFwiYnV5TmV3TGV2ZWxcIixcclxuICAgIGlucHV0czogW1xyXG4gICAgICB7IHR5cGU6IFwidWludDhcIiwgbmFtZTogXCJtYXRyaXhcIiwgaW50ZXJuYWxUeXBlOiBcInVpbnQ4XCIgfSxcclxuICAgICAgeyB0eXBlOiBcInVpbnQ4XCIsIG5hbWU6IFwibGV2ZWxcIiwgaW50ZXJuYWxUeXBlOiBcInVpbnQ4XCIgfSxcclxuICAgIF0sXHJcbiAgICBjb25zdGFudDogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXHJcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwidmlld1wiLFxyXG4gICAgcGF5YWJsZTogZmFsc2UsXHJcbiAgICBvdXRwdXRzOiBbeyB0eXBlOiBcInVpbnQyNTZcIiwgbmFtZTogXCJcIiwgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZcIiB9XSxcclxuICAgIG5hbWU6IFwicmVnaXN0cmF0aW9uQ29zdFwiLFxyXG4gICAgaW5wdXRzOiBbXSxcclxuICAgIGNvbnN0YW50OiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZTogXCJmdW5jdGlvblwiLFxyXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcclxuICAgIHBheWFibGU6IGZhbHNlLFxyXG4gICAgb3V0cHV0czogW3sgdHlwZTogXCJhZGRyZXNzXCIsIG5hbWU6IFwiXCIsIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIgfV0sXHJcbiAgICBuYW1lOiBcImZpbmRGcmVlWDZSZWZlcnJlclwiLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgIHsgdHlwZTogXCJhZGRyZXNzXCIsIG5hbWU6IFwidXNlckFkZHJlc3NcIiwgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIiB9LFxyXG4gICAgICB7IHR5cGU6IFwidWludDhcIiwgbmFtZTogXCJsZXZlbFwiLCBpbnRlcm5hbFR5cGU6IFwidWludDhcIiB9LFxyXG4gICAgXSxcclxuICAgIGNvbnN0YW50OiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZTogXCJmdW5jdGlvblwiLFxyXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcclxuICAgIHBheWFibGU6IGZhbHNlLFxyXG4gICAgb3V0cHV0czogW3sgdHlwZTogXCJ1aW50MjU2XCIsIG5hbWU6IFwiXCIsIGludGVybmFsVHlwZTogXCJ1aW50MjU2XCIgfV0sXHJcbiAgICBuYW1lOiBcImxldmVsUHJpY2VcIixcclxuICAgIGlucHV0czogW3sgdHlwZTogXCJ1aW50OFwiLCBuYW1lOiBcIlwiLCBpbnRlcm5hbFR5cGU6IFwidWludDhcIiB9XSxcclxuICAgIGNvbnN0YW50OiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZTogXCJmdW5jdGlvblwiLFxyXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcclxuICAgIHBheWFibGU6IGZhbHNlLFxyXG4gICAgb3V0cHV0czogW3sgdHlwZTogXCJhZGRyZXNzXCIsIG5hbWU6IFwiXCIsIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIgfV0sXHJcbiAgICBuYW1lOiBcImZpbmRGcmVlWDNSZWZlcnJlclwiLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgIHsgdHlwZTogXCJhZGRyZXNzXCIsIG5hbWU6IFwidXNlckFkZHJlc3NcIiwgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIiB9LFxyXG4gICAgICB7IHR5cGU6IFwidWludDhcIiwgbmFtZTogXCJsZXZlbFwiLCBpbnRlcm5hbFR5cGU6IFwidWludDhcIiB9LFxyXG4gICAgXSxcclxuICAgIGNvbnN0YW50OiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZTogXCJjb25zdHJ1Y3RvclwiLFxyXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcIm5vbnBheWFibGVcIixcclxuICAgIHBheWFibGU6IGZhbHNlLFxyXG4gICAgaW5wdXRzOiBbeyB0eXBlOiBcImFkZHJlc3NcIiwgbmFtZTogXCJvd25lclwiLCBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiIH1dLFxyXG4gIH0sXHJcbiAgeyB0eXBlOiBcImZhbGxiYWNrXCIsIHN0YXRlTXV0YWJpbGl0eTogXCJwYXlhYmxlXCIsIHBheWFibGU6IHRydWUgfSxcclxuICB7XHJcbiAgICB0eXBlOiBcImV2ZW50XCIsXHJcbiAgICBuYW1lOiBcIlJlZ2lzdHJhdGlvblwiLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgIHsgdHlwZTogXCJhZGRyZXNzXCIsIG5hbWU6IFwidXNlclwiLCBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiLCBpbmRleGVkOiB0cnVlIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiBcImFkZHJlc3NcIixcclxuICAgICAgICBuYW1lOiBcInJlZmVycmVyXCIsXHJcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIixcclxuICAgICAgICBpbmRleGVkOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogXCJ1aW50MjU2XCIsXHJcbiAgICAgICAgbmFtZTogXCJ1c2VySWRcIixcclxuICAgICAgICBpbnRlcm5hbFR5cGU6IFwidWludDI1NlwiLFxyXG4gICAgICAgIGluZGV4ZWQ6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiBcInVpbnQyNTZcIixcclxuICAgICAgICBuYW1lOiBcInJlZmVycmVySWRcIixcclxuICAgICAgICBpbnRlcm5hbFR5cGU6IFwidWludDI1NlwiLFxyXG4gICAgICAgIGluZGV4ZWQ6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIGFub255bW91czogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlOiBcImV2ZW50XCIsXHJcbiAgICBuYW1lOiBcIlJlaW52ZXN0XCIsXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgeyB0eXBlOiBcImFkZHJlc3NcIiwgbmFtZTogXCJ1c2VyXCIsIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIsIGluZGV4ZWQ6IHRydWUgfSxcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6IFwiYWRkcmVzc1wiLFxyXG4gICAgICAgIG5hbWU6IFwiY3VycmVudFJlZmVycmVyXCIsXHJcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIixcclxuICAgICAgICBpbmRleGVkOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogXCJhZGRyZXNzXCIsXHJcbiAgICAgICAgbmFtZTogXCJjYWxsZXJcIixcclxuICAgICAgICBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiLFxyXG4gICAgICAgIGluZGV4ZWQ6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgdHlwZTogXCJ1aW50OFwiLCBuYW1lOiBcIm1hdHJpeFwiLCBpbnRlcm5hbFR5cGU6IFwidWludDhcIiwgaW5kZXhlZDogZmFsc2UgfSxcclxuICAgICAgeyB0eXBlOiBcInVpbnQ4XCIsIG5hbWU6IFwibGV2ZWxcIiwgaW50ZXJuYWxUeXBlOiBcInVpbnQ4XCIsIGluZGV4ZWQ6IGZhbHNlIH0sXHJcbiAgICBdLFxyXG4gICAgYW5vbnltb3VzOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGU6IFwiZXZlbnRcIixcclxuICAgIG5hbWU6IFwiVXBncmFkZVwiLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgIHsgdHlwZTogXCJhZGRyZXNzXCIsIG5hbWU6IFwidXNlclwiLCBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiLCBpbmRleGVkOiB0cnVlIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiBcImFkZHJlc3NcIixcclxuICAgICAgICBuYW1lOiBcInJlZmVycmVyXCIsXHJcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIixcclxuICAgICAgICBpbmRleGVkOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICB7IHR5cGU6IFwidWludDhcIiwgbmFtZTogXCJtYXRyaXhcIiwgaW50ZXJuYWxUeXBlOiBcInVpbnQ4XCIsIGluZGV4ZWQ6IGZhbHNlIH0sXHJcbiAgICAgIHsgdHlwZTogXCJ1aW50OFwiLCBuYW1lOiBcImxldmVsXCIsIGludGVybmFsVHlwZTogXCJ1aW50OFwiLCBpbmRleGVkOiBmYWxzZSB9LFxyXG4gICAgXSxcclxuICAgIGFub255bW91czogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0eXBlOiBcImV2ZW50XCIsXHJcbiAgICBuYW1lOiBcIk5ld1VzZXJQbGFjZVwiLFxyXG4gICAgaW5wdXRzOiBbXHJcbiAgICAgIHsgdHlwZTogXCJhZGRyZXNzXCIsIG5hbWU6IFwidXNlclwiLCBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiLCBpbmRleGVkOiB0cnVlIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiBcImFkZHJlc3NcIixcclxuICAgICAgICBuYW1lOiBcInJlZmVycmVyXCIsXHJcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIixcclxuICAgICAgICBpbmRleGVkOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICB7IHR5cGU6IFwidWludDhcIiwgbmFtZTogXCJtYXRyaXhcIiwgaW50ZXJuYWxUeXBlOiBcInVpbnQ4XCIsIGluZGV4ZWQ6IGZhbHNlIH0sXHJcbiAgICAgIHsgdHlwZTogXCJ1aW50OFwiLCBuYW1lOiBcImxldmVsXCIsIGludGVybmFsVHlwZTogXCJ1aW50OFwiLCBpbmRleGVkOiBmYWxzZSB9LFxyXG4gICAgICB7IHR5cGU6IFwidWludDhcIiwgbmFtZTogXCJwbGFjZVwiLCBpbnRlcm5hbFR5cGU6IFwidWludDhcIiwgaW5kZXhlZDogZmFsc2UgfSxcclxuICAgIF0sXHJcbiAgICBhbm9ueW1vdXM6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdHlwZTogXCJldmVudFwiLFxyXG4gICAgbmFtZTogXCJNaXNzZWRFdGhSZWNlaXZlXCIsXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6IFwiYWRkcmVzc1wiLFxyXG4gICAgICAgIG5hbWU6IFwicmVjZWl2ZXJcIixcclxuICAgICAgICBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiLFxyXG4gICAgICAgIGluZGV4ZWQ6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgdHlwZTogXCJhZGRyZXNzXCIsIG5hbWU6IFwiZnJvbVwiLCBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiLCBpbmRleGVkOiB0cnVlIH0sXHJcbiAgICAgIHsgdHlwZTogXCJ1aW50OFwiLCBuYW1lOiBcIm1hdHJpeFwiLCBpbnRlcm5hbFR5cGU6IFwidWludDhcIiwgaW5kZXhlZDogZmFsc2UgfSxcclxuICAgICAgeyB0eXBlOiBcInVpbnQ4XCIsIG5hbWU6IFwibGV2ZWxcIiwgaW50ZXJuYWxUeXBlOiBcInVpbnQ4XCIsIGluZGV4ZWQ6IGZhbHNlIH0sXHJcbiAgICBdLFxyXG4gICAgYW5vbnltb3VzOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIHR5cGU6IFwiZXZlbnRcIixcclxuICAgIG5hbWU6IFwiU2VudEV4dHJhRXRoRGl2aWRlbmRzXCIsXHJcbiAgICBpbnB1dHM6IFtcclxuICAgICAgeyB0eXBlOiBcImFkZHJlc3NcIiwgbmFtZTogXCJmcm9tXCIsIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIsIGluZGV4ZWQ6IHRydWUgfSxcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6IFwiYWRkcmVzc1wiLFxyXG4gICAgICAgIG5hbWU6IFwicmVjZWl2ZXJcIixcclxuICAgICAgICBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiLFxyXG4gICAgICAgIGluZGV4ZWQ6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgdHlwZTogXCJ1aW50OFwiLCBuYW1lOiBcIm1hdHJpeFwiLCBpbnRlcm5hbFR5cGU6IFwidWludDhcIiwgaW5kZXhlZDogZmFsc2UgfSxcclxuICAgICAgeyB0eXBlOiBcInVpbnQ4XCIsIG5hbWU6IFwibGV2ZWxcIiwgaW50ZXJuYWxUeXBlOiBcInVpbnQ4XCIsIGluZGV4ZWQ6IGZhbHNlIH0sXHJcbiAgICBdLFxyXG4gICAgYW5vbnltb3VzOiBmYWxzZSxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERFJFU1MgPSBcIjB4ZTFiQmI2M2U4Y0FDOTM2MWYwYzA3QWQ2QUVFMTJjMjg5M0Q0MjczNVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE9XTkVSID0gXCIweGYyYUEyNjcyM2VkN2IwOTk4NDVhZkU2OUZBNDkyOUE0NkJDMDAyNDVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBCQVNFX1VSTCA9IFwiaHR0cHM6Ly9hbW5leHQubmV0bGlmeS5hcHAvXCI7XHJcblxyXG4vLyBodHRwczovL211bWJhaS1leHBsb3Jlci5tYXRpYy50b2RheS9hZGRyZXNzLzB4ZTFiQmI2M2U4Y0FDOTM2MWYwYzA3QWQ2QUVFMTJjMjg5M0Q0MjczNS9jb250cmFjdHNcclxuIiwiaW1wb3J0IHsgQUJJLCBBRERSRVNTIH0gZnJvbSBcIi4vZ2xvYmFsc1wiO1xyXG5pbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xyXG5cclxuLy8gRmV0Y2hpbmcgV0VCMyBQcm92aWRlclxyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRXZWIzID0gYXN5bmMgKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XHJcbiAgICAgIHdpbmRvdy53ZWIzID0gbmV3IFdlYjMod2luZG93LmV0aGVyZXVtKTtcclxuICAgICAgYXdhaXQgd2luZG93LmV0aGVyZXVtLmVuYWJsZSgpO1xyXG4gICAgfSBlbHNlIGlmICh3aW5kb3cud2ViMykge1xyXG4gICAgICB3aW5kb3cud2ViMyA9IG5ldyBXZWIzKHdpbmRvdy53ZWIzLmN1cnJlbnRQcm92aWRlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXHJcbiAgICAgICAgXCJOb24tRXRoZXJldW0gYnJvd3NlciBkZXRlY3RlZC4gWW91IHNob3VsZCBjb25zaWRlciB0cnlpbmcgTWV0YU1hc2shXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHdpbmRvdy5hbGVydChcIlRyb3VibGUgY29ubmVjdGluZyB0byB5b3Ugd2ViMyBicm93c2VyLi4uXCIpO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIEdlbmVyYWwgbG9hZGluZyBmcm9tIHRoZSBibG9ja2NoYWluIGFuZCBpbnN0YW50aWF0aW5nIHRoZSBjb250cmFjdFxyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRCbG9ja2NoYWluRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCB3ZWIzID0gbmV3IFdlYjMoV2ViMy5naXZlblByb3ZpZGVyIHx8IFwiaHR0cDovL2xvY2FsaG9zdDo4NTQ1XCIpO1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBhY2NvdW50OiB0aGlzLmNvbnRleHQuYWNjb3VudCB9KTtcclxuICBjb25zdCBjb250cmFjdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChBQkksIEFERFJFU1MpO1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBjb250cmFjdCB9KTtcclxuICBjb25zdCBpc0V4aXN0cyA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHNcclxuICAgIC5pc1VzZXJFeGlzdHModGhpcy5zdGF0ZS5hY2NvdW50KVxyXG4gICAgLmNhbGwoKTtcclxuICB0aGlzLnNldFN0YXRlKHsgaXNFeGlzdDogaXNFeGlzdHMgfSk7XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2ViM1wiKTsiXSwic291cmNlUm9vdCI6IiJ9