webpackHotUpdate_N_E("pages/index",{

/***/ "./components/MovieInfoSlider.js":
/*!***************************************!*\
  !*** ./components/MovieInfoSlider.js ***!
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

var _jsxFileName = "C:\\codingtime\\movieBox\\front\\components\\MovieInfoSlider.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function MovieInfoSlider(_ref) {
  var _this = this;

  var movieInfomation = _ref.movieInfomation;
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 500,
    arrows: true,
    autoplay: false,
    className: "wrap-slider",
    initialSlide: 0,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 650,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };
  var imageURL = 'https://image.tmdb.org/t/p/w500/';

  var havePosterPath = function havePosterPath(posterPath) {
    if (!posterPath) {
      posterPath = "https://res.cloudinary.com/dvmqbovxh/image/upload/v1616866172/noposter_pcwcby.png";
      return posterPath;
    } else {
      return "".concat(imageURL).concat(posterPath);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, _objectSpread(_objectSpread({}, settings), {}, {
    children: movieInfomation.map(function (item) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        style: {
          margin: '10px'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
          src: havePosterPath(item.poster_path),
          style: {
            width: '100%'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          children: item.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 25
        }, _this)]
      }, item.id, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 21
      }, _this);
    })
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 9
  }, this);
}

_c = MovieInfoSlider;
/* harmony default export */ __webpack_exports__["default"] = (MovieInfoSlider);

var _c;

$RefreshReg$(_c, "MovieInfoSlider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb3ZpZUluZm9TbGlkZXIuanMiXSwibmFtZXMiOlsiTW92aWVJbmZvU2xpZGVyIiwibW92aWVJbmZvbWF0aW9uIiwic2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInNwZWVkIiwiYXJyb3dzIiwiYXV0b3BsYXkiLCJjbGFzc05hbWUiLCJpbml0aWFsU2xpZGUiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsImltYWdlVVJMIiwiaGF2ZVBvc3RlclBhdGgiLCJwb3N0ZXJQYXRoIiwibWFwIiwiaXRlbSIsIm1hcmdpbiIsInBvc3Rlcl9wYXRoIiwid2lkdGgiLCJ0aXRsZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBRUEsU0FBU0EsZUFBVCxPQUE4QztBQUFBOztBQUFBLE1BQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7QUFDMUMsTUFBTUMsUUFBUSxHQUFHO0FBQ2JDLFFBQUksRUFBRSxLQURPO0FBRWJDLFlBQVEsRUFBRSxJQUZHO0FBR2JDLGdCQUFZLEVBQUUsQ0FIRDtBQUliQyxrQkFBYyxFQUFFLENBSkg7QUFLYkMsU0FBSyxFQUFFLEdBTE07QUFNYkMsVUFBTSxFQUFFLElBTks7QUFPYkMsWUFBUSxFQUFFLEtBUEc7QUFRYkMsYUFBUyxFQUFDLGFBUkc7QUFTYkMsZ0JBQVksRUFBRSxDQVREO0FBVWJDLGNBQVUsRUFBRSxDQUNSO0FBQ0VDLGdCQUFVLEVBQUUsSUFEZDtBQUVFWCxjQUFRLEVBQUU7QUFDUkcsb0JBQVksRUFBRSxDQUROO0FBRVJDLHNCQUFjLEVBQUUsQ0FGUjtBQUdSRixnQkFBUSxFQUFFLElBSEY7QUFJUkQsWUFBSSxFQUFFO0FBSkU7QUFGWixLQURRLEVBVVI7QUFDRVUsZ0JBQVUsRUFBRSxHQURkO0FBRUVYLGNBQVEsRUFBRTtBQUNSRyxvQkFBWSxFQUFFLENBRE47QUFFUkMsc0JBQWMsRUFBRSxDQUZSO0FBR1JLLG9CQUFZLEVBQUU7QUFITjtBQUZaLEtBVlEsRUFrQlI7QUFDRUUsZ0JBQVUsRUFBRSxHQURkO0FBRUVYLGNBQVEsRUFBRTtBQUNSRyxvQkFBWSxFQUFFLENBRE47QUFFUkMsc0JBQWMsRUFBRTtBQUZSO0FBRlosS0FsQlE7QUFWQyxHQUFqQjtBQXNDQSxNQUFNUSxRQUFRLEdBQUcsa0NBQWpCOztBQUVBLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsVUFBRCxFQUFnQjtBQUNuQyxRQUFHLENBQUNBLFVBQUosRUFBZ0I7QUFDWkEsZ0JBQVUsR0FBRyxtRkFBYjtBQUNBLGFBQU9BLFVBQVA7QUFDSCxLQUhELE1BR087QUFDSCx1QkFBVUYsUUFBVixTQUFxQkUsVUFBckI7QUFDSDtBQUNKLEdBUEQ7O0FBU0Esc0JBQ0kscUVBQUMsa0RBQUQsa0NBQVlkLFFBQVo7QUFBQSxjQUVRRCxlQUFlLENBQUNnQixHQUFoQixDQUFvQixVQUFBQyxJQUFJO0FBQUEsMEJBQ3BCO0FBQW1CLGFBQUssRUFBRTtBQUFFQyxnQkFBTSxFQUFFO0FBQVYsU0FBMUI7QUFBQSxnQ0FDSTtBQUFLLGFBQUcsRUFBRUosY0FBYyxDQUFDRyxJQUFJLENBQUNFLFdBQU4sQ0FBeEI7QUFBNEMsZUFBSyxFQUFFO0FBQUVDLGlCQUFLLEVBQUU7QUFBVDtBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBQSxvQkFBTUgsSUFBSSxDQUFDSTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQSxTQUFVSixJQUFJLENBQUNLLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURvQjtBQUFBLEtBQXhCO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBYUg7O0tBL0RRdkIsZTtBQWlFTUEsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmQ4ZDM2ZThkZTFjM2ZlZDRmMDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuXHJcbmZ1bmN0aW9uIE1vdmllSW5mb1NsaWRlcih7IG1vdmllSW5mb21hdGlvbiB9KSB7XHJcbiAgICBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgICAgICBkb3RzOiBmYWxzZSwgXHJcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxyXG4gICAgICAgIHNwZWVkOiA1MDAsXHJcbiAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgICBjbGFzc05hbWU6XCJ3cmFwLXNsaWRlclwiLFxyXG4gICAgICAgIGluaXRpYWxTbGlkZTogMCxcclxuICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBicmVha3BvaW50OiAxMDI0LFxyXG4gICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDY1MCxcclxuICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsU2xpZGU6IDJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBicmVha3BvaW50OiA0ODAsXHJcbiAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaW1hZ2VVUkwgPSAnaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzUwMC8nXHJcblxyXG4gICAgY29uc3QgaGF2ZVBvc3RlclBhdGggPSAocG9zdGVyUGF0aCkgPT4ge1xyXG4gICAgICAgIGlmKCFwb3N0ZXJQYXRoKSB7XHJcbiAgICAgICAgICAgIHBvc3RlclBhdGggPSBcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2R2bXFib3Z4aC9pbWFnZS91cGxvYWQvdjE2MTY4NjYxNzIvbm9wb3N0ZXJfcGN3Y2J5LnBuZ1wiO1xyXG4gICAgICAgICAgICByZXR1cm4gcG9zdGVyUGF0aDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gYCR7aW1hZ2VVUkx9JHtwb3N0ZXJQYXRofWBcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtb3ZpZUluZm9tYXRpb24ubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLmlkfSBzdHlsZT17eyBtYXJnaW46ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2hhdmVQb3N0ZXJQYXRoKGl0ZW0ucG9zdGVyX3BhdGgpfSBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2l0ZW0udGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9TbGlkZXI+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUluZm9TbGlkZXIiXSwic291cmNlUm9vdCI6IiJ9