webpackHotUpdate_N_E("pages/movieSearch/[name]",{

/***/ "./pages/movieSearch/[name].js":
/*!*************************************!*\
  !*** ./pages/movieSearch/[name].js ***!
  \*************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/io5 */ "./node_modules/react-icons/io5/index.esm.js");
/* harmony import */ var _components_layout_SubPageLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/layout/SubPageLayout */ "./components/layout/SubPageLayout.js");
/* harmony import */ var _components_MovieInfoLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/MovieInfoLink */ "./components/MovieInfoLink.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);



var _jsxFileName = "C:\\codingtime\\movieBox\\front\\pages\\movieSearch\\[name].js",
    _s = $RefreshSig$();








var SearchInput = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].input.withConfig({
  displayName: "name__SearchInput",
  componentId: "irtilj-0"
})(["width:250px;height:50px;margin:0 auto;text-align:center;border-radius:2rem;border:none;"]);
_c = SearchInput;

function MovieSearchPage(props) {
  _s();

  var _this = this;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var name = router.query.name;
  var movieDetail = props.movieDetail;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      inputValue = _useState[0],
      setInputValue = _useState[1];

  var handleInputValue = function handleInputValue(e) {
    setInputValue(e.target.value);
  };

  var handleSubmitValue = function handleSubmitValue(e) {
    e.preventDefault();
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/movieSearch/".concat(inputValue));
  };

  var handleLoadMoreMovie = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleLoadMoreMovie() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_layout_SubPageLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
      style: {
        position: 'relative'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("form", {
        onSubmit: handleSubmitValue,
        style: {
          textAlign: 'center',
          position: 'absolute',
          top: '2.5rem',
          left: '2rem'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(SearchInput, {
          placeholder: "\uC601\uD654\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",
          onChange: handleInputValue
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
          type: "submit",
          className: "btn search-btn",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__["IoSearchSharp"], {
            style: {
              color: 'white',
              fontSize: '1.5rem'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, this), !movieDetail.results[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        children: "\uAC80\uC0C9\uD558\uC2E0 \uC601\uD654\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 25
      }, this), movieDetail.results && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        style: {
          display: 'flex',
          flexWrap: 'wrap'
        },
        children: movieDetail.results.map(function (movieItem) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            style: {
              width: '210px',
              margin: '0 1rem'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_MovieInfoLink__WEBPACK_IMPORTED_MODULE_7__["default"], {
              id: movieItem.id,
              src: movieItem.poster_path,
              koreanTitle: movieItem.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 37
            }, _this)
          }, movieItem.id, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 33
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 25
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
        onClick: handleLoadMoreMovie,
        children: "Load More"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 9
  }, this);
}

_s(MovieSearchPage, "RbApFlPcl+oEbJMxsLrlgHhePmg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c2 = MovieSearchPage;
;
;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (MovieSearchPage);

var _c, _c2;

$RefreshReg$(_c, "SearchInput");
$RefreshReg$(_c2, "MovieSearchPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW92aWVTZWFyY2gvW25hbWVdLmpzIl0sIm5hbWVzIjpbIlNlYXJjaElucHV0Iiwic3R5bGVkIiwiaW5wdXQiLCJNb3ZpZVNlYXJjaFBhZ2UiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsIm5hbWUiLCJxdWVyeSIsIm1vdmllRGV0YWlsIiwidXNlU3RhdGUiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsImhhbmRsZUlucHV0VmFsdWUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXRWYWx1ZSIsInByZXZlbnREZWZhdWx0IiwiUm91dGVyIiwicHVzaCIsImhhbmRsZUxvYWRNb3JlTW92aWUiLCJwb3NpdGlvbiIsInRleHRBbGlnbiIsInRvcCIsImxlZnQiLCJjb2xvciIsImZvbnRTaXplIiwicmVzdWx0cyIsImRpc3BsYXkiLCJmbGV4V3JhcCIsIm1hcCIsIm1vdmllSXRlbSIsIndpZHRoIiwibWFyZ2luIiwiaWQiLCJwb3N0ZXJfcGF0aCIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUlBLElBQU1BLFdBQVcsR0FBR0MseURBQU0sQ0FBQ0MsS0FBVjtBQUFBO0FBQUE7QUFBQSwrRkFBakI7S0FBTUYsVzs7QUFTTixTQUFTRyxlQUFULENBQXlCQyxLQUF6QixFQUFnQztBQUFBOztBQUFBOztBQUM1QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRDRCLE1BRXBCQyxJQUZvQixHQUVYRixNQUFNLENBQUNHLEtBRkksQ0FFcEJELElBRm9CO0FBQUEsTUFJcEJFLFdBSm9CLEdBSUpMLEtBSkksQ0FJcEJLLFdBSm9COztBQUFBLGtCQU1RQyxzREFBUSxDQUFDLEVBQUQsQ0FOaEI7QUFBQSxNQU1yQkMsVUFOcUI7QUFBQSxNQU1UQyxhQU5TOztBQVE1QixNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLENBQUQsRUFBTztBQUM1QkYsaUJBQWEsQ0FBQ0UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBYjtBQUNILEdBRkQ7O0FBSUEsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDSCxDQUFELEVBQU87QUFDN0JBLEtBQUMsQ0FBQ0ksY0FBRjtBQUNBQyxzREFBTSxDQUFDQyxJQUFQLHdCQUE0QlQsVUFBNUI7QUFDSCxHQUhEOztBQUtBLE1BQU1VLG1CQUFtQjtBQUFBLGdNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBbkJBLG1CQUFtQjtBQUFBO0FBQUE7QUFBQSxLQUF6Qjs7QUFJQSxzQkFDSSxxRUFBQyx3RUFBRDtBQUFBLDJCQUNJO0FBQUssV0FBSyxFQUFFO0FBQUVDLGdCQUFRLEVBQUU7QUFBWixPQUFaO0FBQUEsOEJBQ0k7QUFDSSxnQkFBUSxFQUFFTCxpQkFEZDtBQUVJLGFBQUssRUFBRTtBQUFFTSxtQkFBUyxFQUFFLFFBQWI7QUFBdUJELGtCQUFRLEVBQUUsVUFBakM7QUFBNkNFLGFBQUcsRUFBRSxRQUFsRDtBQUE0REMsY0FBSSxFQUFFO0FBQWxFLFNBRlg7QUFBQSxnQ0FJSSxxRUFBQyxXQUFEO0FBQ0kscUJBQVcsRUFBQyxnRUFEaEI7QUFFSSxrQkFBUSxFQUFFWjtBQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkosZUFRSTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQXNCLG1CQUFTLEVBQUMsZ0JBQWhDO0FBQUEsaUNBQ0kscUVBQUMsNkRBQUQ7QUFBZSxpQkFBSyxFQUFFO0FBQUVhLG1CQUFLLEVBQUUsT0FBVDtBQUFrQkMsc0JBQVEsRUFBRTtBQUE1QjtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixFQWNRLENBQUNsQixXQUFXLENBQUNtQixPQUFaLENBQW9CLENBQXBCLENBQUQsaUJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FmWixFQW1CUW5CLFdBQVcsQ0FBQ21CLE9BQVosaUJBQ0k7QUFBSyxhQUFLLEVBQUU7QUFBRUMsaUJBQU8sRUFBRSxNQUFYO0FBQW1CQyxrQkFBUSxFQUFFO0FBQTdCLFNBQVo7QUFBQSxrQkFFSXJCLFdBQVcsQ0FBQ21CLE9BQVosQ0FBb0JHLEdBQXBCLENBQXdCLFVBQUFDLFNBQVM7QUFBQSw4QkFDN0I7QUFBd0IsaUJBQUssRUFBRTtBQUFFQyxtQkFBSyxFQUFFLE9BQVQ7QUFBa0JDLG9CQUFNLEVBQUU7QUFBMUIsYUFBL0I7QUFBQSxtQ0FDSSxxRUFBQyxpRUFBRDtBQUNJLGdCQUFFLEVBQUVGLFNBQVMsQ0FBQ0csRUFEbEI7QUFFSSxpQkFBRyxFQUFFSCxTQUFTLENBQUNJLFdBRm5CO0FBR0kseUJBQVcsRUFBRUosU0FBUyxDQUFDSztBQUgzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosYUFBVUwsU0FBUyxDQUFDRyxFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUQ2QjtBQUFBLFNBQWpDO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBCWixlQW1DSTtBQUFRLGVBQU8sRUFBRWQsbUJBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXlDSDs7R0E5RFFsQixlO1VBQ1VHLHFEOzs7TUFEVkgsZTtBQThEUjtBQVVBOztBQUVjQSw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tb3ZpZVNlYXJjaC9bbmFtZV0uMDVmNmIyODYwNzFlYWQ2NmYzNWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgSW9TZWFyY2hTaGFycCB9IGZyb20gXCJyZWFjdC1pY29ucy9pbzVcIjtcclxuXHJcbmltcG9ydCBTdWJQYWdlTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L1N1YlBhZ2VMYXlvdXQnO1xyXG5pbXBvcnQgTW92aWVJbmZvTGluayBmcm9tICcuLi8uLi9jb21wb25lbnRzL01vdmllSW5mb0xpbmsnXHJcblxyXG5pbXBvcnQgeyBnZXRNb3ZpZUZyb21UTURCIH0gZnJvbSAnLi4vYXBpL2FwaSc7XHJcblxyXG5jb25zdCBTZWFyY2hJbnB1dCA9IHN0eWxlZC5pbnB1dGBcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuYFxyXG5cclxuZnVuY3Rpb24gTW92aWVTZWFyY2hQYWdlKHByb3BzKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgbmFtZSB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICAgIGNvbnN0IHsgbW92aWVEZXRhaWwgfSA9IHByb3BzO1xyXG5cclxuICAgIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUlucHV0VmFsdWUgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXRWYWx1ZSA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIFJvdXRlci5wdXNoKGAvbW92aWVTZWFyY2gvJHtpbnB1dFZhbHVlfWApO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVMb2FkTW9yZU1vdmllID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnN0IG1vcmVNb3ZpZSA9IGF3YWl0IGdldE1vdmllRnJvbVRNREIobmFtZSwgYCR7Q3VycmVudFBhZ2UgKyAxfWApO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTdWJQYWdlTGF5b3V0PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxyXG4gICAgICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogJzIuNXJlbScsIGxlZnQ6ICcycmVtJyB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuyYge2ZlOuqheydhCDsnoXroKXtlbTso7zshLjsmpQuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gc2VhcmNoLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW9TZWFyY2hTaGFycCBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgZm9udFNpemU6ICcxLjVyZW0nIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgIW1vdmllRGV0YWlsLnJlc3VsdHNbMF0gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PuqygOyDie2VmOyLoCDsmIHtmZTqsIAg7KG07J6s7ZWY7KeAIOyViuyKteuLiOuLpC48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW92aWVEZXRhaWwucmVzdWx0cyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4V3JhcDogJ3dyYXAnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZpZURldGFpbC5yZXN1bHRzLm1hcChtb3ZpZUl0ZW0gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXttb3ZpZUl0ZW0uaWR9IHN0eWxlPXt7IHdpZHRoOiAnMjEwcHgnLCBtYXJnaW46ICcwIDFyZW0nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW92aWVJbmZvTGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e21vdmllSXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17bW92aWVJdGVtLnBvc3Rlcl9wYXRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga29yZWFuVGl0bGU9e21vdmllSXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2FkTW9yZU1vdmllfT5Mb2FkIE1vcmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9TdWJQYWdlTGF5b3V0PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHF1ZXJ5IH0pIHtcclxuICAgIGNvbnN0IG1vdmllRGV0YWlsID0gYXdhaXQgZ2V0TW92aWVGcm9tVE1EQihlbmNvZGVVUkkocXVlcnkubmFtZSksIDEpO1xyXG4gICAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIG1vdmllRGV0YWlsOiBtb3ZpZURldGFpbCxcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWVTZWFyY2hQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9