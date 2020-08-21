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
    key: "UNSAFE_componentDidMount",
    value: function () {
      var _UNSAFE_componentDidMount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _id;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return next_router__WEBPACK_IMPORTED_MODULE_9___default.a.query.id;

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

      function UNSAFE_componentDidMount() {
        return _UNSAFE_componentDidMount.apply(this, arguments);
      }

      return UNSAFE_componentDidMount;
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
      }, ".header.jsx-2670207790{width:100vw;height:100vh;overflow:hidden;background:rgba(16,1,62,1);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}@media only screen and (max-width:1000px){.header.jsx-2670207790{height:auto;}}.hero-image.jsx-2670207790{width:70vw;height:100vw;}.picture-holder.jsx-2670207790{width:100%;height:100vh;background-image:url(\"/assets/img/hero-picture.jpg\");background-repeat:no-repeat;background-size:contain;background-position:center;}.hero.jsx-2670207790{width:100%;}.form-part.jsx-2670207790{background:rgba(28,22,85,1);width:30vw;padding:60px;color:white;height:100vh;text-align:center;}p.jsx-2670207790{color:grey;}h1.jsx-2670207790{margin-top:15vh;margin-bottom:5vh;font-size:1.5em;}button.jsx-2670207790{width:100%;text-align:center;padding:20px 0;border-radius:30px;color:white;font-size:1.2em;}@media only screen and (max-width:1000px){.hero-image.jsx-2670207790{display:none;}.form-part.jsx-2670207790{width:95vw;margin:auto auto;}}.auto.jsx-2670207790{background:rgb(0,237,47);background:linear-gradient( 306deg, rgba(0,237,47,1) 29%, rgba(0,179,35,1) 64%, rgba(0,179,35,1) 83% );box-shadow:none;outline:none;border:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXHBhZ2VzXFxyZWZcXFtpZF0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0ZvQixBQUd5QixBQVFFLEFBSUgsQUFJQSxBQVFBLEFBR29CLEFBU3BCLEFBR0ssQUFLTCxBQVVJLEFBR0YsQUFLYyxXQWpEZCxBQUlBLEFBUWYsQUFZQSxBQVFvQixBQWFDLENBekROLEFBUWIsQ0E4Q0EsR0Fma0IsUUExQnBCLEFBSXVELENBaEJyQyxBQWtFZixHQXhDVSxBQStCWCxDQWJlLEtBTEMsS0FaSCxFQTFCaUIsR0E0Q1gsTUFMckIsRUFaYyxXQWtCQSxDQWpCQyxJQTNCQSxPQTZDRyxFQTlCWSxBQWFWLGNBa0JwQixJQWpCQSxVQWIwQix1QkFpRFIsQ0FoRFcsYUFoQjdCLEVBaUVlLFlBaERmLENBaURjLFlBQ2QiLCJmaWxlIjoiQzpcXFVzZXJzXFxjcmZhYlxcRGVza3RvcFxcZm9yc2FnZS1ib2lsZXJwbGF0ZVxccGFnZXNcXHJlZlxcW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFdlYjMgZnJvbSBcIndlYjNcIjtcclxuaW1wb3J0IHsgQUJJLCBBRERSRVNTLCBPV05FUiB9IGZyb20gXCIuLi8uLi91dGlscy9nbG9iYWxzXCI7XHJcbmltcG9ydCB7IGxvYWRXZWIzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3V0aWxpdHlcIjtcclxuXHJcbmNsYXNzIFJlZkxpbmsgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGFzeW5jIFVOU0FGRV9jb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGNvbnN0IF9pZCA9IGF3YWl0IFJvdXRlci5xdWVyeS5pZDtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpZDogX2lkIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgbG9hZEJsb2NrY2hhaW5EYXRhKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5pZCk7XHJcbiAgICBjb25zdCB3ZWIzID0gbmV3IFdlYjMoV2ViMy5naXZlblByb3ZpZGVyIHx8IFwiaHR0cDovL2xvY2FsaG9zdDo4NTQ1XCIpO1xyXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjY291bnQ6IGFjY291bnRzWzBdIH0pO1xyXG4gICAgY29uc3QgY29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoQUJJLCBBRERSRVNTKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjb250cmFjdCB9KTtcclxuICAgIGNvbnN0IGlzRXhpc3RzID0gYXdhaXQgY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAuaXNVc2VyRXhpc3RzKHRoaXMuc3RhdGUuYWNjb3VudClcclxuICAgICAgLmNhbGwoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0V4aXN0OiBpc0V4aXN0cyB9KTtcclxuICAgIGNvbnN0IGNvc3RzID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy5yZWdpc3RyYXRpb25Db3N0KCkuY2FsbCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvc3Q6IGNvc3RzIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzTG9hZGluZzogZmFsc2UgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgYWNjb3VudDogXCJcIixcclxuICAgICAgaXNFeGlzdDogZmFsc2UsXHJcbiAgICAgIGNvc3Q6IFwiXCIsXHJcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICByZWZBZGRyZXNzOiBcIlwiLFxyXG4gICAgICBpZDogXCJcIixcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBhc3luYyByZWdpc3RlcihyZWZBZGRyZXNzKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KTtcclxuICAgIGF3YWl0IGxvYWRXZWIzKCk7XHJcbiAgICBhd2FpdCB0aGlzLmxvYWRCbG9ja2NoYWluRGF0YSgpO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuaXNFeGlzdCkge1xyXG4gICAgICBSb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIik7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXdhaXQgdGhpcy5jb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgLnJlZ2lzdHJhdGlvbkV4dChyZWZlcmVyQWRkcmVzcylcclxuICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICB2YWx1ZTogY29zdCxcclxuICAgICAgICAgIGZyb206IGFjY291bnQsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVjZWlwdCkge1xyXG4gICAgICAgICAgUm91dGVyLnB1c2goXCIvZGFzaGJvYXJkXCIpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWltYWdlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGljdHVyZS1ob2xkZXJcIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXBhcnRcIj5cclxuICAgICAgICAgICAgPGgxPlJlZ2lzdGVyPC9oMT5cclxuICAgICAgICAgICAgPHA+WW91ciBpbnZpdGVyIGlzIElEIHt0aGlzLnN0YXRlLmlkfTwvcD5cclxuICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdXRvbWF0aWNcIlxyXG4gICAgICAgICAgICAgIG9uU3VibWl0PXthc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnJlZ2lzdGVyKHRoaXMuc3RhdGUucmVmQWRkcmVzcyk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYXV0b1wiPlJlZ2lzdGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgIDxwPlRlbGVncmFtIENoYW5uZWwgQGNyeXB0b29mZmljaWFsPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxNiwgMSwgNjIsIDEpO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaGVyby1pbWFnZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3MHZ3O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZ3O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnBpY3R1cmUtaG9sZGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2hlcm8tcGljdHVyZS5qcGdcIik7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhlcm8ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb3JtLXBhcnQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI4LCAyMiwgODUsIDEpO1xyXG4gICAgICAgICAgICB3aWR0aDogMzB2dztcclxuICAgICAgICAgICAgcGFkZGluZzogNjBweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXZoO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1dmg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gICAgICAgICAgICAuaGVyby1pbWFnZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZm9ybS1wYXJ0IHtcclxuICAgICAgICAgICAgICB3aWR0aDogOTV2dztcclxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmF1dG8ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMjM3LCA0Nyk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICAzMDZkZWcsXHJcbiAgICAgICAgICAgICAgcmdiYSgwLCAyMzcsIDQ3LCAxKSAyOSUsXHJcbiAgICAgICAgICAgICAgcmdiYSgwLCAxNzksIDM1LCAxKSA2NCUsXHJcbiAgICAgICAgICAgICAgcmdiYSgwLCAxNzksIDM1LCAxKSA4MyVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVmTGluaztcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\pages\\\\ref\\\\[id].js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVmLy5qcyJdLCJuYW1lcyI6WyJSZWZMaW5rIiwiUm91dGVyIiwicXVlcnkiLCJpZCIsIl9pZCIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsInN0YXRlIiwid2ViMyIsIldlYjMiLCJnaXZlblByb3ZpZGVyIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImFjY291bnQiLCJjb250cmFjdCIsIkNvbnRyYWN0IiwiQUJJIiwiQUREUkVTUyIsIm1ldGhvZHMiLCJpc1VzZXJFeGlzdHMiLCJjYWxsIiwiaXNFeGlzdHMiLCJpc0V4aXN0IiwicmVnaXN0cmF0aW9uQ29zdCIsImNvc3RzIiwiY29zdCIsImlzTG9hZGluZyIsInByb3BzIiwibG9hZGluZyIsInJlZkFkZHJlc3MiLCJsb2FkV2ViMyIsImxvYWRCbG9ja2NoYWluRGF0YSIsInB1c2giLCJyZWdpc3RyYXRpb25FeHQiLCJyZWZlcmVyQWRkcmVzcyIsInNlbmQiLCJ2YWx1ZSIsImZyb20iLCJ0aGVuIiwicmVjZWlwdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyZWdpc3RlciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxPOzs7Ozs7Ozs7Ozs7Ozs7O3VCQUVnQkMsa0RBQU0sQ0FBQ0MsS0FBUCxDQUFhQyxFOzs7QUFBekJDLG1CO0FBQ04scUJBQUtDLFFBQUwsQ0FBYztBQUFFRixvQkFBRSxFQUFFQztBQUFOLGlCQUFkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUFFLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLQyxLQUFMLENBQVdMLEVBQXZCO0FBQ01NLG9CLEdBQU8sSUFBSUMsNENBQUosQ0FBU0EsNENBQUksQ0FBQ0MsYUFBTCxJQUFzQix1QkFBL0IsQzs7dUJBQ1VGLElBQUksQ0FBQ0cs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QUNwQyxLQUFMLENBQVd1QixVQUF6QixDQUZFOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGVjtBQUFBLDRDQUNZLFdBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQU9FO0FBQUEsNENBQWtCLE1BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUEYsQ0FIRixFQWFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0Q0FiRixDQUpGLENBREY7QUFBQTtBQUFBO0FBQUEsMDZRQURGO0FBb0dEOzs7O0VBNUptQmMsK0M7O0FBK0pQN0Msc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVmL1tpZF0uMzdjYTlkODNkNjJlZDhkNGE1MjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFdlYjMgZnJvbSBcIndlYjNcIjtcclxuaW1wb3J0IHsgQUJJLCBBRERSRVNTLCBPV05FUiB9IGZyb20gXCIuLi8uLi91dGlscy9nbG9iYWxzXCI7XHJcbmltcG9ydCB7IGxvYWRXZWIzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3V0aWxpdHlcIjtcclxuXHJcbmNsYXNzIFJlZkxpbmsgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGFzeW5jIFVOU0FGRV9jb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGNvbnN0IF9pZCA9IGF3YWl0IFJvdXRlci5xdWVyeS5pZDtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpZDogX2lkIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgbG9hZEJsb2NrY2hhaW5EYXRhKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5pZCk7XHJcbiAgICBjb25zdCB3ZWIzID0gbmV3IFdlYjMoV2ViMy5naXZlblByb3ZpZGVyIHx8IFwiaHR0cDovL2xvY2FsaG9zdDo4NTQ1XCIpO1xyXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjY291bnQ6IGFjY291bnRzWzBdIH0pO1xyXG4gICAgY29uc3QgY29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoQUJJLCBBRERSRVNTKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjb250cmFjdCB9KTtcclxuICAgIGNvbnN0IGlzRXhpc3RzID0gYXdhaXQgY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAuaXNVc2VyRXhpc3RzKHRoaXMuc3RhdGUuYWNjb3VudClcclxuICAgICAgLmNhbGwoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0V4aXN0OiBpc0V4aXN0cyB9KTtcclxuICAgIGNvbnN0IGNvc3RzID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy5yZWdpc3RyYXRpb25Db3N0KCkuY2FsbCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvc3Q6IGNvc3RzIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzTG9hZGluZzogZmFsc2UgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgYWNjb3VudDogXCJcIixcclxuICAgICAgaXNFeGlzdDogZmFsc2UsXHJcbiAgICAgIGNvc3Q6IFwiXCIsXHJcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICByZWZBZGRyZXNzOiBcIlwiLFxyXG4gICAgICBpZDogXCJcIixcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBhc3luYyByZWdpc3RlcihyZWZBZGRyZXNzKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KTtcclxuICAgIGF3YWl0IGxvYWRXZWIzKCk7XHJcbiAgICBhd2FpdCB0aGlzLmxvYWRCbG9ja2NoYWluRGF0YSgpO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuaXNFeGlzdCkge1xyXG4gICAgICBSb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIik7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXdhaXQgdGhpcy5jb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgLnJlZ2lzdHJhdGlvbkV4dChyZWZlcmVyQWRkcmVzcylcclxuICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICB2YWx1ZTogY29zdCxcclxuICAgICAgICAgIGZyb206IGFjY291bnQsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVjZWlwdCkge1xyXG4gICAgICAgICAgUm91dGVyLnB1c2goXCIvZGFzaGJvYXJkXCIpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWltYWdlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGljdHVyZS1ob2xkZXJcIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXBhcnRcIj5cclxuICAgICAgICAgICAgPGgxPlJlZ2lzdGVyPC9oMT5cclxuICAgICAgICAgICAgPHA+WW91ciBpbnZpdGVyIGlzIElEIHt0aGlzLnN0YXRlLmlkfTwvcD5cclxuICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdXRvbWF0aWNcIlxyXG4gICAgICAgICAgICAgIG9uU3VibWl0PXthc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnJlZ2lzdGVyKHRoaXMuc3RhdGUucmVmQWRkcmVzcyk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYXV0b1wiPlJlZ2lzdGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgIDxwPlRlbGVncmFtIENoYW5uZWwgQGNyeXB0b29mZmljaWFsPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxNiwgMSwgNjIsIDEpO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaGVyby1pbWFnZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3MHZ3O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZ3O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnBpY3R1cmUtaG9sZGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2hlcm8tcGljdHVyZS5qcGdcIik7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhlcm8ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb3JtLXBhcnQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI4LCAyMiwgODUsIDEpO1xyXG4gICAgICAgICAgICB3aWR0aDogMzB2dztcclxuICAgICAgICAgICAgcGFkZGluZzogNjBweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXZoO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1dmg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gICAgICAgICAgICAuaGVyby1pbWFnZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZm9ybS1wYXJ0IHtcclxuICAgICAgICAgICAgICB3aWR0aDogOTV2dztcclxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmF1dG8ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMjM3LCA0Nyk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICAzMDZkZWcsXHJcbiAgICAgICAgICAgICAgcmdiYSgwLCAyMzcsIDQ3LCAxKSAyOSUsXHJcbiAgICAgICAgICAgICAgcmdiYSgwLCAxNzksIDM1LCAxKSA2NCUsXHJcbiAgICAgICAgICAgICAgcmdiYSgwLCAxNzksIDM1LCAxKSA4MyVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVmTGluaztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==