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
                this.loadX3();
                this.loadX4();
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                window.alert("Something went wrong.. Check: " + _context.t0);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 10]]);
      }));

      function UNSAFE_componentWillMount() {
        return _UNSAFE_componentWillMount.apply(this, arguments);
      }

      return UNSAFE_componentWillMount;
    }()
  }, {
    key: "loadX3",
    value: function () {
      var _loadX = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var x3, i, res, elementsX3, _cost, _i, j, downlines, x3Exist, _i2, _res, x3Payload;

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

              case 15:
                if (!(_i2 < 13)) {
                  _context2.next = 23;
                  break;
                }

                _context2.next = 18;
                return this.state.contract.methods.usersActiveX3Levels(this.state.account, _i2).call();

              case 18:
                _res = _context2.sent;
                x3Exist.push({
                  id: _i2,
                  userX3Exist: _res
                });

              case 20:
                _i2++;
                _context2.next = 15;
                break;

              case 23:
                x3Payload = this.x3Infos(x3Exist, elementsX3);
                this.setState({
                  x3Payload: x3Payload
                });

              case 25:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function loadX3() {
        return _loadX.apply(this, arguments);
      }

      return loadX3;
    }()
  }, {
    key: "loadX4",
    value: function () {
      var _loadX2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _x4cost, x4Exist, i, res, x6, _i3, _res2, x6Payload;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _x4cost = this.state.cost / 2;
                x4Exist = [];
                i = 1;

              case 3:
                if (!(i < 13)) {
                  _context3.next = 12;
                  break;
                }

                _context3.next = 6;
                return this.state.contract.methods.usersActiveX6Levels(this.state.account, i).call();

              case 6:
                res = _context3.sent;
                x4Exist.push({
                  id: i,
                  userX4Exist: res,
                  key: i,
                  cost: _x4cost
                });
                _x4cost = _x4cost * 2;

              case 9:
                i++;
                _context3.next = 3;
                break;

              case 12:
                x6 = [];
                _i3 = 1;

              case 14:
                if (!(_i3 < 13)) {
                  _context3.next = 22;
                  break;
                }

                _context3.next = 17;
                return this.state.contract.methods.usersX6Matrix(this.state.account, _i3).call();

              case 17:
                _res2 = _context3.sent;
                x6.push({
                  id: _i3,
                  userX6: _res2
                });

              case 19:
                _i3++;
                _context3.next = 14;
                break;

              case 22:
                x6Payload = this.x3Infos(x4Exist, x6);
                this.setState({
                  x6Payload: x6Payload
                });

              case 24:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function loadX4() {
        return _loadX2.apply(this, arguments);
      }

      return loadX4;
    }()
  }, {
    key: "loadBlockchainData",
    value: function () {
      var _loadBlockchainData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var web3, contract, costs;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                web3 = new web3__WEBPACK_IMPORTED_MODULE_10___default.a(web3__WEBPACK_IMPORTED_MODULE_10___default.a.givenProvider || "http://localhost:8545");
                contract = new web3.eth.Contract(_utils_globals__WEBPACK_IMPORTED_MODULE_11__["ABI"], _utils_globals__WEBPACK_IMPORTED_MODULE_11__["ADDRESS"]);
                this.setState({
                  contract: contract
                });
                _context4.next = 6;
                return contract.methods.registrationCost().call();

              case 6:
                costs = _context4.sent;
                this.setState({
                  cost: costs
                });
                _context4.next = 13;
                break;

              case 10:
                _context4.prev = 10;
                _context4.t0 = _context4["catch"](0);
                window.alert("Something went wrong.. Check: " + _context4.t0);

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 10]]);
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
          lineNumber: 122,
          columnNumber: 9
        }
      }), __jsx(_X4MatrixHolder__WEBPACK_IMPORTED_MODULE_9__["default"], {
        struc: this.state.x6Payload,
        account: this.state.account,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYXRyaXgvTWF0cml4U3lzdGVtLmpzeCJdLCJuYW1lcyI6WyJNYXRyaXhTeXN0ZW0iLCJzZXRTdGF0ZSIsImFjY291bnQiLCJwcm9wcyIsImxvYWRXZWIzIiwibG9hZEJsb2NrY2hhaW5EYXRhIiwibG9hZFgzIiwibG9hZFg0Iiwid2luZG93IiwiYWxlcnQiLCJ4MyIsImkiLCJzdGF0ZSIsImNvbnRyYWN0IiwibWV0aG9kcyIsInVzZXJzWDNNYXRyaXgiLCJjYWxsIiwicmVzIiwicHVzaCIsImxldmVsIiwidXNlclgzIiwiZWxlbWVudHNYMyIsIl9jb3N0IiwiY29zdCIsImoiLCJkb3dubGluZXMiLCJsZW5ndGgiLCJpZCIsIm51bWJlciIsImtleSIsIngzRXhpc3QiLCJ1c2Vyc0FjdGl2ZVgzTGV2ZWxzIiwidXNlclgzRXhpc3QiLCJ4M1BheWxvYWQiLCJ4M0luZm9zIiwiX3g0Y29zdCIsIng0RXhpc3QiLCJ1c2Vyc0FjdGl2ZVg2TGV2ZWxzIiwidXNlclg0RXhpc3QiLCJ4NiIsInVzZXJzWDZNYXRyaXgiLCJ1c2VyWDYiLCJ4NlBheWxvYWQiLCJ3ZWIzIiwiV2ViMyIsImdpdmVuUHJvdmlkZXIiLCJldGgiLCJDb250cmFjdCIsIkFCSSIsIkFERFJFU1MiLCJyZWdpc3RyYXRpb25Db3N0IiwiY29zdHMiLCJhcnIxIiwiYXJyMiIsIm1hcCIsIml0ZW0iLCJPYmplY3QiLCJhc3NpZ24iLCJwYXJudGVyQ291bnQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxZOzs7Ozs7Ozs7Ozs7OztBQUdBLHFCQUFLQyxRQUFMLENBQWM7QUFBRUMseUJBQU8sRUFBRSxLQUFLQyxLQUFMLENBQVdEO0FBQXRCLGlCQUFkOzt1QkFDTUUsZ0VBQVEsRTs7Ozt1QkFDUixLQUFLQyxrQkFB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RUQsd0JBQVlSLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLUyxLQUFMLEdBQWE7QUFDWFYsYUFBTyxFQUFFLEVBREU7QUFFWHdELGtCQUFZLEVBQUUsRUFGSDtBQUdYbkMsVUFBSSxFQUFFO0FBSEssS0FBYjtBQUZpQjtBQU9sQjs7Ozs2QkFDUTtBQUNQLGFBQ0UsbUVBQ0UsTUFBQyx1REFBRDtBQUNFLGFBQUssRUFBRSxLQUFLWCxLQUFMLENBQVdxQixTQURwQjtBQUVFLGVBQU8sRUFBRSxLQUFLckIsS0FBTCxDQUFXVixPQUZ0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFLRSxNQUFDLHVEQUFEO0FBQ0UsYUFBSyxFQUFFLEtBQUtVLEtBQUwsQ0FBVzhCLFNBRHBCO0FBRUUsZUFBTyxFQUFFLEtBQUs5QixLQUFMLENBQVdWLE9BRnRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFMRixDQURGO0FBWUQ7Ozs7RUE1SHdCeUQsK0M7O0FBK0haM0QsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLjMwOTAyMGQ4OWQyZWQ0OWVmMjZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBYM01hdHJpeEhvbGRlciBmcm9tIFwiLi9YM01hdHJpeEhvbGRlclwiO1xyXG5pbXBvcnQgWDRNYXRyaXhIb2xkZXIgZnJvbSBcIi4vWDRNYXRyaXhIb2xkZXJcIjtcclxuaW1wb3J0IFdlYjMgZnJvbSBcIndlYjNcIjtcclxuaW1wb3J0IHsgQUJJLCBBRERSRVNTIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2dsb2JhbHNcIjtcclxuaW1wb3J0IHsgbG9hZFdlYjMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvdXRpbGl0eVwiO1xyXG5cclxuY2xhc3MgTWF0cml4U3lzdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBhc3luYyBVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFjY291bnQ6IHRoaXMucHJvcHMuYWNjb3VudCB9KTtcclxuICAgICAgYXdhaXQgbG9hZFdlYjMoKTtcclxuICAgICAgYXdhaXQgdGhpcy5sb2FkQmxvY2tjaGFpbkRhdGEoKTtcclxuICAgICAgdGhpcy5sb2FkWDMoKTtcclxuICAgICAgdGhpcy5sb2FkWDQoKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJTb21ldGhpbmcgd2VudCB3cm9uZy4uIENoZWNrOiBcIiArIGVycik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBsb2FkWDMoKSB7XHJcbiAgICBjb25zdCB4MyA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMzsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuc3RhdGUuY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgIC51c2Vyc1gzTWF0cml4KHRoaXMuc3RhdGUuYWNjb3VudCwgaSlcclxuICAgICAgICAuY2FsbCgpO1xyXG4gICAgICB4My5wdXNoKHtcclxuICAgICAgICBsZXZlbDogaSxcclxuICAgICAgICB1c2VyWDM6IHJlcyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBlbGVtZW50c1gzID0gW107XHJcbiAgICB2YXIgX2Nvc3QgPSB0aGlzLnN0YXRlLmNvc3QgLyAyO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XHJcbiAgICAgIGxldCBqID0gaSArIDE7XHJcblxyXG4gICAgICBjb25zdCBkb3dubGluZXMgPSB4M1tpXS51c2VyWDNbMV0ubGVuZ3RoO1xyXG4gICAgICBlbGVtZW50c1gzLnB1c2goe1xyXG4gICAgICAgIGlkOiBqLFxyXG4gICAgICAgIG51bWJlcjogZG93bmxpbmVzLFxyXG4gICAgICAgIGtleTogaixcclxuICAgICAgICBjb3N0OiBfY29zdCxcclxuICAgICAgfSk7XHJcbiAgICAgIF9jb3N0ID0gX2Nvc3QgKiAyO1xyXG4gICAgfVxyXG4gICAgY29uc3QgeDNFeGlzdCA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMzsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuc3RhdGUuY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgIC51c2Vyc0FjdGl2ZVgzTGV2ZWxzKHRoaXMuc3RhdGUuYWNjb3VudCwgaSlcclxuICAgICAgICAuY2FsbCgpO1xyXG4gICAgICB4M0V4aXN0LnB1c2goe1xyXG4gICAgICAgIGlkOiBpLFxyXG4gICAgICAgIHVzZXJYM0V4aXN0OiByZXMsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgeDNQYXlsb2FkID0gdGhpcy54M0luZm9zKHgzRXhpc3QsIGVsZW1lbnRzWDMpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHgzUGF5bG9hZCB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGxvYWRYNCgpIHtcclxuICAgIHZhciBfeDRjb3N0ID0gdGhpcy5zdGF0ZS5jb3N0IC8gMjtcclxuICAgIGNvbnN0IHg0RXhpc3QgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTM7IGkrKykge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLnN0YXRlLmNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAudXNlcnNBY3RpdmVYNkxldmVscyh0aGlzLnN0YXRlLmFjY291bnQsIGkpXHJcbiAgICAgICAgLmNhbGwoKTtcclxuICAgICAgeDRFeGlzdC5wdXNoKHtcclxuICAgICAgICBpZDogaSxcclxuICAgICAgICB1c2VyWDRFeGlzdDogcmVzLFxyXG4gICAgICAgIGtleTogaSxcclxuICAgICAgICBjb3N0OiBfeDRjb3N0LFxyXG4gICAgICB9KTtcclxuICAgICAgX3g0Y29zdCA9IF94NGNvc3QgKiAyO1xyXG4gICAgfVxyXG4gICAgY29uc3QgeDYgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTM7IGkrKykge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLnN0YXRlLmNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAudXNlcnNYNk1hdHJpeCh0aGlzLnN0YXRlLmFjY291bnQsIGkpXHJcbiAgICAgICAgLmNhbGwoKTtcclxuICAgICAgeDYucHVzaCh7XHJcbiAgICAgICAgaWQ6IGksXHJcbiAgICAgICAgdXNlclg2OiByZXMsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHg2UGF5bG9hZCA9IHRoaXMueDNJbmZvcyh4NEV4aXN0LCB4Nik7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgeDZQYXlsb2FkIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgbG9hZEJsb2NrY2hhaW5EYXRhKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgd2ViMyA9IG5ldyBXZWIzKFdlYjMuZ2l2ZW5Qcm92aWRlciB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6ODU0NVwiKTtcclxuICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoQUJJLCBBRERSRVNTKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRyYWN0IH0pO1xyXG4gICAgICBjb25zdCBjb3N0cyA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMucmVnaXN0cmF0aW9uQ29zdCgpLmNhbGwoKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvc3Q6IGNvc3RzIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIlNvbWV0aGluZyB3ZW50IHdyb25nLi4gQ2hlY2s6IFwiICsgZXJyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIE1lcmdpbmcgWDMgcXVlcmVyaWVzIGludG8gMSBQYXlsb2FkXHJcbiAgeDNJbmZvcyhhcnIxLCBhcnIyKSB7XHJcbiAgICByZXR1cm4gYXJyMS5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgaWYgKGl0ZW0uaWQgPT09IGFycjJbaV0uaWQpIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSwgYXJyMltpXSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGFjY291bnQ6IFwiXCIsXHJcbiAgICAgIHBhcm50ZXJDb3VudDogXCJcIixcclxuICAgICAgY29zdDogXCJcIixcclxuICAgIH07XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPFgzTWF0cml4SG9sZGVyXHJcbiAgICAgICAgICBzdHJ1Yz17dGhpcy5zdGF0ZS54M1BheWxvYWR9XHJcbiAgICAgICAgICBhY2NvdW50PXt0aGlzLnN0YXRlLmFjY291bnR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8WDRNYXRyaXhIb2xkZXJcclxuICAgICAgICAgIHN0cnVjPXt0aGlzLnN0YXRlLng2UGF5bG9hZH1cclxuICAgICAgICAgIGFjY291bnQ9e3RoaXMuc3RhdGUuYWNjb3VudH1cclxuICAgICAgICAvPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXRyaXhTeXN0ZW07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=