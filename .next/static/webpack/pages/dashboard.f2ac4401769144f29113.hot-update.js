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
                _context2.prev = 0;
                x3 = [];
                i = 1;

              case 3:
                if (!(i < 13)) {
                  _context2.next = 11;
                  break;
                }

                _context2.next = 6;
                return this.state.contract.methods.usersX3Matrix(this.state.account, i).call();

              case 6:
                res = _context2.sent;
                x3.push({
                  level: i,
                  userX3: res
                });

              case 8:
                i++;
                _context2.next = 3;
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
                  _context2.next = 24;
                  break;
                }

                _context2.next = 19;
                return this.state.contract.methods.usersActiveX3Levels(this.state.account, _i2).call();

              case 19:
                _res = _context2.sent;
                x3Exist.push({
                  id: _i2,
                  userX3Exist: _res
                });

              case 21:
                _i2++;
                _context2.next = 16;
                break;

              case 24:
                x3Payload = this.x3Infos(x3Exist, elementsX3);
                this.setState({
                  x3Payload: x3Payload
                });
                _context2.next = 31;
                break;

              case 28:
                _context2.prev = 28;
                _context2.t0 = _context2["catch"](0);
                window.alert("Something went wrong fetching your X3. Please reload");

              case 31:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 28]]);
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
                _context3.prev = 0;
                _x4cost = this.state.cost / 2;
                x4Exist = [];
                i = 1;

              case 4:
                if (!(i < 13)) {
                  _context3.next = 13;
                  break;
                }

                _context3.next = 7;
                return this.state.contract.methods.usersActiveX6Levels(this.state.account, i).call();

              case 7:
                res = _context3.sent;
                x4Exist.push({
                  id: i,
                  userX4Exist: res,
                  key: i,
                  cost: _x4cost
                });
                _x4cost = _x4cost * 2;

              case 10:
                i++;
                _context3.next = 4;
                break;

              case 13:
                x6 = [];
                _i3 = 1;

              case 15:
                if (!(_i3 < 13)) {
                  _context3.next = 23;
                  break;
                }

                _context3.next = 18;
                return this.state.contract.methods.usersX6Matrix(this.state.account, _i3).call();

              case 18:
                _res2 = _context3.sent;
                x6.push({
                  id: _i3,
                  userX6: _res2
                });

              case 20:
                _i3++;
                _context3.next = 15;
                break;

              case 23:
                x6Payload = this.x3Infos(x4Exist, x6);
                this.setState({
                  x6Payload: x6Payload
                });
                _context3.next = 30;
                break;

              case 27:
                _context3.prev = 27;
                _context3.t0 = _context3["catch"](0);
                window.alert("Something went wrong fetching your X4. Please Reload.");

              case 30:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 27]]);
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
          lineNumber: 130,
          columnNumber: 9
        }
      }), __jsx(_X4MatrixHolder__WEBPACK_IMPORTED_MODULE_9__["default"], {
        struc: this.state.x6Payload,
        account: this.state.account,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYXRyaXgvTWF0cml4U3lzdGVtLmpzeCJdLCJuYW1lcyI6WyJNYXRyaXhTeXN0ZW0iLCJzZXRTdGF0ZSIsImFjY291bnQiLCJwcm9wcyIsImxvYWRXZWIzIiwibG9hZEJsb2NrY2hhaW5EYXRhIiwibG9hZFgzIiwibG9hZFg0Iiwid2luZG93IiwiYWxlcnQiLCJ4MyIsImkiLCJzdGF0ZSIsImNvbnRyYWN0IiwibWV0aG9kcyIsInVzZXJzWDNNYXRyaXgiLCJjYWxsIiwicmVzIiwicHVzaCIsImxldmVsIiwidXNlclgzIiwiZWxlbWVudHNYMyIsIl9jb3N0IiwiY29zdCIsImoiLCJkb3dubGluZXMiLCJsZW5ndGgiLCJpZCIsIm51bWJlciIsImtleSIsIngzRXhpc3QiLCJ1c2Vyc0FjdGl2ZVgzTGV2ZWxzIiwidXNlclgzRXhpc3QiLCJ4M1BheWxvYWQiLCJ4M0luZm9zIiwiX3g0Y29zdCIsIng0RXhpc3QiLCJ1c2Vyc0FjdGl2ZVg2TGV2ZWxzIiwidXNlclg0RXhpc3QiLCJ4NiIsInVzZXJzWDZNYXRyaXgiLCJ1c2VyWDYiLCJ4NlBheWxvYWQiLCJ3ZWIzIiwiV2ViMyIsImdpdmVuUHJvdmlkZXIiLCJldGgiLCJDb250cmFjdCIsIkFCSSIsIkFERFJFU1MiLCJyZWdpc3RyYXRpb25Db3N0IiwiY29zdHMiLCJhcnIxIiwiYXJyMiIsIm1hcCIsIml0ZW0iLCJPYmplY3QiLCJhc3NpZ24iLCJwYXJudGVyQ291bnQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxZOzs7Ozs7Ozs7Ozs7OztBQUdBLHFCQUFLQyxRQUFMLENBQWM7QUFBRUMseUJBQU8sRUFBRSxLQUFLQyxLQUFMLENBQVdEO0FBQXRCLGlCQUFkOzt1QkFDTUUsZ0VBQVEsRTs7Ozt1QkFDUixLQUFLQyxrQkFB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QUFjLEVBQWQsRUFBa0JGLElBQWxCLEVBQXdCRixJQUFJLENBQUMxQyxDQUFELENBQTVCLENBQVA7QUFDRDtBQUNGLE9BSk0sQ0FBUDtBQUtEOzs7QUFFRCx3QkFBWVIsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtTLEtBQUwsR0FBYTtBQUNYVixhQUFPLEVBQUUsRUFERTtBQUVYd0Qsa0JBQVksRUFBRSxFQUZIO0FBR1huQyxVQUFJLEVBQUU7QUFISyxLQUFiO0FBRmlCO0FBT2xCOzs7OzZCQUNRO0FBQ1AsYUFDRSxtRUFDRSxNQUFDLHVEQUFEO0FBQ0UsYUFBSyxFQUFFLEtBQUtYLEtBQUwsQ0FBV3FCLFNBRHBCO0FBRUUsZUFBTyxFQUFFLEtBQUtyQixLQUFMLENBQVdWLE9BRnRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQUtFLE1BQUMsdURBQUQ7QUFDRSxhQUFLLEVBQUUsS0FBS1UsS0FBTCxDQUFXOEIsU0FEcEI7QUFFRSxlQUFPLEVBQUUsS0FBSzlCLEtBQUwsQ0FBV1YsT0FGdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUxGLENBREY7QUFZRDs7OztFQXBJd0J5RCwrQzs7QUF1SVozRCwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQuZjJhYzQ0MDE3NjkxNDRmMjkxMTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFgzTWF0cml4SG9sZGVyIGZyb20gXCIuL1gzTWF0cml4SG9sZGVyXCI7XHJcbmltcG9ydCBYNE1hdHJpeEhvbGRlciBmcm9tIFwiLi9YNE1hdHJpeEhvbGRlclwiO1xyXG5pbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xyXG5pbXBvcnQgeyBBQkksIEFERFJFU1MgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZ2xvYmFsc1wiO1xyXG5pbXBvcnQgeyBsb2FkV2ViMyB9IGZyb20gXCIuLi8uLi91dGlscy91dGlsaXR5XCI7XHJcblxyXG5jbGFzcyBNYXRyaXhTeXN0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGFzeW5jIFVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYWNjb3VudDogdGhpcy5wcm9wcy5hY2NvdW50IH0pO1xyXG4gICAgICBhd2FpdCBsb2FkV2ViMygpO1xyXG4gICAgICBhd2FpdCB0aGlzLmxvYWRCbG9ja2NoYWluRGF0YSgpO1xyXG4gICAgICB0aGlzLmxvYWRYMygpO1xyXG4gICAgICB0aGlzLmxvYWRYNCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIlNvbWV0aGluZyB3ZW50IHdyb25nLi4gQ2hlY2s6IFwiICsgZXJyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGxvYWRYMygpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHgzID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTM7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuc3RhdGUuY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgICAgLnVzZXJzWDNNYXRyaXgodGhpcy5zdGF0ZS5hY2NvdW50LCBpKVxyXG4gICAgICAgICAgLmNhbGwoKTtcclxuICAgICAgICB4My5wdXNoKHtcclxuICAgICAgICAgIGxldmVsOiBpLFxyXG4gICAgICAgICAgdXNlclgzOiByZXMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZWxlbWVudHNYMyA9IFtdO1xyXG4gICAgICB2YXIgX2Nvc3QgPSB0aGlzLnN0YXRlLmNvc3QgLyAyO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpKyspIHtcclxuICAgICAgICBsZXQgaiA9IGkgKyAxO1xyXG5cclxuICAgICAgICBjb25zdCBkb3dubGluZXMgPSB4M1tpXS51c2VyWDNbMV0ubGVuZ3RoO1xyXG4gICAgICAgIGVsZW1lbnRzWDMucHVzaCh7XHJcbiAgICAgICAgICBpZDogaixcclxuICAgICAgICAgIG51bWJlcjogZG93bmxpbmVzLFxyXG4gICAgICAgICAga2V5OiBqLFxyXG4gICAgICAgICAgY29zdDogX2Nvc3QsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgX2Nvc3QgPSBfY29zdCAqIDI7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgeDNFeGlzdCA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDEzOyBpKyspIHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLnN0YXRlLmNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAgIC51c2Vyc0FjdGl2ZVgzTGV2ZWxzKHRoaXMuc3RhdGUuYWNjb3VudCwgaSlcclxuICAgICAgICAgIC5jYWxsKCk7XHJcbiAgICAgICAgeDNFeGlzdC5wdXNoKHtcclxuICAgICAgICAgIGlkOiBpLFxyXG4gICAgICAgICAgdXNlclgzRXhpc3Q6IHJlcyxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB4M1BheWxvYWQgPSB0aGlzLngzSW5mb3MoeDNFeGlzdCwgZWxlbWVudHNYMyk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB4M1BheWxvYWQgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiU29tZXRoaW5nIHdlbnQgd3JvbmcgZmV0Y2hpbmcgeW91ciBYMy4gUGxlYXNlIHJlbG9hZFwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGxvYWRYNCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHZhciBfeDRjb3N0ID0gdGhpcy5zdGF0ZS5jb3N0IC8gMjtcclxuICAgICAgY29uc3QgeDRFeGlzdCA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDEzOyBpKyspIHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLnN0YXRlLmNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAgIC51c2Vyc0FjdGl2ZVg2TGV2ZWxzKHRoaXMuc3RhdGUuYWNjb3VudCwgaSlcclxuICAgICAgICAgIC5jYWxsKCk7XHJcbiAgICAgICAgeDRFeGlzdC5wdXNoKHtcclxuICAgICAgICAgIGlkOiBpLFxyXG4gICAgICAgICAgdXNlclg0RXhpc3Q6IHJlcyxcclxuICAgICAgICAgIGtleTogaSxcclxuICAgICAgICAgIGNvc3Q6IF94NGNvc3QsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgX3g0Y29zdCA9IF94NGNvc3QgKiAyO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHg2ID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTM7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuc3RhdGUuY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgICAgLnVzZXJzWDZNYXRyaXgodGhpcy5zdGF0ZS5hY2NvdW50LCBpKVxyXG4gICAgICAgICAgLmNhbGwoKTtcclxuICAgICAgICB4Ni5wdXNoKHtcclxuICAgICAgICAgIGlkOiBpLFxyXG4gICAgICAgICAgdXNlclg2OiByZXMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHg2UGF5bG9hZCA9IHRoaXMueDNJbmZvcyh4NEV4aXN0LCB4Nik7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB4NlBheWxvYWQgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiU29tZXRoaW5nIHdlbnQgd3JvbmcgZmV0Y2hpbmcgeW91ciBYNC4gUGxlYXNlIFJlbG9hZC5cIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBsb2FkQmxvY2tjaGFpbkRhdGEoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB3ZWIzID0gbmV3IFdlYjMoV2ViMy5naXZlblByb3ZpZGVyIHx8IFwiaHR0cDovL2xvY2FsaG9zdDo4NTQ1XCIpO1xyXG4gICAgICBjb25zdCBjb250cmFjdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChBQkksIEFERFJFU1MpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY29udHJhY3QgfSk7XHJcbiAgICAgIGNvbnN0IGNvc3RzID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy5yZWdpc3RyYXRpb25Db3N0KCkuY2FsbCgpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY29zdDogY29zdHMgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiU29tZXRoaW5nIHdlbnQgd3JvbmcuLiBDaGVjazogXCIgKyBlcnIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gTWVyZ2luZyBYMyBxdWVyZXJpZXMgaW50byAxIFBheWxvYWRcclxuICB4M0luZm9zKGFycjEsIGFycjIpIHtcclxuICAgIHJldHVybiBhcnIxLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICBpZiAoaXRlbS5pZCA9PT0gYXJyMltpXS5pZCkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpdGVtLCBhcnIyW2ldKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgYWNjb3VudDogXCJcIixcclxuICAgICAgcGFybnRlckNvdW50OiBcIlwiLFxyXG4gICAgICBjb3N0OiBcIlwiLFxyXG4gICAgfTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8WDNNYXRyaXhIb2xkZXJcclxuICAgICAgICAgIHN0cnVjPXt0aGlzLnN0YXRlLngzUGF5bG9hZH1cclxuICAgICAgICAgIGFjY291bnQ9e3RoaXMuc3RhdGUuYWNjb3VudH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxYNE1hdHJpeEhvbGRlclxyXG4gICAgICAgICAgc3RydWM9e3RoaXMuc3RhdGUueDZQYXlsb2FkfVxyXG4gICAgICAgICAgYWNjb3VudD17dGhpcy5zdGF0ZS5hY2NvdW50fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hdHJpeFN5c3RlbTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==