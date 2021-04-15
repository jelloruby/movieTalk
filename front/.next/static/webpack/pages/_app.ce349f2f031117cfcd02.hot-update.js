webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, GOOGLE_LOG_IN_REQUEST, GOOGLE_LOG_IN_SUCCESS, GOOGLE_LOG_IN_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, loginRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GOOGLE_LOG_IN_REQUEST", function() { return GOOGLE_LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GOOGLE_LOG_IN_SUCCESS", function() { return GOOGLE_LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GOOGLE_LOG_IN_FAILURE", function() { return GOOGLE_LOG_IN_FAILURE; });
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
var GOOGLE_LOG_IN_REQUEST = 'LOG_IN_REQUEST';
var GOOGLE_LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
var GOOGLE_LOG_IN_FAILURE = 'LOG_IN_FAILURE';
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
      return state = _objectSpread(_objectSpread({}, state), {}, {
        loadMyInfoDone: true,
        me: action.data
      });

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

/***/ }),

/***/ "./sagas/review.js":
/*!*************************!*\
  !*** ./sagas/review.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reviewSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reducers_review__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/review */ "./reducers/review.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addReview),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadAllReview),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchReview),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadAllReview),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(reviewSaga);



 // api

function addReviewAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/review', data);
}

function loadAllReviewAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/review/all');
} // action - reducers


function addReview(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addReview$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(addReviewAPI, action.data);

        case 3:
          result = _context.sent;
          console.log('saga ADD_REVIEW');
          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_review__WEBPACK_IMPORTED_MODULE_3__["ADD_REVIEW_SUCCESS"],
            data: result.data
          });

        case 7:
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          _context.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_review__WEBPACK_IMPORTED_MODULE_3__["ADD_REVIEW_FAILURE"],
            data: _context.t0.response.data
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 9]]);
}

function loadAllReview() {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadAllReview$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(loadAllReviewAPI);

        case 3:
          result = _context2.sent;
          console.log('saga LOAD_ALL_REVIEW');
          _context2.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_review__WEBPACK_IMPORTED_MODULE_3__["LOAD_ALL_REVIEW_SUCCESS"],
            data: result.data
          });

        case 7:
          _context2.next = 13;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_review__WEBPACK_IMPORTED_MODULE_3__["LOAD_ALL_REVIEW_FAILURE"],
            data: _context2.t0.response.data
          });

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 9]]);
} // start function


function watchReview() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchReview$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_review__WEBPACK_IMPORTED_MODULE_3__["ADD_REVIEW_REQUEST"], addReview);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

function watchLoadAllReview() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadAllReview$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_review__WEBPACK_IMPORTED_MODULE_3__["LOAD_ALL_REVIEW_REQUEST"], loadAllReview);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

function reviewSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function reviewSaga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchReview), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchLoadAllReview)]);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

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

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logIn),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(signUp),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logOut),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadMyInfo),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogIn),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchSignUp),
    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogOut),
    _marked8 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadMyInfo),
    _marked9 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(userSaga);



 // api

function loginAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default()({
    method: 'post',
    url: '/user/login',
    withCredentials: true,
    data: data
  });
}

function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default()({
    method: 'post',
    url: '/user/signup',
    withCredentials: true,
    data: data
  });
}

function logoutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default()({
    method: 'post',
    url: '/user/logout',
    withCredentials: true
  });
}

function loadMyInfoAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default()({
    method: 'get',
    url: '/user'
  });
} // action - reducers


function logIn(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logIn$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(loginAPI, action.data);

        case 3:
          result = _context.sent;
          console.log(result);
          console.log('saga LOGIN');
          _context.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_IN_SUCCESS"],
            data: result.data
          });

        case 8:
          _context.next = 14;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          _context.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_IN_FAILURE"],
            data: _context.t0.response.data
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 10]]);
}

function signUp(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function signUp$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(signUpAPI, action.data);

        case 3:
          result = _context2.sent;
          console.log('saga SIGN-UP');
          console.log(result);
          _context2.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["SIGN_UP_SUCCESS"]
          });

        case 8:
          _context2.next = 14;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["SIGN_UP_FAILURE"],
            data: _context2.t0.response.data
          });

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 10]]);
}

function logOut() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logOut$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(logoutAPI);

        case 3:
          console.log('saga LOGOUT');
          _context3.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_SUCCESS"]
          });

        case 6:
          _context3.next = 12;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          _context3.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_FAILURE"],
            data: _context3.t0.response.data
          });

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 8]]);
}

