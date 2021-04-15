webpackHotUpdate_N_E("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_layout_LoginLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout/LoginLayout */ "./components/layout/LoginLayout.js");
/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/LoginForm */ "./components/LoginForm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "C:\\codingtime\\movieBox\\front\\pages\\login.js",
    _templateObject,
    _s = $RefreshSig$();








var GoogleLink = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].a(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 300px;\n    border-radius: 5px;\n    padding: 6px 16px;\n    box-sizing: border-box;\n    border: 1px solid gray;\n    background: black;\n    text-align: center;\n"])));
_c = GoogleLink;

function login() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  }),
      logInDone = _useSelector.logInDone,
      logInError = _useSelector.logInError;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (logInDone) {
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/');
      console.log("login page - 로그인 완료");
    }
  }, [logInDone]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_layout_LoginLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(GoogleLink, {
      href: "http://localhost:5000/auth/google",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("svg", {
        className: "svgIcon-use",
        width: "25",
        height: "37",
        viewBox: "0 0 25 25",
        style: {
          verticalAlign: 'middle'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("g", {
          fill: "none",
          fillRule: "evenodd",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("path", {
            d: "M20.66 12.693c0-.603-.054-1.182-.155-1.738H12.5v3.287h4.575a3.91 3.91 0 0 1-1.697 2.566v2.133h2.747c1.608-1.48 2.535-3.65 2.535-6.24z",
            fill: "#4285F4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("path", {
            d: "M12.5 21c2.295 0 4.22-.76 5.625-2.06l-2.747-2.132c-.76.51-1.734.81-2.878.81-2.214 0-4.088-1.494-4.756-3.503h-2.84v2.202A8.498 8.498 0 0 0 12.5 21z",
            fill: "#34A853"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("path", {
            d: "M7.744 14.115c-.17-.51-.267-1.055-.267-1.615s.097-1.105.267-1.615V8.683h-2.84A8.488 8.488 0 0 0 4 12.5c0 1.372.328 2.67.904 3.817l2.84-2.202z",
            fill: "#FBBC05"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("path", {
            d: "M12.5 7.38c1.248 0 2.368.43 3.25 1.272l2.437-2.438C16.715 4.842 14.79 4 12.5 4a8.497 8.497 0 0 0-7.596 4.683l2.84 2.202c.668-2.01 2.542-3.504 4.756-3.504z",
            fill: "#EA4335"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
        style: {
          marginLeft: '5px'
        },
        children: "Sign in with Google"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_LoginForm__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }, this);
}

_s(login, "hGPmn9KNmrXLonZ3jmevQQ5xoN8=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

;
/* harmony default export */ __webpack_exports__["default"] = (login);

var _c;

$RefreshReg$(_c, "GoogleLink");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiR29vZ2xlTGluayIsInN0eWxlZCIsImEiLCJsb2dpbiIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsInVzZUVmZmVjdCIsIlJvdXRlciIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiYWxlcnQiLCJ2ZXJ0aWNhbEFsaWduIiwibWFyZ2luTGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLHlEQUFNLENBQUNDLENBQVYsZ1VBQWhCO0tBQU1GLFU7O0FBVU4sU0FBU0csS0FBVCxHQUFpQjtBQUFBOztBQUFBLHFCQUNxQkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FEaEM7QUFBQSxNQUNMQyxTQURLLGdCQUNMQSxTQURLO0FBQUEsTUFDTUMsVUFETixnQkFDTUEsVUFETjs7QUFHYkMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBR0YsU0FBSCxFQUFjO0FBQ1ZHLHdEQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaO0FBQ0g7QUFDSixHQUxRLEVBS04sQ0FBQ04sU0FBRCxDQUxNLENBQVQ7QUFPQUUseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBR0QsVUFBSCxFQUFlO0FBQ1hNLFdBQUssQ0FBQ04sVUFBRCxDQUFMO0FBQ0g7QUFDSixHQUpRLEVBSU4sQ0FBQ0EsVUFBRCxDQUpNLENBQVQ7QUFNQSxzQkFDSSxxRUFBQyxzRUFBRDtBQUFBLDRCQUNJLHFFQUFDLFVBQUQ7QUFBWSxVQUFJLEVBQUMsbUNBQWpCO0FBQUEsOEJBQ0k7QUFDSSxpQkFBUyxFQUFDLGFBRGQ7QUFFSSxhQUFLLEVBQUMsSUFGVjtBQUdJLGNBQU0sRUFBQyxJQUhYO0FBSUksZUFBTyxFQUFDLFdBSlo7QUFLSSxhQUFLLEVBQUU7QUFBRU8sdUJBQWEsRUFBRTtBQUFqQixTQUxYO0FBQUEsK0JBT0k7QUFBRyxjQUFJLEVBQUMsTUFBUjtBQUFlLGtCQUFRLEVBQUMsU0FBeEI7QUFBQSxrQ0FDQTtBQUNJLGFBQUMsRUFBQyx1SUFETjtBQUVJLGdCQUFJLEVBQUM7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURBLGVBS0E7QUFDSSxhQUFDLEVBQUMsb0pBRE47QUFFSSxnQkFBSSxFQUFDO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMQSxlQVNBO0FBQ0ksYUFBQyxFQUFDLCtJQUROO0FBRUksZ0JBQUksRUFBQztBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVEEsZUFhQTtBQUNJLGFBQUMsRUFBQyw0SkFETjtBQUVJLGdCQUFJLEVBQUM7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQTJCSTtBQUFNLGFBQUssRUFBRTtBQUFFQyxvQkFBVSxFQUFFO0FBQWQsU0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQThCSSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBOUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBa0NIOztHQWxEUWIsSztVQUM2QkMsdUQ7OztBQWlEckM7QUFFY0Qsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uZmNkNGI4N2E0NmVhZDFkNDU5NmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgTG9naW5MYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvTG9naW5MYXlvdXQnO1xyXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvTG9naW5Gb3JtJztcclxuXHJcbmNvbnN0IEdvb2dsZUxpbmsgPSBzdHlsZWQuYWBcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDZweCAxNnB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYFxyXG5cclxuZnVuY3Rpb24gbG9naW4oKSB7XHJcbiAgICBjb25zdCB7IGxvZ0luRG9uZSwgbG9nSW5FcnJvciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKGxvZ0luRG9uZSkge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2luIHBhZ2UgLSDroZzqt7jsnbgg7JmE66OMXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtsb2dJbkRvbmVdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKGxvZ0luRXJyb3IpIHtcclxuICAgICAgICAgICAgYWxlcnQobG9nSW5FcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2xvZ0luRXJyb3JdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMb2dpbkxheW91dD5cclxuICAgICAgICAgICAgPEdvb2dsZUxpbmsgaHJlZj1cImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hdXRoL2dvb2dsZVwiPlxyXG4gICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Z0ljb24tdXNlXCJcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI1XCJcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzN1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNSAyNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdmVydGljYWxBbGlnbjogJ21pZGRsZScgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZyBmaWxsPVwibm9uZVwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMjAuNjYgMTIuNjkzYzAtLjYwMy0uMDU0LTEuMTgyLS4xNTUtMS43MzhIMTIuNXYzLjI4N2g0LjU3NWEzLjkxIDMuOTEgMCAwIDEtMS42OTcgMi41NjZ2Mi4xMzNoMi43NDdjMS42MDgtMS40OCAyLjUzNS0zLjY1IDIuNTM1LTYuMjR6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiM0Mjg1RjRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMi41IDIxYzIuMjk1IDAgNC4yMi0uNzYgNS42MjUtMi4wNmwtMi43NDctMi4xMzJjLS43Ni41MS0xLjczNC44MS0yLjg3OC44MS0yLjIxNCAwLTQuMDg4LTEuNDk0LTQuNzU2LTMuNTAzaC0yLjg0djIuMjAyQTguNDk4IDguNDk4IDAgMCAwIDEyLjUgMjF6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiMzNEE4NTNcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk03Ljc0NCAxNC4xMTVjLS4xNy0uNTEtLjI2Ny0xLjA1NS0uMjY3LTEuNjE1cy4wOTctMS4xMDUuMjY3LTEuNjE1VjguNjgzaC0yLjg0QTguNDg4IDguNDg4IDAgMCAwIDQgMTIuNWMwIDEuMzcyLjMyOCAyLjY3LjkwNCAzLjgxN2wyLjg0LTIuMjAyelwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRkJCQzA1XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTIuNSA3LjM4YzEuMjQ4IDAgMi4zNjguNDMgMy4yNSAxLjI3MmwyLjQzNy0yLjQzOEMxNi43MTUgNC44NDIgMTQuNzkgNCAxMi41IDRhOC40OTcgOC40OTcgMCAwIDAtNy41OTYgNC42ODNsMi44NCAyLjIwMmMuNjY4LTIuMDEgMi41NDItMy41MDQgNC43NTYtMy41MDR6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNFQTQzMzVcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnNXB4JyB9fT5TaWduIGluIHdpdGggR29vZ2xlPC9zcGFuPlxyXG4gICAgICAgICAgICA8L0dvb2dsZUxpbms+XHJcbiAgICAgICAgICAgIDxMb2dpbkZvcm0gLz5cclxuICAgICAgICA8L0xvZ2luTGF5b3V0PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9naW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=