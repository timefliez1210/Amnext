webpackHotUpdate_N_E("pages/login",{

/***/ "./utils/utility.js":
/*!**************************!*\
  !*** ./utils/utility.js ***!
  \**************************/
/*! exports provided: loadWeb3, loadBlockchainData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadWeb3", function() { return loadWeb3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadBlockchainData", function() { return loadBlockchainData; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");



var _this = undefined;

// Fetching WEB3 Provider
var loadWeb3 = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            if (!window.ethereum) {
              _context.next = 7;
              break;
            }

            window.web3 = new Web3(window.ethereum);
            _context.next = 5;
            return window.ethereum.enable();

          case 5:
            _context.next = 8;
            break;

          case 7:
            if (window.web3) {
              window.web3 = new Web3(window.web3.currentProvider);
            } else {
              window.alert("Non-Ethereum browser detected. You should consider trying MetaMask!");
            }

          case 8:
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            window.alert("Trouble connecting to you web3 browser...");

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function loadWeb3() {
    return _ref.apply(this, arguments);
  };
}(); // General loading from the blockchain and instantiating the contract

var loadBlockchainData = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var web3, contract, isExists;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

            _this.setState({
              account: _this.context.account
            });

            contract = new web3.eth.Contract(ABI, ADDRESS);

            _this.setState({
              contract: contract
            });

            _context2.next = 6;
            return contract.methods.isUserExists(_this.state.account).call();

          case 6:
            isExists = _context2.sent;

            _this.setState({
              isExist: isExists
            });

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function loadBlockchainData() {
    return _ref2.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdXRpbGl0eS5qcyJdLCJuYW1lcyI6WyJsb2FkV2ViMyIsIndpbmRvdyIsImV0aGVyZXVtIiwid2ViMyIsIldlYjMiLCJlbmFibGUiLCJjdXJyZW50UHJvdmlkZXIiLCJhbGVydCIsImxvYWRCbG9ja2NoYWluRGF0YSIsImdpdmVuUHJvdmlkZXIiLCJzZXRTdGF0ZSIsImFjY291bnQiLCJjb250ZXh0IiwiY29udHJhY3QiLCJldGgiLCJDb250cmFjdCIsIkFCSSIsIkFERFJFU1MiLCJtZXRob2RzIiwiaXNVc2VyRXhpc3RzIiwic3RhdGUiLCJjYWxsIiwiaXNFeGlzdHMiLCJpc0V4aXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFFBQVE7QUFBQSw4TEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsaUJBRWhCQyxNQUFNLENBQUNDLFFBRlM7QUFBQTtBQUFBO0FBQUE7O0FBR2xCRCxrQkFBTSxDQUFDRSxJQUFQLEdBQWMsSUFBSUMsSUFBSixDQUFTSCxNQUFNLENBQUNDLFFBQWhCLENBQWQ7QUFIa0I7QUFBQSxtQkFJWkQsTUFBTSxDQUFDQyxRQUFQLENBQWdCRyxNQUFoQixFQUpZOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUtiLGdCQUFJSixNQUFNLENBQUNFLElBQVgsRUFBaUI7QUFDdEJGLG9CQUFNLENBQUNFLElBQVAsR0FBYyxJQUFJQyxJQUFKLENBQVNILE1BQU0sQ0FBQ0UsSUFBUCxDQUFZRyxlQUFyQixDQUFkO0FBQ0QsYUFGTSxNQUVBO0FBQ0xMLG9CQUFNLENBQUNNLEtBQVAsQ0FDRSxxRUFERjtBQUdEOztBQVhtQjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBYXBCTixrQkFBTSxDQUFDTSxLQUFQLENBQWEsMkNBQWI7O0FBYm9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVJQLFFBQVE7QUFBQTtBQUFBO0FBQUEsR0FBZCxDLENBaUJQOztBQUVPLElBQU1RLGtCQUFrQjtBQUFBLCtMQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMxQkwsZ0JBRDBCLEdBQ25CLElBQUlDLElBQUosQ0FBU0EsSUFBSSxDQUFDSyxhQUFMLElBQXNCLHVCQUEvQixDQURtQjs7QUFFaEMsaUJBQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUVDLHFCQUFPLEVBQUUsS0FBSSxDQUFDQyxPQUFMLENBQWFEO0FBQXhCLGFBQWQ7O0FBQ01FLG9CQUgwQixHQUdmLElBQUlWLElBQUksQ0FBQ1csR0FBTCxDQUFTQyxRQUFiLENBQXNCQyxHQUF0QixFQUEyQkMsT0FBM0IsQ0FIZTs7QUFJaEMsaUJBQUksQ0FBQ1AsUUFBTCxDQUFjO0FBQUVHLHNCQUFRLEVBQVJBO0FBQUYsYUFBZDs7QUFKZ0M7QUFBQSxtQkFLVEEsUUFBUSxDQUFDSyxPQUFULENBQ3BCQyxZQURvQixDQUNQLEtBQUksQ0FBQ0MsS0FBTCxDQUFXVCxPQURKLEVBRXBCVSxJQUZvQixFQUxTOztBQUFBO0FBSzFCQyxvQkFMMEI7O0FBUWhDLGlCQUFJLENBQUNaLFFBQUwsQ0FBYztBQUFFYSxxQkFBTyxFQUFFRDtBQUFYLGFBQWQ7O0FBUmdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWxCZCxrQkFBa0I7QUFBQTtBQUFBO0FBQUEsR0FBeEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uNTIyMzM0ZGJjMzZmN2RhYzMxOTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZldGNoaW5nIFdFQjMgUHJvdmlkZXJcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkV2ViMyA9IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xyXG4gICAgICB3aW5kb3cud2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSk7XHJcbiAgICAgIGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5lbmFibGUoKTtcclxuICAgIH0gZWxzZSBpZiAod2luZG93LndlYjMpIHtcclxuICAgICAgd2luZG93LndlYjMgPSBuZXcgV2ViMyh3aW5kb3cud2ViMy5jdXJyZW50UHJvdmlkZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFxyXG4gICAgICAgIFwiTm9uLUV0aGVyZXVtIGJyb3dzZXIgZGV0ZWN0ZWQuIFlvdSBzaG91bGQgY29uc2lkZXIgdHJ5aW5nIE1ldGFNYXNrIVwiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB3aW5kb3cuYWxlcnQoXCJUcm91YmxlIGNvbm5lY3RpbmcgdG8geW91IHdlYjMgYnJvd3Nlci4uLlwiKTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBHZW5lcmFsIGxvYWRpbmcgZnJvbSB0aGUgYmxvY2tjaGFpbiBhbmQgaW5zdGFudGlhdGluZyB0aGUgY29udHJhY3RcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkQmxvY2tjaGFpbkRhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3Qgd2ViMyA9IG5ldyBXZWIzKFdlYjMuZ2l2ZW5Qcm92aWRlciB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6ODU0NVwiKTtcclxuICB0aGlzLnNldFN0YXRlKHsgYWNjb3VudDogdGhpcy5jb250ZXh0LmFjY291bnQgfSk7XHJcbiAgY29uc3QgY29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoQUJJLCBBRERSRVNTKTtcclxuICB0aGlzLnNldFN0YXRlKHsgY29udHJhY3QgfSk7XHJcbiAgY29uc3QgaXNFeGlzdHMgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzXHJcbiAgICAuaXNVc2VyRXhpc3RzKHRoaXMuc3RhdGUuYWNjb3VudClcclxuICAgIC5jYWxsKCk7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGlzRXhpc3Q6IGlzRXhpc3RzIH0pO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9