webpackHotUpdate_N_E("pages/movieInfo/[...slug]",{

/***/ "./pages/movieInfo/[...slug].js":
/*!**************************************!*\
  !*** ./pages/movieInfo/[...slug].js ***!
  \**************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MovieInfo; });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\codingtime\\movieBox\\front\\pages\\movieInfo\\[...slug].js";




var __N_SSP = true;
function MovieInfo(props) {
  var result = props.result;
  console.log(result);

  var replaceTitle = function replaceTitle(title) {
    return title.replace(/!HS|!HE/g, "");
  };

  var splitPoster = function splitPoster(posters) {
    if (!posters) {
      posters = "https://res.cloudinary.com/dvmqbovxh/image/upload/v1616866172/noposter_pcwcby.png";
      return posters;
    } else {
      return posters.split("|")[0];
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
      src: splitPoster(result.posters)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      children: replaceTitle(result.title)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      children: result.genre
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      children: result.rating
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      children: result.repRlsDate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      children: [result.runtime, "\uBD84"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
      href: "/movieTalk",
      children: "\uB9AC\uBDF0\uC4F0\uAE30"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, this);
}
_c = MovieInfo;
;

var _c;

$RefreshReg$(_c, "MovieInfo");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW92aWVJbmZvL1suLi5zbHVnXS5qcyJdLCJuYW1lcyI6WyJNb3ZpZUluZm8iLCJwcm9wcyIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJyZXBsYWNlVGl0bGUiLCJ0aXRsZSIsInJlcGxhY2UiLCJzcGxpdFBvc3RlciIsInBvc3RlcnMiLCJzcGxpdCIsImdlbnJlIiwicmF0aW5nIiwicmVwUmxzRGF0ZSIsInJ1bnRpbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBSWUsU0FBU0EsU0FBVCxDQUFvQkMsS0FBcEIsRUFBMkI7QUFBQSxNQUM5QkMsTUFEOEIsR0FDbkJELEtBRG1CLENBQzlCQyxNQUQ4QjtBQUV0Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVo7O0FBRUEsTUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQzVCLFdBQU9BLEtBQUssQ0FBQ0MsT0FBTixDQUFjLFVBQWQsRUFBMEIsRUFBMUIsQ0FBUDtBQUNILEdBRkQ7O0FBSUEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsT0FBRCxFQUFhO0FBQzdCLFFBQUcsQ0FBQ0EsT0FBSixFQUFhO0FBQ1RBLGFBQU8sR0FBRyxtRkFBVjtBQUNBLGFBQU9BLE9BQVA7QUFDSCxLQUhELE1BR087QUFDSCxhQUFPQSxPQUFPLENBQUNDLEtBQVIsQ0FBYyxHQUFkLEVBQW1CLENBQW5CLENBQVA7QUFDSDtBQUNKLEdBUEQ7O0FBU0Esc0JBQ0kscUVBQUMsNkRBQUQ7QUFBQSw0QkFDSTtBQUFLLFNBQUcsRUFBRUYsV0FBVyxDQUFDTixNQUFNLENBQUNPLE9BQVI7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBQSxnQkFBTUosWUFBWSxDQUFDSCxNQUFNLENBQUNJLEtBQVI7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBR0k7QUFBQSxnQkFBTUosTUFBTSxDQUFDUztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISixlQUlJO0FBQUEsZ0JBQU1ULE1BQU0sQ0FBQ1U7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkosZUFLSTtBQUFBLGdCQUFNVixNQUFNLENBQUNXO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKLGVBTUk7QUFBQSxpQkFBTVgsTUFBTSxDQUFDWSxPQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5KLGVBT0kscUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsWUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBYUg7S0E5QnVCZCxTO0FBOEJ2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tb3ZpZUluZm8vWy4uLnNsdWddLjFjYTYyM2Q5NWQwOGI0ZjNiY2VjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0JztcclxuXHJcbmltcG9ydCB7IGdldE1vdmllSW5mb0Zyb21LTURCIH0gZnJvbSAnLi4vLi4vYXBpJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVJbmZvIChwcm9wcykge1xyXG4gICAgY29uc3QgeyByZXN1bHQgfSA9IHByb3BzO1xyXG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcbiAgICBjb25zdCByZXBsYWNlVGl0bGUgPSAodGl0bGUpID0+IHtcclxuICAgICAgICByZXR1cm4gdGl0bGUucmVwbGFjZSgvIUhTfCFIRS9nLCBcIlwiKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc3BsaXRQb3N0ZXIgPSAocG9zdGVycykgPT4ge1xyXG4gICAgICAgIGlmKCFwb3N0ZXJzKSB7XHJcbiAgICAgICAgICAgIHBvc3RlcnMgPSBcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2R2bXFib3Z4aC9pbWFnZS91cGxvYWQvdjE2MTY4NjYxNzIvbm9wb3N0ZXJfcGN3Y2J5LnBuZ1wiO1xyXG4gICAgICAgICAgICByZXR1cm4gcG9zdGVycztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcG9zdGVycy5zcGxpdChcInxcIilbMF07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtzcGxpdFBvc3RlcihyZXN1bHQucG9zdGVycyl9IC8+XHJcbiAgICAgICAgICAgIDxkaXY+e3JlcGxhY2VUaXRsZShyZXN1bHQudGl0bGUpfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PntyZXN1bHQuZ2VucmV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+e3Jlc3VsdC5yYXRpbmd9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+e3Jlc3VsdC5yZXBSbHNEYXRlfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PntyZXN1bHQucnVudGltZX3rtoQ8L2Rpdj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tb3ZpZVRhbGtcIj5cclxuICAgICAgICAgICAgICAgIOumrOu3sOyTsOq4sFxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldE1vdmllSW5mb0Zyb21LTURCKGNvbnRleHQucXVlcnkuc2x1Z1swXSwgY29udGV4dC5xdWVyeS5zbHVnWzFdKVxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzLkRhdGFbMF0uUmVzdWx0O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7IHJlc3VsdCB9LFxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=