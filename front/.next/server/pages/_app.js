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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _reducers_review__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/review */ "./reducers/review.js");





axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.withCredentials = true;

const rootReducer = (state, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
      return action.payload;

    default:
      {
        const combinedReducer = Object(redux__WEBPACK_IMPORTED_MODULE_2__["combineReducers"])({
          user: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["default"],
          review: _reducers_review__WEBPACK_IMPORTED_MODULE_4__["default"]
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
/*! exports provided: initialState, ADD_REVIEW_REQUEST, ADD_REVIEW_SUCCESS, ADD_REVIEW_FAILURE, MODIFY_REVIEW_REQUEST, MODIFY_REVIEW_SUCCESS, MODIFY_REVIEW_FAILURE, LOAD_REVIEW_REQUEST, LOAD_REVIEW_SUCCESS, LOAD_REVIEW_FAILURE, LOAD_MY_REVIEWS_REQUEST, LOAD_MY_REVIEWS_SUCCESS, LOAD_MY_REVIEWS_FAILURE, LOAD_MORE_MY_REVIEWS_REQUEST, LOAD_MORE_MY_REVIEWS_SUCCESS, LOAD_MORE_MY_REVIEWS_FAILURE, LOAD_ALL_REVIEWS_REQUEST, LOAD_ALL_REVIEWS_SUCCESS, LOAD_ALL_REVIEWS_FAILURE, LIKE_REVIEW_REQUEST, LIKE_REVIEW_SUCCESS, LIKE_REVIEW_FAILURE, UNLIKE_REVIEW_REQUEST, UNLIKE_REVIEW_SUCCESS, UNLIKE_REVIEW_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_REVIEW_REQUEST", function() { return ADD_REVIEW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_REVIEW_SUCCESS", function() { return ADD_REVIEW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_REVIEW_FAILURE", function() { return ADD_REVIEW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODIFY_REVIEW_REQUEST", function() { return MODIFY_REVIEW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODIFY_REVIEW_SUCCESS", function() { return MODIFY_REVIEW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODIFY_REVIEW_FAILURE", function() { return MODIFY_REVIEW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_REVIEW_REQUEST", function() { return LOAD_REVIEW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_REVIEW_SUCCESS", function() { return LOAD_REVIEW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_REVIEW_FAILURE", function() { return LOAD_REVIEW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_REVIEWS_REQUEST", function() { return LOAD_MY_REVIEWS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_REVIEWS_SUCCESS", function() { return LOAD_MY_REVIEWS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_REVIEWS_FAILURE", function() { return LOAD_MY_REVIEWS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MORE_MY_REVIEWS_REQUEST", function() { return LOAD_MORE_MY_REVIEWS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MORE_MY_REVIEWS_SUCCESS", function() { return LOAD_MORE_MY_REVIEWS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MORE_MY_REVIEWS_FAILURE", function() { return LOAD_MORE_MY_REVIEWS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ALL_REVIEWS_REQUEST", function() { return LOAD_ALL_REVIEWS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ALL_REVIEWS_SUCCESS", function() { return LOAD_ALL_REVIEWS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ALL_REVIEWS_FAILURE", function() { return LOAD_ALL_REVIEWS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_REVIEW_REQUEST", function() { return LIKE_REVIEW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_REVIEW_SUCCESS", function() { return LIKE_REVIEW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_REVIEW_FAILURE", function() { return LIKE_REVIEW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_REVIEW_REQUEST", function() { return UNLIKE_REVIEW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_REVIEW_SUCCESS", function() { return UNLIKE_REVIEW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_REVIEW_FAILURE", function() { return UNLIKE_REVIEW_FAILURE; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  addReviewDone: false,
  addReviewError: false,
  modifyReviewDone: false,
  modifyReviewError: false,
  loadReviewDone: false,
  loadReviewError: null,
  loadMyReviewsDone: false,
  loadMyReviewsError: null,
  loadMoreMyReviewsDone: false,
  loadMoreMyReviewsError: null,
  loadAllReviewsLoading: false,
  loadAllReviewsDone: false,
  loadAllReviewsError: null,
  likeReviewDone: false,
  likeReviewError: null,
  unlikeReviewDone: false,
  unlikeReviewError: null,
  myReviews: [],
  allReviews: [],
  review: []
};
const ADD_REVIEW_REQUEST = 'ADD_REVIEW_REQUEST';
const ADD_REVIEW_SUCCESS = 'ADD_REVIEW_SUCCESS';
const ADD_REVIEW_FAILURE = 'ADD_REVIEW_FAILURE';
const MODIFY_REVIEW_REQUEST = 'MODIFY_REVIEW_REQUEST';
const MODIFY_REVIEW_SUCCESS = 'MODIFY_REVIEW_SUCCESS';
const MODIFY_REVIEW_FAILURE = 'MODIFY_REVIEW_FAILURE';
const LOAD_REVIEW_REQUEST = 'LOAD_REVIEW_REQUEST';
const LOAD_REVIEW_SUCCESS = 'LOAD_REVIEW_SUCCESS';
const LOAD_REVIEW_FAILURE = 'LOAD_REVIEW_FAILURE';
const LOAD_MY_REVIEWS_REQUEST = 'LOAD_MY_REVIEWS_REQUEST';
const LOAD_MY_REVIEWS_SUCCESS = 'LOAD_MY_REVIEWS_SUCCESS';
const LOAD_MY_REVIEWS_FAILURE = 'LOAD_MY_REVIEWS_FAILURE';
const LOAD_MORE_MY_REVIEWS_REQUEST = 'LOAD_MORE_MY_REVIEWS_REQUEST';
const LOAD_MORE_MY_REVIEWS_SUCCESS = 'LOAD_MORE_MY_REVIEWS_SUCCESS';
const LOAD_MORE_MY_REVIEWS_FAILURE = 'LOAD_MORE_MY_REVIEWS_FAILURE';
const LOAD_ALL_REVIEWS_REQUEST = 'LOAD_ALL_REVIEWS_REQUEST';
const LOAD_ALL_REVIEWS_SUCCESS = 'LOAD_ALL_REVIEWS_SUCCESS';
const LOAD_ALL_REVIEWS_FAILURE = 'LOAD_ALL_REVIEWS_FAILURE';
const LIKE_REVIEW_REQUEST = 'LIKE_REVIEW_REQUEST';
const LIKE_REVIEW_SUCCESS = 'LIKE_REVIEW_SUCCESS';
const LIKE_REVIEW_FAILURE = 'LIKE_REVIEW_FAILURE';
const UNLIKE_REVIEW_REQUEST = 'UNLIKE_REVIEW_REQUEST';
const UNLIKE_REVIEW_SUCCESS = 'UNLIKE_REVIEW_SUCCESS';
const UNLIKE_REVIEW_FAILURE = 'UNLIKE_REVIEW_FAILURE';

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
        addReviewDone: true
      });

    case ADD_REVIEW_FAILURE:
      console.log('reducer ADD_REVIEW_FAILURE');
      return state = _objectSpread(_objectSpread({}, state), {}, {
        addReviewDone: false
      });

    case MODIFY_REVIEW_REQUEST:
      console.log('reducer MODIFY_REVIEW_REQUEST');
      return state = _objectSpread(_objectSpread({}, state), {}, {
        modifyReviewDone: false
      });

    case MODIFY_REVIEW_SUCCESS:
      console.log('reducer MODIFY_REVIEW_SUCCESS');
      return state = _objectSpread(_objectSpread({}, state), {}, {
        modifyReviewDone: true
      });

    case MODIFY_REVIEW_FAILURE:
      console.log('reducer MODIFY_REVIEW_FAILURE');
      return state = _objectSpread(_objectSpread({}, state), {}, {
        modifyReviewDone: false
      });

    case LOAD_REVIEW_REQUEST:
      console.log('reducer Review');
      return state = _objectSpread(_objectSpread({}, state), {}, {
        loadReviewDone: false
      });

    case LOAD_REVIEW_SUCCESS:
      console.log('reducer LOAD_REVIEW_SUCCESS');
      console.log(action.data);
      return state = _objectSpread(_objectSpread({}, state), {}, {
        loadReviewDone: true,
        review: action.data[0]
      });

    case LOAD_REVIEW_FAILURE:
      console.log('reducer LOAD_REVIEW_FAILURE');
      return state = _objectSpread(_objectSpread({}, state), {}, {
        loadReviewError: true
      });

    case LOAD_MY_REVIEWS_REQUEST:
      console.log('reducer Review');
      return state = _objectSpread(_objectSpread({}, state), {}, {
        loadMyReviewsDone: false
      });

    case LOAD_MY_REVIEWS_SUCCESS:
      console.log('reducer LOAD_MY_REVIEWS_SUCCESS');
      return state = _objectSpread(_objectSpread({}, state), {}, {
        loadMyReviewsDone: true,
        myReviews: action.data
      });

    case LOAD_MY_REVIEWS_FAILURE:
      console.log('reducer LOAD_MY_REVIEWS_FAILURE');
      return state = _objectSpread(_objectSpread({}, state), {}, {
        loadMyReviewsDone: false
      });

    case LOAD_MORE_MY_REVIEWS_REQUEST:
      console.log('reducer Review');
      return state = _objectSpread(_objectSpread({}, state), {}, {
        loadMoreMyReviewsDone: false
      });

    case LOAD_MORE_MY_REVIEWS_SUCCESS:
      console.log('reducer LOAD_MORE_MY_REVIEWS_SUCCESS');
      return state = _objectSpread(_objectSpread({}, state), {}, {
        loadMoreMyReviewsDone: true,
        myReviews: [...state.myReviews, ...action.data]
      });

    case LOAD_MORE_MY_REVIEWS_FAILURE:
      console.log('reducer LOAD_MORE_MY_REVIEWS_FAILURE');
      return state = _objectSpread(_objectSpread({}, state), {}, {
        loadMoreMyReviewsDone: false
      });

    case LOAD_ALL_REVIEWS_REQUEST:
      console.log('reducer Review');
      return state = _objectSpread(_objectSpread({}, state), {}, {
        loadAllReviewsLoading: true,
        loadAllReviewsDone: false
      });

    case LOAD_ALL_REVIEWS_SUCCESS:
      console.log('reducer LOAD_ALL_REVIEWS_SUCCESS');
      return state = _objectSpread(_objectSpread({}, state), {}, {
        loadAllReviewsLoading: false,
        loadAllReviewsDone: true,
        allReviews: [...state.allReviews, ...action.data] // hasMoreReviews: action.data.length < 50,

      });

    case LOAD_ALL_REVIEWS_FAILURE:
      console.log('reducer LOAD_ALL_REVIEWS_FAILURE');
      return state = _objectSpread(_objectSpread({}, state), {}, {
        loadAllReviewsLoading: false,
        loadAllReviewsDone: false
      });

    case LIKE_REVIEW_REQUEST:
      console.log('reducer Review');
      return state = _objectSpread(_objectSpread({}, state), {}, {
        likeReviewDone: false
      });

    case LIKE_REVIEW_SUCCESS:
      console.log('reducer LIKE_REVIEW_SUCCESS');
      const likeResult = state.allReviews.find(v => v._id === action.data.reviewId);
      likeResult.likers.push(action.data.userId);
      return state = _objectSpread(_objectSpread({}, state), {}, {
        likeReviewDone: true
      });

    case LIKE_REVIEW_FAILURE:
      console.log('reducer LIKE_REVIEW_FAILURE');
      return state = _objectSpread(_objectSpread({}, state), {}, {
        likeReviewDone: false
      });

    case UNLIKE_REVIEW_REQUEST:
      console.log('reducer Review');
      return state = _objectSpread(_objectSpread({}, state), {}, {
        unlikeReviewDone: false
      });

    case UNLIKE_REVIEW_SUCCESS:
      console.log('reducer UNLIKE_REVIEW_SUCCESS');
      const review = state.allReviews.find(v => v._id === action.data.reviewId);
      review.likers = review.likers.filter(v => v._id === action.data.userId);
      return state = _objectSpread(_objectSpread({}, state), {}, {
        unlikeReviewDone: true
      });

    case UNLIKE_REVIEW_FAILURE:
      console.log('reducer UNLIKE_REVIEW_FAILURE');
      return state = _objectSpread(_objectSpread({}, state), {}, {
        unlikeReviewDone: false
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
        logInDone: false
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
        signUpDone: false
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
        logOutDone: false
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
        loadMyInfoDone: false
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




axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = 'http://localhost:5000';
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.withCredentials = true;
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




function addReviewAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/review', data);
}

function* addReview(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addReviewAPI, action.data);
    console.log('saga ADD_REVIEW');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_review__WEBPACK_IMPORTED_MODULE_2__["ADD_REVIEW_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_review__WEBPACK_IMPORTED_MODULE_2__["ADD_REVIEW_FAILURE"],
      data: err.response.data
    });
  }
}

function modifyReviewAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/review/edit', data);
}

function* modifyReview(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(modifyReviewAPI, action.data);
    console.log('saga MODIFY_REVIEW');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_review__WEBPACK_IMPORTED_MODULE_2__["MODIFY_REVIEW_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_review__WEBPACK_IMPORTED_MODULE_2__["MODIFY_REVIEW_FAILURE"],
      data: err.response.data
    });
  }
}

function loadReviewAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/review/${data.writerId}/${data.movieId}`);
}

function* loadReview(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadReviewAPI, action.data);
    console.log('saga LOAD_REVIEW');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_review__WEBPACK_IMPORTED_MODULE_2__["LOAD_REVIEW_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_review__WEBPACK_IMPORTED_MODULE_2__["LOAD_REVIEW_FAILURE"],
      data: err.response.data
    });
  }
}

function loadMyReviewsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/review/${data}`);
}

function* loadMyReviews(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadMyReviewsAPI, action.data);
    console.log('saga LOAD_MY_REVIEWS');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_review__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_REVIEWS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_review__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_REVIEWS_FAILURE"],
      data: err.response.data
    });
  }
}

function loadMoreMyReviewsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/review/${data.userId}`, data);
}

function* loadMoreMyReviews(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadMoreMyReviewsAPI, action.data);
    console.log('saga LOAD_MY_REVIEWS');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_review__WEBPACK_IMPORTED_MODULE_2__["LOAD_MORE_MY_REVIEWS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_review__WEBPACK_IMPORTED_MODULE_2__["LOAD_MORE_MY_REVIEWS_FAILURE"],
      data: err.response.data
    });
  }
}

function loadAllReviewsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/reviews', data);
}

function* loadAllReviews(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadAllReviewsAPI, action.data);
    console.log('saga LOAD_ALL_REVIEWS');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_review__WEBPACK_IMPORTED_MODULE_2__["LOAD_ALL_REVIEWS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_review__WEBPACK_IMPORTED_MODULE_2__["LOAD_ALL_REVIEWS_FAILURE"],
      data: err.response.data
    });
  }
}

function likeReviewAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/review/like`, data);
}

function* likeReview(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(likeReviewAPI, action.data);
    console.log('saga LIKE_REVIEW');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_review__WEBPACK_IMPORTED_MODULE_2__["LIKE_REVIEW_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_review__WEBPACK_IMPORTED_MODULE_2__["LIKE_REVIEW_FAILURE"],
      data: err.response.data
    });
  }
}

function unLikeReviewAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/review/dislike`, data);
}

function* unLikeReview(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(unLikeReviewAPI, action.data);
    console.log('saga UNLIKE_REVIEW');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_review__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_REVIEW_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_review__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_REVIEW_FAILURE"],
      data: err.response.data
    });
  }
}

function* watchAddReview() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_review__WEBPACK_IMPORTED_MODULE_2__["ADD_REVIEW_REQUEST"], addReview);
}

function* watchModifyReview() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_review__WEBPACK_IMPORTED_MODULE_2__["MODIFY_REVIEW_REQUEST"], modifyReview);
}

function* watchLoadReview() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_review__WEBPACK_IMPORTED_MODULE_2__["LOAD_REVIEW_REQUEST"], loadReview);
}

function* watchMyReviews() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_review__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_REVIEWS_REQUEST"], loadMyReviews);
}

function* watchLoadMyReviews() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_review__WEBPACK_IMPORTED_MODULE_2__["LOAD_MORE_MY_REVIEWS_REQUEST"], loadMoreMyReviews);
}

function* watchAllReviews() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["throttle"])(2000, _reducers_review__WEBPACK_IMPORTED_MODULE_2__["LOAD_ALL_REVIEWS_REQUEST"], loadAllReviews);
}

function* watchLikeReview() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_review__WEBPACK_IMPORTED_MODULE_2__["LIKE_REVIEW_REQUEST"], likeReview);
}

function* watchUnLikeReview() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_review__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_REVIEW_REQUEST"], unLikeReview);
}

function* reviewSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddReview), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchModifyReview), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadReview), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchMyReviews), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadMyReviews), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAllReviews), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLikeReview), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnLikeReview)]);
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




function loginAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/user/login', data);
}

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

function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/user/signup', data);
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

function logoutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/user/logout', data);
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

function loadMyInfoAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/user');
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
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9yZXZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9yZXZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwid3JhcHBlciIsIndpdGhSZWR1eCIsImF4aW9zIiwiZGVmYXVsdHMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyb290UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkhZRFJBVEUiLCJwYXlsb2FkIiwiY29tYmluZWRSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwidXNlciIsInJldmlldyIsImluaXRpYWxTdGF0ZSIsImFkZFJldmlld0RvbmUiLCJhZGRSZXZpZXdFcnJvciIsIm1vZGlmeVJldmlld0RvbmUiLCJtb2RpZnlSZXZpZXdFcnJvciIsImxvYWRSZXZpZXdEb25lIiwibG9hZFJldmlld0Vycm9yIiwibG9hZE15UmV2aWV3c0RvbmUiLCJsb2FkTXlSZXZpZXdzRXJyb3IiLCJsb2FkTW9yZU15UmV2aWV3c0RvbmUiLCJsb2FkTW9yZU15UmV2aWV3c0Vycm9yIiwibG9hZEFsbFJldmlld3NMb2FkaW5nIiwibG9hZEFsbFJldmlld3NEb25lIiwibG9hZEFsbFJldmlld3NFcnJvciIsImxpa2VSZXZpZXdEb25lIiwibGlrZVJldmlld0Vycm9yIiwidW5saWtlUmV2aWV3RG9uZSIsInVubGlrZVJldmlld0Vycm9yIiwibXlSZXZpZXdzIiwiYWxsUmV2aWV3cyIsIkFERF9SRVZJRVdfUkVRVUVTVCIsIkFERF9SRVZJRVdfU1VDQ0VTUyIsIkFERF9SRVZJRVdfRkFJTFVSRSIsIk1PRElGWV9SRVZJRVdfUkVRVUVTVCIsIk1PRElGWV9SRVZJRVdfU1VDQ0VTUyIsIk1PRElGWV9SRVZJRVdfRkFJTFVSRSIsIkxPQURfUkVWSUVXX1JFUVVFU1QiLCJMT0FEX1JFVklFV19TVUNDRVNTIiwiTE9BRF9SRVZJRVdfRkFJTFVSRSIsIkxPQURfTVlfUkVWSUVXU19SRVFVRVNUIiwiTE9BRF9NWV9SRVZJRVdTX1NVQ0NFU1MiLCJMT0FEX01ZX1JFVklFV1NfRkFJTFVSRSIsIkxPQURfTU9SRV9NWV9SRVZJRVdTX1JFUVVFU1QiLCJMT0FEX01PUkVfTVlfUkVWSUVXU19TVUNDRVNTIiwiTE9BRF9NT1JFX01ZX1JFVklFV1NfRkFJTFVSRSIsIkxPQURfQUxMX1JFVklFV1NfUkVRVUVTVCIsIkxPQURfQUxMX1JFVklFV1NfU1VDQ0VTUyIsIkxPQURfQUxMX1JFVklFV1NfRkFJTFVSRSIsIkxJS0VfUkVWSUVXX1JFUVVFU1QiLCJMSUtFX1JFVklFV19TVUNDRVNTIiwiTElLRV9SRVZJRVdfRkFJTFVSRSIsIlVOTElLRV9SRVZJRVdfUkVRVUVTVCIsIlVOTElLRV9SRVZJRVdfU1VDQ0VTUyIsIlVOTElLRV9SRVZJRVdfRkFJTFVSRSIsInJlZHVjZXIiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImxpa2VSZXN1bHQiLCJmaW5kIiwidiIsIl9pZCIsInJldmlld0lkIiwibGlrZXJzIiwicHVzaCIsInVzZXJJZCIsImZpbHRlciIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJsb2FkTXlJbmZvRG9uZSIsImxvYWRNeUluZm9FcnJvciIsIm1lIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiTE9BRF9NWV9JTkZPX1JFUVVFU1QiLCJMT0FEX01ZX0lORk9fU1VDQ0VTUyIsIkxPQURfTVlfSU5GT19GQUlMVVJFIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwiZ29vZ2xlTG9naW5SZXF1ZXN0QWN0aW9uIiwiR09PR0xFX0xPR19JTl9SRVFVRVNUIiwiZXJyb3IiLCJiYXNlVVJMIiwicm9vdFNhZ2EiLCJhbGwiLCJmb3JrIiwidXNlclNhZ2EiLCJyZXZpZXdTYWdhIiwiYWRkUmV2aWV3QVBJIiwicG9zdCIsImFkZFJldmlldyIsImNhbGwiLCJwdXQiLCJlcnIiLCJyZXNwb25zZSIsIm1vZGlmeVJldmlld0FQSSIsIm1vZGlmeVJldmlldyIsImxvYWRSZXZpZXdBUEkiLCJnZXQiLCJ3cml0ZXJJZCIsIm1vdmllSWQiLCJsb2FkUmV2aWV3IiwicmVzdWx0IiwibG9hZE15UmV2aWV3c0FQSSIsImxvYWRNeVJldmlld3MiLCJsb2FkTW9yZU15UmV2aWV3c0FQSSIsImxvYWRNb3JlTXlSZXZpZXdzIiwibG9hZEFsbFJldmlld3NBUEkiLCJsb2FkQWxsUmV2aWV3cyIsImxpa2VSZXZpZXdBUEkiLCJsaWtlUmV2aWV3IiwidW5MaWtlUmV2aWV3QVBJIiwidW5MaWtlUmV2aWV3Iiwid2F0Y2hBZGRSZXZpZXciLCJ0YWtlTGF0ZXN0Iiwid2F0Y2hNb2RpZnlSZXZpZXciLCJ3YXRjaExvYWRSZXZpZXciLCJ3YXRjaE15UmV2aWV3cyIsIndhdGNoTG9hZE15UmV2aWV3cyIsIndhdGNoQWxsUmV2aWV3cyIsInRocm90dGxlIiwid2F0Y2hMaWtlUmV2aWV3Iiwid2F0Y2hVbkxpa2VSZXZpZXciLCJsb2dpbkFQSSIsImxvZ0luIiwic2lnblVwQVBJIiwic2lnblVwIiwibG9nb3V0QVBJIiwibG9nT3V0IiwibG9hZE15SW5mb0FQSSIsImxvYWRNeUluZm8iLCJ3YXRjaExvZ0luIiwid2F0Y2hTaWduVXAiLCJ3YXRjaExvZ091dCIsIndhdGNoTG9hZE15SW5mbyIsImxvZ2dlck1pZGRsZXdhcmUiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwibmV4dCIsImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJzYWdhVGFzayIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3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Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWwuY3NzJ1xyXG5cclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnXHJcblxyXG5mdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5Nb3ZpZUJveDwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgY2hhcnNldD1cIlVURi04XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NsaWNrLWNhcm91c2VsLzEuNi4wL3NsaWNrLm1pbi5jc3NcIiAvPiBcclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2xpY2stY2Fyb3VzZWwvMS42LjAvc2xpY2stdGhlbWUubWluLmNzc1wiIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChBcHApO1xyXG4iLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdXNlciBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJ1xyXG5pbXBvcnQgcmV2aWV3IGZyb20gJy4uL3JlZHVjZXJzL3JldmlldydcclxuXHJcbmF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWU7XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgY29uc3QgY29tYmluZWRSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgICAgICAgICAgICAgIHVzZXIsXHJcbiAgICAgICAgICAgICAgICByZXZpZXcsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gY29tYmluZWRSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG4iLCJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgYWRkUmV2aWV3RG9uZTogZmFsc2UsXHJcbiAgICBhZGRSZXZpZXdFcnJvcjogZmFsc2UsXHJcbiAgICBtb2RpZnlSZXZpZXdEb25lOiBmYWxzZSxcclxuICAgIG1vZGlmeVJldmlld0Vycm9yOiBmYWxzZSxcclxuICAgIGxvYWRSZXZpZXdEb25lOiBmYWxzZSxcclxuICAgIGxvYWRSZXZpZXdFcnJvcjogbnVsbCxcclxuICAgIGxvYWRNeVJldmlld3NEb25lOiBmYWxzZSxcclxuICAgIGxvYWRNeVJldmlld3NFcnJvcjogbnVsbCxcclxuICAgIGxvYWRNb3JlTXlSZXZpZXdzRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkTW9yZU15UmV2aWV3c0Vycm9yOiBudWxsLFxyXG4gICAgbG9hZEFsbFJldmlld3NMb2FkaW5nOiBmYWxzZSxcclxuICAgIGxvYWRBbGxSZXZpZXdzRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkQWxsUmV2aWV3c0Vycm9yOiBudWxsLFxyXG4gICAgbGlrZVJldmlld0RvbmU6IGZhbHNlLFxyXG4gICAgbGlrZVJldmlld0Vycm9yOiBudWxsLFxyXG4gICAgdW5saWtlUmV2aWV3RG9uZTogZmFsc2UsXHJcbiAgICB1bmxpa2VSZXZpZXdFcnJvcjogbnVsbCxcclxuICAgIG15UmV2aWV3czogW10sXHJcbiAgICBhbGxSZXZpZXdzOiBbXSxcclxuICAgIHJldmlldzogW10sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1JFVklFV19SRVFVRVNUID0gJ0FERF9SRVZJRVdfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUkVWSUVXX1NVQ0NFU1MgPSAnQUREX1JFVklFV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9SRVZJRVdfRkFJTFVSRSA9ICdBRERfUkVWSUVXX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgTU9ESUZZX1JFVklFV19SRVFVRVNUID0gJ01PRElGWV9SRVZJRVdfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBNT0RJRllfUkVWSUVXX1NVQ0NFU1MgPSAnTU9ESUZZX1JFVklFV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IE1PRElGWV9SRVZJRVdfRkFJTFVSRSA9ICdNT0RJRllfUkVWSUVXX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9SRVZJRVdfUkVRVUVTVCA9ICdMT0FEX1JFVklFV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUkVWSUVXX1NVQ0NFU1MgPSAnTE9BRF9SRVZJRVdfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1JFVklFV19GQUlMVVJFID0gJ0xPQURfUkVWSUVXX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9SRVZJRVdTX1JFUVVFU1QgPSAnTE9BRF9NWV9SRVZJRVdTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9SRVZJRVdTX1NVQ0NFU1MgPSAnTE9BRF9NWV9SRVZJRVdTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9SRVZJRVdTX0ZBSUxVUkUgPSAnTE9BRF9NWV9SRVZJRVdTX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NT1JFX01ZX1JFVklFV1NfUkVRVUVTVCA9ICdMT0FEX01PUkVfTVlfUkVWSUVXU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfTU9SRV9NWV9SRVZJRVdTX1NVQ0NFU1MgPSAnTE9BRF9NT1JFX01ZX1JFVklFV1NfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01PUkVfTVlfUkVWSUVXU19GQUlMVVJFID0gJ0xPQURfTU9SRV9NWV9SRVZJRVdTX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9BTExfUkVWSUVXU19SRVFVRVNUID0gJ0xPQURfQUxMX1JFVklFV1NfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0FMTF9SRVZJRVdTX1NVQ0NFU1MgPSAnTE9BRF9BTExfUkVWSUVXU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfQUxMX1JFVklFV1NfRkFJTFVSRSA9ICdMT0FEX0FMTF9SRVZJRVdTX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgTElLRV9SRVZJRVdfUkVRVUVTVCA9ICdMSUtFX1JFVklFV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExJS0VfUkVWSUVXX1NVQ0NFU1MgPSAnTElLRV9SRVZJRVdfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1JFVklFV19GQUlMVVJFID0gJ0xJS0VfUkVWSUVXX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1JFVklFV19SRVFVRVNUID0gJ1VOTElLRV9SRVZJRVdfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUkVWSUVXX1NVQ0NFU1MgPSAnVU5MSUtFX1JFVklFV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9SRVZJRVdfRkFJTFVSRSA9ICdVTkxJS0VfUkVWSUVXX0ZBSUxVUkUnO1xyXG5cclxuXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBBRERfUkVWSUVXX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWR1Y2VyIFJldmlldycpO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZFJldmlld0RvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBRERfUkVWSUVXX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWR1Y2VyIEFERF9SRVZJRVdfU1VDQ0VTUycpO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZFJldmlld0RvbmU6IHRydWUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEFERF9SRVZJRVdfRkFJTFVSRTpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgQUREX1JFVklFV19GQUlMVVJFJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkUmV2aWV3RG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIE1PRElGWV9SRVZJRVdfUkVRVUVTVDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgTU9ESUZZX1JFVklFV19SRVFVRVNUJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbW9kaWZ5UmV2aWV3RG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIE1PRElGWV9SRVZJRVdfU1VDQ0VTUzpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgTU9ESUZZX1JFVklFV19TVUNDRVNTJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbW9kaWZ5UmV2aWV3RG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTU9ESUZZX1JFVklFV19GQUlMVVJFOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVkdWNlciBNT0RJRllfUkVWSUVXX0ZBSUxVUkUnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBtb2RpZnlSZXZpZXdEb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9BRF9SRVZJRVdfUkVRVUVTVDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgUmV2aWV3Jyk7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZFJldmlld0RvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0FEX1JFVklFV19TVUNDRVNTOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVkdWNlciBMT0FEX1JFVklFV19TVUNDRVNTJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkUmV2aWV3RG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHJldmlldzogYWN0aW9uLmRhdGFbMF0sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIExPQURfUkVWSUVXX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWR1Y2VyIExPQURfUkVWSUVXX0ZBSUxVUkUnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkUmV2aWV3RXJyb3I6IHRydWUsXHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgY2FzZSBMT0FEX01ZX1JFVklFV1NfUkVRVUVTVDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgUmV2aWV3Jyk7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZE15UmV2aWV3c0RvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0FEX01ZX1JFVklFV1NfU1VDQ0VTUzpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgTE9BRF9NWV9SRVZJRVdTX1NVQ0NFU1MnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkTXlSZXZpZXdzRG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG15UmV2aWV3czogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIExPQURfTVlfUkVWSUVXU19GQUlMVVJFOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVkdWNlciBMT0FEX01ZX1JFVklFV1NfRkFJTFVSRScpO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRNeVJldmlld3NEb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9BRF9NT1JFX01ZX1JFVklFV1NfUkVRVUVTVDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgUmV2aWV3Jyk7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZE1vcmVNeVJldmlld3NEb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9BRF9NT1JFX01ZX1JFVklFV1NfU1VDQ0VTUzpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgTE9BRF9NT1JFX01ZX1JFVklFV1NfU1VDQ0VTUycpO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRNb3JlTXlSZXZpZXdzRG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG15UmV2aWV3czogWyAuLi5zdGF0ZS5teVJldmlld3MsIC4uLmFjdGlvbi5kYXRhIF0sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIExPQURfTU9SRV9NWV9SRVZJRVdTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWR1Y2VyIExPQURfTU9SRV9NWV9SRVZJRVdTX0ZBSUxVUkUnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkTW9yZU15UmV2aWV3c0RvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0FEX0FMTF9SRVZJRVdTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWR1Y2VyIFJldmlldycpO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRBbGxSZXZpZXdzTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRBbGxSZXZpZXdzRG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIExPQURfQUxMX1JFVklFV1NfU1VDQ0VTUzpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgTE9BRF9BTExfUkVWSUVXU19TVUNDRVNTJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZEFsbFJldmlld3NMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxvYWRBbGxSZXZpZXdzRG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFsbFJldmlld3M6IFsgLi4uc3RhdGUuYWxsUmV2aWV3cywgLi4uYWN0aW9uLmRhdGEgXSxcclxuICAgICAgICAgICAgICAgIC8vIGhhc01vcmVSZXZpZXdzOiBhY3Rpb24uZGF0YS5sZW5ndGggPCA1MCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9BRF9BTExfUkVWSUVXU19GQUlMVVJFOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVkdWNlciBMT0FEX0FMTF9SRVZJRVdTX0ZBSUxVUkUnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkQWxsUmV2aWV3c0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9hZEFsbFJldmlld3NEb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTElLRV9SRVZJRVdfUkVRVUVTVDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgUmV2aWV3Jyk7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbGlrZVJldmlld0RvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMSUtFX1JFVklFV19TVUNDRVNTOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVkdWNlciBMSUtFX1JFVklFV19TVUNDRVNTJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpa2VSZXN1bHQgPSBzdGF0ZS5hbGxSZXZpZXdzLmZpbmQoKHYpID0+IHYuX2lkID09PSBhY3Rpb24uZGF0YS5yZXZpZXdJZCk7XHJcbiAgICAgICAgICAgIGxpa2VSZXN1bHQubGlrZXJzLnB1c2goYWN0aW9uLmRhdGEudXNlcklkKTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsaWtlUmV2aWV3RG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTElLRV9SRVZJRVdfRkFJTFVSRTpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgTElLRV9SRVZJRVdfRkFJTFVSRScpO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxpa2VSZXZpZXdEb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgY2FzZSBVTkxJS0VfUkVWSUVXX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWR1Y2VyIFJldmlldycpO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHVubGlrZVJldmlld0RvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBVTkxJS0VfUkVWSUVXX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWR1Y2VyIFVOTElLRV9SRVZJRVdfU1VDQ0VTUycpO1xyXG4gICAgICAgICAgICBjb25zdCByZXZpZXcgPSBzdGF0ZS5hbGxSZXZpZXdzLmZpbmQoKHYpID0+IHYuX2lkID09PSBhY3Rpb24uZGF0YS5yZXZpZXdJZCk7XHJcbiAgICAgICAgICAgIHJldmlldy5saWtlcnMgPSByZXZpZXcubGlrZXJzLmZpbHRlcigodikgPT4gdi5faWQgPT09IGFjdGlvbi5kYXRhLnVzZXJJZCk7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgdW5saWtlUmV2aWV3RG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgVU5MSUtFX1JFVklFV19GQUlMVVJFOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVkdWNlciBVTkxJS0VfUkVWSUVXX0ZBSUxVUkUnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB1bmxpa2VSZXZpZXdEb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgfSAgXHJcbiBcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICAgIGxvZ0luRXJyb3I6IG51bGwsXHJcbiAgICBzaWduVXBEb25lOiBmYWxzZSxcclxuICAgIHNpZ25VcEVycm9yOiBudWxsLFxyXG4gICAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgICBsb2dPdXRFcnJvcjogbnVsbCxcclxuICAgIGxvYWRNeUluZm9Eb25lOiBmYWxzZSxcclxuICAgIGxvYWRNeUluZm9FcnJvcjogbnVsbCxcclxuICAgIG1lOiBudWxsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1JFUVVFU1QgPSAnTE9BRF9NWV9JTkZPX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1NVQ0NFU1MgPSAnTE9BRF9NWV9JTkZPX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX0ZBSUxVUkUgPSAnTE9BRF9NWV9JTkZPX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBnb29nbGVMb2dpblJlcXVlc3RBY3Rpb24gPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogR09PR0xFX0xPR19JTl9SRVFVRVNULFxyXG59KTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVkdWNlciBMT0dJTiAtIHVzZXInKTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgTE9HSU4gLSBTVUNDRVNTIC0gdXNlcicpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9nSW5Eb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWU6IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvZ0luRXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVkdWNlciBTSUdOLVVQIC0gdXNlcicpO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWR1Y2VyIFNJR04tVVAgLSBTVUNDRVNTIC0gdXNlcicpO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHNpZ25VcERvbmU6IHRydWUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBzaWduVXBFcnJvcjogXCLsnbTrr7gg7IKs7Jqp7KSR7J24IOydtOuplOydvCDsnoXri4jri6QuXCIsIC8vIHVuaXF1ZTogMeycvOuhnCDtlbTrhqjquLAg65WM66y47JeQXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgTE9HX09VVCAtIHVzZXInKTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2dPdXREb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVkdWNlciBMT0dfT1VUIC0gU1VDQ0VTUyAtIHVzZXInKTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9nT3V0RG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1lOiBudWxsLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9nT3V0RXJyb3I6IHRydWUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIExPQURfTVlfSU5GT19SRVFVRVNUOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVkdWNlciBMT0FEX01ZX0lORk8gLSB1c2VyJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZE15SW5mb0RvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0FEX01ZX0lORk9fU1VDQ0VTUzpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgTE9BRF9NWV9JTkZPIC0gU1VDQ0VTUyAtIHVzZXInKTtcclxuICAgICAgICAgICAgaWYoIWFjdGlvbi5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZE15SW5mb0RvbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9nSW5Eb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpZ25VcERvbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZE15SW5mb0RvbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWU6IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIExPQURfTVlfSU5GT19GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRNeUluZm9FcnJvcjogdHJ1ZSxcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsImltcG9ydCB7IGFsbCwgZm9yayB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgdXNlclNhZ2EgZnJvbSAnLi91c2VyJztcclxuaW1wb3J0IHJldmlld1NhZ2EgZnJvbSAnLi9yZXZpZXcnO1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDAnO1xyXG5heGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHVzZXJTYWdhKSxcclxuICAgICAgICBmb3JrKHJldmlld1NhZ2EpLFxyXG4gICAgXSlcclxufVxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBhbGwsIGZvcmssIGNhbGwsIHB1dCwgdGFrZUxhdGVzdCwgdGhyb3R0bGUgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQge1xyXG4gICAgQUREX1JFVklFV19SRVFVRVNULFxyXG4gICAgQUREX1JFVklFV19TVUNDRVNTLFxyXG4gICAgQUREX1JFVklFV19GQUlMVVJFLFxyXG4gICAgTU9ESUZZX1JFVklFV19SRVFVRVNULFxyXG4gICAgTU9ESUZZX1JFVklFV19TVUNDRVNTLFxyXG4gICAgTU9ESUZZX1JFVklFV19GQUlMVVJFLFxyXG4gICAgTE9BRF9SRVZJRVdfUkVRVUVTVCxcclxuICAgIExPQURfUkVWSUVXX1NVQ0NFU1MsXHJcbiAgICBMT0FEX1JFVklFV19GQUlMVVJFLFxyXG4gICAgTE9BRF9NWV9SRVZJRVdTX1JFUVVFU1QsXHJcbiAgICBMT0FEX01ZX1JFVklFV1NfU1VDQ0VTUyxcclxuICAgIExPQURfTVlfUkVWSUVXU19GQUlMVVJFLFxyXG4gICAgTE9BRF9NT1JFX01ZX1JFVklFV1NfUkVRVUVTVCxcclxuICAgIExPQURfTU9SRV9NWV9SRVZJRVdTX1NVQ0NFU1MsXHJcbiAgICBMT0FEX01PUkVfTVlfUkVWSUVXU19GQUlMVVJFLFxyXG4gICAgTE9BRF9BTExfUkVWSUVXU19SRVFVRVNULFxyXG4gICAgTE9BRF9BTExfUkVWSUVXU19TVUNDRVNTLFxyXG4gICAgTE9BRF9BTExfUkVWSUVXU19GQUlMVVJFLFxyXG4gICAgTElLRV9SRVZJRVdfUkVRVUVTVCxcclxuICAgIExJS0VfUkVWSUVXX1NVQ0NFU1MsXHJcbiAgICBMSUtFX1JFVklFV19GQUlMVVJFLFxyXG4gICAgVU5MSUtFX1JFVklFV19SRVFVRVNULFxyXG4gICAgVU5MSUtFX1JFVklFV19TVUNDRVNTLFxyXG4gICAgVU5MSUtFX1JFVklFV19GQUlMVVJFLFxyXG4gICAgXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvcmV2aWV3JztcclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZFJldmlld0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3JldmlldycsIGRhdGEpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRSZXZpZXcoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHlpZWxkIGNhbGwoYWRkUmV2aWV3QVBJLCBhY3Rpb24uZGF0YSlcclxuICAgICAgICBjb25zb2xlLmxvZygnc2FnYSBBRERfUkVWSUVXJyk7ICBcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfUkVWSUVXX1NVQ0NFU1MsXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1JFVklFV19GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vZGlmeVJldmlld0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3Jldmlldy9lZGl0JywgZGF0YSlcclxufVxyXG5cclxuZnVuY3Rpb24qIG1vZGlmeVJldmlldyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgeWllbGQgY2FsbChtb2RpZnlSZXZpZXdBUEksIGFjdGlvbi5kYXRhKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzYWdhIE1PRElGWV9SRVZJRVcnKTsgIFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IE1PRElGWV9SRVZJRVdfU1VDQ0VTUyxcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBNT0RJRllfUkVWSUVXX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFJldmlld0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAvcmV2aWV3LyR7ZGF0YS53cml0ZXJJZH0vJHtkYXRhLm1vdmllSWR9YClcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRSZXZpZXcoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFJldmlld0FQSSwgYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NhZ2EgTE9BRF9SRVZJRVcnKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1JFVklFV19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUkVWSUVXX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZE15UmV2aWV3c0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAvcmV2aWV3LyR7ZGF0YX1gKVxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZE15UmV2aWV3cyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkTXlSZXZpZXdzQVBJLCBhY3Rpb24uZGF0YSlcclxuICAgICAgICBjb25zb2xlLmxvZygnc2FnYSBMT0FEX01ZX1JFVklFV1MnKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX01ZX1JFVklFV1NfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX01ZX1JFVklFV1NfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkTW9yZU15UmV2aWV3c0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgL3Jldmlldy8ke2RhdGEudXNlcklkfWAsIGRhdGEpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkTW9yZU15UmV2aWV3cyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkTW9yZU15UmV2aWV3c0FQSSwgYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NhZ2EgTE9BRF9NWV9SRVZJRVdTJyk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9NT1JFX01ZX1JFVklFV1NfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX01PUkVfTVlfUkVWSUVXU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRBbGxSZXZpZXdzQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvcmV2aWV3cycsIGRhdGEpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkQWxsUmV2aWV3cyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkQWxsUmV2aWV3c0FQSSwgYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NhZ2EgTE9BRF9BTExfUkVWSUVXUycpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfQUxMX1JFVklFV1NfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0FMTF9SRVZJRVdTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlrZVJldmlld0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgL3Jldmlldy9saWtlYCwgZGF0YSlcclxufVxyXG5cclxuZnVuY3Rpb24qIGxpa2VSZXZpZXcoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9ICB5aWVsZCBjYWxsKGxpa2VSZXZpZXdBUEksIGFjdGlvbi5kYXRhKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzYWdhIExJS0VfUkVWSUVXJyk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTElLRV9SRVZJRVdfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMSUtFX1JFVklFV19GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuTGlrZVJldmlld0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgL3Jldmlldy9kaXNsaWtlYCwgZGF0YSlcclxufVxyXG5cclxuZnVuY3Rpb24qIHVuTGlrZVJldmlldyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bkxpa2VSZXZpZXdBUEksIGFjdGlvbi5kYXRhKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzYWdhIFVOTElLRV9SRVZJRVcnKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkxJS0VfUkVWSUVXX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5MSUtFX1JFVklFV19GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUmV2aWV3KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfUkVWSUVXX1JFUVVFU1QsIGFkZFJldmlldyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaE1vZGlmeVJldmlldygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTU9ESUZZX1JFVklFV19SRVFVRVNULCBtb2RpZnlSZXZpZXcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUmV2aWV3KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1JFVklFV19SRVFVRVNULCBsb2FkUmV2aWV3KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTXlSZXZpZXdzKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX01ZX1JFVklFV1NfUkVRVUVTVCwgbG9hZE15UmV2aWV3cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRNeVJldmlld3MoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfTU9SRV9NWV9SRVZJRVdTX1JFUVVFU1QsIGxvYWRNb3JlTXlSZXZpZXdzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWxsUmV2aWV3cygpIHtcclxuICAgIHlpZWxkIHRocm90dGxlKDIwMDAsIExPQURfQUxMX1JFVklFV1NfUkVRVUVTVCwgbG9hZEFsbFJldmlld3MpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMaWtlUmV2aWV3KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMSUtFX1JFVklFV19SRVFVRVNULCBsaWtlUmV2aWV3KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5MaWtlUmV2aWV3KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChVTkxJS0VfUkVWSUVXX1JFUVVFU1QsIHVuTGlrZVJldmlldyk7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJldmlld1NhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICBmb3JrKHdhdGNoQWRkUmV2aWV3KSxcclxuICAgICAgZm9yayh3YXRjaE1vZGlmeVJldmlldyksXHJcbiAgICAgIGZvcmsod2F0Y2hMb2FkUmV2aWV3KSxcclxuICAgICAgZm9yayh3YXRjaE15UmV2aWV3cyksXHJcbiAgICAgIGZvcmsod2F0Y2hMb2FkTXlSZXZpZXdzKSxcclxuICAgICAgZm9yayh3YXRjaEFsbFJldmlld3MpLFxyXG4gICAgICBmb3JrKHdhdGNoTGlrZVJldmlldyksXHJcbiAgICAgIGZvcmsod2F0Y2hVbkxpa2VSZXZpZXcpLFxyXG4gICAgICBcclxuICAgIF0pO1xyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgYWxsLCBmb3JrLCBjYWxsLCBwdXQsIHRha2VMYXRlc3QgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQge1xyXG4gICAgTE9HX0lOX1JFUVVFU1QsXHJcbiAgICBMT0dfSU5fRkFJTFVSRSxcclxuICAgIExPR19JTl9TVUNDRVNTLFxyXG4gICAgU0lHTl9VUF9SRVFVRVNULFxyXG4gICAgU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgTE9HX09VVF9SRVFVRVNULFxyXG4gICAgTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgTE9BRF9NWV9JTkZPX1JFUVVFU1QsXHJcbiAgICBMT0FEX01ZX0lORk9fRkFJTFVSRSxcclxuICAgIExPQURfTVlfSU5GT19TVUNDRVNTLFxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBsb2dpbkFQSShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dpbicsIGRhdGEpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gIHlpZWxkIGNhbGwobG9naW5BUEksIGFjdGlvbi5kYXRhKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NhZ2EgTE9HSU4nKTtcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2lnblVwQVBJKGRhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL3NpZ251cCcsIGRhdGEpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9ICB5aWVsZCBjYWxsKHNpZ25VcEFQSSwgYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NhZ2EgU0lHTi1VUCcpOyBcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nb3V0QVBJKCl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9nb3V0JywgZGF0YSlcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ091dCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgeWllbGQgY2FsbChsb2dvdXRBUEkpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NhZ2EgTE9HT1VUJyk7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZE15SW5mb0FQSSgpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoJy91c2VyJylcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRNeUluZm8oKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9ICB5aWVsZCBjYWxsKGxvYWRNeUluZm9BUEkpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NhZ2EgTE9BRF9NWV9JTkZPJyk7IFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfTVlfSU5GT19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfTVlfSU5GT19GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBsb2dJbilcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoU2lnblVwKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcClcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dClcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZE15SW5mbygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9NWV9JTkZPX1JFUVVFU1QsIGxvYWRNeUluZm8pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgIGZvcmsod2F0Y2hMb2dJbiksXHJcbiAgICAgIGZvcmsod2F0Y2hTaWduVXApLFxyXG4gICAgICBmb3JrKHdhdGNoTG9nT3V0KSxcclxuICAgICAgZm9yayh3YXRjaExvYWRNeUluZm8pLFxyXG4gICAgXSk7XHJcbn0iLCJpbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJztcclxuXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2FzJztcclxuXHJcbmNvbnN0IGxvZ2dlck1pZGRsZXdhcmUgPSAoeyBkaXNwYXRjaCwgZ2V0U3RhdGUgfSkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGFjdGlvbik7XHJcbiAgICByZXR1cm4gbmV4dChhY3Rpb24pO1xyXG59O1xyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcbiAgICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZSwgbG9nZ2VyTWlkZGxld2FyZV07XHJcbiAgICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuICAgICAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgICAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSk7XHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICAgIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICAgIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7XHJcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9