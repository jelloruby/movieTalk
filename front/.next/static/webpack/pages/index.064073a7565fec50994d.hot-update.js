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
      breakpoint: 1300,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
        infinite: true
      }
    }, {
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
          lineNumber: 65,
          columnNumber: 25
        }, _this)
      }, item.id, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 21
      }, _this);
    })
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb3ZpZUluZm9TbGlkZXIuanMiXSwibmFtZXMiOlsiTW92aWVJbmZvU2xpZGVyIiwibW92aWVJbmZvbWF0aW9uIiwic2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInNwZWVkIiwiYXJyb3dzIiwiYXV0b3BsYXkiLCJpbml0aWFsU2xpZGUiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsImhhdmVQb3N0ZXJQYXRoIiwicG9zdGVyUGF0aCIsImltYWdlVVJMIiwibWFwIiwiaXRlbSIsInBvc3Rlcl9wYXRoIiwid2lkdGgiLCJib3JkZXJSYWRpdXMiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBLFNBQVNBLGVBQVQsT0FBOEM7QUFBQTs7QUFBQSxNQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1CO0FBQzFDLE1BQU1DLFFBQVEsR0FBRztBQUNiQyxRQUFJLEVBQUUsS0FETztBQUViQyxZQUFRLEVBQUUsSUFGRztBQUdiQyxnQkFBWSxFQUFFLENBSEQ7QUFJYkMsa0JBQWMsRUFBRSxDQUpIO0FBS2JDLFNBQUssRUFBRSxHQUxNO0FBTWJDLFVBQU0sRUFBRSxLQU5LO0FBT2JDLFlBQVEsRUFBRSxLQVBHO0FBUWJDLGdCQUFZLEVBQUUsQ0FSRDtBQVNiQyxjQUFVLEVBQUUsQ0FDUjtBQUNJQyxnQkFBVSxFQUFFLElBRGhCO0FBRUlWLGNBQVEsRUFBRTtBQUNSRyxvQkFBWSxFQUFFLENBRE47QUFFUkMsc0JBQWMsRUFBRSxDQUZSO0FBR1JGLGdCQUFRLEVBQUU7QUFIRjtBQUZkLEtBRFEsRUFTUjtBQUNFUSxnQkFBVSxFQUFFLElBRGQ7QUFFRVYsY0FBUSxFQUFFO0FBQ1JHLG9CQUFZLEVBQUUsQ0FETjtBQUVSQyxzQkFBYyxFQUFFLENBRlI7QUFHUkYsZ0JBQVEsRUFBRTtBQUhGO0FBRlosS0FUUSxFQWlCUjtBQUNFUSxnQkFBVSxFQUFFLEdBRGQ7QUFFRVYsY0FBUSxFQUFFO0FBQ1JHLG9CQUFZLEVBQUUsQ0FETjtBQUVSQyxzQkFBYyxFQUFFLENBRlI7QUFHUkksb0JBQVksRUFBRTtBQUhOO0FBRlosS0FqQlEsRUF5QlI7QUFDRUUsZ0JBQVUsRUFBRSxHQURkO0FBRUVWLGNBQVEsRUFBRTtBQUNSRyxvQkFBWSxFQUFFLENBRE47QUFFUkMsc0JBQWMsRUFBRTtBQUZSO0FBRlosS0F6QlE7QUFUQyxHQUFqQjs7QUE0Q0EsTUFBTU8sY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxVQUFELEVBQWdCO0FBQ25DLFFBQU1DLFFBQVEsR0FBRyxrQ0FBakI7O0FBRUEsUUFBRyxDQUFDRCxVQUFKLEVBQWdCO0FBQ1pBLGdCQUFVLEdBQUcsbUZBQWI7QUFDQSxhQUFPQSxVQUFQO0FBQ0gsS0FIRCxNQUdPO0FBQ0gsdUJBQVVDLFFBQVYsU0FBcUJELFVBQXJCO0FBQ0g7QUFDSixHQVREOztBQVdBLHNCQUNJLHFFQUFDLGtEQUFELGtDQUFZWixRQUFaO0FBQUEsY0FFUUQsZUFBZSxDQUFDZSxHQUFoQixDQUFvQixVQUFBQyxJQUFJO0FBQUEsMEJBQ3BCO0FBQUEsK0JBQ0k7QUFBSyxhQUFHLEVBQUVKLGNBQWMsQ0FBQ0ksSUFBSSxDQUFDQyxXQUFOLENBQXhCO0FBQTRDLGVBQUssRUFBRTtBQUFFQyxpQkFBSyxFQUFFLE1BQVQ7QUFBaUJDLHdCQUFZLEVBQUU7QUFBL0I7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLFNBQVVILElBQUksQ0FBQ0ksRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRG9CO0FBQUEsS0FBeEI7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFZSDs7S0FwRVFyQixlO0FBc0VNQSw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wNjQwNzNhNzU2NWZlYzUwOTk0ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5cclxuZnVuY3Rpb24gTW92aWVJbmZvU2xpZGVyKHsgbW92aWVJbmZvbWF0aW9uIH0pIHtcclxuICAgIGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgICAgIGRvdHM6IGZhbHNlLCBcclxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDcsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDcsXHJcbiAgICAgICAgc3BlZWQ6IDUwMCxcclxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgICBpbml0aWFsU2xpZGU6IDAsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMzAwLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA2LFxyXG4gICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogNixcclxuICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBicmVha3BvaW50OiAxMDI0LFxyXG4gICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDUsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogNSxcclxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDY1MCxcclxuICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsU2xpZGU6IDJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBicmVha3BvaW50OiA0ODAsXHJcbiAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGF2ZVBvc3RlclBhdGggPSAocG9zdGVyUGF0aCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGltYWdlVVJMID0gJ2h0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3c1MDAvJ1xyXG5cclxuICAgICAgICBpZighcG9zdGVyUGF0aCkge1xyXG4gICAgICAgICAgICBwb3N0ZXJQYXRoID0gXCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kdm1xYm92eGgvaW1hZ2UvdXBsb2FkL3YxNjE2ODY2MTcyL25vcG9zdGVyX3Bjd2NieS5wbmdcIjtcclxuICAgICAgICAgICAgcmV0dXJuIHBvc3RlclBhdGg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGAke2ltYWdlVVJMfSR7cG9zdGVyUGF0aH1gXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbW92aWVJbmZvbWF0aW9uLm1hcChpdGVtID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtoYXZlUG9zdGVyUGF0aChpdGVtLnBvc3Rlcl9wYXRoKX0gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgYm9yZGVyUmFkaXVzOiAnMTBweCd9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvU2xpZGVyPlxyXG5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWVJbmZvU2xpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==