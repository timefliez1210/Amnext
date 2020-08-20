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
        var web3, accounts, contract, address, isExists, userId, userCount, balance, _web, _accounts, _contract, _address, _isExists, _userId, _userCount, _balance;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                web3 = new web3__WEBPACK_IMPORTED_MODULE_10___default.a(web3__WEBPACK_IMPORTED_MODULE_10___default.a.givenProvider || "http://localhost:8545");
                _context2.next = 4;
                return web3.eth.getAccounts();

              case 4:
                accounts = _context2.sent;
                // this.setState({ account: accounts[0] });
                contract = new web3.eth.Contract(_ethereum_web3__WEBPACK_IMPORTED_MODULE_11__["ABI"], _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__["ADDRESS"]);
                this.setState({
                  contract: contract
                });
                address = _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__["ADDRESS"];
                this.setState({
                  address: address
                });
                _context2.next = 11;
                return contract.methods.isUserExists(this.state.account).call();

              case 11:
                isExists = _context2.sent;
                this.setState({
                  isExist: isExists
                }); // Bundled Promises

                _context2.next = 15;
                return this.state.contract.methods.users(this.state.account).call();

              case 15:
                userId = _context2.sent;
                this.setState({
                  userIds: userId.id,
                  parnterCount: userId.partnersCount
                });
                _context2.next = 19;
                return this.state.contract.methods.lastUserId().call();

              case 19:
                userCount = _context2.sent;
                this.setState({
                  totalUsers: userCount
                });
                _context2.next = 23;
                return this.state.contract.methods.balances(this.state.account).call();

              case 23:
                balance = _context2.sent;
                this.setState({
                  balance: balance
                }); // Error Catch

                _context2.next = 54;
                break;

              case 27:
                _context2.prev = 27;
                _context2.t0 = _context2["catch"](0);
                _web = new web3__WEBPACK_IMPORTED_MODULE_10___default.a(web3__WEBPACK_IMPORTED_MODULE_10___default.a.givenProvider || "http://localhost:8545");
                _context2.next = 32;
                return _web.eth.getAccounts();

              case 32:
                _accounts = _context2.sent;
                this.setState({
                  account: _accounts[0]
                });
                _contract = new _web.eth.Contract(_ethereum_web3__WEBPACK_IMPORTED_MODULE_11__["ABI"], _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__["ADDRESS"]);
                this.setState({
                  contract: _contract
                });
                _address = _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__["ADDRESS"];
                this.setState({
                  address: _address
                });
                _context2.next = 40;
                return _contract.methods.isUserExists(this.state.account).call();

              case 40:
                _isExists = _context2.sent;
                this.setState({
                  isExist: _isExists
                }); // Bundled Promises

                _context2.next = 44;
                return this.state.contract.methods.users(this.state.account).call();

              case 44:
                _userId = _context2.sent;
                this.setState({
                  userIds: _userId.id,
                  parnterCount: _userId.partnersCount
                });
                _context2.next = 48;
                return this.state.contract.methods.lastUserId().call();

              case 48:
                _userCount = _context2.sent;
                this.setState({
                  totalUsers: _userCount
                });
                _context2.next = 52;
                return this.state.contract.methods.balances(this.state.account).call();

              case 52:
                _balance = _context2.sent;
                this.setState({
                  balance: _balance
                });

              case 54:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 27]]);
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
      isExist: false,
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
            lineNumber: 117,
            columnNumber: 14
          }
        });
      } else {
        if (this.state.isExist === true) {
          return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_14__["default"], {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 13
            }
          }), __jsx("div", {
            className: "jsx-2544248236" + " " + "dashboard",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 13
            }
          }, __jsx(_components_InfoHeader__WEBPACK_IMPORTED_MODULE_15__["default"], {
            totalUsers: this.state.totalUsers,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 15
            }
          }), __jsx("div", {
            className: "jsx-2544248236" + " " + "pagination",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 15
            }
          }, __jsx("div", {
            className: "jsx-2544248236" + " " + "small-box",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 126,
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
              lineNumber: 127,
              columnNumber: 19
            }
          })), __jsx("div", {
            className: "jsx-2544248236" + " " + "big-box",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 17
            }
          }, __jsx(_components_matrix_X3MatrixHolder__WEBPACK_IMPORTED_MODULE_17__["default"], {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 19
            }
          }), __jsx(_components_matrix_X4MatrixHolder__WEBPACK_IMPORTED_MODULE_18__["default"], {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 19
            }
          }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
            id: "2544248236",
            __self: this
          }, ".dashboard.jsx-2544248236{background:rgba(16,1,62,1);width:100vw;max-width:1420px;margin:auto auto;padding:5px;}.pagination.jsx-2544248236{margin-top:2vh;display:grid;grid-template-columns:30% 65%;grid-gap:5%;}@media only screen and (max-width:900px){.pagination.jsx-2544248236{grid-template-columns:1fr;grid-gap:5%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXHBhZ2VzXFxkYXNoYm9hcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEkwQixBQUdpRCxBQU9mLEFBT2EsZUFOZixXQU9DLENBZEYsQ0FRa0IsVUFPOUIsQ0FkaUIsaUJBQ0EsRUFPTCxZQUNkLEdBUGMsWUFDZCIsImZpbGUiOiJDOlxcVXNlcnNcXGNyZmFiXFxEZXNrdG9wXFxmb3JzYWdlLWJvaWxlcnBsYXRlXFxwYWdlc1xcZGFzaGJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xyXG5pbXBvcnQgeyBBQkksIEFERFJFU1MgfSBmcm9tIFwiLi4vZXRoZXJldW0vd2ViM1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9TcGlubmVyXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmlnYXRpb25cIjtcclxuaW1wb3J0IEluZm9IZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSW5mb0hlYWRlclwiO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9zaWRlYmFyL1NpZGViYXJcIjtcclxuaW1wb3J0IFgzTWF0cml4SG9sZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL21hdHJpeC9YM01hdHJpeEhvbGRlclwiO1xyXG5pbXBvcnQgWDRNYXRyaXhIb2xkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWF0cml4L1g0TWF0cml4SG9sZGVyXCI7XHJcbi8vIENvbnRleHQgQVBJXHJcbmltcG9ydCBBY2NvdW50Q29udGV4dCBmcm9tIFwiLi4vY29tcG9uZW50cy9BY2NvdW50Q29udGV4dFwiO1xyXG5cclxuY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgY29udGV4dFR5cGUgPSBBY2NvdW50Q29udGV4dDtcclxuXHJcbiAgYXN5bmMgVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBhY2NvdW50OiB0aGlzLmNvbnRleHQuYWNjb3VudCB9KTtcclxuICAgIGF3YWl0IHRoaXMubG9hZFdlYjMoKTtcclxuICAgIGF3YWl0IHRoaXMubG9hZEJsb2NrY2hhaW5EYXRhKCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBsb2FkQmxvY2tjaGFpbkRhdGEoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB3ZWIzID0gbmV3IFdlYjMoV2ViMy5naXZlblByb3ZpZGVyIHx8IFwiaHR0cDovL2xvY2FsaG9zdDo4NTQ1XCIpO1xyXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBhY2NvdW50OiBhY2NvdW50c1swXSB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KEFCSSwgQUREUkVTUyk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb250cmFjdCB9KTtcclxuICAgICAgY29uc3QgYWRkcmVzcyA9IEFERFJFU1M7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhZGRyZXNzIH0pO1xyXG4gICAgICBjb25zdCBpc0V4aXN0cyA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAuaXNVc2VyRXhpc3RzKHRoaXMuc3RhdGUuYWNjb3VudClcclxuICAgICAgICAuY2FsbCgpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNFeGlzdDogaXNFeGlzdHMgfSk7XHJcblxyXG4gICAgICAvLyBCdW5kbGVkIFByb21pc2VzXHJcbiAgICAgIGNvbnN0IHVzZXJJZCA9IGF3YWl0IHRoaXMuc3RhdGUuY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgIC51c2Vycyh0aGlzLnN0YXRlLmFjY291bnQpXHJcbiAgICAgICAgLmNhbGwoKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgdXNlcklkczogdXNlcklkLmlkLFxyXG4gICAgICAgIHBhcm50ZXJDb3VudDogdXNlcklkLnBhcnRuZXJzQ291bnQsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB1c2VyQ291bnQgPSBhd2FpdCB0aGlzLnN0YXRlLmNvbnRyYWN0Lm1ldGhvZHMubGFzdFVzZXJJZCgpLmNhbGwoKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRvdGFsVXNlcnM6IHVzZXJDb3VudCB9KTtcclxuICAgICAgY29uc3QgYmFsYW5jZSA9IGF3YWl0IHRoaXMuc3RhdGUuY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgIC5iYWxhbmNlcyh0aGlzLnN0YXRlLmFjY291bnQpXHJcbiAgICAgICAgLmNhbGwoKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJhbGFuY2UgfSk7XHJcblxyXG4gICAgICAvLyBFcnJvciBDYXRjaFxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyhXZWIzLmdpdmVuUHJvdmlkZXIgfHwgXCJodHRwOi8vbG9jYWxob3N0Ojg1NDVcIik7XHJcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFjY291bnQ6IGFjY291bnRzWzBdIH0pO1xyXG5cclxuICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoQUJJLCBBRERSRVNTKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRyYWN0IH0pO1xyXG4gICAgICBjb25zdCBhZGRyZXNzID0gQUREUkVTUztcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFkZHJlc3MgfSk7XHJcbiAgICAgIGNvbnN0IGlzRXhpc3RzID0gYXdhaXQgY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgIC5pc1VzZXJFeGlzdHModGhpcy5zdGF0ZS5hY2NvdW50KVxyXG4gICAgICAgIC5jYWxsKCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0V4aXN0OiBpc0V4aXN0cyB9KTtcclxuXHJcbiAgICAgIC8vIEJ1bmRsZWQgUHJvbWlzZXNcclxuICAgICAgY29uc3QgdXNlcklkID0gYXdhaXQgdGhpcy5zdGF0ZS5jb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgLnVzZXJzKHRoaXMuc3RhdGUuYWNjb3VudClcclxuICAgICAgICAuY2FsbCgpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICB1c2VySWRzOiB1c2VySWQuaWQsXHJcbiAgICAgICAgcGFybnRlckNvdW50OiB1c2VySWQucGFydG5lcnNDb3VudCxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHVzZXJDb3VudCA9IGF3YWl0IHRoaXMuc3RhdGUuY29udHJhY3QubWV0aG9kcy5sYXN0VXNlcklkKCkuY2FsbCgpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgdG90YWxVc2VyczogdXNlckNvdW50IH0pO1xyXG4gICAgICBjb25zdCBiYWxhbmNlID0gYXdhaXQgdGhpcy5zdGF0ZS5jb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgLmJhbGFuY2VzKHRoaXMuc3RhdGUuYWNjb3VudClcclxuICAgICAgICAuY2FsbCgpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYmFsYW5jZSB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGxvYWRXZWIzKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xyXG4gICAgICAgIHdpbmRvdy53ZWIzID0gbmV3IFdlYjMod2luZG93LmV0aGVyZXVtKTtcclxuICAgICAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0uZW5hYmxlKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAod2luZG93LndlYjMpIHtcclxuICAgICAgICB3aW5kb3cud2ViMyA9IG5ldyBXZWIzKHdpbmRvdy53ZWIzLmN1cnJlbnRQcm92aWRlcik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2luZG93LmFsZXJ0KFxyXG4gICAgICAgICAgXCJOb24tRXRoZXJldW0gYnJvd3NlciBkZXRlY3RlZC4gWW91IHNob3VsZCBjb25zaWRlciB0cnlpbmcgTWV0YU1hc2shXCJcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiVHJvdWJsZSBjb25uZWN0aW5nIHRvIHlvdSB3ZWIzIGJyb3dzZXIuLi5cIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgYWNjb3VudDogXCJcIixcclxuICAgICAgaXNFeGlzdDogZmFsc2UsXHJcbiAgICAgIHVzZXJJZHM6IFwiXCIsXHJcbiAgICAgIHBhcm50ZXJDb3VudDogXCJcIixcclxuICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgdG90YWxVc2VyczogXCJcIixcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5sb2FkaW5nID09PSB0cnVlKSB7XHJcbiAgICAgIHJldHVybiA8U3Bpbm5lciAvPjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLmlzRXhpc3QgPT09IHRydWUpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPE5hdmlnYXRpb24gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoYm9hcmRcIj5cclxuICAgICAgICAgICAgICA8SW5mb0hlYWRlciB0b3RhbFVzZXJzPXt0aGlzLnN0YXRlLnRvdGFsVXNlcnN9IC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8U2lkZWJhclxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZHM9e3RoaXMuc3RhdGUudXNlcklkc31cclxuICAgICAgICAgICAgICAgICAgICBwYXJ0bmVyc0NvdW50PXt0aGlzLnN0YXRlLnBhcm50ZXJDb3VudH1cclxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXt0aGlzLnN0YXRlLmFjY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcz17dGhpcy5zdGF0ZS5hZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgIGJhbGFuY2U9e3RoaXMuc3RhdGUuYmFsYW5jZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWctYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxYM01hdHJpeEhvbGRlciAvPlxyXG4gICAgICAgICAgICAgICAgICA8WDRNYXRyaXhIb2xkZXIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuZGFzaGJvYXJkIHtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxNiwgMSwgNjIsIDEpO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTQyMHB4O1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0bztcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnBhZ2luYXRpb24ge1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAydmg7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAlIDY1JTtcclxuICAgICAgICAgICAgICAgICAgZ3JpZC1nYXA6IDUlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAucGFnaW5hdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1nYXA6IDUlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\pages\\\\dashboard.js */")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLmpzIl0sIm5hbWVzIjpbIkRhc2hib2FyZCIsInNldFN0YXRlIiwiYWNjb3VudCIsImNvbnRleHQiLCJsb2FkV2ViMyIsImxvYWRCbG9ja2NoYWluRGF0YSIsImxvYWRpbmciLCJ3ZWIzIiwiV2ViMyIsImdpdmVuUHJvdmlkZXIiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiY29udHJhY3QiLCJDb250cmFjdCIsIkFCSSIsIkFERFJFU1MiLCJhZGRyZXNzIiwibWV0aG9kcyIsImlzVXNlckV4aXN0cyIsInN0YXRlIiwiY2FsbCIsImlzRXhpc3RzIiwiaXNFeGlzdCIsInVzZXJzIiwidXNlcklkIiwidXNlcklkcyIsImlkIiwicGFybnRlckNvdW50IiwicGFydG5lcnNDb3VudCIsImxhc3RVc2VySWQiLCJ1c2VyQ291bnQiLCJ0b3RhbFVzZXJzIiwiYmFsYW5jZXMiLCJiYWxhbmNlIiwid2luZG93IiwiZXRoZXJldW0iLCJlbmFibGUiLCJjdXJyZW50UHJvdmlkZXIiLCJhbGVydCIsInByb3BzIiwiUm91dGVyIiwicHVzaCIsIkNvbXBvbmVudCIsIkFjY291bnRDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7O0lBRU1BLFM7Ozs7Ozs7Ozs7Ozs7QUFJRixxQkFBS0MsUUFBTCxDQUFjO0FBQUVDLHlCQUFPLEVBQUUsS0FBS0MsT0FBTCxDQUFhRDtBQUF4QixpQkFBZDs7dUJBQ00sS0FBS0UsUUFBTCxFOzs7O3VCQUNBLEtBQUtDLGtCQUFMLEU7OztBQUNOLHFCQUFLSixRQUFMLENBQWM7QUFBRUsseUJBQU8sRUFBRTtBQUFYLGlCQUFkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLUUMsb0IsR0FBTyxJQUFJQyw0Q0FBSixDQUFTQSw0Q0FBSSxDQUFDQyxhQUFMLElBQXNCLHVCQUEvQixDOzt1QkFDVUYsSUFBSSxDQUFDRyxHQUFMLENBQVNDLFdBQVQsRTs7O0FBQWpCQyx3QjtBQUNOO0FBRU1DLHdCLEdBQVcsSUFBSU4sSUFBSSxDQUFDRyxHQUFMLENBQVNJLFFBQWIsQ0FBc0JDLG1EQUF0QixFQUEyQkMsdURBQTNCLEM7QUFDakIscUJBQUtmLFFBQUwsQ0FBYztBQUFFWSwwQkFBUSxFQUFSQTtBQUFGLGlCQUFkO0FBQ01JLHVCLEdBQVVELHVEO0FBQ2hCLHFCQUFLZixRQUFMLENBQWM7QUFBRWdCLHlCQUFPLEVBQVBBO0FBQUYsaUJBQWQ7O3VCQUN1QkosUUFBUSxDQUFDSyxPQUFULENBQ3BCQyxZQURvQixDQUNQLEtBQUtDLEtBQUwsQ0FBV2xCLE9BREosRUFFcEJtQixJQUZvQixFOzs7QUFBakJDLHdCO0FBR04scUJBQUtyQixRQUFMLENBQWM7QUFBRXNCLHlCQUFPLEVBQUVEO0FBQVgsaUJBQWQsRSxDQUVBOzs7dUJBQ3FCLEtBQUtGLEtBQUwsQ0FBV1AsUUFBWCxDQUFvQkssT0FBcEIsQ0FDbEJNLEtBRGtCLENBQ1osS0FBS0osS0FBTCxDQUFXbEIsT0FEQyxFQUVsQm1CLElBRmtCLEU7OztBQUFmSSxzQjtBQUdOLHFCQUFLeEIsUUFBTCxDQUFjO0FBQ1p5Qix5QkFBTyxFQUFFRCxNQUFNLENBQUNFLEVBREo7QUFFWkMsOEJBQVksRUFBRUgsTUFBTSxDQUFDSTtBQUZULGlCQUFkOzt1QkFJd0IsS0FBS1QsS0FBTCxDQUFXUCxRQUFYLENBQW9CSyxPQUFwQixDQUE0QlksVUFBNUIsR0FBeUNULElBQXpDLEU7OztBQUFsQlUseUI7QUFDTixxQkFBSzlCLFFBQUwsQ0FBYztBQUFFK0IsNEJBQVUsRUFBRUQ7QUFBZCxpQkFBZDs7dUJBQ3NCLEtBQUtYLEtBQUwsQ0FBV1AsUUFBWCxDQUFvQkssT0FBcEIsQ0FDbkJlLFFBRG1CLENBQ1YsS0FBS2IsS0FBTCxDQUFXbEIsT0FERCxFQUVuQm1CLElBRm1CLEU7OztBQUFoQmEsdUI7QUFHTixxQkFBS2pDLFFBQUwsQ0FBYztBQUFFaUMseUJBQU8sRUFBUEE7QUFBRixpQkFBZCxFLENBRUE7Ozs7Ozs7O0FBRU0zQixvQixHQUFPLElBQUlDLDRDQUFKLENBQVNBLDRDQUFJLENBQUNDLGFBQUwsSUFBc0IsdUJBQS9CLEM7O3VCQUNVRixJQUFJLENBQUNHLEdBQUwsQ0FBU0MsV0FBVCxFOzs7QUFBakJDLHlCO0FBQ04scUJBQUtYLFFBQUwsQ0FBYztBQUFFQyx5QkFBTyxFQUFFVSxTQUFRLENBQUMsQ0FBRDtBQUFuQixpQkFBZDtBQUVNQyx5QixHQUFXLElBQUlOLElBQUksQ0FBQ0csR0FBTCxDQUFTSSxRQUFiLENBQXNCQyxtREFBdEIsRUFBMkJDLHVEQUEzQixDO0FBQ2pCLHFCQUFLZixRQUFMLENBQWM7QUFBRVksMEJBQVEsRUFBUkE7QUFBRixpQkFBZDtBQUNNSSx3QixHQUFVRCx1RDtBQUNoQixxQkFBS2YsUUFBTCxDQUFjO0FBQUVnQix5QkFBTyxFQUFQQTtBQUFGLGlCQUFkOzt1QkFDdUJKLFNBQVEsQ0FBQ0ssT0FBVCxDQUNwQkMsWUFEb0IsQ0FDUCxLQUFLQyxLQUFMLENBQVdsQixPQURKLEVBRXBCbUIsSUFGb0IsRTs7O0FBQWpCQyx5QjtBQUdOLHFCQUFLckIsUUFBTCxDQUFjO0FBQUVzQix5QkFBTyxFQUFFRDtBQUFYLGlCQUFkLEUsQ0FFQTs7O3VCQUNxQixLQUFLRixLQUFMLENBQVdQLFFBQVgsQ0FBb0JLLE9BQXBCLENBQ2xCTSxLQURrQixDQUNaLEtBQUtKLEtBQUwsQ0FBV2xCLE9BREMsRUFFbEJtQixJQUZrQixFOzs7QUFBZkksdUI7QUFHTixxQkFBS3hCLFFBQUwsQ0FBYztBQUNaeUIseUJBQU8sRUFBRUQsT0FBTSxDQUFDRSxFQURKO0FBRVpDLDhCQUFZLEVBQUVILE9BQU0sQ0FBQ0k7QUFGVCxpQkFBZDs7dUJBSXdCLEtBQUtULEtBQUwsQ0FBV1AsUUFBWCxDQUFvQkssT0FBcEIsQ0FBNEJZLFVBQTVCLEdBQXlDVCxJQUF6QyxFOzs7QUFBbEJVLDBCO0FBQ04scUJBQUs5QixRQUFMLENBQWM7QUFBRStCLDRCQUFVLEVBQUVEO0FBQWQsaUJBQWQ7O3VCQUNzQixLQUFLWCxLQUFMLENBQVdQLFFBQVgsQ0FBb0JLLE9BQXBCLENBQ25CZSxRQURtQixDQUNWLEtBQUtiLEtBQUwsQ0FBV2xCLE9BREQsRUFFbkJtQixJQUZtQixFOzs7QUFBaEJhLHdCO0FBR04scUJBQUtqQyxRQUFMLENBQWM7QUFBRWlDLHlCQUFPLEVBQVBBO0FBQUYsaUJBQWQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQU1JQyxNQUFNLENBQUNDLFE7Ozs7O0FBQ1RELHNCQUFNLENBQUM1QixJQUFQLEdBQWMsSUFBSUMsNENBQUosQ0FBUzJCLE1BQU0sQ0FBQ0MsUUFBaEIsQ0FBZDs7dUJBQ01ELE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEIsRTs7Ozs7OztBQUNELG9CQUFJRixNQUFNLENBQUM1QixJQUFYLEVBQWlCO0FBQ3RCNEIsd0JBQU0sQ0FBQzVCLElBQVAsR0FBYyxJQUFJQyw0Q0FBSixDQUFTMkIsTUFBTSxDQUFDNUIsSUFBUCxDQUFZK0IsZUFBckIsQ0FBZDtBQUNELGlCQUZNLE1BRUE7QUFDTEgsd0JBQU0sQ0FBQ0ksS0FBUCxDQUNFLHFFQURGO0FBR0Q7Ozs7Ozs7OztBQUVESixzQkFBTSxDQUFDSSxLQUFQLENBQWEsMkNBQWI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlKLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS3BCLEtBQUwsR0FBYTtBQUNYbEIsYUFBTyxFQUFFLEVBREU7QUFFWHFCLGFBQU8sRUFBRSxLQUZFO0FBR1hHLGFBQU8sRUFBRSxFQUhFO0FBSVhFLGtCQUFZLEVBQUUsRUFKSDtBQUtYdEIsYUFBTyxFQUFFLElBTEU7QUFNWDBCLGdCQUFVLEVBQUU7QUFORCxLQUFiO0FBRmlCO0FBVWxCOzs7OzZCQUVRO0FBQ1AsVUFBSSxLQUFLWixLQUFMLENBQVdkLE9BQVgsS0FBdUIsSUFBM0IsRUFBaUM7QUFDL0IsZUFBTyxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNELE9BRkQsTUFFTztBQUNMLFlBQUksS0FBS2MsS0FBTCxDQUFXRyxPQUFYLEtBQXVCLElBQTNCLEVBQWlDO0FBQy9CLGlCQUNFLG1FQUNFLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUU7QUFBQSxnREFBZSxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFDRSxNQUFDLCtEQUFEO0FBQVksc0JBQVUsRUFBRSxLQUFLSCxLQUFMLENBQVdZLFVBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVFO0FBQUEsZ0RBQWUsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQ0U7QUFBQSxnREFBZSxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFDRSxNQUFDLG9FQUFEO0FBQ0UsbUJBQU8sRUFBRSxLQUFLWixLQUFMLENBQVdNLE9BRHRCO0FBRUUseUJBQWEsRUFBRSxLQUFLTixLQUFMLENBQVdRLFlBRjVCO0FBR0UsbUJBQU8sRUFBRSxLQUFLUixLQUFMLENBQVdsQixPQUh0QjtBQUlFLG1CQUFPLEVBQUUsS0FBS2tCLEtBQUwsQ0FBV0gsT0FKdEI7QUFLRSxtQkFBTyxFQUFFLEtBQUtHLEtBQUwsQ0FBV2MsT0FMdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLENBREYsRUFVRTtBQUFBLGdEQUFlLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUNFLE1BQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUUsTUFBQywwRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsQ0FWRixDQUZGO0FBQUE7QUFBQTtBQUFBLDhnUkFGRixDQURGO0FBNkNELFNBOUNELE1BOENPO0FBQ0xPLDZEQUFNLENBQUNDLElBQVAsQ0FBWSxRQUFaO0FBQ0Q7QUFDRjtBQUNGOzs7O0VBM0pxQkMsK0M7OzBGQUFsQjNDLFMsaUJBQ2lCNEMsbUU7O0FBNkpSNUMsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLjI0MzFmN2EzNjA3OWE3OGI4ZTczLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCI7XHJcbmltcG9ydCB7IEFCSSwgQUREUkVTUyB9IGZyb20gXCIuLi9ldGhlcmV1bS93ZWIzXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi9jb21wb25lbnRzL1NwaW5uZXJcIjtcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgSW5mb0hlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9JbmZvSGVhZGVyXCI7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuLi9jb21wb25lbnRzL3NpZGViYXIvU2lkZWJhclwiO1xyXG5pbXBvcnQgWDNNYXRyaXhIb2xkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWF0cml4L1gzTWF0cml4SG9sZGVyXCI7XHJcbmltcG9ydCBYNE1hdHJpeEhvbGRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9tYXRyaXgvWDRNYXRyaXhIb2xkZXJcIjtcclxuLy8gQ29udGV4dCBBUElcclxuaW1wb3J0IEFjY291bnRDb250ZXh0IGZyb20gXCIuLi9jb21wb25lbnRzL0FjY291bnRDb250ZXh0XCI7XHJcblxyXG5jbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IEFjY291bnRDb250ZXh0O1xyXG5cclxuICBhc3luYyBVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjY291bnQ6IHRoaXMuY29udGV4dC5hY2NvdW50IH0pO1xyXG4gICAgYXdhaXQgdGhpcy5sb2FkV2ViMygpO1xyXG4gICAgYXdhaXQgdGhpcy5sb2FkQmxvY2tjaGFpbkRhdGEoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGxvYWRCbG9ja2NoYWluRGF0YSgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyhXZWIzLmdpdmVuUHJvdmlkZXIgfHwgXCJodHRwOi8vbG9jYWxob3N0Ojg1NDVcIik7XHJcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7IGFjY291bnQ6IGFjY291bnRzWzBdIH0pO1xyXG5cclxuICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoQUJJLCBBRERSRVNTKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRyYWN0IH0pO1xyXG4gICAgICBjb25zdCBhZGRyZXNzID0gQUREUkVTUztcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFkZHJlc3MgfSk7XHJcbiAgICAgIGNvbnN0IGlzRXhpc3RzID0gYXdhaXQgY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgIC5pc1VzZXJFeGlzdHModGhpcy5zdGF0ZS5hY2NvdW50KVxyXG4gICAgICAgIC5jYWxsKCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0V4aXN0OiBpc0V4aXN0cyB9KTtcclxuXHJcbiAgICAgIC8vIEJ1bmRsZWQgUHJvbWlzZXNcclxuICAgICAgY29uc3QgdXNlcklkID0gYXdhaXQgdGhpcy5zdGF0ZS5jb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgLnVzZXJzKHRoaXMuc3RhdGUuYWNjb3VudClcclxuICAgICAgICAuY2FsbCgpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICB1c2VySWRzOiB1c2VySWQuaWQsXHJcbiAgICAgICAgcGFybnRlckNvdW50OiB1c2VySWQucGFydG5lcnNDb3VudCxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHVzZXJDb3VudCA9IGF3YWl0IHRoaXMuc3RhdGUuY29udHJhY3QubWV0aG9kcy5sYXN0VXNlcklkKCkuY2FsbCgpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgdG90YWxVc2VyczogdXNlckNvdW50IH0pO1xyXG4gICAgICBjb25zdCBiYWxhbmNlID0gYXdhaXQgdGhpcy5zdGF0ZS5jb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgLmJhbGFuY2VzKHRoaXMuc3RhdGUuYWNjb3VudClcclxuICAgICAgICAuY2FsbCgpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYmFsYW5jZSB9KTtcclxuXHJcbiAgICAgIC8vIEVycm9yIENhdGNoXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc3Qgd2ViMyA9IG5ldyBXZWIzKFdlYjMuZ2l2ZW5Qcm92aWRlciB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6ODU0NVwiKTtcclxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYWNjb3VudDogYWNjb3VudHNbMF0gfSk7XHJcblxyXG4gICAgICBjb25zdCBjb250cmFjdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChBQkksIEFERFJFU1MpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY29udHJhY3QgfSk7XHJcbiAgICAgIGNvbnN0IGFkZHJlc3MgPSBBRERSRVNTO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYWRkcmVzcyB9KTtcclxuICAgICAgY29uc3QgaXNFeGlzdHMgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgLmlzVXNlckV4aXN0cyh0aGlzLnN0YXRlLmFjY291bnQpXHJcbiAgICAgICAgLmNhbGwoKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRXhpc3Q6IGlzRXhpc3RzIH0pO1xyXG5cclxuICAgICAgLy8gQnVuZGxlZCBQcm9taXNlc1xyXG4gICAgICBjb25zdCB1c2VySWQgPSBhd2FpdCB0aGlzLnN0YXRlLmNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAudXNlcnModGhpcy5zdGF0ZS5hY2NvdW50KVxyXG4gICAgICAgIC5jYWxsKCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHVzZXJJZHM6IHVzZXJJZC5pZCxcclxuICAgICAgICBwYXJudGVyQ291bnQ6IHVzZXJJZC5wYXJ0bmVyc0NvdW50LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgdXNlckNvdW50ID0gYXdhaXQgdGhpcy5zdGF0ZS5jb250cmFjdC5tZXRob2RzLmxhc3RVc2VySWQoKS5jYWxsKCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0b3RhbFVzZXJzOiB1c2VyQ291bnQgfSk7XHJcbiAgICAgIGNvbnN0IGJhbGFuY2UgPSBhd2FpdCB0aGlzLnN0YXRlLmNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAuYmFsYW5jZXModGhpcy5zdGF0ZS5hY2NvdW50KVxyXG4gICAgICAgIC5jYWxsKCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBiYWxhbmNlIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgbG9hZFdlYjMoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XHJcbiAgICAgICAgd2luZG93LndlYjMgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pO1xyXG4gICAgICAgIGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5lbmFibGUoKTtcclxuICAgICAgfSBlbHNlIGlmICh3aW5kb3cud2ViMykge1xyXG4gICAgICAgIHdpbmRvdy53ZWIzID0gbmV3IFdlYjMod2luZG93LndlYjMuY3VycmVudFByb3ZpZGVyKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB3aW5kb3cuYWxlcnQoXHJcbiAgICAgICAgICBcIk5vbi1FdGhlcmV1bSBicm93c2VyIGRldGVjdGVkLiBZb3Ugc2hvdWxkIGNvbnNpZGVyIHRyeWluZyBNZXRhTWFzayFcIlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJUcm91YmxlIGNvbm5lY3RpbmcgdG8geW91IHdlYjMgYnJvd3Nlci4uLlwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBhY2NvdW50OiBcIlwiLFxyXG4gICAgICBpc0V4aXN0OiBmYWxzZSxcclxuICAgICAgdXNlcklkczogXCJcIixcclxuICAgICAgcGFybnRlckNvdW50OiBcIlwiLFxyXG4gICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICB0b3RhbFVzZXJzOiBcIlwiLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmxvYWRpbmcgPT09IHRydWUpIHtcclxuICAgICAgcmV0dXJuIDxTcGlubmVyIC8+O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUuaXNFeGlzdCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TmF2aWdhdGlvbiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2hib2FyZFwiPlxyXG4gICAgICAgICAgICAgIDxJbmZvSGVhZGVyIHRvdGFsVXNlcnM9e3RoaXMuc3RhdGUudG90YWxVc2Vyc30gLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxTaWRlYmFyXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcklkcz17dGhpcy5zdGF0ZS51c2VySWRzfVxyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRuZXJzQ291bnQ9e3RoaXMuc3RhdGUucGFybnRlckNvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMuc3RhdGUuYWNjb3VudH1cclxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzPXt0aGlzLnN0YXRlLmFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgYmFsYW5jZT17dGhpcy5zdGF0ZS5iYWxhbmNlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpZy1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgPFgzTWF0cml4SG9sZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxYNE1hdHJpeEhvbGRlciAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5kYXNoYm9hcmQge1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2LCAxLCA2MiwgMSk7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0byBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucGFnaW5hdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJ2aDtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgNjUlO1xyXG4gICAgICAgICAgICAgICAgICBncmlkLWdhcDogNSU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgIC5wYWdpbmF0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICAgICAgICAgICAgICBncmlkLWdhcDogNSU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBSb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9