webpackHotUpdate_N_E("pages/index",{

/***/ "./api.js":
/*!****************!*\
  !*** ./api.js ***!
  \****************/
/*! exports provided: getMovieList, getMovieFromKMDB, getMovieInfoFromKMDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovieList", function() { return getMovieList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovieFromKMDB", function() { return getMovieFromKMDB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovieInfoFromKMDB", function() { return getMovieInfoFromKMDB; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var getMovieList = function getMovieList() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=5622df58bf74fc555a60bcb2baf58da6&targetDt=20210326').then(function (res) {
    return res.data;
  });
};
var getMovieFromKMDB = function getMovieFromKMDB(movieName) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&title=".concat(movieName, "&ServiceKey=QXYS65CA4DKL68FJYGTF")).then(function (res) {
    return res.data;
  });
};
var getMovieInfoFromKMDB = function getMovieInfoFromKMDB(movieSeq, movieId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&movieSeq=".concat(movieSeq, "&movieId=").concat(movieId, "&ServiceKey=QXYS65CA4DKL68FJYGTF")).then(function (res) {
    return res.data;
  });
};
/*
    const getNaverMovie = async () => {
        try {
            const res = await axios.get('http://localhost:5000/naver/getNaverMovie', {
                params: {
                    query: movieName,
                },
            });
            if(res && res.status === 200) {
                console.log(res.data);
                setMovieList(res.data.items)
            }
        } catch (err) {
            console.log('error', err);
        }
    }

    return (
        <AppLayout>
            <input placeholder="영화를 검색하세요." onChange={handleInput} />
            <button onClick={getNaverMovie}></button>
            <div>
                {
                    movieList && 
                    movieList.map((item, index) => (
                        <div key={index}>
                            <div>{item.title}</div>
                            <img src={item.image}/>
                        </div>
                    ))
                }
            </div>
        </AppLayout>
    )
*/

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBpLmpzIl0sIm5hbWVzIjpbImdldE1vdmllTGlzdCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJnZXRNb3ZpZUZyb21LTURCIiwibW92aWVOYW1lIiwiZ2V0TW92aWVJbmZvRnJvbUtNREIiLCJtb3ZpZVNlcSIsIm1vdmllSWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsU0FBTUMsNENBQUssQ0FBQ0MsR0FBTixDQUFVLGdKQUFWLEVBQzdCQyxJQUQ2QixDQUN4QixVQUFDQyxHQUFELEVBQVM7QUFDWCxXQUFPQSxHQUFHLENBQUNDLElBQVg7QUFDSCxHQUg2QixDQUFOO0FBQUEsQ0FBckI7QUFLQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLFNBQUQ7QUFBQSxTQUFlTiw0Q0FBSyxDQUFDQyxHQUFOLG1IQUFxSEssU0FBckgsdUNBQzFDSixJQUQwQyxDQUNyQyxVQUFDQyxHQUFELEVBQVM7QUFDWCxXQUFPQSxHQUFHLENBQUNDLElBQVg7QUFDSCxHQUgwQyxDQUFmO0FBQUEsQ0FBekI7QUFLQSxJQUFNRyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNDLFFBQUQsRUFBV0MsT0FBWDtBQUFBLFNBQXVCVCw0Q0FBSyxDQUFDQyxHQUFOLHNIQUF3SE8sUUFBeEgsc0JBQTRJQyxPQUE1SSx1Q0FDdERQLElBRHNELENBQ2pELFVBQUNDLEdBQUQsRUFBUztBQUNYLFdBQU9BLEdBQUcsQ0FBQ0MsSUFBWDtBQUNILEdBSHNELENBQXZCO0FBQUEsQ0FBN0I7QUFPUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmYyOTFhOWU5ZTI2MmNlZmI5MGIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldE1vdmllTGlzdCA9ICgpID0+IGF4aW9zLmdldCgnaHR0cDovL2tvYmlzLm9yLmtyL2tvYmlzb3BlbmFwaS93ZWJzZXJ2aWNlL3Jlc3QvYm94b2ZmaWNlL3NlYXJjaERhaWx5Qm94T2ZmaWNlTGlzdC5qc29uP2tleT01NjIyZGY1OGJmNzRmYzU1NWE2MGJjYjJiYWY1OGRhNiZ0YXJnZXREdD0yMDIxMDMyNicpXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5kYXRhXHJcbiAgICB9KVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldE1vdmllRnJvbUtNREIgPSAobW92aWVOYW1lKSA9PiBheGlvcy5nZXQoYGh0dHA6Ly9hcGkua29yZWFmaWxtLm9yLmtyL29wZW5hcGktZGF0YTIvd2lzZW51dC9zZWFyY2hfYXBpL3NlYXJjaF9qc29uMi5qc3A/Y29sbGVjdGlvbj1rbWRiX25ldzImdGl0bGU9JHttb3ZpZU5hbWV9JlNlcnZpY2VLZXk9UVhZUzY1Q0E0REtMNjhGSllHVEZgKVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXMuZGF0YVxyXG4gICAgfSlcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRNb3ZpZUluZm9Gcm9tS01EQiA9IChtb3ZpZVNlcSwgbW92aWVJZCkgPT4gYXhpb3MuZ2V0KGBodHRwOi8vYXBpLmtvcmVhZmlsbS5vci5rci9vcGVuYXBpLWRhdGEyL3dpc2VudXQvc2VhcmNoX2FwaS9zZWFyY2hfanNvbjIuanNwP2NvbGxlY3Rpb249a21kYl9uZXcyJm1vdmllU2VxPSR7bW92aWVTZXF9Jm1vdmllSWQ9JHttb3ZpZUlkfSZTZXJ2aWNlS2V5PVFYWVM2NUNBNERLTDY4RkpZR1RGYClcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzLmRhdGFcclxuICAgIH0pXHJcblxyXG5cclxuXHJcbi8qXHJcbiAgICBjb25zdCBnZXROYXZlck1vdmllID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL25hdmVyL2dldE5hdmVyTW92aWUnLCB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogbW92aWVOYW1lLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmKHJlcyAmJiByZXMuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgIHNldE1vdmllTGlzdChyZXMuZGF0YS5pdGVtcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIuyYge2ZlOulvCDqsoDsg4ntlZjshLjsmpQuXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0fSAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2dldE5hdmVyTW92aWV9PjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vdmllTGlzdCAmJiBcclxuICAgICAgICAgICAgICAgICAgICBtb3ZpZUxpc3QubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57aXRlbS50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgKVxyXG4qLyJdLCJzb3VyY2VSb290IjoiIn0=