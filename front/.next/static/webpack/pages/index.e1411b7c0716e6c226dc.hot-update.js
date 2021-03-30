webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _components_MovieInfoSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MovieInfoSlider */ "./components/MovieInfoSlider.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\codingtime\\movieBox\\front\\pages\\index.js";





var WrapMovieList = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__WrapMovieList",
  componentId: "sc-190qa7b-0"
})(["margin-bottom:3rem;"]);
_c = WrapMovieList;
var TitleOfList = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__TitleOfList",
  componentId: "sc-190qa7b-1"
})(["color:white;font-size:2rem"]);
_c2 = TitleOfList;
var __N_SSP = true;
function Home(props) {
  var popularMovie = props.popularMovie;
  var actionMovie = props.actionMovie;
  var comedyMovie = props.comedyMovie;
  var animationMovie = props.animationMovie;
  var fantasyMovie = props.fantasyMovie;
  var sfMovie = props.sfMovie;

  var randomImage = function randomImage() {
    var IMG_NUMBER = 20;
    var number = Math.floor(Math.random() * IMG_NUMBER) + 1;
    console.log(number);

    for (var i = number; i < popularMovie.length; i++) {
      console.log(popularMovie[i].poster_path);
    }
  };

  randomImage();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      style: {
        height: '700px'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h2", {
        style: {
          textAlign: 'center',
          fontSize: '3rem',
          color: 'red'
        },
        children: "MovieTalk"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      style: {
        padding: '0 8rem'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(WrapMovieList, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(TitleOfList, {
          children: "\uBB34\uBE44\uD1A1 \uB9AC\uBDF0\uC21C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(WrapMovieList, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(TitleOfList, {
          children: "\uCD5C\uC2E0 \uC778\uAE30 \uC601\uD654"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, this), popularMovie && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_MovieInfoSlider__WEBPACK_IMPORTED_MODULE_3__["default"], {
          movieInfomation: popularMovie
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 29
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(WrapMovieList, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(TitleOfList, {
          children: "\uC561\uC158 | Action"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, this), actionMovie && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_MovieInfoSlider__WEBPACK_IMPORTED_MODULE_3__["default"], {
          movieInfomation: actionMovie
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 29
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(WrapMovieList, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(TitleOfList, {
          children: "\uCF54\uBBF8\uB514 | Drama"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, this), comedyMovie && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_MovieInfoSlider__WEBPACK_IMPORTED_MODULE_3__["default"], {
          movieInfomation: comedyMovie
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 29
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(WrapMovieList, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(TitleOfList, {
          children: "\uC560\uB2C8\uBA54\uC774\uC158 | Animation"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, this), animationMovie && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_MovieInfoSlider__WEBPACK_IMPORTED_MODULE_3__["default"], {
          movieInfomation: animationMovie
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 29
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(WrapMovieList, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(TitleOfList, {
          children: "\uD310\uD0C0\uC9C0 | Fantasy"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }, this), fantasyMovie && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_MovieInfoSlider__WEBPACK_IMPORTED_MODULE_3__["default"], {
          movieInfomation: fantasyMovie
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 29
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(WrapMovieList, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(TitleOfList, {
          children: "\uACF5\uC0C1\uACFC\uD559 | SF"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }, this), sfMovie && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_MovieInfoSlider__WEBPACK_IMPORTED_MODULE_3__["default"], {
          movieInfomation: sfMovie
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 29
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 9
  }, this);
}
_c3 = Home;

var _c, _c2, _c3;

$RefreshReg$(_c, "WrapMovieList");
$RefreshReg$(_c2, "TitleOfList");
$RefreshReg$(_c3, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiV3JhcE1vdmllTGlzdCIsInN0eWxlZCIsImRpdiIsIlRpdGxlT2ZMaXN0IiwiSG9tZSIsInByb3BzIiwicG9wdWxhck1vdmllIiwiYWN0aW9uTW92aWUiLCJjb21lZHlNb3ZpZSIsImFuaW1hdGlvbk1vdmllIiwiZmFudGFzeU1vdmllIiwic2ZNb3ZpZSIsInJhbmRvbUltYWdlIiwiSU1HX05VTUJFUiIsIm51bWJlciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNvbnNvbGUiLCJsb2ciLCJpIiwibGVuZ3RoIiwicG9zdGVyX3BhdGgiLCJoZWlnaHQiLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsImNvbG9yIiwicGFkZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBSUEsSUFBTUEsYUFBYSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDJCQUFuQjtLQUFNRixhO0FBSU4sSUFBTUcsV0FBVyxHQUFHRix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGtDQUFqQjtNQUFNQyxXOztBQUtTLFNBQVNDLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBLE1BQ3hCQyxZQUR3QixHQUNQRCxLQURPLENBQ3hCQyxZQUR3QjtBQUFBLE1BRXhCQyxXQUZ3QixHQUVSRixLQUZRLENBRXhCRSxXQUZ3QjtBQUFBLE1BR3hCQyxXQUh3QixHQUdSSCxLQUhRLENBR3hCRyxXQUh3QjtBQUFBLE1BSXhCQyxjQUp3QixHQUlMSixLQUpLLENBSXhCSSxjQUp3QjtBQUFBLE1BS3hCQyxZQUx3QixHQUtQTCxLQUxPLENBS3hCSyxZQUx3QjtBQUFBLE1BTXhCQyxPQU53QixHQU1aTixLQU5ZLENBTXhCTSxPQU53Qjs7QUFRaEMsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN0QixRQUFNQyxVQUFV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NUNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBNERIO01BOUV1QlAsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lMTQxMWI3YzA3MTZlNmMyMjZkYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBMYXlvdXQnXHJcbmltcG9ydCBNb3ZpZUluZm9TbGlkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Nb3ZpZUluZm9TbGlkZXInO1xyXG5cclxuaW1wb3J0IHsgZ2V0cG9wdWxhck1vdmllRnJvbVRNREIsIGdldE1vdmllQnlHZW5yZUZyb21UTURCIH0gZnJvbSAnLi4vYXBpJztcclxuXHJcbmNvbnN0IFdyYXBNb3ZpZUxpc3QgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuYFxyXG5cclxuY29uc3QgVGl0bGVPZkxpc3QgPSBzdHlsZWQuZGl2YFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAycmVtXHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcclxuICAgIGNvbnN0IHsgcG9wdWxhck1vdmllIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHsgYWN0aW9uTW92aWUgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgeyBjb21lZHlNb3ZpZSB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCB7IGFuaW1hdGlvbk1vdmllIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHsgZmFudGFzeU1vdmllIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHsgc2ZNb3ZpZSB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3QgcmFuZG9tSW1hZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgSU1HX05VTUJFUiA9IDIwO1xyXG4gICAgICAgIGNvbnN0IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIElNR19OVU1CRVIpICsgMTtcclxuICAgICAgICBjb25zb2xlLmxvZyhudW1iZXIpO1xyXG5cclxuICAgICAgICBmb3IobGV0IGk9bnVtYmVyOyBpPHBvcHVsYXJNb3ZpZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwb3B1bGFyTW92aWVbaV0ucG9zdGVyX3BhdGgpOyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByYW5kb21JbWFnZSgpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnNzAwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIGZvbnRTaXplOiAnM3JlbScsIGNvbG9yOiAncmVkJyB9fT5Nb3ZpZVRhbGs8L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMCA4cmVtJyB9fT5cclxuICAgICAgICAgICAgICAgIDxXcmFwTW92aWVMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZU9mTGlzdD7rrLTruYTthqEg66as67ew7IicPC9UaXRsZU9mTGlzdD5cclxuICAgICAgICAgICAgICAgIDwvV3JhcE1vdmllTGlzdD5cclxuICAgICAgICAgICAgICAgIDxXcmFwTW92aWVMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZU9mTGlzdD7stZzsi6Ag7J246riwIOyYge2ZlDwvVGl0bGVPZkxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3B1bGFyTW92aWUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vdmllSW5mb1NsaWRlciBtb3ZpZUluZm9tYXRpb249e3BvcHVsYXJNb3ZpZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvV3JhcE1vdmllTGlzdD5cclxuICAgICAgICAgICAgICAgIDxXcmFwTW92aWVMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZU9mTGlzdD7slaHshZggfCBBY3Rpb248L1RpdGxlT2ZMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgIHsgYWN0aW9uTW92aWUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vdmllSW5mb1NsaWRlciBtb3ZpZUluZm9tYXRpb249e2FjdGlvbk1vdmllfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9XcmFwTW92aWVMaXN0PlxyXG4gICAgICAgICAgICAgICAgPFdyYXBNb3ZpZUxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlT2ZMaXN0Puy9lOuvuOuUlCB8IERyYW1hPC9UaXRsZU9mTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICB7IGNvbWVkeU1vdmllICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb3ZpZUluZm9TbGlkZXIgbW92aWVJbmZvbWF0aW9uPXtjb21lZHlNb3ZpZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvV3JhcE1vdmllTGlzdD5cclxuICAgICAgICAgICAgICAgIDxXcmFwTW92aWVMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZU9mTGlzdD7slaDri4jrqZTsnbTshZggfCBBbmltYXRpb248L1RpdGxlT2ZMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgIHsgYW5pbWF0aW9uTW92aWUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vdmllSW5mb1NsaWRlciBtb3ZpZUluZm9tYXRpb249e2FuaW1hdGlvbk1vdmllfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9XcmFwTW92aWVMaXN0PlxyXG4gICAgICAgICAgICAgICAgPFdyYXBNb3ZpZUxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlT2ZMaXN0Pu2MkO2DgOyngCB8IEZhbnRhc3k8L1RpdGxlT2ZMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgIHsgZmFudGFzeU1vdmllICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb3ZpZUluZm9TbGlkZXIgbW92aWVJbmZvbWF0aW9uPXtmYW50YXN5TW92aWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L1dyYXBNb3ZpZUxpc3Q+XHJcbiAgICAgICAgICAgICAgICA8V3JhcE1vdmllTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICA8VGl0bGVPZkxpc3Q+6rO17IOB6rO87ZWZIHwgU0Y8L1RpdGxlT2ZMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgIHsgc2ZNb3ZpZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW92aWVJbmZvU2xpZGVyIG1vdmllSW5mb21hdGlvbj17c2ZNb3ZpZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvV3JhcE1vdmllTGlzdD4gICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgICBjb25zdCBwb3B1bGFyTW92aWUgPSBhd2FpdCBnZXRwb3B1bGFyTW92aWVGcm9tVE1EQigpO1xyXG4gICAgY29uc3QgYWN0aW9uTW92aWUgPSBhd2FpdCBnZXRNb3ZpZUJ5R2VucmVGcm9tVE1EQigyOCk7XHJcbiAgICBjb25zdCBjb21lZHlNb3ZpZSA9IGF3YWl0IGdldE1vdmllQnlHZW5yZUZyb21UTURCKDM1KTtcclxuICAgIGNvbnN0IGFuaW1hdGlvbk1vdmllID0gYXdhaXQgZ2V0TW92aWVCeUdlbnJlRnJvbVRNREIoMTYpO1xyXG4gICAgY29uc3QgZmFudGFzeU1vdmllID0gYXdhaXQgZ2V0TW92aWVCeUdlbnJlRnJvbVRNREIoMTQpO1xyXG4gICAgY29uc3Qgc2ZNb3ZpZSA9IGF3YWl0IGdldE1vdmllQnlHZW5yZUZyb21UTURCKDg3OCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHsgXHJcbiAgICAgICAgcG9wdWxhck1vdmllOiBwb3B1bGFyTW92aWUucmVzdWx0cywgXHJcbiAgICAgICAgYWN0aW9uTW92aWU6IGFjdGlvbk1vdmllLnJlc3VsdHMsIFxyXG4gICAgICAgIGNvbWVkeU1vdmllOiBjb21lZHlNb3ZpZS5yZXN1bHRzLFxyXG4gICAgICAgIGFuaW1hdGlvbk1vdmllOiBhbmltYXRpb25Nb3ZpZS5yZXN1bHRzLFxyXG4gICAgICAgIGZhbnRhc3lNb3ZpZTogZmFudGFzeU1vdmllLnJlc3VsdHMsXHJcbiAgICAgICAgc2ZNb3ZpZTogc2ZNb3ZpZS5yZXN1bHRzXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==