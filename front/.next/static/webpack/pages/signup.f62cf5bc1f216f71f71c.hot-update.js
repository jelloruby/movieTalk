webpackHotUpdate_N_E("pages/signup",{

/***/ "./components/SignUpForm.js":
/*!**********************************!*\
  !*** ./components/SignUpForm.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\codingtime\\movieBox\\front\\components\\SignUpForm.js",
    _templateObject,
    _s = $RefreshSig$();






var Input = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].input(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 300px;\n    border-radius: 5px;\n    padding: 15px 20px;\n    background: black;\n    border: 1px solid gray;\n    box-sizing: border-box;\n"])));
_c = Input;

function SignUpForm() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      Email = _useState[0],
      setEmail = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      Name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      Password = _useState3[0],
      setPassword = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      ConfirmPassword = _useState4[0],
      setConfirmPassword = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("form", {
    onSubmit: onSubmitHandler,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("label", {
      children: "\uC774\uBA54\uC77C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Input, {
      type: "email",
      name: "email",
      value: Email,
      onChange: onEmailHandler
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("label", {
      children: "\uC774\uB984"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Input, {
      type: "name",
      name: "name",
      value: Name,
      onChange: onNameHandler
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("label", {
      children: "\uBE44\uBC00\uBC88\uD638"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Input, {
      type: "password",
      name: "password",
      value: Password,
      onChange: onPasswordHandler
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("label", {
      children: "\uBE44\uBC00\uBC88\uD638\uD655\uC778"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Input, {
      type: "password",
      name: "password",
      value: ConfirmPassword,
      onChange: onConfirmPasswordHandler
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("button", {
      type: "submit",
      className: "btn login-btn",
      children: "\uD68C\uC6D0\uAC00\uC785"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 9
  }, this);
}

_s(SignUpForm, "dmvhLB2mX+aNiFEc3BbhqnXG+gs=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]];
});

_c2 = SignUpForm;
/* harmony default export */ __webpack_exports__["default"] = (SignUpForm);

var _c, _c2;

$RefreshReg$(_c, "Input");
$RefreshReg$(_c2, "SignUpForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWduVXBGb3JtLmpzIl0sIm5hbWVzIjpbIklucHV0Iiwic3R5bGVkIiwiaW5wdXQiLCJTaWduVXBGb3JtIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwiRW1haWwiLCJzZXRFbWFpbCIsIk5hbWUiLCJzZXROYW1lIiwiUGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsIkNvbmZpcm1QYXNzd29yZCIsInNldENvbmZpcm1QYXNzd29yZCIsIlBhc3N3b3JkRXJyb3IiLCJzZXRQYXNzd29yZEVycm9yIiwib25FbWFpbEhhbmRsZXIiLCJlIiwiY3VycmVudFRhcmdldCIsInZhbHVlIiwib25OYW1lSGFuZGxlciIsIm9uUGFzc3dvcmRIYW5kbGVyIiwib25Db25maXJtUGFzc3dvcmRIYW5kbGVyIiwib25TdWJtaXRIYW5kbGVyIiwicHJldmVudERlZmF1bHQiLCJib2R5IiwiZW1haWwiLCJuYW1lIiwicGFzc3dvcmQiLCJ0eXBlIiwiU0lHTl9VUF9SRVFVRVNUIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLEtBQUssR0FBR0MseURBQU0sQ0FBQ0MsS0FBVix3U0FBWDtLQUFNRixLOztBQVNOLFNBQVNHLFVBQVQsR0FBc0I7QUFBQTs7QUFDbEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFEa0Isa0JBR1FDLHNEQUFRLENBQUMsRUFBRCxDQUhoQjtBQUFBLE1BR1hDLEtBSFc7QUFBQSxNQUdKQyxRQUhJOztBQUFBLG1CQUlNRixzREFBUSxDQUFDLEVBQUQsQ0FKZDtBQUFBLE1BSVhHLElBSlc7QUFBQSxNQUlMQyxPQUpLOztBQUFBLG1CQUtjSixzREFBUSxDQUFDLEVBQUQsQ0FMdEI7QUFBQSxNQUtYSyxRQUxXO0FBQUEsTUFLREMsV0FMQzs7QUFBQSxtQkFNNEJOLHNEQUFRLENBQUMsRUFB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cC5mNjJjZjViYzFmMjE2ZjcxZjcxYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgeyBTSUdOX1VQX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJ1xyXG5cclxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5gXHJcblxyXG5mdW5jdGlvbiBTaWduVXBGb3JtKCkge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgXHJcbiAgICBjb25zdCBbRW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW05hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbUGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW0NvbmZpcm1QYXNzd29yZCwgc2V0Q29uZmlybVBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW1Bhc3N3b3JkRXJyb3IsIHNldFBhc3N3b3JkRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIFxyXG4gICAgY29uc3Qgb25FbWFpbEhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldEVtYWlsKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3Qgb25OYW1lSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0TmFtZShlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuICBcclxuICAgIGNvbnN0IG9uUGFzc3dvcmRIYW5kbGVyID0gKGUpID0+IHtcclxuICAgICAgICBzZXRQYXNzd29yZChlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xyXG4gICAgfTtcclxuICBcclxuICAgIGNvbnN0IG9uQ29uZmlybVBhc3N3b3JkSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0Q29uZmlybVBhc3N3b3JkKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3Qgb25TdWJtaXRIYW5kbGVyID0gKGUpID0+IHsgIFxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaWYoUGFzc3dvcmQgIT09IENvbmZpcm1QYXNzd29yZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0UGFzc3dvcmRFcnJvcih0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBib2R5ID0ge1xyXG4gICAgICAgICAgICBlbWFpbDogRW1haWwsXHJcbiAgICAgICAgICAgIG5hbWU6IE5hbWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBQYXNzd29yZCxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOiBib2R5XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0SGFuZGxlcn0+XHJcbiAgICAgICAgICAgIDxsYWJlbD7snbTrqZTsnbw8L2xhYmVsPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e0VtYWlsfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uRW1haWxIYW5kbGVyfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8bGFiZWw+7J2066aEPC9sYWJlbD5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17TmFtZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbk5hbWVIYW5kbGVyfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8bGFiZWw+67mE67CA67KI7Zi4PC9sYWJlbD5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtQYXNzd29yZH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblBhc3N3b3JkSGFuZGxlcn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGxhYmVsPuu5hOuwgOuyiO2YuO2ZleyduDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Q29uZmlybVBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ29uZmlybVBhc3N3b3JkSGFuZGxlcn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGxvZ2luLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAg7ZqM7JuQ6rCA7J6FXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnblVwRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==