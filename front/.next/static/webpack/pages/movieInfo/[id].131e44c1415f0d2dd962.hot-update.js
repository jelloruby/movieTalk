webpackHotUpdate_N_E("pages/movieInfo/[id]",{

/***/ "./pages/movieInfo/[id].js":
/*!*********************************!*\
  !*** ./pages/movieInfo/[id].js ***!
  \*********************************/
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\codingtime\\movieBox\\front\\pages\\movieInfo\\[id].js";





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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
      src: splitPoster(result.posters)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      children: replaceTitle(result.title)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      children: result.genre
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      children: result.rating
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      children: result.repRlsDate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      children: [result.runtime, "\uBD84"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW92aWVJbmZvLy5qcyJdLCJuYW1lcyI6WyJNb3ZpZUluZm8iLCJwcm9wcyIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJyZXBsYWNlVGl0bGUiLCJ0aXRsZSIsInJlcGxhY2UiLCJzcGxpdFBvc3RlciIsInBvc3RlcnMiLCJzcGxpdCIsImdlbnJlIiwicmF0aW5nIiwicmVwUmxzRGF0ZSIsInJ1bnRpbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUllLFNBQVNBLFNBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCO0FBQUEsTUFDOUJDLE1BRDhCLEdBQ25CRCxLQURtQixDQUM5QkMsTUFEOEI7QUFFdENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaOztBQUNBLE1BQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUM1QixXQUFPQSxLQUFLLENBQUNDLE9BQU4sQ0FBYyxVQUFkLEVBQTBCLEVBQTFCLENBQVA7QUFDSCxHQUZEOztBQUlBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLE9BQUQsRUFBYTtBQUM3QixRQUFHLENBQUNBLE9BQUosRUFBYTtBQUNUQSxhQUFPLEdBQUcsbUZBQVY7QUFDQSxhQUFPQSxPQUFQO0FBQ0gsS0FIRCxNQUdPO0FBQ0gsYUFBT0EsT0FBTyxDQUFDQyxLQUFSLENBQWMsR0FBZCxFQUFtQixDQUFuQixDQUFQO0FBQ0g7QUFDSixHQVBEOztBQVNBLHNCQUNJLHFFQUFDLDZEQUFEO0FBQUEsNEJBQ0k7QUFBSyxTQUFHLEVBQUVGLFdBQVcsQ0FBQ04sTUFBTSxDQUFDTyxPQUFSO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQUEsZ0JBQU1KLFlBQVksQ0FBQ0gsTUFBTSxDQUFDSSxLQUFSO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQUdJO0FBQUEsZ0JBQU1KLE1BQU0sQ0FBQ1M7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEosZUFJSTtBQUFBLGdCQUFNVCxNQUFNLENBQUNVO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKLGVBS0k7QUFBQSxnQkFBTVYsTUFBTSxDQUFDVztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSixlQU1JO0FBQUEsaUJBQU1YLE1BQU0sQ0FBQ1ksT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOSixlQU9JLHFFQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLFlBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWFIO0tBN0J1QmQsUztBQTZCdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbW92aWVJbmZvL1tpZF0uMTMxZTQ0YzE0MTVmMGQyZGQ5NjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0JztcclxuXHJcbmltcG9ydCB7IGdldE1vdmllU2VxRnJvbUtNREIgfSBmcm9tICcuLi8uLi9hcGknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpZUluZm8gKHByb3BzKSB7XHJcbiAgICBjb25zdCB7IHJlc3VsdCB9ID0gcHJvcHM7XHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgY29uc3QgcmVwbGFjZVRpdGxlID0gKHRpdGxlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRpdGxlLnJlcGxhY2UoLyFIU3whSEUvZywgXCJcIik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNwbGl0UG9zdGVyID0gKHBvc3RlcnMpID0+IHtcclxuICAgICAgICBpZighcG9zdGVycykge1xyXG4gICAgICAgICAgICBwb3N0ZXJzID0gXCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kdm1xYm92eGgvaW1hZ2UvdXBsb2FkL3YxNjE2ODY2MTcyL25vcG9zdGVyX3Bjd2NieS5wbmdcIjtcclxuICAgICAgICAgICAgcmV0dXJuIHBvc3RlcnM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBvc3RlcnMuc3BsaXQoXCJ8XCIpWzBdO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXBwTGF5b3V0PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17c3BsaXRQb3N0ZXIocmVzdWx0LnBvc3RlcnMpfSAvPlxyXG4gICAgICAgICAgICA8ZGl2PntyZXBsYWNlVGl0bGUocmVzdWx0LnRpdGxlKX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj57cmVzdWx0LmdlbnJlfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PntyZXN1bHQucmF0aW5nfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PntyZXN1bHQucmVwUmxzRGF0ZX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj57cmVzdWx0LnJ1bnRpbWV967aEPC9kaXY+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbW92aWVUYWxrXCI+XHJcbiAgICAgICAgICAgICAgICDrpqzrt7Dsk7DquLBcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBnZXRNb3ZpZVNlcUZyb21LTURCKGNvbnRleHQucXVlcnkuaWQpXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXMuRGF0YVswXS5SZXN1bHRbMF07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHsgcmVzdWx0IH0sXHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==