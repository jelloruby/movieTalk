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
        height: '100vh'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("form", {
        onSubmit: handleSubmitValue,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(SearchInput, {
          placeholder: "\uC601\uD654\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",
          onChange: handleInputValue
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
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
            lineNumber: 62,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
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
        lineNumber: 66,
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
          lineNumber: 70,
          columnNumber: 21
        }, this), popularMovie && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_slider_MovieInfoSlider__WEBPACK_IMPORTED_MODULE_5__["default"], {
          movieInfomation: popularMovie
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 29
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiV3JhcE1vdmllTGlzdCIsInN0eWxlZCIsImRpdiIsIlRpdGxlT2ZMaXN0IiwiU2VhcmNoSW5wdXQiLCJpbnB1dCIsIkhvbWUiLCJwcm9wcyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsInBvcHVsYXJNb3ZpZSIsImhhbmRsZUlucHV0VmFsdWUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXRWYWx1ZSIsInByZXZlbnREZWZhdWx0IiwiUm91dGVyIiwicHVzaCIsImhlaWdodCIsImNvbG9yIiwiZm9udFNpemUiLCJ3aWR0aCIsIm1hcmdpbiIsInBvc2l0aW9uIiwiYm90dG9tIiwibGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsUUFBbkI7S0FBTUYsYTtBQUdOLElBQU1HLFdBQVcsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx5QkFBakI7TUFBTUMsVztBQUlOLElBQU1DLFdBQVcsR0FBR0gseURBQU0sQ0FBQ0ksS0FBVjtBQUFBO0FBQUE7QUFBQSwrSEFBakI7TUFBTUQsVzs7QUFXTixTQUFTRSxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFBQTs7QUFBQSxxQkFDRkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FEVDtBQUFBLE1BQ1RDLEVBRFMsZ0JBQ1RBLEVBRFM7O0FBRWpCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsRUFBWjs7QUFGaUIsa0JBR21CRyxzREFBUSxDQUFDLEVBQUQsQ0FIM0I7QUFBQSxNQUdWQyxVQUhVO0FBQUEsTUFHRUMsYUFIRjs7QUFBQSxNQUtUQyxZQUxTLEdBS1FWLEtBTFIsQ0FLVFUsWUFMUzs7QUFPakIsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxDQUFELEVBQU87QUFDNUJILGlCQUFhLENBQUNHLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWI7QUFDSCxHQUZEOztBQUlBLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0gsQ0FBRCxFQUFPO0FBQzdCQSxLQUFDLENBQUNJLGNBQUY7QUFDQUMsc0RBQU0sQ0FBQ0MsSUFBUCx3QkFBNEJWLFVBQTVCO0FBQ0gsR0FIRDs7QUFLQSxzQkFDSSxxRUFBQyx5RUFBRDtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBOEIsV0FBSyxFQUFFO0FBQUVXLGNBQU0sRUFBRTtBQUFWLE9BQXJDO0FBQUEsOEJBQ0k7QUFDSSxnQkFBUSxFQUFFSixpQkFEZDtBQUFBLGdDQUdJLHFFQUFDLFdBQUQ7QUFDSSxxQkFBVyxFQUFDLGdFQURoQjtBQUVJLGtCQUFRLEVBQUVKO0FBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISixlQU9JO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBc0IsbUJBQVMsRUFBQyxnQkFBaEM7QUFBQSxpQ0FDSSxxRUFBQyw2REFBRDtBQUFlLGlCQUFLLEVBQUU7QUFBRVMsbUJBQUssRUFBRSxPQUFUO0FBQWtCQyxzQkFBUSxFQUFFO0FBQTVCO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBYUkscUVBQUMsMEVBQUQ7QUFBaUIsdUJBQWUsRUFBRVg7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBZ0JJO0FBQUssV0FBSyxFQUFFO0FBQUVZLGFBQUssRUFBRSxLQUFUO0FBQWdCQyxjQUFNLEVBQUUsUUFBeEI7QUFBa0NDLGdCQUFRLEVBQUUsVUFBNUM7QUFBd0RDLGNBQU0sRUFBRSxNQUFoRTtBQUF3RUMsWUFBSSxFQUFFO0FBQTlFLE9BQVo7QUFBcUcsZUFBUyxFQUFDLFlBQS9HO0FBQUEsNkJBQ0kscUVBQUMsYUFBRDtBQUFBLGdDQUNJLHFFQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosRUFFTWhCLFlBQVksaUJBRU4scUVBQUMsMEVBQUQ7QUFBaUIseUJBQWUsRUFBRUE7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBNkJIOztHQTdDUVgsSTtVQUNVRSx1RDs7O01BRFZGLEk7O0FBNEVNQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45ODkzOGU1MTM3Y2I1MDBlODZmMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEVORCB9IGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgTE9BRF9NWV9JTkZPX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJ1xyXG5pbXBvcnQgTWFpblBhZ2VMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvTWFpblBhZ2VMYXlvdXQnXHJcbmltcG9ydCBNb3ZpZUluZm9TbGlkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9zbGlkZXIvTW92aWVJbmZvU2xpZGVyJztcclxuaW1wb3J0IE1vdmllTWFpblNsaWRlciBmcm9tICcuLi9jb21wb25lbnRzL3NsaWRlci9Nb3ZpZU1haW5TbGlkZXInO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcbmltcG9ydCB7IElvU2VhcmNoU2hhcnAgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW81XCI7XHJcblxyXG5pbXBvcnQgeyBnZXRwb3B1bGFyTW92aWVGcm9tVE1EQiwgZ2V0TW92aWVCeUdlbnJlRnJvbVRNREIgfSBmcm9tICcuL2FwaS9hcGknO1xyXG5cclxuY29uc3QgV3JhcE1vdmllTGlzdCA9IHN0eWxlZC5kaXZgXHJcbmBcclxuXHJcbmNvbnN0IFRpdGxlT2ZMaXN0ID0gc3R5bGVkLmRpdmBcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG5gXHJcblxyXG5jb25zdCBTZWFyY2hJbnB1dCA9IHN0eWxlZC5pbnB1dGBcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDk5OTk5O1xyXG5gXHJcblxyXG5mdW5jdGlvbiBIb21lKHByb3BzKSB7XHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgY29uc29sZS5sb2cobWUpO1xyXG4gICAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBcclxuICAgIGNvbnN0IHsgcG9wdWxhck1vdmllIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCBoYW5kbGVJbnB1dFZhbHVlID0gKGUpID0+IHtcclxuICAgICAgICBzZXRJbnB1dFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0VmFsdWUgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBSb3V0ZXIucHVzaChgL21vdmllU2VhcmNoLyR7aW5wdXRWYWx1ZX1gKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TWFpblBhZ2VMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250ZW50XCIgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwdmgnIH19PlxyXG4gICAgICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7JiB7ZmU66qF7J2EIOyeheugpe2VtOyjvOyEuOyalC5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBzZWFyY2gtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJb1NlYXJjaFNoYXJwIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBmb250U2l6ZTogJzEuNXJlbScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgICA8TW92aWVNYWluU2xpZGVyIG1vdmllSW5mb21hdGlvbj17cG9wdWxhck1vdmllfT48L01vdmllTWFpblNsaWRlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICc4NCUnLCBtYXJnaW46ICcwIGF1dG8nLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgYm90dG9tOiAnMnJlbScsIGxlZnQ6ICcyNTBweCcgfX0gY2xhc3NOYW1lPVwibW92aWUtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgPFdyYXBNb3ZpZUxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlT2ZMaXN0Puy1nOyLoCDsnbjquLAg7JiB7ZmUPC9UaXRsZU9mTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICB7IHBvcHVsYXJNb3ZpZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW92aWVJbmZvU2xpZGVyIG1vdmllSW5mb21hdGlvbj17cG9wdWxhck1vdmllfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9XcmFwTW92aWVMaXN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L01haW5QYWdlTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd3JhcHBlci5nZXRTZXJ2ZXJTaWRlUHJvcHMoYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICAgIC8vIOy/oO2CpOydmCDsoJXrs7TqsIAg7ZWt7IOBIOuTpOyWtOqwgOuPhOuhnSDtlbTso7zripQg6rKDIVxyXG4gICAgY29uc3QgY29va2llID0gY29udGV4dC5yZXEgPyBjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSA6ICcnO1xyXG4gICAgLy8g66eM7JW9IOyVhOuemOyZgCDqsJnsnbQg7ISk7KCV7ZWY66m0IOy/oO2CpOqwgCDrqqjrk6Ag7ISc67KE7JeQ7IScIOqzteycoOuQoCDsiJgg7J6I64ukLlxyXG4gICAgLy8gYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBjb29raWU7XHJcblxyXG4gICAgLy8g6re4656Y7IScIOy/oO2CpOulvCDsjajshJwg7JqU7LKt7J2EIOuztOuCvCDrlYzrp4wg7L+g7YKk66W8IOuEo+yWtOuGqOuLpOqwgCDsv6DtgqTrpbwg7JOw7KeAIOyViuydhCDrlYzripQg7ISc67KE7JeQ7IScIOqzteycoO2VmOqzoCDsnojripQg7L+g7YKk66W8IOygnOqxsO2VmOuPhOuhnSDtlZzri6QuXHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9ICcnO1xyXG4gICAgaWYgKGNvbnRleHQucmVxICYmIGNvb2tpZSkge1xyXG4gICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IGNvb2tpZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gY29udGV4dCDslYjsl5DripQgc3RvcmXqsIAg65Ok7Ja07J6I64ukLlxyXG4gICAgLy8gcmVkdXjsl5Ag642w7J207YSw6rCAIOyxhOybjOynhCDsg4Htg5zroZwg642w7J207YSw6rCAIOyhtOyerO2VmOqyjCDrkJzri6QuXHJcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBMT0FEX01ZX0lORk9fUkVRVUVTVFxyXG4gICAgfSk7XHJcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKEVORCk7XHJcbiAgICBhd2FpdCBjb250ZXh0LnN0b3JlLnNhZ2FUYXNrLnRvUHJvbWlzZSgpO1xyXG5cclxuICAgIGNvbnN0IHBvcHVsYXJNb3ZpZSA9IGF3YWl0IGdldHBvcHVsYXJNb3ZpZUZyb21UTURCKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHsgXHJcbiAgICAgICAgcG9wdWxhck1vdmllOiBwb3B1bGFyTW92aWUucmVzdWx0cywgXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9