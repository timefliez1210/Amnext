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
                }); // Matrix Calls for the X3
                // Matrix Calls for the X4

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
    }()
  }, {
    key: "loadX3",
    value: function () {
      var _loadX = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var contract, x3, i, res, elementsX3, _cost, _i, j, downlines, x3Exist, _i2, _res, x3Payload;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                contract = this.state.contact;
                x3 = [];
                i = 1;

              case 3:
                if (!(i < 13)) {
                  _context3.next = 11;
                  break;
                }

                _context3.next = 6;
                return contract.methods.usersX3Matrix(this.state.account, i).call();

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
                return contract.methods.usersActiveX3Levels(this.state.account, _i2).call();

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

              case 26:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
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
        var contract, _x4cost, x4Exist, i, res, x6, _i3, _res2, x6Payload;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                contract = this.state.contact;
                _x4cost = this.state.cost / 2;
                x4Exist = [];
                i = 1;

              case 4:
                if (!(i < 13)) {
                  _context4.next = 13;
                  break;
                }

                _context4.next = 7;
                return contract.methods.usersActiveX6Levels(this.state.account, i).call();

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
                return contract.methods.usersX6Matrix(this.state.account, _i3).call();

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

              case 25:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function loadX4() {
        return _loadX2.apply(this, arguments);
      }

      return loadX4;
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
          lineNumber: 129,
          columnNumber: 9
        }
      }), __jsx(_X4MatrixHolder__WEBPACK_IMPORTED_MODULE_9__["default"], {
        struc: this.state.x6Payload,
        account: this.state.account,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYXRyaXgvTWF0cml4U3lzdGVtLmpzeCJdLCJuYW1lcyI6WyJNYXRyaXhTeXN0ZW0iLCJzZXRTdGF0ZSIsImFjY291bnQiLCJwcm9wcyIsImxvYWRXZWIzIiwibG9hZEJsb2NrY2hhaW5EYXRhIiwibG9hZFgzIiwibG9hZFg0Iiwid2luZG93IiwiYWxlcnQiLCJ3ZWIzIiwiV2ViMyIsImdpdmVuUHJvdmlkZXIiLCJjb250cmFjdCIsImV0aCIsIkNvbnRyYWN0IiwiQUJJIiwiQUREUkVTUyIsIm1ldGhvZHMiLCJyZWdpc3RyYXRpb25Db3N0IiwiY2FsbCIsImNvc3RzIiwiY29zdCIsInN0YXRlIiwiY29udGFjdCIsIngzIiwiaSIsInVzZXJzWDNNYXRyaXgiLCJyZXMiLCJwdXNoIiwibGV2ZWwiLCJ1c2VyWDMiLCJlbGVtZW50c1gzIiwiX2Nvc3QiLCJqIiwiZG93bmxpbmVzIiwibGVuZ3RoIiwiaWQiLCJudW1iZXIiLCJrZXkiLCJ4M0V4aXN0IiwidXNlcnNBY3RpdmVYM0xldmVscyIsInVzZXJYM0V4aXN0IiwieDNQYXlsb2FkIiwieDNJbmZvcyIsIl94NGNvc3QiLCJ4NEV4aXN0IiwidXNlcnNBY3RpdmVYNkxldmVscyIsInVzZXJYNEV4aXN0IiwieDYiLCJ1c2Vyc1g2TWF0cml4IiwidXNlclg2IiwieDZQYXlsb2FkIiwiYXJyMSIsImFycjIiLCJtYXAiLCJpdGVtIiwiT2JqZWN0IiwiYXNzaWduIiwicGFybnRlckNvdW50IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsWTs7Ozs7Ozs7Ozs7Ozs7QUFHQSxxQkFBS0MsUUFBTCxDQUFjO0FBQUVDLHlCQUFPLEVBQUUsS0FBS0MsS0FBTCxDQUFXRDtBQUF0QixpQkFBZDs7dUJBQ01FLGdFQUFRLEU7Ozs7dUJBQ1Is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Sk0sQ0FBUDtBQUtEOzs7QUFFRCx3QkFBWXZCLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLb0IsS0FBTCxHQUFhO0FBQ1hyQixhQUFPLEVBQUUsRUFERTtBQUVYeUQsa0JBQVksRUFBRSxFQUZIO0FBR1hyQyxVQUFJLEVBQUU7QUFISyxLQUFiO0FBRmlCO0FBT2xCOzs7OzZCQUNRO0FBQ1AsYUFDRSxtRUFDRSxNQUFDLHVEQUFEO0FBQ0UsYUFBSyxFQUFFLEtBQUtDLEtBQUwsQ0FBV29CLFNBRHBCO0FBRUUsZUFBTyxFQUFFLEtBQUtwQixLQUFMLENBQVdyQixPQUZ0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFLRSxNQUFDLHVEQUFEO0FBQ0UsYUFBSyxFQUFFLEtBQUtxQixLQUFMLENBQVc2QixTQURwQjtBQUVFLGVBQU8sRUFBRSxLQUFLN0IsS0FBTCxDQUFXckIsT0FGdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUxGLENBREY7QUFZRDs7OztFQW5Jd0IwRCwrQzs7QUFzSVo1RCwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQuNjM2OGNmNDA0MTAwNDJjODVlZDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFgzTWF0cml4SG9sZGVyIGZyb20gXCIuL1gzTWF0cml4SG9sZGVyXCI7XHJcbmltcG9ydCBYNE1hdHJpeEhvbGRlciBmcm9tIFwiLi9YNE1hdHJpeEhvbGRlclwiO1xyXG5pbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xyXG5pbXBvcnQgeyBBQkksIEFERFJFU1MgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZ2xvYmFsc1wiO1xyXG5pbXBvcnQgeyBsb2FkV2ViMyB9IGZyb20gXCIuLi8uLi91dGlscy91dGlsaXR5XCI7XHJcblxyXG5jbGFzcyBNYXRyaXhTeXN0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGFzeW5jIFVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYWNjb3VudDogdGhpcy5wcm9wcy5hY2NvdW50IH0pO1xyXG4gICAgICBhd2FpdCBsb2FkV2ViMygpO1xyXG4gICAgICBhd2FpdCB0aGlzLmxvYWRCbG9ja2NoYWluRGF0YSgpO1xyXG4gICAgICB0aGlzLmxvYWRYMygpO1xyXG4gICAgICB0aGlzLmxvYWRYNCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIlNvbWV0aGluZyB3ZW50IHdyb25nLi4gQ2hlY2s6IFwiICsgZXJyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGxvYWRCbG9ja2NoYWluRGF0YSgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyhXZWIzLmdpdmVuUHJvdmlkZXIgfHwgXCJodHRwOi8vbG9jYWxob3N0Ojg1NDVcIik7XHJcbiAgICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KEFCSSwgQUREUkVTUyk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb250cmFjdCB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGNvc3RzID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy5yZWdpc3RyYXRpb25Db3N0KCkuY2FsbCgpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY29zdDogY29zdHMgfSk7XHJcblxyXG4gICAgICAvLyBNYXRyaXggQ2FsbHMgZm9yIHRoZSBYM1xyXG5cclxuICAgICAgLy8gTWF0cml4IENhbGxzIGZvciB0aGUgWDRcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJTb21ldGhpbmcgd2VudCB3cm9uZy4uIENoZWNrOiBcIiArIGVycik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBsb2FkWDMoKSB7XHJcbiAgICBjb25zdCBjb250cmFjdCA9IHRoaXMuc3RhdGUuY29udGFjdDtcclxuICAgIGNvbnN0IHgzID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDEzOyBpKyspIHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgIC51c2Vyc1gzTWF0cml4KHRoaXMuc3RhdGUuYWNjb3VudCwgaSlcclxuICAgICAgICAuY2FsbCgpO1xyXG4gICAgICB4My5wdXNoKHtcclxuICAgICAgICBsZXZlbDogaSxcclxuICAgICAgICB1c2VyWDM6IHJlcyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBlbGVtZW50c1gzID0gW107XHJcbiAgICB2YXIgX2Nvc3QgPSB0aGlzLnN0YXRlLmNvc3QgLyAyO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XHJcbiAgICAgIGxldCBqID0gaSArIDE7XHJcblxyXG4gICAgICBjb25zdCBkb3dubGluZXMgPSB4M1tpXS51c2VyWDNbMV0ubGVuZ3RoO1xyXG4gICAgICBlbGVtZW50c1gzLnB1c2goe1xyXG4gICAgICAgIGlkOiBqLFxyXG4gICAgICAgIG51bWJlcjogZG93bmxpbmVzLFxyXG4gICAgICAgIGtleTogaixcclxuICAgICAgICBjb3N0OiBfY29zdCxcclxuICAgICAgfSk7XHJcbiAgICAgIF9jb3N0ID0gX2Nvc3QgKiAyO1xyXG4gICAgfVxyXG4gICAgY29uc3QgeDNFeGlzdCA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMzsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHNcclxuICAgICAgICAudXNlcnNBY3RpdmVYM0xldmVscyh0aGlzLnN0YXRlLmFjY291bnQsIGkpXHJcbiAgICAgICAgLmNhbGwoKTtcclxuICAgICAgeDNFeGlzdC5wdXNoKHtcclxuICAgICAgICBpZDogaSxcclxuICAgICAgICB1c2VyWDNFeGlzdDogcmVzLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IHgzUGF5bG9hZCA9IHRoaXMueDNJbmZvcyh4M0V4aXN0LCBlbGVtZW50c1gzKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyB4M1BheWxvYWQgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBsb2FkWDQoKSB7XHJcbiAgICBjb25zdCBjb250cmFjdCA9IHRoaXMuc3RhdGUuY29udGFjdDtcclxuICAgIHZhciBfeDRjb3N0ID0gdGhpcy5zdGF0ZS5jb3N0IC8gMjtcclxuICAgIGNvbnN0IHg0RXhpc3QgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTM7IGkrKykge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzXHJcbiAgICAgICAgLnVzZXJzQWN0aXZlWDZMZXZlbHModGhpcy5zdGF0ZS5hY2NvdW50LCBpKVxyXG4gICAgICAgIC5jYWxsKCk7XHJcbiAgICAgIHg0RXhpc3QucHVzaCh7XHJcbiAgICAgICAgaWQ6IGksXHJcbiAgICAgICAgdXNlclg0RXhpc3Q6IHJlcyxcclxuICAgICAgICBrZXk6IGksXHJcbiAgICAgICAgY29zdDogX3g0Y29zdCxcclxuICAgICAgfSk7XHJcbiAgICAgIF94NGNvc3QgPSBfeDRjb3N0ICogMjtcclxuICAgIH1cclxuICAgIGNvbnN0IHg2ID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDEzOyBpKyspIHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgY29udHJhY3QubWV0aG9kc1xyXG4gICAgICAgIC51c2Vyc1g2TWF0cml4KHRoaXMuc3RhdGUuYWNjb3VudCwgaSlcclxuICAgICAgICAuY2FsbCgpO1xyXG4gICAgICB4Ni5wdXNoKHtcclxuICAgICAgICBpZDogaSxcclxuICAgICAgICB1c2VyWDY6IHJlcyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeDZQYXlsb2FkID0gdGhpcy54M0luZm9zKHg0RXhpc3QsIHg2KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyB4NlBheWxvYWQgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBNZXJnaW5nIFgzIHF1ZXJlcmllcyBpbnRvIDEgUGF5bG9hZFxyXG4gIHgzSW5mb3MoYXJyMSwgYXJyMikge1xyXG4gICAgcmV0dXJuIGFycjEubWFwKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgIGlmIChpdGVtLmlkID09PSBhcnIyW2ldLmlkKSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIGFycjJbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBhY2NvdW50OiBcIlwiLFxyXG4gICAgICBwYXJudGVyQ291bnQ6IFwiXCIsXHJcbiAgICAgIGNvc3Q6IFwiXCIsXHJcbiAgICB9O1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxYM01hdHJpeEhvbGRlclxyXG4gICAgICAgICAgc3RydWM9e3RoaXMuc3RhdGUueDNQYXlsb2FkfVxyXG4gICAgICAgICAgYWNjb3VudD17dGhpcy5zdGF0ZS5hY2NvdW50fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFg0TWF0cml4SG9sZGVyXHJcbiAgICAgICAgICBzdHJ1Yz17dGhpcy5zdGF0ZS54NlBheWxvYWR9XHJcbiAgICAgICAgICBhY2NvdW50PXt0aGlzLnN0YXRlLmFjY291bnR9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWF0cml4U3lzdGVtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9