webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./components/matrix/MatrixSystem.jsx":
/*!********************************************!*\
  !*** ./components/matrix/MatrixSystem.jsx ***!
  \********************************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _X3MatrixHolder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./X3MatrixHolder */ "./components/matrix/X3MatrixHolder.jsx");
/* harmony import */ var _X4MatrixHolder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./X4MatrixHolder */ "./components/matrix/X4MatrixHolder.jsx");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_globals__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/globals */ "./utils/globals.js");
/* harmony import */ var _utils_utility__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/utility */ "./utils/utility.js");







var _jsxFileName = "C:\\Users\\crfab\\Desktop\\forsage-boilerplate\\components\\matrix\\MatrixSystem.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var MatrixSystem = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatrixSystem, _Component);

  var _super = _createSuper(MatrixSystem);

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(MatrixSystem, [{
    key: "UNSAFE_componentWillMount",
    value: function () {
      var _UNSAFE_componentWillMount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                this.setState({
                  account: this.props.account
                });
                _context.next = 4;
                return Object(_utils_utility__WEBPACK_IMPORTED_MODULE_12__["loadWeb3"])();

              case 4:
                _context.next = 6;
                return this.loadBlockchainData();

              case 6:
                test();
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                window.alert("Something went wrong.. Check: " + _context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      function UNSAFE_componentWillMount() {
        return _UNSAFE_componentWillMount.apply(this, arguments);
      }

      return UNSAFE_componentWillMount;
    }()
  }, {
    key: "test",
    value: function () {
      var _test = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var x3, i, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                x3 = [];
                i = 1;

              case 2:
                if (!(i < 13)) {
                  _context2.next = 10;
                  break;
                }

                _context2.next = 5;
                return this.state.contract.methods.usersX3Matrix(this.state.account, i).call();

              case 5:
                res = _context2.sent;
                x3.push({
                  level: i,
                  userX3: res
                });

              case 7:
                i++;
                _context2.next = 2;
                break;

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function test() {
        return _test.apply(this, arguments);
      }

      return test;
    }()
  }, {
    key: "loadBlockchainData",
    value: function () {
      var _loadBlockchainData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var web3, contract, costs, x3, i, res, elementsX3, _cost, _i, j, downlines, x3Exist, _i2, _res, x3Payload, _x4cost, x4Exist, _i3, _res2, x6, _i4, _res3, x6Payload;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                web3 = new web3__WEBPACK_IMPORTED_MODULE_10___default.a(web3__WEBPACK_IMPORTED_MODULE_10___default.a.givenProvider || "http://localhost:8545");
                contract = new web3.eth.Contract(_utils_globals__WEBPACK_IMPORTED_MODULE_11__["ABI"], _utils_globals__WEBPACK_IMPORTED_MODULE_11__["ADDRESS"]);
                this.setState({
                  contract: contract
                });
                _context3.next = 6;
                return contract.methods.registrationCost().call();

              case 6:
                costs = _context3.sent;
                this.setState({
                  cost: costs
                }); // Matrix Calls for the X3

                x3 = [];
                i = 1;

              case 10:
                if (!(i < 13)) {
                  _context3.next = 18;
                  break;
                }

                _context3.next = 13;
                return contract.methods.usersX3Matrix(this.state.account, i).call();

              case 13:
                res = _context3.sent;
                x3.push({
                  level: i,
                  userX3: res
                });

              case 15:
                i++;
                _context3.next = 10;
                break;

              case 18:
                elementsX3 = [];
                _cost = this.state.cost / 2;

                for (_i = 0; _i < 12; _i++) {
                  j = _i + 1;
                  downlines = x3[_i].userX3[1].length;
                  elementsX3.push({
                    id: j,
                    number: downlines,
                    key: j,
                    cost: _cost
                  });
                  _cost = _cost * 2;
                }

                x3Exist = [];
                _i2 = 1;

              case 23:
                if (!(_i2 < 13)) {
                  _context3.next = 31;
                  break;
                }

                _context3.next = 26;
                return contract.methods.usersActiveX3Levels(this.state.account, _i2).call();

              case 26:
                _res = _context3.sent;
                x3Exist.push({
                  id: _i2,
                  userX3Exist: _res
                });

              case 28:
                _i2++;
                _context3.next = 23;
                break;

              case 31:
                x3Payload = this.x3Infos(x3Exist, elementsX3);
                this.setState({
                  x3Payload: x3Payload
                }); // Matrix Calls for the X4

                _x4cost = this.state.cost / 2;
                x4Exist = [];
                _i3 = 1;

              case 36:
                if (!(_i3 < 13)) {
                  _context3.next = 45;
                  break;
                }

                _context3.next = 39;
                return contract.methods.usersActiveX6Levels(this.state.account, _i3).call();

              case 39:
                _res2 = _context3.sent;
                x4Exist.push({
                  id: _i3,
                  userX4Exist: _res2,
                  key: _i3,
                  cost: _x4cost
                });
                _x4cost = _x4cost * 2;

              case 42:
                _i3++;
                _context3.next = 36;
                break;

              case 45:
                x6 = [];
                _i4 = 1;

              case 47:
                if (!(_i4 < 13)) {
                  _context3.next = 55;
                  break;
                }

                _context3.next = 50;
                return contract.methods.usersX6Matrix(this.state.account, _i4).call();

              case 50:
                _res3 = _context3.sent;
                x6.push({
                  id: _i4,
                  userX6: _res3
                });

              case 52:
                _i4++;
                _context3.next = 47;
                break;

              case 55:
                x6Payload = this.x3Infos(x4Exist, x6);
                this.setState({
                  x6Payload: x6Payload
                });
                _context3.next = 62;
                break;

              case 59:
                _context3.prev = 59;
                _context3.t0 = _context3["catch"](0);
                window.alert("Something went wrong.. Check: " + _context3.t0);

              case 62:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 59]]);
      }));

      function loadBlockchainData() {
        return _loadBlockchainData.apply(this, arguments);
      }

      return loadBlockchainData;
    }() // Merging X3 quereries into 1 Payload

  }, {
    key: "x3Infos",
    value: function x3Infos(arr1, arr2) {
      return arr1.map(function (item, i) {
        if (item.id === arr2[i].id) {
          return Object.assign({}, item, arr2[i]);
        }
      });
    }
  }]);

  function MatrixSystem(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, MatrixSystem);

    _this = _super.call(this, props);
    _this.state = {
      account: "",
      parnterCount: "",
      cost: ""
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(MatrixSystem, [{
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(_X3MatrixHolder__WEBPACK_IMPORTED_MODULE_8__["default"], {
        struc: this.state.x3Payload,
        account: this.state.account,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 9
        }
      }), __jsx(_X4MatrixHolder__WEBPACK_IMPORTED_MODULE_9__["default"], {
        struc: this.state.x6Payload,
        account: this.state.account,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 9
        }
      }));
    }
  }]);

  return MatrixSystem;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MatrixSystem);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYXRyaXgvTWF0cml4U3lzdGVtLmpzeCJdLCJuYW1lcyI6WyJNYXRyaXhTeXN0ZW0iLCJzZXRTdGF0ZSIsImFjY291bnQiLCJwcm9wcyIsImxvYWRXZWIzIiwibG9hZEJsb2NrY2hhaW5EYXRhIiwidGVzdCIsIndpbmRvdyIsImFsZXJ0IiwieDMiLCJpIiwic3RhdGUiLCJjb250cmFjdCIsIm1ldGhvZHMiLCJ1c2Vyc1gzTWF0cml4IiwiY2FsbCIsInJlcyIsInB1c2giLCJsZXZlbCIsInVzZXJYMyIsIndlYjMiLCJXZWIzIiwiZ2l2ZW5Qcm92aWRlciIsImV0aCIsIkNvbnRyYWN0IiwiQUJJIiwiQUREUkVTUyIsInJlZ2lzdHJhdGlvbkNvc3QiLCJjb3N0cyIsImNvc3QiLCJlbGVtZW50c1gzIiwiX2Nvc3QiLCJqIiwiZG93bmxpbmVzIiwibGVuZ3RoIiwiaWQiLCJudW1iZXIiLCJrZXkiLCJ4M0V4aXN0IiwidXNlcnNBY3RpdmVYM0xldmVscyIsInVzZXJYM0V4aXN0IiwieDNQYXlsb2FkIiwieDNJbmZvcyIsIl94NGNvc3QiLCJ4NEV4aXN0IiwidXNlcnNBY3RpdmVYNkxldmVscyIsInVzZXJYNEV4aXN0IiwieDYiLCJ1c2Vyc1g2TWF0cml4IiwidXNlclg2IiwieDZQYXlsb2FkIiwiYXJyMSIsImFycjIiLCJtYXAiLCJpdGVtIiwiT2JqZWN0IiwiYXNzaWduIiwicGFybnRlckNvdW50IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsWTs7Ozs7Ozs7Ozs7Ozs7QUFHQSxxQkFBS0MsUUFBTCxDQUFjO0FBQUVDLHlCQUFPLEVBQUUsS0FBS0MsS0FBTCxDQUFXRDtBQUF0QixpQkFBZDs7dUJBQ01FLGdFQUFRLEU7Ozs7dUJBRVIsS0FBS0Msa0JBQUwsRTs7O0FBQ05D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bkIsRUFBTCxLQUFZaUIsSUFBSSxDQUFDMUMsQ0FBRCxDQUFKLENBQVF5QixFQUF4QixFQUE0QjtBQUMxQixpQkFBT29CLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JGLElBQWxCLEVBQXdCRixJQUFJLENBQUMxQyxDQUFELENBQTVCLENBQVA7QUFDRDtBQUNGLE9BSk0sQ0FBUDtBQUtEOzs7QUFFRCx3QkFBWVAsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtRLEtBQUwsR0FBYTtBQUNYVCxhQUFPLEVBQUUsRUFERTtBQUVYdUQsa0JBQVksRUFBRSxFQUZIO0FBR1g1QixVQUFJLEVBQUU7QUFISyxLQUFiO0FBRmlCO0FBT2xCOzs7OzZCQUNRO0FBQ1AsYUFDRSxtRUFDRSxNQUFDLHVEQUFEO0FBQ0UsYUFBSyxFQUFFLEtBQUtsQixLQUFMLENBQVc4QixTQURwQjtBQUVFLGVBQU8sRUFBRSxLQUFLOUIsS0FBTCxDQUFXVCxPQUZ0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFLRSxNQUFDLHVEQUFEO0FBQ0UsYUFBSyxFQUFFLEtBQUtTLEtBQUwsQ0FBV3VDLFNBRHBCO0FBRUUsZUFBTyxFQUFFLEtBQUt2QyxLQUFMLENBQVdULE9BRnRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFMRixDQURGO0FBWUQ7Ozs7RUF2SXdCd0QsK0M7O0FBMElaMUQsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLjdhMDdlYTc1NmQ2M2RjMmYwMDkyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBYM01hdHJpeEhvbGRlciBmcm9tIFwiLi9YM01hdHJpeEhvbGRlclwiO1xyXG5pbXBvcnQgWDRNYXRyaXhIb2xkZXIgZnJvbSBcIi4vWDRNYXRyaXhIb2xkZXJcIjtcclxuaW1wb3J0IFdlYjMgZnJvbSBcIndlYjNcIjtcclxuaW1wb3J0IHsgQUJJLCBBRERSRVNTIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2dsb2JhbHNcIjtcclxuaW1wb3J0IHsgbG9hZFdlYjMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvdXRpbGl0eVwiO1xyXG5cclxuY2xhc3MgTWF0cml4U3lzdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBhc3luYyBVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFjY291bnQ6IHRoaXMucHJvcHMuYWNjb3VudCB9KTtcclxuICAgICAgYXdhaXQgbG9hZFdlYjMoKTtcclxuXHJcbiAgICAgIGF3YWl0IHRoaXMubG9hZEJsb2NrY2hhaW5EYXRhKCk7XHJcbiAgICAgIHRlc3QoKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJTb21ldGhpbmcgd2VudCB3cm9uZy4uIENoZWNrOiBcIiArIGVycik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyB0ZXN0KCkge1xyXG4gICAgY29uc3QgeDMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTM7IGkrKykge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLnN0YXRlLmNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAudXNlcnNYM01hdHJpeCh0aGlzLnN0YXRlLmFjY291bnQsIGkpXHJcbiAgICAgICAgLmNhbGwoKTtcclxuICAgICAgeDMucHVzaCh7XHJcbiAgICAgICAgbGV2ZWw6IGksXHJcbiAgICAgICAgdXNlclgzOiByZXMsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgbG9hZEJsb2NrY2hhaW5EYXRhKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgd2ViMyA9IG5ldyBXZWIzKFdlYjMuZ2l2ZW5Qcm92aWRlciB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6ODU0NVwiKTtcclxuICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoQUJJLCBBRERSRVNTKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRyYWN0IH0pO1xyXG4gICAgICBjb25zdCBjb3N0cyA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMucmVnaXN0cmF0aW9uQ29zdCgpLmNhbGwoKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvc3Q6IGNvc3RzIH0pO1xyXG5cclxuICAgICAgLy8gTWF0cml4IENhbGxzIGZvciB0aGUgWDNcclxuICAgICAgY29uc3QgeDMgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMzsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgICAgLnVzZXJzWDNNYXRyaXgodGhpcy5zdGF0ZS5hY2NvdW50LCBpKVxyXG4gICAgICAgICAgLmNhbGwoKTtcclxuICAgICAgICB4My5wdXNoKHtcclxuICAgICAgICAgIGxldmVsOiBpLFxyXG4gICAgICAgICAgdXNlclgzOiByZXMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZWxlbWVudHNYMyA9IFtdO1xyXG4gICAgICB2YXIgX2Nvc3QgPSB0aGlzLnN0YXRlLmNvc3QgLyAyO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpKyspIHtcclxuICAgICAgICBsZXQgaiA9IGkgKyAxO1xyXG5cclxuICAgICAgICBjb25zdCBkb3dubGluZXMgPSB4M1tpXS51c2VyWDNbMV0ubGVuZ3RoO1xyXG4gICAgICAgIGVsZW1lbnRzWDMucHVzaCh7XHJcbiAgICAgICAgICBpZDogaixcclxuICAgICAgICAgIG51bWJlcjogZG93bmxpbmVzLFxyXG4gICAgICAgICAga2V5OiBqLFxyXG4gICAgICAgICAgY29zdDogX2Nvc3QsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgX2Nvc3QgPSBfY29zdCAqIDI7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgeDNFeGlzdCA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDEzOyBpKyspIHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgICAudXNlcnNBY3RpdmVYM0xldmVscyh0aGlzLnN0YXRlLmFjY291bnQsIGkpXHJcbiAgICAgICAgICAuY2FsbCgpO1xyXG4gICAgICAgIHgzRXhpc3QucHVzaCh7XHJcbiAgICAgICAgICBpZDogaSxcclxuICAgICAgICAgIHVzZXJYM0V4aXN0OiByZXMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgeDNQYXlsb2FkID0gdGhpcy54M0luZm9zKHgzRXhpc3QsIGVsZW1lbnRzWDMpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgeDNQYXlsb2FkIH0pO1xyXG5cclxuICAgICAgLy8gTWF0cml4IENhbGxzIGZvciB0aGUgWDRcclxuICAgICAgdmFyIF94NGNvc3QgPSB0aGlzLnN0YXRlLmNvc3QgLyAyO1xyXG4gICAgICBjb25zdCB4NEV4aXN0ID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTM7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAgIC51c2Vyc0FjdGl2ZVg2TGV2ZWxzKHRoaXMuc3RhdGUuYWNjb3VudCwgaSlcclxuICAgICAgICAgIC5jYWxsKCk7XHJcbiAgICAgICAgeDRFeGlzdC5wdXNoKHtcclxuICAgICAgICAgIGlkOiBpLFxyXG4gICAgICAgICAgdXNlclg0RXhpc3Q6IHJlcyxcclxuICAgICAgICAgIGtleTogaSxcclxuICAgICAgICAgIGNvc3Q6IF94NGNvc3QsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgX3g0Y29zdCA9IF94NGNvc3QgKiAyO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHg2ID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTM7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAgIC51c2Vyc1g2TWF0cml4KHRoaXMuc3RhdGUuYWNjb3VudCwgaSlcclxuICAgICAgICAgIC5jYWxsKCk7XHJcbiAgICAgICAgeDYucHVzaCh7XHJcbiAgICAgICAgICBpZDogaSxcclxuICAgICAgICAgIHVzZXJYNjogcmVzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB4NlBheWxvYWQgPSB0aGlzLngzSW5mb3MoeDRFeGlzdCwgeDYpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgeDZQYXlsb2FkIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIlNvbWV0aGluZyB3ZW50IHdyb25nLi4gQ2hlY2s6IFwiICsgZXJyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIE1lcmdpbmcgWDMgcXVlcmVyaWVzIGludG8gMSBQYXlsb2FkXHJcbiAgeDNJbmZvcyhhcnIxLCBhcnIyKSB7XHJcbiAgICByZXR1cm4gYXJyMS5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgaWYgKGl0ZW0uaWQgPT09IGFycjJbaV0uaWQpIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSwgYXJyMltpXSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGFjY291bnQ6IFwiXCIsXHJcbiAgICAgIHBhcm50ZXJDb3VudDogXCJcIixcclxuICAgICAgY29zdDogXCJcIixcclxuICAgIH07XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPFgzTWF0cml4SG9sZGVyXHJcbiAgICAgICAgICBzdHJ1Yz17dGhpcy5zdGF0ZS54M1BheWxvYWR9XHJcbiAgICAgICAgICBhY2NvdW50PXt0aGlzLnN0YXRlLmFjY291bnR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8WDRNYXRyaXhIb2xkZXJcclxuICAgICAgICAgIHN0cnVjPXt0aGlzLnN0YXRlLng2UGF5bG9hZH1cclxuICAgICAgICAgIGFjY291bnQ9e3RoaXMuc3RhdGUuYWNjb3VudH1cclxuICAgICAgICAvPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXRyaXhTeXN0ZW07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=