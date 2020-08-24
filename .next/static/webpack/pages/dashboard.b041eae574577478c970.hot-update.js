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
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
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

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "loadBlockchainData",
    value: function () {
      var _loadBlockchainData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var web3, contract, costs;
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
                });
                _context2.next = 13;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](0);
                window.alert("Something went wrong.. Check: " + _context2.t0);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 10]]);
      }));

      function loadBlockchainData() {
        return _loadBlockchainData.apply(this, arguments);
      }

      return loadBlockchainData;
    }() // Merging Matrix quereries into 1 Payload

  }, {
    key: "x3Infos",
    value: function x3Infos(arr1, arr2) {
      return arr1.map(function (item, i) {
        if (item.id === arr2[i].id) {
          return Object.assign({}, item, arr2[i]);
        }
      });
    } // Matrix Functions

  }, {
    key: "loadX3",
    value: function () {
      var _loadX = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var x3, i, res, elementsX3, _cost, _i, j, downlines, x3Exist, _i2, _res, x3Payload;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                x3 = [];
                i = 1;

              case 3:
                if (!(i < 13)) {
                  _context3.next = 11;
                  break;
                }

                _context3.next = 6;
                return this.state.contract.methods.usersX3Matrix(this.state.account, i).call();

              case 6:
                res = _context3.sent;
                x3.push({
                  level: i,
                  userX3: res
                });

              case 8:
                i++;
                _context3.next = 3;
                break;

              case 11:
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

              case 16:
                if (!(_i2 < 13)) {
                  _context3.next = 24;
                  break;
                }

                _context3.next = 19;
                return this.state.contract.methods.usersActiveX3Levels(this.state.account, _i2).call();

              case 19:
                _res = _context3.sent;
                x3Exist.push({
                  id: _i2,
                  userX3Exist: _res
                });

              case 21:
                _i2++;
                _context3.next = 16;
                break;

              case 24:
                x3Payload = this.x3Infos(x3Exist, elementsX3);
                this.setState({
                  x3Payload: x3Payload
                });
                _context3.next = 31;
                break;

              case 28:
                _context3.prev = 28;
                _context3.t0 = _context3["catch"](0);
                window.alert("Something went wrong fetching your X3. Please reload");

              case 31:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 28]]);
      }));

      function loadX3() {
        return _loadX.apply(this, arguments);
      }

      return loadX3;
    }()
  }, {
    key: "loadX4",
    value: function () {
      var _loadX2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var _x4cost, x4Exist, i, res, x6, _i3, _res2, x6Payload;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _x4cost = this.state.cost / 2;
                x4Exist = [];
                i = 1;

              case 4:
                if (!(i < 13)) {
                  _context4.next = 13;
                  break;
                }

                _context4.next = 7;
                return this.state.contract.methods.usersActiveX6Levels(this.state.account, i).call();

              case 7:
                res = _context4.sent;
                x4Exist.push({
                  id: i,
                  userX4Exist: res,
                  key: i,
                  cost: _x4cost
                });
                _x4cost = _x4cost * 2;

              case 10:
                i++;
                _context4.next = 4;
                break;

              case 13:
                x6 = [];
                _i3 = 1;

              case 15:
                if (!(_i3 < 13)) {
                  _context4.next = 23;
                  break;
                }

                _context4.next = 18;
                return this.state.contract.methods.usersX6Matrix(this.state.account, _i3).call();

              case 18:
                _res2 = _context4.sent;
                x6.push({
                  id: _i3,
                  userX6: _res2
                });

              case 20:
                _i3++;
                _context4.next = 15;
                break;

              case 23:
                x6Payload = this.x3Infos(x4Exist, x6);
                this.setState({
                  x6Payload: x6Payload
                });
                _context4.next = 30;
                break;

              case 27:
                _context4.prev = 27;
                _context4.t0 = _context4["catch"](0);
                window.alert("Something went wrong fetching your X4. Please Reload.");

              case 30:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 27]]);
      }));

      function loadX4() {
        return _loadX2.apply(this, arguments);
      }

      return loadX4;
    }()
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
          lineNumber: 131,
          columnNumber: 9
        }
      }), __jsx(_X4MatrixHolder__WEBPACK_IMPORTED_MODULE_9__["default"], {
        struc: this.state.x6Payload,
        account: this.state.account,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYXRyaXgvTWF0cml4U3lzdGVtLmpzeCJdLCJuYW1lcyI6WyJNYXRyaXhTeXN0ZW0iLCJzZXRTdGF0ZSIsImFjY291bnQiLCJwcm9wcyIsImxvYWRXZWIzIiwibG9hZEJsb2NrY2hhaW5EYXRhIiwibG9hZFgzIiwibG9hZFg0Iiwid2luZG93IiwiYWxlcnQiLCJ3ZWIzIiwiV2ViMyIsImdpdmVuUHJvdmlkZXIiLCJjb250cmFjdCIsImV0aCIsIkNvbnRyYWN0IiwiQUJJIiwiQUREUkVTUyIsIm1ldGhvZHMiLCJyZWdpc3RyYXRpb25Db3N0IiwiY2FsbCIsImNvc3RzIiwiY29zdCIsImFycjEiLCJhcnIyIiwibWFwIiwiaXRlbSIsImkiLCJpZCIsIk9iamVjdCIsImFzc2lnbiIsIngzIiwic3RhdGUiLCJ1c2Vyc1gzTWF0cml4IiwicmVzIiwicHVzaCIsImxldmVsIiwidXNlclgzIiwiZWxlbWVudHNYMyIsIl9jb3N0IiwiaiIsImRvd25saW5lcyIsImxlbmd0aCIsIm51bWJlciIsImtleSIsIngzRXhpc3QiLCJ1c2Vyc0FjdGl2ZVgzTGV2ZWxzIiwidXNlclgzRXhpc3QiLCJ4M1BheWxvYWQiLCJ4M0luZm9zIiwiX3g0Y29zdCIsIng0RXhpc3QiLCJ1c2Vyc0FjdGl2ZVg2TGV2ZWxzIiwidXNlclg0RXhpc3QiLCJ4NiIsInVzZXJzWDZNYXRyaXgiLCJ1c2VyWDYiLCJ4NlBheWxvYWQiLCJwYXJudGVyQ291bnQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxZOzs7Ozs7Ozs7Ozs7OztBQUdBLHFCQUFLQyxRQUFMLENBQWM7QUFBRUMseUJBQU8sRUFBRSxLQUFLQyxLQUFMLENBQVdEO0FBQXRCLGlCQUFkOzt1QkFDTUUsZ0VBQVEsRTs7Ozt1QkFDUixLQUFLQyxrQkFB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QUFFd0QsMkJBQVMsRUFBVEE7QUFBRixpQkFBZDs7Ozs7OztBQUVBakQsc0JBQU0sQ0FBQ0MsS0FBUCxDQUFhLHVEQUFiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJSix3QkFBWU4sS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUs2QixLQUFMLEdBQWE7QUFDWDlCLGFBQU8sRUFBRSxFQURFO0FBRVh3RCxrQkFBWSxFQUFFLEVBRkg7QUFHWHBDLFVBQUksRUFBRTtBQUhLLEtBQWI7QUFGaUI7QUFPbEI7Ozs7NkJBQ1E7QUFDUCxhQUNFLG1FQUNFLE1BQUMsdURBQUQ7QUFDRSxhQUFLLEVBQUUsS0FBS1UsS0FBTCxDQUFXZ0IsU0FEcEI7QUFFRSxlQUFPLEVBQUUsS0FBS2hCLEtBQUwsQ0FBVzlCLE9BRnRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQUtFLE1BQUMsdURBQUQ7QUFDRSxhQUFLLEVBQUUsS0FBSzhCLEtBQUwsQ0FBV3lCLFNBRHBCO0FBRUUsZUFBTyxFQUFFLEtBQUt6QixLQUFMLENBQVc5QixPQUZ0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTEYsQ0FERjtBQVlEOzs7O0VBckl3QnlELCtDOztBQXdJWjNELDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC5iMDQxZWFlNTc0NTc3NDc4Yzk3MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgWDNNYXRyaXhIb2xkZXIgZnJvbSBcIi4vWDNNYXRyaXhIb2xkZXJcIjtcclxuaW1wb3J0IFg0TWF0cml4SG9sZGVyIGZyb20gXCIuL1g0TWF0cml4SG9sZGVyXCI7XHJcbmltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCI7XHJcbmltcG9ydCB7IEFCSSwgQUREUkVTUyB9IGZyb20gXCIuLi8uLi91dGlscy9nbG9iYWxzXCI7XHJcbmltcG9ydCB7IGxvYWRXZWIzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3V0aWxpdHlcIjtcclxuXHJcbmNsYXNzIE1hdHJpeFN5c3RlbSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYWNjb3VudDogdGhpcy5wcm9wcy5hY2NvdW50IH0pO1xyXG4gICAgICBhd2FpdCBsb2FkV2ViMygpO1xyXG4gICAgICBhd2FpdCB0aGlzLmxvYWRCbG9ja2NoYWluRGF0YSgpO1xyXG4gICAgICB0aGlzLmxvYWRYMygpO1xyXG4gICAgICB0aGlzLmxvYWRYNCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIlNvbWV0aGluZyB3ZW50IHdyb25nLi4gQ2hlY2s6IFwiICsgZXJyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGxvYWRCbG9ja2NoYWluRGF0YSgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyhXZWIzLmdpdmVuUHJvdmlkZXIgfHwgXCJodHRwOi8vbG9jYWxob3N0Ojg1NDVcIik7XHJcbiAgICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KEFCSSwgQUREUkVTUyk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb250cmFjdCB9KTtcclxuICAgICAgY29uc3QgY29zdHMgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLnJlZ2lzdHJhdGlvbkNvc3QoKS5jYWxsKCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3N0OiBjb3N0cyB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJTb21ldGhpbmcgd2VudCB3cm9uZy4uIENoZWNrOiBcIiArIGVycik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBNZXJnaW5nIE1hdHJpeCBxdWVyZXJpZXMgaW50byAxIFBheWxvYWRcclxuICB4M0luZm9zKGFycjEsIGFycjIpIHtcclxuICAgIHJldHVybiBhcnIxLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICBpZiAoaXRlbS5pZCA9PT0gYXJyMltpXS5pZCkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpdGVtLCBhcnIyW2ldKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBNYXRyaXggRnVuY3Rpb25zXHJcbiAgYXN5bmMgbG9hZFgzKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeDMgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMzsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5zdGF0ZS5jb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgICAudXNlcnNYM01hdHJpeCh0aGlzLnN0YXRlLmFjY291bnQsIGkpXHJcbiAgICAgICAgICAuY2FsbCgpO1xyXG4gICAgICAgIHgzLnB1c2goe1xyXG4gICAgICAgICAgbGV2ZWw6IGksXHJcbiAgICAgICAgICB1c2VyWDM6IHJlcyxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBlbGVtZW50c1gzID0gW107XHJcbiAgICAgIHZhciBfY29zdCA9IHRoaXMuc3RhdGUuY29zdCAvIDI7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkrKykge1xyXG4gICAgICAgIGxldCBqID0gaSArIDE7XHJcblxyXG4gICAgICAgIGNvbnN0IGRvd25saW5lcyA9IHgzW2ldLnVzZXJYM1sxXS5sZW5ndGg7XHJcbiAgICAgICAgZWxlbWVudHNYMy5wdXNoKHtcclxuICAgICAgICAgIGlkOiBqLFxyXG4gICAgICAgICAgbnVtYmVyOiBkb3dubGluZXMsXHJcbiAgICAgICAgICBrZXk6IGosXHJcbiAgICAgICAgICBjb3N0OiBfY29zdCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBfY29zdCA9IF9jb3N0ICogMjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB4M0V4aXN0ID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTM7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuc3RhdGUuY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgICAgLnVzZXJzQWN0aXZlWDNMZXZlbHModGhpcy5zdGF0ZS5hY2NvdW50LCBpKVxyXG4gICAgICAgICAgLmNhbGwoKTtcclxuICAgICAgICB4M0V4aXN0LnB1c2goe1xyXG4gICAgICAgICAgaWQ6IGksXHJcbiAgICAgICAgICB1c2VyWDNFeGlzdDogcmVzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHgzUGF5bG9hZCA9IHRoaXMueDNJbmZvcyh4M0V4aXN0LCBlbGVtZW50c1gzKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHgzUGF5bG9hZCB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJTb21ldGhpbmcgd2VudCB3cm9uZyBmZXRjaGluZyB5b3VyIFgzLiBQbGVhc2UgcmVsb2FkXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgbG9hZFg0KCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgdmFyIF94NGNvc3QgPSB0aGlzLnN0YXRlLmNvc3QgLyAyO1xyXG4gICAgICBjb25zdCB4NEV4aXN0ID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTM7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuc3RhdGUuY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgICAgLnVzZXJzQWN0aXZlWDZMZXZlbHModGhpcy5zdGF0ZS5hY2NvdW50LCBpKVxyXG4gICAgICAgICAgLmNhbGwoKTtcclxuICAgICAgICB4NEV4aXN0LnB1c2goe1xyXG4gICAgICAgICAgaWQ6IGksXHJcbiAgICAgICAgICB1c2VyWDRFeGlzdDogcmVzLFxyXG4gICAgICAgICAga2V5OiBpLFxyXG4gICAgICAgICAgY29zdDogX3g0Y29zdCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBfeDRjb3N0ID0gX3g0Y29zdCAqIDI7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgeDYgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMzsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5zdGF0ZS5jb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgICAudXNlcnNYNk1hdHJpeCh0aGlzLnN0YXRlLmFjY291bnQsIGkpXHJcbiAgICAgICAgICAuY2FsbCgpO1xyXG4gICAgICAgIHg2LnB1c2goe1xyXG4gICAgICAgICAgaWQ6IGksXHJcbiAgICAgICAgICB1c2VyWDY6IHJlcyxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgeDZQYXlsb2FkID0gdGhpcy54M0luZm9zKHg0RXhpc3QsIHg2KTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHg2UGF5bG9hZCB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJTb21ldGhpbmcgd2VudCB3cm9uZyBmZXRjaGluZyB5b3VyIFg0LiBQbGVhc2UgUmVsb2FkLlwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBhY2NvdW50OiBcIlwiLFxyXG4gICAgICBwYXJudGVyQ291bnQ6IFwiXCIsXHJcbiAgICAgIGNvc3Q6IFwiXCIsXHJcbiAgICB9O1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxYM01hdHJpeEhvbGRlclxyXG4gICAgICAgICAgc3RydWM9e3RoaXMuc3RhdGUueDNQYXlsb2FkfVxyXG4gICAgICAgICAgYWNjb3VudD17dGhpcy5zdGF0ZS5hY2NvdW50fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFg0TWF0cml4SG9sZGVyXHJcbiAgICAgICAgICBzdHJ1Yz17dGhpcy5zdGF0ZS54NlBheWxvYWR9XHJcbiAgICAgICAgICBhY2NvdW50PXt0aGlzLnN0YXRlLmFjY291bnR9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWF0cml4U3lzdGVtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9