webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./components/sidebar/UserContent.jsx":
/*!********************************************!*\
  !*** ./components/sidebar/UserContent.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\crfab\\Desktop\\forsage-boilerplate\\components\\sidebar\\UserContent.jsx";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var UserContent = function UserContent(props) {
  var copyToClipboard = function copyToClipboard(e) {
    _this.inputField.select();

    document.execCommand("copy"); // This is just personal preference.
    // I prefer to not show the whole text area selected.

    e.target.focus();

    _this.setState({
      copySuccess: "Copied!"
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-2941962741" + " " + "content-user",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("h4", {
    className: "jsx-2941962741",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, props.title), __jsx("input", {
    ref: function ref(inputfield) {
      return _this.inputField = inputfield;
    },
    type: "text",
    disabled: "disabled",
    placeholder: props.placeholder,
    value: props.placeholder,
    className: "jsx-2941962741",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }), __jsx("br", {
    className: "jsx-2941962741",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }), __jsx("button", {
    onClick: copyToClipboard(),
    className: "jsx-2941962741" + " " + "copy",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, "Copy"), __jsx("button", {
    className: "jsx-2941962741" + " " + "etherscan",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "To Etherscan")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2941962741",
    __self: _this
  }, "h4.jsx-2941962741{margin-top:5px;}.content-user.jsx-2941962741{background:rgba(16,1,62,1);width:90%;padding:10px 10px;margin:20px auto;border-radius:20px;text-align:center;}input.jsx-2941962741{width:auto;margin:10px auto;text-align:center;padding:5px 10px;overflow:auto;border-radius:10px;background:#271950;border:none;}input.jsx-2941962741::-webkit-input-placeholder{color:white;}input.jsx-2941962741::-moz-placeholder{color:white;}input.jsx-2941962741:-ms-input-placeholder{color:white;}input.jsx-2941962741::placeholder{color:white;}input.jsx-2941962741::disabled{background:#271950;}button.jsx-2941962741{margin:10px 15px;border:none;color:white;border-radius:10px;padding:10px 25px;}.copy.jsx-2941962741{background:rgb(31,168,255);background:linear-gradient( 223deg, rgba(31,168,255,1) 22%, rgba(19,108,255,1) 47% );}.etherscan.jsx-2941962741{background:#271950;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXHNpZGViYXJcXFVzZXJDb250ZW50LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQmtCLEFBRzBCLEFBR2UsQUFRbkIsQUFVQyxBQUdPLEFBR0YsQUFPWSxBQVFWLFdBOUJGLENBVW5CLEdBckJBLEVBMkJjLEVBSGQsQUFrQkEsUUF2Q1ksQUFtQ1QsQ0ExQmlCLENBZ0JOLFFBeEJNLElBeUJDLEtBaEJGLFNBUkEsS0F5QkMsR0FoQkosU0FSSyxLQVNBLENBZ0JyQixhQXhCb0IsS0FTQyxhQVJyQixHQStCQSxHQXRCYyxZQUNkIiwiZmlsZSI6IkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXHNpZGViYXJcXFVzZXJDb250ZW50LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFVzZXJDb250ZW50ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgY29weVRvQ2xpcGJvYXJkID0gKGUpID0+IHtcclxuICAgIHRoaXMuaW5wdXRGaWVsZC5zZWxlY3QoKTtcclxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcclxuICAgIC8vIFRoaXMgaXMganVzdCBwZXJzb25hbCBwcmVmZXJlbmNlLlxyXG4gICAgLy8gSSBwcmVmZXIgdG8gbm90IHNob3cgdGhlIHdob2xlIHRleHQgYXJlYSBzZWxlY3RlZC5cclxuICAgIGUudGFyZ2V0LmZvY3VzKCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY29weVN1Y2Nlc3M6IFwiQ29waWVkIVwiIH0pO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC11c2VyXCI+XHJcbiAgICAgICAgPGg0Pntwcm9wcy50aXRsZX08L2g0PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgcmVmPXsoaW5wdXRmaWVsZCkgPT4gKHRoaXMuaW5wdXRGaWVsZCA9IGlucHV0ZmllbGQpfVxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICB2YWx1ZT17cHJvcHMucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNvcHlcIiBvbkNsaWNrPXtjb3B5VG9DbGlwYm9hcmQoKX0+XHJcbiAgICAgICAgICBDb3B5XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJldGhlcnNjYW5cIj5UbyBFdGhlcnNjYW48L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBoNCB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250ZW50LXVzZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxNiwgMSwgNjIsIDEpO1xyXG4gICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzI3MTk1MDtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQ6OmRpc2FibGVkIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMyNzE5NTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICBtYXJnaW46IDEwcHggMTVweDtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb3B5IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigzMSwgMTY4LCAyNTUpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAyMjNkZWcsXHJcbiAgICAgICAgICAgIHJnYmEoMzEsIDE2OCwgMjU1LCAxKSAyMiUsXHJcbiAgICAgICAgICAgIHJnYmEoMTksIDEwOCwgMjU1LCAxKSA0NyVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ldGhlcnNjYW4ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzI3MTk1MDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyQ29udGVudDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\components\\\\sidebar\\\\UserContent.jsx */"));
};

