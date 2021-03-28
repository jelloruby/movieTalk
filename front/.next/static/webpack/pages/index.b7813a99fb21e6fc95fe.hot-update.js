webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var _components_MovieSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MovieSlider */ "./components/MovieSlider.js");
/* harmony import */ var _json_movieInfo_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../json/movieInfo.json */ "./json/movieInfo.json");
var _json_movieInfo_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../json/movieInfo.json */ "./json/movieInfo.json", 1);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api */ "./api.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);



var _jsxFileName = "C:\\codingtime\\movieBox\\front\\pages\\index.js",
    _s = $RefreshSig$();









function Home() {
  _s();

  var movieInfomation = _json_movieInfo_json__WEBPACK_IMPORTED_MODULE_5__.movie.movieInfomation;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      boxofficeMovieNames = _useState[0],
      setboxofficeMovieNames = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var fetchMovieList = /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var boxofficeList, result2, movieSeq, res1, res2;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_api__WEBPACK_IMPORTED_MODULE_6__["getMovieList"])();

              case 2:
                boxofficeList = _context.sent;
                setboxofficeMovieNames(movieNameArray(boxofficeList.boxOfficeResult.dailyBoxOfficeList));
                _context.next = 6;
                return Object(_api__WEBPACK_IMPORTED_MODULE_6__["getMovieFromKMDB"])("미나리");

              case 6:
                result2 = _context.sent;
                movieSeq = "50568";
                _context.next = 10;
                return Object(_api__WEBPACK_IMPORTED_MODULE_6__["getMovieSeqFromKMDB"])(movieSeq);

              case 10:
                res1 = _context.sent;
                console.log(result2);
                console.log(res1.Data[0].Result);
                _context.next = 15;
                return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=QXYS65CA4DKL68FJYGTF");

              case 15:
                res2 = _context.sent;
                console.log(res2);

              case 17:
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
  }, []);

  var movieNameArray = function movieNameArray(list) {
    var arr = [];

    for (var i = 0; i < list.length; i++) {
      arr.push(list[i].movieNm);
    }

    return arr;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h2", {
      style: {
        textAlign: 'center'
      },
      children: "\uBC15\uC2A4\uC624\uD53C\uC2A4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_MovieSlider__WEBPACK_IMPORTED_MODULE_4__["default"], {
      movieInfomation: movieInfomation
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 9
  }, this);
}

