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
                this.setState({
                  isLoading: false
                });

              case 20:
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
          lineNumber: 66,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "jsx-2670207790" + " " + "hero-image",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "jsx-2670207790" + " " + "picture-holder",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 13
        }
      })), __jsx("div", {
        className: "jsx-2670207790" + " " + "form-part",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }
      }, __jsx("h1", {
        className: "jsx-2670207790",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 13
        }
      }, "Register"), __jsx("p", {
        className: "jsx-2670207790",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
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
          lineNumber: 73,
          columnNumber: 13
        }
      }, __jsx("button", {
        className: "jsx-2670207790" + " " + "auto",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 15
        }
      }, "Register")), __jsx("p", {
        className: "jsx-2670207790",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 13
        }
      }, "Telegram Channel @cryptoofficial"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2670207790",
        __self: this
      }, ".header.jsx-2670207790{width:100vw;height:100vh;overflow:hidden;background:rgba(16,1,62,1);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}@media only screen and (max-width:1000px){.header.jsx-2670207790{height:auto;}}.hero-image.jsx-2670207790{width:70vw;height:100vw;}.picture-holder.jsx-2670207790{width:100%;height:100vh;background-image:url(\"/assets/img/hero-picture.jpg\");background-repeat:no-repeat;background-size:contain;background-position:center;}.hero.jsx-2670207790{width:100%;}.form-part.jsx-2670207790{background:rgba(28,22,85,1);width:30vw;padding:60px;color:white;height:100vh;text-align:center;}p.jsx-2670207790{color:grey;}h1.jsx-2670207790{margin-top:15vh;margin-bottom:5vh;font-size:1.5em;}button.jsx-2670207790{width:100%;text-align:center;padding:20px 0;border-radius:30px;color:white;font-size:1.2em;}@media only screen and (max-width:1000px){.hero-image.jsx-2670207790{display:none;}.form-part.jsx-2670207790{width:95vw;margin:auto auto;}}.auto.jsx-2670207790{background:rgb(0,237,47);background:linear-gradient( 306deg, rgba(0,237,47,1) 29%, rgba(0,179,35,1) 64%, rgba(0,179,35,1) 83% );box-shadow:none;outline:none;border:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXHBhZ2VzXFxyZWZcXFtpZF0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUZvQixBQUd5QixBQVFFLEFBSUgsQUFJQSxBQVFBLEFBR29CLEFBU3BCLEFBR0ssQUFLTCxBQVVJLEFBR0YsQUFLYyxXQWpEZCxBQUlBLEFBUWYsQUFZQSxBQVFvQixBQWFDLENBekROLEFBUWIsQ0E4Q0EsR0Fma0IsUUExQnBCLEFBSXVELENBaEJyQyxBQWtFZixHQXhDVSxBQStCWCxDQWJlLEtBTEMsS0FaSCxFQTFCaUIsR0E0Q1gsTUFMckIsRUFaYyxXQWtCQSxDQWpCQyxJQTNCQSxPQTZDRyxFQTlCWSxBQWFWLGNBa0JwQixJQWpCQSxVQWIwQix1QkFpRFIsQ0FoRFcsYUFoQjdCLEVBaUVlLFlBaERmLENBaURjLFlBQ2QiLCJmaWxlIjoiQzpcXFVzZXJzXFxjcmZhYlxcRGVza3RvcFxcZm9yc2FnZS1ib2lsZXJwbGF0ZVxccGFnZXNcXHJlZlxcW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFdlYjMgZnJvbSBcIndlYjNcIjtcclxuaW1wb3J0IHsgQUJJLCBBRERSRVNTLCBPV05FUiB9IGZyb20gXCIuLi8uLi91dGlscy9nbG9iYWxzXCI7XHJcbmltcG9ydCB7IGxvYWRXZWIzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3V0aWxpdHlcIjtcclxuXHJcbmNsYXNzIFJlZkxpbmsgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc3QgX2lkID0gUm91dGVyLnF1ZXJ5LmlkO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlkOiBfaWQgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBsb2FkQmxvY2tjaGFpbkRhdGEoKSB7XHJcbiAgICBjb25zdCB3ZWIzID0gbmV3IFdlYjMoV2ViMy5naXZlblByb3ZpZGVyIHx8IFwiaHR0cDovL2xvY2FsaG9zdDo4NTQ1XCIpO1xyXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjY291bnQ6IGFjY291bnRzWzBdIH0pO1xyXG4gICAgY29uc3QgY29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoQUJJLCBBRERSRVNTKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjb250cmFjdCB9KTtcclxuICAgIGNvbnN0IGlzRXhpc3RzID0gYXdhaXQgY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAuaXNVc2VyRXhpc3RzKHRoaXMuc3RhdGUuYWNjb3VudClcclxuICAgICAgLmNhbGwoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0V4aXN0OiBpc0V4aXN0cyB9KTtcclxuICAgIGNvbnN0IGNvc3RzID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy5yZWdpc3RyYXRpb25Db3N0KCkuY2FsbCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvc3Q6IGNvc3RzIH0pO1xyXG4gICAgY29uc3QgX3JlZkFkZHJlc3MgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLmlkVG9BZGRyZXNzKHRoaXMuc3RhdGUuaWQpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHJlZkFkZHJlc3M6IF9yZWZBZGRyZXNzIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzTG9hZGluZzogZmFsc2UgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgYWNjb3VudDogXCJcIixcclxuICAgICAgaXNFeGlzdDogZmFsc2UsXHJcbiAgICAgIGNvc3Q6IFwiXCIsXHJcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICByZWZBZGRyZXNzOiBcIlwiLFxyXG4gICAgICBpZDogXCJcIixcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBhc3luYyByZWdpc3RlcihyZWZBZGRyZXNzKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KTtcclxuICAgIGF3YWl0IGxvYWRXZWIzKCk7XHJcbiAgICBhd2FpdCB0aGlzLmxvYWRCbG9ja2NoYWluRGF0YSgpO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuaXNFeGlzdCkge1xyXG4gICAgICBSb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIik7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXdhaXQgdGhpcy5jb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgLnJlZ2lzdHJhdGlvbkV4dChyZWZBZGRyZXNzKVxyXG4gICAgICAgIC5zZW5kKHtcclxuICAgICAgICAgIHZhbHVlOiBjb3N0LFxyXG4gICAgICAgICAgZnJvbTogYWNjb3VudCxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZWNlaXB0KSB7XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIik7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8taW1hZ2VcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaWN0dXJlLWhvbGRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tcGFydFwiPlxyXG4gICAgICAgICAgICA8aDE+UmVnaXN0ZXI8L2gxPlxyXG4gICAgICAgICAgICA8cD5Zb3VyIGludml0ZXIgaXMgSUQge3RoaXMuc3RhdGUuaWR9PC9wPlxyXG4gICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImF1dG9tYXRpY1wiXHJcbiAgICAgICAgICAgICAgb25TdWJtaXQ9e2FzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucmVnaXN0ZXIodGhpcy5zdGF0ZS5yZWZBZGRyZXNzKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhdXRvXCI+UmVnaXN0ZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgPHA+VGVsZWdyYW0gQ2hhbm5lbCBAY3J5cHRvb2ZmaWNpYWw8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2LCAxLCA2MiwgMSk7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gICAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5oZXJvLWltYWdlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDcwdnc7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdnc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucGljdHVyZS1ob2xkZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvaGVyby1waWN0dXJlLmpwZ1wiKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaGVybyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvcm0tcGFydCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjgsIDIyLCA4NSwgMSk7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHZ3O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA2MHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1dmg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDV2aDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAgICAgICAgIC5oZXJvLWltYWdlIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mb3JtLXBhcnQge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA5NXZ3O1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogYXV0byBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYXV0byB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigwLCAyMzcsIDQ3KTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgIDMwNmRlZyxcclxuICAgICAgICAgICAgICByZ2JhKDAsIDIzNywgNDcsIDEpIDI5JSxcclxuICAgICAgICAgICAgICByZ2JhKDAsIDE3OSwgMzUsIDEpIDY0JSxcclxuICAgICAgICAgICAgICByZ2JhKDAsIDE3OSwgMzUsIDEpIDgzJVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWZMaW5rO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\pages\\\\ref\\\\[id].js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVmLy5qcyJdLCJuYW1lcyI6WyJSZWZMaW5rIiwiX2lkIiwiUm91dGVyIiwicXVlcnkiLCJpZCIsInNldFN0YXRlIiwid2ViMyIsIldlYjMiLCJnaXZlblByb3ZpZGVyIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImFjY291bnQiLCJjb250cmFjdCIsIkNvbnRyYWN0IiwiQUJJIiwiQUREUkVTUyIsIm1ldGhvZHMiLCJpc1VzZXJFeGlzdHMiLCJzdGF0ZSIsImNhbGwiLCJpc0V4aXN0cyIsImlzRXhpc3QiLCJyZWdpc3RyYXRpb25Db3N0IiwiY29zdHMiLCJjb3N0IiwiaWRUb0FkZHJlc3MiLCJfcmVmQWRkcmVzcyIsInJlZkFkZHJlc3MiLCJpc0xvYWRpbmciLCJwcm9wcyIsImxvYWRpbmciLCJsb2FkV2ViMyIsImxvYWRCbG9ja2NoYWluRGF0YSIsInB1c2giLCJyZWdpc3RyYXRpb25FeHQiLCJzZW5kIiwidmFsdWUiLCJmcm9tIiwidGhlbiIsInJlY2VpcHQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicmVnaXN0ZXIiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsTzs7Ozs7Ozt3Q0FDZ0I7QUFDbEIsVUFBTUMsR0FBRyxHQUFHQyxrREFBTSxDQUFDQyxLQUFQLENBQWFDLEVBQXpCO0FBQ0EsV0FBS0MsUUFBTCxDQUFjO0FBQUVELFVBQUUsRUFBRUg7QUFBTixPQUFkO0FBQ0Q7Ozs7Ozs7Ozs7O0FBR09LLG9CLEdBQU8sSUFBSUMsNENBQUosQ0FBU0EsNENBQUksQ0FBQ0MsYUFBTCxJQUFzQix1QkFBL0IsQzs7dUJBQ1VGLElBQUksQ0FBQ0csR0FBTCxDQUFTQyxXQUFULEU7OztBQUFqQkMsd0I7QUFDTixxQkFBS04sUUFBTCxDQUFjO0FBQUVPLHlCQUFP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QUE7QUFDUkEseUJBQUssQ0FBQ0MsY0FBTjtBQURRO0FBQUEsMkJBRUYsTUFBSSxDQUFDQyxRQUFMLENBQWMsTUFBSSxDQUFDeEIsS0FBTCxDQUFXUyxVQUF6QixDQUZFOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGVjtBQUFBLDRDQUNZLFdBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQU9FO0FBQUEsNENBQWtCLE1BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUEYsQ0FIRixFQWFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0Q0FiRixDQUpGLENBREY7QUFBQTtBQUFBO0FBQUEsMGdSQURGO0FBb0dEOzs7O0VBN0ptQmdCLCtDOztBQWdLUDVDLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlZi9baWRdLjQ3MGI3MWYwNDZlMWU4ZmVmZjE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCI7XHJcbmltcG9ydCB7IEFCSSwgQUREUkVTUywgT1dORVIgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZ2xvYmFsc1wiO1xyXG5pbXBvcnQgeyBsb2FkV2ViMyB9IGZyb20gXCIuLi8uLi91dGlscy91dGlsaXR5XCI7XHJcblxyXG5jbGFzcyBSZWZMaW5rIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGNvbnN0IF9pZCA9IFJvdXRlci5xdWVyeS5pZDtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpZDogX2lkIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgbG9hZEJsb2NrY2hhaW5EYXRhKCkge1xyXG4gICAgY29uc3Qgd2ViMyA9IG5ldyBXZWIzKFdlYjMuZ2l2ZW5Qcm92aWRlciB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6ODU0NVwiKTtcclxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBhY2NvdW50OiBhY2NvdW50c1swXSB9KTtcclxuICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KEFCSSwgQUREUkVTUyk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY29udHJhY3QgfSk7XHJcbiAgICBjb25zdCBpc0V4aXN0cyA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgLmlzVXNlckV4aXN0cyh0aGlzLnN0YXRlLmFjY291bnQpXHJcbiAgICAgIC5jYWxsKCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNFeGlzdDogaXNFeGlzdHMgfSk7XHJcbiAgICBjb25zdCBjb3N0cyA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMucmVnaXN0cmF0aW9uQ29zdCgpLmNhbGwoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjb3N0OiBjb3N0cyB9KTtcclxuICAgIGNvbnN0IF9yZWZBZGRyZXNzID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy5pZFRvQWRkcmVzcyh0aGlzLnN0YXRlLmlkKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyByZWZBZGRyZXNzOiBfcmVmQWRkcmVzcyB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0xvYWRpbmc6IGZhbHNlIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGFjY291bnQ6IFwiXCIsXHJcbiAgICAgIGlzRXhpc3Q6IGZhbHNlLFxyXG4gICAgICBjb3N0OiBcIlwiLFxyXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgcmVmQWRkcmVzczogXCJcIixcclxuICAgICAgaWQ6IFwiXCIsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgcmVnaXN0ZXIocmVmQWRkcmVzcykge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSk7XHJcbiAgICBhd2FpdCBsb2FkV2ViMygpO1xyXG4gICAgYXdhaXQgdGhpcy5sb2FkQmxvY2tjaGFpbkRhdGEoKTtcclxuICAgIGlmICh0aGlzLnN0YXRlLmlzRXhpc3QpIHtcclxuICAgICAgUm91dGVyLnB1c2goXCIvZGFzaGJvYXJkXCIpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGF3YWl0IHRoaXMuY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgIC5yZWdpc3RyYXRpb25FeHQocmVmQWRkcmVzcylcclxuICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICB2YWx1ZTogY29zdCxcclxuICAgICAgICAgIGZyb206IGFjY291bnQsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVjZWlwdCkge1xyXG4gICAgICAgICAgUm91dGVyLnB1c2goXCIvZGFzaGJvYXJkXCIpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWltYWdlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGljdHVyZS1ob2xkZXJcIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXBhcnRcIj5cclxuICAgICAgICAgICAgPGgxPlJlZ2lzdGVyPC9oMT5cclxuICAgICAgICAgICAgPHA+WW91ciBpbnZpdGVyIGlzIElEIHt0aGlzLnN0YXRlLmlkfTwvcD5cclxuICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhdXRvbWF0aWNcIlxyXG4gICAgICAgICAgICAgIG9uU3VibWl0PXthc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnJlZ2lzdGVyKHRoaXMuc3RhdGUucmVmQWRkcmVzcyk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYXV0b1wiPlJlZ2lzdGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgIDxwPlRlbGVncmFtIENoYW5uZWwgQGNyeXB0b29mZmljaWFsPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxNiwgMSwgNjIsIDEpO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaGVyby1pbWFnZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3MHZ3O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZ3O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnBpY3R1cmUtaG9sZGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2hlcm8tcGljdHVyZS5qcGdcIik7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhlcm8ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb3JtLXBhcnQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI4LCAyMiwgODUsIDEpO1xyXG4gICAgICAgICAgICB3aWR0aDogMzB2dztcclxuICAgICAgICAgICAgcGFkZGluZzogNjBweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXZoO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1dmg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gICAgICAgICAgICAuaGVyby1pbWFnZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZm9ybS1wYXJ0IHtcclxuICAgICAgICAgICAgICB3aWR0aDogOTV2dztcclxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmF1dG8ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMjM3LCA0Nyk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICAzMDZkZWcsXHJcbiAgICAgICAgICAgICAgcmdiYSgwLCAyMzcsIDQ3LCAxKSAyOSUsXHJcbiAgICAgICAgICAgICAgcmdiYSgwLCAxNzksIDM1LCAxKSA2NCUsXHJcbiAgICAgICAgICAgICAgcmdiYSgwLCAxNzksIDM1LCAxKSA4MyVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVmTGluaztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==