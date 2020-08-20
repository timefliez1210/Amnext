webpackHotUpdate_N_E("pages/login",{

/***/ "./components/login/AutoLogin.jsx":
/*!****************************************!*\
  !*** ./components/login/AutoLogin.jsx ***!
  \****************************************/
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
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _AccountContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../AccountContext */ "./components/AccountContext.jsx");








var _jsxFileName = "C:\\Users\\crfab\\Desktop\\forsage-boilerplate\\components\\login\\AutoLogin.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var AutoLogin = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AutoLogin, _Component);

  var _super = _createSuper(AutoLogin);

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(AutoLogin, [{
    key: "loadBlockchainData",
    value: function () {
      var _loadBlockchainData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var web3, contract, isExists, costs;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                web3 = new web3__WEBPACK_IMPORTED_MODULE_10___default.a(web3__WEBPACK_IMPORTED_MODULE_10___default.a.givenProvider || "http://localhost:8545"); // const accounts = await web3.eth.getAccounts();
                // this.setState({ account: accounts[0] });

                contract = new web3.eth.Contract(_ethereum_web3__WEBPACK_IMPORTED_MODULE_11__["ABI"], _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__["ADDRESS"]);
                this.setState({
                  contract: contract
                });
                _context.next = 5;
                return contract.methods.isUserExists(this.state.account).call()["catch"](function (err) {
                  console.log("Something went wrong");
                });

              case 5:
                isExists = _context.sent;
                this.setState({
                  isExist: isExists
                });
                _context.next = 9;
                return contract.methods.registrationCost().call();

              case 9:
                costs = _context.sent;
                this.setState({
                  cost: costs
                });
                this.setState({
                  isLoading: false
                });

              case 12:
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

                window.web3 = new web3__WEBPACK_IMPORTED_MODULE_10___default.a(window.ethereum);
                _context2.next = 4;
                return window.ethereum.enable();

              case 4:
                _context2.next = 7;
                break;

              case 6:
                if (window.web3) {
                  window.web3 = new web3__WEBPACK_IMPORTED_MODULE_10___default.a(window.web3.currentProvider);
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
  }]);

  function AutoLogin(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, AutoLogin);

    _this = _super.call(this, props);
    _this.state = {
      account: "",
      isExist: false,
      cost: "",
      loading: false,
      refererAddress: "0xf2aA26723ed7b099845afE69FA4929A46BC00245"
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(AutoLogin, [{
    key: "register",
    value: function () {
      var _register = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(_refererAddress) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.setState({
                  loading: true
                });
                _context3.next = 3;
                return this.loadWeb3();

              case 3:
                _context3.next = 5;
                return this.loadBlockchainData();

              case 5:
                if (!this.state.isExist) {
                  _context3.next = 10;
                  break;
                }

                next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push("/dashboard");
                this.setState({
                  loading: false
                });
                _context3.next = 12;
                break;

              case 10:
                _context3.next = 12;
                return this.state.contract.methods.registrationExt(_refererAddress).send({
                  value: this.state.cost,
                  from: this.state.account
                }).then(function (receipt) {
                  next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push("/dashboard");
                  this.setState({
                    loading: false
                  });
                });

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function register(_x) {
        return _register.apply(this, arguments);
      }

      return register;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$context = this.context,
          account = _this$context.account,
          setAccount = _this$context.setAccount;
      var isLoading = this.state.loading;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx("form", {
        onSubmit: /*#__PURE__*/function () {
          var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(event) {
            var newUser;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    event.preventDefault();
                    _context4.next = 3;
                    return _this2.register(_this2.state.refererAddress);

                  case 3:
                    newUser = _this2.state.account;
                    setAccount(newUser);

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));

          return function (_x2) {
            return _ref.apply(this, arguments);
          };
        }(),
        className: "jsx-585742509" + " " + "automatic",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 9
        }
      }, __jsx("button", {
        className: "jsx-585742509" + " " + "auto",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }
      }, !isLoading ? __jsx("b", {
        className: "jsx-585742509",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 27
        }
      }, "Authorisation") : __jsx("b", {
        className: "jsx-585742509",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 50
        }
      }, "Loading"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "585742509",
        __self: this
      }, ".auto.jsx-585742509{background:rgb(0,237,47);background:linear-gradient( 306deg, rgba(0,237,47,1) 29%, rgba(0,179,35,1) 64%, rgba(0,179,35,1) 83% );box-shadow:none;outline:none;border:none;}button.jsx-585742509{width:100%;text-align:center;padding:20px 0;border-radius:30px;color:white;font-size:1.2em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXGxvZ2luXFxBdXRvTG9naW4uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlGb0IsQUFHd0MsQUFZaEIsV0FDTyxjQVBqQixJQVFjLGVBQ0ksbUJBQ1AsWUFDSSxnQkFDbEIscUNBWGtCLGdCQUNILGFBQ0QsWUFDZCIsImZpbGUiOiJDOlxcVXNlcnNcXGNyZmFiXFxEZXNrdG9wXFxmb3JzYWdlLWJvaWxlcnBsYXRlXFxjb21wb25lbnRzXFxsb2dpblxcQXV0b0xvZ2luLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFdlYjMgZnJvbSBcIndlYjNcIjtcclxuaW1wb3J0IHsgQUJJLCBBRERSRVNTIH0gZnJvbSBcIi4uLy4uL2V0aGVyZXVtL3dlYjNcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEFjY291bnRDb250ZXh0IGZyb20gXCIuLi9BY2NvdW50Q29udGV4dFwiO1xyXG5cclxuY2xhc3MgQXV0b0xvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgY29udGV4dFR5cGUgPSBBY2NvdW50Q29udGV4dDtcclxuICBhc3luYyBsb2FkQmxvY2tjaGFpbkRhdGEoKSB7XHJcbiAgICBjb25zdCB3ZWIzID0gbmV3IFdlYjMoV2ViMy5naXZlblByb3ZpZGVyIHx8IFwiaHR0cDovL2xvY2FsaG9zdDo4NTQ1XCIpO1xyXG4gICAgLy8gY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgLy8gdGhpcy5zZXRTdGF0ZSh7IGFjY291bnQ6IGFjY291bnRzWzBdIH0pO1xyXG5cclxuICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KEFCSSwgQUREUkVTUyk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY29udHJhY3QgfSk7XHJcbiAgICBjb25zdCBpc0V4aXN0cyA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgLmlzVXNlckV4aXN0cyh0aGlzLnN0YXRlLmFjY291bnQpXHJcbiAgICAgIC5jYWxsKClcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIpO1xyXG4gICAgICB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0V4aXN0OiBpc0V4aXN0cyB9KTtcclxuICAgIGNvbnN0IGNvc3RzID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy5yZWdpc3RyYXRpb25Db3N0KCkuY2FsbCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvc3Q6IGNvc3RzIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzTG9hZGluZzogZmFsc2UgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBsb2FkV2ViMygpIHtcclxuICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcclxuICAgICAgd2luZG93LndlYjMgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pO1xyXG4gICAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0uZW5hYmxlKCk7XHJcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy53ZWIzKSB7XHJcbiAgICAgIHdpbmRvdy53ZWIzID0gbmV3IFdlYjMod2luZG93LndlYjMuY3VycmVudFByb3ZpZGVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcclxuICAgICAgICBcIk5vbi1FdGhlcmV1bSBicm93c2VyIGRldGVjdGVkLiBZb3Ugc2hvdWxkIGNvbnNpZGVyIHRyeWluZyBNZXRhTWFzayFcIlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGFjY291bnQ6IFwiXCIsXHJcbiAgICAgIGlzRXhpc3Q6IGZhbHNlLFxyXG4gICAgICBjb3N0OiBcIlwiLFxyXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgcmVmZXJlckFkZHJlc3M6IFwiMHhmMmFBMjY3MjNlZDdiMDk5ODQ1YWZFNjlGQTQ5MjlBNDZCQzAwMjQ1XCIsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgcmVnaXN0ZXIoX3JlZmVyZXJBZGRyZXNzKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KTtcclxuICAgIGF3YWl0IHRoaXMubG9hZFdlYjMoKTtcclxuICAgIGF3YWl0IHRoaXMubG9hZEJsb2NrY2hhaW5EYXRhKCk7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5pc0V4aXN0KSB7XHJcbiAgICAgIFJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXdhaXQgdGhpcy5zdGF0ZS5jb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgLnJlZ2lzdHJhdGlvbkV4dChfcmVmZXJlckFkZHJlc3MpXHJcbiAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuY29zdCxcclxuICAgICAgICAgIGZyb206IHRoaXMuc3RhdGUuYWNjb3VudCxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZWNlaXB0KSB7XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIik7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgYWNjb3VudCwgc2V0QWNjb3VudCB9ID0gdGhpcy5jb250ZXh0O1xyXG4gICAgY29uc3QgaXNMb2FkaW5nID0gdGhpcy5zdGF0ZS5sb2FkaW5nO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYXV0b21hdGljXCJcclxuICAgICAgICAgIG9uU3VibWl0PXthc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5yZWdpc3Rlcih0aGlzLnN0YXRlLnJlZmVyZXJBZGRyZXNzKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3VXNlciA9IHRoaXMuc3RhdGUuYWNjb3VudDtcclxuICAgICAgICAgICAgc2V0QWNjb3VudChuZXdVc2VyKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhdXRvXCI+XHJcbiAgICAgICAgICAgIHshaXNMb2FkaW5nID8gPGI+QXV0aG9yaXNhdGlvbjwvYj4gOiA8Yj5Mb2FkaW5nPC9iPn1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuYXV0byB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigwLCAyMzcsIDQ3KTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgIDMwNmRlZyxcclxuICAgICAgICAgICAgICByZ2JhKDAsIDIzNywgNDcsIDEpIDI5JSxcclxuICAgICAgICAgICAgICByZ2JhKDAsIDE3OSwgMzUsIDEpIDY0JSxcclxuICAgICAgICAgICAgICByZ2JhKDAsIDE3OSwgMzUsIDEpIDgzJVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dG9Mb2dpbjtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\components\\\\login\\\\AutoLogin.jsx */"));
    }
  }]);

  return AutoLogin;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(AutoLogin, "contextType", _AccountContext__WEBPACK_IMPORTED_MODULE_13__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (AutoLogin);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2dpbi9BdXRvTG9naW4uanN4Il0sIm5hbWVzIjpbIkF1dG9Mb2dpbiIsIndlYjMiLCJXZWIzIiwiZ2l2ZW5Qcm92aWRlciIsImNvbnRyYWN0IiwiZXRoIiwiQ29udHJhY3QiLCJBQkkiLCJBRERSRVNTIiwic2V0U3RhdGUiLCJtZXRob2RzIiwiaXNVc2VyRXhpc3RzIiwic3RhdGUiLCJhY2NvdW50IiwiY2FsbCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJpc0V4aXN0cyIsImlzRXhpc3QiLCJyZWdpc3RyYXRpb25Db3N0IiwiY29zdHMiLCJjb3N0IiwiaXNMb2FkaW5nIiwid2luZG93IiwiZXRoZXJldW0iLCJlbmFibGUiLCJjdXJyZW50UHJvdmlkZXIiLCJhbGVydCIsInByb3BzIiwibG9hZGluZyIsInJlZmVyZXJBZGRyZXNzIiwiX3JlZmVyZXJBZGRyZXNzIiwibG9hZFdlYjMiLCJsb2FkQmxvY2tjaGFpbkRhdGEiLCJSb3V0ZXIiLCJwdXNoIiwicmVnaXN0cmF0aW9uRXh0Iiwic2VuZCIsInZhbHVlIiwiZnJvbSIsInRoZW4iLCJyZWNlaXB0IiwiY29udGV4dCIsInNldEFjY291bnQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicmVnaXN0ZXIiLCJuZXdVc2VyIiwiQ29tcG9uZW50IiwiQWNjb3VudENvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxTOzs7Ozs7Ozs7Ozs7OztBQUdJQyxvQixHQUFPLElBQUlDLDRDQUFKLENBQVNBLDRDQUFJLENBQUNDLGFBQUwsSUFBc0IsdUJBQS9CLEMsRUFDYjtBQUNBOztBQUVNQyx3QixHQUFXLElBQUlILElBQUksQ0FBQ0ksR0FBTCxDQUFTQyxRQUFiLENBQXNCQyxtREFBdEIsRUFBMkJDLHVEQUEzQixDO0FBQ2pCLHFCQUFL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SSxDQUFDbkMsS0FBTCxDQUFXbUIsY0FBekIsQ0FGRTs7QUFBQTtBQUdGaUIsMkJBSEUsR0FHUSxNQUFJLENBQUNwQyxLQUFMLENBQVdDLE9BSG5CO0FBSVIrQiw4QkFBVSxDQUFDSSxPQUFELENBQVY7O0FBSlE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBRjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZWO0FBQUEsMkNBQ1ksV0FEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBU0U7QUFBQSwyQ0FBa0IsTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHLENBQUN6QixTQUFELEdBQWE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFiLEdBQW9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEdkMsQ0FURixDQURGO0FBQUE7QUFBQTtBQUFBLDByTEFERjtBQXVDRDs7OztFQTNHcUIwQiwrQzs7MEZBQWxCakQsUyxpQkFDaUJrRCx3RDs7QUE2R1JsRCx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi4yZTcxYzc0MjFmYjE4ODI4MjBmYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xyXG5pbXBvcnQgeyBBQkksIEFERFJFU1MgfSBmcm9tIFwiLi4vLi4vZXRoZXJldW0vd2ViM1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgQWNjb3VudENvbnRleHQgZnJvbSBcIi4uL0FjY291bnRDb250ZXh0XCI7XHJcblxyXG5jbGFzcyBBdXRvTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IEFjY291bnRDb250ZXh0O1xyXG4gIGFzeW5jIGxvYWRCbG9ja2NoYWluRGF0YSgpIHtcclxuICAgIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyhXZWIzLmdpdmVuUHJvdmlkZXIgfHwgXCJodHRwOi8vbG9jYWxob3N0Ojg1NDVcIik7XHJcbiAgICAvLyBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAvLyB0aGlzLnNldFN0YXRlKHsgYWNjb3VudDogYWNjb3VudHNbMF0gfSk7XHJcblxyXG4gICAgY29uc3QgY29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoQUJJLCBBRERSRVNTKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjb250cmFjdCB9KTtcclxuICAgIGNvbnN0IGlzRXhpc3RzID0gYXdhaXQgY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAuaXNVc2VyRXhpc3RzKHRoaXMuc3RhdGUuYWNjb3VudClcclxuICAgICAgLmNhbGwoKVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzRXhpc3Q6IGlzRXhpc3RzIH0pO1xyXG4gICAgY29uc3QgY29zdHMgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLnJlZ2lzdHJhdGlvbkNvc3QoKS5jYWxsKCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY29zdDogY29zdHMgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiBmYWxzZSB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGxvYWRXZWIzKCkge1xyXG4gICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xyXG4gICAgICB3aW5kb3cud2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSk7XHJcbiAgICAgIGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5lbmFibGUoKTtcclxuICAgIH0gZWxzZSBpZiAod2luZG93LndlYjMpIHtcclxuICAgICAgd2luZG93LndlYjMgPSBuZXcgV2ViMyh3aW5kb3cud2ViMy5jdXJyZW50UHJvdmlkZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFxyXG4gICAgICAgIFwiTm9uLUV0aGVyZXVtIGJyb3dzZXIgZGV0ZWN0ZWQuIFlvdSBzaG91bGQgY29uc2lkZXIgdHJ5aW5nIE1ldGFNYXNrIVwiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgYWNjb3VudDogXCJcIixcclxuICAgICAgaXNFeGlzdDogZmFsc2UsXHJcbiAgICAgIGNvc3Q6IFwiXCIsXHJcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICByZWZlcmVyQWRkcmVzczogXCIweGYyYUEyNjcyM2VkN2IwOTk4NDVhZkU2OUZBNDkyOUE0NkJDMDAyNDVcIixcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBhc3luYyByZWdpc3RlcihfcmVmZXJlckFkZHJlc3MpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pO1xyXG4gICAgYXdhaXQgdGhpcy5sb2FkV2ViMygpO1xyXG4gICAgYXdhaXQgdGhpcy5sb2FkQmxvY2tjaGFpbkRhdGEoKTtcclxuICAgIGlmICh0aGlzLnN0YXRlLmlzRXhpc3QpIHtcclxuICAgICAgUm91dGVyLnB1c2goXCIvZGFzaGJvYXJkXCIpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhd2FpdCB0aGlzLnN0YXRlLmNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAucmVnaXN0cmF0aW9uRXh0KF9yZWZlcmVyQWRkcmVzcylcclxuICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5jb3N0LFxyXG4gICAgICAgICAgZnJvbTogdGhpcy5zdGF0ZS5hY2NvdW50LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlY2VpcHQpIHtcclxuICAgICAgICAgIFJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBhY2NvdW50LCBzZXRBY2NvdW50IH0gPSB0aGlzLmNvbnRleHQ7XHJcbiAgICBjb25zdCBpc0xvYWRpbmcgPSB0aGlzLnN0YXRlLmxvYWRpbmc7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxmb3JtXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhdXRvbWF0aWNcIlxyXG4gICAgICAgICAgb25TdWJtaXQ9e2FzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnJlZ2lzdGVyKHRoaXMuc3RhdGUucmVmZXJlckFkZHJlc3MpO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdVc2VyID0gdGhpcy5zdGF0ZS5hY2NvdW50O1xyXG4gICAgICAgICAgICBzZXRBY2NvdW50KG5ld1VzZXIpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImF1dG9cIj5cclxuICAgICAgICAgICAgeyFpc0xvYWRpbmcgPyA8Yj5BdXRob3Jpc2F0aW9uPC9iPiA6IDxiPkxvYWRpbmc8L2I+fVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5hdXRvIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDAsIDIzNywgNDcpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgMzA2ZGVnLFxyXG4gICAgICAgICAgICAgIHJnYmEoMCwgMjM3LCA0NywgMSkgMjklLFxyXG4gICAgICAgICAgICAgIHJnYmEoMCwgMTc5LCAzNSwgMSkgNjQlLFxyXG4gICAgICAgICAgICAgIHJnYmEoMCwgMTc5LCAzNSwgMSkgODMlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0b0xvZ2luO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9