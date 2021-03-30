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
    slidesToShow: 5,
    slidesToScroll: 5,
    speed: 500,
    arrows: true,
    autoplay: false,
    className: "wrap-slider",
    initialSlide: 0,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
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
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
          src: havePosterPath(item.poster_path),
          style: {
            width: '100%',
            borderRadius: '10px',
            margin: '10px'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb3ZpZUluZm9TbGlkZXIuanMiXSwibmFtZXMiOlsiTW92aWVJbmZvU2xpZGVyIiwibW92aWVJbmZvbWF0aW9uIiwic2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInNwZWVkIiwiYXJyb3dzIiwiYXV0b3BsYXkiLCJjbGFzc05hbWUiLCJpbml0aWFsU2xpZGUiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsImltYWdlVVJMIiwiaGF2ZVBvc3RlclBhdGgiLCJwb3N0ZXJQYXRoIiwibWFwIiwiaXRlbSIsInBvc3Rlcl9wYXRoIiwid2lkdGgiLCJib3JkZXJSYWRpdXMiLCJtYXJnaW4iLCJ0aXRsZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBRUEsU0FBU0EsZUFBVCxPQUE4QztBQUFBOztBQUFBLE1BQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7QUFDMUMsTUFBTUMsUUFBUSxHQUFHO0FBQ2JDLFFBQUksRUFBRSxLQURPO0FBRWJDLFlBQVEsRUFBRSxJQUZHO0FBR2JDLGdCQUFZLEVBQUUsQ0FIRDtBQUliQyxrQkFBYyxFQUFFLENBSkg7QUFLYkMsU0FBSyxFQUFFLEdBTE07QUFNYkMsVUFBTSxFQUFFLElBTks7QUFPYkMsWUFBUSxFQUFFLEtBUEc7QUFRYkMsYUFBUyxFQUFDLGFBUkc7QUFTYkMsZ0JBQVksRUFBRSxDQVREO0FBVWJDLGNBQVUsRUFBRSxDQUNSO0FBQ0VDLGdCQUFVLEVBQUUsSUFEZDtBQUVFWCxjQUFRLEVBQUU7QUFDUkcsb0JBQVksRUFBRSxDQUROO0FBRVJDLHNCQUFjLEVBQUUsQ0FGUjtBQUdSRixnQkFBUSxFQUFFLElBSEY7QUFJUkQsWUFBSSxFQUFFO0FBSkU7QUFGWixLQURRLEVBVVI7QUFDRVUsZ0JBQVUsRUFBRSxHQURkO0FBRUVYLGNBQVEsRUFBRTtBQUNSRyxvQkFBWSxFQUFFLENBRE47QUFFUkMsc0JBQWMsRUFBRSxDQUZSO0FBR1JLLG9CQUFZLEVBQUU7QUFITjtBQUZaLEtBVlEsRUFrQlI7QUFDRUUsZ0JBQVUsRUFBRSxHQURkO0FBRUVYLGNBQVEsRUFBRTtBQUNSRyxvQkFBWSxFQUFFLENBRE47QUFFUkMsc0JBQWMsRUFBRTtBQUZSO0FBRlosS0FsQlE7QUFWQyxHQUFqQjtBQXNDQSxNQUFNUSxRQUFRLEdBQUcsa0NBQWpCOztBQUVBLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsVUFBRCxFQUFnQjtBQUNuQyxRQUFHLENBQUNBLFVBQUosRUFBZ0I7QUFDWkEsZ0JBQVUsR0FBRyxtRkFBYjtBQUNBLGFBQU9BLFVBQVA7QUFDSCxLQUhELE1BR087QUFDSCx1QkFBVUYsUUFBVixTQUFxQkUsVUFBckI7QUFDSDtBQUNKLEdBUEQ7O0FBU0Esc0JBQ0kscUVBQUMsa0RBQUQsa0NBQVlkLFFBQVo7QUFBQSxjQUVRRCxlQUFlLENBQUNnQixHQUFoQixDQUFvQixVQUFBQyxJQUFJO0FBQUEsMEJBQ3BCO0FBQUEsZ0NBQ0k7QUFBSyxhQUFHLEVBQUVILGNBQWMsQ0FBQ0csSUFBSSxDQUFDQyxXQUFOLENBQXhCO0FBQTRDLGVBQUssRUFBRTtBQUFFQyxpQkFBSyxFQUFFLE1BQVQ7QUFBaUJDLHdCQUFZLEVBQUUsTUFBL0I7QUFBdUNDLGtCQUFNLEVBQUU7QUFBL0M7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQUEsb0JBQU1KLElBQUksQ0FBQ0s7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUEsU0FBVUwsSUFBSSxDQUFDTSxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEb0I7QUFBQSxLQUF4QjtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWFIOztLQS9EUXhCLGU7QUFpRU1BLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI2YTEzMzRmOGI4NWMxZWMzNDgyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XHJcblxyXG5mdW5jdGlvbiBNb3ZpZUluZm9TbGlkZXIoeyBtb3ZpZUluZm9tYXRpb24gfSkge1xyXG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgZG90czogZmFsc2UsIFxyXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogNSxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogNSxcclxuICAgICAgICBzcGVlZDogNTAwLFxyXG4gICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgICAgY2xhc3NOYW1lOlwid3JhcC1zbGlkZXJcIixcclxuICAgICAgICBpbml0aWFsU2xpZGU6IDAsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcclxuICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDQsXHJcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRvdHM6IHRydWVcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBicmVha3BvaW50OiA2NTAsXHJcbiAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbFNsaWRlOiAyXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxyXG4gICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGltYWdlVVJMID0gJ2h0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3c1MDAvJ1xyXG5cclxuICAgIGNvbnN0IGhhdmVQb3N0ZXJQYXRoID0gKHBvc3RlclBhdGgpID0+IHtcclxuICAgICAgICBpZighcG9zdGVyUGF0aCkge1xyXG4gICAgICAgICAgICBwb3N0ZXJQYXRoID0gXCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kdm1xYm92eGgvaW1hZ2UvdXBsb2FkL3YxNjE2ODY2MTcyL25vcG9zdGVyX3Bjd2NieS5wbmdcIjtcclxuICAgICAgICAgICAgcmV0dXJuIHBvc3RlclBhdGg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGAke2ltYWdlVVJMfSR7cG9zdGVyUGF0aH1gXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbW92aWVJbmZvbWF0aW9uLm1hcChpdGVtID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtoYXZlUG9zdGVyUGF0aChpdGVtLnBvc3Rlcl9wYXRoKX0gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgYm9yZGVyUmFkaXVzOiAnMTBweCcsIG1hcmdpbjogJzEwcHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2l0ZW0udGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9TbGlkZXI+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUluZm9TbGlkZXIiXSwic291cmNlUm9vdCI6IiJ9