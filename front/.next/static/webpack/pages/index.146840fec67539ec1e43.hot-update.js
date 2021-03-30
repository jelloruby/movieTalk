webpackHotUpdate_N_E("pages/index",{

/***/ "./components/MovieMainSlider.js":
/*!***************************************!*\
  !*** ./components/MovieMainSlider.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\codingtime\\movieBox\\front\\components\\MovieMainSlider.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function MovieMainSlider(_ref) {
  var _this = this;

  var movieInfomation = _ref.movieInfomation;
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    fade: true,
    arrows: false,
    autoplay: true,
    initialSlide: 0,
    lazyLoad: 'progressive'
  };
  var imageURL = 'https://image.tmdb.org/t/p/original/';
  "";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, _objectSpread(_objectSpread({}, settings), {}, {
    children: movieInfomation.map(function (item) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "main-slider-item",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
          src: "".concat(imageURL).concat(item.backdrop_path),
          style: {}
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 25
        }, _this)
      }, item.id, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 21
      }, _this);
    })
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, this);
}

_c = MovieMainSlider;
/* harmony default export */ __webpack_exports__["default"] = (MovieMainSlider);

var _c;

$RefreshReg$(_c, "MovieMainSlider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb3ZpZU1haW5TbGlkZXIuanMiXSwibmFtZXMiOlsiTW92aWVNYWluU2xpZGVyIiwibW92aWVJbmZvbWF0aW9uIiwic2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInNwZWVkIiwiZmFkZSIsImFycm93cyIsImF1dG9wbGF5IiwiaW5pdGlhbFNsaWRlIiwibGF6eUxvYWQiLCJpbWFnZVVSTCIsIm1hcCIsIml0ZW0iLCJiYWNrZHJvcF9wYXRoIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFFQSxTQUFTQSxlQUFULE9BQThDO0FBQUE7O0FBQUEsTUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjtBQUMxQyxNQUFNQyxRQUFRLEdBQUc7QUFDYkMsUUFBSSxFQUFFLEtBRE87QUFFYkMsWUFBUSxFQUFFLElBRkc7QUFHYkMsZ0JBQVksRUFBRSxDQUhEO0FBSWJDLGtCQUFjLEVBQUUsQ0FKSDtBQUtiQyxTQUFLLEVBQUUsR0FMTTtBQU1iQyxRQUFJLEVBQUUsSUFOTztBQU9iQyxVQUFNLEVBQUUsS0FQSztBQVFiQyxZQUFRLEVBQUUsSUFSRztBQVNiQyxnQkFBWSxFQUFFLENBVEQ7QUFVYkMsWUFBUSxFQUFFO0FBVkcsR0FBakI7QUFZQSxNQUFNQyxRQUFRLEdBQUcsc0NBQWpCO0FBQ0E7QUFDQSxzQkFDSSxxRUFBQyxrREFBRCxrQ0FBWVgsUUFBWjtBQUFBLGNBRVFELGVBQWUsQ0FBQ2EsR0FBaEIsQ0FBb0IsVUFBQUMsSUFBSTtBQUFBLDBCQUNwQjtBQUFtQixpQkFBUyxFQUFDLGtCQUE3QjtBQUFBLCtCQUNJO0FBQUssYUFBRyxZQUFLRixRQUFMLFNBQWdCRSxJQUFJLENBQUNDLGFBQXJCLENBQVI7QUFBOEMsZUFBSyxFQUFFO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixTQUFVRCxJQUFJLENBQUNFLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURvQjtBQUFBLEtBQXhCO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBWUg7O0tBM0JRakIsZTtBQTZCTUEsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTQ2ODQwZmVjNjc1MzllYzFlNDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuXHJcbmZ1bmN0aW9uIE1vdmllTWFpblNsaWRlcih7IG1vdmllSW5mb21hdGlvbiB9KSB7XHJcbiAgICBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgICAgICBkb3RzOiBmYWxzZSwgXHJcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIHNwZWVkOiA1MDAsXHJcbiAgICAgICAgZmFkZTogdHJ1ZSxcclxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIGluaXRpYWxTbGlkZTogMCxcclxuICAgICAgICBsYXp5TG9hZDogJ3Byb2dyZXNzaXZlJyxcclxuICAgIH07XHJcbiAgICBjb25zdCBpbWFnZVVSTCA9ICdodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9vcmlnaW5hbC8nXHJcbiAgICBcIlwiXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbW92aWVJbmZvbWF0aW9uLm1hcChpdGVtID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPVwibWFpbi1zbGlkZXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7aW1hZ2VVUkx9JHtpdGVtLmJhY2tkcm9wX3BhdGh9YH0gc3R5bGU9e3sgIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9TbGlkZXI+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpZU1haW5TbGlkZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==