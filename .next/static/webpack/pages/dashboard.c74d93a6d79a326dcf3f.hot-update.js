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
                console.log(this.context);
                this.setState({
                  account: this.context.account
                });
                _context.next = 4;
                return this.loadWeb3();

              case 4:
                _context.next = 6;
                return this.loadBlockchainData();

              case 6:
                console.log(this.state.account);
                this.setState({
                  loading: false
                });

              case 8:
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
        var web3, accounts, contract, address, isExists, userId, userCount, balance;
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

                _context2.next = 31;
                break;

              case 27:
                _context2.prev = 27;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);
                window.alert("Please check if you have connected to the MATIC Chain");

              case 31:
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
            lineNumber: 94,
            columnNumber: 14
          }
        });
      } else {
        if (this.state.isExist === true) {
          return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_14__["default"], {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 13
            }
          }), __jsx("div", {
            className: "jsx-2544248236" + " " + "dashboard",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 13
            }
          }, __jsx(_components_InfoHeader__WEBPACK_IMPORTED_MODULE_15__["default"], {
            totalUsers: this.state.totalUsers,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 15
            }
          }), __jsx("div", {
            className: "jsx-2544248236" + " " + "pagination",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 15
            }
          }, __jsx("div", {
            className: "jsx-2544248236" + " " + "small-box",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 103,
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
              lineNumber: 104,
              columnNumber: 19
            }
          })), __jsx("div", {
            className: "jsx-2544248236" + " " + "big-box",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 17
            }
          }, __jsx(_components_matrix_X3MatrixHolder__WEBPACK_IMPORTED_MODULE_17__["default"], {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 19
            }
          }), __jsx(_components_matrix_X4MatrixHolder__WEBPACK_IMPORTED_MODULE_18__["default"], {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 19
            }
          }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
            id: "2544248236",
            __self: this
          }, ".dashboard.jsx-2544248236{background:rgba(16,1,62,1);width:100vw;max-width:1420px;margin:auto auto;padding:5px;}.pagination.jsx-2544248236{margin-top:2vh;display:grid;grid-template-columns:30% 65%;grid-gap:5%;}@media only screen and (max-width:900px){.pagination.jsx-2544248236{grid-template-columns:1fr;grid-gap:5%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXHBhZ2VzXFxkYXNoYm9hcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUgwQixBQUdpRCxBQU9mLEFBT2EsZUFOZixXQU9DLENBZEYsQ0FRa0IsVUFPOUIsQ0FkaUIsaUJBQ0EsRUFPTCxZQUNkLEdBUGMsWUFDZCIsImZpbGUiOiJDOlxcVXNlcnNcXGNyZmFiXFxEZXNrdG9wXFxmb3JzYWdlLWJvaWxlcnBsYXRlXFxwYWdlc1xcZGFzaGJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xyXG5pbXBvcnQgeyBBQkksIEFERFJFU1MgfSBmcm9tIFwiLi4vZXRoZXJldW0vd2ViM1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9TcGlubmVyXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmlnYXRpb25cIjtcclxuaW1wb3J0IEluZm9IZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSW5mb0hlYWRlclwiO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9zaWRlYmFyL1NpZGViYXJcIjtcclxuaW1wb3J0IFgzTWF0cml4SG9sZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL21hdHJpeC9YM01hdHJpeEhvbGRlclwiO1xyXG5pbXBvcnQgWDRNYXRyaXhIb2xkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWF0cml4L1g0TWF0cml4SG9sZGVyXCI7XHJcbi8vIENvbnRleHQgQVBJXHJcbmltcG9ydCBBY2NvdW50Q29udGV4dCBmcm9tIFwiLi4vY29tcG9uZW50cy9BY2NvdW50Q29udGV4dFwiO1xyXG5cclxuY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgY29udGV4dFR5cGUgPSBBY2NvdW50Q29udGV4dDtcclxuXHJcbiAgYXN5bmMgVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGV4dCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgYWNjb3VudDogdGhpcy5jb250ZXh0LmFjY291bnQgfSk7XHJcbiAgICBhd2FpdCB0aGlzLmxvYWRXZWIzKCk7XHJcbiAgICBhd2FpdCB0aGlzLmxvYWRCbG9ja2NoYWluRGF0YSgpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5hY2NvdW50KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGxvYWRCbG9ja2NoYWluRGF0YSgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyhXZWIzLmdpdmVuUHJvdmlkZXIgfHwgXCJodHRwOi8vbG9jYWxob3N0Ojg1NDVcIik7XHJcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7IGFjY291bnQ6IGFjY291bnRzWzBdIH0pO1xyXG5cclxuICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoQUJJLCBBRERSRVNTKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRyYWN0IH0pO1xyXG4gICAgICBjb25zdCBhZGRyZXNzID0gQUREUkVTUztcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFkZHJlc3MgfSk7XHJcbiAgICAgIGNvbnN0IGlzRXhpc3RzID0gYXdhaXQgY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgIC5pc1VzZXJFeGlzdHModGhpcy5zdGF0ZS5hY2NvdW50KVxyXG4gICAgICAgIC5jYWxsKCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0V4aXN0OiBpc0V4aXN0cyB9KTtcclxuXHJcbiAgICAgIC8vIEJ1bmRsZWQgUHJvbWlzZXNcclxuICAgICAgY29uc3QgdXNlcklkID0gYXdhaXQgdGhpcy5zdGF0ZS5jb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgLnVzZXJzKHRoaXMuc3RhdGUuYWNjb3VudClcclxuICAgICAgICAuY2FsbCgpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICB1c2VySWRzOiB1c2VySWQuaWQsXHJcbiAgICAgICAgcGFybnRlckNvdW50OiB1c2VySWQucGFydG5lcnNDb3VudCxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHVzZXJDb3VudCA9IGF3YWl0IHRoaXMuc3RhdGUuY29udHJhY3QubWV0aG9kcy5sYXN0VXNlcklkKCkuY2FsbCgpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgdG90YWxVc2VyczogdXNlckNvdW50IH0pO1xyXG4gICAgICBjb25zdCBiYWxhbmNlID0gYXdhaXQgdGhpcy5zdGF0ZS5jb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgLmJhbGFuY2VzKHRoaXMuc3RhdGUuYWNjb3VudClcclxuICAgICAgICAuY2FsbCgpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYmFsYW5jZSB9KTtcclxuXHJcbiAgICAgIC8vIEVycm9yIENhdGNoXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiUGxlYXNlIGNoZWNrIGlmIHlvdSBoYXZlIGNvbm5lY3RlZCB0byB0aGUgTUFUSUMgQ2hhaW5cIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBsb2FkV2ViMygpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcclxuICAgICAgICB3aW5kb3cud2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSk7XHJcbiAgICAgICAgYXdhaXQgd2luZG93LmV0aGVyZXVtLmVuYWJsZSgpO1xyXG4gICAgICB9IGVsc2UgaWYgKHdpbmRvdy53ZWIzKSB7XHJcbiAgICAgICAgd2luZG93LndlYjMgPSBuZXcgV2ViMyh3aW5kb3cud2ViMy5jdXJyZW50UHJvdmlkZXIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdpbmRvdy5hbGVydChcclxuICAgICAgICAgIFwiTm9uLUV0aGVyZXVtIGJyb3dzZXIgZGV0ZWN0ZWQuIFlvdSBzaG91bGQgY29uc2lkZXIgdHJ5aW5nIE1ldGFNYXNrIVwiXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIlRyb3VibGUgY29ubmVjdGluZyB0byB5b3Ugd2ViMyBicm93c2VyLi4uXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGFjY291bnQ6IFwiXCIsXHJcbiAgICAgIGlzRXhpc3Q6IGZhbHNlLFxyXG4gICAgICB1c2VySWRzOiBcIlwiLFxyXG4gICAgICBwYXJudGVyQ291bnQ6IFwiXCIsXHJcbiAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgIHRvdGFsVXNlcnM6IFwiXCIsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUubG9hZGluZyA9PT0gdHJ1ZSkge1xyXG4gICAgICByZXR1cm4gPFNwaW5uZXIgLz47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5pc0V4aXN0ID09PSB0cnVlKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaGJvYXJkXCI+XHJcbiAgICAgICAgICAgICAgPEluZm9IZWFkZXIgdG90YWxVc2Vycz17dGhpcy5zdGF0ZS50b3RhbFVzZXJzfSAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgPFNpZGViYXJcclxuICAgICAgICAgICAgICAgICAgICB1c2VySWRzPXt0aGlzLnN0YXRlLnVzZXJJZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgcGFydG5lcnNDb3VudD17dGhpcy5zdGF0ZS5wYXJudGVyQ291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5zdGF0ZS5hY2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M9e3RoaXMuc3RhdGUuYWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICBiYWxhbmNlPXt0aGlzLnN0YXRlLmJhbGFuY2V9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlnLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8WDNNYXRyaXhIb2xkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgPFg0TWF0cml4SG9sZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmRhc2hib2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTYsIDEsIDYyLCAxKTtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE0MjBweDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5wYWdpbmF0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnZoO1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwJSA2NSU7XHJcbiAgICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiA1JTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgLnBhZ2luYXRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiA1JTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\pages\\\\dashboard.js */")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLmpzIl0sIm5hbWVzIjpbIkRhc2hib2FyZCIsImNvbnNvbGUiLCJsb2ciLCJjb250ZXh0Iiwic2V0U3RhdGUiLCJhY2NvdW50IiwibG9hZFdlYjMiLCJsb2FkQmxvY2tjaGFpbkRhdGEiLCJzdGF0ZSIsImxvYWRpbmciLCJ3ZWIzIiwiV2ViMyIsImdpdmVuUHJvdmlkZXIiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiY29udHJhY3QiLCJDb250cmFjdCIsIkFCSSIsIkFERFJFU1MiLCJhZGRyZXNzIiwibWV0aG9kcyIsImlzVXNlckV4aXN0cyIsImNhbGwiLCJpc0V4aXN0cyIsImlzRXhpc3QiLCJ1c2VycyIsInVzZXJJZCIsInVzZXJJZHMiLCJpZCIsInBhcm50ZXJDb3VudCIsInBhcnRuZXJzQ291bnQiLCJsYXN0VXNlcklkIiwidXNlckNvdW50IiwidG90YWxVc2VycyIsImJhbGFuY2VzIiwiYmFsYW5jZSIsIndpbmRvdyIsImFsZXJ0IiwiZXRoZXJldW0iLCJlbmFibGUiLCJjdXJyZW50UHJvdmlkZXIiLCJwcm9wcyIsIlJvdXRlciIsInB1c2giLCJDb21wb25lbnQiLCJBY2NvdW50Q29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBOztJQUVNQSxTOzs7Ozs7Ozs7Ozs7O0FBSUZDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLQyxPQUFqQjtBQUNBLHFCQUFLQyxRQUFMLENBQWM7QUFBRUMseUJBQU8sRUFBRSxLQUFLRixPQUFMLENBQWFFO0FBQXhCLGlCQUFkOzt1QkFDTSxLQUFLQyxRQUFMLEU7Ozs7dUJBQ0EsS0FBS0Msa0JBQUwsRTs7O0FBQ05OLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFL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QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLENBVkYsQ0FGRjtBQUFBO0FBQUE7QUFBQSxzMk9BRkYsQ0FERjtBQTZDRCxTQTlDRCxNQThDTztBQUNMTyw2REFBTSxDQUFDQyxJQUFQLENBQVksUUFBWjtBQUNEO0FBQ0Y7QUFDRjs7OztFQXBJcUJDLCtDOzswRkFBbEI3QyxTLGlCQUNpQjhDLG1FOztBQXNJUjlDLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC5jNzRkOTNhNmQ3OWEzMjZkY2YzZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xyXG5pbXBvcnQgeyBBQkksIEFERFJFU1MgfSBmcm9tIFwiLi4vZXRoZXJldW0vd2ViM1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9TcGlubmVyXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmlnYXRpb25cIjtcclxuaW1wb3J0IEluZm9IZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSW5mb0hlYWRlclwiO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9zaWRlYmFyL1NpZGViYXJcIjtcclxuaW1wb3J0IFgzTWF0cml4SG9sZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL21hdHJpeC9YM01hdHJpeEhvbGRlclwiO1xyXG5pbXBvcnQgWDRNYXRyaXhIb2xkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWF0cml4L1g0TWF0cml4SG9sZGVyXCI7XHJcbi8vIENvbnRleHQgQVBJXHJcbmltcG9ydCBBY2NvdW50Q29udGV4dCBmcm9tIFwiLi4vY29tcG9uZW50cy9BY2NvdW50Q29udGV4dFwiO1xyXG5cclxuY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgY29udGV4dFR5cGUgPSBBY2NvdW50Q29udGV4dDtcclxuXHJcbiAgYXN5bmMgVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGV4dCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgYWNjb3VudDogdGhpcy5jb250ZXh0LmFjY291bnQgfSk7XHJcbiAgICBhd2FpdCB0aGlzLmxvYWRXZWIzKCk7XHJcbiAgICBhd2FpdCB0aGlzLmxvYWRCbG9ja2NoYWluRGF0YSgpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5hY2NvdW50KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGxvYWRCbG9ja2NoYWluRGF0YSgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyhXZWIzLmdpdmVuUHJvdmlkZXIgfHwgXCJodHRwOi8vbG9jYWxob3N0Ojg1NDVcIik7XHJcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7IGFjY291bnQ6IGFjY291bnRzWzBdIH0pO1xyXG5cclxuICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoQUJJLCBBRERSRVNTKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRyYWN0IH0pO1xyXG4gICAgICBjb25zdCBhZGRyZXNzID0gQUREUkVTUztcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFkZHJlc3MgfSk7XHJcbiAgICAgIGNvbnN0IGlzRXhpc3RzID0gYXdhaXQgY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgIC5pc1VzZXJFeGlzdHModGhpcy5zdGF0ZS5hY2NvdW50KVxyXG4gICAgICAgIC5jYWxsKCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0V4aXN0OiBpc0V4aXN0cyB9KTtcclxuXHJcbiAgICAgIC8vIEJ1bmRsZWQgUHJvbWlzZXNcclxuICAgICAgY29uc3QgdXNlcklkID0gYXdhaXQgdGhpcy5zdGF0ZS5jb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgLnVzZXJzKHRoaXMuc3RhdGUuYWNjb3VudClcclxuICAgICAgICAuY2FsbCgpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICB1c2VySWRzOiB1c2VySWQuaWQsXHJcbiAgICAgICAgcGFybnRlckNvdW50OiB1c2VySWQucGFydG5lcnNDb3VudCxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHVzZXJDb3VudCA9IGF3YWl0IHRoaXMuc3RhdGUuY29udHJhY3QubWV0aG9kcy5sYXN0VXNlcklkKCkuY2FsbCgpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgdG90YWxVc2VyczogdXNlckNvdW50IH0pO1xyXG4gICAgICBjb25zdCBiYWxhbmNlID0gYXdhaXQgdGhpcy5zdGF0ZS5jb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgLmJhbGFuY2VzKHRoaXMuc3RhdGUuYWNjb3VudClcclxuICAgICAgICAuY2FsbCgpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYmFsYW5jZSB9KTtcclxuXHJcbiAgICAgIC8vIEVycm9yIENhdGNoXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiUGxlYXNlIGNoZWNrIGlmIHlvdSBoYXZlIGNvbm5lY3RlZCB0byB0aGUgTUFUSUMgQ2hhaW5cIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBsb2FkV2ViMygpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcclxuICAgICAgICB3aW5kb3cud2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSk7XHJcbiAgICAgICAgYXdhaXQgd2luZG93LmV0aGVyZXVtLmVuYWJsZSgpO1xyXG4gICAgICB9IGVsc2UgaWYgKHdpbmRvdy53ZWIzKSB7XHJcbiAgICAgICAgd2luZG93LndlYjMgPSBuZXcgV2ViMyh3aW5kb3cud2ViMy5jdXJyZW50UHJvdmlkZXIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdpbmRvdy5hbGVydChcclxuICAgICAgICAgIFwiTm9uLUV0aGVyZXVtIGJyb3dzZXIgZGV0ZWN0ZWQuIFlvdSBzaG91bGQgY29uc2lkZXIgdHJ5aW5nIE1ldGFNYXNrIVwiXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIlRyb3VibGUgY29ubmVjdGluZyB0byB5b3Ugd2ViMyBicm93c2VyLi4uXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGFjY291bnQ6IFwiXCIsXHJcbiAgICAgIGlzRXhpc3Q6IGZhbHNlLFxyXG4gICAgICB1c2VySWRzOiBcIlwiLFxyXG4gICAgICBwYXJudGVyQ291bnQ6IFwiXCIsXHJcbiAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgIHRvdGFsVXNlcnM6IFwiXCIsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUubG9hZGluZyA9PT0gdHJ1ZSkge1xyXG4gICAgICByZXR1cm4gPFNwaW5uZXIgLz47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5pc0V4aXN0ID09PSB0cnVlKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaGJvYXJkXCI+XHJcbiAgICAgICAgICAgICAgPEluZm9IZWFkZXIgdG90YWxVc2Vycz17dGhpcy5zdGF0ZS50b3RhbFVzZXJzfSAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgPFNpZGViYXJcclxuICAgICAgICAgICAgICAgICAgICB1c2VySWRzPXt0aGlzLnN0YXRlLnVzZXJJZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgcGFydG5lcnNDb3VudD17dGhpcy5zdGF0ZS5wYXJudGVyQ291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17dGhpcy5zdGF0ZS5hY2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M9e3RoaXMuc3RhdGUuYWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICBiYWxhbmNlPXt0aGlzLnN0YXRlLmJhbGFuY2V9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlnLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8WDNNYXRyaXhIb2xkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgPFg0TWF0cml4SG9sZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmRhc2hib2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTYsIDEsIDYyLCAxKTtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE0MjBweDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5wYWdpbmF0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnZoO1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwJSA2NSU7XHJcbiAgICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiA1JTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgLnBhZ2luYXRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiA1JTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=