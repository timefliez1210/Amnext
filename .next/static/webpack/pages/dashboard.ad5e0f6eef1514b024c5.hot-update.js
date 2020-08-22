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
    _jsxFileName = "C:\\Users\\crfab\\Desktop\\forsage-boilerplate\\components\\sidebar\\UserContent.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var UserContent = function UserContent(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      copySuccess = _useState[0],
      setCopySuccess = _useState[1];

  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  function copyToClipboard(e) {
    inputRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    setCopySuccess("Copied!");
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-2047743731" + " " + "content-user",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("h4", {
    className: "jsx-2047743731",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, props.title), __jsx("form", {
    className: "jsx-2047743731",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("input", {
    ref: inputRef,
    value: props.placeholder,
    className: "jsx-2047743731",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  })), __jsx("br", {
    className: "jsx-2047743731",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }),
  /* Logical shortcut for only displaying the 
  button if the copy command exists */
  document.queryCommandSupported("copy") && __jsx("div", {
    className: "jsx-2047743731",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("button", {
    onClick: copyToClipboard,
    className: "jsx-2047743731" + " " + "copy",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, "Copy"), __jsx("button", {
    className: "jsx-2047743731" + " " + "etherscan",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, "To Etherscan")), __jsx("div", {
    className: "jsx-2047743731" + " " + "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, copySuccess)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2047743731",
    __self: _this
  }, "h4.jsx-2047743731{margin-top:5px;}.content-user.jsx-2047743731{background:rgba(16,1,62,1);width:90%;padding:10px 10px;margin:20px auto;border-radius:20px;text-align:center;}input.jsx-2047743731{width:auto;margin:10px auto;text-align:center;padding:5px 10px;overflow:auto;border-radius:10px;background:#271950;border:none;color:white;}.success.jsx-2047743731{background:green;color:black;}.success.jsx-2047743731{background:green;color:black;}.success.jsx-2047743731{background:green;color:black;}.success.jsx-2047743731{background:green;color:black;}button.jsx-2047743731{margin:10px 15px;border:none;color:white;border-radius:10px;padding:10px 25px;}.copy.jsx-2047743731{background:rgb(31,168,255);background:linear-gradient( 223deg, rgba(31,168,255,1) 22%, rgba(19,108,255,1) 47% );}.etherscan.jsx-2047743731{background:#271950;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY3JmYWJcXERlc2t0b3BcXGZvcnNhZ2UtYm9pbGVycGxhdGVcXGNvbXBvbmVudHNcXHNpZGViYXJcXFVzZXJDb250ZW50LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ2tCLEFBRzBCLEFBR2UsQUFRbkIsQUFhTSxBQUlBLEFBT1ksQUFRVixXQS9CRixJQVhuQixFQXdCYyxBQUlBLEVBZWQsUUF4Q1ksQUFvQ1QsQ0EzQmlCLENBYXBCLEFBSWMsUUF6Qk0sSUEwQkMsS0FqQkYsU0FSQSxLQTBCQyxHQWpCSixTQVJLLEtBU0EsQ0FpQnJCLGFBekJvQixLQVNDLGFBUnJCLEdBZ0NBLEdBdkJjLFlBQ0EsWUFDZCIsImZpbGUiOiJDOlxcVXNlcnNcXGNyZmFiXFxEZXNrdG9wXFxmb3JzYWdlLWJvaWxlcnBsYXRlXFxjb21wb25lbnRzXFxzaWRlYmFyXFxVc2VyQ29udGVudC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgVXNlckNvbnRlbnQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbY29weVN1Y2Nlc3MsIHNldENvcHlTdWNjZXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGZ1bmN0aW9uIGNvcHlUb0NsaXBib2FyZChlKSB7XHJcbiAgICBpbnB1dFJlZi5jdXJyZW50LnNlbGVjdCgpO1xyXG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xyXG4gICAgZS50YXJnZXQuZm9jdXMoKTtcclxuICAgIHNldENvcHlTdWNjZXNzKFwiQ29waWVkIVwiKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtdXNlclwiPlxyXG4gICAgICAgIDxoND57cHJvcHMudGl0bGV9PC9oND5cclxuICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgIDxpbnB1dCByZWY9e2lucHV0UmVmfSB2YWx1ZT17cHJvcHMucGxhY2Vob2xkZXJ9IC8+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIC8qIExvZ2ljYWwgc2hvcnRjdXQgZm9yIG9ubHkgZGlzcGxheWluZyB0aGUgXHJcbiAgICAgICAgICBidXR0b24gaWYgdGhlIGNvcHkgY29tbWFuZCBleGlzdHMgKi9cclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5Q29tbWFuZFN1cHBvcnRlZChcImNvcHlcIikgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY29weVwiIG9uQ2xpY2s9e2NvcHlUb0NsaXBib2FyZH0+XHJcbiAgICAgICAgICAgICAgICBDb3B5XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJldGhlcnNjYW5cIj5UbyBFdGhlcnNjYW48L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VjY2Vzc1wiPntjb3B5U3VjY2Vzc308L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGVudC11c2VyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTYsIDEsIDYyLCAxKTtcclxuICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMyNzE5NTA7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdWNjZXNzIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGdyZWVuO1xyXG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDE1cHg7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweCAyNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29weSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMzEsIDE2OCwgMjU1KTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgMjIzZGVnLFxyXG4gICAgICAgICAgICByZ2JhKDMxLCAxNjgsIDI1NSwgMSkgMjIlLFxyXG4gICAgICAgICAgICByZ2JhKDE5LCAxMDgsIDI1NSwgMSkgNDclXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZXRoZXJzY2FuIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMyNzE5NTA7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlckNvbnRlbnQ7XHJcblxyXG57XHJcbiAgLyogPGRpdj5cclxue1xyXG4gIGRvY3VtZW50LnF1ZXJ5Q29tbWFuZFN1cHBvcnRlZChcImNvcHlcIikgJiYgKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjb3B5VG9DbGlwYm9hcmR9PkNvcHk8L2J1dHRvbj5cclxuICAgICAge2NvcHlTdWNjZXNzfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbjxmb3JtPlxyXG4gIDx0ZXh0YXJlYSByZWY9e2lucHV0UmVmfSB2YWx1ZT1cIlNvbWUgdGV4dCB0byBjb3B5XCIgLz5cclxuPC9mb3JtPlxyXG48L2Rpdj4gKi9cclxufVxyXG5cclxuLy8gdHlwZT1cInRleHRcIlxyXG4vLyBkaXNhYmxlZD1cImRpc2FibGVkXCJcclxuLy8gcGxhY2Vob2xkZXI9e3Byb3BzLnBsYWNlaG9sZGVyfVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\crfab\\\\Desktop\\\\forsage-boilerplate\\\\components\\\\sidebar\\\\UserContent.jsx */"));
};

_s(UserContent, "ek0iMiP4Amp/YG+IIXLFKyatfeY=");

_c = UserContent;
/* harmony default export */ __webpack_exports__["default"] = (UserContent);
{
  /* <div>
  {
  document.queryCommandSupported("copy") && (
    <div>
      <button onClick={copyToClipboard}>Copy</button>
      {copySuccess}
    </div>
  )
  }
  <form>
  <textarea ref={inputRef} value="Some text to copy" />
  </form>
  </div> */
} // type="text"
// disabled="disabled"
// placeholder={props.placeholder}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaWRlYmFyL1VzZXJDb250ZW50LmpzeCJdLCJuYW1lcyI6WyJVc2VyQ29udGVudCIsInByb3BzIiwidXNlU3RhdGUiLCJjb3B5U3VjY2VzcyIsInNldENvcHlTdWNjZXNzIiwiaW5wdXRSZWYiLCJ1c2VSZWYiLCJjb3B5VG9DbGlwYm9hcmQiLCJlIiwiY3VycmVudCIsInNlbGVjdCIsImRvY3VtZW50IiwiZXhlY0NvbW1hbmQiLCJ0YXJnZXQiLCJmb2N1cyIsInRpdGxlIiwicGxhY2Vob2xkZXIiLCJxdWVyeUNvbW1hbmRTdXBwb3J0ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNTQyxzREFBUSxDQUFDLEVBQUQsQ0FEakI7QUFBQSxNQUN0QkMsV0FEc0I7QUFBQSxNQUNUQyxjQURTOztBQUU3QixNQUFNQyxRQUFRLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUF2Qjs7QUFDQSxXQUFTQyxlQUFULENBQXlCQyxDQUF6QixFQUE0QjtBQUMxQkgsWUFBUSxDQUFDSSxPQUFULENBQWlCQyxNQUFqQjtBQUNBQyxZQUFRLENBQUNDLFdBQVQsQ0FBcUIsTUFBckI7QUFDQUosS0FBQyxDQUFDSyxNQUFGLENBQVNDLEtBQVQ7QUFDQVYsa0JBQWMsQ0FBQyxTQUFELENBQWQ7QUFDRDs7QUFFRCxTQUNFLG1FQUNFO0FBQUEsd0NBQWUsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtILEtBQUssQ0FBQ2MsS0FBWCxDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxPQUFHLEVBQUVWLFFBQVo7QUFBc0IsU0FBSyxFQUFFSixLQUFLLENBQUNlLFdBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBRkYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRjtBQU9JOztBQUVBTCxVQUFRLENBQUNNLHFCQUFULENBQStCLE1BQS9CLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBeUIsV0FBTyxFQUFFVixlQUFsQztBQUFBLHdDQUFrQixNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFJRTtBQUFBLHdDQUFrQixXQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpGLENBVk4sRUFrQkU7QUFBQSx3Q0FBZSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMEJKLFdBQTFCLENBbEJGLENBREY7QUFBQTtBQUFBO0FBQUEsc3lLQURGO0FBeUVELENBbkZEOztHQUFNSCxXOztLQUFBQSxXO0FBcUZTQSwwRUFBZjtBQUVBO0FBQ0U7Ozs7Ozs7Ozs7Ozs7QUFhRCxDLENBRUQ7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC5hZDVlMGY2ZWVmMTUxNGIwMjRjNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFVzZXJDb250ZW50ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2NvcHlTdWNjZXNzLCBzZXRDb3B5U3VjY2Vzc10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZihudWxsKTtcclxuICBmdW5jdGlvbiBjb3B5VG9DbGlwYm9hcmQoZSkge1xyXG4gICAgaW5wdXRSZWYuY3VycmVudC5zZWxlY3QoKTtcclxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcclxuICAgIGUudGFyZ2V0LmZvY3VzKCk7XHJcbiAgICBzZXRDb3B5U3VjY2VzcyhcIkNvcGllZCFcIik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LXVzZXJcIj5cclxuICAgICAgICA8aDQ+e3Byb3BzLnRpdGxlfTwvaDQ+XHJcbiAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICA8aW5wdXQgcmVmPXtpbnB1dFJlZn0gdmFsdWU9e3Byb3BzLnBsYWNlaG9sZGVyfSAvPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAvKiBMb2dpY2FsIHNob3J0Y3V0IGZvciBvbmx5IGRpc3BsYXlpbmcgdGhlIFxyXG4gICAgICAgICAgYnV0dG9uIGlmIHRoZSBjb3B5IGNvbW1hbmQgZXhpc3RzICovXHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeUNvbW1hbmRTdXBwb3J0ZWQoXCJjb3B5XCIpICYmIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNvcHlcIiBvbkNsaWNrPXtjb3B5VG9DbGlwYm9hcmR9PlxyXG4gICAgICAgICAgICAgICAgQ29weVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZXRoZXJzY2FuXCI+VG8gRXRoZXJzY2FuPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Y2Nlc3NcIj57Y29weVN1Y2Nlc3N9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRlbnQtdXNlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2LCAxLCA2MiwgMSk7XHJcbiAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjcxOTUwO1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3VjY2VzcyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBncmVlbjtcclxuICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgIG1hcmdpbjogMTBweCAxNXB4O1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvcHkge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiKDMxLCAxNjgsIDI1NSk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgIDIyM2RlZyxcclxuICAgICAgICAgICAgcmdiYSgzMSwgMTY4LCAyNTUsIDEpIDIyJSxcclxuICAgICAgICAgICAgcmdiYSgxOSwgMTA4LCAyNTUsIDEpIDQ3JVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmV0aGVyc2NhbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjcxOTUwO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJDb250ZW50O1xyXG5cclxue1xyXG4gIC8qIDxkaXY+XHJcbntcclxuICBkb2N1bWVudC5xdWVyeUNvbW1hbmRTdXBwb3J0ZWQoXCJjb3B5XCIpICYmIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17Y29weVRvQ2xpcGJvYXJkfT5Db3B5PC9idXR0b24+XHJcbiAgICAgIHtjb3B5U3VjY2Vzc31cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG48Zm9ybT5cclxuICA8dGV4dGFyZWEgcmVmPXtpbnB1dFJlZn0gdmFsdWU9XCJTb21lIHRleHQgdG8gY29weVwiIC8+XHJcbjwvZm9ybT5cclxuPC9kaXY+ICovXHJcbn1cclxuXHJcbi8vIHR5cGU9XCJ0ZXh0XCJcclxuLy8gZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXHJcbi8vIHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlcn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==