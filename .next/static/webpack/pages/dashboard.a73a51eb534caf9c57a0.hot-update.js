webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
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
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Spinner */ "./components/Spinner.jsx");
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Navigation */ "./components/Navigation.jsx");
/* harmony import */ var _components_InfoHeader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/InfoHeader */ "./components/InfoHeader.jsx");
/* harmony import */ var _components_sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/sidebar/Sidebar */ "./components/sidebar/Sidebar.jsx");
/* harmony import */ var _components_matrix_X3MatrixHolder__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/matrix/X3MatrixHolder */ "./components/matrix/X3MatrixHolder.jsx");
/* harmony import */ var _components_matrix_X4MatrixHolder__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/matrix/X4MatrixHolder */ "./components/matrix/X4MatrixHolder.jsx");
/* harmony import */ var _components_AccountContext__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/AccountContext */ "./components/AccountContext.jsx");








var _jsxFileName = "C:\\Users\\crfab\\Desktop\\forsage-boilerplate\\pages\\dashboard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }










 // Context API



var Dashboard = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Dashboard, _Component);

  var _super = _createSuper(Dashboard);

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Dashboard, [{
    key: "UNSAFE_componentWillMount",
    value: function () {
      var _UNSAFE_componentWillMount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setState({
                  account: this.context.account
                });
                _context.next = 3;
                return this.loadWeb3();

              case 3:
                _context.next = 5;
                return this.loadBlockchainData();

              case 5:
                this.setState({
                  loading: false
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function UNSAFE_componentWillMount() {
        return _UNSAFE_componentWillMount.apply(this, arguments);
      }

      return UNSAFE_componentWillMount;
    }()
  }, {
    key: "loadBlockchainData",
    value: function () {
      var _loadBlockchainData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var web3, contract, address, userId, userCount, balance, _web, accounts, _contract, _address, isExists, _userId, _userCount, _balance;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                web3 = new web3__WEBPACK_IMPORTED_MODULE_10___default.a(web3__WEBPACK_IMPORTED_MODULE_10___default.a.givenProvider || "http://localhost:8545");
                contract = new web3.eth.Contract(_ethereum_web3__WEBPACK_IMPORTED_MODULE_11__["ABI"], _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__["ADDRESS"]);
                this.setState({
                  contract: contract
                });
                address = _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__["ADDRESS"];
                this.setState({
                  address: address
                });
                _context2.next = 8;
                return this.state.contract.methods.users(this.state.account).call();

              case 8:
                userId = _context2.sent;
                this.setState({
                  userIds: userId.id,
                  parnterCount: userId.partnersCount
                });
                _context2.next = 12;
                return this.state.contract.methods.lastUserId().call();

              case 12:
                userCount = _context2.sent;
                this.setState({
                  totalUsers: userCount
                });
                _context2.next = 16;
                return this.state.contract.methods.balances(this.state.account).call();

              case 16:
                balance = _context2.sent;
                this.setState({
                  balance: balance
                }); // Error Catch -> Fetch the new Data directly from web3 provider after reload

                _context2.next = 47;
                break;

              case 20:
                _context2.prev = 20;
                _context2.t0 = _context2["catch"](0);
                _web = new web3__WEBPACK_IMPORTED_MODULE_10___default.a(web3__WEBPACK_IMPORTED_MODULE_10___default.a.givenProvider || "http://localhost:8545");
                _context2.next = 25;
                return _web.eth.getAccounts();

              case 25:
                accounts = _context2.sent;
                this.setState({
                  account: accounts[0]
                });
                _contract = new _web.eth.Contract(_ethereum_web3__WEBPACK_IMPORTED_MODULE_11__["ABI"], _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__["ADDRESS"]);
                this.setState({
                  contract: _contract
                });
                _address = _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__["ADDRESS"];
                this.setState({
                  address: _address
                });
                _context2.next = 33;
                return _contract.methods.isUserExists(this.state.account).call();

              case 33:
                isExists = _context2.sent;
                this.setState({
                  isExist: isExists
                }); // Bundled Promises

                _context2.next = 37;
                return this.state.contract.methods.users(this.state.account).call();

              case 37:
                _userId = _context2.sent;
                this.setState({
                  userIds: _userId.id,
                  parnterCount: _userId.partnersCount
                });
                _context2.next = 41;
                return this.state.contract.methods.lastUserId().call();

              case 41:
                _userCount = _context2.sent;
                this.setState({
                  totalUsers: _userCount
                });
                _context2.next = 45;
                return this.state.contract.methods.balances(this.state.account).call();

              case 45:
                _balance = _context2.sent;
                this.setState({
                  balance: _balance
                });

              case 47:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 20]]);
      }));

      function loadBlockchainData() {
        return _loadBlockchainData.apply(this, arguments);
      }

      return loadBlockchainData;
    }()
  }, {
    key: "loadWeb3",
    value: function () {
      var _loadWeb = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;

                if (!window.ethereum) {
                  _context3.next = 7;
                  break;
                }

                window.web3 = new web3__WEBPACK_IMPORTED_MODULE_10___default.a(window.ethereum);
                _context3.next = 5;
                return window.ethereum.enable();

              case 5:
                _context3.next = 8;
                break;

              case 7:
                if (window.web3) {
                  window.web3 = new web3__WEBPACK_IMPORTED_MODULE_10___default.a(window.web3.currentProvider);
                } else {
                  window.alert("Non-Ethereum browser detected. You should consider trying MetaMask!");
                }

              case 8:
                _context3.next = 13;
                break;

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](0);
                window.alert("Trouble connecting to you web3 browser...");

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 10]]);
      }));

      function loadWeb3() {
        return _loadWeb.apply(this, arguments);
      }

      return loadWeb3;
    }()
  }]);

  function Dashboard(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Dashboard);

    _this = _super.call(this, props);
    _this.state = {
      account: "",
      isExist: true,
      userIds: "",
      parnterCount: "",
      loading: true,
      totalUsers: ""
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Dashboard, [{
    key: "render",
    value: function render() {
      if (this.state.loading === true) {
        return __jsx(_components_Spinner__WEBPACK_IMPORTED_MODULE_13__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 14
          }
        });
      } else {
        if (this.state.isExist === true) {
          return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_14__["default"], {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 13
            }
          }), __jsx("div", {
            className: "jsx-2544248236" + " " + "dashboard",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 13
            }
          }, __jsx(_components_InfoHeader__WEBPACK_IMPORTED_MODULE_15__["default"], {
            totalUsers: this.state.totalUsers,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }
          }), __jsx("div", {
            className: "jsx-2544248236" + " " + "pagination",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 15
            }
          }, __jsx("div", {
            className: "jsx-2544248236" + " " + "small-box",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 17
            }
          }, __jsx(_components_sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_16__["default"], {
            userIds: this.state.userIds,
            partnersCount: this.state.parnterCount,
            account: this.state.account,
            address: this.state.address,
            balance: this.state.balance,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 19
            }
          })), __jsx("div", {
            className: "jsx-2544248236" + " " + "big-box",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 17
            }
          }, __jsx(_components_matrix_X3MatrixHolder__WEBPACK_IMPORTED_MODULE_17__["default"], {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 19
            }
          }), __jsx(_components_matrix_X4MatrixHolder__WEBPACK_IMPORTED_MODULE_18__["default"], {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 19
            }
          }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
            id: "2544248236",
            __self: this
          }, ".dashboard.jsx-2544248236{background:rgba(16,1,62,1);width:100vw;max-width:1420px;margin:auto auto;padding:5px;}.pagination.jsx-2544248236{margin-top:2vh;display:grid;grid-template-columns:30% 65%;grid-gap:5%;}@media only screen and (max-width:900px){.pagination.jsx-2544248236{grid-template-columns:1fr;grid-gap:5%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXHBhZ2VzXFxkYXNoYm9hcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0kwQixBQUdpRCxBQU9mLEFBT2EsZUFOZixXQU9DLENBZEYsQ0FRa0IsVUFPOUIsQ0FkaUIsaUJBQ0EsRUFPTCxZQUNkLEdBUGMsWUFDZCIsImZpbGUiOiJDOlxcVXNlcnNcXGNyZmFiXFxEZXNrdG9wXFxmb3JzYWdlLWJvaWxlcnBsYXRlXFxwYWdlc1xcZGFzaGJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xyXG5pbXBvcnQgeyBBQkksIEFERFJFU1MgfSBmcm9tIFwiLi4vZXRoZXJldW0vd2ViM1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9TcGlubmVyXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmlnYXRpb25cIjtcclxuaW1wb3J0IEluZm9IZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSW5mb0hlYWRlclwiO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9zaWRlYmFyL1NpZGViYXJcIjtcclxuaW1wb3J0IFgzTWF0cml4SG9sZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL21hdHJpeC9YM01hdHJpeEhvbGRlclwiO1xyXG5pbXBvcnQgWDRNYXRyaXhIb2xkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWF0cml4L1g0TWF0cml4SG9sZGVyXCI7XHJcbi8vIENvbnRleHQgQVBJXHJcbmltcG9ydCBBY2NvdW50Q29udGV4dCBmcm9tIFwiLi4vY29tcG9uZW50cy9BY2NvdW50Q29udGV4dFwiO1xyXG5cclxuY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgY29udGV4dFR5cGUgPSBBY2NvdW50Q29udGV4dDtcclxuXHJcbiAgYXN5bmMgVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBhY2NvdW50OiB0aGlzLmNvbnRleHQuYWNjb3VudCB9KTtcclxuICAgIGF3YWl0IHRoaXMubG9hZFdlYjMoKTtcclxuICAgIGF3YWl0IHRoaXMubG9hZEJsb2NrY2hhaW5EYXRhKCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBsb2FkQmxvY2tjaGFpbkRhdGEoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB3ZWIzID0gbmV3IFdlYjMoV2ViMy5naXZlblByb3ZpZGVyIHx8IFwiaHR0cDovL2xvY2FsaG9zdDo4NTQ1XCIpO1xyXG4gICAgICBjb25zdCBjb250cmFjdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChBQkksIEFERFJFU1MpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY29udHJhY3QgfSk7XHJcbiAgICAgIGNvbnN0IGFkZHJlc3MgPSBBRERSRVNTO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYWRkcmVzcyB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHVzZXJJZCA9IGF3YWl0IHRoaXMuc3RhdGUuY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgIC51c2Vycyh0aGlzLnN0YXRlLmFjY291bnQpXHJcbiAgICAgICAgLmNhbGwoKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgdXNlcklkczogdXNlcklkLmlkLFxyXG4gICAgICAgIHBhcm50ZXJDb3VudDogdXNlcklkLnBhcnRuZXJzQ291bnQsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB1c2VyQ291bnQgPSBhd2FpdCB0aGlzLnN0YXRlLmNvbnRyYWN0Lm1ldGhvZHMubGFzdFVzZXJJZCgpLmNhbGwoKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRvdGFsVXNlcnM6IHVzZXJDb3VudCB9KTtcclxuICAgICAgY29uc3QgYmFsYW5jZSA9IGF3YWl0IHRoaXMuc3RhdGUuY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgIC5iYWxhbmNlcyh0aGlzLnN0YXRlLmFjY291bnQpXHJcbiAgICAgICAgLmNhbGwoKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJhbGFuY2UgfSk7XHJcblxyXG4gICAgICAvLyBFcnJvciBDYXRjaCAtPiBGZXRjaCB0aGUgbmV3IERhdGEgZGlyZWN0bHkgZnJvbSB3ZWIzIHByb3ZpZGVyIGFmdGVyIHJlbG9hZFxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyhXZWIzLmdpdmVuUHJvdmlkZXIgfHwgXCJodHRwOi8vbG9jYWxob3N0Ojg1NDVcIik7XHJcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFjY291bnQ6IGFjY291bnRzWzBdIH0pO1xyXG4gICAgICBjb25zdCBjb250cmFjdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChBQkksIEFERFJFU1MpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY29udHJhY3QgfSk7XHJcbiAgICAgIGNvbnN0IGFkZHJlc3MgPSBBRERSRVNTO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYWRkcmVzcyB9KTtcclxuICAgICAgY29uc3QgaXNFeGlzdHMgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgLmlzVXNlckV4aXN0cyh0aGlzLnN0YXRlLmFjY291bnQpXHJcbiAgICAgICAgLmNhbGwoKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRXhpc3Q6IGlzRXhpc3RzIH0pO1xyXG4gICAgICAvLyBCdW5kbGVkIFByb21pc2VzXHJcbiAgICAgIGNvbnN0IHVzZXJJZCA9IGF3YWl0IHRoaXMuc3RhdGUuY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgIC51c2Vycyh0aGlzLnN0YXRlLmFjY291bnQpXHJcbiAgICAgICAgLmNhbGwoKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgdXNlcklkczogdXNlcklkLmlkLFxyXG4gICAgICAgIHBhcm50ZXJDb3VudDogdXNlcklkLnBhcnRuZXJzQ291bnQsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB1c2VyQ291bnQgPSBhd2FpdCB0aGlzLnN0YXRlLmNvbnRyYWN0Lm1ldGhvZHMubGFzdFVzZXJJZCgpLmNhbGwoKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRvdGFsVXNlcnM6IHVzZXJDb3VudCB9KTtcclxuICAgICAgY29uc3QgYmFsYW5jZSA9IGF3YWl0IHRoaXMuc3RhdGUuY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgIC5iYWxhbmNlcyh0aGlzLnN0YXRlLmFjY291bnQpXHJcbiAgICAgICAgLmNhbGwoKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJhbGFuY2UgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBsb2FkV2ViMygpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcclxuICAgICAgICB3aW5kb3cud2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSk7XHJcbiAgICAgICAgYXdhaXQgd2luZG93LmV0aGVyZXVtLmVuYWJsZSgpO1xyXG4gICAgICB9IGVsc2UgaWYgKHdpbmRvdy53ZWIzKSB7XHJcbiAgICAgICAgd2luZG93LndlYjMgPSBuZXcgV2ViMyh3aW5kb3cud2ViMy5jdXJyZW50UHJvdmlkZXIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdpbmRvdy5hbGVydChcclxuICAgICAgICAgIFwiTm9uLUV0aGVyZXVtIGJyb3dzZXIgZGV0ZWN0ZWQuIFlvdSBzaG91bGQgY29uc2lkZXIgdHJ5aW5nIE1ldGFNYXNrIVwiXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIlRyb3VibGUgY29ubmVjdGluZyB0byB5b3Ugd2ViMyBicm93c2VyLi4uXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGFjY291bnQ6IFwiXCIsXHJcbiAgICAgIGlzRXhpc3Q6IHRydWUsXHJcbiAgICAgIHVzZXJJZHM6IFwiXCIsXHJcbiAgICAgIHBhcm50ZXJDb3VudDogXCJcIixcclxuICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgdG90YWxVc2VyczogXCJcIixcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5sb2FkaW5nID09PSB0cnVlKSB7XHJcbiAgICAgIHJldHVybiA8U3Bpbm5lciAvPjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLmlzRXhpc3QgPT09IHRydWUpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPE5hdmlnYXRpb24gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoYm9hcmRcIj5cclxuICAgICAgICAgICAgICA8SW5mb0hlYWRlciB0b3RhbFVzZXJzPXt0aGlzLnN0YXRlLnRvdGFsVXNlcnN9IC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8U2lkZWJhclxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZHM9e3RoaXMuc3RhdGUudXNlcklkc31cclxuICAgICAgICAgICAgICAgICAgICBwYXJ0bmVyc0NvdW50PXt0aGlzLnN0YXRlLnBhcm50ZXJDb3VudH1cclxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnN0YXRlLmFjY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcz17dGhpcy5zdGF0ZS5hZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgIGJhbGFuY2U9e3RoaXMuc3RhdGUuYmFsYW5jZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWctYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxYM01hdHJpeEhvbGRlciAvPlxyXG4gICAgICAgICAgICAgICAgICA8WDRNYXRyaXhIb2xkZXIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuZGFzaGJvYXJkIHtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxNiwgMSwgNjIsIDEpO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTQyMHB4O1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0bztcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnBhZ2luYXRpb24ge1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAydmg7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAlIDY1JTtcclxuICAgICAgICAgICAgICAgICAgZ3JpZC1nYXA6IDUlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAucGFnaW5hdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1nYXA6IDUlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\pages\\\\dashboard.js */")));
        } else {
          next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push("/login");
        }
      }
    }
  }]);

  return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Dashboard, "contextType", _components_AccountContext__WEBPACK_IMPORTED_MODULE_19__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLmpzIl0sIm5hbWVzIjpbIkRhc2hib2FyZCIsInNldFN0YXRlIiwiYWNjb3VudCIsImNvbnRleHQiLCJsb2FkV2ViMyIsImxvYWRCbG9ja2NoYWluRGF0YSIsImxvYWRpbmciLCJ3ZWIzIiwiV2ViMyIsImdpdmVuUHJvdmlkZXIiLCJjb250cmFjdCIsImV0aCIsIkNvbnRyYWN0IiwiQUJJIiwiQUREUkVTUyIsImFkZHJlc3MiLCJzdGF0ZSIsIm1ldGhvZHMiLCJ1c2VycyIsImNhbGwiLCJ1c2VySWQiLCJ1c2VySWRzIiwiaWQiLCJwYXJudGVyQ291bnQiLCJwYXJ0bmVyc0NvdW50IiwibGFzdFVzZXJJZCIsInVzZXJDb3VudCIsInRvdGFsVXNlcnMiLCJiYWxhbmNlcyIsImJhbGFuY2UiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiaXNVc2VyRXhpc3RzIiwiaXNFeGlzdHMiLCJpc0V4aXN0Iiwid2luZG93IiwiZXRoZXJldW0iLCJlbmFibGUiLCJjdXJyZW50UHJvdmlkZXIiLCJhbGVydCIsInByb3BzIiwiUm91dGVyIiwicHVzaCIsIkNvbXBvbmVudCIsIkFjY291bnRDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7O0lBRU1BLFM7Ozs7Ozs7Ozs7Ozs7QUFJRixxQkFBS0MsUUFBTCxDQUFjO0FBQUVDLHlCQUFPLEVBQUUsS0FBS0MsT0FBTCxDQUFhRDtBQUF4QixpQkFBZDs7dUJBQ00sS0FBS0UsUUFBTCxFOzs7O3VCQUNBLEtBQUtDLGtCQUFMLEU7OztBQUNOLHFCQUFLSixRQUFMLENBQWM7QUFBRUsseUJBQU8sRUFBRTtBQUFYLGlCQUFkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLUUMsb0IsR0FB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YTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFdlYjMgZnJvbSBcIndlYjNcIjtcclxuaW1wb3J0IHsgQUJJLCBBRERSRVNTIH0gZnJvbSBcIi4uL2V0aGVyZXVtL3dlYjNcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvU3Bpbm5lclwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBJbmZvSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0luZm9IZWFkZXJcIjtcclxuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2lkZWJhci9TaWRlYmFyXCI7XHJcbmltcG9ydCBYM01hdHJpeEhvbGRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9tYXRyaXgvWDNNYXRyaXhIb2xkZXJcIjtcclxuaW1wb3J0IFg0TWF0cml4SG9sZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL21hdHJpeC9YNE1hdHJpeEhvbGRlclwiO1xyXG4vLyBDb250ZXh0IEFQSVxyXG5pbXBvcnQgQWNjb3VudENvbnRleHQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQWNjb3VudENvbnRleHRcIjtcclxuXHJcbmNsYXNzIERhc2hib2FyZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIGNvbnRleHRUeXBlID0gQWNjb3VudENvbnRleHQ7XHJcblxyXG4gIGFzeW5jIFVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgYWNjb3VudDogdGhpcy5jb250ZXh0LmFjY291bnQgfSk7XHJcbiAgICBhd2FpdCB0aGlzLmxvYWRXZWIzKCk7XHJcbiAgICBhd2FpdCB0aGlzLmxvYWRCbG9ja2NoYWluRGF0YSgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgbG9hZEJsb2NrY2hhaW5EYXRhKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgd2ViMyA9IG5ldyBXZWIzKFdlYjMuZ2l2ZW5Qcm92aWRlciB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6ODU0NVwiKTtcclxuICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoQUJJLCBBRERSRVNTKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRyYWN0IH0pO1xyXG4gICAgICBjb25zdCBhZGRyZXNzID0gQUREUkVTUztcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFkZHJlc3MgfSk7XHJcblxyXG4gICAgICBjb25zdCB1c2VySWQgPSBhd2FpdCB0aGlzLnN0YXRlLmNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAudXNlcnModGhpcy5zdGF0ZS5hY2NvdW50KVxyXG4gICAgICAgIC5jYWxsKCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHVzZXJJZHM6IHVzZXJJZC5pZCxcclxuICAgICAgICBwYXJudGVyQ291bnQ6IHVzZXJJZC5wYXJ0bmVyc0NvdW50LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgdXNlckNvdW50ID0gYXdhaXQgdGhpcy5zdGF0ZS5jb250cmFjdC5tZXRob2RzLmxhc3RVc2VySWQoKS5jYWxsKCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0b3RhbFVzZXJzOiB1c2VyQ291bnQgfSk7XHJcbiAgICAgIGNvbnN0IGJhbGFuY2UgPSBhd2FpdCB0aGlzLnN0YXRlLmNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAuYmFsYW5jZXModGhpcy5zdGF0ZS5hY2NvdW50KVxyXG4gICAgICAgIC5jYWxsKCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBiYWxhbmNlIH0pO1xyXG5cclxuICAgICAgLy8gRXJyb3IgQ2F0Y2ggLT4gRmV0Y2ggdGhlIG5ldyBEYXRhIGRpcmVjdGx5IGZyb20gd2ViMyBwcm92aWRlciBhZnRlciByZWxvYWRcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zdCB3ZWIzID0gbmV3IFdlYjMoV2ViMy5naXZlblByb3ZpZGVyIHx8IFwiaHR0cDovL2xvY2FsaG9zdDo4NTQ1XCIpO1xyXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY2NvdW50OiBhY2NvdW50c1swXSB9KTtcclxuICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoQUJJLCBBRERSRVNTKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRyYWN0IH0pO1xyXG4gICAgICBjb25zdCBhZGRyZXNzID0gQUREUkVTUztcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFkZHJlc3MgfSk7XHJcbiAgICAgIGNvbnN0IGlzRXhpc3RzID0gYXdhaXQgY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgIC5pc1VzZXJFeGlzdHModGhpcy5zdGF0ZS5hY2NvdW50KVxyXG4gICAgICAgIC5jYWxsKCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0V4aXN0OiBpc0V4aXN0cyB9KTtcclxuICAgICAgLy8gQnVuZGxlZCBQcm9taXNlc1xyXG4gICAgICBjb25zdCB1c2VySWQgPSBhd2FpdCB0aGlzLnN0YXRlLmNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAudXNlcnModGhpcy5zdGF0ZS5hY2NvdW50KVxyXG4gICAgICAgIC5jYWxsKCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHVzZXJJZHM6IHVzZXJJZC5pZCxcclxuICAgICAgICBwYXJudGVyQ291bnQ6IHVzZXJJZC5wYXJ0bmVyc0NvdW50LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgdXNlckNvdW50ID0gYXdhaXQgdGhpcy5zdGF0ZS5jb250cmFjdC5tZXRob2RzLmxhc3RVc2VySWQoKS5jYWxsKCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0b3RhbFVzZXJzOiB1c2VyQ291bnQgfSk7XHJcbiAgICAgIGNvbnN0IGJhbGFuY2UgPSBhd2FpdCB0aGlzLnN0YXRlLmNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAuYmFsYW5jZXModGhpcy5zdGF0ZS5hY2NvdW50KVxyXG4gICAgICAgIC5jYWxsKCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBiYWxhbmNlIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgbG9hZFdlYjMoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XHJcbiAgICAgICAgd2luZG93LndlYjMgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pO1xyXG4gICAgICAgIGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5lbmFibGUoKTtcclxuICAgICAgfSBlbHNlIGlmICh3aW5kb3cud2ViMykge1xyXG4gICAgICAgIHdpbmRvdy53ZWIzID0gbmV3IFdlYjMod2luZG93LndlYjMuY3VycmVudFByb3ZpZGVyKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB3aW5kb3cuYWxlcnQoXHJcbiAgICAgICAgICBcIk5vbi1FdGhlcmV1bSBicm93c2VyIGRldGVjdGVkLiBZb3Ugc2hvdWxkIGNvbnNpZGVyIHRyeWluZyBNZXRhTWFzayFcIlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJUcm91YmxlIGNvbm5lY3RpbmcgdG8geW91IHdlYjMgYnJvd3Nlci4uLlwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBhY2NvdW50OiBcIlwiLFxyXG4gICAgICBpc0V4aXN0OiB0cnVlLFxyXG4gICAgICB1c2VySWRzOiBcIlwiLFxyXG4gICAgICBwYXJudGVyQ291bnQ6IFwiXCIsXHJcbiAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgIHRvdGFsVXNlcnM6IFwiXCIsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUubG9hZGluZyA9PT0gdHJ1ZSkge1xyXG4gICAgICByZXR1cm4gPFNwaW5uZXIgLz47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5pc0V4aXN0ID09PSB0cnVlKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaGJvYXJkXCI+XHJcbiAgICAgICAgICAgICAgPEluZm9IZWFkZXIgdG90YWxVc2Vycz17dGhpcy5zdGF0ZS50b3RhbFVzZXJzfSAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgPFNpZGViYXJcclxuICAgICAgICAgICAgICAgICAgICB1c2VySWRzPXt0aGlzLnN0YXRlLnVzZXJJZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgcGFydG5lcnNDb3VudD17dGhpcy5zdGF0ZS5wYXJudGVyQ291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5zdGF0ZS5hY2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M9e3RoaXMuc3RhdGUuYWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICBiYWxhbmNlPXt0aGlzLnN0YXRlLmJhbGFuY2V9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlnLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8WDNNYXRyaXhIb2xkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgPFg0TWF0cml4SG9sZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmRhc2hib2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTYsIDEsIDYyLCAxKTtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE0MjBweDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5wYWdpbmF0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnZoO1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwJSA2NSU7XHJcbiAgICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiA1JTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgLnBhZ2luYXRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiA1JTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=