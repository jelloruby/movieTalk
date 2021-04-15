webpackHotUpdate_N_E("pages/signup",{

/***/ "./components/layout/AppLayout.js":
false,

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout_UserLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/UserLayout */ "./components/layout/UserLayout.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\codingtime\\movieBox\\front\\pages\\signup.js",
    _s = $RefreshSig$();








function signup() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user;
  }),
      signUpDone = _useSelector.signUpDone,
      signUpError = _useSelector.signUpError;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (signUpDone) {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/login');
      console.log("회원가입 완료");
    }
  }, [signUpDone]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (signUpError) {
      alert(signUpError);
    }
  }, [signUpError]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      Email = _useState[0],
      setEmail = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      Name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      Password = _useState3[0],
      setPassword = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      ConfirmPassword = _useState4[0],
      setConfirmPassword = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      PasswordError = _useState5[0],
      setPasswordError = _useState5[1];

  var onEmailHandler = function onEmailHandler(e) {
    setEmail(e.currentTarget.value);
  };

  var onNameHandler = function onNameHandler(e) {
    setName(e.currentTarget.value);
  };

  var onPasswordHandler = function onPasswordHandler(e) {
    setPassword(e.currentTarget.value);
  };

  var onConfirmPasswordHandler = function onConfirmPasswordHandler(e) {
    setConfirmPassword(e.currentTarget.value);
  };

  var onSubmitHandler = function onSubmitHandler(e) {
    e.preventDefault();

    if (Password !== ConfirmPassword) {
      return setPasswordError(true);
    }

    var body = {
      email: Email,
      name: Name,
      password: Password
    };
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["SIGN_UP_REQUEST"],
      data: body
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_layout_UserLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("form", {
      onSubmit: onSubmitHandler,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("label", {
        children: "\uC774\uBA54\uC77C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("input", {
        type: "email",
        name: "email",
        value: Email,
        onChange: onEmailHandler
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("label", {
        children: "\uC774\uB984"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("input", {
        type: "name",
        name: "name",
        value: Name,
        onChange: onNameHandler
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("label", {
        children: "\uBE44\uBC00\uBC88\uD638"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("input", {
        type: "password",
        name: "password",
        value: Password,
        onChange: onPasswordHandler
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("label", {
        children: "\uBE44\uBC00\uBC88\uD638\uD655\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("input", {
        type: "password",
        name: "password",
        value: ConfirmPassword,
        onChange: onConfirmPasswordHandler
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("button", {
        type: "submit",
        className: "btn login-btn",
        children: "\uD68C\uC6D0\uAC00\uC785"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 9
  }, this);
}

_s(signup, "zcHtfXhLINPmic5y8kLGDuPKWYs=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

/* harmony default export */ __webpack_exports__["default"] = (signup);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbInNpZ251cCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsInNpZ25VcERvbmUiLCJzaWduVXBFcnJvciIsInVzZUVmZmVjdCIsIlJvdXRlciIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiYWxlcnQiLCJ1c2VTdGF0ZSIsIkVtYWlsIiwic2V0RW1haWwiLCJOYW1lIiwic2V0TmFtZSIsIlBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJDb25maXJtUGFzc3dvcmQiLCJzZXRDb25maXJtUGFzc3dvcmQiLCJQYXNzd29yZEVycm9yIiwic2V0UGFzc3dvcmRFcnJvciIsIm9uRW1haWxIYW5kbGVyIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsIm9uTmFtZUhhbmRsZXIiLCJvblBhc3N3b3JkSGFuZGxlciIsIm9uQ29uZmlybVBhc3N3b3JkSGFuZGxlciIsIm9uU3VibWl0SGFuZGxlciIsInByZXZlbnREZWZhdWx0IiwiYm9keSIsImVtYWlsIiwibmFtZSIsInBhc3N3b3JkIiwidHlwZSIsIlNJR05fVVBfUkVRVUVTVCIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUEsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUNkLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRGMscUJBRXNCQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUZqQztBQUFBLE1BRU5DLFVBRk0sZ0JBRU5BLFVBRk07QUFBQSxNQUVNQyxXQUZOLGdCQUVNQSxXQUZOOztBQUlkQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFHRixVQUFILEVBQWU7QUFDWEcsd0RBQU0sQ0FBQ0MsSUFBUCxDQUFZ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LEVBQUMsVUFGVDtBQUdJLGFBQUssRUFBRVYsUUFIWDtBQUlJLGdCQUFRLEVBQUVXO0FBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhCSixlQXNCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXRCSixlQXVCSTtBQUNJLFlBQUksRUFBQyxVQURUO0FBRUksWUFBSSxFQUFDLFVBRlQ7QUFHSSxhQUFLLEVBQUVULGVBSFg7QUFJSSxnQkFBUSxFQUFFVTtBQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F2QkosZUE2Qkk7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixpQkFBUyxFQUFDLGVBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBN0JKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXFDSDs7R0EvRlEvQixNO1VBQ1lFLHVELEVBQ21CQyx1RDs7O0FBK0Z6QkgscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLmVjZjgxNWYzMzBhYWRiMDI2YjQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCBVc2VyTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L1VzZXJMYXlvdXQnO1xyXG5pbXBvcnQgeyBTSUdOX1VQX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJ1xyXG5cclxuZnVuY3Rpb24gc2lnbnVwKCkge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyBzaWduVXBEb25lLCBzaWduVXBFcnJvciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKHNpZ25VcERvbmUpIHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIu2ajOybkOqwgOyehSDsmYTro4xcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3NpZ25VcERvbmVdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKHNpZ25VcEVycm9yKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KHNpZ25VcEVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbc2lnblVwRXJyb3JdKTtcclxuXHJcbiAgICBjb25zdCBbRW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW05hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbUGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW0NvbmZpcm1QYXNzd29yZCwgc2V0Q29uZmlybVBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW1Bhc3N3b3JkRXJyb3IsIHNldFBhc3N3b3JkRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIFxyXG4gICAgY29uc3Qgb25FbWFpbEhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldEVtYWlsKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3Qgb25OYW1lSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0TmFtZShlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuICBcclxuICAgIGNvbnN0IG9uUGFzc3dvcmRIYW5kbGVyID0gKGUpID0+IHtcclxuICAgICAgICBzZXRQYXNzd29yZChlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuICBcclxuICAgIGNvbnN0IG9uQ29uZmlybVBhc3N3b3JkSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0Q29uZmlybVBhc3N3b3JkKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3Qgb25TdWJtaXRIYW5kbGVyID0gKGUpID0+IHsgIFxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaWYoUGFzc3dvcmQgIT09IENvbmZpcm1QYXNzd29yZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0UGFzc3dvcmRFcnJvcih0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBib2R5ID0ge1xyXG4gICAgICAgICAgICBlbWFpbDogRW1haWwsXHJcbiAgICAgICAgICAgIG5hbWU6IE5hbWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBQYXNzd29yZCxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOiBib2R5XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFVzZXJMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdEhhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPuydtOuplOydvDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkVtYWlsSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+7J2066aEPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e05hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uTmFtZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPuu5hOuwgOuyiO2YuDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblBhc3N3b3JkSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+67mE67CA67KI7Zi47ZmV7J24PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Q29uZmlybVBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNvbmZpcm1QYXNzd29yZEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGxvZ2luLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgIO2ajOybkOqwgOyehVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L1VzZXJMYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNpZ251cFxyXG4iXSwic291cmNlUm9vdCI6IiJ9