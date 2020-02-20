webpackHotUpdate("main",{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_anthonyyu_Desktop_icml2020submission6857_github_io_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bulma_css_bulma_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bulma/css/bulma.min.css */ "./node_modules/bulma/css/bulma.min.css");
/* harmony import */ var bulma_css_bulma_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bulma_css_bulma_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Hero */ "./src/components/Hero.js");
/* harmony import */ var _components_Dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Dashboard */ "./src/components/Dashboard.js");
/* harmony import */ var _components_Figures__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Figures */ "./src/components/Figures.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Footer */ "./src/components/Footer.js");
/* harmony import */ var _components_Landing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Landing */ "./src/components/Landing.js");
/* harmony import */ var _results_result_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./results/result.json */ "./src/results/result.json");
var _results_result_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./results/result.json */ "./src/results/result.json", 1);

var _jsxFileName = "/Users/anthonyyu/Desktop/icml2020submission6857.github.io/src/App.js";










function App() {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
        _useState2 = Object(_Users_anthonyyu_Desktop_icml2020submission6857_github_io_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        currentTab = _useState2[0],
        setCurrentTab = _useState2[1]; //let commitHash = jsonData['githash'].substring(0, 7);


  let lastUpdateTime = _results_result_json__WEBPACK_IMPORTED_MODULE_9__['timestamp'];
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Hero__WEBPACK_IMPORTED_MODULE_4__["default"], {
    lastUpdateTime: lastUpdateTime,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "tabs is-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: currentTab === 1 ? "is-active" : "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/",
    key: 1,
    onClick: e => {
      e.preventDefault();
      setCurrentTab(1);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Main")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: currentTab === 2 ? "is-active" : "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/",
    key: 2,
    onClick: e => {
      e.preventDefault();
      setCurrentTab(2);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Implementation Sensitivity")))), currentTab === 1 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Landing__WEBPACK_IMPORTED_MODULE_8__["default"], {
    mainRef: _results_result_json__WEBPACK_IMPORTED_MODULE_9__,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }) : null, currentTab === 2 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Figures__WEBPACK_IMPORTED_MODULE_6__["default"], {
    mainRef: _results_result_json__WEBPACK_IMPORTED_MODULE_9__,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=main.1512fd4706fe5508911d.hot-update.js.map