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
                  isLoading: false
                });

              case 8:
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
                _context3.next = 4;
                return this.loadBlockchainData();

              case 4:
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

          _this2.login();
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
          lineNumber: 57,
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
          lineNumber: 73,
          columnNumber: 11
        }
      }), __jsx("button", {
        className: "jsx-901526722" + " " + "manual-btn",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }
      }, __jsx("b", {
        className: "jsx-901526722",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 13
        }
      }, "Viewing"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "901526722",
        __self: this
      }, ".manual-btn.jsx-901526722{background:rgb(55,214,255);background:linear-gradient( 223deg, rgba(55,214,255,1) 0%, rgba(16,83,245,1) 46% );box-shadow:none;outline:none;border:none;}input.jsx-901526722{width:100%;background:rgba(16,1,62,1);box-shadow:none;outline:none;border:none;padding:20px 20px;border-radius:30px;font-size:1.2em;margin:30px 0;color:grey;}button.jsx-901526722{width:100%;text-align:center;padding:20px 0;border-radius:30px;color:white;font-size:1.2em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXGxvZ2luXFxNYW51YWxMb2dpbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUZvQixBQUcwQyxBQVdsQixBQWFBLFdBWm1CLEFBYVosZ0JBcEJqQixFQXFCYyxTQWJDLE1BY0csVUFiTixTQWNELElBYkEsUUFjSSxJQWJFLFlBY3BCLE1BYnFCLGFBWEgsTUFZQSxVQVhILE1BWUMsT0FYRixPQVlELEtBWGIsTUFZQSIsImZpbGUiOiJDOlxcVXNlcnNcXGNyZmFiXFxEZXNrdG9wXFxmb3JzYWdlLWJvaWxlcnBsYXRlXFxjb21wb25lbnRzXFxsb2dpblxcTWFudWFsTG9naW4uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWNjb3VudENvbnRleHQgZnJvbSBcIi4uL0FjY291bnRDb250ZXh0XCI7XHJcbmltcG9ydCB7IEFCSSwgQUREUkVTUyB9IGZyb20gXCIuLi8uLi9ldGhlcmV1bS93ZWIzXCI7XHJcbmltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCI7XHJcblxyXG5jbGFzcyBNYW51YWxMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIGNvbnRleHRUeXBlID0gQWNjb3VudENvbnRleHQ7XHJcblxyXG4gIGFzeW5jIGxvYWRCbG9ja2NoYWluRGF0YSgpIHtcclxuICAgIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyhXZWIzLmdpdmVuUHJvdmlkZXIgfHwgXCJodHRwOi8vbG9jYWxob3N0Ojg1NDVcIik7XHJcbiAgICBjb25zdCBjb250cmFjdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChBQkksIEFERFJFU1MpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRyYWN0IH0pO1xyXG4gICAgY29uc3QgaXNFeGlzdHMgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzXHJcbiAgICAgIC5pc1VzZXJFeGlzdHModGhpcy5zdGF0ZS5hY2NvdW50KVxyXG4gICAgICAuY2FsbCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzRXhpc3Q6IGlzRXhpc3RzIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzTG9hZGluZzogZmFsc2UgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBsb2FkV2ViMygpIHtcclxuICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcclxuICAgICAgd2luZG93LndlYjMgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pO1xyXG4gICAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0uZW5hYmxlKCk7XHJcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy53ZWIzKSB7XHJcbiAgICAgIHdpbmRvdy53ZWIzID0gbmV3IFdlYjMod2luZG93LndlYjMuY3VycmVudFByb3ZpZGVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcclxuICAgICAgICBcIk5vbi1FdGhlcmV1bSBicm93c2VyIGRldGVjdGVkLiBZb3Ugc2hvdWxkIGNvbnNpZGVyIHRyeWluZyBNZXRhTWFzayFcIlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgbG9naW4oKSB7XHJcbiAgICBhd2FpdCB0aGlzLmxvYWRXZWIzKCk7XHJcbiAgICBhd2FpdCB0aGlzLmxvYWRCbG9ja2NoYWluRGF0YSgpO1xyXG4gICAgLy8gaWYgKHVzZXJFeGlzdCkge1xyXG4gICAgLy8gICBjb25zb2xlLmxvZyh1c2VyRXhpc3QpO1xyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgIC8vICAgd2luZG93LmFsZXJ0KFxyXG4gICAgLy8gICAgIFwiVGhlIHVzZXIgeW91IGFyZSBsb29raW5nIGZvciBkb2Vzbid0IGV4aXN0LiBUcnkgYW5vdGhlciBvbmUhXCJcclxuICAgIC8vICAgKTtcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBhY2NvdW50OiBcIlwiLFxyXG4gICAgICBpc0V4aXN0OiBmYWxzZSxcclxuICAgICAgY29zdDogXCJcIixcclxuICAgIH07XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgYWNjb3VudCwgc2V0QWNjb3VudCB9ID0gdGhpcy5jb250ZXh0O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWFudWFsXCJcclxuICAgICAgICAgIG9uU3VibWl0PXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3VXNlciA9IHRoaXMuc3RhdGUuYWNjb3VudDtcclxuICAgICAgICAgICAgc2V0QWNjb3VudChuZXdVc2VyKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5jb250ZXh0KTtcclxuICAgICAgICAgICAgdGhpcy5sb2dpbigpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIC8vIG9uU3VibWl0PXthc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICAgIC8vICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIC8vICAgYXdhaXQgdGhpcy5yZWdpc3Rlcih0aGlzLnN0YXRlLnJlZmVyZXJBZGRyZXNzKTtcclxuICAgICAgICAgIC8vICAgY29uc3QgbmV3VXNlciA9IHRoaXMuc3RhdGUuYWNjb3VudDtcclxuICAgICAgICAgIC8vICAgc2V0QWNjb3VudChuZXdVc2VyKTtcclxuICAgICAgICAgIC8vIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGFkZHJlc3MgPSB0aGlzLmlucHV0LnZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBhY2NvdW50OiBhZGRyZXNzLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICByZWY9eyhpbnB1dCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuaW5wdXQgPSBpbnB1dDtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXYWxsZXQgQWRkcmVzcyBvciBJRC4uLlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtYW51YWwtYnRuXCI+XHJcbiAgICAgICAgICAgIDxiPlZpZXdpbmc8L2I+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLm1hbnVhbC1idG4ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoNTUsIDIxNCwgMjU1KTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgIDIyM2RlZyxcclxuICAgICAgICAgICAgICByZ2JhKDU1LCAyMTQsIDI1NSwgMSkgMCUsXHJcbiAgICAgICAgICAgICAgcmdiYSgxNiwgODMsIDI0NSwgMSkgNDYlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTYsIDEsIDYyLCAxKTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgICAgIG1hcmdpbjogMzBweCAwO1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hbnVhbExvZ2luO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\components\\\\login\\\\ManualLogin.jsx */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2dpbi9NYW51YWxMb2dpbi5qc3giXSwibmFtZXMiOlsiTWFudWFsTG9naW4iLCJ3ZWIzIiwiV2ViMyIsImdpdmVuUHJvdmlkZXIiLCJjb250cmFjdCIsImV0aCIsIkNvbnRyYWN0IiwiQUJJIiwiQUREUkVTUyIsInNldFN0YXRlIiwibWV0aG9kcyIsImlzVXNlckV4aXN0cyIsInN0YXRlIiwiYWNjb3VudCIsImNhbGwiLCJpc0V4aXN0cyIsImlzRXhpc3QiLCJpc0xvYWRpbmciLCJ3aW5kb3ciLCJldGhlcmV1bSIsImVuYWJsZSIsImN1cnJlbnRQcm92aWRlciIsImFsZXJ0IiwibG9hZFdlYjMiLCJsb2FkQmxvY2tjaGFpbkRhdGEiLCJwcm9wcyIsImNvc3QiLCJjb250ZXh0Iiwic2V0QWNjb3VudCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJuZXdVc2VyIiwiY29uc29sZSIsImxvZyIsImxvZ2luIiwiYWRkcmVzcyIsImlucHV0IiwidmFsdWUiLCJ0b1N0cmluZyIsIkNvbXBvbmVudCIsIkFjY291bnRDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxXOzs7Ozs7Ozs7Ozs7OztBQUlJQyxvQixHQUFPLElBQUlDLDRDQUFKLENBQVNBLDRDQUFJLENBQUNDLGFBQUwsSUFBc0IsdUJBQS9CLEM7QUFDUEMsd0IsR0FBVyxJQUFJSCxJQUFJLENBQUNJLEdBQUwsQ0FBU0MsUUFBYixDQUFzQkMsbURBQXRCLEVBQTJCQyx1REFBM0IsQztBQUNqQixxQkFBS0MsUUFBTCxDQUFjO0FBQUVMLDBCQUFRLEVBQVJBO0FBQUYsaUJBQWQ7O3VCQUN1QkEsUUFBUSxDQUFDTSxPQUFULENBQ3BCQyxZQURvQixDQUNQLEtBQUtDLEtBQUwsQ0FBV0MsT0FESixFQUVwQkMsSUFGb0IsRTs7O0FBQWpCQyx3QjtBQUdOLHFCQUFLTixRQUFMLENBQWM7QUFBRU8seUJBQU8sRUFBRUQ7QUFBWCxpQkFBZDtBQUNBLHFCQUFLTixRQUFMLENBQWM7QUFBRVEsMkJBQVMsRUFBRTtBQUFiLGlCQUFkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBSUlDLE1BQU0sQ0FBQ0MsUTs7Ozs7QUFDVEQsc0JBQU0sQ0FBQ2pCLElBQVAsR0FBYyxJQUFJQyw0Q0FBSixDQUFTZ0IsTUFBTSxDQUFDQyxRQUFoQixDQUFkOzt1QkFDTUQsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQixFOzs7Ozs7O0FBQ0Qsb0JBQUlGLE1BQU0sQ0FBQ2pCLElBQVgsRUFBaUI7QUFDdEJpQix3QkFBTSxDQUFDakIsSUFBUCxHQUFjLElBQUlDLDRDQUFKLENBQVNnQixNQUFNLENBQUNqQixJQUFQLENBQVlvQixlQUFyQixDQUFkO0FBQ0QsaUJBRk0sTUFFQTtBQUNMSCx3QkFBTSxDQUFDSSxLQUFQLENBQ0UscUVBREY7QUFHRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFJSyxLQUFLQyxRQUFMLEU7Ozs7dUJBQ0EsS0FBS0Msa0JBQUwsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVVIsdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLYixLQUFMLEdBQWE7QUFDWEMsYUFBTyxFQUFFLEVBREU7QUFFWEcsYUFBTyxFQUFFLEtBRkU7QUFHWFUsVUFBSSxFQUFFO0FBSEssS0FBYjtBQUZpQjtBQU9sQjs7Ozs2QkFDUTtBQUFBOztBQUFBLDBCQUN5QixLQUFLQyxPQUQ5QjtBQUFBLFVBQ0NkLE9BREQsaUJBQ0NBLE9BREQ7QUFBQSxVQUNVZSxVQURWLGlCQUNVQSxVQURWO0FBRVAsYUFDRSxtRUFDRTtBQUVFLGdCQUFRLEVBQUUsa0JBQUNDLEtBQUQsRUFBVztBQUNuQkEsZUFBSyxDQUFDQyxjQUFOO0FBQ0EsY0FBTUMsT0FBTyxHQUFHLE1BQUksQ0FBQ25CLEtBQUwsQ0FBV0MsT0FBM0I7QUFDQWUsb0JBQVUsQ0FBQ0csT0FBRCxDQUFWO0FBQ0FDLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFJLENBQUNOLE9BQWpCOztBQUNBLGdCQUFJLENBQUNPLEtBQUw7QUFDRCxTQVJILENBU0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEY7QUFBQSwyQ0FDWSxRQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FnQkU7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLGdCQUFRLEVBQUUsa0JBQUNMLEtBQUQsRUFBVztBQUNuQixjQUFNTSxPQUFPLEdBQUcsTUFBSSxDQUFDQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLFFBQWpCLEVBQWhCOztBQUNBLGdCQUFJLENBQUM3QixRQUFMLENBQWM7QUFDWkksbUJBQU8sRUFBRXNCO0FBREcsV0FBZDtBQUdELFNBUEg7QUFRRSxXQUFHLEVBQUUsYUFBQ0MsS0FBRCxFQUFXO0FBQ2QsZ0JBQUksQ0FBQ0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0QsU0FWSDtBQVdFLG1CQUFXLEVBQUMseUJBWGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBaEJGLEVBNkJFO0FBQUEsMkNBQWtCLFlBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsQ0E3QkYsQ0FERjtBQUFBO0FBQUE7QUFBQSw4cE1BREY7QUF1RUQ7Ozs7RUF4SHVCRywrQzs7MEZBQXBCdkMsVyxpQkFDaUJ3Qyx3RDs7QUEwSFJ4QywwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi5iMDkyNTVmZjY3Njk1MDdhY2FmYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWNjb3VudENvbnRleHQgZnJvbSBcIi4uL0FjY291bnRDb250ZXh0XCI7XHJcbmltcG9ydCB7IEFCSSwgQUREUkVTUyB9IGZyb20gXCIuLi8uLi9ldGhlcmV1bS93ZWIzXCI7XHJcbmltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCI7XHJcblxyXG5jbGFzcyBNYW51YWxMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIGNvbnRleHRUeXBlID0gQWNjb3VudENvbnRleHQ7XHJcblxyXG4gIGFzeW5jIGxvYWRCbG9ja2NoYWluRGF0YSgpIHtcclxuICAgIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyhXZWIzLmdpdmVuUHJvdmlkZXIgfHwgXCJodHRwOi8vbG9jYWxob3N0Ojg1NDVcIik7XHJcbiAgICBjb25zdCBjb250cmFjdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChBQkksIEFERFJFU1MpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRyYWN0IH0pO1xyXG4gICAgY29uc3QgaXNFeGlzdHMgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzXHJcbiAgICAgIC5pc1VzZXJFeGlzdHModGhpcy5zdGF0ZS5hY2NvdW50KVxyXG4gICAgICAuY2FsbCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzRXhpc3Q6IGlzRXhpc3RzIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzTG9hZGluZzogZmFsc2UgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBsb2FkV2ViMygpIHtcclxuICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcclxuICAgICAgd2luZG93LndlYjMgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pO1xyXG4gICAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0uZW5hYmxlKCk7XHJcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy53ZWIzKSB7XHJcbiAgICAgIHdpbmRvdy53ZWIzID0gbmV3IFdlYjMod2luZG93LndlYjMuY3VycmVudFByb3ZpZGVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcclxuICAgICAgICBcIk5vbi1FdGhlcmV1bSBicm93c2VyIGRldGVjdGVkLiBZb3Ugc2hvdWxkIGNvbnNpZGVyIHRyeWluZyBNZXRhTWFzayFcIlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgbG9naW4oKSB7XHJcbiAgICBhd2FpdCB0aGlzLmxvYWRXZWIzKCk7XHJcbiAgICBhd2FpdCB0aGlzLmxvYWRCbG9ja2NoYWluRGF0YSgpO1xyXG4gICAgLy8gaWYgKHVzZXJFeGlzdCkge1xyXG4gICAgLy8gICBjb25zb2xlLmxvZyh1c2VyRXhpc3QpO1xyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgIC8vICAgd2luZG93LmFsZXJ0KFxyXG4gICAgLy8gICAgIFwiVGhlIHVzZXIgeW91IGFyZSBsb29raW5nIGZvciBkb2Vzbid0IGV4aXN0LiBUcnkgYW5vdGhlciBvbmUhXCJcclxuICAgIC8vICAgKTtcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBhY2NvdW50OiBcIlwiLFxyXG4gICAgICBpc0V4aXN0OiBmYWxzZSxcclxuICAgICAgY29zdDogXCJcIixcclxuICAgIH07XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgYWNjb3VudCwgc2V0QWNjb3VudCB9ID0gdGhpcy5jb250ZXh0O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWFudWFsXCJcclxuICAgICAgICAgIG9uU3VibWl0PXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3VXNlciA9IHRoaXMuc3RhdGUuYWNjb3VudDtcclxuICAgICAgICAgICAgc2V0QWNjb3VudChuZXdVc2VyKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5jb250ZXh0KTtcclxuICAgICAgICAgICAgdGhpcy5sb2dpbigpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIC8vIG9uU3VibWl0PXthc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICAgIC8vICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIC8vICAgYXdhaXQgdGhpcy5yZWdpc3Rlcih0aGlzLnN0YXRlLnJlZmVyZXJBZGRyZXNzKTtcclxuICAgICAgICAgIC8vICAgY29uc3QgbmV3VXNlciA9IHRoaXMuc3RhdGUuYWNjb3VudDtcclxuICAgICAgICAgIC8vICAgc2V0QWNjb3VudChuZXdVc2VyKTtcclxuICAgICAgICAgIC8vIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGFkZHJlc3MgPSB0aGlzLmlucHV0LnZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBhY2NvdW50OiBhZGRyZXNzLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICByZWY9eyhpbnB1dCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuaW5wdXQgPSBpbnB1dDtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXYWxsZXQgQWRkcmVzcyBvciBJRC4uLlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtYW51YWwtYnRuXCI+XHJcbiAgICAgICAgICAgIDxiPlZpZXdpbmc8L2I+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLm1hbnVhbC1idG4ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoNTUsIDIxNCwgMjU1KTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgIDIyM2RlZyxcclxuICAgICAgICAgICAgICByZ2JhKDU1LCAyMTQsIDI1NSwgMSkgMCUsXHJcbiAgICAgICAgICAgICAgcmdiYSgxNiwgODMsIDI0NSwgMSkgNDYlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTYsIDEsIDYyLCAxKTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgICAgIG1hcmdpbjogMzBweCAwO1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hbnVhbExvZ2luO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9