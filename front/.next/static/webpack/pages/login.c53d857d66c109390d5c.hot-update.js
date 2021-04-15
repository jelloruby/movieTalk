webpackHotUpdate_N_E("pages/login",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, loginRequestAction, googleLoginRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_REQUEST", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_SUCCESS", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_FAILURE", function() { return LOAD_MY_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleLoginRequestAction", function() { return googleLoginRequestAction; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  logInDone: false,
  logInError: null,
  signUpDone: false,
  signUpError: null,
  logOutDone: false,
  logOutError: null,
  loadMyInfoDone: false,
  loadMyInfoError: null,
  me: null
};
var LOG_IN_REQUEST = 'LOG_IN_REQUEST';
var LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
var LOG_IN_FAILURE = 'LOG_IN_FAILURE';
var SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
var SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
var SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
var LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
var LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
var LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
var LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
var LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
var LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';
var loginRequestAction = function loginRequestAction(data) {
  return {
    type: LOG_IN_REQUEST,
    data: data
  };
};
var googleLoginRequestAction = function googleLoginRequestAction() {
  return {
    type: GOOGLE_LOG_IN_REQUEST
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case LOG_IN_REQUEST:
      console.log('reducer LOGIN - user');
      return state = _objectSpread(_objectSpread({}, state), {}, {
        logInDone: false,
        logInError: null
      });

    case LOG_IN_SUCCESS:
      console.log('reducer LOGIN - SUCCESS - user');
      console.log(action.data);
      return state = _objectSpread(_objectSpread({}, state), {}, {
        logInDone: true,
        me: action.data
      });

    case LOG_IN_FAILURE:
      return state = _objectSpread(_objectSpread({}, state), {}, {
        logInError: action.error
      });

    case SIGN_UP_REQUEST:
      console.log('reducer SIGN-UP - user');
      return state = _objectSpread(_objectSpread({}, state), {}, {
        signUpDone: false,
        signUpError: null
      });

    case SIGN_UP_SUCCESS:
      console.log('reducer SIGN-UP - SUCCESS - user');
      return state = _objectSpread(_objectSpread({}, state), {}, {
        signUpDone: true
      });

    case SIGN_UP_FAILURE:
      return state = _objectSpread(_objectSpread({}, state), {}, {
        signUpError: "이미 사용중인 이메일 입니다." // unique: 1으로 해놨기 때문에

      });

    case LOG_OUT_REQUEST:
      console.log('reducer LOG_OUT - user');
      return state = _objectSpread(_objectSpread({}, state), {}, {
        logOutDone: false,
        logOutError: null
      });

    case LOG_OUT_SUCCESS:
      console.log('reducer LOG_OUT - SUCCESS - user');
      return state = _objectSpread(_objectSpread({}, state), {}, {
        logInDone: false,
        logOutDone: true,
        me: null
      });

    case LOG_OUT_FAILURE:
      return state = _objectSpread(_objectSpread({}, state), {}, {
        logOutError: true
      });

    case LOAD_MY_INFO_REQUEST:
      console.log('reducer LOAD_MY_INFO - user');
      return state = _objectSpread(_objectSpread({}, state), {}, {
        loadMyInfoDone: false,
        loadMyInfoError: null
      });

    case LOAD_MY_INFO_SUCCESS:
      console.log('reducer LOAD_MY_INFO - SUCCESS - user');

      if (!action.data) {
        return state = _objectSpread(_objectSpread({}, state), {}, {
          loadMyInfoDone: true
        });
      } else {
        return state = _objectSpread(_objectSpread({}, state), {}, {
          logInDone: true,
          loadMyInfoDone: true,
          me: action.data
        });
      }

    case LOAD_MY_INFO_FAILURE:
      return state = _objectSpread(_objectSpread({}, state), {}, {
        loadMyInfoError: true
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2dJbkRvbmUiLCJsb2dJbkVycm9yIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwibG9hZE15SW5mb0RvbmUiLCJsb2FkTXlJbmZvRXJyb3IiLCJtZSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIkxPQURfTVlfSU5GT19SRVFVRVNUIiwiTE9BRF9NWV9JTkZPX1NVQ0NFU1MiLCJMT0FEX01ZX0lORk9fRkFJTFVSRSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwiZ29vZ2xlTG9naW5SZXF1ZXN0QWN0aW9uIiwiR09PR0xFX0xPR19JTl9SRVFVRVNUIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxZQUFZLEdBQUc7QUFDeEJDLFdBQVMsRUFBRSxLQURhO0FBRXhCQyxZQUFVLEVBQUUsSUFGWTtBQUd4QkMsWUFBVSxFQUFFLEtBSFk7QUFJeEJDLGFBQVcsRUFBRSxJQUpXO0FBS3hCQyxZQUFVLEVBQUUsS0FMWTtBQU14QkMsYUFBVyxFQUFFLElBTlc7QUFPeEJDLGdCQUFjLEVBQUUsS0FQUTtBQVF4QkMsaUJBQWUsRUFBRSxJQVJPO0FBU3hCQyxJQUFFLEVBQUU7QUFUb0IsQ0FBckI7QUFZQSxJQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLElBQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxJQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxJQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxJQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxJQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxJQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFFQSxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLElBQUQ7QUFBQSxTQUFXO0FBQ3pDQyxRQUFJLEVBQUVkLGNBRG1DO0FBRXpDYSxRQUFJLEVBQUVBO0FBRm1DLEdBQVg7QUFBQSxDQUEzQjtBQUtBLElBQU1FLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBMkI7QUFBQSxTQUFPO0FBQzNDRCxRQUFJLEVBQUVFO0FBRHFDLEdBQVA7QUFBQSxDQUFqQzs7QUFJUCxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFnQztBQUFBLE1BQS9CQyxLQUErQix1RUFBekI1QixZQUF5QjtBQUFBLE1BQVg2QixNQUFXOztBQUM1QyxVQUFRQSxNQUFNLENBQUNMLElBQWY7QUFDSSxTQUFLZCxjQUFMO0FBQ0lvQixhQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtBQUNBLGFBQU9ILEtBQUssbUNBQ0xBLEtBREs7QUFFUjNCLGlCQUFTLEVBQUUsS0FGSDtBQUdSQyxrQkFBVSxFQUFFO0FBSEosUUFBWjs7QUFLSixTQUFLUyxjQUFMO0FBQ0ltQixhQUFPLENBQUNDLEdBQVIsQ0FBWSxnQ0FBWjtBQUNBRCxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBTSxDQUFDTixJQUFuQjtBQUNBLGFBQU9LLEtBQUssbUNBQ0xBLEtBREs7QUFFUjNCLGlCQUFTLEVBQUUsSUFGSDtBQUdSUSxVQUFFLEVBQUVvQixNQUFNLENBQUNOO0FBSEgsUUFBWjs7QUFLSixTQUFLWCxjQUFMO0FBQ0ksYUFBT2dCLEtBQUssbUNBQ0xBLEtBREs7QUFFUjFCLGtCQUFVLEVBQUUyQixNQUFNLENBQUNHO0FBRlgsUUFBWjs7QUFJSixTQUFLbkIsZUFBTDtBQUNJaUIsYUFBTyxDQUFDQyxHQUFSLENBQVksd0JBQVo7QUFDQSxhQUFPSCxLQUFLLG1DQUNMQSxLQURLO0FBRVJ6QixrQkFBVSxFQUFFLEtBRko7QUFHUkMsbUJBQVcsRUFBRTtBQUhMLFFBQVo7O0FBS0osU0FBS1UsZUFBTDtBQUNJZ0IsYUFBTyxDQUFDQyxHQUFSLENBQVksa0NBQVo7QUFDQSxhQUFPSCxLQUFLLG1DQUNMQSxLQURLO0FBRVJ6QixrQkFBVSxFQUFFO0FBRkosUUFBWjs7QUFJSixTQUFLWSxlQUFMO0FBQ0ksYUFBT2EsS0FBSyxtQ0FDTEEsS0FESztBQUVSeEIsbUJBQVcsRUFBRSxrQkFGTCxDQUV5Qjs7QUFGekIsUUFBWjs7QUFJSixTQUFLWSxlQUFMO0FBQ0ljLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLHdCQUFaO0FBQ0EsYUFBT0gsS0FBSyxtQ0FDTEEsS0FESztBQUVSdkIsa0JBQVUsRUFBRSxLQUZKO0FBR1JDLG1CQUFXLEVBQUU7QUFITCxRQUFaOztBQUtKLFNBQUtXLGVBQUw7QUFDSWEsYUFBTyxDQUFDQyxHQUFSLENBQVksa0NBQVo7QUFDQSxhQUFPSCxLQUFLLG1DQUNMQSxLQURLO0FBRVIzQixpQkFBUyxFQUFFLEtBRkg7QUFHUkksa0JBQVUsRUFBRSxJQUhKO0FBSVJJLFVBQUUsRUFBRTtBQUpJLFFBQVo7O0FBTUosU0FBS1MsZUFBTDtBQUNJLGFBQU9VLEtBQUssbUNBQ0xBLEtBREs7QUFFUnRCLG1CQUFXLEVBQUU7QUFGTCxRQUFaOztBQUlKLFNBQUthLG9CQUFMO0FBQ0lXLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLDZCQUFaO0FBQ0EsYUFBT0gsS0FBSyxtQ0FDTEEsS0FESztBQUVSckIsc0JBQWMsRUFBRSxLQUZSO0FBR1JDLHVCQUFlLEVBQUU7QUFIVCxRQUFaOztBQUtKLFNBQUtZLG9CQUFMO0FBQ0lVLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLHVDQUFaOztBQUNBLFVBQUcsQ0FBQ0YsTUFBTSxDQUFDTixJQUFYLEVBQWlCO0FBQ2IsZUFBT0ssS0FBSyxtQ0FDTEEsS0FESztBQUVSckIsd0JBQWMsRUFBRTtBQUZSLFVBQVo7QUFJSCxPQUxELE1BS087QUFDSCxlQUFPcUIsS0FBSyxtQ0FDTEEsS0FESztBQUVSM0IsbUJBQVMsRUFBRSxJQUZIO0FBR1JNLHdCQUFjLEVBQUUsSUFIUjtBQUlSRSxZQUFFLEVBQUVvQixNQUFNLENBQUNOO0FBSkgsVUFBWjtBQU1IOztBQUVMLFNBQUtGLG9CQUFMO0FBQ0ksYUFBT08sS0FBSyxtQ0FDTEEsS0FESztBQUVScEIsdUJBQWUsRUFBRTtBQUZULFFBQVo7O0FBS0o7QUFDSSxhQUFPb0IsS0FBUDtBQXpGUjtBQTJGSCxDQTVGRDs7QUE4RmVELHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLmM1M2Q4NTdkNjZjMTA5MzkwZDVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICAgIGxvZ0luRXJyb3I6IG51bGwsXHJcbiAgICBzaWduVXBEb25lOiBmYWxzZSxcclxuICAgIHNpZ25VcEVycm9yOiBudWxsLFxyXG4gICAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgICBsb2dPdXRFcnJvcjogbnVsbCxcclxuICAgIGxvYWRNeUluZm9Eb25lOiBmYWxzZSxcclxuICAgIGxvYWRNeUluZm9FcnJvcjogbnVsbCxcclxuICAgIG1lOiBudWxsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1JFUVVFU1QgPSAnTE9BRF9NWV9JTkZPX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1NVQ0NFU1MgPSAnTE9BRF9NWV9JTkZPX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX0ZBSUxVUkUgPSAnTE9BRF9NWV9JTkZPX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBnb29nbGVMb2dpblJlcXVlc3RBY3Rpb24gPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogR09PR0xFX0xPR19JTl9SRVFVRVNULFxyXG59KTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVkdWNlciBMT0dJTiAtIHVzZXInKTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9nSW5FcnJvcjogbnVsbCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWR1Y2VyIExPR0lOIC0gU1VDQ0VTUyAtIHVzZXInKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvZ0luRG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1lOiBhY3Rpb24uZGF0YVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2dJbkVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgU0lHTi1VUCAtIHVzZXInKTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBzaWduVXBEb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNpZ25VcEVycm9yOiBudWxsLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWR1Y2VyIFNJR04tVVAgLSBTVUNDRVNTIC0gdXNlcicpO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHNpZ25VcERvbmU6IHRydWUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBzaWduVXBFcnJvcjogXCLsnbTrr7gg7IKs7Jqp7KSR7J24IOydtOuplOydvCDsnoXri4jri6QuXCIsIC8vIHVuaXF1ZTogMeycvOuhnCDtlbTrhqjquLAg65WM66y47JeQXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgTE9HX09VVCAtIHVzZXInKTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2dPdXREb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxvZ091dEVycm9yOiBudWxsLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWR1Y2VyIExPR19PVVQgLSBTVUNDRVNTIC0gdXNlcicpO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvZ0luRG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBsb2dPdXREb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWU6IG51bGwsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2dPdXRFcnJvcjogdHJ1ZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWR1Y2VyIExPQURfTVlfSU5GTyAtIHVzZXInKTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkTXlJbmZvRG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBsb2FkTXlJbmZvRXJyb3I6IG51bGwsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIExPQURfTVlfSU5GT19TVUNDRVNTOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVkdWNlciBMT0FEX01ZX0lORk8gLSBTVUNDRVNTIC0gdXNlcicpO1xyXG4gICAgICAgICAgICBpZighYWN0aW9uLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkTXlJbmZvRG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2dJbkRvbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZE15SW5mb0RvbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWU6IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBMT0FEX01ZX0lORk9fRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkTXlJbmZvRXJyb3I6IHRydWUsXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9