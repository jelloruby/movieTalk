webpackHotUpdate_N_E("pages/movieTalk/[id]",{

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
/* harmony import */ var _components_layout_AppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout/AppLayout */ "./components/layout/AppLayout.js");
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
      iamge: "".concat(_config__WEBPACK_IMPORTED_MODULE_4__["imageURL"], "/original/").concat(movieDetail.poster_path),
      name: me.name,
      rating: 5,
      text: Review
    };
    dispatch(Object(_reducers_review__WEBPACK_IMPORTED_MODULE_5__["addReviewRequestAction"])(body));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_layout_AppLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW92aWVUYWxrLy5qcyJdLCJuYW1lcyI6WyJjcmVhdGVNb3ZpZVRhbGsiLCJwcm9wcyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJtb3ZpZURldGFpbCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJ1c2VTdGF0ZSIsIlJldmlldyIsInNldFJldmlldyIsInVzZUVmZmVjdCIsImVtYWlsIiwiZGlkRGVsZXRlIiwiY29uZmlybSIsIlJvdXRlciIsInB1c2giLCJiYWNrIiwiaWQiLCJvblJldmlld0hhbmRsZXIiLCJlIiwiY3VycmVudFRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0UmV2aWV3IiwicHJldmVudERlZmF1bHQiLCJib2R5Iiwid3JpdGVyIiwiX2lkIiwiaWFtZ2UiLCJpbWFnZVVSTCIsInBvc3Rlcl9wYXRoIiwibmFtZSIsInJhdGluZyIsInRleHQiLCJhZGRSZXZpZXdSZXF1ZXN0QWN0aW9uIiwibWFyZ2luTGVmdCIsImJvcmRlclJhZGl1cyIsInRpdGxlIiwicmVsZWFzZV9kYXRlIiwic2xpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7OztBQUVBLFNBQVNBLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQWdDO0FBQUE7O0FBQzVCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFENEIsTUFHcEJDLFdBSG9CLEdBR0pILEtBSEksQ0FHcEJHLFdBSG9COztBQUFBLHFCQUliQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUpFO0FBQUEsTUFJcEJDLEVBSm9CLGdCQUlwQkEsRUFKb0I7O0FBQUEsa0JBTUFDLHNEQUFRLENBQUMsRUFBRCxDQU5SO0FBQUEsTUFNckJDLE1BTnFCO0FBQUEsTUFNYkMsU0FOYTs7QUFRNUJDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUksRUFBRUosRUFBRSxJQUFJQSxFQUFFLENBQUNLLEtBQVgsQ0FBSixFQUF1QjtBQUNuQixVQUFNQyxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxnQ0FBRCxDQUF6Qjs7QUFDQSxVQUFHRCxTQUFILEVBQWM7QUFDVkUsMERBQU0sQ0FBQ0MsSUFBUCxDQUFZLFFBQVo7QUFDSCxPQUZELE1BRU87QUFDSEQsMERBQU0sQ0FBQ0UsSUFBUDtBQUNIO0FBQ0o7O0FBQUE7QUFDSixHQVRRLEVBU04sQ0FBQ1YsRUFBRSxJQUFJQSxFQUFFLENBQUNXLEVBQVYsQ0FUTSxDQUFUOztBQVlBLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzNCVixhQUFTLENBQUNVLENBQUMsQ0FBQ0MsYUFBRixDQUFnQkMsS0FBakIsQ0FBVDtBQUNILEdBRkQ7O0FBSUEsTUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDSCxDQUFELEVBQU87QUFDOUJBLEtBQUMsQ0FBQ0ksY0FBRjtBQUNBLFFBQU1DLElBQUksR0FBRztBQUNUQyxZQUFNLEVBQUVuQixFQUFFLENBQUNvQixHQURGO0FBRVRDLFdBQUssWUFBS0MsZ0RBQUwsdUJBQTBCMUIsV0FBVyxDQUFDMkIsV0FBdEMsQ0FGSTtBQUdUQyxVQUFJLEVBQUV4QixFQUFFLENBQUN3QixJQUhBO0FBSVRDLFlBQU0sRUFBRSxDQUpDO0FBS1RDLFVBQUksRUFBRXhCO0FBTEcsS0FBYjtBQVFBUixZQUFRLENBQUNpQywrRUFBc0IsQ0FBQ1QsSUFBRCxDQUF2QixDQUFSO0FBQ0gsR0FYRDs7QUFhQSxzQkFDSSxxRUFBQyxvRUFBRDtBQUFBLDJCQUNJO0FBQUssV0FBSyxFQUFFO0FBQUVVLGtCQUFVLEVBQUU7QUFBZCxPQUFaO0FBQUEsaUJBQ081QixFQUFFLElBQUlBLEVBQUUsQ0FBQ3dCLElBQVYsaUJBRU07QUFBQSxtQkFBTXhCLEVBQUUsQ0FBQ3dCLElBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSFosZUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5KLGVBU0k7QUFBQSwrQkFDSTtBQUFLLGFBQUcsWUFBS0YsZ0RBQUwsbUJBQXNCMUIsV0FBVyxDQUFDMkIsV0FBbEMsQ0FBUjtBQUF5RCxlQUFLLEVBQUU7QUFBRU0sd0JBQVksRUFBRTtBQUFoQjtBQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRKLGVBWUk7QUFBQSxtQkFBTWpDLFdBQVcsQ0FBQ2tDLEtBQWxCLE9BQTBCbEMsV0FBVyxDQUFDbUMsWUFBWixDQUF5QkMsS0FBekIsQ0FBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsQ0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWkosZUFhSTtBQUFNLGdCQUFRLEVBQUVoQixrQkFBaEI7QUFBQSxnQ0FDSTtBQUNJLHFCQUFXLEVBQUMsaUVBRGhCO0FBRUksa0JBQVEsRUFBRUo7QUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBS0k7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEwQkg7O0dBL0RRcEIsZTtVQUNZRyx1RCxFQUdGRSx1RDs7O0FBMkRsQjs7QUFZY0wsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbW92aWVUYWxrL1tpZF0uYTZiOWIxYWNhZDFlN2JmNmNjMTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IEFwcExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dC9BcHBMYXlvdXQnO1xyXG5pbXBvcnQgeyBpbWFnZVVSTCB9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7IGdldE1vdmllRGV0YWlsRnJvbVRNREIgfSBmcm9tICcuLi9hcGkvYXBpJztcclxuaW1wb3J0IHsgYWRkUmV2aWV3UmVxdWVzdEFjdGlvbiB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3Jldmlldyc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNb3ZpZVRhbGsocHJvcHMpIHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBjb25zdCB7IG1vdmllRGV0YWlsIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gICAgY29uc3QgW1Jldmlldywgc2V0UmV2aWV3XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghKG1lICYmIG1lLmVtYWlsKSkge1xyXG4gICAgICAgICAgICBjb25zdCBkaWREZWxldGUgPSBjb25maXJtKCfroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukLiDroZzqt7jsnbgg7ZmU66m07Jy866GcIOydtOuPme2VmOyLnOqyoOyKteuLiOq5jD8nKTtcclxuICAgICAgICAgICAgaWYoZGlkRGVsZXRlKSB7XHJcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBSb3V0ZXIuYmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFttZSAmJiBtZS5pZF0pO1xyXG5cclxuXHJcbiAgICBjb25zdCBvblJldmlld0hhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldFJldmlldyhlLmN1cnJlbnRUYXJnZXQudmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0UmV2aWV3ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgd3JpdGVyOiBtZS5faWQsXHJcbiAgICAgICAgICAgIGlhbWdlOiBgJHtpbWFnZVVSTH0vb3JpZ2luYWwvJHttb3ZpZURldGFpbC5wb3N0ZXJfcGF0aH1gLFxyXG4gICAgICAgICAgICBuYW1lOiBtZS5uYW1lLFxyXG4gICAgICAgICAgICByYXRpbmc6IDUsXHJcbiAgICAgICAgICAgIHRleHQ6IFJldmlld1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKGFkZFJldmlld1JlcXVlc3RBY3Rpb24oYm9keSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFwcExheW91dD5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMjAwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgeyAobWUgJiYgbWUubmFtZSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e21lLm5hbWV964uY7J2YIOumrOu3sDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAg7Y+J7KCQXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake2ltYWdlVVJMfS93MjAwLyR7bW92aWVEZXRhaWwucG9zdGVyX3BhdGh9YH0gc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiAnNXB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2Pnttb3ZpZURldGFpbC50aXRsZX0oe21vdmllRGV0YWlsLnJlbGVhc2VfZGF0ZS5zbGljZSgwLCA0KX0pPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0UmV2aWV3fT5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLsmIHtmZQg66as67ew66W8IOyggeyWtOyjvOyEuOyalC5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25SZXZpZXdIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPuygnOy2nDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcXVlcnkgfSkge1xyXG4gICAgY29uc3QgbW92aWVEZXRhaWwgPSBhd2FpdCBnZXRNb3ZpZURldGFpbEZyb21UTURCKHF1ZXJ5LmlkKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBtb3ZpZURldGFpbDogbW92aWVEZXRhaWwsXHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTW92aWVUYWxrO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9