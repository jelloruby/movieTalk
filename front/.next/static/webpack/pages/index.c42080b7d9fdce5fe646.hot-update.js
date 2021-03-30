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


var _jsxFileName = "C:\\codingtime\\movieBox\\front\\components\\MovieMainSlider.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function MovieMainSlider(_ref) {
  _s();

  var _this = this;

  var movieInfomation = _ref.movieInfomation;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      afterChange = _useState[0],
      setAfterChange = _useState[1];

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    fade: true,
    arrows: false,
    autoplay: true,
    initialSlide: 0
  };
  var imageURL = 'https://image.tmdb.org/t/p/original/';
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, _objectSpread(_objectSpread({}, settings), {}, {
    children: movieInfomation.map(function (item) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "main-slider-item",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
          src: "".concat(imageURL).concat(item.backdrop_path),
          className: afterChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 25
        }, _this)
      }, item.id, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 21
      }, _this);
    })
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }, this);
}

_s(MovieMainSlider, "Zi3SCB2rdacbwkIJf2Yn5cE+SQQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb3ZpZU1haW5TbGlkZXIuanMiXSwibmFtZXMiOlsiTW92aWVNYWluU2xpZGVyIiwibW92aWVJbmZvbWF0aW9uIiwidXNlU3RhdGUiLCJhZnRlckNoYW5nZSIsInNldEFmdGVyQ2hhbmdlIiwic2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInNwZWVkIiwiZmFkZSIsImFycm93cyIsImF1dG9wbGF5IiwiaW5pdGlhbFNsaWRlIiwiaW1hZ2VVUkwiLCJtYXAiLCJpdGVtIiwiYmFja2Ryb3BfcGF0aCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFFQSxTQUFTQSxlQUFULE9BQThDO0FBQUE7O0FBQUE7O0FBQUEsTUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjs7QUFBQSxrQkFDSkMsc0RBQVEsQ0FBQyxFQUFELENBREo7QUFBQSxNQUNuQ0MsV0FEbUM7QUFBQSxNQUN0QkMsY0FEc0I7O0FBRzFDLE1BQU1DLFFBQVEsR0FBRztBQUNiQyxRQUFJLEVBQUUsS0FETztBQUViQyxZQUFRLEVBQUUsSUFGRztBQUdiQyxnQkFBWSxFQUFFLENBSEQ7QUFJYkMsa0JBQWMsRUFBRSxDQUpIO0FBS2JDLFNBQUssRUFBRSxHQUxNO0FBTWJDLFFBQUksRUFBRSxJQU5PO0FBT2JDLFVBQU0sRUFBRSxLQVBLO0FBUWJDLFlBQVEsRUFBRSxJQVJHO0FBU2JDLGdCQUFZLEVBQUU7QUFURCxHQUFqQjtBQVlBLE1BQU1DLFFBQVEsR0FBRyxzQ0FBakI7QUFFQSxzQkFDSSxxRUFBQyxrREFBRCxrQ0FBWVYsUUFBWjtBQUFBLGNBRVFKLGVBQWUsQ0FBQ2UsR0FBaEIsQ0FBb0IsVUFBQUMsSUFBSTtBQUFBLDBCQUNwQjtBQUFtQixpQkFBUyxFQUFDLGtCQUE3QjtBQUFBLCtCQUNJO0FBQUssYUFBRyxZQUFLRixRQUFMLFNBQWdCRSxJQUFJLENBQUNDLGFBQXJCLENBQVI7QUFBOEMsbUJBQVMsRUFBRWY7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLFNBQVVjLElBQUksQ0FBQ0UsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRG9CO0FBQUEsS0FBeEI7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFZSDs7R0E3QlFuQixlOztLQUFBQSxlO0FBK0JNQSw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jNDIwODBiN2Q5ZmRjZTVmZTY0Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XHJcblxyXG5mdW5jdGlvbiBNb3ZpZU1haW5TbGlkZXIoeyBtb3ZpZUluZm9tYXRpb24gfSkge1xyXG4gICAgY29uc3QgW2FmdGVyQ2hhbmdlLCBzZXRBZnRlckNoYW5nZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG5cclxuICAgIGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgICAgIGRvdHM6IGZhbHNlLCBcclxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgc3BlZWQ6IDUwMCxcclxuICAgICAgICBmYWRlOiB0cnVlLFxyXG4gICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgaW5pdGlhbFNsaWRlOiAwLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBpbWFnZVVSTCA9ICdodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9vcmlnaW5hbC8nXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1vdmllSW5mb21hdGlvbi5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0uaWR9IGNsYXNzTmFtZT1cIm1haW4tc2xpZGVyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake2ltYWdlVVJMfSR7aXRlbS5iYWNrZHJvcF9wYXRofWB9IGNsYXNzTmFtZT17YWZ0ZXJDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9TbGlkZXI+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpZU1haW5TbGlkZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==