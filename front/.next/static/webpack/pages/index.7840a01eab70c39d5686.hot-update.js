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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiV3JhcE1vdmllTGlzdCIsInN0eWxlZCIsImRpdiIsIlRpdGxlT2ZMaXN0IiwiU2VhcmNoSW5wdXQiLCJpbnB1dCIsIkhvbWUiLCJwcm9wcyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsInBvcHVsYXJNb3ZpZSIsImhhbmRsZUlucHV0VmFsdWUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXRWYWx1ZSIsInByZXZlbnREZWZhdWx0IiwiUm91dGVyIiwicHVzaCIsImhlaWdodCIsInRleHRBbGlnbiIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImNvbG9yIiwiZm9udFNpemUiLCJ3aWR0aCIsIm1hcmdpbiIsImJvdHRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsUUFBbkI7S0FBTUYsYTtBQUdOLElBQU1HLFdBQVcsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx5QkFBakI7TUFBTUMsVztBQUlOLElBQU1DLFdBQVcsR0FBR0gseURBQU0sQ0FBQ0ksS0FBVjtBQUFBO0FBQUE7QUFBQSwrSEFBakI7TUFBTUQsVzs7QUFXTixTQUFTRSxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFBQTs7QUFBQSxxQkFDRkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FEVDtBQUFBLE1BQ1RDLEVBRFMsZ0JBQ1RBLEVBRFM7O0FBRWpCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsRUFBWjs7QUFGaUIsa0JBR21CRyxzREFBUSxDQUFDLEVBQUQsQ0FIM0I7QUFBQSxNQUdWQyxVQUhVO0FBQUEsTUFHRUMsYUFIRjs7QUFBQSxNQUtUQyxZQUxTLEdBS1FWLEtBTFIsQ0FLVFUsWUFMUzs7QUFPakIsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxDQUFELEVBQU87QUFDNUJILGlCQUFhLENBQUNHLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWI7QUFDSCxHQUZEOztBQUlBLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0gsQ0FBRCxFQUFPO0FBQzdCQSxLQUFDLENBQUNJLGNBQUY7QUFDQUMsc0RBQU0sQ0FBQ0MsSUFBUCx3QkFBNEJWLFVBQTVCO0FBQ0gsR0FIRDs7QUFLQSxzQkFDSSxxRUFBQyx5RUFBRDtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBOEIsV0FBSyxFQUFFO0FBQUVXLGNBQU0sRUFBRTtBQUFWLE9BQXJDO0FBQUEsOEJBQ0k7QUFDSSxnQkFBUSxFQUFFSixpQkFEZDtBQUVJLGFBQUssRUFBRTtBQUFFSyxtQkFBUyxFQUFFLFFBQWI7QUFBdUJDLGtCQUFRLEVBQUUsVUFBakM7QUFBNkNDLGFBQUcsRUFBRSxRQUFsRDtBQUE0REMsY0FBSSxFQUFFO0FBQWxFLFNBRlg7QUFBQSxnQ0FJSSxxRUFBQyxXQUFEO0FBQ0kscUJBQVcsRUFBQyxnRUFEaEI7QUFFSSxrQkFBUSxFQUFFWjtBQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkosZUFRSTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQXNCLG1CQUFTLEVBQUMsZ0JBQWhDO0FBQUEsaUNBQ0kscUVBQUMsNkRBQUQ7QUFBZSxpQkFBSyxFQUFFO0FBQUVhLG1CQUFLLEVBQUUsT0FBVDtBQUFrQkMsc0JBQVEsRUFBRTtBQUE1QjtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQWNJLHFFQUFDLDBFQUFEO0FBQWlCLHVCQUFlLEVBQUVmO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQWlCSTtBQUFLLFdBQUssRUFBRTtBQUFFZ0IsYUFBSyxFQUFFLEtBQVQ7QUFBZ0JDLGNBQU0sRUFBRSxRQUF4QjtBQUFrQ04sZ0JBQVEsRUFBRSxVQUE1QztBQUF3RE8sY0FBTSxFQUFFLE1BQWhFO0FBQXdFTCxZQUFJLEVBQUU7QUFBOUUsT0FBWjtBQUFxRyxlQUFTLEVBQUMsWUFBL0c7QUFBQSw2QkFDSSxxRUFBQyxhQUFEO0FBQUEsZ0NBQ0kscUVBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixFQUVNYixZQUFZLGlCQUVOLHFFQUFDLDBFQUFEO0FBQWlCLHlCQUFlLEVBQUVBO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQThCSDs7R0E5Q1FYLEk7VUFDVUUsdUQ7OztNQURWRixJOztBQTZFTUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzg0MGEwMWVhYjcwYzM5ZDU2ODYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBFTkQgfSBmcm9tICdyZWR1eC1zYWdhJztcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IExPQURfTVlfSU5GT19SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcidcclxuaW1wb3J0IE1haW5QYWdlTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L01haW5QYWdlTGF5b3V0J1xyXG5pbXBvcnQgTW92aWVJbmZvU2xpZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvc2xpZGVyL01vdmllSW5mb1NsaWRlcic7XHJcbmltcG9ydCBNb3ZpZU1haW5TbGlkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9zbGlkZXIvTW92aWVNYWluU2xpZGVyJztcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5pbXBvcnQgeyBJb1NlYXJjaFNoYXJwIH0gZnJvbSBcInJlYWN0LWljb25zL2lvNVwiO1xyXG5cclxuaW1wb3J0IHsgZ2V0cG9wdWxhck1vdmllRnJvbVRNREIsIGdldE1vdmllQnlHZW5yZUZyb21UTURCIH0gZnJvbSAnLi9hcGkvYXBpJztcclxuXHJcbmNvbnN0IFdyYXBNb3ZpZUxpc3QgPSBzdHlsZWQuZGl2YFxyXG5gXHJcblxyXG5jb25zdCBUaXRsZU9mTGlzdCA9IHN0eWxlZC5kaXZgXHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuYFxyXG5cclxuY29uc3QgU2VhcmNoSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiA5OTk5OTtcclxuYFxyXG5cclxuZnVuY3Rpb24gSG9tZShwcm9wcykge1xyXG4gICAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICAgIGNvbnNvbGUubG9nKG1lKTtcclxuICAgIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgXHJcbiAgICBjb25zdCB7IHBvcHVsYXJNb3ZpZSB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlSW5wdXRWYWx1ZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdFZhbHVlID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgUm91dGVyLnB1c2goYC9tb3ZpZVNlYXJjaC8ke2lucHV0VmFsdWV9YCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1haW5QYWdlTGF5b3V0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGVudFwiIHN0eWxlPXt7IGhlaWdodDogJzEwMHZoJ319PlxyXG4gICAgICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogJzIuNXJlbScsIGxlZnQ6ICcycmVtJyB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuyYge2ZlOuqheydhCDsnoXroKXtlbTso7zshLjsmpQuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gc2VhcmNoLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW9TZWFyY2hTaGFycCBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgZm9udFNpemU6ICcxLjVyZW0nIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICAgICAgPE1vdmllTWFpblNsaWRlciBtb3ZpZUluZm9tYXRpb249e3BvcHVsYXJNb3ZpZX0+PC9Nb3ZpZU1haW5TbGlkZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnODQlJywgbWFyZ2luOiAnMCBhdXRvJywgcG9zaXRpb246ICdhYnNvbHV0ZScsIGJvdHRvbTogJzJyZW0nLCBsZWZ0OiAnMjUwcHgnIH19IGNsYXNzTmFtZT1cIm1vdmllLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgIDxXcmFwTW92aWVMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZU9mTGlzdD7stZzsi6Ag7J246riwIOyYge2ZlDwvVGl0bGVPZkxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3B1bGFyTW92aWUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vdmllSW5mb1NsaWRlciBtb3ZpZUluZm9tYXRpb249e3BvcHVsYXJNb3ZpZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvV3JhcE1vdmllTGlzdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9NYWluUGFnZUxheW91dD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgICAvLyDsv6DtgqTsnZgg7KCV67O06rCAIO2VreyDgSDrk6TslrTqsIDrj4TroZ0g7ZW07KO864qUIOqygyFcclxuICAgIGNvbnN0IGNvb2tpZSA9IGNvbnRleHQucmVxID8gY29udGV4dC5yZXEuaGVhZGVycy5jb29raWUgOiAnJztcclxuICAgIC8vIOunjOyVvSDslYTrnpjsmYAg6rCZ7J20IOyEpOygle2VmOuptCDsv6DtgqTqsIAg66qo65OgIOyEnOuyhOyXkOyEnCDqs7XsnKDrkKAg7IiYIOyeiOuLpC5cclxuICAgIC8vIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gY29va2llO1xyXG5cclxuICAgIC8vIOq3uOuemOyEnCDsv6DtgqTrpbwg7I2o7IScIOyalOyyreydhCDrs7Trgrwg65WM66eMIOy/oO2CpOulvCDrhKPslrTrhqjri6TqsIAg7L+g7YKk66W8IOyTsOyngCDslYrsnYQg65WM64qUIOyEnOuyhOyXkOyEnCDqs7XsnKDtlZjqs6Ag7J6I64qUIOy/oO2CpOulvCDsoJzqsbDtlZjrj4TroZ0g7ZWc64ukLlxyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSAnJztcclxuICAgIGlmIChjb250ZXh0LnJlcSAmJiBjb29raWUpIHtcclxuICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBjb29raWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIGNvbnRleHQg7JWI7JeQ64qUIHN0b3Jl6rCAIOuTpOyWtOyeiOuLpC5cclxuICAgIC8vIHJlZHV47JeQIOuNsOydtO2EsOqwgCDssYTsm4zsp4Qg7IOB7YOc66GcIOuNsOydtO2EsOqwgCDsobTsnqztlZjqsowg65Cc64ukLlxyXG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1JFUVVFU1RcclxuICAgIH0pO1xyXG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaChFTkQpO1xyXG4gICAgYXdhaXQgY29udGV4dC5zdG9yZS5zYWdhVGFzay50b1Byb21pc2UoKTtcclxuXHJcbiAgICBjb25zdCBwb3B1bGFyTW92aWUgPSBhd2FpdCBnZXRwb3B1bGFyTW92aWVGcm9tVE1EQigpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7IFxyXG4gICAgICAgIHBvcHVsYXJNb3ZpZTogcG9wdWxhck1vdmllLnJlc3VsdHMsIFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==