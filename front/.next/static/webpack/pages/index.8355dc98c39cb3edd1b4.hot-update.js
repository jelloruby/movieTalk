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
    slidesToShow: 7,
    slidesToScroll: 7,
    speed: 500,
    arrows: false,
    autoplay: false,
    initialSlide: 0,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true
      }
    }, {
      breakpoint: 650,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
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

  var havePosterPath = function havePosterPath(posterPath) {
    var imageURL = 'https://image.tmdb.org/t/p/w500/';

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
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
          src: havePosterPath(item.poster_path),
          style: {
            width: '100%',
            borderRadius: '10px'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 25
        }, _this)
      }, item.id, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 21
      }, _this);
    })
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 53,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb3ZpZUluZm9TbGlkZXIuanMiXSwibmFtZXMiOlsiTW92aWVJbmZvU2xpZGVyIiwibW92aWVJbmZvbWF0aW9uIiwic2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInNwZWVkIiwiYXJyb3dzIiwiYXV0b3BsYXkiLCJpbml0aWFsU2xpZGUiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsImhhdmVQb3N0ZXJQYXRoIiwicG9zdGVyUGF0aCIsImltYWdlVVJMIiwibWFwIiwiaXRlbSIsInBvc3Rlcl9wYXRoIiwid2lkdGgiLCJib3JkZXJSYWRpdXMiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBLFNBQVNBLGVBQVQsT0FBOEM7QUFBQTs7QUFBQSxNQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1CO0FBQzFDLE1BQU1DLFFBQVEsR0FBRztBQUNiQyxRQUFJLEVBQUUsS0FETztBQUViQyxZQUFRLEVBQUUsSUFGRztBQUdiQyxnQkFBWSxFQUFFLENBSEQ7QUFJYkMsa0JBQWMsRUFBRSxDQUpIO0FBS2JDLFNBQUssRUFBRSxHQUxNO0FBTWJDLFVBQU0sRUFBRSxLQU5LO0FBT2JDLFlBQVEsRUFBRSxLQVBHO0FBUWJDLGdCQUFZLEVBQUUsQ0FSRDtBQVNiQyxjQUFVLEVBQUUsQ0FDUjtBQUNFQyxnQkFBVSxFQUFFLElBRGQ7QUFFRVYsY0FBUSxFQUFFO0FBQ1JHLG9CQUFZLEVBQUUsQ0FETjtBQUVSQyxzQkFBYyxFQUFFLENBRlI7QUFHUkYsZ0JBQVEsRUFBRTtBQUhGO0FBRlosS0FEUSxFQVNSO0FBQ0VRLGdCQUFVLEVBQUUsR0FEZDtBQUVFVixjQUFRLEVBQUU7QUFDUkcsb0JBQVksRUFBRSxDQUROO0FBRVJDLHNCQUFjLEVBQUUsQ0FGUjtBQUdSSSxvQkFBWSxFQUFFO0FBSE47QUFGWixLQVRRLEVBaUJSO0FBQ0VFLGdCQUFVLEVBQUUsR0FEZDtBQUVFVixjQUFRLEVBQUU7QUFDUkcsb0JBQVksRUFBRSxDQUROO0FBRVJDLHNCQUFjLEVBQUU7QUFGUjtBQUZaLEtBakJRO0FBVEMsR0FBakI7O0FBb0NBLE1BQU1PLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsVUFBRCxFQUFnQjtBQUNuQyxRQUFNQyxRQUFRLEdBQUcsa0NBQWpCOztBQUVBLFFBQUcsQ0FBQ0QsVUFBSixFQUFnQjtBQUNaQSxnQkFBVSxHQUFHLG1GQUFiO0FBQ0EsYUFBT0EsVUFBUDtBQUNILEtBSEQsTUFHTztBQUNILHVCQUFVQyxRQUFWLFNBQXFCRCxVQUFyQjtBQUNIO0FBQ0osR0FURDs7QUFXQSxzQkFDSSxxRUFBQyxrREFBRCxrQ0FBWVosUUFBWjtBQUFBLGNBRVFELGVBQWUsQ0FBQ2UsR0FBaEIsQ0FBb0IsVUFBQUMsSUFBSTtBQUFBLDBCQUNwQjtBQUFBLCtCQUNJO0FBQUssYUFBRyxFQUFFSixjQUFjLENBQUNJLElBQUksQ0FBQ0MsV0FBTixDQUF4QjtBQUE0QyxlQUFLLEVBQUU7QUFBRUMsaUJBQUssRUFBRSxNQUFUO0FBQWlCQyx3QkFBWSxFQUFFO0FBQS9CO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixTQUFVSCxJQUFJLENBQUNJLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURvQjtBQUFBLEtBQXhCO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBWUg7O0tBNURRckIsZTtBQThETUEsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODM1NWRjOThjMzljYjNlZGQxYjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuXHJcbmZ1bmN0aW9uIE1vdmllSW5mb1NsaWRlcih7IG1vdmllSW5mb21hdGlvbiB9KSB7XHJcbiAgICBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgICAgICBkb3RzOiBmYWxzZSwgXHJcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiA3LFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA3LFxyXG4gICAgICAgIHNwZWVkOiA1MDAsXHJcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgICAgaW5pdGlhbFNsaWRlOiAwLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXHJcbiAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNSxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA1LFxyXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgYnJlYWtwb2ludDogNjUwLFxyXG4gICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgICAgICAgICAgICAgIGluaXRpYWxTbGlkZTogMlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcclxuICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYXZlUG9zdGVyUGF0aCA9IChwb3N0ZXJQYXRoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2VVUkwgPSAnaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzUwMC8nXHJcblxyXG4gICAgICAgIGlmKCFwb3N0ZXJQYXRoKSB7XHJcbiAgICAgICAgICAgIHBvc3RlclBhdGggPSBcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2R2bXFib3Z4aC9pbWFnZS91cGxvYWQvdjE2MTY4NjYxNzIvbm9wb3N0ZXJfcGN3Y2J5LnBuZ1wiO1xyXG4gICAgICAgICAgICByZXR1cm4gcG9zdGVyUGF0aDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gYCR7aW1hZ2VVUkx9JHtwb3N0ZXJQYXRofWBcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtb3ZpZUluZm9tYXRpb24ubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2hhdmVQb3N0ZXJQYXRoKGl0ZW0ucG9zdGVyX3BhdGgpfSBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBib3JkZXJSYWRpdXM6ICcxMHB4J319IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9TbGlkZXI+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUluZm9TbGlkZXIiXSwic291cmNlUm9vdCI6IiJ9