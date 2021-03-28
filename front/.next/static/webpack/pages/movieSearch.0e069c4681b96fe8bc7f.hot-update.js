webpackHotUpdate_N_E("pages/movieSearch",{

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
            id: movieItem.movieSeq,
            src: splitPoster(movieItem.posters)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
              children: replaceTitle(movieItem.title)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 33
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("button", {
              children: "\uB9AC\uBDF0\uC4F0\uAE30"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 33
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW92aWVTZWFyY2guanMiXSwibmFtZXMiOlsibW92aWVTZWFyY2giLCJ1c2VTdGF0ZSIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwibW92aWVMaXN0Iiwic2V0TW92aWVMaXN0IiwiaGFuZGxlSW5wdXRWYWx1ZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdFZhbHVlIiwicHJldmVudERlZmF1bHQiLCJmZXRjaE1vdmllTGlzdCIsImdldE1vdmllRnJvbUtNREIiLCJmZXRjaERhdGEiLCJEYXRhIiwiUmVzdWx0IiwiY29uc29sZSIsImxvZyIsInJlcGxhY2VUaXRsZSIsInRpdGxlIiwicmVwbGFjZSIsInNwbGl0UG9zdGVyIiwicG9zdGVycyIsInNwbGl0IiwidGV4dEFsaWduIiwiYm9yZGVyIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsIm1hcCIsIm1vdmllSXRlbSIsIm1vdmllU2VxIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUEsU0FBU0EsV0FBVCxHQUF1QjtBQUFBOztBQUFBOztBQUFBLGtCQUNpQkMsc0RBQVEsQ0FBQyxFQUFELENBRHpCO0FBQUEsTUFDWkMsVUFEWTtBQUFBLE1BQ0FDLGFBREE7O0FBQUEsbUJBRWVGLHNEQUFRLENBQUMsRUFBRCxDQUZ2QjtBQUFBLE1BRVpHLFNBRlk7QUFBQSxNQUVEQyxZQUZDOztBQUluQixNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLENBQUQsRUFBTztBQUM1QkosaUJBQWEsQ0FBQ0ksQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBYjtBQUNILEdBRkQ7O0FBSUEsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDSCxDQUFELEVBQU87QUFDN0JBLEtBQUMsQ0FBQ0ksY0FBRjs7QUFDQSxRQUFNQyxjQUFjO0FBQUEsa01BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDS0MsNkRBQWdCLENBQUNYLFVBQUQsQ0FEckI7O0FBQUE7QUFDYlkseUJBRGE7QUFFbkJULDRCQUFZLENBQUNTLFNBQVMsQ0FBQ0MsSUFBVixDQUFlLENBQWYsRUFBa0JDLE1BQW5CLENBQVo7QUFDQUMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZSixTQUFTLENBQUNDLElBQVYsQ0FBZSxDQUFmLEVBQWtCQyxNQUE5Qjs7QUFIbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBZEosY0FBYztBQUFBO0FBQUE7QUFBQSxPQUFwQjs7QUFLQUEsa0JBQWM7QUFDakIsR0FSRDs7QUFVQSxNQUFNTyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFDNUIsV0FBT0EsS0FBSyxDQUFDQyxPQUFOLENBQWMsVUFBZCxFQUEwQixFQUExQixDQUFQO0FBQ0gsR0FGRDs7QUFJQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxPQUFELEVBQWE7QUFDN0IsUUFBRyxDQUFDQSxPQUFKLEVBQWE7QUFDVEEsYUFBTyxHQUFHLG1GQUFWO0FBQ0EsYUFBT0EsT0FBUDtBQUNILEtBSEQsTUFHTztBQUNILGFBQU9BLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLEdBQWQsRUFBbUIsQ0FBbkIsQ0FBUDtBQUNIO0FBQ0osR0FQRDs7QUFTQSxzQkFDSSxxRUFBQyw2REFBRDtBQUFBLDRCQUNJO0FBQU0sY0FBUSxFQUFFZCxpQkFBaEI7QUFBbUMsV0FBSyxFQUFFO0FBQUVlLGlCQUFTLEVBQUU7QUFBYixPQUExQztBQUFBLDhCQUNJO0FBQU8sbUJBQVcsRUFBQyxnRUFBbkI7QUFBa0MsZ0JBQVEsRUFBRW5CLGdCQUE1QztBQUE4RCxhQUFLLEVBQUU7QUFBRW1CLG1CQUFTLEVBQUUsUUFBYjtBQUF1QkMsZ0JBQU0sRUFBRSxnQkFBL0I7QUFBaURDLGlCQUFPLEVBQUUsYUFBMUQ7QUFBeUVDLHNCQUFZLEVBQUU7QUFBdkY7QUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBS0k7QUFBQSxpQkFFUSxDQUFDeEIsU0FBRCxpQkFBYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZ0QixFQUtRQSxTQUFTLElBQUlBLFNBQVMsQ0FBQ3lCLEdBQVYsQ0FBYyxVQUFBQyxTQUFTO0FBQUEsNEJBQ2hDO0FBQUEsa0NBQ0kscUVBQUMsaUVBQUQ7QUFDSSxjQUFFLEVBQUVBLFNBQVMsQ0FBQ0MsUUFEbEI7QUFFSSxlQUFHLEVBQUVULFdBQVcsQ0FBQ1EsU0FBUyxDQUFDUCxPQUFYO0FBRnBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFLSTtBQUFBLG9DQUNJO0FBQUEsd0JBQU1KLFlBQVksQ0FBQ1csU0FBUyxDQUFDVixLQUFYO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEo7QUFBQSxXQUFVVSxTQUFTLENBQUNDLFFBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGdDO0FBQUEsT0FBdkIsQ0FMckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEyQkg7O0dBMURRL0IsVzs7QUEwRFI7QUFFY0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbW92aWVTZWFyY2guMGUwNjljNDY4MWI5NmZlOGJjN2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFwcExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0FwcExheW91dCc7XHJcblxyXG5pbXBvcnQgTW92aWVJbmZvTGluayBmcm9tICcuLi9jb21wb25lbnRzL01vdmllSW5mb0xpbmsnXHJcbmltcG9ydCB7IGdldE1vdmllRnJvbUtNREIgfSBmcm9tICcuLi9hcGknO1xyXG5cclxuZnVuY3Rpb24gbW92aWVTZWFyY2goKSB7XHJcbiAgICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbbW92aWVMaXN0LCBzZXRNb3ZpZUxpc3RdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUlucHV0VmFsdWUgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdFZhbHVlID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgZmV0Y2hNb3ZpZUxpc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGF3YWl0IGdldE1vdmllRnJvbUtNREIoaW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgICAgIHNldE1vdmllTGlzdChmZXRjaERhdGEuRGF0YVswXS5SZXN1bHQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmZXRjaERhdGEuRGF0YVswXS5SZXN1bHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmZXRjaE1vdmllTGlzdCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXBsYWNlVGl0bGUgPSAodGl0bGUpID0+IHtcclxuICAgICAgICByZXR1cm4gdGl0bGUucmVwbGFjZSgvIUhTfCFIRS9nLCBcIlwiKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc3BsaXRQb3N0ZXIgPSAocG9zdGVycykgPT4ge1xyXG4gICAgICAgIGlmKCFwb3N0ZXJzKSB7XHJcbiAgICAgICAgICAgIHBvc3RlcnMgPSBcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2R2bXFib3Z4aC9pbWFnZS91cGxvYWQvdjE2MTY4NjYxNzIvbm9wb3N0ZXJfcGN3Y2J5LnBuZ1wiO1xyXG4gICAgICAgICAgICByZXR1cm4gcG9zdGVycztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcG9zdGVycy5zcGxpdChcInxcIilbMF07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXBwTGF5b3V0PlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0VmFsdWV9IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCLsmIHtmZTrqoXsnYQg7J6F66Cl7ZW07KO87IS47JqULlwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dFZhbHVlfSBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBib3JkZXI6ICcxcHggc29saWQgZ3JheScsIHBhZGRpbmc6ICcuNXJlbSAuN3JlbScsIGJvcmRlclJhZGl1czogJzVweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPuqygOyDiTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgIW1vdmllTGlzdCAmJiA8ZGl2PuqygOyDie2VmOyLoCDsmIHtmZTqsIAg7KG07J6s7ZWY7KeAIOyViuyKteuLiOuLpC48L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBtb3ZpZUxpc3QgJiYgbW92aWVMaXN0Lm1hcChtb3ZpZUl0ZW0gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17bW92aWVJdGVtLm1vdmllU2VxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb3ZpZUluZm9MaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e21vdmllSXRlbS5tb3ZpZVNlcX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3NwbGl0UG9zdGVyKG1vdmllSXRlbS5wb3N0ZXJzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e3JlcGxhY2VUaXRsZShtb3ZpZUl0ZW0udGl0bGUpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+66as67ew7JOw6riwPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW92aWVTZWFyY2g7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=