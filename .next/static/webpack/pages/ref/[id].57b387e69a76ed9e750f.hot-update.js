webpackHotUpdate_N_E("pages/ref/[id]",{

/***/ "./pages/ref/[id].js":
/*!***************************!*\
  !*** ./pages/ref/[id].js ***!
  \***************************/
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_globals__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/globals */ "./utils/globals.js");
/* harmony import */ var _utils_utility__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/utility */ "./utils/utility.js");







var _jsxFileName = "C:\\Users\\crfab\\Desktop\\forsage-boilerplate\\pages\\ref\\[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var RefLink = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RefLink, _Component);

  var _super = _createSuper(RefLink);

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(RefLink, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _id;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return router.query.id;

              case 2:
                _id = _context.sent;
                this.setState({
                  id: _id
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "loadBlockchainData",
    value: function () {
      var _loadBlockchainData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var web3, accounts, contract, isExists, costs;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log(this.state.id);
                web3 = new web3__WEBPACK_IMPORTED_MODULE_10___default.a(web3__WEBPACK_IMPORTED_MODULE_10___default.a.givenProvider || "http://localhost:8545");
                _context2.next = 4;
                return web3.eth.getAccounts();

              case 4:
                accounts = _context2.sent;
                this.setState({
                  account: accounts[0]
                });
                contract = new web3.eth.Contract(_utils_globals__WEBPACK_IMPORTED_MODULE_11__["ABI"], _utils_globals__WEBPACK_IMPORTED_MODULE_11__["ADDRESS"]);
                this.setState({
                  contract: contract
                });
                _context2.next = 10;
                return contract.methods.isUserExists(this.state.account).call();

              case 10:
                isExists = _context2.sent;
                this.setState({
                  isExist: isExists
                });
                _context2.next = 14;
                return contract.methods.registrationCost().call();

              case 14:
                costs = _context2.sent;
                this.setState({
                  cost: costs
                });
                this.setState({
                  isLoading: false
                });

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function loadBlockchainData() {
        return _loadBlockchainData.apply(this, arguments);
      }

      return loadBlockchainData;
    }()
  }]);

  function RefLink(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, RefLink);

    _this = _super.call(this, props);
    _this.state = {
      account: "",
      isExist: false,
      cost: "",
      loading: false,
      refAddress: "",
      id: ""
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(RefLink, [{
    key: "register",
    value: function () {
      var _register = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(refAddress) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.setState({
                  loading: true
                });
                _context3.next = 3;
                return Object(_utils_utility__WEBPACK_IMPORTED_MODULE_12__["loadWeb3"])();

              case 3:
                _context3.next = 5;
                return this.loadBlockchainData();

              case 5:
                if (!this.state.isExist) {
                  _context3.next = 10;
                  break;
                }

                next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push("/dashboard");
                this.setState({
                  loading: true
                });
                _context3.next = 12;
                break;

              case 10:
                _context3.next = 12;
                return this.contract.methods.registrationExt(refererAddress).send({
                  value: cost,
                  from: account
                }).then(function (receipt) {
                  next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push("/dashboard");
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

      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("div", {
        className: "jsx-2670207790" + " " + "header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "jsx-2670207790" + " " + "hero-image",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "jsx-2670207790" + " " + "picture-holder",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 13
        }
      })), __jsx("div", {
        className: "jsx-2670207790" + " " + "form-part",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }
      }, __jsx("h1", {
        className: "jsx-2670207790",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }
      }, "Register"), __jsx("p", {
        className: "jsx-2670207790",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 13
        }
      }, "Your inviter is ID ", this.state.id), __jsx("form", {
        onSubmit: /*#__PURE__*/function () {
          var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(event) {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    event.preventDefault();
                    _context4.next = 3;
                    return _this2.register(_this2.state.refAddress);

                  case 3:
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
        className: "jsx-2670207790" + " " + "automatic",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 13
        }
      }, __jsx("button", {
        className: "jsx-2670207790" + " " + "auto",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 15
        }
      }, "Register")), __jsx("p", {
        className: "jsx-2670207790",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 13
        }
      }, "Telegram Channel @cryptoofficial"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2670207790",
        __self: this
      }, ".header.jsx-2670207790{width:100vw;height:100vh;overflow:hidden;background:rgba(16,1,62,1);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}@media only screen and (max-width:1000px){.header.jsx-2670207790{height:auto;}}.hero-image.jsx-2670207790{width:70vw;height:100vw;}.picture-holder.jsx-2670207790{width:100%;height:100vh;background-image:url(\"/assets/img/hero-picture.jpg\");background-repeat:no-repeat;background-size:contain;background-position:center;}.hero.jsx-2670207790{width:100%;}.form-part.jsx-2670207790{background:rgba(28,22,85,1);width:30vw;padding:60px;color:white;height:100vh;text-align:center;}p.jsx-2670207790{color:grey;}h1.jsx-2670207790{margin-top:15vh;margin-bottom:5vh;font-size:1.5em;}button.jsx-2670207790{width:100%;text-align:center;padding:20px 0;border-radius:30px;color:white;font-size:1.2em;}@media only screen and (max-width:1000px){.hero-image.jsx-2670207790{display:none;}.form-part.jsx-2670207790{width:95vw;margin:auto auto;}}.auto.jsx-2670207790{background:rgb(0,237,47);background:linear-gradient( 306deg, rgba(0,237,47,1) 29%, rgba(0,179,35,1) 64%, rgba(0,179,35,1) 83% );box-shadow:none;outline:none;border:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXHBhZ2VzXFxyZWZcXFtpZF0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0ZvQixBQUd5QixBQVFFLEFBSUgsQUFJQSxBQVFBLEFBR29CLEFBU3BCLEFBR0ssQUFLTCxBQVVJLEFBR0YsQUFLYyxXQWpEZCxBQUlBLEFBUWYsQUFZQSxBQVFvQixBQWFDLENBekROLEFBUWIsQ0E4Q0EsR0Fma0IsUUExQnBCLEFBSXVELENBaEJyQyxBQWtFZixHQXhDVSxBQStCWCxDQWJlLEtBTEMsS0FaSCxFQTFCaUIsR0E0Q1gsTUFMckIsRUFaYyxXQWtCQSxDQWpCQyxJQTNCQSxPQTZDRyxFQTlCWSxBQWFWLGNBa0JwQixJQWpCQSxVQWIwQix1QkFpRFIsQ0FoRFcsYUFoQjdCLEVBaUVlLFlBaERmLENBaURjLFlBQ2QiLCJmaWxlIjoiQzpcXFVzZXJzXFxjcmZhYlxcRGVza3RvcFxcZm9yc2FnZS1ib2lsZXJwbGF0ZVxccGFnZXNcXHJlZlxcW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFdlYjMgZnJvbSBcIndlYjNcIjtcclxuaW1wb3J0IHsgQUJJLCBBRERSRVNTLCBPV05FUiB9IGZyb20gXCIuLi8uLi91dGlscy9nbG9iYWxzXCI7XHJcbmltcG9ydCB7IGxvYWRXZWIzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3V0aWxpdHlcIjtcclxuXHJcbmNsYXNzIFJlZkxpbmsgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc3QgX2lkID0gYXdhaXQgcm91dGVyLnF1ZXJ5LmlkO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlkOiBfaWQgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBsb2FkQmxvY2tjaGFpbkRhdGEoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmlkKTtcclxuICAgIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyhXZWIzLmdpdmVuUHJvdmlkZXIgfHwgXCJodHRwOi8vbG9jYWxob3N0Ojg1NDVcIik7XHJcbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgYWNjb3VudDogYWNjb3VudHNbMF0gfSk7XHJcbiAgICBjb25zdCBjb250cmFjdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChBQkksIEFERFJFU1MpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRyYWN0IH0pO1xyXG4gICAgY29uc3QgaXNFeGlzdHMgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzXHJcbiAgICAgIC5pc1VzZXJFeGlzdHModGhpcy5zdGF0ZS5hY2NvdW50KVxyXG4gICAgICAuY2FsbCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzRXhpc3Q6IGlzRXhpc3RzIH0pO1xyXG4gICAgY29uc3QgY29zdHMgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLnJlZ2lzdHJhdGlvbkNvc3QoKS5jYWxsKCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY29zdDogY29zdHMgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNMb2FkaW5nOiBmYWxzZSB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBhY2NvdW50OiBcIlwiLFxyXG4gICAgICBpc0V4aXN0OiBmYWxzZSxcclxuICAgICAgY29zdDogXCJcIixcclxuICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIHJlZkFkZHJlc3M6IFwiXCIsXHJcbiAgICAgIGlkOiBcIlwiLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHJlZ2lzdGVyKHJlZkFkZHJlc3MpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pO1xyXG4gICAgYXdhaXQgbG9hZFdlYjMoKTtcclxuICAgIGF3YWl0IHRoaXMubG9hZEJsb2NrY2hhaW5EYXRhKCk7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5pc0V4aXN0KSB7XHJcbiAgICAgIFJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhd2FpdCB0aGlzLmNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAucmVnaXN0cmF0aW9uRXh0KHJlZmVyZXJBZGRyZXNzKVxyXG4gICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgIHZhbHVlOiBjb3N0LFxyXG4gICAgICAgICAgZnJvbTogYWNjb3VudCxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZWNlaXB0KSB7XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIik7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8taW1hZ2VcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaWN0dXJlLWhvbGRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tcGFydFwiPlxyXG4gICAgICAgICAgICA8aDE+UmVnaXN0ZXI8L2gxPlxyXG4gICAgICAgICAgICA8cD5Zb3VyIGludml0ZXIgaXMgSUQge3RoaXMuc3RhdGUuaWR9PC9wPlxyXG4gICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImF1dG9tYXRpY1wiXHJcbiAgICAgICAgICAgICAgb25TdWJtaXQ9e2FzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucmVnaXN0ZXIodGhpcy5zdGF0ZS5yZWZBZGRyZXNzKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhdXRvXCI+UmVnaXN0ZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgPHA+VGVsZWdyYW0gQ2hhbm5lbCBAY3J5cHRvb2ZmaWNpYWw8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2LCAxLCA2MiwgMSk7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gICAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5oZXJvLWltYWdlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDcwdnc7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdnc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucGljdHVyZS1ob2xkZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvaGVyby1waWN0dXJlLmpwZ1wiKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaGVybyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvcm0tcGFydCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjgsIDIyLCA4NSwgMSk7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHZ3O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA2MHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1dmg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDV2aDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAgICAgICAgIC5oZXJvLWltYWdlIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mb3JtLXBhcnQge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA5NXZ3O1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogYXV0byBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYXV0byB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigwLCAyMzcsIDQ3KTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgIDMwNmRlZyxcclxuICAgICAgICAgICAgICByZ2JhKDAsIDIzNywgNDcsIDEpIDI5JSxcclxuICAgICAgICAgICAgICByZ2JhKDAsIDE3OSwgMzUsIDEpIDY0JSxcclxuICAgICAgICAgICAgICByZ2JhKDAsIDE3OSwgMzUsIDEpIDgzJVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWZMaW5rO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\pages\\\\ref\\\\[id].js */"));
    }
  }]);

  return RefLink;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RefLink);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVmLy5qcyJdLCJuYW1lcyI6WyJSZWZMaW5rIiwicm91dGVyIiwicXVlcnkiLCJpZCIsIl9pZCIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsInN0YXRlIiwid2ViMyIsIldlYjMiLCJnaXZlblByb3ZpZGVyIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImFjY291bnQiLCJjb250cmFjdCIsIkNvbnRyYWN0IiwiQUJJIiwiQUREUkVTUyIsIm1ldGhvZHMiLCJpc1VzZXJFeGlzdHMiLCJjYWxsIiwiaXNFeGlzdHMiLCJpc0V4aXN0IiwicmVnaXN0cmF0aW9uQ29zdCIsImNvc3RzIiwiY29zdCIsImlzTG9hZGluZyIsInByb3BzIiwibG9hZGluZyIsInJlZkFkZHJlc3MiLCJsb2FkV2ViMyIsImxvYWRCbG9ja2NoYWluRGF0YSIsIlJvdXRlciIsInB1c2giLCJyZWdpc3RyYXRpb25FeHQiLCJyZWZlcmVyQWRkcmVzcyIsInNlbmQiLCJ2YWx1ZSIsImZyb20iLCJ0aGVuIiwicmVjZWlwdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyZWdpc3RlciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxPOzs7Ozs7Ozs7Ozs7Ozs7O3VCQUVnQkMsTUFBTSxDQUFDQyxLQUFQLENBQWFDLEU7OztBQUF6QkMsbUI7QUFDTixxQkFBS0MsUUFBTCxDQUFjO0FBQUVGLG9CQUFFLEVBQUVDO0FBQU4saUJBQWQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQUUsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtDLEtBQUwsQ0FBV0wsRUFBdkI7QUFDTU0sb0IsR0FBTyxJQUFJQyw0Q0FBSixDQUFTQSw0Q0FBSSxDQUFDQyxhQUFMLElBQXNCLHVCQUEvQixDOzt1QkFDVUYsSUFBSSxDQUFDRyxHQUFMLENBQVNDLFdBQVQsRTs7O0FBQWpCQyx3QjtBQUNOLHFCQUFLVCxRQUFMLENBQWM7QUFBRVUseUJBQU8sRUFBRUQsUUFBUSxDQUFDLENBQUQ7QUFBbkIsaUJBQWQ7QUFDTUUsd0IsR0FBVyxJQUFJUCxJQUFJLENBQUNHLEdBQUwsQ0FBU0ssUUFBYixDQUFzQkMsbURBQXRCLEVBQTJCQyx1REFBM0IsQztBQUNqQixxQkFBS2QsUUFBTCxDQUFjO0FBQUVXLDBCQUFRLEVBQVJBO0FBQUYsaUJBQWQ7O3VCQUN1QkEsUUFBUSxDQUFDSSxPQUFULENBQ3BCQyxZQURvQixDQUNQLEtBQUtiLEtBQUwsQ0FBV08sT0FESixFQUVwQk8sSUFGb0IsRTs7O0FBQWpCQyx3QjtBQUdOLHFCQUFLbEIsUUFBTCxDQUFjO0FBQUVtQix5QkFBTyxFQUFFRDtBQUFYLGlCQUFkOzt1QkFDb0JQLFFBQVEsQ0FBQ0ksT0FBVCxDQUFpQkssZ0JBQWpCLEdBQW9DSCxJQUFwQyxFOzs7QUFBZEkscUI7QUFDTixxQkFBS3JCLFFBQUwsQ0FBYztBQUFFc0Isc0JBQUksRUFBRUQ7QUFBUixpQkFBZDtBQUNBLHFCQUFLckIsUUFBTCxDQUFjO0FBQUV1QiwyQkFBUyxFQUFFO0FBQWIsaUJBQWQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdGLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS3JCLEtBQUwsR0FBYTtBQUNYTyxhQUFPLEVBQUUsRUFERTtBQUVYUyxhQUFPLEVBQUUsS0FGRTtBQUdYRyxVQUFJLEVBQUUsRUFISztBQUlYRyxhQUFPLEVBQUUsS0FKRTtBQUtYQyxnQkFBVSxFQUFFLEVBTEQ7QUFNWDVCLFFBQUUsRUFBRTtBQU5PLEtBQWI7QUFGaUI7QUFVbEI7Ozs7O3lOQUVjNEIsVTs7Ozs7QUFDYixxQkFBSzFCLFFBQUwsQ0FBYztBQUFFeUIseUJBQU8sRUFBRTtBQUFYLGlCQUFkOzt1QkFDTUUsZ0VBQVEsRTs7Ozt1QkFDUixLQUFLQyxrQkFBTCxFOzs7cUJBQ0YsS0FBS3pCLEtBQUwsQ0FBV2dCLE87Ozs7O0FBQ2JVLGtFQUFNLENBQUNDLElBQVAsQ0FBWSxZQUFaO0FBQ0EscUJBQUs5QixRQUFMLENBQWM7QUFBRXlCLHlCQUFPLEVBQUU7QUFBWCxpQkFBZDs7Ozs7O3VCQUVNLEtBQUtkLFFBQUwsQ0FBY0ksT0FBZCxDQUNIZ0IsZUFERyxDQUNhQyxjQURiLEVBRUhDLElBRkcsQ0FFRTtBQUNKQyx1QkFBSyxFQUFFWixJQURIO0FBRUphLHNCQUFJLEVBQUV6QjtBQUZGLGlCQUZGLEVBTUgwQixJQU5HLENBTUUsVUFBVUMsT0FBVixFQUFtQjtBQUN2QlIsb0VBQU0sQ0FBQ0MsSUFBUCxDQUFZLFlBQVo7QUFDQSx1QkFBSzlCLFFBQUwsQ0FBYztBQUFFeUIsMkJBQU8sRUFBRTtBQUFYLG1CQUFkO0FBQ0QsaUJBVEcsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQWFEO0FBQUE7O0FBQ1AsYUFDRSxtRUFDRTtBQUFBLDRDQUFlLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUEsNENBQWUsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQSw0Q0FBZSxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsQ0FERixFQUlFO0FBQUEsNENBQWUsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUF1QixLQUFLdEIsS0FBTCxDQUFXTCxFQUFsQyxDQUZGLEVBR0U7QUFFRSxnQkFBUTtBQUFBLHNNQUFFLGtCQUFPd0MsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1JBLHlCQUFLLENBQUNDLGNBQU47QUFEUTtBQUFBLDJCQUVGLE1BQUksQ0FBQ0MsUUFBTCxDQUFjLE1BQUksQ0FBQ3JDLEtBQUwsQ0FBV3VCLFVBQXpCLENBRkU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBRjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZWO0FBQUEsNENBQ1ksV0FEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBT0U7QUFBQSw0Q0FBa0IsTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFQRixDQUhGLEVBYUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRDQWJGLENBSkYsQ0FERjtBQUFBO0FBQUE7QUFBQSxrNlFBREY7QUFvR0Q7Ozs7RUE1Sm1CZSwrQzs7QUErSlA5QyxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWYvW2lkXS41N2IzODdlNjlhNzZlZDllNzUwZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xyXG5pbXBvcnQgeyBBQkksIEFERFJFU1MsIE9XTkVSIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2dsb2JhbHNcIjtcclxuaW1wb3J0IHsgbG9hZFdlYjMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvdXRpbGl0eVwiO1xyXG5cclxuY2xhc3MgUmVmTGluayBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCBfaWQgPSBhd2FpdCByb3V0ZXIucXVlcnkuaWQ7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaWQ6IF9pZCB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGxvYWRCbG9ja2NoYWluRGF0YSgpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuaWQpO1xyXG4gICAgY29uc3Qgd2ViMyA9IG5ldyBXZWIzKFdlYjMuZ2l2ZW5Qcm92aWRlciB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6ODU0NVwiKTtcclxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBhY2NvdW50OiBhY2NvdW50c1swXSB9KTtcclxuICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KEFCSSwgQUREUkVTUyk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY29udHJhY3QgfSk7XHJcbiAgICBjb25zdCBpc0V4aXN0cyA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgLmlzVXNlckV4aXN0cyh0aGlzLnN0YXRlLmFjY291bnQpXHJcbiAgICAgIC5jYWxsKCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNFeGlzdDogaXNFeGlzdHMgfSk7XHJcbiAgICBjb25zdCBjb3N0cyA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMucmVnaXN0cmF0aW9uQ29zdCgpLmNhbGwoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjb3N0OiBjb3N0cyB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0xvYWRpbmc6IGZhbHNlIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGFjY291bnQ6IFwiXCIsXHJcbiAgICAgIGlzRXhpc3Q6IGZhbHNlLFxyXG4gICAgICBjb3N0OiBcIlwiLFxyXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgcmVmQWRkcmVzczogXCJcIixcclxuICAgICAgaWQ6IFwiXCIsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgcmVnaXN0ZXIocmVmQWRkcmVzcykge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSk7XHJcbiAgICBhd2FpdCBsb2FkV2ViMygpO1xyXG4gICAgYXdhaXQgdGhpcy5sb2FkQmxvY2tjaGFpbkRhdGEoKTtcclxuICAgIGlmICh0aGlzLnN0YXRlLmlzRXhpc3QpIHtcclxuICAgICAgUm91dGVyLnB1c2goXCIvZGFzaGJvYXJkXCIpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGF3YWl0IHRoaXMuY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgIC5yZWdpc3RyYXRpb25FeHQocmVmZXJlckFkZHJlc3MpXHJcbiAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgdmFsdWU6IGNvc3QsXHJcbiAgICAgICAgICBmcm9tOiBhY2NvdW50LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlY2VpcHQpIHtcclxuICAgICAgICAgIFJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1pbWFnZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpY3R1cmUtaG9sZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1wYXJ0XCI+XHJcbiAgICAgICAgICAgIDxoMT5SZWdpc3RlcjwvaDE+XHJcbiAgICAgICAgICAgIDxwPllvdXIgaW52aXRlciBpcyBJRCB7dGhpcy5zdGF0ZS5pZH08L3A+XHJcbiAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXV0b21hdGljXCJcclxuICAgICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5yZWdpc3Rlcih0aGlzLnN0YXRlLnJlZkFkZHJlc3MpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImF1dG9cIj5SZWdpc3RlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICA8cD5UZWxlZ3JhbSBDaGFubmVsIEBjcnlwdG9vZmZpY2lhbDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTYsIDEsIDYyLCAxKTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhlcm8taW1hZ2Uge1xyXG4gICAgICAgICAgICB3aWR0aDogNzB2dztcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2dztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5waWN0dXJlLWhvbGRlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9oZXJvLXBpY3R1cmUuanBnXCIpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5oZXJvIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9ybS1wYXJ0IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyOCwgMjIsIDg1LCAxKTtcclxuICAgICAgICAgICAgd2lkdGg6IDMwdnc7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDYwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTV2aDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXZoO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgICAgICAgICAgLmhlcm8taW1hZ2Uge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZvcm0tcGFydCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDk1dnc7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hdXRvIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDAsIDIzNywgNDcpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgMzA2ZGVnLFxyXG4gICAgICAgICAgICAgIHJnYmEoMCwgMjM3LCA0NywgMSkgMjklLFxyXG4gICAgICAgICAgICAgIHJnYmEoMCwgMTc5LCAzNSwgMSkgNjQlLFxyXG4gICAgICAgICAgICAgIHJnYmEoMCwgMTc5LCAzNSwgMSkgODMlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZkxpbms7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=