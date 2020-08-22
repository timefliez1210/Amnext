webpackHotUpdate_N_E("pages/ref/[id]",{

/***/ "./utils/utility.js":
/*!**************************!*\
  !*** ./utils/utility.js ***!
  \**************************/
/*! exports provided: loadWeb3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadWeb3", function() { return loadWeb3; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");


// Fetching WEB3 Provider
var loadWeb3 = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!window.ethereum) {
              _context.next = 6;
              break;
            }

            window.web3 = new Web3(window.ethereum);
            _context.next = 4;
            return window.ethereum.enable();

          case 4:
            _context.next = 7;
            break;

          case 6:
            if (window.web3) {
              window.web3 = new Web3(window.web3.currentProvider);
            } else {
              window.alert("Non-Ethereum browser detected. You should consider trying MetaMask!");
            }

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function loadWeb3() {
    return _ref.apply(this, arguments);
  };
}();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdXRpbGl0eS5qcyJdLCJuYW1lcyI6WyJsb2FkV2ViMyIsIndpbmRvdyIsImV0aGVyZXVtIiwid2ViMyIsIldlYjMiLCJlbmFibGUiLCJjdXJyZW50UHJvdmlkZXIiLCJhbGVydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFFBQVE7QUFBQSw4TEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ2xCQyxNQUFNLENBQUNDLFFBRFc7QUFBQTtBQUFBO0FBQUE7O0FBRXBCRCxrQkFBTSxDQUFDRSxJQUFQLEdBQWMsSUFBSUMsSUFBSixDQUFTSCxNQUFNLENBQUNDLFFBQWhCLENBQWQ7QUFGb0I7QUFBQSxtQkFHZEQsTUFBTSxDQUFDQyxRQUFQLENBQWdCRyxNQUFoQixFQUhjOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUlmLGdCQUFJSixNQUFNLENBQUNFLElBQVgsRUFBaUI7QUFDdEJGLG9CQUFNLENBQUNFLElBQVAsR0FBYyxJQUFJQyxJQUFKLENBQVNILE1BQU0sQ0FBQ0UsSUFBUCxDQUFZRyxlQUFyQixDQUFkO0FBQ0QsYUFGTSxNQUVBO0FBQ0xMLG9CQUFNLENBQUNNLEtBQVAsQ0FDRSxxRUFERjtBQUdEOztBQVZxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFSUCxRQUFRO0FBQUE7QUFBQTtBQUFBLEdBQWQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVmL1tpZF0uYWY4MGY4NTY0NDZhOTA2YmY4OWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZldGNoaW5nIFdFQjMgUHJvdmlkZXJcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkV2ViMyA9IGFzeW5jICgpID0+IHtcclxuICBpZiAod2luZG93LmV0aGVyZXVtKSB7XHJcbiAgICB3aW5kb3cud2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSk7XHJcbiAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0uZW5hYmxlKCk7XHJcbiAgfSBlbHNlIGlmICh3aW5kb3cud2ViMykge1xyXG4gICAgd2luZG93LndlYjMgPSBuZXcgV2ViMyh3aW5kb3cud2ViMy5jdXJyZW50UHJvdmlkZXIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB3aW5kb3cuYWxlcnQoXHJcbiAgICAgIFwiTm9uLUV0aGVyZXVtIGJyb3dzZXIgZGV0ZWN0ZWQuIFlvdSBzaG91bGQgY29uc2lkZXIgdHJ5aW5nIE1ldGFNYXNrIVwiXHJcbiAgICApO1xyXG4gIH1cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==