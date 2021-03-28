webpackHotUpdate_N_E("pages/movieSearch",{

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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\codingtime\\movieBox\\front\\components\\MovieInfoLink.js";



function MovieInfoLink(_ref) {
  var movieId = _ref.movieId,
      movieSeq = _ref.movieSeq,
      src = _ref.src;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
      href: "/movieInfo/[movieId]/[movieSeq]",
      as: "/movieInfo/".concat(movieSeq, "/").concat(movieId),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
          src: src,
          style: {
            height: '310px',
            verticalAlign: 'top'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 7
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

/***/ }),

/***/ "./pages/movieSearch.js":
/*!******************************!*\
  !*** ./pages/movieSearch.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _components_MovieInfoLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MovieInfoLink */ "./components/MovieInfoLink.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api */ "./api.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "C:\\codingtime\\movieBox\\front\\pages\\movieSearch.js",
    _s = $RefreshSig$();







function movieSearch() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      inputValue = _useState[0],
      setInputValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      movieList = _useState2[0],
      setMovieList = _useState2[1];

  var handleInputValue = function handleInputValue(e) {
    setInputValue(e.target.value);
  };

  var handleSubmitValue = function handleSubmitValue(e) {
    e.preventDefault();

    var fetchMovieList = /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var fetchData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_api__WEBPACK_IMPORTED_MODULE_5__["getMovieFromKMDB"])(inputValue);

              case 2:
                fetchData = _context.sent;
                setMovieList(fetchData.Data[0].Result);
                console.log(fetchData.Data[0].Result);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchMovieList() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchMovieList();
  };

  var replaceTitle = function replaceTitle(title) {
    return title.replace(/!HS|!HE/g, "");
  };

  var splitPoster = function splitPoster(posters) {
    if (!posters) {
      posters = "https://res.cloudinary.com/dvmqbovxh/image/upload/v1616866172/noposter_pcwcby.png";
      return posters;
    } else {
      return posters.split("|")[0];
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("form", {
      onSubmit: handleSubmitValue,
      style: {
        textAlign: 'center'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("input", {
        placeholder: "\uC601\uD654\uBA85\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",
        onChange: handleInputValue,
        style: {
          textAlign: 'center',
          border: '1px solid gray',
          padding: '.5rem .7rem',
          borderRadius: '5px'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("button", {
        type: "submit",
        children: "\uAC80\uC0C9"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      children: [!movieList && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        children: "\uAC80\uC0C9\uD558\uC2E0 \uC601\uD654\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 35
      }, this), movieList && movieList.map(function (movieItem) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_MovieInfoLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
            movieSeq: movieItem.movieSeq,
            src: splitPoster(movieItem.posters),
            movieId: movieItem.movieId
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
              children: replaceTitle(movieItem.title)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 33
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("button", {
              children: "\uB9AC\uBDF0\uC4F0\uAE30"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 33
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 29
          }, _this)]
        }, movieItem.movieSeq, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 25
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }, this);
}

_s(movieSearch, "AdE507D6DA3p3bBqHp1Tzv/oefw=");

;
/* harmony default export */ __webpack_exports__["default"] = (movieSearch);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb3ZpZUluZm9MaW5rLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9tb3ZpZVNlYXJjaC5qcyJdLCJuYW1lcyI6WyJNb3ZpZUluZm9MaW5rIiwibW92aWVJZCIsIm1vdmllU2VxIiwic3JjIiwiaGVpZ2h0IiwidmVydGljYWxBbGlnbiIsIm1vdmllU2VhcmNoIiwidXNlU3RhdGUiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsIm1vdmllTGlzdCIsInNldE1vdmllTGlzdCIsImhhbmRsZUlucHV0VmFsdWUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXRWYWx1ZSIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2hNb3ZpZUxpc3QiLCJnZXRNb3ZpZUZyb21LTURCIiwiZmV0Y2hEYXRhIiwiRGF0YSIsIlJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJyZXBsYWNlVGl0bGUiLCJ0aXRsZSIsInJlcGxhY2UiLCJzcGxpdFBvc3RlciIsInBvc3RlcnMiLCJzcGxpdCIsInRleHRBbGlnbiIsImJvcmRlciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJtYXAiLCJtb3ZpZUl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBRUEsU0FBU0EsYUFBVCxPQUFtRDtBQUFBLE1BQTFCQyxPQUEwQixRQUExQkEsT0FBMEI7QUFBQSxNQUFqQkMsUUFBaUIsUUFBakJBLFFBQWlCO0FBQUEsTUFBUEMsR0FBTyxRQUFQQSxHQUFPO0FBQy9DLHNCQUNFO0FBQUEsMkJBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsaUNBQVg7QUFBNkMsUUFBRSx1QkFBZ0JELFFBQWhCLGNBQTRCRCxPQUE1QixDQUEvQztBQUFBLDZCQUNFO0FBQUEsK0JBQ0U7QUFBSyxhQUFHLEVBQUVFLEdBQVY7QUFBZSxlQUFLLEVBQUU7QUFBRUMsa0JBQU0sRUFBRSxPQUFWO0FBQW1CQyx5QkFBYSxFQUFFO0FBQWxDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNIOztLQVZRTCxhO0FBVVI7QUFFY0EsNEVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQSxTQUFTTSxXQUFULEdBQXVCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ2lCQyxzREFBUSxDQUFDLEVBQUQsQ0FEekI7QUFBQSxNQUNaQyxVQURZO0FBQUEsTUFDQUMsYUFEQTs7QUFBQSxtQkFFZUYsc0RBQVEsQ0FBQyxFQUFELENBRnZCO0FBQUEsTUFFWkcsU0FGWTtBQUFBLE1BRURDLFlBRkM7O0FBSW5CLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzVCSixpQkFBYSxDQUFDSSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFiO0FBQ0gsR0FGRDs7QUFJQSxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNILENBQUQsRUFBTztBQUM3QkEsS0FBQyxDQUFDSSxjQUFGOztBQUNBLFFBQU1DLGNBQWM7QUFBQSxrTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNLQyw2REFBZ0IsQ0FBQ1gsVUFBRCxDQURyQjs7QUFBQTtBQUNiWSx5QkFEYTtBQUVuQlQsNEJBQVksQ0FBQ1MsU0FBUyxDQUFDQyxJQUFWLENBQWUsQ0FBZixFQUFrQkMsTUFBbkIsQ0FBWjtBQUNBQyx1QkFBTyxDQUFDQyxHQUFSLENBQVlKLFNBQVMsQ0FBQ0MsSUFBVixDQUFlLENBQWYsRUFBa0JDLE1BQTlCOztBQUhtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFkSixjQUFjO0FBQUE7QUFBQTtBQUFBLE9BQXBCOztBQUtBQSxrQkFBYztBQUNqQixHQVJEOztBQVVBLE1BQU1PLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUM1QixXQUFPQSxLQUFLLENBQUNDLE9BQU4sQ0FBYyxVQUFkLEVBQTBCLEVBQTFCLENBQVA7QUFDSCxHQUZEOztBQUlBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLE9BQUQsRUFBYTtBQUM3QixRQUFHLENBQUNBLE9BQUosRUFBYTtBQUNUQSxhQUFPLEdBQUcsbUZBQVY7QUFDQSxhQUFPQSxPQUFQO0FBQ0gsS0FIRCxNQUdPO0FBQ0gsYUFBT0EsT0FBTyxDQUFDQyxLQUFSLENBQWMsR0FBZCxFQUFtQixDQUFuQixDQUFQO0FBQ0g7QUFDSixHQVBEOztBQVNBLHNCQUNJLHFFQUFDLDZEQUFEO0FBQUEsNEJBQ0k7QUFBTSxjQUFRLEVBQUVkLGlCQUFoQjtBQUFtQyxXQUFLLEVBQUU7QUFBRWUsaUJBQVMsRUFBRTtBQUFiLE9BQTFDO0FBQUEsOEJBQ0k7QUFBTyxtQkFBVyxFQUFDLGdFQUFuQjtBQUFrQyxnQkFBUSxFQUFFbkIsZ0JBQTVDO0FBQThELGFBQUssRUFBRTtBQUFFbUIsbUJBQVMsRUFBRSxRQUFiO0FBQXVCQyxnQkFBTSxFQUFFLGdCQUEvQjtBQUFpREMsaUJBQU8sRUFBRSxhQUExRDtBQUF5RUMsc0JBQVksRUFBRTtBQUF2RjtBQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFLSTtBQUFBLGlCQUVRLENBQUN4QixTQUFELGlCQUFjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRnRCLEVBS1FBLFNBQVMsSUFBSUEsU0FBUyxDQUFDeUIsR0FBVixDQUFjLFVBQUFDLFNBQVM7QUFBQSw0QkFDaEM7QUFBQSxrQ0FDSSxxRUFBQyxpRUFBRDtBQUNJLG9CQUFRLEVBQUVBLFNBQVMsQ0FBQ2xDLFFBRHhCO0FBRUksZUFBRyxFQUFFMEIsV0FBVyxDQUFDUSxTQUFTLENBQUNQLE9BQVgsQ0FGcEI7QUFHSSxtQkFBTyxFQUFFTyxTQUFTLENBQUNuQztBQUh2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBTUk7QUFBQSxvQ0FDSTtBQUFBLHdCQUFNd0IsWUFBWSxDQUFDVyxTQUFTLENBQUNWLEtBQVg7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOSjtBQUFBLFdBQVVVLFNBQVMsQ0FBQ2xDLFFBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGdDO0FBQUEsT0FBdkIsQ0FMckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUE0Qkg7O0dBM0RRSSxXOztBQTJEUjtBQUVjQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tb3ZpZVNlYXJjaC5hNjc3ZmI2NGVmMGYyOTk3ZjkzMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmZ1bmN0aW9uIE1vdmllSW5mb0xpbmsoeyBtb3ZpZUlkLCBtb3ZpZVNlcSwgc3JjIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9tb3ZpZUluZm8vW21vdmllSWRdL1ttb3ZpZVNlcV1cIiBhcz17YC9tb3ZpZUluZm8vJHttb3ZpZVNlcX0vJHttb3ZpZUlkfWB9PlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtzcmN9IHN0eWxlPXt7IGhlaWdodDogJzMxMHB4JywgdmVydGljYWxBbGlnbjogJ3RvcCcgfX0gLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWVJbmZvTGluazsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBMYXlvdXQnO1xyXG5cclxuaW1wb3J0IE1vdmllSW5mb0xpbmsgZnJvbSAnLi4vY29tcG9uZW50cy9Nb3ZpZUluZm9MaW5rJ1xyXG5pbXBvcnQgeyBnZXRNb3ZpZUZyb21LTURCIH0gZnJvbSAnLi4vYXBpJztcclxuXHJcbmZ1bmN0aW9uIG1vdmllU2VhcmNoKCkge1xyXG4gICAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW21vdmllTGlzdCwgc2V0TW92aWVMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVJbnB1dFZhbHVlID0gKGUpID0+IHtcclxuICAgICAgICBzZXRJbnB1dFZhbHVlKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXRWYWx1ZSA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGZldGNoTW92aWVMaXN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBmZXRjaERhdGEgPSBhd2FpdCBnZXRNb3ZpZUZyb21LTURCKGlucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICBzZXRNb3ZpZUxpc3QoZmV0Y2hEYXRhLkRhdGFbMF0uUmVzdWx0KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZmV0Y2hEYXRhLkRhdGFbMF0uUmVzdWx0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmV0Y2hNb3ZpZUxpc3QoKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVwbGFjZVRpdGxlID0gKHRpdGxlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRpdGxlLnJlcGxhY2UoLyFIU3whSEUvZywgXCJcIik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNwbGl0UG9zdGVyID0gKHBvc3RlcnMpID0+IHtcclxuICAgICAgICBpZighcG9zdGVycykge1xyXG4gICAgICAgICAgICBwb3N0ZXJzID0gXCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kdm1xYm92eGgvaW1hZ2UvdXBsb2FkL3YxNjE2ODY2MTcyL25vcG9zdGVyX3Bjd2NieS5wbmdcIjtcclxuICAgICAgICAgICAgcmV0dXJuIHBvc3RlcnM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBvc3RlcnMuc3BsaXQoXCJ8XCIpWzBdO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFwcExheW91dD5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdFZhbHVlfSBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwi7JiB7ZmU66qF7J2EIOyeheugpe2VtOyjvOyEuOyalC5cIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRWYWx1ZX0gc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknLCBwYWRkaW5nOiAnLjVyZW0gLjdyZW0nLCBib3JkZXJSYWRpdXM6ICc1cHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj7qsoDsg4k8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICFtb3ZpZUxpc3QgJiYgPGRpdj7qsoDsg4ntlZjsi6Ag7JiB7ZmU6rCAIOyhtOyerO2VmOyngCDslYrsirXri4jri6QuPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW92aWVMaXN0ICYmIG1vdmllTGlzdC5tYXAobW92aWVJdGVtID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e21vdmllSXRlbS5tb3ZpZVNlcX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW92aWVJbmZvTGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmllU2VxPXttb3ZpZUl0ZW0ubW92aWVTZXF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtzcGxpdFBvc3Rlcihtb3ZpZUl0ZW0ucG9zdGVycyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92aWVJZD17bW92aWVJdGVtLm1vdmllSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PntyZXBsYWNlVGl0bGUobW92aWVJdGVtLnRpdGxlKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPuumrOu3sOyTsOq4sDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vdmllU2VhcmNoO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9