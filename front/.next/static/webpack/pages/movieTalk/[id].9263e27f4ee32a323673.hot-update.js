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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW92aWVUYWxrLy5qcyJdLCJuYW1lcyI6WyJjcmVhdGVNb3ZpZVRhbGsiLCJwcm9wcyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJtb3ZpZURldGFpbCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJ1c2VTdGF0ZSIsIlJldmlldyIsInNldFJldmlldyIsInVzZUVmZmVjdCIsImVtYWlsIiwiZGlkRGVsZXRlIiwiY29uZmlybSIsIlJvdXRlciIsInB1c2giLCJiYWNrIiwiaWQiLCJvblJldmlld0hhbmRsZXIiLCJlIiwiY3VycmVudFRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0UmV2aWV3IiwicHJldmVudERlZmF1bHQiLCJib2R5Iiwid3JpdGVyIiwiX2lkIiwibmFtZSIsInRleHQiLCJhZGRSZXZpZXdSZXF1ZXN0QWN0aW9uIiwibWFyZ2luTGVmdCIsImltYWdlVVJMIiwicG9zdGVyX3BhdGgiLCJib3JkZXJSYWRpdXMiLCJ0aXRsZSIsInJlbGVhc2VfZGF0ZSIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7QUFFQSxTQUFTQSxlQUFULENBQXlCQyxLQUF6QixFQUFnQztBQUFBOztBQUM1QixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBRDRCLE1BR3BCQyxXQUhvQixHQUdKSCxLQUhJLENBR3BCRyxXQUhvQjs7QUFBQSxxQkFJYkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FKRTtBQUFBLE1BSXBCQyxFQUpvQixnQkFJcEJBLEVBSm9COztBQUFBLGtCQU1BQyxzREFBUSxDQUFDLEVBQUQsQ0FOUjtBQUFBLE1BTXJCQyxNQU5xQjtBQUFBLE1BTWJDLFNBTmE7O0FBUTVCQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJLEVBQUVKLEVBQUUsSUFBSUEsRUFBRSxDQUFDSyxLQUFYLENBQUosRUFBdUI7QUFDbkIsVUFBTUMsU0FBUyxHQUFHQyxPQUFPLENBQUMsZ0NBQUQsQ0FBekI7O0FBQ0EsVUFBR0QsU0FBSCxFQUFjO0FBQ1ZFLDBEQUFNLENBQUNDLElBQVAsQ0FBWSxRQUFaO0FBQ0gsT0FGRCxNQUVPO0FBQ0hELDBEQUFNLENBQUNFLElBQVA7QUFDSDtBQUNKOztBQUFBO0FBQ0osR0FUUSxFQVNOLENBQUNWLEVBQUUsSUFBSUEsRUFBRSxDQUFDVyxFQUFWLENBVE0sQ0FBVDs7QUFZQSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLENBQUQsRUFBTztBQUMzQlYsYUFBUyxDQUFDVSxDQUFDLENBQUNDLGFBQUYsQ0FBZ0JDLEtBQWpCLENBQVQ7QUFDSCxHQUZEOztBQUlBLE1BQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0gsQ0FBRCxFQUFPO0FBQzlCQSxLQUFDLENBQUNJLGNBQUY7QUFDQSxRQUFNQyxJQUFJLEdBQUc7QUFDVEMsWUFBTSxFQUFFbkIsRUFBRSxDQUFDb0IsR0FERjtBQUVUQyxVQUFJLEVBQUVyQixFQUFFLENBQUNxQixJQUZBO0FBR1RDLFVBQUksRUFBRXBCO0FBSEcsS0FBYjtBQU1BUixZQUFRLENBQUM2QiwrRUFBc0IsQ0FBQ0wsSUFBRCxDQUF2QixDQUFSO0FBQ0gsR0FURDs7QUFXQSxzQkFDSSxxRUFBQyxvRUFBRDtBQUFBLDJCQUNJO0FBQUssV0FBSyxFQUFFO0FBQUVNLGtCQUFVLEVBQUU7QUFBZCxPQUFaO0FBQUEsaUJBQ094QixFQUFFLElBQUlBLEVBQUUsQ0FBQ3FCLElBQVYsaUJBRU07QUFBQSxtQkFBTXJCLEVBQUUsQ0FBQ3FCLElBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSFosZUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5KLGVBU0k7QUFBQSwrQkFDSTtBQUFLLGFBQUcsWUFBS0ksZ0RBQUwsbUJBQXNCN0IsV0FBVyxDQUFDOEIsV0FBbEMsQ0FBUjtBQUF5RCxlQUFLLEVBQUU7QUFBRUMsd0JBQVksRUFBRTtBQUFoQjtBQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRKLGVBWUk7QUFBQSxtQkFBTS9CLFdBQVcsQ0FBQ2dDLEtBQWxCLE9BQTBCaEMsV0FBVyxDQUFDaUMsWUFBWixDQUF5QkMsS0FBekIsQ0FBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsQ0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWkosZUFhSTtBQUFNLGdCQUFRLEVBQUVkLGtCQUFoQjtBQUFBLGdDQUNJO0FBQ0kscUJBQVcsRUFBQyxpRUFEaEI7QUFFSSxrQkFBUSxFQUFFSjtBQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFLSTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTBCSDs7R0E3RFFwQixlO1VBQ1lHLHVELEVBR0ZFLHVEOzs7QUF5RGxCOztBQVljTCw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tb3ZpZVRhbGsvW2lkXS45MjYzZTI3ZjRlZTMyYTMyMzY3My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0FwcExheW91dCc7XHJcbmltcG9ydCB7IGltYWdlVVJMIH0gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHsgZ2V0TW92aWVEZXRhaWxGcm9tVE1EQiB9IGZyb20gJy4uL2FwaS9hcGknO1xyXG5pbXBvcnQgeyBhZGRSZXZpZXdSZXF1ZXN0QWN0aW9uIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvcmV2aWV3JztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1vdmllVGFsayhwcm9wcykge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIGNvbnN0IHsgbW92aWVEZXRhaWwgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgICBjb25zdCBbUmV2aWV3LCBzZXRSZXZpZXddID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCEobWUgJiYgbWUuZW1haWwpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpZERlbGV0ZSA9IGNvbmZpcm0oJ+uhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QuIOuhnOq3uOyduCDtmZTrqbTsnLzroZwg7J2064+Z7ZWY7Iuc6rKg7Iq164uI6rmMPycpO1xyXG4gICAgICAgICAgICBpZihkaWREZWxldGUpIHtcclxuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIFJvdXRlci5iYWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSwgW21lICYmIG1lLmlkXSk7XHJcblxyXG5cclxuICAgIGNvbnN0IG9uUmV2aWV3SGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0UmV2aWV3KGUuY3VycmVudFRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXRSZXZpZXcgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgICB3cml0ZXI6IG1lLl9pZCxcclxuICAgICAgICAgICAgbmFtZTogbWUubmFtZSxcclxuICAgICAgICAgICAgdGV4dDogUmV2aWV3XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZGlzcGF0Y2goYWRkUmV2aWV3UmVxdWVzdEFjdGlvbihib2R5KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXBwTGF5b3V0PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcyMDBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICB7IChtZSAmJiBtZS5uYW1lKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57bWUubmFtZX3ri5jsnZgg66as67ewPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICDtj4nsoJBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7aW1hZ2VVUkx9L3cyMDAvJHttb3ZpZURldGFpbC5wb3N0ZXJfcGF0aH1gfSBzdHlsZT17eyBib3JkZXJSYWRpdXM6ICc1cHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+e21vdmllRGV0YWlsLnRpdGxlfSh7bW92aWVEZXRhaWwucmVsZWFzZV9kYXRlLnNsaWNlKDAsIDQpfSk8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXRSZXZpZXd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuyYge2ZlCDrpqzrt7Drpbwg7KCB7Ja07KO87IS47JqULlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblJldmlld0hhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+7KCc7LacPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L0FwcExheW91dD5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBxdWVyeSB9KSB7XHJcbiAgICBjb25zdCBtb3ZpZURldGFpbCA9IGF3YWl0IGdldE1vdmllRGV0YWlsRnJvbVRNREIocXVlcnkuaWQpO1xyXG4gICAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIG1vdmllRGV0YWlsOiBtb3ZpZURldGFpbCxcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNb3ZpZVRhbGs7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=