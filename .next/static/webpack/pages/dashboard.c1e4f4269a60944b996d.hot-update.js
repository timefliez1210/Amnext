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
    inputField.select();
    document.execCommand("copy"); // This is just personal preference.
    // I prefer to not show the whole text area selected.

    e.target.focus(); // this.setState({ copySuccess: "Copied!" });
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
      return inputField = inputfield;
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
  }, "h4.jsx-2941962741{margin-top:5px;}.content-user.jsx-2941962741{background:rgba(16,1,62,1);width:90%;padding:10px 10px;margin:20px auto;border-radius:20px;text-align:center;}input.jsx-2941962741{width:auto;margin:10px auto;text-align:center;padding:5px 10px;overflow:auto;border-radius:10px;background:#271950;border:none;}input.jsx-2941962741::-webkit-input-placeholder{color:white;}input.jsx-2941962741::-moz-placeholder{color:white;}input.jsx-2941962741:-ms-input-placeholder{color:white;}input.jsx-2941962741::placeholder{color:white;}input.jsx-2941962741::disabled{background:#271950;}button.jsx-2941962741{margin:10px 15px;border:none;color:white;border-radius:10px;padding:10px 25px;}.copy.jsx-2941962741{background:rgb(31,168,255);background:linear-gradient( 223deg, rgba(31,168,255,1) 22%, rgba(19,108,255,1) 47% );}.etherscan.jsx-2941962741{background:#271950;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXHNpZGViYXJcXFVzZXJDb250ZW50LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQmtCLEFBRzBCLEFBR2UsQUFRbkIsQUFVQyxBQUdPLEFBR0YsQUFPWSxBQVFWLFdBOUJGLENBVW5CLEdBckJBLEVBMkJjLEVBSGQsQUFrQkEsUUF2Q1ksQUFtQ1QsQ0ExQmlCLENBZ0JOLFFBeEJNLElBeUJDLEtBaEJGLFNBUkEsS0F5QkMsR0FoQkosU0FSSyxLQVNBLENBZ0JyQixhQXhCb0IsS0FTQyxhQVJyQixHQStCQSxHQXRCYyxZQUNkIiwiZmlsZSI6IkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXHNpZGViYXJcXFVzZXJDb250ZW50LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFVzZXJDb250ZW50ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgY29weVRvQ2xpcGJvYXJkID0gKGUpID0+IHtcclxuICAgIGlucHV0RmllbGQuc2VsZWN0KCk7XHJcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XHJcbiAgICAvLyBUaGlzIGlzIGp1c3QgcGVyc29uYWwgcHJlZmVyZW5jZS5cclxuICAgIC8vIEkgcHJlZmVyIHRvIG5vdCBzaG93IHRoZSB3aG9sZSB0ZXh0IGFyZWEgc2VsZWN0ZWQuXHJcbiAgICBlLnRhcmdldC5mb2N1cygpO1xyXG4gICAgLy8gdGhpcy5zZXRTdGF0ZSh7IGNvcHlTdWNjZXNzOiBcIkNvcGllZCFcIiB9KTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtdXNlclwiPlxyXG4gICAgICAgIDxoND57cHJvcHMudGl0bGV9PC9oND5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHJlZj17KGlucHV0ZmllbGQpID0+IChpbnB1dEZpZWxkID0gaW5wdXRmaWVsZCl9XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBkaXNhYmxlZD1cImRpc2FibGVkXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgIHZhbHVlPXtwcm9wcy5wbGFjZWhvbGRlcn1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY29weVwiIG9uQ2xpY2s9e2NvcHlUb0NsaXBib2FyZCgpfT5cclxuICAgICAgICAgIENvcHlcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImV0aGVyc2NhblwiPlRvIEV0aGVyc2NhbjwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRlbnQtdXNlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2LCAxLCA2MiwgMSk7XHJcbiAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjcxOTUwO1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dDo6ZGlzYWJsZWQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzI3MTk1MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgIG1hcmdpbjogMTBweCAxNXB4O1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvcHkge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiKDMxLCAxNjgsIDI1NSk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgIDIyM2RlZyxcclxuICAgICAgICAgICAgcmdiYSgzMSwgMTY4LCAyNTUsIDEpIDIyJSxcclxuICAgICAgICAgICAgcmdiYSgxOSwgMTA4LCAyNTUsIDEpIDQ3JVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmV0aGVyc2NhbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjcxOTUwO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJDb250ZW50O1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\components\\\\sidebar\\\\UserContent.jsx */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaWRlYmFyL1VzZXJDb250ZW50LmpzeCJdLCJuYW1lcyI6WyJVc2VyQ29udGVudCIsInByb3BzIiwiY29weVRvQ2xpcGJvYXJkIiwiZSIsImlucHV0RmllbGQiLCJzZWxlY3QiLCJkb2N1bWVudCIsImV4ZWNDb21tYW5kIiwidGFyZ2V0IiwiZm9jdXMiLCJ0aXRsZSIsImlucHV0ZmllbGQiLCJwbGFjZWhvbGRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBVztBQUM3QixNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLENBQUQsRUFBTztBQUM3QkMsY0FBVSxDQUFDQyxNQUFYO0FBQ0FDLFlBQVEsQ0FBQ0MsV0FBVCxDQUFxQixNQUFyQixFQUY2QixDQUc3QjtBQUNBOztBQUNBSixLQUFDLENBQUNLLE1BQUYsQ0FBU0MsS0FBVCxHQUw2QixDQU03QjtBQUNELEdBUEQ7O0FBUUEsU0FDRSxtRUFDRTtBQUFBLHdDQUFlLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLUixLQUFLLENBQUNTLEtBQVgsQ0FERixFQUVFO0FBQ0UsT0FBRyxFQUFFLGFBQUNDLFVBQUQ7QUFBQSxhQUFpQlAsVUFBVSxHQUFHTyxVQUE5QjtBQUFBLEtBRFA7QUFFRSxRQUFJLEVBQUMsTUFGUDtBQUdFLFlBQVEsRUFBQyxVQUhYO0FBSUUsZUFBVyxFQUFFVixLQUFLLENBQUNXLFdBSnJCO0FBS0UsU0FBSyxFQUFFWCxLQUFLLENBQUNXLFdBTGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixFQVVFO0FBQXlCLFdBQU8sRUFBRVYsZUFBZSxFQUFqRDtBQUFBLHdDQUFrQixNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkYsRUFhRTtBQUFBLHdDQUFrQixXQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWJGLENBREY7QUFBQTtBQUFBO0FBQUEsNi9JQURGO0FBa0VELENBM0VEOztLQUFNRixXO0FBNkVTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQuYzFlNGY0MjY5YTYwOTQ0Yjk5NmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFVzZXJDb250ZW50ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgY29weVRvQ2xpcGJvYXJkID0gKGUpID0+IHtcclxuICAgIGlucHV0RmllbGQuc2VsZWN0KCk7XHJcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XHJcbiAgICAvLyBUaGlzIGlzIGp1c3QgcGVyc29uYWwgcHJlZmVyZW5jZS5cclxuICAgIC8vIEkgcHJlZmVyIHRvIG5vdCBzaG93IHRoZSB3aG9sZSB0ZXh0IGFyZWEgc2VsZWN0ZWQuXHJcbiAgICBlLnRhcmdldC5mb2N1cygpO1xyXG4gICAgLy8gdGhpcy5zZXRTdGF0ZSh7IGNvcHlTdWNjZXNzOiBcIkNvcGllZCFcIiB9KTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtdXNlclwiPlxyXG4gICAgICAgIDxoND57cHJvcHMudGl0bGV9PC9oND5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHJlZj17KGlucHV0ZmllbGQpID0+IChpbnB1dEZpZWxkID0gaW5wdXRmaWVsZCl9XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBkaXNhYmxlZD1cImRpc2FibGVkXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgIHZhbHVlPXtwcm9wcy5wbGFjZWhvbGRlcn1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY29weVwiIG9uQ2xpY2s9e2NvcHlUb0NsaXBib2FyZCgpfT5cclxuICAgICAgICAgIENvcHlcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImV0aGVyc2NhblwiPlRvIEV0aGVyc2NhbjwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRlbnQtdXNlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2LCAxLCA2MiwgMSk7XHJcbiAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjcxOTUwO1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dDo6ZGlzYWJsZWQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzI3MTk1MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgIG1hcmdpbjogMTBweCAxNXB4O1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvcHkge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiKDMxLCAxNjgsIDI1NSk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgIDIyM2RlZyxcclxuICAgICAgICAgICAgcmdiYSgzMSwgMTY4LCAyNTUsIDEpIDIyJSxcclxuICAgICAgICAgICAgcmdiYSgxOSwgMTA4LCAyNTUsIDEpIDQ3JVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmV0aGVyc2NhbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjcxOTUwO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJDb250ZW50O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9