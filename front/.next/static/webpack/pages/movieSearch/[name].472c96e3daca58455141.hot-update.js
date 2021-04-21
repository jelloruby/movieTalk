webpackHotUpdate_N_E("pages/movieSearch/[name]",{

/***/ "./components/MovieInfoLink.js":
/*!*************************************!*\
  !*** ./components/MovieInfoLink.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/config */ "./pages/config.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\codingtime\\movieBox\\front\\components\\MovieInfoLink.js";




function MovieInfoLink(_ref) {
  var id = _ref.id,
      src = _ref.src,
      koreanTitle = _ref.koreanTitle;

  var havePosterPath = function havePosterPath(posterPath) {
    if (!posterPath) {
      posterPath = _pages_config__WEBPACK_IMPORTED_MODULE_1__["noposterURL"];
      return posterPath;
    } else {
      return "".concat(_pages_config__WEBPACK_IMPORTED_MODULE_1__["imageURL"], "/w500/").concat(posterPath);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/movieInfo/[id]",
    as: "/movieInfo/".concat(id),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
      style: {
        display: 'inline-block',
        width: '210px',
        height: '330px',
        position: 'relative'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
        src: havePosterPath(src),
        style: {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: koreanTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, this);
}

_c = MovieInfoLink;
;
/* harmony default export */ __webpack_exports__["default"] = (MovieInfoLink);

var _c;

$RefreshReg$(_c, "MovieInfoLink");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb3ZpZUluZm9MaW5rLmpzIl0sIm5hbWVzIjpbIk1vdmllSW5mb0xpbmsiLCJpZCIsInNyYyIsImtvcmVhblRpdGxlIiwiaGF2ZVBvc3RlclBhdGgiLCJwb3N0ZXJQYXRoIiwibm9wb3N0ZXJVUkwiLCJpbWFnZVVSTCIsImRpc3BsYXkiLCJ3aWR0aCIsImhlaWdodCIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7OztBQUVBLFNBQVNBLGFBQVQsT0FBaUQ7QUFBQSxNQUF4QkMsRUFBd0IsUUFBeEJBLEVBQXdCO0FBQUEsTUFBcEJDLEdBQW9CLFFBQXBCQSxHQUFvQjtBQUFBLE1BQWZDLFdBQWUsUUFBZkEsV0FBZTs7QUFFN0MsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxVQUFELEVBQWdCO0FBQ25DLFFBQUcsQ0FBQ0EsVUFBSixFQUFnQjtBQUNaQSxnQkFBVSxHQUFHQyx5REFBYjtBQUNBLGFBQU9ELFVBQVA7QUFDSCxLQUhELE1BR087QUFDSCx1QkFBVUUsc0RBQVYsbUJBQTJCRixVQUEzQjtBQUNIO0FBQ0osR0FQRDs7QUFTQSxzQkFDSSxxRUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxpQkFBWDtBQUE2QixNQUFFLHVCQUFnQkosRUFBaEIsQ0FBL0I7QUFBQSwyQkFDRTtBQUFHLFdBQUssRUFBRTtBQUFFTyxlQUFPLEVBQUUsY0FBWDtBQUEyQkMsYUFBSyxFQUFFLE9BQWxDO0FBQTJDQyxjQUFNLEVBQUUsT0FBbkQ7QUFBNERDLGdCQUFRLEVBQUU7QUFBdEUsT0FBVjtBQUFBLDhCQUNFO0FBQUssV0FBRyxFQUFFUCxjQUFjLENBQUNGLEdBQUQsQ0FBeEI7QUFBK0IsYUFBSyxFQUFFO0FBQUVTLGtCQUFRLEVBQUUsVUFBWjtBQUF3QkMsYUFBRyxFQUFFLENBQTdCO0FBQWdDQyxjQUFJLEVBQUUsQ0FBdEM7QUFBeUNDLGVBQUssRUFBRSxDQUFoRDtBQUFtREMsZ0JBQU0sRUFBRTtBQUEzRDtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBLGtCQUFNWjtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFRSDs7S0FuQlFILGE7QUFtQlI7QUFFY0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbW92aWVTZWFyY2gvW25hbWVdLjQ3MmM5NmUzZGFjYTU4NDU1MTQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IHsgaW1hZ2VVUkwsIG5vcG9zdGVyVVJMIH0gZnJvbSAnLi4vcGFnZXMvY29uZmlnJ1xyXG5cclxuZnVuY3Rpb24gTW92aWVJbmZvTGluayh7IGlkLCBzcmMsIGtvcmVhblRpdGxlIH0pIHtcclxuXHJcbiAgICBjb25zdCBoYXZlUG9zdGVyUGF0aCA9IChwb3N0ZXJQYXRoKSA9PiB7XHJcbiAgICAgICAgaWYoIXBvc3RlclBhdGgpIHtcclxuICAgICAgICAgICAgcG9zdGVyUGF0aCA9IG5vcG9zdGVyVVJMO1xyXG4gICAgICAgICAgICByZXR1cm4gcG9zdGVyUGF0aDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gYCR7aW1hZ2VVUkx9L3c1MDAvJHtwb3N0ZXJQYXRofWBcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9tb3ZpZUluZm8vW2lkXVwiIGFzPXtgL21vdmllSW5mby8ke2lkfWB9PlxyXG4gICAgICAgICAgPGEgc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1ibG9jaycsIHdpZHRoOiAnMjEwcHgnLCBoZWlnaHQ6ICczMzBweCcsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17aGF2ZVBvc3RlclBhdGgoc3JjKX0gc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogMCwgbGVmdDogMCwgcmlnaHQ6IDAsIGJvdHRvbTogMCB9fSAvPlxyXG4gICAgICAgICAgICA8ZGl2Pntrb3JlYW5UaXRsZX08L2Rpdj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUluZm9MaW5rOyJdLCJzb3VyY2VSb290IjoiIn0=