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
var MovieCardWrap = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "name__MovieCardWrap",
  componentId: "irtilj-1"
})(["margin-left:6%;position:relative;top:8rem;display:flex;flex-wrap:wrap;"]);
_c2 = MovieCardWrap;

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
          lineNumber: 56,
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
            lineNumber: 61,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, this), !movieDetail.results[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        children: "\uAC80\uC0C9\uD558\uC2E0 \uC601\uD654\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 25
      }, this), movieDetail.results && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(MovieCardWrap, {
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
              lineNumber: 75,
              columnNumber: 37
            }, _this)
          }, movieItem.id, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 33
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 25
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
        onClick: handleLoadMoreMovie,
        children: "Load More"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 9
  }, this);
}

_s(MovieSearchPage, "RbApFlPcl+oEbJMxsLrlgHhePmg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c3 = MovieSearchPage;
;
;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (MovieSearchPage);

var _c, _c2, _c3;

$RefreshReg$(_c, "SearchInput");
$RefreshReg$(_c2, "MovieCardWrap");
$RefreshReg$(_c3, "MovieSearchPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW92aWVTZWFyY2gvW25hbWVdLmpzIl0sIm5hbWVzIjpbIlNlYXJjaElucHV0Iiwic3R5bGVkIiwiaW5wdXQiLCJNb3ZpZUNhcmRXcmFwIiwiZGl2IiwiTW92aWVTZWFyY2hQYWdlIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJuYW1lIiwicXVlcnkiLCJtb3ZpZURldGFpbCIsInVzZVN0YXRlIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJoYW5kbGVJbnB1dFZhbHVlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0VmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsIlJvdXRlciIsInB1c2giLCJoYW5kbGVMb2FkTW9yZU1vdmllIiwicG9zaXRpb24iLCJ0ZXh0QWxpZ24iLCJ0b3AiLCJsZWZ0IiwiY29sb3IiLCJmb250U2l6ZSIsInJlc3VsdHMiLCJtYXAiLCJtb3ZpZUl0ZW0iLCJ3aWR0aCIsIm1hcmdpbiIsImlkIiwicG9zdGVyX3BhdGgiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFJQSxJQUFNQSxXQUFXLEdBQUdDLHlEQUFNLENBQUNDLEtBQVY7QUFBQTtBQUFBO0FBQUEsK0ZBQWpCO0tBQU1GLFc7QUFTTixJQUFNRyxhQUFhLEdBQUdGLHlEQUFNLENBQUNHLEdBQVY7QUFBQTtBQUFBO0FBQUEsOEVBQW5CO01BQU1ELGE7O0FBUU4sU0FBU0UsZUFBVCxDQUF5QkMsS0FBekIsRUFBZ0M7QUFBQTs7QUFBQTs7QUFDNUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUQ0QixNQUVwQkMsSUFGb0IsR0FFWEYsTUFBTSxDQUFDRyxLQUZJLENBRXBCRCxJQUZvQjtBQUFBLE1BSXBCRSxXQUpvQixHQUlKTCxLQUpJLENBSXBCSyxXQUpvQjs7QUFBQSxrQkFNUUMsc0RBQVEsQ0FBQyxFQUFELENBTmhCO0FBQUEsTUFNckJDLFVBTnFCO0FBQUEsTUFNVEMsYUFOUzs7QUFRNUIsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxDQUFELEVBQU87QUFDNUJGLGlCQUFhLENBQUNFLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWI7QUFDSCxHQUZEOztBQUlBLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0gsQ0FBRCxFQUFPO0FBQzdCQSxLQUFDLENBQUNJLGNBQUY7QUFDQUMsc0RBQU0sQ0FBQ0MsSUFBUCx3QkFBNEJULFVBQTVCO0FBQ0gsR0FIRDs7QUFLQSxNQUFNVSxtQkFBbUI7QUFBQSxnTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQW5CQSxtQkFBbUI7QUFBQTtBQUFBO0FBQUEsS0FBekI7O0FBSUEsc0JBQ0kscUVBQUMsd0VBQUQ7QUFBQSwyQkFDSTtBQUFLLFdBQUssRUFBRTtBQUFFQyxnQkFBUSxFQUFFO0FBQVosT0FBWjtBQUFBLDhCQUNJO0FBQ0ksZ0JBQVEsRUFBRUwsaUJBRGQ7QUFFSSxhQUFLLEVBQUU7QUFBRU0sbUJBQVMsRUFBRSxRQUFiO0FBQXVCRCxrQkFBUSxFQUFFLFVBQWpDO0FBQTZDRSxhQUFHLEVBQUUsUUFBbEQ7QUFBNERDLGNBQUksRUFBRTtBQUFsRSxTQUZYO0FBQUEsZ0NBSUkscUVBQUMsV0FBRDtBQUNJLHFCQUFXLEVBQUMsZ0VBRGhCO0FBRUksa0JBQVEsRUFBRVo7QUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKLGVBUUk7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFzQixtQkFBUyxFQUFDLGdCQUFoQztBQUFBLGlDQUNJLHFFQUFDLDZEQUFEO0FBQWUsaUJBQUssRUFBRTtBQUFFYSxtQkFBSyxFQUFFLE9BQVQ7QUFBa0JDLHNCQUFRLEVBQUU7QUFBNUI7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosRUFjUSxDQUFDbEIsV0FBVyxDQUFDbUIsT0FBWixDQUFvQixDQUFwQixDQUFELGlCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZlosRUFtQlFuQixXQUFXLENBQUNtQixPQUFaLGlCQUNJLHFFQUFDLGFBQUQ7QUFBQSxrQkFFSW5CLFdBQVcsQ0FBQ21CLE9BQVosQ0FBb0JDLEdBQXBCLENBQXdCLFVBQUFDLFNBQVM7QUFBQSw4QkFDN0I7QUFBd0IsaUJBQUssRUFBRTtBQUFFQyxtQkFBSyxFQUFFLE9BQVQ7QUFBa0JDLG9CQUFNLEVBQUU7QUFBMUIsYUFBL0I7QUFBQSxtQ0FDSSxxRUFBQyxpRUFBRDtBQUNJLGdCQUFFLEVBQUVGLFNBQVMsQ0FBQ0csRUFEbEI7QUFFSSxpQkFBRyxFQUFFSCxTQUFTLENBQUNJLFdBRm5CO0FBR0kseUJBQVcsRUFBRUosU0FBUyxDQUFDSztBQUgzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosYUFBVUwsU0FBUyxDQUFDRyxFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUQ2QjtBQUFBLFNBQWpDO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBCWixlQW1DSTtBQUFRLGVBQU8sRUFBRVosbUJBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXlDSDs7R0E5RFFsQixlO1VBQ1VHLHFEOzs7TUFEVkgsZTtBQThEUjtBQVVBOztBQUVjQSw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tb3ZpZVNlYXJjaC9bbmFtZV0uZTUyNDZhOWI4NTZjYWU0ODYzN2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgSW9TZWFyY2hTaGFycCB9IGZyb20gXCJyZWFjdC1pY29ucy9pbzVcIjtcclxuXHJcbmltcG9ydCBTdWJQYWdlTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L1N1YlBhZ2VMYXlvdXQnO1xyXG5pbXBvcnQgTW92aWVJbmZvTGluayBmcm9tICcuLi8uLi9jb21wb25lbnRzL01vdmllSW5mb0xpbmsnXHJcblxyXG5pbXBvcnQgeyBnZXRNb3ZpZUZyb21UTURCIH0gZnJvbSAnLi4vYXBpL2FwaSc7XHJcblxyXG5jb25zdCBTZWFyY2hJbnB1dCA9IHN0eWxlZC5pbnB1dGBcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuYFxyXG5cclxuY29uc3QgTW92aWVDYXJkV3JhcCA9IHN0eWxlZC5kaXZgXHJcbiAgICBtYXJnaW4tbGVmdDogNiU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDhyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5gXHJcblxyXG5mdW5jdGlvbiBNb3ZpZVNlYXJjaFBhZ2UocHJvcHMpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBuYW1lIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gICAgY29uc3QgeyBtb3ZpZURldGFpbCB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlSW5wdXRWYWx1ZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdFZhbHVlID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgUm91dGVyLnB1c2goYC9tb3ZpZVNlYXJjaC8ke2lucHV0VmFsdWV9YCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUxvYWRNb3JlTW92aWUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgLy8gY29uc3QgbW9yZU1vdmllID0gYXdhaXQgZ2V0TW92aWVGcm9tVE1EQihuYW1lLCBgJHtDdXJyZW50UGFnZSArIDF9YCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN1YlBhZ2VMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX0+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXRWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAnMi41cmVtJywgbGVmdDogJzJyZW0nIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7JiB7ZmU66qF7J2EIOyeheugpe2VtOyjvOyEuOyalC5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBzZWFyY2gtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJb1NlYXJjaFNoYXJwIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCBmb250U2l6ZTogJzEuNXJlbScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAhbW92aWVEZXRhaWwucmVzdWx0c1swXSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+6rKA7IOJ7ZWY7IugIOyYge2ZlOqwgCDsobTsnqztlZjsp4Ag7JWK7Iq164uI64ukLjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBtb3ZpZURldGFpbC5yZXN1bHRzICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1vdmllQ2FyZFdyYXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmllRGV0YWlsLnJlc3VsdHMubWFwKG1vdmllSXRlbSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e21vdmllSXRlbS5pZH0gc3R5bGU9e3sgd2lkdGg6ICcyMTBweCcsIG1hcmdpbjogJzAgMXJlbScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb3ZpZUluZm9MaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17bW92aWVJdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXttb3ZpZUl0ZW0ucG9zdGVyX3BhdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrb3JlYW5UaXRsZT17bW92aWVJdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01vdmllQ2FyZFdyYXA+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2FkTW9yZU1vdmllfT5Mb2FkIE1vcmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9TdWJQYWdlTGF5b3V0PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHF1ZXJ5IH0pIHtcclxuICAgIGNvbnN0IG1vdmllRGV0YWlsID0gYXdhaXQgZ2V0TW92aWVGcm9tVE1EQihlbmNvZGVVUkkocXVlcnkubmFtZSksIDEpO1xyXG4gICAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIG1vdmllRGV0YWlsOiBtb3ZpZURldGFpbCxcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWVTZWFyY2hQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9