_c = UserContent;
/* harmony default export */ __webpack_exports__["default"] = (UserContent);

var _c;

$RefreshReg$(_c, "UserContent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaWRlYmFyL1VzZXJDb250ZW50LmpzeCJdLCJuYW1lcyI6WyJVc2VyQ29udGVudCIsInByb3BzIiwiY29weVRvQ2xpcGJvYXJkIiwiZSIsImlucHV0RmllbGQiLCJzZWxlY3QiLCJkb2N1bWVudCIsImV4ZWNDb21tYW5kIiwidGFyZ2V0IiwiZm9jdXMiLCJzZXRTdGF0ZSIsImNvcHlTdWNjZXNzIiwidGl0bGUiLCJpbnB1dGZpZWxkIiwicGxhY2Vob2xkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQVc7QUFDN0IsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxDQUFELEVBQU87QUFDN0IsU0FBSSxDQUFDQyxVQUFMLENBQWdCQyxNQUFoQjs7QUFDQUMsWUFBUSxDQUFDQyxXQUFULENBQXFCLE1BQXJCLEVBRjZCLENBRzdCO0FBQ0E7O0FBQ0FKLEtBQUMsQ0FBQ0ssTUFBRixDQUFTQyxLQUFUOztBQUNBLFNBQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUVDLGlCQUFXLEVBQUU7QUFBZixLQUFkO0FBQ0QsR0FQRDs7QUFRQSxTQUNFLG1FQUNFO0FBQUEsd0NBQWUsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtWLEtBQUssQ0FBQ1csS0FBWCxDQURGLEVBRUU7QUFDRSxPQUFHLEVBQUUsYUFBQ0MsVUFBRDtBQUFBLGFBQWlCLEtBQUksQ0FBQ1QsVUFBTCxHQUFrQlMsVUFBbkM7QUFBQSxLQURQO0FBRUUsUUFBSSxFQUFDLE1BRlA7QUFHRSxZQUFRLEVBQUMsVUFIWDtBQUlFLGVBQVcsRUFBRVosS0FBSyxDQUFDYSxXQUpyQjtBQUtFLFNBQUssRUFBRWIsS0FBSyxDQUFDYSxXQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsRUFVRTtBQUF5QixXQUFPLEVBQUVaLGVBQWUsRUFBakQ7QUFBQSx3Q0FBa0IsTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZGLEVBYUU7QUFBQSx3Q0FBa0IsV0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFiRixDQURGO0FBQUE7QUFBQTtBQUFBLHFnSkFERjtBQWtFRCxDQTNFRDs7S0FBTUYsVztBQTZFU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLjU5NzBmZTA0YjJjZjIwMGEwNjQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBVc2VyQ29udGVudCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNvcHlUb0NsaXBib2FyZCA9IChlKSA9PiB7XHJcbiAgICB0aGlzLmlucHV0RmllbGQuc2VsZWN0KCk7XHJcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XHJcbiAgICAvLyBUaGlzIGlzIGp1c3QgcGVyc29uYWwgcHJlZmVyZW5jZS5cclxuICAgIC8vIEkgcHJlZmVyIHRvIG5vdCBzaG93IHRoZSB3aG9sZSB0ZXh0IGFyZWEgc2VsZWN0ZWQuXHJcbiAgICBlLnRhcmdldC5mb2N1cygpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvcHlTdWNjZXNzOiBcIkNvcGllZCFcIiB9KTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtdXNlclwiPlxyXG4gICAgICAgIDxoND57cHJvcHMudGl0bGV9PC9oND5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHJlZj17KGlucHV0ZmllbGQpID0+ICh0aGlzLmlucHV0RmllbGQgPSBpbnB1dGZpZWxkKX1cclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIGRpc2FibGVkPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgdmFsdWU9e3Byb3BzLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjb3B5XCIgb25DbGljaz17Y29weVRvQ2xpcGJvYXJkKCl9PlxyXG4gICAgICAgICAgQ29weVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZXRoZXJzY2FuXCI+VG8gRXRoZXJzY2FuPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGVudC11c2VyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTYsIDEsIDYyLCAxKTtcclxuICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMyNzE5NTA7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0OjpkaXNhYmxlZCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjcxOTUwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDE1cHg7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweCAyNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29weSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMzEsIDE2OCwgMjU1KTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgMjIzZGVnLFxyXG4gICAgICAgICAgICByZ2JhKDMxLCAxNjgsIDI1NSwgMSkgMjIlLFxyXG4gICAgICAgICAgICByZ2JhKDE5LCAxMDgsIDI1NSwgMSkgNDclXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZXRoZXJzY2FuIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMyNzE5NTA7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlckNvbnRlbnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=