_s(Home, "KQkxOP8HHYdlFFRzIuk09WMsTvc=");

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsIm1vdmllSW5mb21hdGlvbiIsIk1vdmllSW5mb0RhdGEiLCJtb3ZpZSIsInVzZVN0YXRlIiwiYm94b2ZmaWNlTW92aWVOYW1lcyIsInNldGJveG9mZmljZU1vdmllTmFtZXMiLCJ1c2VFZmZlY3QiLCJmZXRjaE1vdmllTGlzdCIsImdldE1vdmllTGlzdCIsImJveG9mZmljZUxpc3QiLCJtb3ZpZU5hbWVBcnJheSIsImJveE9mZmljZVJlc3VsdCIsImRhaWx5Qm94T2ZmaWNlTGlzdCIsImdldE1vdmllRnJvbUtNREIiLCJyZXN1bHQyIiwibW92aWVTZXEiLCJnZXRNb3ZpZVNlcUZyb21LTURCIiwicmVzMSIsImNvbnNvbGUiLCJsb2ciLCJEYXRhIiwiUmVzdWx0IiwiYXhpb3MiLCJnZXQiLCJyZXMyIiwibGlzdCIsImFyciIsImkiLCJsZW5ndGgiLCJwdXNoIiwibW92aWVObSIsInRleHRBbGlnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTs7O0FBQ0EsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBLE1BQ0pDLGVBREksR0FDZ0JDLGlEQUFhLENBQUNDLEtBRDlCLENBQ0pGLGVBREk7O0FBQUEsa0JBRTBDRyxzREFBUSxDQUFDLEVBQUQsQ0FGbEQ7QUFBQSxNQUVMQyxtQkFGSztBQUFBLE1BRWdCQyxzQkFGaEI7O0FBSVpDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQU1DLGNBQWM7QUFBQSxrTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNTQyx5REFBWSxFQURyQjs7QUFBQTtBQUNiQyw2QkFEYTtBQUVuQkosc0NBQXNCLENBQUNLLGNBQWMsQ0FBQ0QsYUFBYSxDQUFDRSxlQUFkLENBQThCQyxrQkFBL0IsQ0FBZixDQUF0QjtBQUZtQjtBQUFBLHVCQUdHQyw2REFBZ0IsQ0FBQyxLQUFELENBSG5COztBQUFBO0FBR2JDLHVCQUhhO0FBSWJDLHdCQUphLEdBSUYsT0FKRTtBQUFBO0FBQUEsdUJBS0FDLGdFQUFtQixDQUFDRCxRQUFELENBTG5COztBQUFBO0FBS2JFLG9CQUxhO0FBTW5CQyx1QkFBTyxDQUFDQyxHQUFSLENBQVlMLE9BQVo7QUFDQUksdUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFJLENBQUNHLElBQUwsQ0FBVSxDQUFWLEVBQWFDLE1BQXpCO0FBUG1CO0FBQUEsdUJBUUFDLDRDQUFLLENBQUNDLEdBQU4scUlBUkE7O0FBQUE7QUFRYkMsb0JBUmE7QUFTbkJOLHVCQUFPLENBQUNDLEdBQVIsQ0FBWUssSUFBWjs7QUFUbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBZGpCLGNBQWM7QUFBQTtBQUFBO0FBQUEsT0FBcEI7O0FBV0FBLGtCQUFjO0FBQ2pCLEdBYlEsRUFhTixFQWJNLENBQVQ7O0FBZUEsTUFBTUcsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDZSxJQUFELEVBQVU7QUFDN0IsUUFBSUMsR0FBRyxHQUFHLEVBQVY7O0FBRUEsU0FBSSxJQUFJQyxDQUFDLEdBQUMsQ0FBVixFQUFhQSxDQUFDLEdBQUNGLElBQUksQ0FBQ0csTUFBcEIsRUFBNEJELENBQUMsRUFBN0IsRUFBaUM7QUFDN0JELFNBQUcsQ0FBQ0csSUFBSixDQUFTSixJQUFJLENBQUNFLENBQUQsQ0FBSixDQUFRRyxPQUFqQjtBQUNIOztBQUNELFdBQU9KLEdBQVA7QUFDSCxHQVBEOztBQVNBLHNCQUNJLHFFQUFDLDZEQUFEO0FBQUEsNEJBQ0k7QUFBSSxXQUFLLEVBQUU7QUFBRUssaUJBQVMsRUFBRTtBQUFiLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJLHFFQUFDLCtEQUFEO0FBQWEscUJBQWUsRUFBRS9CO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQU1IOztHQWxDUUQsSTs7S0FBQUEsSTtBQW9DTUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjc4MTNhOTlmYjIxZTZmYzk1ZmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0J1xyXG5pbXBvcnQgTW92aWVTbGlkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Nb3ZpZVNsaWRlcidcclxuXHJcbmltcG9ydCBNb3ZpZUluZm9EYXRhIGZyb20gJy4uL2pzb24vbW92aWVJbmZvLmpzb24nXHJcblxyXG5pbXBvcnQgeyBnZXRNb3ZpZUxpc3QsIGdldE1vdmllRnJvbUtNREIsIGdldE1vdmllU2VxRnJvbUtNREIgfSBmcm9tICcuLi9hcGknXHJcblxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgICBjb25zdCB7IG1vdmllSW5mb21hdGlvbiB9ID0gTW92aWVJbmZvRGF0YS5tb3ZpZVxyXG4gICAgY29uc3QgW2JveG9mZmljZU1vdmllTmFtZXMsIHNldGJveG9mZmljZU1vdmllTmFtZXNdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBmZXRjaE1vdmllTGlzdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYm94b2ZmaWNlTGlzdCA9IGF3YWl0IGdldE1vdmllTGlzdCgpO1xyXG4gICAgICAgICAgICBzZXRib3hvZmZpY2VNb3ZpZU5hbWVzKG1vdmllTmFtZUFycmF5KGJveG9mZmljZUxpc3QuYm94T2ZmaWNlUmVzdWx0LmRhaWx5Qm94T2ZmaWNlTGlzdCkpO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQyID0gYXdhaXQgZ2V0TW92aWVGcm9tS01EQihcIuuvuOuCmOumrFwiKTtcclxuICAgICAgICAgICAgY29uc3QgbW92aWVTZXEgPSBcIjUwNTY4XCI7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlczEgPSBhd2FpdCBnZXRNb3ZpZVNlcUZyb21LTURCKG1vdmllU2VxKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0Mik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlczEuRGF0YVswXS5SZXN1bHQpO1xyXG4gICAgICAgICAgICBjb25zdCByZXMyID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vYXBpLmtvcmVhZmlsbS5vci5rci9vcGVuYXBpLWRhdGEyL3dpc2VudXQvc2VhcmNoX2FwaS9zZWFyY2hfanNvbjIuanNwP2NvbGxlY3Rpb249a21kYl9uZXcyJlNlcnZpY2VLZXk9UVhZUzY1Q0E0REtMNjhGSllHVEZgKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmV0Y2hNb3ZpZUxpc3QoKTtcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IG1vdmllTmFtZUFycmF5ID0gKGxpc3QpID0+IHtcclxuICAgICAgICB2YXIgYXJyID0gW107XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8bGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBhcnIucHVzaChsaXN0W2ldLm1vdmllTm0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnI7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXBwTGF5b3V0PlxyXG4gICAgICAgICAgICA8aDIgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT7rsJXsiqTsmKTtlLzsiqQ8L2gyPlxyXG4gICAgICAgICAgICA8TW92aWVTbGlkZXIgbW92aWVJbmZvbWF0aW9uPXttb3ZpZUluZm9tYXRpb259IC8+XHJcbiAgICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=