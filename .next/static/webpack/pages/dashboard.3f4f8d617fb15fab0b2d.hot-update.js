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
                this.test();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYXRyaXgvTWF0cml4U3lzdGVtLmpzeCJdLCJuYW1lcyI6WyJNYXRyaXhTeXN0ZW0iLCJzZXRTdGF0ZSIsImFjY291bnQiLCJwcm9wcyIsImxvYWRXZWIzIiwibG9hZEJsb2NrY2hhaW5EYXRhIiwidGVzdCIsIndpbmRvdyIsImFsZXJ0IiwieDMiLCJpIiwic3RhdGUiLCJjb250cmFjdCIsIm1ldGhvZHMiLCJ1c2Vyc1gzTWF0cml4IiwiY2FsbCIsInJlcyIsInB1c2giLCJsZXZlbCIsInVzZXJYMyIsIndlYjMiLCJXZWIzIiwiZ2l2ZW5Qcm92aWRlciIsImV0aCIsIkNvbnRyYWN0IiwiQUJJIiwiQUREUkVTUyIsInJlZ2lzdHJhdGlvbkNvc3QiLCJjb3N0cyIsImNvc3QiLCJlbGVtZW50c1gzIiwiX2Nvc3QiLCJqIiwiZG93bmxpbmVzIiwibGVuZ3RoIiwiaWQiLCJudW1iZXIiLCJrZXkiLCJ4M0V4aXN0IiwidXNlcnNBY3RpdmVYM0xldmVscyIsInVzZXJYM0V4aXN0IiwieDNQYXlsb2FkIiwieDNJbmZvcyIsIl94NGNvc3QiLCJ4NEV4aXN0IiwidXNlcnNBY3RpdmVYNkxldmVscyIsInVzZXJYNEV4aXN0IiwieDYiLCJ1c2Vyc1g2TWF0cml4IiwidXNlclg2IiwieDZQYXlsb2FkIiwiYXJyMSIsImFycjIiLCJtYXAiLCJpdGVtIiwiT2JqZWN0IiwiYXNzaWduIiwicGFybnRlckNvdW50IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsWTs7Ozs7Ozs7Ozs7Ozs7QUFHQSxxQkFBS0MsUUFBTCxDQUFjO0FBQUVDLHlCQUFPLEVBQUUsS0FBS0MsS0FBTCxDQUFXRDtBQUF0QixpQkFBZDs7dUJBQ01FLGdFQUFRLEU7Ozs7dUJBRVIsS0FBS0Msa0JBQUwsRTs7O0FBQ04s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LENBQUNuQixFQUFMLEtBQVlpQixJQUFJLENBQUMxQyxDQUFELENBQUosQ0FBUXlCLEVBQXhCLEVBQTRCO0FBQzFCLGlCQUFPb0IsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQkYsSUFBbEIsRUFBd0JGLElBQUksQ0FBQzFDLENBQUQsQ0FBNUIsQ0FBUDtBQUNEO0FBQ0YsT0FKTSxDQUFQO0FBS0Q7OztBQUVELHdCQUFZUCxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS1EsS0FBTCxHQUFhO0FBQ1hULGFBQU8sRUFBRSxFQURFO0FBRVh1RCxrQkFBWSxFQUFFLEVBRkg7QUFHWDVCLFVBQUksRUFBRTtBQUhLLEtBQWI7QUFGaUI7QUFPbEI7Ozs7NkJBQ1E7QUFDUCxhQUNFLG1FQUNFLE1BQUMsdURBQUQ7QUFDRSxhQUFLLEVBQUUsS0FBS2xCLEtBQUwsQ0FBVzhCLFNBRHBCO0FBRUUsZUFBTyxFQUFFLEtBQUs5QixLQUFMLENBQVdULE9BRnRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQUtFLE1BQUMsdURBQUQ7QUFDRSxhQUFLLEVBQUUsS0FBS1MsS0FBTCxDQUFXdUMsU0FEcEI7QUFFRSxlQUFPLEVBQUUsS0FBS3ZDLEtBQUwsQ0FBV1QsT0FGdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUxGLENBREY7QUFZRDs7OztFQXZJd0J3RCwrQzs7QUEwSVoxRCwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQuM2Y0ZjhkNjE3ZmIxNWZhYjBiMmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFgzTWF0cml4SG9sZGVyIGZyb20gXCIuL1gzTWF0cml4SG9sZGVyXCI7XHJcbmltcG9ydCBYNE1hdHJpeEhvbGRlciBmcm9tIFwiLi9YNE1hdHJpeEhvbGRlclwiO1xyXG5pbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xyXG5pbXBvcnQgeyBBQkksIEFERFJFU1MgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZ2xvYmFsc1wiO1xyXG5pbXBvcnQgeyBsb2FkV2ViMyB9IGZyb20gXCIuLi8uLi91dGlscy91dGlsaXR5XCI7XHJcblxyXG5jbGFzcyBNYXRyaXhTeXN0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGFzeW5jIFVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYWNjb3VudDogdGhpcy5wcm9wcy5hY2NvdW50IH0pO1xyXG4gICAgICBhd2FpdCBsb2FkV2ViMygpO1xyXG5cclxuICAgICAgYXdhaXQgdGhpcy5sb2FkQmxvY2tjaGFpbkRhdGEoKTtcclxuICAgICAgdGhpcy50ZXN0KCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiU29tZXRoaW5nIHdlbnQgd3JvbmcuLiBDaGVjazogXCIgKyBlcnIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgdGVzdCgpIHtcclxuICAgIGNvbnN0IHgzID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDEzOyBpKyspIHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5zdGF0ZS5jb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgLnVzZXJzWDNNYXRyaXgodGhpcy5zdGF0ZS5hY2NvdW50LCBpKVxyXG4gICAgICAgIC5jYWxsKCk7XHJcbiAgICAgIHgzLnB1c2goe1xyXG4gICAgICAgIGxldmVsOiBpLFxyXG4gICAgICAgIHVzZXJYMzogcmVzLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGxvYWRCbG9ja2NoYWluRGF0YSgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyhXZWIzLmdpdmVuUHJvdmlkZXIgfHwgXCJodHRwOi8vbG9jYWxob3N0Ojg1NDVcIik7XHJcbiAgICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KEFCSSwgQUREUkVTUyk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb250cmFjdCB9KTtcclxuICAgICAgY29uc3QgY29zdHMgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLnJlZ2lzdHJhdGlvbkNvc3QoKS5jYWxsKCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3N0OiBjb3N0cyB9KTtcclxuXHJcbiAgICAgIC8vIE1hdHJpeCBDYWxscyBmb3IgdGhlIFgzXHJcbiAgICAgIGNvbnN0IHgzID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTM7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAgIC51c2Vyc1gzTWF0cml4KHRoaXMuc3RhdGUuYWNjb3VudCwgaSlcclxuICAgICAgICAgIC5jYWxsKCk7XHJcbiAgICAgICAgeDMucHVzaCh7XHJcbiAgICAgICAgICBsZXZlbDogaSxcclxuICAgICAgICAgIHVzZXJYMzogcmVzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGVsZW1lbnRzWDMgPSBbXTtcclxuICAgICAgdmFyIF9jb3N0ID0gdGhpcy5zdGF0ZS5jb3N0IC8gMjtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGogPSBpICsgMTtcclxuXHJcbiAgICAgICAgY29uc3QgZG93bmxpbmVzID0geDNbaV0udXNlclgzWzFdLmxlbmd0aDtcclxuICAgICAgICBlbGVtZW50c1gzLnB1c2goe1xyXG4gICAgICAgICAgaWQ6IGosXHJcbiAgICAgICAgICBudW1iZXI6IGRvd25saW5lcyxcclxuICAgICAgICAgIGtleTogaixcclxuICAgICAgICAgIGNvc3Q6IF9jb3N0LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIF9jb3N0ID0gX2Nvc3QgKiAyO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHgzRXhpc3QgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMzsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgICAgLnVzZXJzQWN0aXZlWDNMZXZlbHModGhpcy5zdGF0ZS5hY2NvdW50LCBpKVxyXG4gICAgICAgICAgLmNhbGwoKTtcclxuICAgICAgICB4M0V4aXN0LnB1c2goe1xyXG4gICAgICAgICAgaWQ6IGksXHJcbiAgICAgICAgICB1c2VyWDNFeGlzdDogcmVzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHgzUGF5bG9hZCA9IHRoaXMueDNJbmZvcyh4M0V4aXN0LCBlbGVtZW50c1gzKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHgzUGF5bG9hZCB9KTtcclxuXHJcbiAgICAgIC8vIE1hdHJpeCBDYWxscyBmb3IgdGhlIFg0XHJcbiAgICAgIHZhciBfeDRjb3N0ID0gdGhpcy5zdGF0ZS5jb3N0IC8gMjtcclxuICAgICAgY29uc3QgeDRFeGlzdCA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDEzOyBpKyspIHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgICAudXNlcnNBY3RpdmVYNkxldmVscyh0aGlzLnN0YXRlLmFjY291bnQsIGkpXHJcbiAgICAgICAgICAuY2FsbCgpO1xyXG4gICAgICAgIHg0RXhpc3QucHVzaCh7XHJcbiAgICAgICAgICBpZDogaSxcclxuICAgICAgICAgIHVzZXJYNEV4aXN0OiByZXMsXHJcbiAgICAgICAgICBrZXk6IGksXHJcbiAgICAgICAgICBjb3N0OiBfeDRjb3N0LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIF94NGNvc3QgPSBfeDRjb3N0ICogMjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB4NiA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDEzOyBpKyspIHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgICAudXNlcnNYNk1hdHJpeCh0aGlzLnN0YXRlLmFjY291bnQsIGkpXHJcbiAgICAgICAgICAuY2FsbCgpO1xyXG4gICAgICAgIHg2LnB1c2goe1xyXG4gICAgICAgICAgaWQ6IGksXHJcbiAgICAgICAgICB1c2VyWDY6IHJlcyxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgeDZQYXlsb2FkID0gdGhpcy54M0luZm9zKHg0RXhpc3QsIHg2KTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHg2UGF5bG9hZCB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJTb21ldGhpbmcgd2VudCB3cm9uZy4uIENoZWNrOiBcIiArIGVycik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBNZXJnaW5nIFgzIHF1ZXJlcmllcyBpbnRvIDEgUGF5bG9hZFxyXG4gIHgzSW5mb3MoYXJyMSwgYXJyMikge1xyXG4gICAgcmV0dXJuIGFycjEubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgIGlmIChpdGVtLmlkID09PSBhcnIyW2ldLmlkKSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIGFycjJbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBhY2NvdW50OiBcIlwiLFxyXG4gICAgICBwYXJudGVyQ291bnQ6IFwiXCIsXHJcbiAgICAgIGNvc3Q6IFwiXCIsXHJcbiAgICB9O1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxYM01hdHJpeEhvbGRlclxyXG4gICAgICAgICAgc3RydWM9e3RoaXMuc3RhdGUueDNQYXlsb2FkfVxyXG4gICAgICAgICAgYWNjb3VudD17dGhpcy5zdGF0ZS5hY2NvdW50fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFg0TWF0cml4SG9sZGVyXHJcbiAgICAgICAgICBzdHJ1Yz17dGhpcy5zdGF0ZS54NlBheWxvYWR9XHJcbiAgICAgICAgICBhY2NvdW50PXt0aGlzLnN0YXRlLmFjY291bnR9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWF0cml4U3lzdGVtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9