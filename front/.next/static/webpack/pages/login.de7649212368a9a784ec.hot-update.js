webpackHotUpdate_N_E("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout_AppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/AppLayout */ "./components/layout/AppLayout.js");
/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LoginForm */ "./components/LoginForm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\codingtime\\movieBox\\front\\pages\\login.js",
    _s = $RefreshSig$();








function login() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user;
  }),
      logInDone = _useSelector.logInDone,
      logInError = _useSelector.logInError;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (logInDone) {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');
      console.log("login page - 로그인 완료");
    }
  }, [logInDone]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_layout_AppLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      style: {
        border: '1px solid blue',
        display: 'flex',
        flexDirection: 'column'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_LoginForm__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
        href: "http://localhost:5000/auth/google",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("svg", {
          className: "svgIcon-use",
          width: "25",
          height: "37",
          viewBox: "0 0 25 25",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("g", {
            fill: "none",
            fillRule: "evenodd",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("path", {
              d: "M20.66 12.693c0-.603-.054-1.182-.155-1.738H12.5v3.287h4.575a3.91 3.91 0 0 1-1.697 2.566v2.133h2.747c1.608-1.48 2.535-3.65 2.535-6.24z",
              fill: "#4285F4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("path", {
              d: "M12.5 21c2.295 0 4.22-.76 5.625-2.06l-2.747-2.132c-.76.51-1.734.81-2.878.81-2.214 0-4.088-1.494-4.756-3.503h-2.84v2.202A8.498 8.498 0 0 0 12.5 21z",
              fill: "#34A853"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("path", {
              d: "M7.744 14.115c-.17-.51-.267-1.055-.267-1.615s.097-1.105.267-1.615V8.683h-2.84A8.488 8.488 0 0 0 4 12.5c0 1.372.328 2.67.904 3.817l2.84-2.202z",
              fill: "#FBBC05"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("path", {
              d: "M12.5 7.38c1.248 0 2.368.43 3.25 1.272l2.437-2.438C16.715 4.842 14.79 4 12.5 4a8.497 8.497 0 0 0-7.596 4.683l2.84 2.202c.668-2.01 2.542-3.504 4.756-3.504z",
              fill: "#EA4335"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
          children: "\uAD6C\uAE00 \uB85C\uADF8\uC778"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, this);
}

_s(login, "hGPmn9KNmrXLonZ3jmevQQ5xoN8=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

;
/* harmony default export */ __webpack_exports__["default"] = (login);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsibG9naW4iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJ1c2VFZmZlY3QiLCJSb3V0ZXIiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImFsZXJ0IiwiYm9yZGVyIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUEsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBLHFCQUNxQkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FEaEM7QUFBQSxNQUNMQyxTQURLLGdCQUNMQSxTQURLO0FBQUEsTUFDTUMsVUFETixnQkFDTUEsVUFETjs7QUFHYkMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBR0YsU0FBSCxFQUFjO0FBQ1ZHLHdEQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaO0FBQ0g7QUFDSixHQUxRLEVBS04sQ0FBQ04sU0FBRCxDQUxNLENBQVQ7QUFPQUUseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBR0QsVUFBSCxFQUFlO0FBQ1hNLFdBQUssQ0FBQ04sVUFBRCxDQUFMO0FBQ0g7QUFDSixHQUpRLEVBSU4sQ0FBQ0EsVUFBRCxDQUpNLENBQVQ7QUFNQSxzQkFDSSxxRUFBQyxvRUFBRDtBQUFBLDJCQUNJO0FBQUssV0FBSyxFQUFFO0FBQUVPLGNBQU0sRUFBRSxnQkFBVjtBQUE0QkMsZUFBTyxFQUFFLE1BQXJDO0FBQTZDQyxxQkFBYSxFQUFFO0FBQTVELE9BQVo7QUFBQSw4QkFDSSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFHLFlBQUksRUFBQyxtQ0FBUjtBQUFBLGdDQUNJO0FBQ0ksbUJBQVMsRUFBQyxhQURkO0FBRUksZUFBSyxFQUFDLElBRlY7QUFHSSxnQkFBTSxFQUFDLElBSFg7QUFJSSxpQkFBTyxFQUFDLFdBSlo7QUFBQSxpQ0FNSTtBQUFHLGdCQUFJLEVBQUMsTUFBUjtBQUFlLG9CQUFRLEVBQUMsU0FBeEI7QUFBQSxvQ0FDQTtBQUNJLGVBQUMsRUFBQyx1SUFETjtBQUVJLGtCQUFJLEVBQUM7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURBLGVBS0E7QUFDSSxlQUFDLEVBQUMsb0pBRE47QUFFSSxrQkFBSSxFQUFDO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMQSxlQVNBO0FBQ0ksZUFBQyxFQUFDLCtJQUROO0FBRUksa0JBQUksRUFBQztBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVEEsZUFhQTtBQUNJLGVBQUMsRUFBQyw0SkFETjtBQUVJLGtCQUFJLEVBQUM7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUEwQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBMUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW9DSDs7R0FwRFFkLEs7VUFDNkJDLHVEOzs7QUFtRHJDO0FBRWNELG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLmRlNzY0OTIxMjM2OGE5YTc4NGVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0FwcExheW91dCc7XHJcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dpbkZvcm0nO1xyXG5cclxuZnVuY3Rpb24gbG9naW4oKSB7XHJcbiAgICBjb25zdCB7IGxvZ0luRG9uZSwgbG9nSW5FcnJvciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKGxvZ0luRG9uZSkge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2luIHBhZ2UgLSDroZzqt7jsnbgg7JmE66OMXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtsb2dJbkRvbmVdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKGxvZ0luRXJyb3IpIHtcclxuICAgICAgICAgICAgYWxlcnQobG9nSW5FcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2xvZ0luRXJyb3JdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGJsdWUnLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nIH19PlxyXG4gICAgICAgICAgICAgICAgPExvZ2luRm9ybSAvPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hdXRoL2dvb2dsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnSWNvbi11c2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI1IDI1XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGZpbGw9XCJub25lXCIgZmlsbFJ1bGU9XCJldmVub2RkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTIwLjY2IDEyLjY5M2MwLS42MDMtLjA1NC0xLjE4Mi0uMTU1LTEuNzM4SDEyLjV2My4yODdoNC41NzVhMy45MSAzLjkxIDAgMCAxLTEuNjk3IDIuNTY2djIuMTMzaDIuNzQ3YzEuNjA4LTEuNDggMi41MzUtMy42NSAyLjUzNS02LjI0elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiIzQyODVGNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEyLjUgMjFjMi4yOTUgMCA0LjIyLS43NiA1LjYyNS0yLjA2bC0yLjc0Ny0yLjEzMmMtLjc2LjUxLTEuNzM0LjgxLTIuODc4LjgxLTIuMjE0IDAtNC4wODgtMS40OTQtNC43NTYtMy41MDNoLTIuODR2Mi4yMDJBOC40OTggOC40OTggMCAwIDAgMTIuNSAyMXpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiMzNEE4NTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk03Ljc0NCAxNC4xMTVjLS4xNy0uNTEtLjI2Ny0xLjA1NS0uMjY3LTEuNjE1cy4wOTctMS4xMDUuMjY3LTEuNjE1VjguNjgzaC0yLjg0QTguNDg4IDguNDg4IDAgMCAwIDQgMTIuNWMwIDEuMzcyLjMyOCAyLjY3LjkwNCAzLjgxN2wyLjg0LTIuMjAyelwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0ZCQkMwNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEyLjUgNy4zOGMxLjI0OCAwIDIuMzY4LjQzIDMuMjUgMS4yNzJsMi40MzctMi40MzhDMTYuNzE1IDQuODQyIDE0Ljc5IDQgMTIuNSA0YTguNDk3IDguNDk3IDAgMCAwLTcuNTk2IDQuNjgzbDIuODQgMi4yMDJjLjY2OC0yLjAxIDIuNTQyLTMuNTA0IDQuNzU2LTMuNTA0elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0VBNDMzNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj7qtazquIAg66Gc6re47J24PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2dpbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==