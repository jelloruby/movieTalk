module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/global.css */ "./styles/global.css");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\codingtime\\movieBox\\front\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("title", {
        children: "MovieBox"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("link", {
        rel: "stylesheet",
        type: "text/css",
        charset: "UTF-8",
        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_3__["default"].withRedux(App));

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _reducers_review__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/review */ "./reducers/review.js");





const rootReducer = (state, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
      return action.payload;

    default:
      {
        const combinedReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
          user: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["default"],
          review: _reducers_review__WEBPACK_IMPORTED_MODULE_3__["default"]
        });
        return combinedReducer(state, action);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/review.js":
/*!****************************!*\
  !*** ./reducers/review.js ***!
  \****************************/
/*! exports provided: initialState, ADD_REVIEW_REQUEST, ADD_REVIEW_SUCCESS, ADD_REVIEW_FAILURE, LOAD_ALL_REVIEW_REQUEST, LOAD_ALL_REVIEW_SUCCESS, LOAD_ALL_REVIEW_FAILURE, addReviewRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_REVIEW_REQUEST", function() { return ADD_REVIEW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_REVIEW_SUCCESS", function() { return ADD_REVIEW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_REVIEW_FAILURE", function() { return ADD_REVIEW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ALL_REVIEW_REQUEST", function() { return LOAD_ALL_REVIEW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ALL_REVIEW_SUCCESS", function() { return LOAD_ALL_REVIEW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ALL_REVIEW_FAILURE", function() { return LOAD_ALL_REVIEW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addReviewRequestAction", function() { return addReviewRequestAction; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  addReviewDone: false,
  addReviewError: null,
  loadAllReviewDone: false,
  loadAllReviewError: null,
  reviews: []
};
const ADD_REVIEW_REQUEST = 'ADD_REVIEW_REQUEST';
const ADD_REVIEW_SUCCESS = 'ADD_REVIEW_SUCCESS';
const ADD_REVIEW_FAILURE = 'ADD_REVIEW_FAILURE';
const LOAD_ALL_REVIEW_REQUEST = 'LOAD_ALL_REVIEW_REQUEST';
const LOAD_ALL_REVIEW_SUCCESS = 'LOAD_ALL_REVIEW_SUCCESS';
const LOAD_ALL_REVIEW_FAILURE = 'LOAD_ALL_REVIEW_FAILURE';
const addReviewRequestAction = data => ({
  type: ADD_REVIEW_REQUEST,
  data
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW_REQUEST:
      console.log('reducer Review');
      return state = _objectSpread(_objectSpread({}, state), {}, {
        addReviewDone: false
      });

    case ADD_REVIEW_SUCCESS:
      console.log('reducer ADD_REVIEW_SUCCESS');
      return state = _objectSpread(_objectSpread({}, state), {}, {
        addReviewDone: true // reviews: [ ...state.reviews, action.data.comment ]

      });

    case ADD_REVIEW_FAILURE:
      console.log('reducer ADD_REVIEW_FAILURE');
      return state = _objectSpread(_objectSpread({}, state), {}, {
        addReviewDone: false
      });

    case LOAD_ALL_REVIEW_REQUEST:
      console.log('reducer Review');
      return state = _objectSpread(_objectSpread({}, state), {}, {
        loadAllReviewDone: false
      });

    case LOAD_ALL_REVIEW_SUCCESS:
      console.log('reducer LOAD_ALL_REVIEW_SUCCESS');
      return state = _objectSpread(_objectSpread({}, state), {}, {
        loadAllReviewDone: true // reviews: [ ...state.reviews, action.data.comment ]

      });

    case LOAD_ALL_REVIEW_FAILURE:
      console.log('reducer LOAD_ALL_REVIEW_FAILURE');
      return state = _objectSpread(_objectSpread({}, state), {}, {
        loadAllReviewDone: false
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, loginRequestAction, googleLoginRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
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
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';
const loginRequestAction = data => ({
  type: LOG_IN_REQUEST,
  data: data
});
const googleLoginRequestAction = () => ({
  type: GOOGLE_LOG_IN_REQUEST
});

const reducer = (state = initialState, action) => {
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
          signUpDone: true,
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

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./sagas/user.js");
/* harmony import */ var _review__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./review */ "./sagas/review.js");




axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = 'http://localhost:5000'; // axios.defaults.withCredentials = true;

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_review__WEBPACK_IMPORTED_MODULE_3__["default"])]);
}

