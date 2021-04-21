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
      setReview = _useState[1]; // useEffect(() => {
  //     if (!(me && me.email)) {
  //         const didDelete = confirm('로그인이 필요합니다. 로그인 화면으로 이동하시겠습니까?');
  //         if(didDelete) {
  //             Router.push('/login');
  //         } else {
  //             Router.back();
  //         }
  //     };
  // }, [me && me.id]);


  var onReviewHandler = function onReviewHandler(e) {
    setReview(e.currentTarget.value);
  };

  var handleSubmitReview = function handleSubmitReview(e) {
    e.preventDefault();
    var body = {
      writer: me._id,
      name: me.name,
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
        lineNumber: 50,
        columnNumber: 25
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        children: "\uD3C9\uC810"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
          src: "".concat(_config__WEBPACK_IMPORTED_MODULE_4__["imageURL"], "/w200/").concat(movieDetail.poster_path),
          style: {
            borderRadius: '5px'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        children: [movieDetail.title, "(", movieDetail.release_date.slice(0, 4), ")"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("form", {
        onSubmit: handleSubmitReview,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("textarea", {
          placeholder: "\uC601\uD654 \uB9AC\uBDF0\uB97C \uC801\uC5B4\uC8FC\uC138\uC694.",
          onChange: onReviewHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("button", {
          type: "submit",
          children: "\uC81C\uCD9C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
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

_s(createMovieTalk, "eWQcQ3jsi7r4bPUBYGob9Id/NHI=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW92aWVUYWxrLy5qcyJdLCJuYW1lcyI6WyJjcmVhdGVNb3ZpZVRhbGsiLCJwcm9wcyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJtb3ZpZURldGFpbCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJ1c2VTdGF0ZSIsIlJldmlldyIsInNldFJldmlldyIsIm9uUmV2aWV3SGFuZGxlciIsImUiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXRSZXZpZXciLCJwcmV2ZW50RGVmYXVsdCIsImJvZHkiLCJ3cml0ZXIiLCJfaWQiLCJuYW1lIiwidGV4dCIsImFkZFJldmlld1JlcXVlc3RBY3Rpb24iLCJtYXJnaW5MZWZ0IiwiaW1hZ2VVUkwiLCJwb3N0ZXJfcGF0aCIsImJvcmRlclJhZGl1cyIsInRpdGxlIiwicmVsZWFzZV9kYXRlIiwic2xpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7OztBQUVBLFNBQVNBLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQWdDO0FBQUE7O0FBQzVCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFENEIsTUFHcEJDLFdBSG9CLEdBR0pILEtBSEksQ0FHcEJHLFdBSG9COztBQUFBLHFCQUliQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUpFO0FBQUEsTUFJcEJDLEVBSm9CLGdCQUlwQkEsRUFKb0I7O0FBQUEsa0JBTUFDLHNEQUFRLENBQUMsRUFBRCxDQU5SO0FBQUEsTUFNckJDLE1BTnFCO0FBQUEsTUFNYkMsU0FOYSxpQkFRNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzNCRixhQUFTLENBQUNFLENBQUMsQ0FBQ0MsYUFBRixDQUFnQkMsS0FBakIsQ0FBVDtBQUNILEdBRkQ7O0FBSUEsTUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDSCxDQUFELEVBQU87QUFDOUJBLEtBQUMsQ0FBQ0ksY0FBRjtBQUNBLFFBQU1DLElBQUksR0FBRztBQUNUQyxZQUFNLEVBQUVYLEVBQUUsQ0FBQ1ksR0FERjtBQUVUQyxVQUFJLEVBQUViLEVBQUUsQ0FBQ2EsSUFGQTtBQUdUQyxVQUFJLEVBQUVaO0FBSEcsS0FBYjtBQU1BUixZQUFRLENBQUNxQiwrRUFBc0IsQ0FBQ0wsSUFBRCxDQUF2QixDQUFSO0FBQ0gsR0FURDs7QUFXQSxzQkFDSSxxRUFBQyxvRUFBRDtBQUFBLDJCQUNJO0FBQUssV0FBSyxFQUFFO0FBQUVNLGtCQUFVLEVBQUU7QUFBZCxPQUFaO0FBQUEsaUJBQ09oQixFQUFFLElBQUlBLEVBQUUsQ0FBQ2EsSUFBVixpQkFFTTtBQUFBLG1CQUFNYixFQUFFLENBQUNhLElBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSFosZUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5KLGVBU0k7QUFBQSwrQkFDSTtBQUFLLGFBQUcsWUFBS0ksZ0RBQUwsbUJBQXNCckIsV0FBVyxDQUFDc0IsV0FBbEMsQ0FBUjtBQUF5RCxlQUFLLEVBQUU7QUFBRUMsd0JBQVksRUFBRTtBQUFoQjtBQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRKLGVBWUk7QUFBQSxtQkFBTXZCLFdBQVcsQ0FBQ3dCLEtBQWxCLE9BQTBCeEIsV0FBVyxDQUFDeUIsWUFBWixDQUF5QkMsS0FBekIsQ0FBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsQ0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWkosZUFhSTtBQUFNLGdCQUFRLEVBQUVkLGtCQUFoQjtBQUFBLGdDQUNJO0FBQ0kscUJBQVcsRUFBQyxpRUFEaEI7QUFFSSxrQkFBUSxFQUFFSjtBQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFLSTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTBCSDs7R0E3RFFaLGU7VUFDWUcsdUQsRUFHRkUsdUQ7OztBQXlEbEI7O0FBWWNMLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21vdmllVGFsay9baWRdLjkwYTRjZGYzN2Q1ZGYxYzVjN2UxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvQXBwTGF5b3V0JztcclxuaW1wb3J0IHsgaW1hZ2VVUkwgfSBmcm9tICcuLi9jb25maWcnO1xyXG5pbXBvcnQgeyBnZXRNb3ZpZURldGFpbEZyb21UTURCIH0gZnJvbSAnLi4vYXBpL2FwaSc7XHJcbmltcG9ydCB7IGFkZFJldmlld1JlcXVlc3RBY3Rpb24gfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9yZXZpZXcnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlTW92aWVUYWxrKHByb3BzKSB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3QgeyBtb3ZpZURldGFpbCB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICAgIGNvbnN0IFtSZXZpZXcsIHNldFJldmlld10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIFxyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgICBpZiAoIShtZSAmJiBtZS5lbWFpbCkpIHtcclxuICAgIC8vICAgICAgICAgY29uc3QgZGlkRGVsZXRlID0gY29uZmlybSgn66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpC4g66Gc6re47J24IO2ZlOuptOycvOuhnCDsnbTrj5ntlZjsi5zqsqDsirXri4jquYw/Jyk7XHJcbiAgICAvLyAgICAgICAgIGlmKGRpZERlbGV0ZSkge1xyXG4gICAgLy8gICAgICAgICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgUm91dGVyLmJhY2soKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH07XHJcbiAgICAvLyB9LCBbbWUgJiYgbWUuaWRdKTtcclxuXHJcblxyXG4gICAgY29uc3Qgb25SZXZpZXdIYW5kbGVyID0gKGUpID0+IHtcclxuICAgICAgICBzZXRSZXZpZXcoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdFJldmlldyA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgIHdyaXRlcjogbWUuX2lkLFxyXG4gICAgICAgICAgICBuYW1lOiBtZS5uYW1lLFxyXG4gICAgICAgICAgICB0ZXh0OiBSZXZpZXdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBkaXNwYXRjaChhZGRSZXZpZXdSZXF1ZXN0QWN0aW9uKGJvZHkpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzIwMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgIHsgKG1lICYmIG1lLm5hbWUpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PnttZS5uYW1lfeuLmOydmCDrpqzrt7A8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIO2PieygkFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtpbWFnZVVSTH0vdzIwMC8ke21vdmllRGV0YWlsLnBvc3Rlcl9wYXRofWB9IHN0eWxlPXt7IGJvcmRlclJhZGl1czogJzVweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj57bW92aWVEZXRhaWwudGl0bGV9KHttb3ZpZURldGFpbC5yZWxlYXNlX2RhdGUuc2xpY2UoMCwgNCl9KTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdFJldmlld30+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7JiB7ZmUIOumrOu3sOulvCDsoIHslrTso7zshLjsmpQuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uUmV2aWV3SGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj7soJzstpw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHF1ZXJ5IH0pIHtcclxuICAgIGNvbnN0IG1vdmllRGV0YWlsID0gYXdhaXQgZ2V0TW92aWVEZXRhaWxGcm9tVE1EQihxdWVyeS5pZCk7XHJcbiAgICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgbW92aWVEZXRhaWw6IG1vdmllRGV0YWlsLFxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1vdmllVGFsaztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==