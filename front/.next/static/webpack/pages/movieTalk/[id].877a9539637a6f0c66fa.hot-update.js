webpackHotUpdate_N_E("pages/movieTalk/[id]",{

/***/ "./components/layout/AppLayout.js":
false,

/***/ "./components/layout/SubPageLayout.js":
/*!********************************************!*\
  !*** ./components/layout/SubPageLayout.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Nav */ "./components/Nav.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\codingtime\\movieBox\\front\\components\\layout\\SubPageLayout.js";




function SubPageLayout(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      style: {
        marginLeft: '200px',
        boxSizing: 'border-box'
      },
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

_c = SubPageLayout;
;
/* harmony default export */ __webpack_exports__["default"] = (SubPageLayout);

var _c;

$RefreshReg$(_c, "SubPageLayout");

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

/***/ "./pages/movieTalk/[id].js":
/*!*********************************!*\
  !*** ./pages/movieTalk/[id].js ***!
  \*********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout_SubPageLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout/SubPageLayout */ "./components/layout/SubPageLayout.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./pages/config.js");
/* harmony import */ var _reducers_review__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reducers/review */ "./reducers/review.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\codingtime\\movieBox\\front\\pages\\movieTalk\\[id].js",
    _s = $RefreshSig$();









function createMovieTalk(props) {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var movieDetail = props.movieDetail;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      Review = _useState[0],
      setReview = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!(me && me.email)) {
      var didDelete = confirm('로그인이 필요합니다. 로그인 화면으로 이동하시겠습니까?');

      if (didDelete) {
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/login');
      } else {
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.back();
      }
    }

    ;
  }, [me && me.id]);

  var onReviewHandler = function onReviewHandler(e) {
    setReview(e.currentTarget.value);
  };

  var handleSubmitReview = function handleSubmitReview(e) {
    e.preventDefault();
    var body = {
      writer: me._id,
      iamge: "".concat(_config__WEBPACK_IMPORTED_MODULE_4__["imageURL"], "/original").concat(movieDetail.poster_path),
      name: me.name,
      rating: 5,
      text: Review
    };
    dispatch(Object(_reducers_review__WEBPACK_IMPORTED_MODULE_5__["addReviewRequestAction"])(body));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_layout_SubPageLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      style: {
        marginLeft: '200px'
      },
      children: [me && me.name && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        children: [me.name, "\uB2D8\uC758 \uB9AC\uBDF0"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 25
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        children: "\uD3C9\uC810"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
          src: "".concat(_config__WEBPACK_IMPORTED_MODULE_4__["imageURL"], "/w200/").concat(movieDetail.poster_path),
          style: {
            borderRadius: '5px'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        children: [movieDetail.title, "(", movieDetail.release_date.slice(0, 4), ")"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("form", {
        onSubmit: handleSubmitReview,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("textarea", {
          placeholder: "\uC601\uD654 \uB9AC\uBDF0\uB97C \uC801\uC5B4\uC8FC\uC138\uC694.",
          onChange: onReviewHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("button", {
          type: "submit",
          children: "\uC81C\uCD9C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 9
  }, this);
}

_s(createMovieTalk, "7p7VFhsJypGOEvMK/ozrqtK+w6o=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (createMovieTalk);

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvU3ViUGFnZUxheW91dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW92aWVUYWxrLy5qcyJdLCJuYW1lcyI6WyJTdWJQYWdlTGF5b3V0IiwiY2hpbGRyZW4iLCJtYXJnaW5MZWZ0IiwiYm94U2l6aW5nIiwiY3JlYXRlTW92aWVUYWxrIiwicHJvcHMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwibW92aWVEZXRhaWwiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwidXNlU3RhdGUiLCJSZXZpZXciLCJzZXRSZXZpZXciLCJ1c2VFZmZlY3QiLCJlbWFpbCIsImRpZERlbGV0ZSIsImNvbmZpcm0iLCJSb3V0ZXIiLCJwdXNoIiwiYmFjayIsImlkIiwib25SZXZpZXdIYW5kbGVyIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdFJldmlldyIsInByZXZlbnREZWZhdWx0IiwiYm9keSIsIndyaXRlciIsIl9pZCIsImlhbWdlIiwiaW1hZ2VVUkwiLCJwb3N0ZXJfcGF0aCIsIm5hbWUiLCJyYXRpbmciLCJ0ZXh0IiwiYWRkUmV2aWV3UmVxdWVzdEFjdGlvbiIsImJvcmRlclJhZGl1cyIsInRpdGxlIiwicmVsZWFzZV9kYXRlIiwic2xpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBRUEsU0FBU0EsYUFBVCxPQUFxQztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUNqQyxzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQUssV0FBSyxFQUFFO0FBQUVDLGtCQUFVLEVBQUUsT0FBZDtBQUF1QkMsaUJBQVMsRUFBRTtBQUFsQyxPQUFaO0FBQUEsZ0JBQ01GO0FBRE47QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7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QTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUtJO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBMEJIOztHQS9EUXBCLGU7VUFDWUcsdUQsRUFHRkUsdUQ7OztBQTJEbEI7O0FBWWNMLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21vdmllVGFsay9baWRdLjg3N2E5NTM5NjM3YTZmMGM2NmZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBOYXYgZnJvbSAnLi4vTmF2J1xyXG5cclxuZnVuY3Rpb24gU3ViUGFnZUxheW91dCh7IGNoaWxkcmVuIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPE5hdiAvPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcyMDBweCcsIGJveFNpemluZzogJ2JvcmRlci1ib3gnIH19PlxyXG4gICAgICAgICAgICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3ViUGFnZUxheW91dFxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCBTdWJQYWdlTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L1N1YlBhZ2VMYXlvdXQnO1xyXG5pbXBvcnQgeyBpbWFnZVVSTCB9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7IGdldE1vdmllRGV0YWlsRnJvbVRNREIgfSBmcm9tICcuLi9hcGkvYXBpJztcclxuaW1wb3J0IHsgYWRkUmV2aWV3UmVxdWVzdEFjdGlvbiB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3Jldmlldyc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNb3ZpZVRhbGsocHJvcHMpIHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBjb25zdCB7IG1vdmllRGV0YWlsIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gICAgY29uc3QgW1Jldmlldywgc2V0UmV2aWV3XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghKG1lICYmIG1lLmVtYWlsKSkge1xyXG4gICAgICAgICAgICBjb25zdCBkaWREZWxldGUgPSBjb25maXJtKCfroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukLiDroZzqt7jsnbgg7ZmU66m07Jy866GcIOydtOuPme2VmOyLnOqyoOyKteuLiOq5jD8nKTtcclxuICAgICAgICAgICAgaWYoZGlkRGVsZXRlKSB7XHJcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBSb3V0ZXIuYmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFttZSAmJiBtZS5pZF0pO1xyXG5cclxuXHJcbiAgICBjb25zdCBvblJldmlld0hhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldFJldmlldyhlLmN1cnJlbnRUYXJnZXQudmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0UmV2aWV3ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgd3JpdGVyOiBtZS5faWQsXHJcbiAgICAgICAgICAgIGlhbWdlOiBgJHtpbWFnZVVSTH0vb3JpZ2luYWwke21vdmllRGV0YWlsLnBvc3Rlcl9wYXRofWAsXHJcbiAgICAgICAgICAgIG5hbWU6IG1lLm5hbWUsXHJcbiAgICAgICAgICAgIHJhdGluZzogNSxcclxuICAgICAgICAgICAgdGV4dDogUmV2aWV3XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZGlzcGF0Y2goYWRkUmV2aWV3UmVxdWVzdEFjdGlvbihib2R5KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U3ViUGFnZUxheW91dD5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMjAwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgeyAobWUgJiYgbWUubmFtZSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e21lLm5hbWV964uY7J2YIOumrOu3sDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAg7Y+J7KCQXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake2ltYWdlVVJMfS93MjAwLyR7bW92aWVEZXRhaWwucG9zdGVyX3BhdGh9YH0gc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiAnNXB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2Pnttb3ZpZURldGFpbC50aXRsZX0oe21vdmllRGV0YWlsLnJlbGVhc2VfZGF0ZS5zbGljZSgwLCA0KX0pPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0UmV2aWV3fT5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLsmIHtmZQg66as67ew66W8IOyggeyWtOyjvOyEuOyalC5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25SZXZpZXdIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPuygnOy2nDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9TdWJQYWdlTGF5b3V0PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHF1ZXJ5IH0pIHtcclxuICAgIGNvbnN0IG1vdmllRGV0YWlsID0gYXdhaXQgZ2V0TW92aWVEZXRhaWxGcm9tVE1EQihxdWVyeS5pZCk7XHJcbiAgICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgbW92aWVEZXRhaWw6IG1vdmllRGV0YWlsLFxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1vdmllVGFsaztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==