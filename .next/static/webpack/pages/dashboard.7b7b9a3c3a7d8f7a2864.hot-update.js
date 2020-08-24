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
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                window.alert("Something went wrong.. Check: " + _context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
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
        var web3, contract, costs, x3, i, res, elementsX3, _cost, _i, j, downlines, x3Exist, _i2, _res, x3Payload, _x4cost, x4Exist, _i3, _res2, x6, _i4, _res3, x6Payload;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                web3 = new web3__WEBPACK_IMPORTED_MODULE_10___default.a(web3__WEBPACK_IMPORTED_MODULE_10___default.a.givenProvider || "http://localhost:8545");
                contract = new web3.eth.Contract(_utils_globals__WEBPACK_IMPORTED_MODULE_11__["ABI"], _utils_globals__WEBPACK_IMPORTED_MODULE_11__["ADDRESS"]);
                this.setState({
                  contract: contract
                });
                _context2.next = 6;
                return contract.methods.registrationCost().call();

              case 6:
                costs = _context2.sent;
                this.setState({
                  cost: costs
                }); // Matrix Calls for the X3

                x3 = [];
                i = 1;

              case 10:
                if (!(i < 13)) {
                  _context2.next = 18;
                  break;
                }

                _context2.next = 13;
                return contract.methods.usersX3Matrix(this.state.account, i).call();

              case 13:
                res = _context2.sent;
                x3.push({
                  level: i,
                  userX3: res
                });

              case 15:
                i++;
                _context2.next = 10;
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
                  _context2.next = 31;
                  break;
                }

                _context2.next = 26;
                return contract.methods.usersActiveX3Levels(this.state.account, _i2).call();

              case 26:
                _res = _context2.sent;
                x3Exist.push({
                  id: _i2,
                  userX3Exist: _res
                });

              case 28:
                _i2++;
                _context2.next = 23;
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
                  _context2.next = 45;
                  break;
                }

                _context2.next = 39;
                return contract.methods.usersActiveX6Levels(this.state.account, _i3).call();

              case 39:
                _res2 = _context2.sent;
                x4Exist.push({
                  id: _i3,
                  userX4Exist: _res2,
                  key: _i3,
                  cost: _x4cost
                });
                _x4cost = _x4cost * 2;

              case 42:
                _i3++;
                _context2.next = 36;
                break;

              case 45:
                x6 = [];
                _i4 = 1;

              case 47:
                if (!(_i4 < 13)) {
                  _context2.next = 55;
                  break;
                }

                _context2.next = 50;
                return contract.methods.usersX6Matrix(this.state.account, _i4).call();

              case 50:
                _res3 = _context2.sent;
                x6.push({
                  id: _i4,
                  userX6: _res3
                });

              case 52:
                _i4++;
                _context2.next = 47;
                break;

              case 55:
                x6Payload = this.x3Infos(x4Exist, x6);
                this.setState({
                  x6Payload: x6Payload
                });
                _context2.next = 62;
                break;

              case 59:
                _context2.prev = 59;
                _context2.t0 = _context2["catch"](0);
                window.alert("Something went wrong.. Check: " + _context2.t0);

              case 62:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 59]]);
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
          lineNumber: 118,
          columnNumber: 9
        }
      }), __jsx(_X4MatrixHolder__WEBPACK_IMPORTED_MODULE_9__["default"], {
        struc: this.state.x6Payload,
        account: this.state.account,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYXRyaXgvTWF0cml4U3lzdGVtLmpzeCJdLCJuYW1lcyI6WyJNYXRyaXhTeXN0ZW0iLCJzZXRTdGF0ZSIsImFjY291bnQiLCJwcm9wcyIsImxvYWRXZWIzIiwibG9hZEJsb2NrY2hhaW5EYXRhIiwid2luZG93IiwiYWxlcnQiLCJ3ZWIzIiwiV2ViMyIsImdpdmVuUHJvdmlkZXIiLCJjb250cmFjdCIsImV0aCIsIkNvbnRyYWN0IiwiQUJJIiwiQUREUkVTUyIsIm1ldGhvZHMiLCJyZWdpc3RyYXRpb25Db3N0IiwiY2FsbCIsImNvc3RzIiwiY29zdCIsIngzIiwiaSIsInVzZXJzWDNNYXRyaXgiLCJzdGF0ZSIsInJlcyIsInB1c2giLCJsZXZlbCIsInVzZXJYMyIsImVsZW1lbnRzWDMiLCJfY29zdCIsImoiLCJkb3dubGluZXMiLCJsZW5ndGgiLCJpZCIsIm51bWJlciIsImtleSIsIngzRXhpc3QiLCJ1c2Vyc0FjdGl2ZVgzTGV2ZWxzIiwidXNlclgzRXhpc3QiLCJ4M1BheWxvYWQiLCJ4M0luZm9zIiwiX3g0Y29zdCIsIng0RXhpc3QiLCJ1c2Vyc0FjdGl2ZVg2TGV2ZWxzIiwidXNlclg0RXhpc3QiLCJ4NiIsInVzZXJzWDZNYXRyaXgiLCJ1c2VyWDYiLCJ4NlBheWxvYWQiLCJhcnIxIiwiYXJyMiIsIm1hcCIsIml0ZW0iLCJPYmplY3QiLCJhc3NpZ24iLCJwYXJudGVyQ291bnQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxZOzs7Ozs7Ozs7Ozs7OztBQUdBLHFCQUFLQyxRQUFMLENBQWM7QUFBRUMseUJBQU8sRUFBRSxLQUFLQyxLQUFMLENBQVdEO0FBQXRCLGlCQUFkOzt1QkFDTUUsZ0VBQVEsRTs7Ozt1QkFDUixLQUFLQyxrQkFBTCxFOzs7Ozs7Ozs7QUFFTkMs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NkJBQ1E7QUFDUCxhQUNFLG1FQUNFLE1BQUMsdURBQUQ7QUFDRSxhQUFLLEVBQUUsS0FBS0ksS0FBTCxDQUFXZ0IsU0FEcEI7QUFFRSxlQUFPLEVBQUUsS0FBS2hCLEtBQUwsQ0FBV3RCLE9BRnRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQUtFLE1BQUMsdURBQUQ7QUFDRSxhQUFLLEVBQUUsS0FBS3NCLEtBQUwsQ0FBV3lCLFNBRHBCO0FBRUUsZUFBTyxFQUFFLEtBQUt6QixLQUFMLENBQVd0QixPQUZ0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTEYsQ0FERjtBQVlEOzs7O0VBeEh3QnVELCtDOztBQTJIWnpELDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC43YjdiOWEzYzNhN2Q4ZjdhMjg2NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgWDNNYXRyaXhIb2xkZXIgZnJvbSBcIi4vWDNNYXRyaXhIb2xkZXJcIjtcclxuaW1wb3J0IFg0TWF0cml4SG9sZGVyIGZyb20gXCIuL1g0TWF0cml4SG9sZGVyXCI7XHJcbmltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCI7XHJcbmltcG9ydCB7IEFCSSwgQUREUkVTUyB9IGZyb20gXCIuLi8uLi91dGlscy9nbG9iYWxzXCI7XHJcbmltcG9ydCB7IGxvYWRXZWIzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3V0aWxpdHlcIjtcclxuXHJcbmNsYXNzIE1hdHJpeFN5c3RlbSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgYXN5bmMgVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY2NvdW50OiB0aGlzLnByb3BzLmFjY291bnQgfSk7XHJcbiAgICAgIGF3YWl0IGxvYWRXZWIzKCk7XHJcbiAgICAgIGF3YWl0IHRoaXMubG9hZEJsb2NrY2hhaW5EYXRhKCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiU29tZXRoaW5nIHdlbnQgd3JvbmcuLiBDaGVjazogXCIgKyBlcnIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgbG9hZEJsb2NrY2hhaW5EYXRhKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgd2ViMyA9IG5ldyBXZWIzKFdlYjMuZ2l2ZW5Qcm92aWRlciB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6ODU0NVwiKTtcclxuICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoQUJJLCBBRERSRVNTKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRyYWN0IH0pO1xyXG4gICAgICBjb25zdCBjb3N0cyA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMucmVnaXN0cmF0aW9uQ29zdCgpLmNhbGwoKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvc3Q6IGNvc3RzIH0pO1xyXG5cclxuICAgICAgLy8gTWF0cml4IENhbGxzIGZvciB0aGUgWDNcclxuICAgICAgY29uc3QgeDMgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMzsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgICAgLnVzZXJzWDNNYXRyaXgodGhpcy5zdGF0ZS5hY2NvdW50LCBpKVxyXG4gICAgICAgICAgLmNhbGwoKTtcclxuICAgICAgICB4My5wdXNoKHtcclxuICAgICAgICAgIGxldmVsOiBpLFxyXG4gICAgICAgICAgdXNlclgzOiByZXMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZWxlbWVudHNYMyA9IFtdO1xyXG4gICAgICB2YXIgX2Nvc3QgPSB0aGlzLnN0YXRlLmNvc3QgLyAyO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpKyspIHtcclxuICAgICAgICBsZXQgaiA9IGkgKyAxO1xyXG5cclxuICAgICAgICBjb25zdCBkb3dubGluZXMgPSB4M1tpXS51c2VyWDNbMV0ubGVuZ3RoO1xyXG4gICAgICAgIGVsZW1lbnRzWDMucHVzaCh7XHJcbiAgICAgICAgICBpZDogaixcclxuICAgICAgICAgIG51bWJlcjogZG93bmxpbmVzLFxyXG4gICAgICAgICAga2V5OiBqLFxyXG4gICAgICAgICAgY29zdDogX2Nvc3QsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgX2Nvc3QgPSBfY29zdCAqIDI7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgeDNFeGlzdCA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDEzOyBpKyspIHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgICAudXNlcnNBY3RpdmVYM0xldmVscyh0aGlzLnN0YXRlLmFjY291bnQsIGkpXHJcbiAgICAgICAgICAuY2FsbCgpO1xyXG4gICAgICAgIHgzRXhpc3QucHVzaCh7XHJcbiAgICAgICAgICBpZDogaSxcclxuICAgICAgICAgIHVzZXJYM0V4aXN0OiByZXMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgeDNQYXlsb2FkID0gdGhpcy54M0luZm9zKHgzRXhpc3QsIGVsZW1lbnRzWDMpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgeDNQYXlsb2FkIH0pO1xyXG5cclxuICAgICAgLy8gTWF0cml4IENhbGxzIGZvciB0aGUgWDRcclxuICAgICAgdmFyIF94NGNvc3QgPSB0aGlzLnN0YXRlLmNvc3QgLyAyO1xyXG4gICAgICBjb25zdCB4NEV4aXN0ID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTM7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAgIC51c2Vyc0FjdGl2ZVg2TGV2ZWxzKHRoaXMuc3RhdGUuYWNjb3VudCwgaSlcclxuICAgICAgICAgIC5jYWxsKCk7XHJcbiAgICAgICAgeDRFeGlzdC5wdXNoKHtcclxuICAgICAgICAgIGlkOiBpLFxyXG4gICAgICAgICAgdXNlclg0RXhpc3Q6IHJlcyxcclxuICAgICAgICAgIGtleTogaSxcclxuICAgICAgICAgIGNvc3Q6IF94NGNvc3QsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgX3g0Y29zdCA9IF94NGNvc3QgKiAyO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHg2ID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTM7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAgIC51c2Vyc1g2TWF0cml4KHRoaXMuc3RhdGUuYWNjb3VudCwgaSlcclxuICAgICAgICAgIC5jYWxsKCk7XHJcbiAgICAgICAgeDYucHVzaCh7XHJcbiAgICAgICAgICBpZDogaSxcclxuICAgICAgICAgIHVzZXJYNjogcmVzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB4NlBheWxvYWQgPSB0aGlzLngzSW5mb3MoeDRFeGlzdCwgeDYpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgeDZQYXlsb2FkIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIlNvbWV0aGluZyB3ZW50IHdyb25nLi4gQ2hlY2s6IFwiICsgZXJyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIE1lcmdpbmcgWDMgcXVlcmVyaWVzIGludG8gMSBQYXlsb2FkXHJcbiAgeDNJbmZvcyhhcnIxLCBhcnIyKSB7XHJcbiAgICByZXR1cm4gYXJyMS5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgaWYgKGl0ZW0uaWQgPT09IGFycjJbaV0uaWQpIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSwgYXJyMltpXSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGFjY291bnQ6IFwiXCIsXHJcbiAgICAgIHBhcm50ZXJDb3VudDogXCJcIixcclxuICAgICAgY29zdDogXCJcIixcclxuICAgIH07XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPFgzTWF0cml4SG9sZGVyXHJcbiAgICAgICAgICBzdHJ1Yz17dGhpcy5zdGF0ZS54M1BheWxvYWR9XHJcbiAgICAgICAgICBhY2NvdW50PXt0aGlzLnN0YXRlLmFjY291bnR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8WDRNYXRyaXhIb2xkZXJcclxuICAgICAgICAgIHN0cnVjPXt0aGlzLnN0YXRlLng2UGF5bG9hZH1cclxuICAgICAgICAgIGFjY291bnQ9e3RoaXMuc3RhdGUuYWNjb3VudH1cclxuICAgICAgICAvPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXRyaXhTeXN0ZW07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=