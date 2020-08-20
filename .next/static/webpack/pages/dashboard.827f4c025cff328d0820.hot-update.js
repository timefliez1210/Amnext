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
        var web3, contract, address, isExists, userId, userCount, balance, _web, accounts, _contract, _address, _isExists, _userId, _userCount, _balance;

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
                return contract.methods.isUserExists(this.state.account).call();

              case 8:
                isExists = _context2.sent;
                this.setState({
                  isExist: isExists
                }); // Bundled Promises

                _context2.next = 12;
                return this.state.contract.methods.users(this.state.account).call();

              case 12:
                userId = _context2.sent;
                this.setState({
                  userIds: userId.id,
                  parnterCount: userId.partnersCount
                });
                _context2.next = 16;
                return this.state.contract.methods.lastUserId().call();

              case 16:
                userCount = _context2.sent;
                this.setState({
                  totalUsers: userCount
                });
                _context2.next = 20;
                return this.state.contract.methods.balances(this.state.account).call();

              case 20:
                balance = _context2.sent;
                this.setState({
                  balance: balance
                }); // Error Catch -> Fetch the new Data directly from web3 provider after reload

                _context2.next = 52;
                break;

              case 24:
                _context2.prev = 24;
                _context2.t0 = _context2["catch"](0);
                window.alert(_context2.t0.message);
                _web = new web3__WEBPACK_IMPORTED_MODULE_10___default.a(web3__WEBPACK_IMPORTED_MODULE_10___default.a.givenProvider || "http://localhost:8545");
                _context2.next = 30;
                return _web.eth.getAccounts();

              case 30:
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
                _context2.next = 38;
                return _contract.methods.isUserExists(this.state.account).call();

              case 38:
                _isExists = _context2.sent;
                this.setState({
                  isExist: _isExists
                }); // Bundled Promises

                _context2.next = 42;
                return this.state.contract.methods.users(this.state.account).call();

              case 42:
                _userId = _context2.sent;
                this.setState({
                  userIds: _userId.id,
                  parnterCount: _userId.partnersCount
                });
                _context2.next = 46;
                return this.state.contract.methods.lastUserId().call();

              case 46:
                _userCount = _context2.sent;
                this.setState({
                  totalUsers: _userCount
                });
                _context2.next = 50;
                return this.state.contract.methods.balances(this.state.account).call();

              case 50:
                _balance = _context2.sent;
                this.setState({
                  balance: _balance
                });

              case 52:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 24]]);
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
            lineNumber: 116,
            columnNumber: 14
          }
        });
      } else {
        if (this.state.isExist === true) {
          return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_14__["default"], {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 13
            }
          }), __jsx("div", {
            className: "jsx-2544248236" + " " + "dashboard",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 13
            }
          }, __jsx(_components_InfoHeader__WEBPACK_IMPORTED_MODULE_15__["default"], {
            totalUsers: this.state.totalUsers,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 15
            }
          }), __jsx("div", {
            className: "jsx-2544248236" + " " + "pagination",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 15
            }
          }, __jsx("div", {
            className: "jsx-2544248236" + " " + "small-box",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 125,
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
              lineNumber: 126,
              columnNumber: 19
            }
          })), __jsx("div", {
            className: "jsx-2544248236" + " " + "big-box",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 17
            }
          }, __jsx(_components_matrix_X3MatrixHolder__WEBPACK_IMPORTED_MODULE_17__["default"], {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 19
            }
          }), __jsx(_components_matrix_X4MatrixHolder__WEBPACK_IMPORTED_MODULE_18__["default"], {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 19
            }
          }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
            id: "2544248236",
            __self: this
          }, ".dashboard.jsx-2544248236{background:rgba(16,1,62,1);width:100vw;max-width:1420px;margin:auto auto;padding:5px;}.pagination.jsx-2544248236{margin-top:2vh;display:grid;grid-template-columns:30% 65%;grid-gap:5%;}@media only screen and (max-width:900px){.pagination.jsx-2544248236{grid-template-columns:1fr;grid-gap:5%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXHBhZ2VzXFxkYXNoYm9hcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkkwQixBQUdpRCxBQU9mLEFBT2EsZUFOZixXQU9DLENBZEYsQ0FRa0IsVUFPOUIsQ0FkaUIsaUJBQ0EsRUFPTCxZQUNkLEdBUGMsWUFDZCIsImZpbGUiOiJDOlxcVXNlcnNcXGNyZmFiXFxEZXNrdG9wXFxmb3JzYWdlLWJvaWxlcnBsYXRlXFxwYWdlc1xcZGFzaGJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xyXG5pbXBvcnQgeyBBQkksIEFERFJFU1MgfSBmcm9tIFwiLi4vZXRoZXJldW0vd2ViM1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9TcGlubmVyXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmlnYXRpb25cIjtcclxuaW1wb3J0IEluZm9IZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSW5mb0hlYWRlclwiO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9zaWRlYmFyL1NpZGViYXJcIjtcclxuaW1wb3J0IFgzTWF0cml4SG9sZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL21hdHJpeC9YM01hdHJpeEhvbGRlclwiO1xyXG5pbXBvcnQgWDRNYXRyaXhIb2xkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWF0cml4L1g0TWF0cml4SG9sZGVyXCI7XHJcbi8vIENvbnRleHQgQVBJXHJcbmltcG9ydCBBY2NvdW50Q29udGV4dCBmcm9tIFwiLi4vY29tcG9uZW50cy9BY2NvdW50Q29udGV4dFwiO1xyXG5cclxuY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgY29udGV4dFR5cGUgPSBBY2NvdW50Q29udGV4dDtcclxuXHJcbiAgYXN5bmMgVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBhY2NvdW50OiB0aGlzLmNvbnRleHQuYWNjb3VudCB9KTtcclxuICAgIGF3YWl0IHRoaXMubG9hZFdlYjMoKTtcclxuICAgIGF3YWl0IHRoaXMubG9hZEJsb2NrY2hhaW5EYXRhKCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBsb2FkQmxvY2tjaGFpbkRhdGEoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB3ZWIzID0gbmV3IFdlYjMoV2ViMy5naXZlblByb3ZpZGVyIHx8IFwiaHR0cDovL2xvY2FsaG9zdDo4NTQ1XCIpO1xyXG5cclxuICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoQUJJLCBBRERSRVNTKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRyYWN0IH0pO1xyXG4gICAgICBjb25zdCBhZGRyZXNzID0gQUREUkVTUztcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFkZHJlc3MgfSk7XHJcbiAgICAgIGNvbnN0IGlzRXhpc3RzID0gYXdhaXQgY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgIC5pc1VzZXJFeGlzdHModGhpcy5zdGF0ZS5hY2NvdW50KVxyXG4gICAgICAgIC5jYWxsKCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0V4aXN0OiBpc0V4aXN0cyB9KTtcclxuXHJcbiAgICAgIC8vIEJ1bmRsZWQgUHJvbWlzZXNcclxuICAgICAgY29uc3QgdXNlcklkID0gYXdhaXQgdGhpcy5zdGF0ZS5jb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgLnVzZXJzKHRoaXMuc3RhdGUuYWNjb3VudClcclxuICAgICAgICAuY2FsbCgpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICB1c2VySWRzOiB1c2VySWQuaWQsXHJcbiAgICAgICAgcGFybnRlckNvdW50OiB1c2VySWQucGFydG5lcnNDb3VudCxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHVzZXJDb3VudCA9IGF3YWl0IHRoaXMuc3RhdGUuY29udHJhY3QubWV0aG9kcy5sYXN0VXNlcklkKCkuY2FsbCgpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgdG90YWxVc2VyczogdXNlckNvdW50IH0pO1xyXG4gICAgICBjb25zdCBiYWxhbmNlID0gYXdhaXQgdGhpcy5zdGF0ZS5jb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgLmJhbGFuY2VzKHRoaXMuc3RhdGUuYWNjb3VudClcclxuICAgICAgICAuY2FsbCgpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYmFsYW5jZSB9KTtcclxuXHJcbiAgICAgIC8vIEVycm9yIENhdGNoIC0+IEZldGNoIHRoZSBuZXcgRGF0YSBkaXJlY3RseSBmcm9tIHdlYjMgcHJvdmlkZXIgYWZ0ZXIgcmVsb2FkXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KGVyci5tZXNzYWdlKTtcclxuICAgICAgY29uc3Qgd2ViMyA9IG5ldyBXZWIzKFdlYjMuZ2l2ZW5Qcm92aWRlciB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6ODU0NVwiKTtcclxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYWNjb3VudDogYWNjb3VudHNbMF0gfSk7XHJcblxyXG4gICAgICBjb25zdCBjb250cmFjdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChBQkksIEFERFJFU1MpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY29udHJhY3QgfSk7XHJcbiAgICAgIGNvbnN0IGFkZHJlc3MgPSBBRERSRVNTO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYWRkcmVzcyB9KTtcclxuICAgICAgY29uc3QgaXNFeGlzdHMgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgLmlzVXNlckV4aXN0cyh0aGlzLnN0YXRlLmFjY291bnQpXHJcbiAgICAgICAgLmNhbGwoKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRXhpc3Q6IGlzRXhpc3RzIH0pO1xyXG5cclxuICAgICAgLy8gQnVuZGxlZCBQcm9taXNlc1xyXG4gICAgICBjb25zdCB1c2VySWQgPSBhd2FpdCB0aGlzLnN0YXRlLmNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAudXNlcnModGhpcy5zdGF0ZS5hY2NvdW50KVxyXG4gICAgICAgIC5jYWxsKCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHVzZXJJZHM6IHVzZXJJZC5pZCxcclxuICAgICAgICBwYXJudGVyQ291bnQ6IHVzZXJJZC5wYXJ0bmVyc0NvdW50LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgdXNlckNvdW50ID0gYXdhaXQgdGhpcy5zdGF0ZS5jb250cmFjdC5tZXRob2RzLmxhc3RVc2VySWQoKS5jYWxsKCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0b3RhbFVzZXJzOiB1c2VyQ291bnQgfSk7XHJcbiAgICAgIGNvbnN0IGJhbGFuY2UgPSBhd2FpdCB0aGlzLnN0YXRlLmNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAuYmFsYW5jZXModGhpcy5zdGF0ZS5hY2NvdW50KVxyXG4gICAgICAgIC5jYWxsKCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBiYWxhbmNlIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgbG9hZFdlYjMoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XHJcbiAgICAgICAgd2luZG93LndlYjMgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pO1xyXG4gICAgICAgIGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5lbmFibGUoKTtcclxuICAgICAgfSBlbHNlIGlmICh3aW5kb3cud2ViMykge1xyXG4gICAgICAgIHdpbmRvdy53ZWIzID0gbmV3IFdlYjMod2luZG93LndlYjMuY3VycmVudFByb3ZpZGVyKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB3aW5kb3cuYWxlcnQoXHJcbiAgICAgICAgICBcIk5vbi1FdGhlcmV1bSBicm93c2VyIGRldGVjdGVkLiBZb3Ugc2hvdWxkIGNvbnNpZGVyIHRyeWluZyBNZXRhTWFzayFcIlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJUcm91YmxlIGNvbm5lY3RpbmcgdG8geW91IHdlYjMgYnJvd3Nlci4uLlwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBhY2NvdW50OiBcIlwiLFxyXG4gICAgICBpc0V4aXN0OiBmYWxzZSxcclxuICAgICAgdXNlcklkczogXCJcIixcclxuICAgICAgcGFybnRlckNvdW50OiBcIlwiLFxyXG4gICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICB0b3RhbFVzZXJzOiBcIlwiLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmxvYWRpbmcgPT09IHRydWUpIHtcclxuICAgICAgcmV0dXJuIDxTcGlubmVyIC8+O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUuaXNFeGlzdCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TmF2aWdhdGlvbiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2hib2FyZFwiPlxyXG4gICAgICAgICAgICAgIDxJbmZvSGVhZGVyIHRvdGFsVXNlcnM9e3RoaXMuc3RhdGUudG90YWxVc2Vyc30gLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxTaWRlYmFyXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcklkcz17dGhpcy5zdGF0ZS51c2VySWRzfVxyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRuZXJzQ291bnQ9e3RoaXMuc3RhdGUucGFybnRlckNvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMuc3RhdGUuYWNjb3VudH1cclxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzPXt0aGlzLnN0YXRlLmFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgYmFsYW5jZT17dGhpcy5zdGF0ZS5iYWxhbmNlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpZy1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgPFgzTWF0cml4SG9sZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxYNE1hdHJpeEhvbGRlciAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5kYXNoYm9hcmQge1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2LCAxLCA2MiwgMSk7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0byBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucGFnaW5hdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJ2aDtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgNjUlO1xyXG4gICAgICAgICAgICAgICAgICBncmlkLWdhcDogNSU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgIC5wYWdpbmF0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICAgICAgICAgICAgICBncmlkLWdhcDogNSU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBSb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\pages\\\\dashboard.js */")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLmpzIl0sIm5hbWVzIjpbIkRhc2hib2FyZCIsInNldFN0YXRlIiwiYWNjb3VudCIsImNvbnRleHQiLCJsb2FkV2ViMyIsImxvYWRCbG9ja2NoYWluRGF0YSIsImxvYWRpbmciLCJ3ZWIzIiwiV2ViMyIsImdpdmVuUHJvdmlkZXIiLCJjb250cmFjdCIsImV0aCIsIkNvbnRyYWN0IiwiQUJJIiwiQUREUkVTUyIsImFkZHJlc3MiLCJtZXRob2RzIiwiaXNVc2VyRXhpc3RzIiwic3RhdGUiLCJjYWxsIiwiaXNFeGlzdHMiLCJpc0V4aXN0IiwidXNlcnMiLCJ1c2VySWQiLCJ1c2VySWRzIiwiaWQiLCJwYXJudGVyQ291bnQiLCJwYXJ0bmVyc0NvdW50IiwibGFzdFVzZXJJZCIsInVzZXJDb3VudCIsInRvdGFsVXNlcnMiLCJiYWxhbmNlcyIsImJhbGFuY2UiLCJ3aW5kb3ciLCJhbGVydCIsIm1lc3NhZ2UiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiZXRoZXJldW0iLCJlbmFibGUiLCJjdXJyZW50UHJvdmlkZXIiLCJwcm9wcyIsIlJvdXRlciIsInB1c2giLCJDb21wb25lbnQiLCJBY2NvdW50Q29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBOztJQUVNQSxTOzs7Ozs7Ozs7Ozs7O0FBSUYscUJBQUtDLFFBQUwsQ0FBYztBQUFFQyx5QkFBTyxFQUFFLEtBQUtDLE9BQUwsQ0FBYUQ7QUFBeEIsaUJBQWQ7O3VCQUNNLEtBQUtFLFFBQUwsRTs7Ozt1QkFDQSxLQUFLQyxrQkFBTCxFOzs7QUFDTixxQkFBS0osUUFBTCxDQUFjO0FBQUVLLHlCQUFPLEVBQUU7QUFBWCxpQkFBZDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FB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Q0FGRjtBQUFBO0FBQUE7QUFBQSxrZ1JBRkYsQ0FERjtBQTZDRCxTQTlDRCxNQThDTztBQUNMVSw2REFBTSxDQUFDQyxJQUFQLENBQVksUUFBWjtBQUNEO0FBQ0Y7QUFDRjs7OztFQTFKcUJDLCtDOzswRkFBbEI1QyxTLGlCQUNpQjZDLG1FOztBQTRKUjdDLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC44MjdmNGMwMjVjZmYzMjhkMDgyMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xyXG5pbXBvcnQgeyBBQkksIEFERFJFU1MgfSBmcm9tIFwiLi4vZXRoZXJldW0vd2ViM1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9TcGlubmVyXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmlnYXRpb25cIjtcclxuaW1wb3J0IEluZm9IZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSW5mb0hlYWRlclwiO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9zaWRlYmFyL1NpZGViYXJcIjtcclxuaW1wb3J0IFgzTWF0cml4SG9sZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL21hdHJpeC9YM01hdHJpeEhvbGRlclwiO1xyXG5pbXBvcnQgWDRNYXRyaXhIb2xkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWF0cml4L1g0TWF0cml4SG9sZGVyXCI7XHJcbi8vIENvbnRleHQgQVBJXHJcbmltcG9ydCBBY2NvdW50Q29udGV4dCBmcm9tIFwiLi4vY29tcG9uZW50cy9BY2NvdW50Q29udGV4dFwiO1xyXG5cclxuY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgY29udGV4dFR5cGUgPSBBY2NvdW50Q29udGV4dDtcclxuXHJcbiAgYXN5bmMgVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBhY2NvdW50OiB0aGlzLmNvbnRleHQuYWNjb3VudCB9KTtcclxuICAgIGF3YWl0IHRoaXMubG9hZFdlYjMoKTtcclxuICAgIGF3YWl0IHRoaXMubG9hZEJsb2NrY2hhaW5EYXRhKCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBsb2FkQmxvY2tjaGFpbkRhdGEoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB3ZWIzID0gbmV3IFdlYjMoV2ViMy5naXZlblByb3ZpZGVyIHx8IFwiaHR0cDovL2xvY2FsaG9zdDo4NTQ1XCIpO1xyXG5cclxuICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoQUJJLCBBRERSRVNTKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRyYWN0IH0pO1xyXG4gICAgICBjb25zdCBhZGRyZXNzID0gQUREUkVTUztcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFkZHJlc3MgfSk7XHJcbiAgICAgIGNvbnN0IGlzRXhpc3RzID0gYXdhaXQgY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgIC5pc1VzZXJFeGlzdHModGhpcy5zdGF0ZS5hY2NvdW50KVxyXG4gICAgICAgIC5jYWxsKCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0V4aXN0OiBpc0V4aXN0cyB9KTtcclxuXHJcbiAgICAgIC8vIEJ1bmRsZWQgUHJvbWlzZXNcclxuICAgICAgY29uc3QgdXNlcklkID0gYXdhaXQgdGhpcy5zdGF0ZS5jb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgLnVzZXJzKHRoaXMuc3RhdGUuYWNjb3VudClcclxuICAgICAgICAuY2FsbCgpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICB1c2VySWRzOiB1c2VySWQuaWQsXHJcbiAgICAgICAgcGFybnRlckNvdW50OiB1c2VySWQucGFydG5lcnNDb3VudCxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHVzZXJDb3VudCA9IGF3YWl0IHRoaXMuc3RhdGUuY29udHJhY3QubWV0aG9kcy5sYXN0VXNlcklkKCkuY2FsbCgpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgdG90YWxVc2VyczogdXNlckNvdW50IH0pO1xyXG4gICAgICBjb25zdCBiYWxhbmNlID0gYXdhaXQgdGhpcy5zdGF0ZS5jb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgLmJhbGFuY2VzKHRoaXMuc3RhdGUuYWNjb3VudClcclxuICAgICAgICAuY2FsbCgpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYmFsYW5jZSB9KTtcclxuXHJcbiAgICAgIC8vIEVycm9yIENhdGNoIC0+IEZldGNoIHRoZSBuZXcgRGF0YSBkaXJlY3RseSBmcm9tIHdlYjMgcHJvdmlkZXIgYWZ0ZXIgcmVsb2FkXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KGVyci5tZXNzYWdlKTtcclxuICAgICAgY29uc3Qgd2ViMyA9IG5ldyBXZWIzKFdlYjMuZ2l2ZW5Qcm92aWRlciB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6ODU0NVwiKTtcclxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYWNjb3VudDogYWNjb3VudHNbMF0gfSk7XHJcblxyXG4gICAgICBjb25zdCBjb250cmFjdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChBQkksIEFERFJFU1MpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY29udHJhY3QgfSk7XHJcbiAgICAgIGNvbnN0IGFkZHJlc3MgPSBBRERSRVNTO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYWRkcmVzcyB9KTtcclxuICAgICAgY29uc3QgaXNFeGlzdHMgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgLmlzVXNlckV4aXN0cyh0aGlzLnN0YXRlLmFjY291bnQpXHJcbiAgICAgICAgLmNhbGwoKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRXhpc3Q6IGlzRXhpc3RzIH0pO1xyXG5cclxuICAgICAgLy8gQnVuZGxlZCBQcm9taXNlc1xyXG4gICAgICBjb25zdCB1c2VySWQgPSBhd2FpdCB0aGlzLnN0YXRlLmNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAudXNlcnModGhpcy5zdGF0ZS5hY2NvdW50KVxyXG4gICAgICAgIC5jYWxsKCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHVzZXJJZHM6IHVzZXJJZC5pZCxcclxuICAgICAgICBwYXJudGVyQ291bnQ6IHVzZXJJZC5wYXJ0bmVyc0NvdW50LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgdXNlckNvdW50ID0gYXdhaXQgdGhpcy5zdGF0ZS5jb250cmFjdC5tZXRob2RzLmxhc3RVc2VySWQoKS5jYWxsKCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0b3RhbFVzZXJzOiB1c2VyQ291bnQgfSk7XHJcbiAgICAgIGNvbnN0IGJhbGFuY2UgPSBhd2FpdCB0aGlzLnN0YXRlLmNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAuYmFsYW5jZXModGhpcy5zdGF0ZS5hY2NvdW50KVxyXG4gICAgICAgIC5jYWxsKCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBiYWxhbmNlIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgbG9hZFdlYjMoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XHJcbiAgICAgICAgd2luZG93LndlYjMgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pO1xyXG4gICAgICAgIGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5lbmFibGUoKTtcclxuICAgICAgfSBlbHNlIGlmICh3aW5kb3cud2ViMykge1xyXG4gICAgICAgIHdpbmRvdy53ZWIzID0gbmV3IFdlYjMod2luZG93LndlYjMuY3VycmVudFByb3ZpZGVyKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB3aW5kb3cuYWxlcnQoXHJcbiAgICAgICAgICBcIk5vbi1FdGhlcmV1bSBicm93c2VyIGRldGVjdGVkLiBZb3Ugc2hvdWxkIGNvbnNpZGVyIHRyeWluZyBNZXRhTWFzayFcIlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJUcm91YmxlIGNvbm5lY3RpbmcgdG8geW91IHdlYjMgYnJvd3Nlci4uLlwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBhY2NvdW50OiBcIlwiLFxyXG4gICAgICBpc0V4aXN0OiBmYWxzZSxcclxuICAgICAgdXNlcklkczogXCJcIixcclxuICAgICAgcGFybnRlckNvdW50OiBcIlwiLFxyXG4gICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICB0b3RhbFVzZXJzOiBcIlwiLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmxvYWRpbmcgPT09IHRydWUpIHtcclxuICAgICAgcmV0dXJuIDxTcGlubmVyIC8+O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUuaXNFeGlzdCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TmF2aWdhdGlvbiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2hib2FyZFwiPlxyXG4gICAgICAgICAgICAgIDxJbmZvSGVhZGVyIHRvdGFsVXNlcnM9e3RoaXMuc3RhdGUudG90YWxVc2Vyc30gLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxTaWRlYmFyXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcklkcz17dGhpcy5zdGF0ZS51c2VySWRzfVxyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRuZXJzQ291bnQ9e3RoaXMuc3RhdGUucGFybnRlckNvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnQ9e3RoaXMuc3RhdGUuYWNjb3VudH1cclxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzPXt0aGlzLnN0YXRlLmFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgYmFsYW5jZT17dGhpcy5zdGF0ZS5iYWxhbmNlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpZy1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgPFgzTWF0cml4SG9sZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxYNE1hdHJpeEhvbGRlciAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5kYXNoYm9hcmQge1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2LCAxLCA2MiwgMSk7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0byBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucGFnaW5hdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJ2aDtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgNjUlO1xyXG4gICAgICAgICAgICAgICAgICBncmlkLWdhcDogNSU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgIC5wYWdpbmF0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICAgICAgICAgICAgICBncmlkLWdhcDogNSU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBSb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9