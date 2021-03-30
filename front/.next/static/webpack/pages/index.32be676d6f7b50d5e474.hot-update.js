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
/* harmony import */ var _components_MovieMainSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MovieMainSlider */ "./components/MovieMainSlider.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\codingtime\\movieBox\\front\\pages\\index.js";






var WrapMovieList = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__WrapMovieList",
  componentId: "sc-190qa7b-0"
})(["margin-bottom:3rem;"]);
_c = WrapMovieList;
var TitleOfList = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__TitleOfList",
  componentId: "sc-190qa7b-1"
})(["color:white;font-size:2rem;"]);
_c2 = TitleOfList;
var SiteName = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "pages__SiteName",
  componentId: "sc-190qa7b-2"
})(["text-align:center;font-size:5rem;color:red;position:absolute;top:50%;left:50%;transform:translate(-50%,-10%);"]);
_c3 = SiteName;
var __N_SSP = true;
function Home(props) {
  var popularMovie = props.popularMovie;
  var actionMovie = props.actionMovie;
  var comedyMovie = props.comedyMovie;
  var animationMovie = props.animationMovie;
  var fantasyMovie = props.fantasyMovie;
  var sfMovie = props.sfMovie; // const movieNameArray = (list) => {
  //     var arr = [];
  //     for(let i=0; i<5; i++) {
  //         arr.push(list[i])
  //     }
  //     return arr;
  // }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "main-content",
      style: {
        height: '80vh',
        position: 'relative'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_MovieMainSlider__WEBPACK_IMPORTED_MODULE_4__["default"], {
        movieInfomation: popularMovie
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(SiteName, {
        children: "MovieTalk"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      style: {
        width: '85%',
        margin: '0 auto'
      },
      className: "movie-list",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(WrapMovieList, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(TitleOfList, {
          children: "\uBB34\uBE44\uD1A1 \uB9AC\uBDF0\uC21C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(WrapMovieList, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(TitleOfList, {
          children: "\uCD5C\uC2E0 \uC778\uAE30 \uC601\uD654"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, this), popularMovie && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_MovieInfoSlider__WEBPACK_IMPORTED_MODULE_3__["default"], {
          movieInfomation: popularMovie
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 29
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(WrapMovieList, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(TitleOfList, {
          children: "\uC561\uC158 | Action"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, this), actionMovie && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_MovieInfoSlider__WEBPACK_IMPORTED_MODULE_3__["default"], {
          movieInfomation: actionMovie
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 29
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(WrapMovieList, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(TitleOfList, {
          children: "\uCF54\uBBF8\uB514 | Drama"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 21
        }, this), comedyMovie && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_MovieInfoSlider__WEBPACK_IMPORTED_MODULE_3__["default"], {
          movieInfomation: comedyMovie
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 29
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(WrapMovieList, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(TitleOfList, {
          children: "\uC560\uB2C8\uBA54\uC774\uC158 | Animation"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, this), animationMovie && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_MovieInfoSlider__WEBPACK_IMPORTED_MODULE_3__["default"], {
          movieInfomation: animationMovie
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 29
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(WrapMovieList, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(TitleOfList, {
          children: "\uD310\uD0C0\uC9C0 | Fantasy"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 21
        }, this), fantasyMovie && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_MovieInfoSlider__WEBPACK_IMPORTED_MODULE_3__["default"], {
          movieInfomation: fantasyMovie
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 29
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(WrapMovieList, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(TitleOfList, {
          children: "\uACF5\uC0C1\uACFC\uD559 | SF"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }, this), sfMovie && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_MovieInfoSlider__WEBPACK_IMPORTED_MODULE_3__["default"], {
          movieInfomation: sfMovie
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 29
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 9
  }, this);
}
_c4 = Home;

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "WrapMovieList");
$RefreshReg$(_c2, "TitleOfList");
$RefreshReg$(_c3, "SiteName");
$RefreshReg$(_c4, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiV3JhcE1vdmllTGlzdCIsInN0eWxlZCIsImRpdiIsIlRpdGxlT2ZMaXN0IiwiU2l0ZU5hbWUiLCJoMiIsIkhvbWUiLCJwcm9wcyIsInBvcHVsYXJNb3ZpZSIsImFjdGlvbk1vdmllIiwiY29tZWR5TW92aWUiLCJhbmltYXRpb25Nb3ZpZSIsImZhbnRhc3lNb3ZpZSIsInNmTW92aWUiLCJoZWlnaHQiLCJwb3NpdGlvbiIsIndpZHRoIiwibWFyZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxhQUFhLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMkJBQW5CO0tBQU1GLGE7QUFJTixJQUFNRyxXQUFXLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsbUNBQWpCO01BQU1DLFc7QUFJTixJQUFNQyxRQUFRLEdBQUdILHlEQUFNLENBQUNJLEVBQVY7QUFBQTtBQUFBO0FBQUEscUhBQWQ7TUFBTUQsUTs7QUFTUyxTQUFTRSxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFBQSxNQUN4QkMsWUFEd0IsR0FDUEQsS0FETyxDQUN4QkMsWUFEd0I7QUFBQSxNQUV4QkMsV0FGd0IsR0FFUkYsS0FGUSxDQUV4QkUsV0FGd0I7QUFBQSxNQUd4QkMsV0FId0IsR0FHUkgsS0FIUSxDQUd4QkcsV0FId0I7QUFBQSxNQUl4QkMsY0FKd0IsR0FJTEosS0FKSyxDQUl4QkksY0FKd0I7QUFBQSxNQUt4QkMsWUFMd0IsR0FLUEwsS0FMTyxDQUt4QkssWUFMd0I7QUFBQSxNQU14QkMsT0FOd0IsR0FNWk4sS0FOWSxDQU14Qk0sT0FOd0IsRUFTaEM7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQ0kscUVBQUMsNkRBQUQ7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQThCLFdBQUssRUFBRTtBQUFFQyxjQUFNLEVBQUUsTUFBVjtBQUFrQkMsZ0JBQVEsRUFBRTtBQUE1QixPQUFyQztBQUFBLDhCQUNJLHFFQUFDLG1FQUFEO0FBQWlCLHVCQUFlLEVBQUVQO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJLHFFQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUtJO0FBQUssV0FBSyxFQUFFO0FBQUVRLGFBQUssRUFBRSxLQUFUO0FBQWdCQyxjQUFNLEVBQUU7QUFBeEIsT0FBWjtBQUFnRCxlQUFTLEVBQUMsWUFBMUQ7QUFBQSw4QkFDSSxxRUFBQyxhQUFEO0FBQUEsK0JBQ0kscUVBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUlJLHFFQUFDLGFBQUQ7QUFBQSxnQ0FDSSxxRUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLEVBRU1ULFlBQVksaUJBRU4scUVBQUMsbUVBQUQ7QUFBaUIseUJBQWUsRUFBRUE7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSixlQVlJLHFFQUFDLGFBQUQ7QUFBQSxnQ0FDSSxxRUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLEVBRU1DLFdBQVcsaUJBRUwscUVBQUMsbUVBQUQ7QUFBaUIseUJBQWUsRUFBRUE7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaSixlQW9CSSxxRUFBQyxhQUFEO0FBQUEsZ0NBQ0kscUVBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixFQUVNQyxXQUFXLGlCQUVMLHFFQUFDLG1FQUFEO0FBQWlCLHlCQUFlLEVBQUVBO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcEJKLGVBNEJJLHFFQUFDLGFBQUQ7QUFBQSxnQ0FDSSxxRUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLEVBRU1DLGNBQWMsaUJBRVIscUVBQUMsbUVBQUQ7QUFBaUIseUJBQWUsRUFBRUE7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E1QkosZUFvQ0kscUVBQUMsYUFBRDtBQUFBLGdDQUNJLHFFQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosRUFFTUMsWUFBWSxpQkFFTixxRUFBQyxtRUFBRDtBQUFpQix5QkFBZSxFQUFFQTtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBDSixlQTRDSSxxRUFBQyxhQUFEO0FBQUEsZ0NBQ0kscUVBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixFQUVNQyxPQUFPLGlCQUVELHFFQUFDLG1FQUFEO0FBQWlCLHlCQUFlLEVBQUVBO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBNUNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBNkRIO01BL0V1QlAsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zMmJlNjc2ZDZmN2I1MGQ1ZTQ3NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBMYXlvdXQnXHJcbmltcG9ydCBNb3ZpZUluZm9TbGlkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Nb3ZpZUluZm9TbGlkZXInO1xyXG5pbXBvcnQgTW92aWVNYWluU2xpZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvTW92aWVNYWluU2xpZGVyJztcclxuXHJcbmltcG9ydCB7IGdldHBvcHVsYXJNb3ZpZUZyb21UTURCLCBnZXRNb3ZpZUJ5R2VucmVGcm9tVE1EQiB9IGZyb20gJy4uL2FwaSc7XHJcblxyXG5jb25zdCBXcmFwTW92aWVMaXN0ID0gc3R5bGVkLmRpdmBcclxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbmBcclxuXHJcbmNvbnN0IFRpdGxlT2ZMaXN0ID0gc3R5bGVkLmRpdmBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuYFxyXG5jb25zdCBTaXRlTmFtZSA9IHN0eWxlZC5oMmBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xMCUpO1xyXG5gXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcclxuICAgIGNvbnN0IHsgcG9wdWxhck1vdmllIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHsgYWN0aW9uTW92aWUgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgeyBjb21lZHlNb3ZpZSB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCB7IGFuaW1hdGlvbk1vdmllIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHsgZmFudGFzeU1vdmllIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHsgc2ZNb3ZpZSB9ID0gcHJvcHM7XHJcbiAgICBcclxuXHJcbiAgICAvLyBjb25zdCBtb3ZpZU5hbWVBcnJheSA9IChsaXN0KSA9PiB7XHJcbiAgICAvLyAgICAgdmFyIGFyciA9IFtdO1xyXG4gICAgICAgIFxyXG4gICAgLy8gICAgIGZvcihsZXQgaT0wOyBpPDU7IGkrKykge1xyXG4gICAgLy8gICAgICAgICBhcnIucHVzaChsaXN0W2ldKVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICByZXR1cm4gYXJyO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFwcExheW91dD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnRcIiBzdHlsZT17eyBoZWlnaHQ6ICc4MHZoJywgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XHJcbiAgICAgICAgICAgICAgICA8TW92aWVNYWluU2xpZGVyIG1vdmllSW5mb21hdGlvbj17cG9wdWxhck1vdmllfT48L01vdmllTWFpblNsaWRlcj5cclxuICAgICAgICAgICAgICAgIDxTaXRlTmFtZT5Nb3ZpZVRhbGs8L1NpdGVOYW1lPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzg1JScsIG1hcmdpbjogJzAgYXV0bycgfX0gY2xhc3NOYW1lPVwibW92aWUtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgPFdyYXBNb3ZpZUxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlT2ZMaXN0PuustOu5hO2GoSDrpqzrt7DsiJw8L1RpdGxlT2ZMaXN0PlxyXG4gICAgICAgICAgICAgICAgPC9XcmFwTW92aWVMaXN0PlxyXG4gICAgICAgICAgICAgICAgPFdyYXBNb3ZpZUxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlT2ZMaXN0Puy1nOyLoCDsnbjquLAg7JiB7ZmUPC9UaXRsZU9mTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICB7IHBvcHVsYXJNb3ZpZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW92aWVJbmZvU2xpZGVyIG1vdmllSW5mb21hdGlvbj17cG9wdWxhck1vdmllfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9XcmFwTW92aWVMaXN0PlxyXG4gICAgICAgICAgICAgICAgPFdyYXBNb3ZpZUxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlT2ZMaXN0PuyVoeyFmCB8IEFjdGlvbjwvVGl0bGVPZkxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgeyBhY3Rpb25Nb3ZpZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW92aWVJbmZvU2xpZGVyIG1vdmllSW5mb21hdGlvbj17YWN0aW9uTW92aWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L1dyYXBNb3ZpZUxpc3Q+XHJcbiAgICAgICAgICAgICAgICA8V3JhcE1vdmllTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICA8VGl0bGVPZkxpc3Q+7L2U66+465SUIHwgRHJhbWE8L1RpdGxlT2ZMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgIHsgY29tZWR5TW92aWUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vdmllSW5mb1NsaWRlciBtb3ZpZUluZm9tYXRpb249e2NvbWVkeU1vdmllfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9XcmFwTW92aWVMaXN0PlxyXG4gICAgICAgICAgICAgICAgPFdyYXBNb3ZpZUxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlT2ZMaXN0PuyVoOuLiOuplOydtOyFmCB8IEFuaW1hdGlvbjwvVGl0bGVPZkxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgeyBhbmltYXRpb25Nb3ZpZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW92aWVJbmZvU2xpZGVyIG1vdmllSW5mb21hdGlvbj17YW5pbWF0aW9uTW92aWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L1dyYXBNb3ZpZUxpc3Q+XHJcbiAgICAgICAgICAgICAgICA8V3JhcE1vdmllTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICA8VGl0bGVPZkxpc3Q+7YyQ7YOA7KeAIHwgRmFudGFzeTwvVGl0bGVPZkxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgeyBmYW50YXN5TW92aWUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vdmllSW5mb1NsaWRlciBtb3ZpZUluZm9tYXRpb249e2ZhbnRhc3lNb3ZpZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvV3JhcE1vdmllTGlzdD5cclxuICAgICAgICAgICAgICAgIDxXcmFwTW92aWVMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZU9mTGlzdD7qs7Xsg4Hqs7ztlZkgfCBTRjwvVGl0bGVPZkxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgeyBzZk1vdmllICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb3ZpZUluZm9TbGlkZXIgbW92aWVJbmZvbWF0aW9uPXtzZk1vdmllfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9XcmFwTW92aWVMaXN0PiAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0FwcExheW91dD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICAgIGNvbnN0IHBvcHVsYXJNb3ZpZSA9IGF3YWl0IGdldHBvcHVsYXJNb3ZpZUZyb21UTURCKCk7XHJcbiAgICBjb25zdCBhY3Rpb25Nb3ZpZSA9IGF3YWl0IGdldE1vdmllQnlHZW5yZUZyb21UTURCKDI4KTtcclxuICAgIGNvbnN0IGNvbWVkeU1vdmllID0gYXdhaXQgZ2V0TW92aWVCeUdlbnJlRnJvbVRNREIoMzUpO1xyXG4gICAgY29uc3QgYW5pbWF0aW9uTW92aWUgPSBhd2FpdCBnZXRNb3ZpZUJ5R2VucmVGcm9tVE1EQigxNik7XHJcbiAgICBjb25zdCBmYW50YXN5TW92aWUgPSBhd2FpdCBnZXRNb3ZpZUJ5R2VucmVGcm9tVE1EQigxNCk7XHJcbiAgICBjb25zdCBzZk1vdmllID0gYXdhaXQgZ2V0TW92aWVCeUdlbnJlRnJvbVRNREIoODc4KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczogeyBcclxuICAgICAgICBwb3B1bGFyTW92aWU6IHBvcHVsYXJNb3ZpZS5yZXN1bHRzLCBcclxuICAgICAgICBhY3Rpb25Nb3ZpZTogYWN0aW9uTW92aWUucmVzdWx0cywgXHJcbiAgICAgICAgY29tZWR5TW92aWU6IGNvbWVkeU1vdmllLnJlc3VsdHMsXHJcbiAgICAgICAgYW5pbWF0aW9uTW92aWU6IGFuaW1hdGlvbk1vdmllLnJlc3VsdHMsXHJcbiAgICAgICAgZmFudGFzeU1vdmllOiBmYW50YXN5TW92aWUucmVzdWx0cyxcclxuICAgICAgICBzZk1vdmllOiBzZk1vdmllLnJlc3VsdHNcclxuICAgICAgfSxcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9