/***/ }),

/***/ "./sagas/review.js":
/*!*************************!*\
  !*** ./sagas/review.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reviewSaga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_review__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/review */ "./reducers/review.js");


 // api

function addReviewAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/review', data);
}

function loadAllReviewAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/review/all');
} // action - reducers


function* addReview(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addReviewAPI, action.data);
    console.log('saga ADD_REVIEW');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_review__WEBPACK_IMPORTED_MODULE_2__["ADD_REVIEW_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_review__WEBPACK_IMPORTED_MODULE_2__["ADD_REVIEW_FAILURE"],
      data: err.response.data
    });
  }
}

function* loadAllReview() {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadAllReviewAPI);
    console.log('saga LOAD_ALL_REVIEW');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_review__WEBPACK_IMPORTED_MODULE_2__["LOAD_ALL_REVIEW_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_review__WEBPACK_IMPORTED_MODULE_2__["LOAD_ALL_REVIEW_FAILURE"],
      data: err.response.data
    });
  }
} // start function


function* watchReview() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_review__WEBPACK_IMPORTED_MODULE_2__["ADD_REVIEW_REQUEST"], addReview);
}

function* watchLoadAllReview() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_review__WEBPACK_IMPORTED_MODULE_2__["LOAD_ALL_REVIEW_REQUEST"], loadAllReview);
}

function* reviewSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchReview), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadAllReview)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");


 // api

function loginAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default()({
    method: 'post',
    url: '/user/login',
    withCredentials: true,
    data: data
  });
}

function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default()({
    method: 'post',
    url: '/user/signup',
    withCredentials: true,
    data: data
  });
}

function logoutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default()({
    method: 'post',
    url: '/user/logout',
    withCredentials: true
  });
}

function loadMyInfoAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default()({
    method: 'get',
    url: '/user'
  });
} // action - reducers


function* logIn(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loginAPI, action.data);
    console.log(result);
    console.log('saga LOGIN');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      data: err.response.data
    });
  }
}

function* signUp(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(signUpAPI, action.data);
    console.log('saga SIGN-UP');
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      data: err.response.data
    });
  }
}

function* logOut() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logoutAPI);
    console.log('saga LOGOUT');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      data: err.response.data
    });
  }
}

function* loadMyInfo() {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadMyInfoAPI);
    console.log('saga LOAD_MY_INFO');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_FAILURE"],
      data: err.response.data
    });
  }
} // start function


function* watchLogIn() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);
}

function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);
}

function* watchLogOut() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);
}

function* watchLoadMyInfo() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_REQUEST"], loadMyInfo);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSignUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadMyInfo)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");







const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  console.log(action);
  return next(action);
};

const configureStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();
  const middlewares = [sagaMiddleware, loggerMiddleware];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9yZXZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9yZXZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwid3JhcHBlciIsIndpdGhSZWR1eCIsInJvb3RSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiSFlEUkFURSIsInBheWxvYWQiLCJjb21iaW5lZFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJ1c2VyIiwicmV2aWV3IiwiaW5pdGlhbFN0YXRlIiwiYWRkUmV2aWV3RG9uZSIsImFkZFJldmlld0Vycm9yIiwibG9hZEFsbFJldmlld0RvbmUiLCJsb2FkQWxsUmV2aWV3RXJyb3IiLCJyZXZpZXdzIiwiQUREX1JFVklFV19SRVFVRVNUIiwiQUREX1JFVklFV19TVUNDRVNTIiwiQUREX1JFVklFV19GQUlMVVJFIiwiTE9BRF9BTExfUkVWSUVXX1JFUVVFU1QiLCJMT0FEX0FMTF9SRVZJRVdfU1VDQ0VTUyIsIkxPQURfQUxMX1JFVklFV19GQUlMVVJFIiwiYWRkUmV2aWV3UmVxdWVzdEFjdGlvbiIsImRhdGEiLCJyZWR1Y2VyIiwiY29uc29sZSIsImxvZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJsb2FkTXlJbmZvRG9uZSIsImxvYWRNeUluZm9FcnJvciIsIm1lIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiTE9BRF9NWV9JTkZPX1JFUVVFU1QiLCJMT0FEX01ZX0lORk9fU1VDQ0VTUyIsIkxPQURfTVlfSU5GT19GQUlMVVJFIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwiZ29vZ2xlTG9naW5SZXF1ZXN0QWN0aW9uIiwiR09PR0xFX0xPR19JTl9SRVFVRVNUIiwiZXJyb3IiLCJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsInJvb3RTYWdhIiwiYWxsIiwiZm9yayIsInVzZXJTYWdhIiwicmV2aWV3U2FnYSIsImFkZFJldmlld0FQSSIsInBvc3QiLCJsb2FkQWxsUmV2aWV3QVBJIiwiZ2V0IiwiYWRkUmV2aWV3IiwicmVzdWx0IiwiY2FsbCIsInB1dCIsImVyciIsInJlc3BvbnNlIiwibG9hZEFsbFJldmlldyIsIndhdGNoUmV2aWV3IiwidGFrZUxhdGVzdCIsIndhdGNoTG9hZEFsbFJldmlldyIsImxvZ2luQVBJIiwibWV0aG9kIiwidXJsIiwid2l0aENyZWRlbnRpYWxzIiwic2lnblVwQVBJIiwibG9nb3V0QVBJIiwibG9hZE15SW5mb0FQSSIsImxvZ0luIiwic2lnblVwIiwibG9nT3V0IiwibG9hZE15SW5mbyIsIndhdGNoTG9nSW4iLCJ3YXRjaFNpZ25VcCIsIndhdGNoTG9nT3V0Iiwid2F0Y2hMb2FkTXlJbmZvIiwibG9nZ2VyTWlkZGxld2FyZSIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJuZXh0IiwiY29uZmlndXJlU3RvcmUiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInNhZ2FUYXNrIiwicnVuIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtR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YWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbC5jc3MnXHJcblxyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSdcclxuXHJcbmZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPk1vdmllQm94PC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBjaGFyc2V0PVwiVVRGLThcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2subWluLmNzc1wiIC8+IFxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay10aGVtZS5taW4uY3NzXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KEFwcCk7XHJcbiIsImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB1c2VyIGZyb20gJy4uL3JlZHVjZXJzL3VzZXInXHJcbmltcG9ydCByZXZpZXcgZnJvbSAnLi4vcmVkdWNlcnMvcmV2aWV3J1xyXG5cclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuXHJcbiAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICBjb25zdCBjb21iaW5lZFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgICAgICAgICAgICAgdXNlcixcclxuICAgICAgICAgICAgICAgIHJldmlldyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBjb21iaW5lZFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiIsImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBhZGRSZXZpZXdEb25lOiBmYWxzZSxcclxuICAgIGFkZFJldmlld0Vycm9yOiBudWxsLFxyXG4gICAgbG9hZEFsbFJldmlld0RvbmU6IGZhbHNlLFxyXG4gICAgbG9hZEFsbFJldmlld0Vycm9yOiBudWxsLFxyXG4gICAgcmV2aWV3czogW10sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1JFVklFV19SRVFVRVNUID0gJ0FERF9SRVZJRVdfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUkVWSUVXX1NVQ0NFU1MgPSAnQUREX1JFVklFV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9SRVZJRVdfRkFJTFVSRSA9ICdBRERfUkVWSUVXX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9BTExfUkVWSUVXX1JFUVVFU1QgPSAnTE9BRF9BTExfUkVWSUVXX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9BTExfUkVWSUVXX1NVQ0NFU1MgPSAnTE9BRF9BTExfUkVWSUVXX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9BTExfUkVWSUVXX0ZBSUxVUkUgPSAnTE9BRF9BTExfUkVWSUVXX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFJldmlld1JlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IEFERF9SRVZJRVdfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEFERF9SRVZJRVdfUkVRVUVTVDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgUmV2aWV3Jyk7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkUmV2aWV3RG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEFERF9SRVZJRVdfU1VDQ0VTUzpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgQUREX1JFVklFV19TVUNDRVNTJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkUmV2aWV3RG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIC8vIHJldmlld3M6IFsgLi4uc3RhdGUucmV2aWV3cywgYWN0aW9uLmRhdGEuY29tbWVudCBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEFERF9SRVZJRVdfRkFJTFVSRTpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgQUREX1JFVklFV19GQUlMVVJFJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkUmV2aWV3RG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBMT0FEX0FMTF9SRVZJRVdfUkVRVUVTVDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgUmV2aWV3Jyk7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZEFsbFJldmlld0RvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0FEX0FMTF9SRVZJRVdfU1VDQ0VTUzpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgTE9BRF9BTExfUkVWSUVXX1NVQ0NFU1MnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkQWxsUmV2aWV3RG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIC8vIHJldmlld3M6IFsgLi4uc3RhdGUucmV2aWV3cywgYWN0aW9uLmRhdGEuY29tbWVudCBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIExPQURfQUxMX1JFVklFV19GQUlMVVJFOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVkdWNlciBMT0FEX0FMTF9SRVZJRVdfRkFJTFVSRScpO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRBbGxSZXZpZXdEb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gICAgbG9nSW5FcnJvcjogbnVsbCxcclxuICAgIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gICAgc2lnblVwRXJyb3I6IG51bGwsXHJcbiAgICBsb2dPdXREb25lOiBmYWxzZSxcclxuICAgIGxvZ091dEVycm9yOiBudWxsLFxyXG4gICAgbG9hZE15SW5mb0RvbmU6IGZhbHNlLFxyXG4gICAgbG9hZE15SW5mb0Vycm9yOiBudWxsLFxyXG4gICAgbWU6IG51bGxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fUkVRVUVTVCA9ICdMT0FEX01ZX0lORk9fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fU1VDQ0VTUyA9ICdMT0FEX01ZX0lORk9fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fRkFJTFVSRSA9ICdMT0FEX01ZX0lORk9fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuICAgIGRhdGE6IGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdvb2dsZUxvZ2luUmVxdWVzdEFjdGlvbiA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiBHT09HTEVfTE9HX0lOX1JFUVVFU1QsXHJcbn0pO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWR1Y2VyIExPR0lOIC0gdXNlcicpO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvZ0luRG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBsb2dJbkVycm9yOiBudWxsLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgTE9HSU4gLSBTVUNDRVNTIC0gdXNlcicpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9nSW5Eb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWU6IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvZ0luRXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVkdWNlciBTSUdOLVVQIC0gdXNlcicpO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2lnblVwRXJyb3I6IG51bGwsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgU0lHTi1VUCAtIFNVQ0NFU1MgLSB1c2VyJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgc2lnblVwRG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHNpZ25VcEVycm9yOiBcIuydtOuvuCDsgqzsmqnspJHsnbgg7J2066mU7J28IOyeheuLiOuLpC5cIiwgLy8gdW5pcXVlOiAx7Jy866GcIO2VtOuGqOq4sCDrlYzrrLjsl5BcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVkdWNlciBMT0dfT1VUIC0gdXNlcicpO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvZ091dERvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9nT3V0RXJyb3I6IG51bGwsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgTE9HX09VVCAtIFNVQ0NFU1MgLSB1c2VyJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxvZ091dERvbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtZTogbnVsbCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvZ091dEVycm9yOiB0cnVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0FEX01ZX0lORk9fUkVRVUVTVDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgTE9BRF9NWV9JTkZPIC0gdXNlcicpO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRNeUluZm9Eb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxvYWRNeUluZm9FcnJvcjogbnVsbCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWR1Y2VyIExPQURfTVlfSU5GTyAtIFNVQ0NFU1MgLSB1c2VyJyk7XHJcbiAgICAgICAgICAgIGlmKCFhY3Rpb24uZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRNeUluZm9Eb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvZ0luRG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzaWduVXBEb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRNeUluZm9Eb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lOiBhY3Rpb24uZGF0YVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZE15SW5mb0Vycm9yOiB0cnVlLFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IHsgYWxsLCBmb3JrIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCB1c2VyU2FnYSBmcm9tICcuL3VzZXInO1xyXG5pbXBvcnQgcmV2aWV3U2FnYSBmcm9tICcuL3Jldmlldyc7XHJcblxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMCc7XHJcbi8vIGF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWU7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsodXNlclNhZ2EpLFxyXG4gICAgICAgIGZvcmsocmV2aWV3U2FnYSksXHJcbiAgICBdKVxyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IGFsbCwgZm9yaywgY2FsbCwgcHV0LCB0YWtlTGF0ZXN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IHtcclxuICAgIEFERF9SRVZJRVdfUkVRVUVTVCxcclxuICAgIEFERF9SRVZJRVdfU1VDQ0VTUyxcclxuICAgIEFERF9SRVZJRVdfRkFJTFVSRSxcclxuICAgIExPQURfQUxMX1JFVklFV19SRVFVRVNULFxyXG4gICAgTE9BRF9BTExfUkVWSUVXX1NVQ0NFU1MsXHJcbiAgICBMT0FEX0FMTF9SRVZJRVdfRkFJTFVSRVxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3Jldmlldyc7XHJcblxyXG4vLyBhcGlcclxuZnVuY3Rpb24gYWRkUmV2aWV3QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvcmV2aWV3JywgZGF0YSlcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEFsbFJldmlld0FQSSgpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoJy9yZXZpZXcvYWxsJylcclxufVxyXG5cclxuXHJcbi8vIGFjdGlvbiAtIHJlZHVjZXJzXHJcbmZ1bmN0aW9uKiBhZGRSZXZpZXcoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9ICB5aWVsZCBjYWxsKGFkZFJldmlld0FQSSwgYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NhZ2EgQUREX1JFVklFVycpOyAgXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1JFVklFV19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9SRVZJRVdfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZEFsbFJldmlldygpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gIHlpZWxkIGNhbGwobG9hZEFsbFJldmlld0FQSSlcclxuICAgICAgICBjb25zb2xlLmxvZygnc2FnYSBMT0FEX0FMTF9SRVZJRVcnKTsgIFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfQUxMX1JFVklFV19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSBcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0FMTF9SRVZJRVdfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gc3RhcnQgZnVuY3Rpb25cclxuZnVuY3Rpb24qIHdhdGNoUmV2aWV3KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfUkVWSUVXX1JFUVVFU1QsIGFkZFJldmlldyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRBbGxSZXZpZXcoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfQUxMX1JFVklFV19SRVFVRVNULCBsb2FkQWxsUmV2aWV3KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJldmlld1NhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICBmb3JrKHdhdGNoUmV2aWV3KSxcclxuICAgICAgZm9yayh3YXRjaExvYWRBbGxSZXZpZXcpLFxyXG5cclxuICAgIF0pO1xyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgYWxsLCBmb3JrLCBjYWxsLCBwdXQsIHRha2VMYXRlc3QsIGRlbGF5IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IHtcclxuICAgIExPR19JTl9SRVFVRVNULFxyXG4gICAgTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICBMT0dfSU5fU1VDQ0VTUyxcclxuICAgIFNJR05fVVBfUkVRVUVTVCxcclxuICAgIFNJR05fVVBfRkFJTFVSRSxcclxuICAgIFNJR05fVVBfU1VDQ0VTUyxcclxuICAgIExPR19PVVRfUkVRVUVTVCxcclxuICAgIExPR19PVVRfRkFJTFVSRSxcclxuICAgIExPR19PVVRfU1VDQ0VTUyxcclxuICAgIExPQURfTVlfSU5GT19SRVFVRVNULFxyXG4gICAgTE9BRF9NWV9JTkZPX0ZBSUxVUkUsXHJcbiAgICBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxufSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcblxyXG5cclxuLy8gYXBpXHJcbmZ1bmN0aW9uIGxvZ2luQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcyh7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgdXJsOiAnL3VzZXIvbG9naW4nLFxyXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWduVXBBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zKHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICB1cmw6ICcvdXNlci9zaWdudXAnLFxyXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxuICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dvdXRBUEkoKSB7XHJcbiAgICByZXR1cm4gYXhpb3Moe1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIHVybDogJy91c2VyL2xvZ291dCcsXHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZE15SW5mb0FQSSgpIHtcclxuICAgIHJldHVybiBheGlvcyh7XHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICB1cmw6ICcvdXNlcicsXHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuXHJcbi8vIGFjdGlvbiAtIHJlZHVjZXJzXHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gIHlpZWxkIGNhbGwobG9naW5BUEksIGFjdGlvbi5kYXRhKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NhZ2EgTE9HSU4nKTtcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHNpZ25VcChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gIHlpZWxkIGNhbGwoc2lnblVwQVBJLCBhY3Rpb24uZGF0YSlcclxuICAgICAgICBjb25zb2xlLmxvZygnc2FnYSBTSUdOLVVQJyk7IFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nT3V0KCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB5aWVsZCBjYWxsKGxvZ291dEFQSSlcclxuICAgICAgICBjb25zb2xlLmxvZygnc2FnYSBMT0dPVVQnKTtcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZE15SW5mbygpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gIHlpZWxkIGNhbGwobG9hZE15SW5mb0FQSSlcclxuICAgICAgICBjb25zb2xlLmxvZygnc2FnYSBMT0FEX01ZX0lORk8nKTsgXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBzdGFydCBmdW5jdGlvblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCwgbG9nT3V0KVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkTXlJbmZvKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX01ZX0lORk9fUkVRVUVTVCwgbG9hZE15SW5mbylcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgZm9yayh3YXRjaExvZ0luKSxcclxuICAgICAgZm9yayh3YXRjaFNpZ25VcCksXHJcbiAgICAgIGZvcmsod2F0Y2hMb2dPdXQpLFxyXG4gICAgICBmb3JrKHdhdGNoTG9hZE15SW5mbyksXHJcbiAgICBdKTtcclxufSIsImltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5cclxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMnO1xyXG5cclxuY29uc3QgbG9nZ2VyTWlkZGxld2FyZSA9ICh7IGRpc3BhdGNoLCBnZXRTdGF0ZSB9KSA9PiAobmV4dCkgPT4gKGFjdGlvbikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuICAgIHJldHVybiBuZXh0KGFjdGlvbik7XHJcbn07XHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuICAgIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlLCBsb2dnZXJNaWRkbGV3YXJlXTtcclxuICAgIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG4gICAgICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKTtcclxuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xyXG4gICAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gICAgcmV0dXJuIHN0b3JlO1xyXG59O1xyXG5cclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHtcclxuICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=