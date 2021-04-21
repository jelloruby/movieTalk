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
/* harmony import */ var _components_layout_MyPageLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/MyPageLayout */ "./components/layout/MyPageLayout.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\codingtime\\movieBox\\front\\pages\\myPage.js",
    _s = $RefreshSig$();






var UserInfoWrap = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "myPage__UserInfoWrap",
  componentId: "sc-1xywmbf-0"
})(["width:100%;position:absolute;top:225px;left:100px;"]);
_c = UserInfoWrap;
var UserImage = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "myPage__UserImage",
  componentId: "sc-1xywmbf-1"
})(["width:150px;height:150px;border-radius:50%;background:red;"]);
_c2 = UserImage;
var UserInfo = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "myPage__UserInfo",
  componentId: "sc-1xywmbf-2"
})(["width:700px;position:absolute;top:30px;left:200px"]);
_c3 = UserInfo;
var NumRelatedUser = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "myPage__NumRelatedUser",
  componentId: "sc-1xywmbf-3"
})(["margin-top:25px;& > div{display:inline-block;}"]);
_c4 = NumRelatedUser;
var FollowBtn = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "myPage__FollowBtn",
  componentId: "sc-1xywmbf-4"
})(["position:absolute;top:0;right:0;"]);
_c5 = FollowBtn;

function myPage() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_layout_MyPageLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      style: {
        height: '300px',
        background: 'gray',
        position: 'relative'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(UserInfoWrap, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(UserImage, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(UserInfo, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            style: {
              fontSize: '2rem'
            },
            children: "\uB2C9\uB124\uC784"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(NumRelatedUser, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
              children: "follwer \uC218"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
              children: "follwing \uC218"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
              children: "\uB9AC\uBDF0 \uC218"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(FollowBtn, {
            children: "follow \uBC84\uD2BC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 9
  }, this);
}

_s(myPage, "9V1uf3383/tS6kXOMMR8c8sBgP4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

/* harmony default export */ __webpack_exports__["default"] = (myPage);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "UserInfoWrap");
$RefreshReg$(_c2, "UserImage");
$RefreshReg$(_c3, "UserInfo");
$RefreshReg$(_c4, "NumRelatedUser");
$RefreshReg$(_c5, "FollowBtn");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbXlQYWdlLmpzIl0sIm5hbWVzIjpbIlVzZXJJbmZvV3JhcCIsInN0eWxlZCIsImRpdiIsIlVzZXJJbWFnZSIsIlVzZXJJbmZvIiwiTnVtUmVsYXRlZFVzZXIiLCJGb2xsb3dCdG4iLCJteVBhZ2UiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsInBvc2l0aW9uIiwiZm9udFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwwREFBbEI7S0FBTUYsWTtBQU9OLElBQU1HLFNBQVMsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxrRUFBZjtNQUFNQyxTO0FBT04sSUFBTUMsUUFBUSxHQUFHSCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHlEQUFkO01BQU1FLFE7QUFPTixJQUFNQyxjQUFjLEdBQUdKLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsc0RBQXBCO01BQU1HLGM7QUFRTixJQUFNQyxTQUFTLEdBQUdMLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsd0NBQWY7TUFBTUksUzs7QUFNTixTQUFTQyxNQUFULEdBQWtCO0FBQUE7O0FBQUEscUJBQ0NDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBRFo7QUFBQSxNQUNOQyxFQURNLGdCQUNOQSxFQURNOztBQUlkLHNCQUNJLHFFQUFDLHVFQUFEO0FBQUEsMkJBQ0k7QUFBSyxXQUFLLEVBQUU7QUFBRUMsY0FBTSxFQUFFLE9BQVY7QUFBbUJDLGtCQUFVLEVBQUUsTUFBL0I7QUFBdUNDLGdCQUFRLEVBQUU7QUFBakQsT0FBWjtBQUFBLDZCQUNJLHFFQUFDLFlBQUQ7QUFBQSxnQ0FDSSxxRUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSSxxRUFBQyxRQUFEO0FBQUEsa0NBQ0k7QUFBSyxpQkFBSyxFQUFFO0FBQUVDLHNCQUFRLEVBQUU7QUFBWixhQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUkscUVBQUMsY0FBRDtBQUFBLG9DQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkosZUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkosZUFPSSxxRUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBa0JIOztHQXRCUVIsTTtVQUNVQyx1RDs7O0FBdUJKRCxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9teVBhZ2UuOGRhMTFkYTNlMmRkNDdkYTRjYTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgTXlQYWdlTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L015UGFnZUxheW91dCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgVXNlckluZm9XcmFwID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMjVweDtcclxuICAgIGxlZnQ6IDEwMHB4O1xyXG5gXHJcblxyXG5jb25zdCBVc2VySW1hZ2UgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6IHJlZDtcclxuYFxyXG5cclxuY29uc3QgVXNlckluZm8gPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDcwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzMHB4O1xyXG4gICAgbGVmdDogMjAwcHhcclxuYFxyXG5cclxuY29uc3QgTnVtUmVsYXRlZFVzZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuXHJcbiAgICAmID4gZGl2IHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbmBcclxuXHJcbmNvbnN0IEZvbGxvd0J0biA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuYFxyXG5cclxuZnVuY3Rpb24gbXlQYWdlKCkge1xyXG4gICAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TXlQYWdlTGF5b3V0PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzMwMHB4JywgYmFja2dyb3VuZDogJ2dyYXknLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cclxuICAgICAgICAgICAgICAgIDxVc2VySW5mb1dyYXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFVzZXJJbWFnZT48L1VzZXJJbWFnZT5cclxuICAgICAgICAgICAgICAgICAgICA8VXNlckluZm8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6ICcycmVtJyB9fT7ri4nrhKTsnoQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE51bVJlbGF0ZWRVc2VyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5mb2xsd2VyIOyImDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5mb2xsd2luZyDsiJg8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+66as67ewIOyImDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L051bVJlbGF0ZWRVc2VyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9sbG93QnRuPmZvbGxvdyDrsoTtirw8L0ZvbGxvd0J0bj5cclxuICAgICAgICAgICAgICAgICAgICA8L1VzZXJJbmZvPlxyXG4gICAgICAgICAgICAgICAgPC9Vc2VySW5mb1dyYXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTXlQYWdlTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBteVBhZ2VcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==