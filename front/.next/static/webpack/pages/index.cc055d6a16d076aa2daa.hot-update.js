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
        lineNumber: 35,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
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
          lineNumber: 39,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(WrapMovieList, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(TitleOfList, {
          children: "\uCD5C\uC2E0 \uC778\uAE30 \uC601\uD654"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, this), popularMovie && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_MovieInfoSlider__WEBPACK_IMPORTED_MODULE_3__["default"], {
          movieInfomation: popularMovie
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 29
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(WrapMovieList, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(TitleOfList, {
          children: "\uC561\uC158 | Action"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, this), actionMovie && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_MovieInfoSlider__WEBPACK_IMPORTED_MODULE_3__["default"], {
          movieInfomation: actionMovie
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 29
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(WrapMovieList, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(TitleOfList, {
          children: "\uCF54\uBBF8\uB514 | Drama"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, this), comedyMovie && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_MovieInfoSlider__WEBPACK_IMPORTED_MODULE_3__["default"], {
          movieInfomation: comedyMovie
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 29
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(WrapMovieList, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(TitleOfList, {
          children: "\uC560\uB2C8\uBA54\uC774\uC158 | Animation"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, this), animationMovie && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_MovieInfoSlider__WEBPACK_IMPORTED_MODULE_3__["default"], {
          movieInfomation: animationMovie
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 29
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(WrapMovieList, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(TitleOfList, {
          children: "\uD310\uD0C0\uC9C0 | Fantasy"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, this), fantasyMovie && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_MovieInfoSlider__WEBPACK_IMPORTED_MODULE_3__["default"], {
          movieInfomation: fantasyMovie
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 29
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(WrapMovieList, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(TitleOfList, {
          children: "\uACF5\uC0C1\uACFC\uD559 | SF"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 21
        }, this), sfMovie && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_MovieInfoSlider__WEBPACK_IMPORTED_MODULE_3__["default"], {
          movieInfomation: sfMovie
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 29
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiV3JhcE1vdmllTGlzdCIsInN0eWxlZCIsImRpdiIsIlRpdGxlT2ZMaXN0IiwiSG9tZSIsInByb3BzIiwicG9wdWxhck1vdmllIiwiYWN0aW9uTW92aWUiLCJjb21lZHlNb3ZpZSIsImFuaW1hdGlvbk1vdmllIiwiZmFudGFzeU1vdmllIiwic2ZNb3ZpZSIsInJhbmRvbUltYWdlIiwiaSIsIm51bWJlciIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJwb3N0ZXJfcGF0aCIsImhlaWdodCIsInRleHRBbGlnbiIsImZvbnRTaXplIiwiY29sb3IiLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFJQSxJQUFNQSxhQUFhLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMkJBQW5CO0tBQU1GLGE7QUFJTixJQUFNRyxXQUFXLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsa0NBQWpCO01BQU1DLFc7O0FBS1MsU0FBU0MsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQUEsTUFDeEJDLFlBRHdCLEdBQ1BELEtBRE8sQ0FDeEJDLFlBRHdCO0FBQUEsTUFFeEJDLFdBRndCLEdBRVJGLEtBRlEsQ0FFeEJFLFdBRndCO0FBQUEsTUFHeEJDLFdBSHdCLEdBR1JILEtBSFEsQ0FHeEJHLFdBSHdCO0FBQUEsTUFJeEJDLGNBSndCLEdBSUxKLEtBSkssQ0FJeEJJLGNBSndCO0FBQUEsTUFLeEJDLFlBTHdCLEdBS1BMLEtBTE8sQ0FLeEJLLFlBTHdCO0FBQUEsTUFNeEJDLE9BTndCLEdBTVpOLEtBTlksQ0FNeEJNLE9BTndCOztBQVFoQyxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3RCLFNBQUksSUFBSUMsQ0FBQyxHQUFDQyxNQUFWLEVBQWtCRCxDQUFDLEdBQUNQLFlBQVksQ0FBQ1MsTUFBakMsRUFBeUNGLENBQUMsRUFBMUMsRUFBOEM7QUFDMUNHLGFBQU8sQ0FBQ0MsR0FBUixDQUFZWCxZQUFZLENBQUNPLENBQUQsQ0FBWixDQUFnQkssV0FBNUI7QUFDSDtBQUNKLEdBSkQ7O0FBS0FOLGFBQVc7QUFDWCxzQkFDSSxxRUFBQyw2REFBRDtBQUFBLDRCQUNJO0FBQUssV0FBSyxFQUFFO0FBQUVPLGNBQU0sRUFBRTtBQUFWLE9BQVo7QUFBQSw2QkFDSTtBQUFJLGFBQUssRUFBRTtBQUFFQyxtQkFBUyxFQUFFLFFBQWI7QUFBdUJDLGtCQUFRLEVBQUUsTUFBakM7QUFBeUNDLGVBQUssRUFBRTtBQUFoRCxTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBSUk7QUFBSyxXQUFLLEVBQUU7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FBWjtBQUFBLDhCQUNJLHFFQUFDLGFBQUQ7QUFBQSwrQkFDSSxxRUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBSUkscUVBQUMsYUFBRDtBQUFBLGdDQUNJLHFFQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosRUFFTWpCLFlBQVksaUJBRU4scUVBQUMsbUVBQUQ7QUFBaUIseUJBQWUsRUFBRUE7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSixlQVlJLHFFQUFDLGFBQUQ7QUFBQSxnQ0FDSSxxRUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLEVBRU1DLFdBQVcsaUJBRUwscUVBQUMsbUVBQUQ7QUFBaUIseUJBQWUsRUFBRUE7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaSixlQW9CSSxxRUFBQyxhQUFEO0FBQUEsZ0NBQ0kscUVBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixFQUVNQyxXQUFXLGlCQUVMLHFFQUFDLG1FQUFEO0FBQWlCLHlCQUFlLEVBQUVBO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcEJKLGVBNEJJLHFFQUFDLGFBQUQ7QUFBQSxnQ0FDSSxxRUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLEVBRU1DLGNBQWMsaUJBRVIscUVBQUMsbUVBQUQ7QUFBaUIseUJBQWUsRUFBRUE7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E1QkosZUFvQ0kscUVBQUMsYUFBRDtBQUFBLGdDQUNJLHFFQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosRUFFTUMsWUFBWSxpQkFFTixxRUFBQyxtRUFBRDtBQUFpQix5QkFBZSxFQUFFQTtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBDSixlQTRDSSxxRUFBQyxhQUFEO0FBQUEsZ0NBQ0kscUVBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixFQUVNQyxPQUFPLGlCQUVELHFFQUFDLG1FQUFEO0FBQWlCLHlCQUFlLEVBQUVBO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBNUNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBNERIO01BMUV1QlAsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jYzA1NWQ2YTE2ZDA3NmFhMmRhYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBMYXlvdXQnXHJcbmltcG9ydCBNb3ZpZUluZm9TbGlkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Nb3ZpZUluZm9TbGlkZXInO1xyXG5cclxuaW1wb3J0IHsgZ2V0cG9wdWxhck1vdmllRnJvbVRNREIsIGdldE1vdmllQnlHZW5yZUZyb21UTURCIH0gZnJvbSAnLi4vYXBpJztcclxuXHJcbmNvbnN0IFdyYXBNb3ZpZUxpc3QgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuYFxyXG5cclxuY29uc3QgVGl0bGVPZkxpc3QgPSBzdHlsZWQuZGl2YFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAycmVtXHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcclxuICAgIGNvbnN0IHsgcG9wdWxhck1vdmllIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHsgYWN0aW9uTW92aWUgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgeyBjb21lZHlNb3ZpZSB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCB7IGFuaW1hdGlvbk1vdmllIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHsgZmFudGFzeU1vdmllIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHsgc2ZNb3ZpZSB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3QgcmFuZG9tSW1hZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgZm9yKGxldCBpPW51bWJlcjsgaTxwb3B1bGFyTW92aWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocG9wdWxhck1vdmllW2ldLnBvc3Rlcl9wYXRoKTsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmFuZG9tSW1hZ2UoKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXBwTGF5b3V0PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzcwMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBmb250U2l6ZTogJzNyZW0nLCBjb2xvcjogJ3JlZCcgfX0+TW92aWVUYWxrPC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzAgOHJlbScgfX0+XHJcbiAgICAgICAgICAgICAgICA8V3JhcE1vdmllTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICA8VGl0bGVPZkxpc3Q+66y067mE7YahIOumrOu3sOyInDwvVGl0bGVPZkxpc3Q+XHJcbiAgICAgICAgICAgICAgICA8L1dyYXBNb3ZpZUxpc3Q+XHJcbiAgICAgICAgICAgICAgICA8V3JhcE1vdmllTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICA8VGl0bGVPZkxpc3Q+7LWc7IugIOyduOq4sCDsmIHtmZQ8L1RpdGxlT2ZMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9wdWxhck1vdmllICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb3ZpZUluZm9TbGlkZXIgbW92aWVJbmZvbWF0aW9uPXtwb3B1bGFyTW92aWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L1dyYXBNb3ZpZUxpc3Q+XHJcbiAgICAgICAgICAgICAgICA8V3JhcE1vdmllTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICA8VGl0bGVPZkxpc3Q+7JWh7IWYIHwgQWN0aW9uPC9UaXRsZU9mTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICB7IGFjdGlvbk1vdmllICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb3ZpZUluZm9TbGlkZXIgbW92aWVJbmZvbWF0aW9uPXthY3Rpb25Nb3ZpZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvV3JhcE1vdmllTGlzdD5cclxuICAgICAgICAgICAgICAgIDxXcmFwTW92aWVMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZU9mTGlzdD7svZTrr7jrlJQgfCBEcmFtYTwvVGl0bGVPZkxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgeyBjb21lZHlNb3ZpZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW92aWVJbmZvU2xpZGVyIG1vdmllSW5mb21hdGlvbj17Y29tZWR5TW92aWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L1dyYXBNb3ZpZUxpc3Q+XHJcbiAgICAgICAgICAgICAgICA8V3JhcE1vdmllTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICA8VGl0bGVPZkxpc3Q+7JWg64uI66mU7J207IWYIHwgQW5pbWF0aW9uPC9UaXRsZU9mTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICB7IGFuaW1hdGlvbk1vdmllICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb3ZpZUluZm9TbGlkZXIgbW92aWVJbmZvbWF0aW9uPXthbmltYXRpb25Nb3ZpZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvV3JhcE1vdmllTGlzdD5cclxuICAgICAgICAgICAgICAgIDxXcmFwTW92aWVMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZU9mTGlzdD7tjJDtg4Dsp4AgfCBGYW50YXN5PC9UaXRsZU9mTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICB7IGZhbnRhc3lNb3ZpZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW92aWVJbmZvU2xpZGVyIG1vdmllSW5mb21hdGlvbj17ZmFudGFzeU1vdmllfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9XcmFwTW92aWVMaXN0PlxyXG4gICAgICAgICAgICAgICAgPFdyYXBNb3ZpZUxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlT2ZMaXN0PuqzteyDgeqzvO2VmSB8IFNGPC9UaXRsZU9mTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICB7IHNmTW92aWUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vdmllSW5mb1NsaWRlciBtb3ZpZUluZm9tYXRpb249e3NmTW92aWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L1dyYXBNb3ZpZUxpc3Q+ICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gICAgY29uc3QgcG9wdWxhck1vdmllID0gYXdhaXQgZ2V0cG9wdWxhck1vdmllRnJvbVRNREIoKTtcclxuICAgIGNvbnN0IGFjdGlvbk1vdmllID0gYXdhaXQgZ2V0TW92aWVCeUdlbnJlRnJvbVRNREIoMjgpO1xyXG4gICAgY29uc3QgY29tZWR5TW92aWUgPSBhd2FpdCBnZXRNb3ZpZUJ5R2VucmVGcm9tVE1EQigzNSk7XHJcbiAgICBjb25zdCBhbmltYXRpb25Nb3ZpZSA9IGF3YWl0IGdldE1vdmllQnlHZW5yZUZyb21UTURCKDE2KTtcclxuICAgIGNvbnN0IGZhbnRhc3lNb3ZpZSA9IGF3YWl0IGdldE1vdmllQnlHZW5yZUZyb21UTURCKDE0KTtcclxuICAgIGNvbnN0IHNmTW92aWUgPSBhd2FpdCBnZXRNb3ZpZUJ5R2VucmVGcm9tVE1EQig4NzgpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7IFxyXG4gICAgICAgIHBvcHVsYXJNb3ZpZTogcG9wdWxhck1vdmllLnJlc3VsdHMsIFxyXG4gICAgICAgIGFjdGlvbk1vdmllOiBhY3Rpb25Nb3ZpZS5yZXN1bHRzLCBcclxuICAgICAgICBjb21lZHlNb3ZpZTogY29tZWR5TW92aWUucmVzdWx0cyxcclxuICAgICAgICBhbmltYXRpb25Nb3ZpZTogYW5pbWF0aW9uTW92aWUucmVzdWx0cyxcclxuICAgICAgICBmYW50YXN5TW92aWU6IGZhbnRhc3lNb3ZpZS5yZXN1bHRzLFxyXG4gICAgICAgIHNmTW92aWU6IHNmTW92aWUucmVzdWx0c1xyXG4gICAgICB9LFxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=