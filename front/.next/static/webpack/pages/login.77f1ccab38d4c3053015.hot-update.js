webpackHotUpdate_N_E("pages/login",{

/***/ "./components/layout/LoginLayout.js":
false,

/***/ "./components/layout/UserLayout.js":
/*!*****************************************!*\
  !*** ./components/layout/UserLayout.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Nav */ "./components/Nav.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\codingtime\\movieBox\\front\\components\\layout\\UserLayout.js";




function LoginLayout(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      },
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("footer", {
      style: {
        textAlign: 'center',
        padding: '5rem 0 3rem'
      },
      children: "@2021 madeby JEB"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

_c = LoginLayout;
;
/* harmony default export */ __webpack_exports__["default"] = (LoginLayout);

var _c;

$RefreshReg$(_c, "LoginLayout");

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

/***/ }),

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
/* harmony import */ var _components_layout_UserLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout/UserLayout */ "./components/layout/UserLayout.js");
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_layout_UserLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvVXNlckxheW91dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiTG9naW5MYXlvdXQiLCJjaGlsZHJlbiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsInRleHRBbGlnbiIsInBhZGRpbmciLCJHb29nbGVMaW5rIiwic3R5bGVkIiwiYSIsImxvZ2luIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJsb2dJbkRvbmUiLCJsb2dJbkVycm9yIiwidXNlRWZmZWN0IiwiUm91dGVyIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJhbGVydCIsInZlcnRpY2FsQWxpZ24iLCJtYXJnaW5MZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBLFNBQVNBLFdBQVQsT0FBbUM7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFDL0Isc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFLLFdBQUssRUFBRTtBQUFFQyxlQUFPLEVBQUUsTUFBWDtBQUFtQkMscUJBQWEsRUFBRSxRQUFsQztBQUE0Q0Msa0JBQVUsRUFBRTtBQUF4RCxPQUFaO0FBQUEsZ0JBQ01IO0FBRE47QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBS0k7QUFBUSxXQUFLLEVBQUU7QUFBRUksaUJBQVMsRUFBRSxRQUFiO0FBQXVCQyxlQUFPLEVBQUU7QUFBaEMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBU0g7O0tBVlFOLFc7QUFVUjtBQUVjQSwwRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNTyxVQUFVLEdBQUdDLHlEQUFNLENBQUNDLENBQVYsZ1VBQWhCO0tBQU1GLFU7O0FBVU4sU0FBU0csS0FBVCxHQUFpQjtBQUFBOztBQUFBLHFCQUNxQkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FEaEM7QUFBQSxNQUNMQyxTQURLLGdCQUNMQSxTQURLO0FBQUEsTUFDTUMsVUFETixnQkFDTUEsVUFETjs7QUFHYkMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBR0YsU0FBSCxFQUFjO0FBQ1ZHLHdEQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaO0FBQ0g7QUFDSixHQUxRLEVBS04sQ0FBQ04sU0FBRCxDQUxNLENBQVQ7QUFPQUUseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBR0QsVUFBSCxFQUFlO0FBQ1hNLFdBQUssQ0FBQ04sVUFBRCxDQUFMO0FBQ0g7QUFDSixHQUpRLEVBSU4sQ0FBQ0EsVUFBRCxDQUpNLENBQVQ7QUFNQSxzQkFDSSxxRUFBQyxxRUFBRDtBQUFBLDRCQUNJLHFFQUFDLFVBQUQ7QUFBWSxVQUFJLEVBQUMsbUNBQWpCO0FBQUEsOEJBQ0k7QUFDSSxpQkFBUyxFQUFDLGFBRGQ7QUFFSSxhQUFLLEVBQUMsSUFGVjtBQUdJLGNBQU0sRUFBQyxJQUhYO0FBSUksZUFBTyxFQUFDLFdBSlo7QUFLSSxhQUFLLEVBQUU7QUFBRU8sdUJBQWEsRUFBRTtBQUFqQixTQUxYO0FBQUEsK0JBT0k7QUFBRyxjQUFJLEVBQUMsTUFBUjtBQUFlLGtCQUFRLEVBQUMsU0FBeEI7QUFBQSxrQ0FDQTtBQUNJLGFBQUMsRUFBQyx1SUFETjtBQUVJLGdCQUFJLEVBQUM7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURBLGVBS0E7QUFDSSxhQUFDLEVBQUMsb0pBRE47QUFFSSxnQkFBSSxFQUFDO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMQSxlQVNBO0FBQ0ksYUFBQyxFQUFDLCtJQUROO0FBRUksZ0JBQUksRUFBQztBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVEEsZUFhQTtBQUNJLGFBQUMsRUFBQyw0SkFETjtBQUVJLGdCQUFJLEVBQUM7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQTJCSTtBQUFNLGFBQUssRUFBRTtBQUFFQyxvQkFBVSxFQUFFO0FBQWQsU0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQThCSSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBOUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBa0NIOztHQWxEUWIsSztVQUM2QkMsdUQ7OztBQWlEckM7QUFFY0Qsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uNzdmMWNjYWIzOGQ0YzMwNTMwMTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBOYXYgZnJvbSAnLi4vTmF2J1xyXG5cclxuZnVuY3Rpb24gTG9naW5MYXlvdXQoeyBjaGlsZHJlbiB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxOYXYgLz5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGZvb3RlciBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBwYWRkaW5nOiAnNXJlbSAwIDNyZW0nIH19PkAyMDIxIG1hZGVieSBKRUI8L2Zvb3Rlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luTGF5b3V0O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IFVzZXJMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvVXNlckxheW91dCc7XHJcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dpbkZvcm0nO1xyXG5cclxuY29uc3QgR29vZ2xlTGluayA9IHN0eWxlZC5hYFxyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNnB4IDE2cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gXHJcblxyXG5mdW5jdGlvbiBsb2dpbigpIHtcclxuICAgIGNvbnN0IHsgbG9nSW5Eb25lLCBsb2dJbkVycm9yIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYobG9nSW5Eb25lKSB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9naW4gcGFnZSAtIOuhnOq3uOyduCDsmYTro4xcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2xvZ0luRG9uZV0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYobG9nSW5FcnJvcikge1xyXG4gICAgICAgICAgICBhbGVydChsb2dJbkVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbbG9nSW5FcnJvcl0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFVzZXJMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxHb29nbGVMaW5rIGhyZWY9XCJodHRwOi8vbG9jYWxob3N0OjUwMDAvYXV0aC9nb29nbGVcIj5cclxuICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmdJY29uLXVzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjUgMjVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGcgZmlsbD1cIm5vbmVcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTIwLjY2IDEyLjY5M2MwLS42MDMtLjA1NC0xLjE4Mi0uMTU1LTEuNzM4SDEyLjV2My4yODdoNC41NzVhMy45MSAzLjkxIDAgMCAxLTEuNjk3IDIuNTY2djIuMTMzaDIuNzQ3YzEuNjA4LTEuNDggMi41MzUtMy42NSAyLjUzNS02LjI0elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjNDI4NUY0XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTIuNSAyMWMyLjI5NSAwIDQuMjItLjc2IDUuNjI1LTIuMDZsLTIuNzQ3LTIuMTMyYy0uNzYuNTEtMS43MzQuODEtMi44NzguODEtMi4yMTQgMC00LjA4OC0xLjQ5NC00Ljc1Ni0zLjUwM2gtMi44NHYyLjIwMkE4LjQ5OCA4LjQ5OCAwIDAgMCAxMi41IDIxelwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjMzRBODUzXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNy43NDQgMTQuMTE1Yy0uMTctLjUxLS4yNjctMS4wNTUtLjI2Ny0xLjYxNXMuMDk3LTEuMTA1LjI2Ny0xLjYxNVY4LjY4M2gtMi44NEE4LjQ4OCA4LjQ4OCAwIDAgMCA0IDEyLjVjMCAxLjM3Mi4zMjggMi42Ny45MDQgMy44MTdsMi44NC0yLjIwMnpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0ZCQkMwNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEyLjUgNy4zOGMxLjI0OCAwIDIuMzY4LjQzIDMuMjUgMS4yNzJsMi40MzctMi40MzhDMTYuNzE1IDQuODQyIDE0Ljc5IDQgMTIuNSA0YTguNDk3IDguNDk3IDAgMCAwLTcuNTk2IDQuNjgzbDIuODQgMi4yMDJjLjY2OC0yLjAxIDIuNTQyLTMuNTA0IDQuNzU2LTMuNTA0elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRUE0MzM1XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luTGVmdDogJzVweCcgfX0+U2lnbiBpbiB3aXRoIEdvb2dsZTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9Hb29nbGVMaW5rPlxyXG4gICAgICAgICAgICA8TG9naW5Gb3JtIC8+XHJcbiAgICAgICAgPC9Vc2VyTGF5b3V0PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9naW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=