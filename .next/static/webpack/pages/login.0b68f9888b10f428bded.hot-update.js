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
        var web3, accounts, contract, isExists, costs;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                web3 = new web3__WEBPACK_IMPORTED_MODULE_12___default.a(web3__WEBPACK_IMPORTED_MODULE_12___default.a.givenProvider || "http://localhost:8545");
                _context.next = 3;
                return web3.eth.getAccounts();

              case 3:
                accounts = _context.sent;
                this.setState({
                  account: accounts[0]
                });
                contract = new web3.eth.Contract(_ethereum_web3__WEBPACK_IMPORTED_MODULE_11__["ABI"], _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__["ADDRESS"]);
                this.setState({
                  contract: contract
                });
                _context.next = 9;
                return contract.methods.isUserExists(this.state.account).call();

              case 9:
                isExists = _context.sent;
                console.log(this.context);
                console.log(this.state.account);
                this.setState({
                  isExist: isExists
                });
                _context.next = 15;
                return contract.methods.registrationCost().call();

              case 15:
                costs = _context.sent;
                this.setState({
                  cost: costs
                });
                this.setState({
                  isLoading: false
                });

              case 18:
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
                if (this.state.isExist) {
                  console.log(this.state.isExist);
                } else {
                  window.alert("The user you are looking for doesn't exist. Try another one!");
                }

              case 5:
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
        onSubmit: /*#__PURE__*/function () {
          var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(event) {
            var newUser;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    event.preventDefault();
                    newUser = _this2.state.account;
                    setAccount(newUser);
                    console.log(_this2.context);

                    _this2.login();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }() // onSubmit={async (event) => {
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
          lineNumber: 64,
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
          lineNumber: 80,
          columnNumber: 11
        }
      }), __jsx("button", {
        className: "jsx-901526722" + " " + "manual-btn",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }
      }, __jsx("b", {
        className: "jsx-901526722",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 13
        }
      }, "Viewing"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "901526722",
        __self: this
      }, ".manual-btn.jsx-901526722{background:rgb(55,214,255);background:linear-gradient( 223deg, rgba(55,214,255,1) 0%, rgba(16,83,245,1) 46% );box-shadow:none;outline:none;border:none;}input.jsx-901526722{width:100%;background:rgba(16,1,62,1);box-shadow:none;outline:none;border:none;padding:20px 20px;border-radius:30px;font-size:1.2em;margin:30px 0;color:grey;}button.jsx-901526722{width:100%;text-align:center;padding:20px 0;border-radius:30px;color:white;font-size:1.2em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXGxvZ2luXFxNYW51YWxMb2dpbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0dvQixBQUcwQyxBQVdsQixBQWFBLFdBWm1CLEFBYVosZ0JBcEJqQixFQXFCYyxTQWJDLE1BY0csVUFiTixTQWNELElBYkEsUUFjSSxJQWJFLFlBY3BCLE1BYnFCLGFBWEgsTUFZQSxVQVhILE1BWUMsT0FYRixPQVlELEtBWGIsTUFZQSIsImZpbGUiOiJDOlxcVXNlcnNcXGNyZmFiXFxEZXNrdG9wXFxmb3JzYWdlLWJvaWxlcnBsYXRlXFxjb21wb25lbnRzXFxsb2dpblxcTWFudWFsTG9naW4uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWNjb3VudENvbnRleHQgZnJvbSBcIi4uL0FjY291bnRDb250ZXh0XCI7XHJcbmltcG9ydCB7IEFCSSwgQUREUkVTUyB9IGZyb20gXCIuLi8uLi9ldGhlcmV1bS93ZWIzXCI7XHJcbmltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCI7XHJcblxyXG5jbGFzcyBNYW51YWxMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIGNvbnRleHRUeXBlID0gQWNjb3VudENvbnRleHQ7XHJcblxyXG4gIGFzeW5jIGxvYWRCbG9ja2NoYWluRGF0YSgpIHtcclxuICAgIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyhXZWIzLmdpdmVuUHJvdmlkZXIgfHwgXCJodHRwOi8vbG9jYWxob3N0Ojg1NDVcIik7XHJcbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgYWNjb3VudDogYWNjb3VudHNbMF0gfSk7XHJcblxyXG4gICAgY29uc3QgY29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoQUJJLCBBRERSRVNTKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjb250cmFjdCB9KTtcclxuICAgIGNvbnN0IGlzRXhpc3RzID0gYXdhaXQgY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAuaXNVc2VyRXhpc3RzKHRoaXMuc3RhdGUuYWNjb3VudClcclxuICAgICAgLmNhbGwoKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGV4dCk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmFjY291bnQpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzRXhpc3Q6IGlzRXhpc3RzIH0pO1xyXG4gICAgY29uc3QgY29zdHMgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLnJlZ2lzdHJhdGlvbkNvc3QoKS5jYWxsKCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY29zdDogY29zdHMgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiBmYWxzZSB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGxvYWRXZWIzKCkge1xyXG4gICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xyXG4gICAgICB3aW5kb3cud2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSk7XHJcbiAgICAgIGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5lbmFibGUoKTtcclxuICAgIH0gZWxzZSBpZiAod2luZG93LndlYjMpIHtcclxuICAgICAgd2luZG93LndlYjMgPSBuZXcgV2ViMyh3aW5kb3cud2ViMy5jdXJyZW50UHJvdmlkZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFxyXG4gICAgICAgIFwiTm9uLUV0aGVyZXVtIGJyb3dzZXIgZGV0ZWN0ZWQuIFlvdSBzaG91bGQgY29uc2lkZXIgdHJ5aW5nIE1ldGFNYXNrIVwiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBsb2dpbigpIHtcclxuICAgIGF3YWl0IHRoaXMubG9hZFdlYjMoKTtcclxuICAgIGF3YWl0IHRoaXMubG9hZEJsb2NrY2hhaW5EYXRhKCk7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5pc0V4aXN0KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuaXNFeGlzdCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXHJcbiAgICAgICAgXCJUaGUgdXNlciB5b3UgYXJlIGxvb2tpbmcgZm9yIGRvZXNuJ3QgZXhpc3QuIFRyeSBhbm90aGVyIG9uZSFcIlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGFjY291bnQ6IFwiXCIsXHJcbiAgICAgIGlzRXhpc3Q6IGZhbHNlLFxyXG4gICAgICBjb3N0OiBcIlwiLFxyXG4gICAgfTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBhY2NvdW50LCBzZXRBY2NvdW50IH0gPSB0aGlzLmNvbnRleHQ7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxmb3JtXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtYW51YWxcIlxyXG4gICAgICAgICAgb25TdWJtaXQ9e2FzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdVc2VyID0gdGhpcy5zdGF0ZS5hY2NvdW50O1xyXG4gICAgICAgICAgICBzZXRBY2NvdW50KG5ld1VzZXIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRleHQpO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luKCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgLy8gb25TdWJtaXQ9e2FzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgLy8gICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgLy8gICBhd2FpdCB0aGlzLnJlZ2lzdGVyKHRoaXMuc3RhdGUucmVmZXJlckFkZHJlc3MpO1xyXG4gICAgICAgICAgLy8gICBjb25zdCBuZXdVc2VyID0gdGhpcy5zdGF0ZS5hY2NvdW50O1xyXG4gICAgICAgICAgLy8gICBzZXRBY2NvdW50KG5ld1VzZXIpO1xyXG4gICAgICAgICAgLy8gfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgYWRkcmVzcyA9IHRoaXMuaW5wdXQudmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGFjY291bnQ6IGFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHJlZj17KGlucHV0KSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5pbnB1dCA9IGlucHV0O1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldhbGxldCBBZGRyZXNzIG9yIElELi4uXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1hbnVhbC1idG5cIj5cclxuICAgICAgICAgICAgPGI+Vmlld2luZzwvYj5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAubWFudWFsLWJ0biB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYig1NSwgMjE0LCAyNTUpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgMjIzZGVnLFxyXG4gICAgICAgICAgICAgIHJnYmEoNTUsIDIxNCwgMjU1LCAxKSAwJSxcclxuICAgICAgICAgICAgICByZ2JhKDE2LCA4MywgMjQ1LCAxKSA0NiVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxNiwgMSwgNjIsIDEpO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFudWFsTG9naW47XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\components\\\\login\\\\ManualLogin.jsx */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2dpbi9NYW51YWxMb2dpbi5qc3giXSwibmFtZXMiOlsiTWFudWFsTG9naW4iLCJ3ZWIzIiwiV2ViMyIsImdpdmVuUHJvdmlkZXIiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwic2V0U3RhdGUiLCJhY2NvdW50IiwiY29udHJhY3QiLCJDb250cmFjdCIsIkFCSSIsIkFERFJFU1MiLCJtZXRob2RzIiwiaXNVc2VyRXhpc3RzIiwic3RhdGUiLCJjYWxsIiwiaXNFeGlzdHMiLCJjb25zb2xlIiwibG9nIiwiY29udGV4dCIsImlzRXhpc3QiLCJyZWdpc3RyYXRpb25Db3N0IiwiY29zdHMiLCJjb3N0IiwiaXNMb2FkaW5nIiwid2luZG93IiwiZXRoZXJldW0iLCJlbmFibGUiLCJjdXJyZW50UHJvdmlkZXIiLCJhbGVydCIsImxvYWRXZWIzIiwibG9hZEJsb2NrY2hhaW5EYXRhIiwicHJvcHMiLCJzZXRBY2NvdW50IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld1VzZXIiLCJsb2dpbiIsImFkZHJlc3MiLCJpbnB1dCIsInZhbHVlIiwidG9TdHJpbmciLCJDb21wb25lbnQiLCJBY2NvdW50Q29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsVzs7Ozs7Ozs7Ozs7Ozs7QUFJSUMsb0IsR0FBTyxJQUFJQyw0Q0FBSixDQUFTQSw0Q0FBSSxDQUFDQyxhQUFMLElBQXNCLHVCQUEvQixDOzt1QkFDVUYsSUFBSSxDQUFDRyxHQUFMLENBQVNDLFdBQVQsRTs7O0FBQWpCQyx3QjtBQUNOLHFCQUFLQyxRQUFMLENBQWM7QUFBRUMseUJBQU8sRUFBRUYsUUFBUSxDQUFDLENBQUQ7QUFBbkIsaUJBQWQ7QUFFTUcsd0IsR0FBVyxJQUFJUixJQUFJLENBQUNHLEdBQUwsQ0FBU00sUUFBYixDQUFz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LEtBQVgsQ0FBaUJDLFFBQWpCLEVBQWhCOztBQUNBLGdCQUFJLENBQUNuQyxRQUFMLENBQWM7QUFDWkMsbUJBQU8sRUFBRStCO0FBREcsV0FBZDtBQUdELFNBUEg7QUFRRSxXQUFHLEVBQUUsYUFBQ0MsS0FBRCxFQUFXO0FBQ2QsZ0JBQUksQ0FBQ0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0QsU0FWSDtBQVdFLG1CQUFXLEVBQUMseUJBWGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBaEJGLEVBNkJFO0FBQUEsMkNBQWtCLFlBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsQ0E3QkYsQ0FERjtBQUFBO0FBQUE7QUFBQSxzaU5BREY7QUF1RUQ7Ozs7RUEvSHVCRywrQzs7MEZBQXBCM0MsVyxpQkFDaUI0Qyx3RDs7QUFpSVI1QywwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi4wYjY4Zjk4ODhiMTBmNDI4YmRlZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWNjb3VudENvbnRleHQgZnJvbSBcIi4uL0FjY291bnRDb250ZXh0XCI7XHJcbmltcG9ydCB7IEFCSSwgQUREUkVTUyB9IGZyb20gXCIuLi8uLi9ldGhlcmV1bS93ZWIzXCI7XHJcbmltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCI7XHJcblxyXG5jbGFzcyBNYW51YWxMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIGNvbnRleHRUeXBlID0gQWNjb3VudENvbnRleHQ7XHJcblxyXG4gIGFzeW5jIGxvYWRCbG9ja2NoYWluRGF0YSgpIHtcclxuICAgIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyhXZWIzLmdpdmVuUHJvdmlkZXIgfHwgXCJodHRwOi8vbG9jYWxob3N0Ojg1NDVcIik7XHJcbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgYWNjb3VudDogYWNjb3VudHNbMF0gfSk7XHJcblxyXG4gICAgY29uc3QgY29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoQUJJLCBBRERSRVNTKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjb250cmFjdCB9KTtcclxuICAgIGNvbnN0IGlzRXhpc3RzID0gYXdhaXQgY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAuaXNVc2VyRXhpc3RzKHRoaXMuc3RhdGUuYWNjb3VudClcclxuICAgICAgLmNhbGwoKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGV4dCk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmFjY291bnQpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzRXhpc3Q6IGlzRXhpc3RzIH0pO1xyXG4gICAgY29uc3QgY29zdHMgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLnJlZ2lzdHJhdGlvbkNvc3QoKS5jYWxsKCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY29zdDogY29zdHMgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiBmYWxzZSB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGxvYWRXZWIzKCkge1xyXG4gICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xyXG4gICAgICB3aW5kb3cud2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSk7XHJcbiAgICAgIGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5lbmFibGUoKTtcclxuICAgIH0gZWxzZSBpZiAod2luZG93LndlYjMpIHtcclxuICAgICAgd2luZG93LndlYjMgPSBuZXcgV2ViMyh3aW5kb3cud2ViMy5jdXJyZW50UHJvdmlkZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFxyXG4gICAgICAgIFwiTm9uLUV0aGVyZXVtIGJyb3dzZXIgZGV0ZWN0ZWQuIFlvdSBzaG91bGQgY29uc2lkZXIgdHJ5aW5nIE1ldGFNYXNrIVwiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBsb2dpbigpIHtcclxuICAgIGF3YWl0IHRoaXMubG9hZFdlYjMoKTtcclxuICAgIGF3YWl0IHRoaXMubG9hZEJsb2NrY2hhaW5EYXRhKCk7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5pc0V4aXN0KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuaXNFeGlzdCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXHJcbiAgICAgICAgXCJUaGUgdXNlciB5b3UgYXJlIGxvb2tpbmcgZm9yIGRvZXNuJ3QgZXhpc3QuIFRyeSBhbm90aGVyIG9uZSFcIlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGFjY291bnQ6IFwiXCIsXHJcbiAgICAgIGlzRXhpc3Q6IGZhbHNlLFxyXG4gICAgICBjb3N0OiBcIlwiLFxyXG4gICAgfTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBhY2NvdW50LCBzZXRBY2NvdW50IH0gPSB0aGlzLmNvbnRleHQ7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxmb3JtXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtYW51YWxcIlxyXG4gICAgICAgICAgb25TdWJtaXQ9e2FzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdVc2VyID0gdGhpcy5zdGF0ZS5hY2NvdW50O1xyXG4gICAgICAgICAgICBzZXRBY2NvdW50KG5ld1VzZXIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRleHQpO1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luKCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgLy8gb25TdWJtaXQ9e2FzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgLy8gICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgLy8gICBhd2FpdCB0aGlzLnJlZ2lzdGVyKHRoaXMuc3RhdGUucmVmZXJlckFkZHJlc3MpO1xyXG4gICAgICAgICAgLy8gICBjb25zdCBuZXdVc2VyID0gdGhpcy5zdGF0ZS5hY2NvdW50O1xyXG4gICAgICAgICAgLy8gICBzZXRBY2NvdW50KG5ld1VzZXIpO1xyXG4gICAgICAgICAgLy8gfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgYWRkcmVzcyA9IHRoaXMuaW5wdXQudmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGFjY291bnQ6IGFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHJlZj17KGlucHV0KSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5pbnB1dCA9IGlucHV0O1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldhbGxldCBBZGRyZXNzIG9yIElELi4uXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1hbnVhbC1idG5cIj5cclxuICAgICAgICAgICAgPGI+Vmlld2luZzwvYj5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAubWFudWFsLWJ0biB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYig1NSwgMjE0LCAyNTUpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgMjIzZGVnLFxyXG4gICAgICAgICAgICAgIHJnYmEoNTUsIDIxNCwgMjU1LCAxKSAwJSxcclxuICAgICAgICAgICAgICByZ2JhKDE2LCA4MywgMjQ1LCAxKSA0NiVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxNiwgMSwgNjIsIDEpO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFudWFsTG9naW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=