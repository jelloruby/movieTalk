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
    speed: 500,
    arrows: false,
    autoplay: false,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb3ZpZUluZm9TbGlkZXIuanMiXSwibmFtZXMiOlsiTW92aWVJbmZvU2xpZGVyIiwibW92aWVJbmZvbWF0aW9uIiwic2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzbGlkZXNUb1Nob3ciLCJzcGVlZCIsImFycm93cyIsImF1dG9wbGF5IiwiaW5pdGlhbFNsaWRlIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzbGlkZXNUb1Njcm9sbCIsImhhdmVQb3N0ZXJQYXRoIiwicG9zdGVyUGF0aCIsImltYWdlVVJMIiwibWFwIiwiaXRlbSIsInBvc3Rlcl9wYXRoIiwid2lkdGgiLCJib3JkZXJSYWRpdXMiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBLFNBQVNBLGVBQVQsT0FBOEM7QUFBQTs7QUFBQSxNQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1CO0FBQzFDLE1BQU1DLFFBQVEsR0FBRztBQUNiQyxRQUFJLEVBQUUsS0FETztBQUViQyxZQUFRLEVBQUUsSUFGRztBQUdiQyxnQkFBWSxFQUFFLENBSEQ7QUFJYkMsU0FBSyxFQUFFLEdBSk07QUFLYkMsVUFBTSxFQUFFLEtBTEs7QUFNYkMsWUFBUSxFQUFFLEtBTkc7QUFPYkMsZ0JBQVksRUFBRSxDQVBEO0FBUWJDLGNBQVUsRUFBRSxDQUNSO0FBQ0VDLGdCQUFVLEVBQUUsSUFEZDtBQUVFVCxjQUFRLEVBQUU7QUFDUkcsb0JBQVksRUFBRSxDQUROO0FBRVJPLHNCQUFjLEVBQUUsQ0FGUjtBQUdSUixnQkFBUSxFQUFFLElBSEY7QUFJUkQsWUFBSSxFQUFFO0FBSkU7QUFGWixLQURRLEVBVVI7QUFDRVEsZ0JBQVUsRUFBRSxHQURkO0FBRUVULGNBQVEsRUFBRTtBQUNSRyxvQkFBWSxFQUFFLENBRE47QUFFUk8sc0JBQWMsRUFBRSxDQUZSO0FBR1JILG9CQUFZLEVBQUU7QUFITjtBQUZaLEtBVlEsRUFrQlI7QUFDRUUsZ0JBQVUsRUFBRSxHQURkO0FBRUVULGNBQVEsRUFBRTtBQUNSRyxvQkFBWSxFQUFFLENBRE47QUFFUk8sc0JBQWMsRUFBRTtBQUZSO0FBRlosS0FsQlE7QUFSQyxHQUFqQjs7QUFvQ0EsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxVQUFELEVBQWdCO0FBQ25DLFFBQU1DLFFBQVEsR0FBRyxrQ0FBakI7O0FBRUEsUUFBRyxDQUFDRCxVQUFKLEVBQWdCO0FBQ1pBLGdCQUFVLEdBQUcsbUZBQWI7QUFDQSxhQUFPQSxVQUFQO0FBQ0gsS0FIRCxNQUdPO0FBQ0gsdUJBQVVDLFFBQVYsU0FBcUJELFVBQXJCO0FBQ0g7QUFDSixHQVREOztBQVdBLHNCQUNJLHFFQUFDLGtEQUFELGtDQUFZWixRQUFaO0FBQUEsY0FFUUQsZUFBZSxDQUFDZSxHQUFoQixDQUFvQixVQUFBQyxJQUFJO0FBQUEsMEJBQ3BCO0FBQUEsK0JBQ0k7QUFBSyxhQUFHLEVBQUVKLGNBQWMsQ0FBQ0ksSUFBSSxDQUFDQyxXQUFOLENBQXhCO0FBQTRDLGVBQUssRUFBRTtBQUFFQyxpQkFBSyxFQUFFLE1BQVQ7QUFBaUJDLHdCQUFZLEVBQUU7QUFBL0I7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLFNBQVVILElBQUksQ0FBQ0ksRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRG9CO0FBQUEsS0FBeEI7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFZSDs7S0E1RFFyQixlO0FBOERNQSw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zNTc5OWZmZmE5ZGE5NDFlNDA2YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5cclxuZnVuY3Rpb24gTW92aWVJbmZvU2xpZGVyKHsgbW92aWVJbmZvbWF0aW9uIH0pIHtcclxuICAgIGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgICAgIGRvdHM6IGZhbHNlLCBcclxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDcsXHJcbiAgICAgICAgc3BlZWQ6IDUwMCxcclxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgICBpbml0aWFsU2xpZGU6IDAsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcclxuICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDQsXHJcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRvdHM6IHRydWVcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBicmVha3BvaW50OiA2NTAsXHJcbiAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbFNsaWRlOiAyXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxyXG4gICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhdmVQb3N0ZXJQYXRoID0gKHBvc3RlclBhdGgpID0+IHtcclxuICAgICAgICBjb25zdCBpbWFnZVVSTCA9ICdodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93NTAwLydcclxuXHJcbiAgICAgICAgaWYoIXBvc3RlclBhdGgpIHtcclxuICAgICAgICAgICAgcG9zdGVyUGF0aCA9IFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZHZtcWJvdnhoL2ltYWdlL3VwbG9hZC92MTYxNjg2NjE3Mi9ub3Bvc3Rlcl9wY3djYnkucG5nXCI7XHJcbiAgICAgICAgICAgIHJldHVybiBwb3N0ZXJQYXRoO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHtpbWFnZVVSTH0ke3Bvc3RlclBhdGh9YFxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1vdmllSW5mb21hdGlvbi5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aGF2ZVBvc3RlclBhdGgoaXRlbS5wb3N0ZXJfcGF0aCl9IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGJvcmRlclJhZGl1czogJzEwcHgnfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L1NsaWRlcj5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdmllSW5mb1NsaWRlciJdLCJzb3VyY2VSb290IjoiIn0=