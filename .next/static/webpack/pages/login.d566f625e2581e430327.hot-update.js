webpackHotUpdate_N_E("pages/login",{

/***/ "./components/login/ManualLogin.jsx":
/*!******************************************!*\
  !*** ./components/login/ManualLogin.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _AccountContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../AccountContext */ "./components/AccountContext.jsx");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_12__);








var _jsxFileName = "C:\\Users\\crfab\\Desktop\\forsage-boilerplate\\components\\login\\ManualLogin.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var ManualLogin = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ManualLogin, _Component);

  var _super = _createSuper(ManualLogin);

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ManualLogin, [{
    key: "loadBlockchainData",
    value: function () {
      var _loadBlockchainData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var web3, contract, isExists;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                web3 = new web3__WEBPACK_IMPORTED_MODULE_12___default.a(web3__WEBPACK_IMPORTED_MODULE_12___default.a.givenProvider || "http://localhost:8545");
                contract = new web3.eth.Contract(_ethereum_web3__WEBPACK_IMPORTED_MODULE_11__["ABI"], _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__["ADDRESS"]);
                this.setState({
                  contract: contract
                });
                _context.next = 5;
                return contract.methods.isUserExists(this.state.account).call();

              case 5:
                isExists = _context.sent;
                this.setState({
                  isExist: isExists
                });
                this.setState({
                  contract: contract
                });
                this.setState({
                  isLoading: false
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadBlockchainData() {
        return _loadBlockchainData.apply(this, arguments);
      }

      return loadBlockchainData;
    }()
  }, {
    key: "loadWeb3",
    value: function () {
      var _loadWeb = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!window.ethereum) {
                  _context2.next = 6;
                  break;
                }

                window.web3 = new web3__WEBPACK_IMPORTED_MODULE_12___default.a(window.ethereum);
                _context2.next = 4;
                return window.ethereum.enable();

              case 4:
                _context2.next = 7;
                break;

              case 6:
                if (window.web3) {
                  window.web3 = new web3__WEBPACK_IMPORTED_MODULE_12___default.a(window.web3.currentProvider);
                } else {
                  window.alert("Non-Ethereum browser detected. You should consider trying MetaMask!");
                }

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function loadWeb3() {
        return _loadWeb.apply(this, arguments);
      }

      return loadWeb3;
    }()
  }, {
    key: "login",
    value: function () {
      var _login = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.loadWeb3();

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function login() {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }]);

  function ManualLogin(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ManualLogin);

    _this = _super.call(this, props);
    _this.state = {
      account: "",
      isExist: false,
      cost: ""
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ManualLogin, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$context = this.context,
          account = _this$context.account,
          setAccount = _this$context.setAccount;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("form", {
        onSubmit: function onSubmit(event) {
          event.preventDefault();
          var newUser = _this2.state.account;
          setAccount(newUser);
          console.log(_this2.context);
        } // onSubmit={async (event) => {
        //   event.preventDefault();
        //   await this.register(this.state.refererAddress);
        //   const newUser = this.state.account;
        //   setAccount(newUser);
        // }}
        ,
        className: "jsx-901526722" + " " + "manual",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 9
        }
      }, __jsx("input", {
        type: "text",
        onChange: function onChange(event) {
          var address = _this2.input.value.toString();

          _this2.setState({
            account: address
          });
        },
        ref: function ref(input) {
          _this2.input = input;
        },
        placeholder: "Wallet Address or ID...",
        className: "jsx-901526722",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }
      }), __jsx("button", {
        className: "jsx-901526722" + " " + "manual-btn",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }
      }, __jsx("b", {
        className: "jsx-901526722",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 13
        }
      }, "Viewing"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "901526722",
        __self: this
      }, ".manual-btn.jsx-901526722{background:rgb(55,214,255);background:linear-gradient( 223deg, rgba(55,214,255,1) 0%, rgba(16,83,245,1) 46% );box-shadow:none;outline:none;border:none;}input.jsx-901526722{width:100%;background:rgba(16,1,62,1);box-shadow:none;outline:none;border:none;padding:20px 20px;border-radius:30px;font-size:1.2em;margin:30px 0;color:grey;}button.jsx-901526722{width:100%;text-align:center;padding:20px 0;border-radius:30px;color:white;font-size:1.2em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXGxvZ2luXFxNYW51YWxMb2dpbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkZvQixBQUcwQyxBQVdsQixBQWFBLFdBWm1CLEFBYVosZ0JBcEJqQixFQXFCYyxTQWJDLE1BY0csVUFiTixTQWNELElBYkEsUUFjSSxJQWJFLFlBY3BCLE1BYnFCLGFBWEgsTUFZQSxVQVhILE1BWUMsT0FYRixPQVlELEtBWGIsTUFZQSIsImZpbGUiOiJDOlxcVXNlcnNcXGNyZmFiXFxEZXNrdG9wXFxmb3JzYWdlLWJvaWxlcnBsYXRlXFxjb21wb25lbnRzXFxsb2dpblxcTWFudWFsTG9naW4uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWNjb3VudENvbnRleHQgZnJvbSBcIi4uL0FjY291bnRDb250ZXh0XCI7XHJcbmltcG9ydCB7IEFCSSwgQUREUkVTUyB9IGZyb20gXCIuLi8uLi9ldGhlcmV1bS93ZWIzXCI7XHJcbmltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCI7XHJcblxyXG5jbGFzcyBNYW51YWxMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIGNvbnRleHRUeXBlID0gQWNjb3VudENvbnRleHQ7XHJcblxyXG4gIGFzeW5jIGxvYWRCbG9ja2NoYWluRGF0YSgpIHtcclxuICAgIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyhXZWIzLmdpdmVuUHJvdmlkZXIgfHwgXCJodHRwOi8vbG9jYWxob3N0Ojg1NDVcIik7XHJcbiAgICBjb25zdCBjb250cmFjdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChBQkksIEFERFJFU1MpO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjb250cmFjdCB9KTtcclxuICAgIGNvbnN0IGlzRXhpc3RzID0gYXdhaXQgY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAuaXNVc2VyRXhpc3RzKHRoaXMuc3RhdGUuYWNjb3VudClcclxuICAgICAgLmNhbGwoKTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNFeGlzdDogaXNFeGlzdHMgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY29udHJhY3QgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiBmYWxzZSB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGxvYWRXZWIzKCkge1xyXG4gICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xyXG4gICAgICB3aW5kb3cud2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSk7XHJcbiAgICAgIGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5lbmFibGUoKTtcclxuICAgIH0gZWxzZSBpZiAod2luZG93LndlYjMpIHtcclxuICAgICAgd2luZG93LndlYjMgPSBuZXcgV2ViMyh3aW5kb3cud2ViMy5jdXJyZW50UHJvdmlkZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFxyXG4gICAgICAgIFwiTm9uLUV0aGVyZXVtIGJyb3dzZXIgZGV0ZWN0ZWQuIFlvdSBzaG91bGQgY29uc2lkZXIgdHJ5aW5nIE1ldGFNYXNrIVwiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBsb2dpbigpIHtcclxuICAgIGF3YWl0IHRoaXMubG9hZFdlYjMoKTtcclxuICAgIC8vIGF3YWl0IHRoaXMubG9hZEJsb2NrY2hhaW5EYXRhKCk7XHJcbiAgICAvLyBpZiAodXNlckV4aXN0KSB7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKHVzZXJFeGlzdCk7XHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgLy8gICB3aW5kb3cuYWxlcnQoXHJcbiAgICAvLyAgICAgXCJUaGUgdXNlciB5b3UgYXJlIGxvb2tpbmcgZm9yIGRvZXNuJ3QgZXhpc3QuIFRyeSBhbm90aGVyIG9uZSFcIlxyXG4gICAgLy8gICApO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGFjY291bnQ6IFwiXCIsXHJcbiAgICAgIGlzRXhpc3Q6IGZhbHNlLFxyXG4gICAgICBjb3N0OiBcIlwiLFxyXG4gICAgfTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBhY2NvdW50LCBzZXRBY2NvdW50IH0gPSB0aGlzLmNvbnRleHQ7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxmb3JtXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtYW51YWxcIlxyXG4gICAgICAgICAgb25TdWJtaXQ9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdVc2VyID0gdGhpcy5zdGF0ZS5hY2NvdW50O1xyXG4gICAgICAgICAgICBzZXRBY2NvdW50KG5ld1VzZXIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRleHQpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIC8vIG9uU3VibWl0PXthc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICAgIC8vICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIC8vICAgYXdhaXQgdGhpcy5yZWdpc3Rlcih0aGlzLnN0YXRlLnJlZmVyZXJBZGRyZXNzKTtcclxuICAgICAgICAgIC8vICAgY29uc3QgbmV3VXNlciA9IHRoaXMuc3RhdGUuYWNjb3VudDtcclxuICAgICAgICAgIC8vICAgc2V0QWNjb3VudChuZXdVc2VyKTtcclxuICAgICAgICAgIC8vIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGFkZHJlc3MgPSB0aGlzLmlucHV0LnZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBhY2NvdW50OiBhZGRyZXNzLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICByZWY9eyhpbnB1dCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuaW5wdXQgPSBpbnB1dDtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXYWxsZXQgQWRkcmVzcyBvciBJRC4uLlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtYW51YWwtYnRuXCI+XHJcbiAgICAgICAgICAgIDxiPlZpZXdpbmc8L2I+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLm1hbnVhbC1idG4ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoNTUsIDIxNCwgMjU1KTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgIDIyM2RlZyxcclxuICAgICAgICAgICAgICByZ2JhKDU1LCAyMTQsIDI1NSwgMSkgMCUsXHJcbiAgICAgICAgICAgICAgcmdiYSgxNiwgODMsIDI0NSwgMSkgNDYlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTYsIDEsIDYyLCAxKTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgICAgIG1hcmdpbjogMzBweCAwO1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hbnVhbExvZ2luO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\components\\\\login\\\\ManualLogin.jsx */"));
    }
  }]);

  return ManualLogin;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(ManualLogin, "contextType", _AccountContext__WEBPACK_IMPORTED_MODULE_10__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (ManualLogin);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2dpbi9NYW51YWxMb2dpbi5qc3giXSwibmFtZXMiOlsiTWFudWFsTG9naW4iLCJ3ZWIzIiwiV2ViMyIsImdpdmVuUHJvdmlkZXIiLCJjb250cmFjdCIsImV0aCIsIkNvbnRyYWN0IiwiQUJJIiwiQUREUkVTUyIsInNldFN0YXRlIiwibWV0aG9kcyIsImlzVXNlckV4aXN0cyIsInN0YXRlIiwiYWNjb3VudCIsImNhbGwiLCJpc0V4aXN0cyIsImlzRXhpc3QiLCJpc0xvYWRpbmciLCJ3aW5kb3ciLCJldGhlcmV1bSIsImVuYWJsZSIsImN1cnJlbnRQcm92aWRlciIsImFsZXJ0IiwibG9hZFdlYjMiLCJwcm9wcyIsImNvc3QiLCJjb250ZXh0Iiwic2V0QWNjb3VudCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJuZXdVc2VyIiwiY29uc29sZSIsImxvZyIsImFkZHJlc3MiLCJpbnB1dCIsInZhbHVlIiwidG9TdHJpbmciLCJDb21wb25lbnQiLCJBY2NvdW50Q29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsVzs7Ozs7Ozs7Ozs7Ozs7QUFJSUMsb0IsR0FBTyxJQUFJQyw0Q0FBSixDQUFTQSw0Q0FBSSxDQUFDQyxhQUFMLElBQXNCLHVCQUEvQixDO0FBQ1BDLHdCLEdBQVcsSUFBSUgsSUFBSSxDQUFDSSxHQUFMLENBQVNDLFFBQWIsQ0FBc0JDLG1EQUF0QixFQUEyQkMsdURBQTNCLEM7QUFFakIscUJBQUtDLFFBQUwsQ0FBYztBQUFFTCwwQkFBUSxFQUFSQTtBQUFGLGlCQUFkOzt1QkFDdUJBLFFBQVEsQ0FBQ00sT0FBVCxDQUNwQkMsWUFEb0IsQ0FDUCxLQUFLQyxLQUFMLENBQVdDLE9BREosRUFFcEJDLElBRm9CLEU7OztBQUFqQkMsd0I7QUFJTixxQkFBS04sUUFBTCxDQUFjO0FBQUVPLHlCQUFPLEVBQUVEO0FBQVgsaUJBQWQ7QUFDQSxxQkFBS04sUUFBTCxDQUFjO0FBQUVMLDBCQUFRLEVBQVJBO0FBQUYsaUJBQWQ7QUFDQSxxQkFBS0ssUUFBTCxDQUFjO0FBQUVRLDJCQUFTLEVBQUU7QUFBYixpQkFBZDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQUlJQyxNQUFNLENBQUNDLFE7Ozs7O0FBQ1RELHNCQUFNLENBQUNqQixJQUFQLEdBQWMsSUFBSUMsNENBQUosQ0FBU2dCLE1BQU0sQ0FBQ0MsUUFBaEIsQ0FBZDs7dUJBQ01ELE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEIsRTs7Ozs7OztBQUNELG9CQUFJRixNQUFNLENBQUNqQixJQUFYLEVBQWlCO0FBQ3RCaUIsd0JBQU0sQ0FBQ2pCLElBQVAsR0FBYyxJQUFJQyw0Q0FBSixDQUFTZ0IsTUFBTSxDQUFDakIsSUFBUCxDQUFZb0IsZUFBckIsQ0FBZDtBQUNELGlCQUZNLE1BRUE7QUFDTEgsd0JBQU0sQ0FBQ0ksS0FBUCxDQUNFLHFFQURGO0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBSUssS0FBS0MsUUFBTCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXUix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtaLEtBQUwsR0FBYTtBQUNYQyxhQUFPLEVBQUUsRUFERTtBQUVYRyxhQUFPLEVBQUUsS0FGRTtBQUdYUyxVQUFJLEVBQUU7QUFISyxLQUFiO0FBRmlCO0FBT2xCOzs7OzZCQUNRO0FBQUE7O0FBQUEsMEJBQ3lCLEtBQUtDLE9BRDlCO0FBQUEsVUFDQ2IsT0FERCxpQkFDQ0EsT0FERDtBQUFBLFVBQ1VjLFVBRFYsaUJBQ1VBLFVBRFY7QUFFUCxhQUNFLG1FQUNFO0FBRUUsZ0JBQVEsRUFBRSxrQkFBQ0MsS0FBRCxFQUFXO0FBQ25CQSxlQUFLLENBQUNDLGNBQU47QUFDQSxjQUFNQyxPQUFPLEdBQUcsTUFBSSxDQUFDbEIsS0FBTCxDQUFXQyxPQUEzQjtBQUNBYyxvQkFBVSxDQUFDRyxPQUFELENBQVY7QUFDQUMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQUksQ0FBQ04sT0FBakI7QUFDRCxTQVBILENBUUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkY7QUFBQSwyQ0FDWSxRQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FlRTtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsZ0JBQVEsRUFBRSxrQkFBQ0UsS0FBRCxFQUFXO0FBQ25CLGNBQU1LLE9BQU8sR0FBRyxNQUFJLENBQUNDLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkMsUUFBakIsRUFBaEI7O0FBQ0EsZ0JBQUksQ0FBQzNCLFFBQUwsQ0FBYztBQUNaSSxtQkFBTyxFQUFFb0I7QUFERyxXQUFkO0FBR0QsU0FQSDtBQVFFLFdBQUcsRUFBRSxhQUFDQyxLQUFELEVBQVc7QUFDZCxnQkFBSSxDQUFDQSxLQUFMLEdBQWFBLEtBQWI7QUFDRCxTQVZIO0FBV0UsbUJBQVcsRUFBQyx5QkFYZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFmRixFQTRCRTtBQUFBLDJDQUFrQixZQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLENBNUJGLENBREY7QUFBQTtBQUFBO0FBQUEsc3JNQURGO0FBc0VEOzs7O0VBMUh1QkcsK0M7OzBGQUFwQnJDLFcsaUJBQ2lCc0Msd0Q7O0FBNEhSdEMsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uZDU2NmY2MjVlMjU4MWU0MzAzMjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFjY291bnRDb250ZXh0IGZyb20gXCIuLi9BY2NvdW50Q29udGV4dFwiO1xyXG5pbXBvcnQgeyBBQkksIEFERFJFU1MgfSBmcm9tIFwiLi4vLi4vZXRoZXJldW0vd2ViM1wiO1xyXG5pbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xyXG5cclxuY2xhc3MgTWFudWFsTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IEFjY291bnRDb250ZXh0O1xyXG5cclxuICBhc3luYyBsb2FkQmxvY2tjaGFpbkRhdGEoKSB7XHJcbiAgICBjb25zdCB3ZWIzID0gbmV3IFdlYjMoV2ViMy5naXZlblByb3ZpZGVyIHx8IFwiaHR0cDovL2xvY2FsaG9zdDo4NTQ1XCIpO1xyXG4gICAgY29uc3QgY29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoQUJJLCBBRERSRVNTKTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY29udHJhY3QgfSk7XHJcbiAgICBjb25zdCBpc0V4aXN0cyA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgLmlzVXNlckV4aXN0cyh0aGlzLnN0YXRlLmFjY291bnQpXHJcbiAgICAgIC5jYWxsKCk7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzRXhpc3Q6IGlzRXhpc3RzIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRyYWN0IH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzTG9hZGluZzogZmFsc2UgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBsb2FkV2ViMygpIHtcclxuICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcclxuICAgICAgd2luZG93LndlYjMgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pO1xyXG4gICAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0uZW5hYmxlKCk7XHJcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy53ZWIzKSB7XHJcbiAgICAgIHdpbmRvdy53ZWIzID0gbmV3IFdlYjMod2luZG93LndlYjMuY3VycmVudFByb3ZpZGVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcclxuICAgICAgICBcIk5vbi1FdGhlcmV1bSBicm93c2VyIGRldGVjdGVkLiBZb3Ugc2hvdWxkIGNvbnNpZGVyIHRyeWluZyBNZXRhTWFzayFcIlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgbG9naW4oKSB7XHJcbiAgICBhd2FpdCB0aGlzLmxvYWRXZWIzKCk7XHJcbiAgICAvLyBhd2FpdCB0aGlzLmxvYWRCbG9ja2NoYWluRGF0YSgpO1xyXG4gICAgLy8gaWYgKHVzZXJFeGlzdCkge1xyXG4gICAgLy8gICBjb25zb2xlLmxvZyh1c2VyRXhpc3QpO1xyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgIC8vICAgd2luZG93LmFsZXJ0KFxyXG4gICAgLy8gICAgIFwiVGhlIHVzZXIgeW91IGFyZSBsb29raW5nIGZvciBkb2Vzbid0IGV4aXN0LiBUcnkgYW5vdGhlciBvbmUhXCJcclxuICAgIC8vICAgKTtcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBhY2NvdW50OiBcIlwiLFxyXG4gICAgICBpc0V4aXN0OiBmYWxzZSxcclxuICAgICAgY29zdDogXCJcIixcclxuICAgIH07XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgYWNjb3VudCwgc2V0QWNjb3VudCB9ID0gdGhpcy5jb250ZXh0O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWFudWFsXCJcclxuICAgICAgICAgIG9uU3VibWl0PXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3VXNlciA9IHRoaXMuc3RhdGUuYWNjb3VudDtcclxuICAgICAgICAgICAgc2V0QWNjb3VudChuZXdVc2VyKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5jb250ZXh0KTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICAvLyBvblN1Ym1pdD17YXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAvLyAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAvLyAgIGF3YWl0IHRoaXMucmVnaXN0ZXIodGhpcy5zdGF0ZS5yZWZlcmVyQWRkcmVzcyk7XHJcbiAgICAgICAgICAvLyAgIGNvbnN0IG5ld1VzZXIgPSB0aGlzLnN0YXRlLmFjY291bnQ7XHJcbiAgICAgICAgICAvLyAgIHNldEFjY291bnQobmV3VXNlcik7XHJcbiAgICAgICAgICAvLyB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBhZGRyZXNzID0gdGhpcy5pbnB1dC52YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgYWNjb3VudDogYWRkcmVzcyxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgcmVmPXsoaW5wdXQpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmlucHV0ID0gaW5wdXQ7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2FsbGV0IEFkZHJlc3Mgb3IgSUQuLi5cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibWFudWFsLWJ0blwiPlxyXG4gICAgICAgICAgICA8Yj5WaWV3aW5nPC9iPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5tYW51YWwtYnRuIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDU1LCAyMTQsIDI1NSk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICAyMjNkZWcsXHJcbiAgICAgICAgICAgICAgcmdiYSg1NSwgMjE0LCAyNTUsIDEpIDAlLFxyXG4gICAgICAgICAgICAgIHJnYmEoMTYsIDgzLCAyNDUsIDEpIDQ2JVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2LCAxLCA2MiwgMSk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgICBtYXJnaW46IDMwcHggMDtcclxuICAgICAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYW51YWxMb2dpbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==