function loadMyInfo() {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadMyInfo$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(loadMyInfoAPI);

        case 3:
          result = _context4.sent;
          console.log('saga LOAD_MY_INFO');
          _context4.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_MY_INFO_SUCCESS"],
            data: result.data
          });

        case 7:
          _context4.next = 13;
          break;

        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](0);
          _context4.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_MY_INFO_FAILURE"],
            data: _context4.t0.response.data
          });

        case 13:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 9]]);
} // start function


function watchLogIn() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogIn$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_IN_REQUEST"], logIn);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

function watchSignUp() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchSignUp$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["SIGN_UP_REQUEST"], signUp);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}

function watchLogOut() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogOut$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_REQUEST"], logOut);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}

function watchLoadMyInfo() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadMyInfo$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOAD_MY_INFO_REQUEST"], loadMyInfo);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}

function userSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function userSaga$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchSignUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchLoadMyInfo)]);

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcmV2aWV3LmpzIiwid2VicGFjazovL19OX0UvLi9zYWdhcy91c2VyLmpzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJsb2FkTXlJbmZvRG9uZSIsImxvYWRNeUluZm9FcnJvciIsIm1lIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiR09PR0xFX0xPR19JTl9SRVFVRVNUIiwiR09PR0xFX0xPR19JTl9TVUNDRVNTIiwiR09PR0xFX0xPR19JTl9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiTE9BRF9NWV9JTkZPX1JFUVVFU1QiLCJMT0FEX01ZX0lORk9fU1VDQ0VTUyIsIkxPQURfTVlfSU5GT19GQUlMVVJFIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwiZGF0YSIsInR5cGUiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJhZGRSZXZpZXciLCJsb2FkQWxsUmV2aWV3Iiwid2F0Y2hSZXZpZXciLCJ3YXRjaExvYWRBbGxSZXZpZXciLCJyZXZpZXdTYWdhIiwiYWRkUmV2aWV3QVBJIiwiYXhpb3MiLCJwb3N0IiwibG9hZEFsbFJldmlld0FQSSIsImdldCIsImNhbGwiLCJyZXN1bHQiLCJwdXQiLCJBRERfUkVWSUVXX1NVQ0NFU1MiLCJBRERfUkVWSUVXX0ZBSUxVUkUiLCJyZXNwb25zZSIsIkxPQURfQUxMX1JFVklFV19TVUNDRVNTIiwiTE9BRF9BTExfUkVWSUVXX0ZBSUxVUkUiLCJ0YWtlTGF0ZXN0IiwiQUREX1JFVklFV19SRVFVRVNUIiwiTE9BRF9BTExfUkVWSUVXX1JFUVVFU1QiLCJhbGwiLCJmb3JrIiwibG9nSW4iLCJzaWduVXAiLCJsb2dPdXQiLCJsb2FkTXlJbmZvIiwid2F0Y2hMb2dJbiIsIndhdGNoU2lnblVwIiwid2F0Y2hMb2dPdXQiLCJ3YXRjaExvYWRNeUluZm8iLCJ1c2VyU2FnYSIsImxvZ2luQVBJIiwibWV0aG9kIiwidXJsIiwid2l0aENyZWRlbnRpYWxzIiwic2lnblVwQVBJIiwibG9nb3V0QVBJIiwibG9hZE15SW5mb0FQSSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxZQUFZLEdBQUc7QUFDeEJDLFdBQVMsRUFBRSxLQURhO0FBRXhCQyxZQUFVLEVBQUUsSUFGWTtBQUd4QkMsWUFBVSxFQUFFLEtBSFk7QUFJeEJDLGFBQVcsRUFBRSxJQUpXO0FBS3hCQyxZQUFVLEVBQUUsS0FMWTtBQU14QkMsYUFBVyxFQUFFLElBTlc7QUFPeEJDLGdCQUFjLEVBQUUsS0FQUTtBQVF4QkMsaUJBQWUsRUFBRSxJQVJPO0FBU3hCQyxJQUFFLEVBQUU7QUFUb0IsQ0FBckI7QUFZQSxJQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLElBQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxJQUFNQyxxQkFBcUIsR0FBRyxnQkFBOUI7QUFDQSxJQUFNQyxxQkFBcUIsR0FBRyxnQkFBOUI7QUFDQSxJQUFNQyxxQkFBcUIsR0FBRyxnQkFBOUI7QUFDQSxJQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxJQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7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QUFBQTtBQUFBO0FBQUE7O0FBSUEsU0FBVUssZUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSSxpQkFBTVoscUVBQVUsQ0FBQzlCLG1FQUFELEVBQXVCc0MsVUFBdkIsQ0FBaEI7O0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSWUsU0FBVUssUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWCxpQkFBTVYsOERBQUcsQ0FBQyxDQUNSQywrREFBSSxDQUFDSyxVQUFELENBREksRUFFUkwsK0RBQUksQ0FBQ00sV0FBRCxDQUZJLEVBR1JOLCtEQUFJLENBQUNPLFdBQUQsQ0FISSxFQUlSUCwrREFBSSxDQUFDUSxlQUFELENBSkksQ0FBRCxDQUFUOztBQURXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuY2UzNDlmMmYwMzExMTdjZmNkMDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gICAgbG9nSW5FcnJvcjogbnVsbCxcclxuICAgIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gICAgc2lnblVwRXJyb3I6IG51bGwsXHJcbiAgICBsb2dPdXREb25lOiBmYWxzZSxcclxuICAgIGxvZ091dEVycm9yOiBudWxsLFxyXG4gICAgbG9hZE15SW5mb0RvbmU6IGZhbHNlLFxyXG4gICAgbG9hZE15SW5mb0Vycm9yOiBudWxsLFxyXG4gICAgbWU6IG51bGxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBHT09HTEVfTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgR09PR0xFX0xPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEdPT0dMRV9MT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fUkVRVUVTVCA9ICdMT0FEX01ZX0lORk9fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fU1VDQ0VTUyA9ICdMT0FEX01ZX0lORk9fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fRkFJTFVSRSA9ICdMT0FEX01ZX0lORk9fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuICAgIGRhdGE6IGRhdGEsXHJcbn0pO1xyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVkdWNlciBMT0dJTiAtIHVzZXInKTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9nSW5FcnJvcjogbnVsbCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWR1Y2VyIExPR0lOIC0gU1VDQ0VTUyAtIHVzZXInKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvZ0luRG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1lOiBhY3Rpb24uZGF0YVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2dJbkVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWR1Y2VyIFNJR04tVVAgLSB1c2VyJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgc2lnblVwRG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzaWduVXBFcnJvcjogbnVsbCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVkdWNlciBTSUdOLVVQIC0gU1VDQ0VTUyAtIHVzZXInKTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBzaWduVXBEb25lOiB0cnVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgc2lnblVwRXJyb3I6IFwi7J2066+4IOyCrOyaqeykkeyduCDsnbTrqZTsnbwg7J6F64uI64ukLlwiLCAvLyB1bmlxdWU6IDHsnLzroZwg7ZW064ao6riwIOuVjOusuOyXkFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVkdWNlciBMT0dfT1VUIC0gdXNlcicpO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvZ091dERvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9nT3V0RXJyb3I6IG51bGwsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgTE9HX09VVCAtIFNVQ0NFU1MgLSB1c2VyJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxvZ091dERvbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtZTogbnVsbCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvZ091dEVycm9yOiB0cnVlLFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWR1Y2VyIExPQURfTVlfSU5GTyAtIHVzZXInKTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkTXlJbmZvRG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBsb2FkTXlJbmZvRXJyb3I6IG51bGwsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIExPQURfTVlfSU5GT19TVUNDRVNTOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVkdWNlciBMT0FEX01ZX0lORk8gLSBTVUNDRVNTIC0gdXNlcicpO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRNeUluZm9Eb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWU6IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIExPQURfTVlfSU5GT19GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRNeUluZm9FcnJvcjogdHJ1ZSxcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IGFsbCwgZm9yaywgY2FsbCwgcHV0LCB0YWtlTGF0ZXN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IHtcclxuICAgIEFERF9SRVZJRVdfUkVRVUVTVCxcclxuICAgIEFERF9SRVZJRVdfU1VDQ0VTUyxcclxuICAgIEFERF9SRVZJRVdfRkFJTFVSRSxcclxuICAgIExPQURfQUxMX1JFVklFV19SRVFVRVNULFxyXG4gICAgTE9BRF9BTExfUkVWSUVXX1NVQ0NFU1MsXHJcbiAgICBMT0FEX0FMTF9SRVZJRVdfRkFJTFVSRVxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3Jldmlldyc7XHJcblxyXG4vLyBhcGlcclxuZnVuY3Rpb24gYWRkUmV2aWV3QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvcmV2aWV3JywgZGF0YSlcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEFsbFJldmlld0FQSSgpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoJy9yZXZpZXcvYWxsJylcclxufVxyXG5cclxuXHJcbi8vIGFjdGlvbiAtIHJlZHVjZXJzXHJcbmZ1bmN0aW9uKiBhZGRSZXZpZXcoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9ICB5aWVsZCBjYWxsKGFkZFJldmlld0FQSSwgYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NhZ2EgQUREX1JFVklFVycpOyAgXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1JFVklFV19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9SRVZJRVdfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZEFsbFJldmlldygpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gIHlpZWxkIGNhbGwobG9hZEFsbFJldmlld0FQSSlcclxuICAgICAgICBjb25zb2xlLmxvZygnc2FnYSBMT0FEX0FMTF9SRVZJRVcnKTsgIFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfQUxMX1JFVklFV19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSBcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0FMTF9SRVZJRVdfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gc3RhcnQgZnVuY3Rpb25cclxuZnVuY3Rpb24qIHdhdGNoUmV2aWV3KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfUkVWSUVXX1JFUVVFU1QsIGFkZFJldmlldyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRBbGxSZXZpZXcoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfQUxMX1JFVklFV19SRVFVRVNULCBsb2FkQWxsUmV2aWV3KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJldmlld1NhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICBmb3JrKHdhdGNoUmV2aWV3KSxcclxuICAgICAgZm9yayh3YXRjaExvYWRBbGxSZXZpZXcpLFxyXG5cclxuICAgIF0pO1xyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgYWxsLCBmb3JrLCBjYWxsLCBwdXQsIHRha2VMYXRlc3QsIGRlbGF5IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IHtcclxuICAgIExPR19JTl9SRVFVRVNULFxyXG4gICAgTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICBMT0dfSU5fU1VDQ0VTUyxcclxuICAgIEdPT0dMRV9MT0dfSU5fUkVRVUVTVCxcclxuICAgIEdPT0dMRV9MT0dfSU5fRkFJTFVSRSxcclxuICAgIEdPT0dMRV9MT0dfSU5fU1VDQ0VTUyxcclxuICAgIFNJR05fVVBfUkVRVUVTVCxcclxuICAgIFNJR05fVVBfRkFJTFVSRSxcclxuICAgIFNJR05fVVBfU1VDQ0VTUyxcclxuICAgIExPR19PVVRfUkVRVUVTVCxcclxuICAgIExPR19PVVRfRkFJTFVSRSxcclxuICAgIExPR19PVVRfU1VDQ0VTUyxcclxuICAgIExPQURfTVlfSU5GT19SRVFVRVNULFxyXG4gICAgTE9BRF9NWV9JTkZPX0ZBSUxVUkUsXHJcbiAgICBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxufSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcblxyXG5cclxuLy8gYXBpXHJcbmZ1bmN0aW9uIGxvZ2luQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcyh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiAnL3VzZXIvbG9naW4nLFxyXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWduVXBBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICcvdXNlci9zaWdudXAnLFxyXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dvdXRBUEkoKSB7XHJcbiAgICByZXR1cm4gYXhpb3Moe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybDogJy91c2VyL2xvZ291dCcsXHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZE15SW5mb0FQSSgpIHtcclxuICAgIHJldHVybiBheGlvcyh7XHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICB1cmw6ICcvdXNlcicsXHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuXHJcbi8vIGFjdGlvbiAtIHJlZHVjZXJzXHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gIHlpZWxkIGNhbGwobG9naW5BUEksIGFjdGlvbi5kYXRhKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NhZ2EgTE9HSU4nKTtcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHNpZ25VcChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gIHlpZWxkIGNhbGwoc2lnblVwQVBJLCBhY3Rpb24uZGF0YSlcclxuICAgICAgICBjb25zb2xlLmxvZygnc2FnYSBTSUdOLVVQJyk7IFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nT3V0KCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB5aWVsZCBjYWxsKGxvZ291dEFQSSlcclxuICAgICAgICBjb25zb2xlLmxvZygnc2FnYSBMT0dPVVQnKTtcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZE15SW5mbygpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gIHlpZWxkIGNhbGwobG9hZE15SW5mb0FQSSlcclxuICAgICAgICBjb25zb2xlLmxvZygnc2FnYSBMT0FEX01ZX0lORk8nKTsgXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBzdGFydCBmdW5jdGlvblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCwgbG9nT3V0KVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkTXlJbmZvKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX01ZX0lORk9fUkVRVUVTVCwgbG9hZE15SW5mbylcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgZm9yayh3YXRjaExvZ0luKSxcclxuICAgICAgZm9yayh3YXRjaFNpZ25VcCksXHJcbiAgICAgIGZvcmsod2F0Y2hMb2dPdXQpLFxyXG4gICAgICBmb3JrKHdhdGNoTG9hZE15SW5mbyksXHJcbiAgICBdKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=