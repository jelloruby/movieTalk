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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout_MainPageLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/MainPageLayout */ "./components/layout/MainPageLayout.js");
/* harmony import */ var _components_slider_MovieInfoSlider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/slider/MovieInfoSlider */ "./components/slider/MovieInfoSlider.js");
/* harmony import */ var _components_slider_MovieMainSlider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/slider/MovieMainSlider */ "./components/slider/MovieMainSlider.js");
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/io5 */ "./node_modules/react-icons/io5/index.esm.js");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./api/api */ "./pages/api/api.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\codingtime\\movieBox\\front\\pages\\index.js",
    _s = $RefreshSig$();











var WrapMovieList = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__WrapMovieList",
  componentId: "sc-190qa7b-0"
})([""]);
_c = WrapMovieList;
var TitleOfList = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__TitleOfList",
  componentId: "sc-190qa7b-1"
})(["font-size:1.5rem;"]);
_c2 = TitleOfList;
var SearchInput = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input.withConfig({
  displayName: "pages__SearchInput",
  componentId: "sc-190qa7b-2"
})(["width:250px;height:50px;margin:0 auto;text-align:center;border-radius:2rem;border:none;position:relative;z-index:99999;"]);
_c3 = SearchInput;

function Home(props) {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  console.log(me);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      inputValue = _useState[0],
      setInputValue = _useState[1];

  var popularMovie = props.popularMovie;

  var handleInputValue = function handleInputValue(e) {
    setInputValue(e.target.value);
  };

  var handleSubmitValue = function handleSubmitValue(e) {
    e.preventDefault();
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/movieSearch/".concat(inputValue));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_layout_MainPageLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: "main-content",
      style: {
        height: '100vh',
        position: 'relative',
        marginLeft: '200px'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("form", {
        onSubmit: handleSubmitValue,
        style: {
          textAlign: 'center',
          position: 'absolute',
          top: '2.5rem',
          left: '2rem'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(SearchInput, {
          placeholder: "\uC601\uD654\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",
          onChange: handleInputValue
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
          type: "submit",
          className: "btn search-btn",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_7__["IoSearchSharp"], {
            style: {
              color: 'white',
              fontSize: '1.5rem'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_slider_MovieMainSlider__WEBPACK_IMPORTED_MODULE_6__["default"], {
        movieInfomation: popularMovie
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      style: {
        width: '84%',
        margin: '0 auto',
        position: 'absolute',
        bottom: '2rem',
        left: '250px'
      },
      className: "movie-list",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(WrapMovieList, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(TitleOfList, {
          children: "\uCD5C\uC2E0 \uC778\uAE30 \uC601\uD654"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }, this), popularMovie && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_slider_MovieInfoSlider__WEBPACK_IMPORTED_MODULE_5__["default"], {
          movieInfomation: popularMovie
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 29
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 9
  }, this);
}

_s(Home, "ZrCLiuVZbz+hRhKSvhs1OxjJT/o=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c4 = Home;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "WrapMovieList");
$RefreshReg$(_c2, "TitleOfList");
$RefreshReg$(_c3, "SearchInput");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiV3JhcE1vdmllTGlzdCIsInN0eWxlZCIsImRpdiIsIlRpdGxlT2ZMaXN0IiwiU2VhcmNoSW5wdXQiLCJpbnB1dCIsIkhvbWUiLCJwcm9wcyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsInBvcHVsYXJNb3ZpZSIsImhhbmRsZUlucHV0VmFsdWUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXRWYWx1ZSIsInByZXZlbnREZWZhdWx0IiwiUm91dGVyIiwicHVzaCIsImhlaWdodCIsInBvc2l0aW9uIiwibWFyZ2luTGVmdCIsInRleHRBbGlnbiIsInRvcCIsImxlZnQiLCJjb2xvciIsImZvbnRTaXplIiwid2lkdGgiLCJtYXJnaW4iLCJib3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRUEsSUFBTUEsYUFBYSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLFFBQW5CO0tBQU1GLGE7QUFHTixJQUFNRyxXQUFXLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEseUJBQWpCO01BQU1DLFc7QUFJTixJQUFNQyxXQUFXLEdBQUdILHlEQUFNLENBQUNJLEtBQVY7QUFBQTtBQUFBO0FBQUEsK0hBQWpCO01BQU1ELFc7O0FBV04sU0FBU0UsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQUE7O0FBQUEscUJBQ0ZDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBRFQ7QUFBQSxNQUNUQyxFQURTLGdCQUNUQSxFQURTOztBQUVqQkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEVBQVo7O0FBRmlCLGtCQUdtQkcsc0RBQVEsQ0FBQyxFQUFELENBSDNCO0FBQUEsTUFHVkMsVUFIVTtBQUFBLE1BR0VDLGFBSEY7O0FBQUEsTUFLVEMsWUFMUyxHQUtRVixLQUxSLENBS1RVLFlBTFM7O0FBT2pCLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzVCSCxpQkFBYSxDQUFDRyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFiO0FBQ0gsR0FGRDs7QUFJQSxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNILENBQUQsRUFBTztBQUM3QkEsS0FBQyxDQUFDSSxjQUFGO0FBQ0FDLHNEQUFNLENBQUNDLElBQVAsd0JBQTRCVixVQUE1QjtBQUNILEdBSEQ7O0FBS0Esc0JBQ0kscUVBQUMseUVBQUQ7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQThCLFdBQUssRUFBRTtBQUFFVyxjQUFNLEVBQUUsT0FBVjtBQUFtQkMsZ0JBQVEsRUFBRSxVQUE3QjtBQUF5Q0Msa0JBQVUsRUFBRTtBQUFyRCxPQUFyQztBQUFBLDhCQUNJO0FBQ0ksZ0JBQVEsRUFBRU4saUJBRGQ7QUFFSSxhQUFLLEVBQUU7QUFBRU8sbUJBQVMsRUFBRSxRQUFiO0FBQXVCRixrQkFBUSxFQUFFLFVBQWpDO0FBQTZDRyxhQUFHLEVBQUUsUUFBbEQ7QUFBNERDLGNBQUksRUFBRTtBQUFsRSxTQUZYO0FBQUEsZ0NBSUkscUVBQUMsV0FBRDtBQUNJLHFCQUFXLEVBQUMsZ0VBRGhCO0FBRUksa0JBQVEsRUFBRWI7QUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKLGVBUUk7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFzQixtQkFBUyxFQUFDLGdCQUFoQztBQUFBLGlDQUNJLHFFQUFDLDZEQUFEO0FBQWUsaUJBQUssRUFBRTtBQUFFYyxtQkFBSyxFQUFFLE9BQVQ7QUFBa0JDLHNCQUFRLEVBQUU7QUFBNUI7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFjSSxxRUFBQywwRUFBRDtBQUFpQix1QkFBZSxFQUFFaEI7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBaUJJO0FBQUssV0FBSyxFQUFFO0FBQUVpQixhQUFLLEVBQUUsS0FBVDtBQUFnQkMsY0FBTSxFQUFFLFFBQXhCO0FBQWtDUixnQkFBUSxFQUFFLFVBQTVDO0FBQXdEUyxjQUFNLEVBQUUsTUFBaEU7QUFBd0VMLFlBQUksRUFBRTtBQUE5RSxPQUFaO0FBQXFHLGVBQVMsRUFBQyxZQUEvRztBQUFBLDZCQUNJLHFFQUFDLGFBQUQ7QUFBQSxnQ0FDSSxxRUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLEVBRU1kLFlBQVksaUJBRU4scUVBQUMsMEVBQUQ7QUFBaUIseUJBQWUsRUFBRUE7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBOEJIOztHQTlDUVgsSTtVQUNVRSx1RDs7O01BRFZGLEk7O0FBNkVNQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wMzNjNDc5YjczNzUyOTVjNDU4Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEVORCB9IGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgTE9BRF9NWV9JTkZPX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJ1xyXG5pbXBvcnQgTWFpblBhZ2VMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvTWFpblBhZ2VMYXlvdXQnXHJcbmltcG9ydCBNb3ZpZUluZm9TbGlkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9zbGlkZXIvTW92aWVJbmZvU2xpZGVyJztcclxuaW1wb3J0IE1vdmllTWFpblNsaWRlciBmcm9tICcuLi9jb21wb25lbnRzL3NsaWRlci9Nb3ZpZU1haW5TbGlkZXInO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcbmltcG9ydCB7IElvU2VhcmNoU2hhcnAgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW81XCI7XHJcblxyXG5pbXBvcnQgeyBnZXRwb3B1bGFyTW92aWVGcm9tVE1EQiwgZ2V0TW92aWVCeUdlbnJlRnJvbVRNREIgfSBmcm9tICcuL2FwaS9hcGknO1xyXG5cclxuY29uc3QgV3JhcE1vdmllTGlzdCA9IHN0eWxlZC5kaXZgXHJcbmBcclxuXHJcbmNvbnN0IFRpdGxlT2ZMaXN0ID0gc3R5bGVkLmRpdmBcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG5gXHJcblxyXG5jb25zdCBTZWFyY2hJbnB1dCA9IHN0eWxlZC5pbnB1dGBcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDk5OTk5O1xyXG5gXHJcblxyXG5mdW5jdGlvbiBIb21lKHByb3BzKSB7XHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgY29uc29sZS5sb2cobWUpO1xyXG4gICAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBcclxuICAgIGNvbnN0IHsgcG9wdWxhck1vdmllIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCBoYW5kbGVJbnB1dFZhbHVlID0gKGUpID0+IHtcclxuICAgICAgICBzZXRJbnB1dFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0VmFsdWUgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBSb3V0ZXIucHVzaChgL21vdmllU2VhcmNoLyR7aW5wdXRWYWx1ZX1gKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TWFpblBhZ2VMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250ZW50XCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwdmgnLCBwb3NpdGlvbjogJ3JlbGF0aXZlJywgbWFyZ2luTGVmdDogJzIwMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6ICcyLjVyZW0nLCBsZWZ0OiAnMnJlbScgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLsmIHtmZTrqoXsnYQg7J6F66Cl7ZW07KO87IS47JqULlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIHNlYXJjaC1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElvU2VhcmNoU2hhcnAgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIGZvbnRTaXplOiAnMS41cmVtJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgICAgIDxNb3ZpZU1haW5TbGlkZXIgbW92aWVJbmZvbWF0aW9uPXtwb3B1bGFyTW92aWV9PjwvTW92aWVNYWluU2xpZGVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzg0JScsIG1hcmdpbjogJzAgYXV0bycsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBib3R0b206ICcycmVtJywgbGVmdDogJzI1MHB4JyB9fSBjbGFzc05hbWU9XCJtb3ZpZS1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8V3JhcE1vdmllTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICA8VGl0bGVPZkxpc3Q+7LWc7IugIOyduOq4sCDsmIHtmZQ8L1RpdGxlT2ZMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9wdWxhck1vdmllICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb3ZpZUluZm9TbGlkZXIgbW92aWVJbmZvbWF0aW9uPXtwb3B1bGFyTW92aWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L1dyYXBNb3ZpZUxpc3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTWFpblBhZ2VMYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gICAgLy8g7L+g7YKk7J2YIOygleuztOqwgCDtla3sg4Eg65Ok7Ja06rCA64+E66GdIO2VtOyjvOuKlCDqsoMhXHJcbiAgICBjb25zdCBjb29raWUgPSBjb250ZXh0LnJlcSA/IGNvbnRleHQucmVxLmhlYWRlcnMuY29va2llIDogJyc7XHJcbiAgICAvLyDrp4zslb0g7JWE656Y7JmAIOqwmeydtCDshKTsoJXtlZjrqbQg7L+g7YKk6rCAIOuqqOuToCDshJzrsoTsl5DshJwg6rO17Jyg65CgIOyImCDsnojri6QuXHJcbiAgICAvLyBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IGNvb2tpZTtcclxuXHJcbiAgICAvLyDqt7jrnpjshJwg7L+g7YKk66W8IOyNqOyEnCDsmpTssq3snYQg67O064K8IOuVjOunjCDsv6DtgqTrpbwg64Sj7Ja064ao64uk6rCAIOy/oO2CpOulvCDsk7Dsp4Ag7JWK7J2EIOuVjOuKlCDshJzrsoTsl5DshJwg6rO17Jyg7ZWY6rOgIOyeiOuKlCDsv6DtgqTrpbwg7KCc6rGw7ZWY64+E66GdIO2VnOuLpC5cclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gJyc7XHJcbiAgICBpZiAoY29udGV4dC5yZXEgJiYgY29va2llKSB7XHJcbiAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gY29va2llO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBjb250ZXh0IOyViOyXkOuKlCBzdG9yZeqwgCDrk6TslrTsnojri6QuXHJcbiAgICAvLyByZWR1eOyXkCDrjbDsnbTthLDqsIAg7LGE7JuM7KeEIOyDge2DnOuhnCDrjbDsnbTthLDqsIAg7KG07J6s7ZWY6rKMIOuQnOuLpC5cclxuICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IExPQURfTVlfSU5GT19SRVFVRVNUXHJcbiAgICB9KTtcclxuICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goRU5EKTtcclxuICAgIGF3YWl0IGNvbnRleHQuc3RvcmUuc2FnYVRhc2sudG9Qcm9taXNlKCk7XHJcblxyXG4gICAgY29uc3QgcG9wdWxhck1vdmllID0gYXdhaXQgZ2V0cG9wdWxhck1vdmllRnJvbVRNREIoKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczogeyBcclxuICAgICAgICBwb3B1bGFyTW92aWU6IHBvcHVsYXJNb3ZpZS5yZXN1bHRzLCBcclxuICAgICAgfSxcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=