webpackHotUpdate_N_E("pages/login",{

/***/ "./components/AccountContext.jsx":
/*!***************************************!*\
  !*** ./components/AccountContext.jsx ***!
  \***************************************/
/*! exports provided: AccountProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountProvider", function() { return AccountProvider; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);







var _jsxFileName = "C:\\Users\\crfab\\Desktop\\forsage-boilerplate\\components\\AccountContext.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


var AccountContext = react__WEBPACK_IMPORTED_MODULE_7___default.a.createContext(); // export const AccountProvider = AccountContext.Provider;
// export const AccountConsumer = AccountContext.Consumer;

var AccountProvider = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(AccountProvider, _Component);

  var _super = _createSuper(AccountProvider);

  function AccountProvider() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AccountProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      account: ""
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "setAccount", function (account) {
      // account.stringify();
      _this.setState(function (prevState) {
        return {
          account: account
        };
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AccountProvider, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      var account = this.state.account;
      var setAccount = this.setAccount;
      return __jsx(AccountContext.Provider, {
        value: {
          account: account,
          setAccount: setAccount
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 7
        }
      }, children);
    }
  }]);

  return AccountProvider;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);


/* harmony default export */ __webpack_exports__["default"] = (AccountContext);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BY2NvdW50Q29udGV4dC5qc3giXSwibmFtZXMiOlsiQWNjb3VudENvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJBY2NvdW50UHJvdmlkZXIiLCJhY2NvdW50Iiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJjaGlsZHJlbiIsInByb3BzIiwic3RhdGUiLCJzZXRBY2NvdW50IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsY0FBYyxHQUFHQyw0Q0FBSyxDQUFDQyxhQUFOLEVBQXZCLEMsQ0FFQTtBQUNBOztJQUVNQyxlOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUVJO0FBQ05DLGFBQU8sRUFBRTtBQURILEs7O3FOQUtLLFVBQUNBLE9BQUQsRUFBYTtBQUN4QjtBQUNBLFlBQUtDLFFBQUwsQ0FBYyxVQUFDQyxTQUFEO0FBQUEsZUFBZ0I7QUFBRUYsaUJBQU8sRUFBUEE7QUFBRixTQUFoQjtBQUFBLE9BQWQ7QUFDRCxLOzs7Ozs7OzZCQUVRO0FBQUEsVUFDQ0csUUFERCxHQUNjLEtBQUtDLEtBRG5CLENBQ0NELFFBREQ7QUFBQSxVQUVDSCxPQUZELEdBRWEsS0FBS0ssS0FGbEIsQ0FFQ0wsT0FGRDtBQUFBLFVBR0NNLFVBSEQsR0FHZ0IsSUFIaEIsQ0FHQ0EsVUFIRDtBQUtQLGFBQ0UsTUFBQyxjQUFELENBQWdCLFFBQWhCO0FBQ0UsYUFBSyxFQUFFO0FBQ0xOLGlCQUFPLEVBQVBBLE9BREs7QUFFTE0sb0JBQVUsRUFBVkE7QUFGSyxTQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FNR0gsUUFOSCxDQURGO0FBVUQ7Ozs7RUEzQjJCSSwrQzs7QUE4QjlCO0FBRWVYLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLmQ2YWVjOTdlM2RmMGZiOWVkNDgxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBBY2NvdW50Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBBY2NvdW50UHJvdmlkZXIgPSBBY2NvdW50Q29udGV4dC5Qcm92aWRlcjtcclxuLy8gZXhwb3J0IGNvbnN0IEFjY291bnRDb25zdW1lciA9IEFjY291bnRDb250ZXh0LkNvbnN1bWVyO1xyXG5cclxuY2xhc3MgQWNjb3VudFByb3ZpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAvLyBjb250ZXh0IHN0YXRlXHJcbiAgc3RhdGUgPSB7XHJcbiAgICBhY2NvdW50OiBcIlwiLFxyXG4gIH07XHJcblxyXG4gIC8vTWV0aG9kIHRvIHVwZGF0ZVxyXG4gIHNldEFjY291bnQgPSAoYWNjb3VudCkgPT4ge1xyXG4gICAgLy8gYWNjb3VudC5zdHJpbmdpZnkoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHsgYWNjb3VudCB9KSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IHsgYWNjb3VudCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IHsgc2V0QWNjb3VudCB9ID0gdGhpcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QWNjb3VudENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgYWNjb3VudCxcclxuICAgICAgICAgIHNldEFjY291bnQsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9BY2NvdW50Q29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBBY2NvdW50UHJvdmlkZXIgfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjY291bnRDb250ZXh0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9