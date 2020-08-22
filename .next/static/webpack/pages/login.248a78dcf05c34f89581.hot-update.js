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
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals */ "./utils/globals.js");



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

            contract = new web3.eth.Contract(_globals__WEBPACK_IMPORTED_MODULE_2__["ABI"], _globals__WEBPACK_IMPORTED_MODULE_2__["ADDRESS"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdXRpbGl0eS5qcyJdLCJuYW1lcyI6WyJsb2FkV2ViMyIsIndpbmRvdyIsImV0aGVyZXVtIiwid2ViMyIsIldlYjMiLCJlbmFibGUiLCJjdXJyZW50UHJvdmlkZXIiLCJhbGVydCIsImxvYWRCbG9ja2NoYWluRGF0YSIsImdpdmVuUHJvdmlkZXIiLCJzZXRTdGF0ZSIsImFjY291bnQiLCJjb250ZXh0IiwiY29udHJhY3QiLCJldGgiLCJDb250cmFjdCIsIkFCSSIsIkFERFJFU1MiLCJtZXRob2RzIiwiaXNVc2VyRXhpc3RzIiwic3RhdGUiLCJjYWxsIiwiaXNFeGlzdHMiLCJpc0V4aXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7O0FBRU8sSUFBTUEsUUFBUTtBQUFBLDhMQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxpQkFFaEJDLE1BQU0sQ0FBQ0MsUUFGUztBQUFBO0FBQUE7QUFBQTs7QUFHbEJELGtCQUFNLENBQUNFLElBQVAsR0FBYyxJQUFJQyxJQUFKLENBQVNILE1BQU0sQ0FBQ0MsUUFBaEIsQ0FBZDtBQUhrQjtBQUFBLG1CQUlaRCxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JHLE1BQWhCLEVBSlk7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBS2IsZ0JBQUlKLE1BQU0sQ0FBQ0UsSUFBWCxFQUFpQjtBQUN0QkYsb0JBQU0sQ0FBQ0UsSUFBUCxHQUFjLElBQUlDLElBQUosQ0FBU0gsTUFBTSxDQUFDRSxJQUFQLENBQVlHLGVBQXJCLENBQWQ7QUFDRCxhQUZNLE1BRUE7QUFDTEwsb0JBQU0sQ0FBQ00sS0FBUCxDQUNFLHFFQURGO0FBR0Q7O0FBWG1CO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFhcEJOLGtCQUFNLENBQUNNLEtBQVAsQ0FBYSwyQ0FBYjs7QUFib0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBUlAsUUFBUTtBQUFBO0FBQUE7QUFBQSxHQUFkLEMsQ0FpQlA7O0FBRU8sSUFBTVEsa0JBQWtCO0FBQUEsK0xBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzFCTCxnQkFEMEIsR0FDbkIsSUFBSUMsSUFBSixDQUFTQSxJQUFJLENBQUNLLGFBQUwsSUFBc0IsdUJBQS9CLENBRG1COztBQUVoQyxpQkFBSSxDQUFDQyxRQUFMLENBQWM7QUFBRUMscUJBQU8sRUFBRSxLQUFJLENBQUNDLE9BQUwsQ0FBYUQ7QUFBeEIsYUFBZDs7QUFDTUUsb0JBSDBCLEdBR2YsSUFBSVYsSUFBSSxDQUFDVyxHQUFMLENBQVNDLFFBQWIsQ0FBc0JDLDRDQUF0QixFQUEyQkMsZ0RBQTNCLENBSGU7O0FBSWhDLGlCQUFJLENBQUNQLFFBQUwsQ0FBYztBQUFFRyxzQkFBUSxFQUFSQTtBQUFGLGFBQWQ7O0FBSmdDO0FBQUEsbUJBS1RBLFFBQVEsQ0FBQ0ssT0FBVCxDQUNwQkMsWUFEb0IsQ0FDUCxLQUFJLENBQUNDLEtBQUwsQ0FBV1QsT0FESixFQUVwQlUsSUFGb0IsRUFMUzs7QUFBQTtBQUsxQkMsb0JBTDBCOztBQVFoQyxpQkFBSSxDQUFDWixRQUFMLENBQWM7QUFBRWEscUJBQU8sRUFBRUQ7QUFBWCxhQUFkOztBQVJnQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFsQmQsa0JBQWtCO0FBQUE7QUFBQTtBQUFBLEdBQXhCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLjI0OGE3OGRjZjA1YzM0Zjg5NTgxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBQkksIEFERFJFU1MgfSBmcm9tIFwiLi9nbG9iYWxzXCI7XHJcblxyXG4vLyBGZXRjaGluZyBXRUIzIFByb3ZpZGVyXHJcblxyXG5leHBvcnQgY29uc3QgbG9hZFdlYjMgPSBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcclxuICAgICAgd2luZG93LndlYjMgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pO1xyXG4gICAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0uZW5hYmxlKCk7XHJcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy53ZWIzKSB7XHJcbiAgICAgIHdpbmRvdy53ZWIzID0gbmV3IFdlYjMod2luZG93LndlYjMuY3VycmVudFByb3ZpZGVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcclxuICAgICAgICBcIk5vbi1FdGhlcmV1bSBicm93c2VyIGRldGVjdGVkLiBZb3Ugc2hvdWxkIGNvbnNpZGVyIHRyeWluZyBNZXRhTWFzayFcIlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgd2luZG93LmFsZXJ0KFwiVHJvdWJsZSBjb25uZWN0aW5nIHRvIHlvdSB3ZWIzIGJyb3dzZXIuLi5cIik7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gR2VuZXJhbCBsb2FkaW5nIGZyb20gdGhlIGJsb2NrY2hhaW4gYW5kIGluc3RhbnRpYXRpbmcgdGhlIGNvbnRyYWN0XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZEJsb2NrY2hhaW5EYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyhXZWIzLmdpdmVuUHJvdmlkZXIgfHwgXCJodHRwOi8vbG9jYWxob3N0Ojg1NDVcIik7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGFjY291bnQ6IHRoaXMuY29udGV4dC5hY2NvdW50IH0pO1xyXG4gIGNvbnN0IGNvbnRyYWN0ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KEFCSSwgQUREUkVTUyk7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGNvbnRyYWN0IH0pO1xyXG4gIGNvbnN0IGlzRXhpc3RzID0gYXdhaXQgY29udHJhY3QubWV0aG9kc1xyXG4gICAgLmlzVXNlckV4aXN0cyh0aGlzLnN0YXRlLmFjY291bnQpXHJcbiAgICAuY2FsbCgpO1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBpc0V4aXN0OiBpc0V4aXN0cyB9KTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==