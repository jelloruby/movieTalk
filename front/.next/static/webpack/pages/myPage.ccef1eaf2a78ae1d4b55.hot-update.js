webpackHotUpdate_N_E("pages/myPage",{

/***/ "./pages/myPage.js":
/*!*************************!*\
  !*** ./pages/myPage.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_layout_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/AppLayout */ "./components/layout/AppLayout.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\codingtime\\movieBox\\front\\pages\\myPage.js",
    _s = $RefreshSig$();






var UserInfo = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "myPage__UserInfo",
  componentId: "sc-1xywmbf-0"
})(["position:absolute;top:0;"]);
_c = UserInfo;
var UserImage = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img.withConfig({
  displayName: "myPage__UserImage",
  componentId: "sc-1xywmbf-1"
})(["width:150px;height:150px;border-radius:50%;backround:red;"]);
_c2 = UserImage;
var NickName = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "myPage__NickName",
  componentId: "sc-1xywmbf-2"
})(["&:nth-child(2){color:red;}"]);
_c3 = NickName;

function myPage() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_layout_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      style: {
        position: 'relative',
        marginLeft: '200px'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        style: {
          height: '400px',
          background: 'gray',
          opacity: '.2'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(UserInfo, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(UserImage, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(NickName, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            children: "1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            children: "2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          children: "follw \uC218"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          children: "\uB9AC\uBDF0 \uC218"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          children: "follow \uBC84\uD2BC"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }, this);
}

_s(myPage, "9V1uf3383/tS6kXOMMR8c8sBgP4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

/* harmony default export */ __webpack_exports__["default"] = (myPage);

var _c, _c2, _c3;

$RefreshReg$(_c, "UserInfo");
$RefreshReg$(_c2, "UserImage");
$RefreshReg$(_c3, "NickName");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbXlQYWdlLmpzIl0sIm5hbWVzIjpbIlVzZXJJbmZvIiwic3R5bGVkIiwiZGl2IiwiVXNlckltYWdlIiwiaW1nIiwiTmlja05hbWUiLCJteVBhZ2UiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwicG9zaXRpb24iLCJtYXJnaW5MZWZ0IiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsIm9wYWNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxnQ0FBZDtLQUFNRixRO0FBS04sSUFBTUcsU0FBUyxHQUFHRix5REFBTSxDQUFDRyxHQUFWO0FBQUE7QUFBQTtBQUFBLGlFQUFmO01BQU1ELFM7QUFPTixJQUFNRSxRQUFRLEdBQUdKLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsa0NBQWQ7TUFBTUcsUTs7QUFNTixTQUFTQyxNQUFULEdBQWtCO0FBQUE7O0FBQUEscUJBQ0NDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBRFo7QUFBQSxNQUNOQyxFQURNLGdCQUNOQSxFQURNOztBQUlkLHNCQUNJLHFFQUFDLG9FQUFEO0FBQUEsMkJBQ0k7QUFBSyxXQUFLLEVBQUU7QUFBRUMsZ0JBQVEsRUFBRSxVQUFaO0FBQXdCQyxrQkFBVSxFQUFFO0FBQXBDLE9BQVo7QUFBQSw4QkFDSTtBQUFLLGFBQUssRUFBRTtBQUFFQyxnQkFBTSxFQUFFLE9BQVY7QUFBbUJDLG9CQUFVLEVBQUUsTUFBL0I7QUFBdUNDLGlCQUFPLEVBQUU7QUFBaEQ7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSSxxRUFBQyxRQUFEO0FBQUEsZ0NBQ0kscUVBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUkscUVBQUMsUUFBRDtBQUFBLGtDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkosZUFPSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQSixlQVFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWlCSDs7R0FyQlFULE07VUFDVUMsdUQ7OztBQXNCSkQscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbXlQYWdlLmNjZWYxZWFmMmE3OGFlMWQ0YjU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEFwcExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9BcHBMYXlvdXQnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IFVzZXJJbmZvID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuYFxyXG5cclxuY29uc3QgVXNlckltYWdlID0gc3R5bGVkLmltZ2BcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrcm91bmQ6IHJlZDtcclxuYFxyXG5cclxuY29uc3QgTmlja05hbWUgPSBzdHlsZWQuZGl2YFxyXG4gICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICB9XHJcbmBcclxuXHJcbmZ1bmN0aW9uIG15UGFnZSgpIHtcclxuICAgIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFwcExheW91dD5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgbWFyZ2luTGVmdDogJzIwMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnNDAwcHgnLCBiYWNrZ3JvdW5kOiAnZ3JheScsIG9wYWNpdHk6ICcuMicgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8VXNlckluZm8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFVzZXJJbWFnZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOaWNrTmFtZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4xPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+MjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmlja05hbWU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5mb2xsdyDsiJg8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PuumrOu3sCDsiJg8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PmZvbGxvdyDrsoTtirw8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvVXNlckluZm8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBteVBhZ2VcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==