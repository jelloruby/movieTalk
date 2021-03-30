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
    initialSlide: 0
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
          lineNumber: 23,
          columnNumber: 25
        }, _this)
      }, item.id, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }, _this);
    })
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb3ZpZU1haW5TbGlkZXIuanMiXSwibmFtZXMiOlsiTW92aWVNYWluU2xpZGVyIiwibW92aWVJbmZvbWF0aW9uIiwic2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInNwZWVkIiwiZmFkZSIsImFycm93cyIsImF1dG9wbGF5IiwiaW5pdGlhbFNsaWRlIiwiaW1hZ2VVUkwiLCJtYXAiLCJpdGVtIiwiYmFja2Ryb3BfcGF0aCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBRUEsU0FBU0EsZUFBVCxPQUE4QztBQUFBOztBQUFBLE1BQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7QUFDMUMsTUFBTUMsUUFBUSxHQUFHO0FBQ2JDLFFBQUksRUFBRSxLQURPO0FBRWJDLFlBQVEsRUFBRSxJQUZHO0FBR2JDLGdCQUFZLEVBQUUsQ0FIRDtBQUliQyxrQkFBYyxFQUFFLENBSkg7QUFLYkMsU0FBSyxFQUFFLEdBTE07QUFNYkMsUUFBSSxFQUFFLElBTk87QUFPYkMsVUFBTSxFQUFFLEtBUEs7QUFRYkMsWUFBUSxFQUFFLElBUkc7QUFTYkMsZ0JBQVksRUFBRTtBQVRELEdBQWpCO0FBV0EsTUFBTUMsUUFBUSxHQUFHLHNDQUFqQjtBQUNBO0FBQ0Esc0JBQ0kscUVBQUMsa0RBQUQsa0NBQVlWLFFBQVo7QUFBQSxjQUVRRCxlQUFlLENBQUNZLEdBQWhCLENBQW9CLFVBQUFDLElBQUk7QUFBQSwwQkFDcEI7QUFBbUIsaUJBQVMsRUFBQyxrQkFBN0I7QUFBQSwrQkFDSTtBQUFLLGFBQUcsWUFBS0YsUUFBTCxTQUFnQkUsSUFBSSxDQUFDQyxhQUFyQixDQUFSO0FBQThDLGVBQUssRUFBRTtBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosU0FBVUQsSUFBSSxDQUFDRSxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEb0I7QUFBQSxLQUF4QjtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVlIOztLQTFCUWhCLGU7QUE0Qk1BLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZmMWQzYzlhMzEwMjI2YWU0NWQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XHJcblxyXG5mdW5jdGlvbiBNb3ZpZU1haW5TbGlkZXIoeyBtb3ZpZUluZm9tYXRpb24gfSkge1xyXG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgZG90czogZmFsc2UsIFxyXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICBzcGVlZDogNTAwLFxyXG4gICAgICAgIGZhZGU6IHRydWUsXHJcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBpbml0aWFsU2xpZGU6IDAsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgaW1hZ2VVUkwgPSAnaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3Avb3JpZ2luYWwvJ1xyXG4gICAgXCJcIlxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1vdmllSW5mb21hdGlvbi5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0uaWR9IGNsYXNzTmFtZT1cIm1haW4tc2xpZGVyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake2ltYWdlVVJMfSR7aXRlbS5iYWNrZHJvcF9wYXRofWB9IHN0eWxlPXt7ICB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvU2xpZGVyPlxyXG5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWVNYWluU2xpZGVyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=