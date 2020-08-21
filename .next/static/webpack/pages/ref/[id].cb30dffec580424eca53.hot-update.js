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
    value: function componentDidMount() {
      var _id = next_router__WEBPACK_IMPORTED_MODULE_9___default.a.query.id;
      this.setState({
        id: _id
      });
    }
  }, {
    key: "loadBlockchainData",
    value: function () {
      var _loadBlockchainData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var web3, accounts, contract, isExists, costs, _refAddress;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                web3 = new web3__WEBPACK_IMPORTED_MODULE_10___default.a(web3__WEBPACK_IMPORTED_MODULE_10___default.a.givenProvider || "http://localhost:8545");
                _context.next = 3;
                return web3.eth.getAccounts();

              case 3:
                accounts = _context.sent;
                this.setState({
                  account: accounts[0]
                });
                contract = new web3.eth.Contract(_utils_globals__WEBPACK_IMPORTED_MODULE_11__["ABI"], _utils_globals__WEBPACK_IMPORTED_MODULE_11__["ADDRESS"]);
                this.setState({
                  contract: contract
                });
                _context.next = 9;
                return contract.methods.isUserExists(this.state.account).call();

              case 9:
                isExists = _context.sent;
                this.setState({
                  isExist: isExists
                });
                _context.next = 13;
                return contract.methods.registrationCost().call();

              case 13:
                costs = _context.sent;
                this.setState({
                  cost: costs
                });
                _context.next = 17;
                return contract.methods.idToAddress(this.state.id);

              case 17:
                _refAddress = _context.sent;
                this.setState({
                  refAddress: _refAddress
                });
                console.log(this.state.refAddress);
                this.setState({
                  isLoading: false
                });

              case 21:
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
      var _register = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(refAddress) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.setState({
                  loading: true
                });
                _context2.next = 3;
                return Object(_utils_utility__WEBPACK_IMPORTED_MODULE_12__["loadWeb3"])();

              case 3:
                _context2.next = 5;
                return this.loadBlockchainData();

              case 5:
                if (!this.state.isExist) {
                  _context2.next = 10;
                  break;
                }

                next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push("/dashboard");
                this.setState({
                  loading: true
                });
                _context2.next = 12;
                break;

              case 10:
                _context2.next = 12;
                return this.contract.methods.registrationExt(refAddress).send({
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
                return _context2.stop();
            }
          }
        }, _callee2, this);
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
          lineNumber: 67,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "jsx-2670207790" + " " + "hero-image",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "jsx-2670207790" + " " + "picture-holder",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 13
        }
      })), __jsx("div", {
        className: "jsx-2670207790" + " " + "form-part",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }
      }, __jsx("h1", {
        className: "jsx-2670207790",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 13
        }
      }, "Register"), __jsx("p", {
        className: "jsx-2670207790",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 13
        }
      }, "Your inviter is ID ", this.state.id), __jsx("form", {
        onSubmit: /*#__PURE__*/function () {
          var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(event) {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    event.preventDefault();
                    _context3.next = 3;
                    return _this2.register(_this2.state.refAddress);

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));

          return function (_x2) {
            return _ref.apply(this, arguments);
          };
        }(),
        className: "jsx-2670207790" + " " + "automatic",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 13
        }
      }, __jsx("button", {
        className: "jsx-2670207790" + " " + "auto",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 15
        }
      }, "Register")), __jsx("p", {
        className: "jsx-2670207790",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 13
        }
      }, "Telegram Channel @cryptoofficial"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2670207790",
        __self: this
      }, ".header.jsx-2670207790{width:100vw;height:100vh;overflow:hidden;background:rgba(16,1,62,1);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}@media only screen and (max-width:1000px){.header.jsx-2670207790{height:auto;}}.hero-image.jsx-2670207790{width:70vw;height:100vw;}.picture-holder.jsx-2670207790{width:100%;height:100vh;background-image:url(\"/assets/img/hero-picture.jpg\");background-repeat:no-repeat;background-size:contain;background-position:center;}.hero.jsx-2670207790{width:100%;}.form-part.jsx-2670207790{background:rgba(28,22,85,1);width:30vw;padding:60px;color:white;height:100vh;text-align:center;}p.jsx-2670207790{color:grey;}h1.jsx-2670207790{margin-top:15vh;margin-bottom:5vh;font-size:1.5em;}button.jsx-2670207790{width:100%;text-align:center;padding:20px 0;border-radius:30px;color:white;font-size:1.2em;}@media only screen and (max-width:1000px){.hero-image.jsx-2670207790{display:none;}.form-part.jsx-2670207790{width:95vw;margin:auto auto;}}.auto.jsx-2670207790{background:rgb(0,237,47);background:linear-gradient( 306deg, rgba(0,237,47,1) 29%, rgba(0,179,35,1) 64%, rgba(0,179,35,1) 83% );box-shadow:none;outline:none;border:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXHBhZ2VzXFxyZWZcXFtpZF0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0ZvQixBQUd5QixBQVFFLEFBSUgsQUFJQSxBQVFBLEFBR29CLEFBU3BCLEFBR0ssQUFLTCxBQVVJLEFBR0YsQUFLYyxXQWpEZCxBQUlBLEFBUWYsQUFZQSxBQVFvQixBQWFDLENBekROLEFBUWIsQ0E4Q0EsR0Fma0IsUUExQnBCLEFBSXVELENBaEJyQyxBQWtFZixHQXhDVSxBQStCWCxDQWJlLEtBTEMsS0FaSCxFQTFCaUIsR0E0Q1gsTUFMckIsRUFaYyxXQWtCQSxDQWpCQyxJQTNCQSxPQTZDRyxFQTlCWSxBQWFWLGNBa0JwQixJQWpCQSxVQWIwQix1QkFpRFIsQ0FoRFcsYUFoQjdCLEVBaUVlLFlBaERmLENBaURjLFlBQ2QiLCJmaWxlIjoiQzpcXFVzZXJzXFxjcmZhYlxcRGVza3RvcFxcZm9yc2FnZS1ib2lsZXJwbGF0ZVxccGFnZXNcXHJlZlxcW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFdlYjMgZnJvbSBcIndlYjNcIjtcclxuaW1wb3J0IHsgQUJJLCBBRERSRVNTLCBPV05FUiB9IGZyb20gXCIuLi8uLi91dGlscy9nbG9iYWxzXCI7XHJcbmltcG9ydCB7IGxvYWRXZWIzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3V0aWxpdHlcIjtcclxuXHJcbmNsYXNzIFJlZkxpbmsgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc3QgX2lkID0gUm91dGVyLnF1ZXJ5LmlkO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlkOiBfaWQgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBsb2FkQmxvY2tjaGFpbkRhdGEoKSB7XHJcbiAgICBjb25zdCB3ZWIzID0gbmV3IFdlYjMoV2ViMy5naXZlblByb3ZpZGVyIHx8IFwiaHR0cDovL2xvY2FsaG9zdDo4NTQ1XCIpO1xyXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjY291bnQ6IGFjY291bnRzWzBdIH0pO1xyXG4gICAgY29uc3QgY29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoQUJJLCBBRERSRVNTKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjb250cmFjdCB9KTtcclxuICAgIGNvbnN0IGlzRXhpc3RzID0gYXdhaXQgY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAuaXNVc2VyRXhpc3RzKHRoaXMuc3RhdGUuYWNjb3VudClcclxuICAgICAgLmNhbGwoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0V4aXN0OiBpc0V4aXN0cyB9KTtcclxuICAgIGNvbnN0IGNvc3RzID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy5yZWdpc3RyYXRpb25Db3N0KCkuY2FsbCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvc3Q6IGNvc3RzIH0pO1xyXG4gICAgY29uc3QgX3JlZkFkZHJlc3MgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLmlkVG9BZGRyZXNzKHRoaXMuc3RhdGUuaWQpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHJlZkFkZHJlc3M6IF9yZWZBZGRyZXNzIH0pO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5yZWZBZGRyZXNzKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0xvYWRpbmc6IGZhbHNlIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGFjY291bnQ6IFwiXCIsXHJcbiAgICAgIGlzRXhpc3Q6IGZhbHNlLFxyXG4gICAgICBjb3N0OiBcIlwiLFxyXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgcmVmQWRkcmVzczogXCJcIixcclxuICAgICAgaWQ6IFwiXCIsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgcmVnaXN0ZXIocmVmQWRkcmVzcykge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSk7XHJcbiAgICBhd2FpdCBsb2FkV2ViMygpO1xyXG4gICAgYXdhaXQgdGhpcy5sb2FkQmxvY2tjaGFpbkRhdGEoKTtcclxuICAgIGlmICh0aGlzLnN0YXRlLmlzRXhpc3QpIHtcclxuICAgICAgUm91dGVyLnB1c2goXCIvZGFzaGJvYXJkXCIpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGF3YWl0IHRoaXMuY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgIC5yZWdpc3RyYXRpb25FeHQocmVmQWRkcmVzcylcclxuICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICB2YWx1ZTogY29zdCxcclxuICAgICAgICAgIGZyb206IGFjY291bnQsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVjZWlwdCkge1xyXG4gICAgICAgICAgUm91dGVyLnB1c2goXCIvZGFzaGJvYXJkXCIpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWltYWdlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGljdHVyZS1ob2xkZXJcIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXBhcnRcIj5cclxuICAgICAgICAgICAgPGgxPlJlZ2lzdGVyPC9oMT5cclxuICAgICAgICAgICAgPHA+WW91ciBpbnZpdGVyIGlzIElEIHt0aGlzLnN0YXRlLmlkfTwvcD5cclxuICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdXRvbWF0aWNcIlxyXG4gICAgICAgICAgICAgIG9uU3VibWl0PXthc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnJlZ2lzdGVyKHRoaXMuc3RhdGUucmVmQWRkcmVzcyk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYXV0b1wiPlJlZ2lzdGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgIDxwPlRlbGVncmFtIENoYW5uZWwgQGNyeXB0b29mZmljaWFsPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxNiwgMSwgNjIsIDEpO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaGVyby1pbWFnZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3MHZ3O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZ3O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnBpY3R1cmUtaG9sZGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2hlcm8tcGljdHVyZS5qcGdcIik7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhlcm8ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb3JtLXBhcnQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI4LCAyMiwgODUsIDEpO1xyXG4gICAgICAgICAgICB3aWR0aDogMzB2dztcclxuICAgICAgICAgICAgcGFkZGluZzogNjBweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXZoO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1dmg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gICAgICAgICAgICAuaGVyby1pbWFnZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZm9ybS1wYXJ0IHtcclxuICAgICAgICAgICAgICB3aWR0aDogOTV2dztcclxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmF1dG8ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMjM3LCA0Nyk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICAzMDZkZWcsXHJcbiAgICAgICAgICAgICAgcmdiYSgwLCAyMzcsIDQ3LCAxKSAyOSUsXHJcbiAgICAgICAgICAgICAgcmdiYSgwLCAxNzksIDM1LCAxKSA2NCUsXHJcbiAgICAgICAgICAgICAgcmdiYSgwLCAxNzksIDM1LCAxKSA4MyVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVmTGluaztcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\pages\\\\ref\\\\[id].js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVmLy5qcyJdLCJuYW1lcyI6WyJSZWZMaW5rIiwiX2lkIiwiUm91dGVyIiwicXVlcnkiLCJpZCIsInNldFN0YXRlIiwid2ViMyIsIldlYjMiLCJnaXZlblByb3ZpZGVyIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImFjY291bnQiLCJjb250cmFjdCIsIkNvbnRyYWN0IiwiQUJJIiwiQUREUkVTUyIsIm1ldGhvZHMiLCJpc1VzZXJFeGlzdHMiLCJzdGF0ZSIsImNhbGwiLCJpc0V4aXN0cyIsImlzRXhpc3QiLCJyZWdpc3RyYXRpb25Db3N0IiwiY29zdHMiLCJjb3N0IiwiaWRUb0FkZHJlc3MiLCJfcmVmQWRkcmVzcyIsInJlZkFkZHJlc3MiLCJjb25zb2xlIiwibG9nIiwiaXNMb2FkaW5nIiwicHJvcHMiLCJsb2FkaW5nIiwibG9hZFdlYjMiLCJsb2FkQmxvY2tjaGFpbkRhdGEiLCJwdXNoIiwicmVnaXN0cmF0aW9uRXh0Iiwic2VuZCIsInZhbHVlIiwiZnJvbSIsInRoZW4iLCJyZWNlaXB0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJlZ2lzdGVyIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLE87Ozs7Ozs7d0NBQ2dCO0FBQ2xCLFVBQU1DLEdBQUcsR0FBR0Msa0RBQU0sQ0FBQ0MsS0FBUCxDQUFhQyxFQUF6QjtBQUNBLFdBQUtDLFFBQUwsQ0FBYztBQUFFRCxVQUFFLEVBQUVIO0FBQU4sT0FBZDtBQUNEOzs7Ozs7Ozs7OztBQUdPSyxvQixHQUFPLElBQUlDLDRDQUFKLENBQVNBLDRDQUFJLENBQUNDLGFBQUwsSUFBc0IsdUJBQS9CLEM7O3VCQUNVRixJQUFJLENBQUNHLEdBQUwsQ0FBU0MsV0FBVCxFOzs7QUFBakJDLHdCO0FBQ04scUJBQUtOLFFBQUws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RUFBbEMsQ0FGRixFQUdFO0FBRUUsZ0JBQVE7QUFBQSxzTUFBRSxrQkFBT3VDLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNSQSx5QkFBSyxDQUFDQyxjQUFOO0FBRFE7QUFBQSwyQkFFRixNQUFJLENBQUNDLFFBQUwsQ0FBYyxNQUFJLENBQUMxQixLQUFMLENBQVdTLFVBQXpCLENBRkU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBRjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZWO0FBQUEsNENBQ1ksV0FEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBT0U7QUFBQSw0Q0FBa0IsTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFQRixDQUhGLEVBYUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRDQWJGLENBSkYsQ0FERjtBQUFBO0FBQUE7QUFBQSxra1JBREY7QUFvR0Q7Ozs7RUE5Sm1Ca0IsK0M7O0FBaUtQOUMsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVmL1tpZF0uY2IzMGRmZmVjNTgwNDI0ZWNhNTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFdlYjMgZnJvbSBcIndlYjNcIjtcclxuaW1wb3J0IHsgQUJJLCBBRERSRVNTLCBPV05FUiB9IGZyb20gXCIuLi8uLi91dGlscy9nbG9iYWxzXCI7XHJcbmltcG9ydCB7IGxvYWRXZWIzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3V0aWxpdHlcIjtcclxuXHJcbmNsYXNzIFJlZkxpbmsgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc3QgX2lkID0gUm91dGVyLnF1ZXJ5LmlkO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlkOiBfaWQgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBsb2FkQmxvY2tjaGFpbkRhdGEoKSB7XHJcbiAgICBjb25zdCB3ZWIzID0gbmV3IFdlYjMoV2ViMy5naXZlblByb3ZpZGVyIHx8IFwiaHR0cDovL2xvY2FsaG9zdDo4NTQ1XCIpO1xyXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjY291bnQ6IGFjY291bnRzWzBdIH0pO1xyXG4gICAgY29uc3QgY29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoQUJJLCBBRERSRVNTKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjb250cmFjdCB9KTtcclxuICAgIGNvbnN0IGlzRXhpc3RzID0gYXdhaXQgY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAuaXNVc2VyRXhpc3RzKHRoaXMuc3RhdGUuYWNjb3VudClcclxuICAgICAgLmNhbGwoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0V4aXN0OiBpc0V4aXN0cyB9KTtcclxuICAgIGNvbnN0IGNvc3RzID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy5yZWdpc3RyYXRpb25Db3N0KCkuY2FsbCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvc3Q6IGNvc3RzIH0pO1xyXG4gICAgY29uc3QgX3JlZkFkZHJlc3MgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLmlkVG9BZGRyZXNzKHRoaXMuc3RhdGUuaWQpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHJlZkFkZHJlc3M6IF9yZWZBZGRyZXNzIH0pO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5yZWZBZGRyZXNzKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0xvYWRpbmc6IGZhbHNlIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGFjY291bnQ6IFwiXCIsXHJcbiAgICAgIGlzRXhpc3Q6IGZhbHNlLFxyXG4gICAgICBjb3N0OiBcIlwiLFxyXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgcmVmQWRkcmVzczogXCJcIixcclxuICAgICAgaWQ6IFwiXCIsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgcmVnaXN0ZXIocmVmQWRkcmVzcykge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSk7XHJcbiAgICBhd2FpdCBsb2FkV2ViMygpO1xyXG4gICAgYXdhaXQgdGhpcy5sb2FkQmxvY2tjaGFpbkRhdGEoKTtcclxuICAgIGlmICh0aGlzLnN0YXRlLmlzRXhpc3QpIHtcclxuICAgICAgUm91dGVyLnB1c2goXCIvZGFzaGJvYXJkXCIpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGF3YWl0IHRoaXMuY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgIC5yZWdpc3RyYXRpb25FeHQocmVmQWRkcmVzcylcclxuICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICB2YWx1ZTogY29zdCxcclxuICAgICAgICAgIGZyb206IGFjY291bnQsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVjZWlwdCkge1xyXG4gICAgICAgICAgUm91dGVyLnB1c2goXCIvZGFzaGJvYXJkXCIpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWltYWdlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGljdHVyZS1ob2xkZXJcIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXBhcnRcIj5cclxuICAgICAgICAgICAgPGgxPlJlZ2lzdGVyPC9oMT5cclxuICAgICAgICAgICAgPHA+WW91ciBpbnZpdGVyIGlzIElEIHt0aGlzLnN0YXRlLmlkfTwvcD5cclxuICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdXRvbWF0aWNcIlxyXG4gICAgICAgICAgICAgIG9uU3VibWl0PXthc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnJlZ2lzdGVyKHRoaXMuc3RhdGUucmVmQWRkcmVzcyk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYXV0b1wiPlJlZ2lzdGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgIDxwPlRlbGVncmFtIENoYW5uZWwgQGNyeXB0b29mZmljaWFsPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxNiwgMSwgNjIsIDEpO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaGVyby1pbWFnZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3MHZ3O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZ3O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnBpY3R1cmUtaG9sZGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2hlcm8tcGljdHVyZS5qcGdcIik7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhlcm8ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb3JtLXBhcnQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI4LCAyMiwgODUsIDEpO1xyXG4gICAgICAgICAgICB3aWR0aDogMzB2dztcclxuICAgICAgICAgICAgcGFkZGluZzogNjBweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXZoO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1dmg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gICAgICAgICAgICAuaGVyby1pbWFnZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZm9ybS1wYXJ0IHtcclxuICAgICAgICAgICAgICB3aWR0aDogOTV2dztcclxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmF1dG8ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMjM3LCA0Nyk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICAzMDZkZWcsXHJcbiAgICAgICAgICAgICAgcmdiYSgwLCAyMzcsIDQ3LCAxKSAyOSUsXHJcbiAgICAgICAgICAgICAgcmdiYSgwLCAxNzksIDM1LCAxKSA2NCUsXHJcbiAgICAgICAgICAgICAgcmdiYSgwLCAxNzksIDM1LCAxKSA4MyVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVmTGluaztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==