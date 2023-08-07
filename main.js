/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./key.js":
/*!****************!*\
  !*** ./key.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst key = \"cab84ff4fb064a0497d43816230308\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (key);\n\n\n//# sourceURL=webpack://weather-app/./key.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheet/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheet/style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*{\n    margin: 0px;\n    padding: 0px;\n    font-family: 'Poppins', sans-serif;\n    box-sizing: border-box;\n}\n\n/* Reset Input and Search field styling */\ninput {\n    all: unset;\n    box-sizing: border-box;\n}\ninput[type=\"search\"]::-webkit-search-decoration,\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-results-button,\ninput[type=\"search\"]::-webkit-search-results-decoration {\n    -webkit-appearance: none;\n}\n\nbody{\n    --color-primary: #26629A;\n    --color-dark-1: #181B21;\n    --color-dark-2: #222935;\n    --color-text: #fff;\n    --color-dark-3: #3E485E;\n    color: var(--color-text);\n    background-color: var(--color-dark-1);\n}\n\nbody.light {\n    --color-primary: #26629A;\n    --color-dark-1: #ffffff;\n    --color-dark-2: rgb(239, 243, 250);\n    --color-dark-3: #b4b4b4;\n    --color-text: #333;\n    color: var(--color-text);\n    background-color: var(--color-dark-1);\n}\n\n/* Experiment */\nbody {\n    --color-primary: #26439a;\n    --color-dark-1: #181B21;\n    --color-dark-2: #00000056;\n    --color-text: #fff;\n    --color-dark-3: #3E485E;\n    color: var(--color-text);\n    background-color: var(--color-dark-1);\n}\n\nbody.light{\n    --color-primary: #26629A;\n    --color-dark-1: #ffffff;\n    --color-dark-2: rgba(239, 243, 250, 0.199);\n    --color-dark-3: #b4b4b4;\n    --color-text: #000;\n    color: var(--color-text);\n    background-color: var(--color-dark-1);\n}\n\n.content{\n    min-height: 100vh;\n    background-color: var(--color-dark-1);\n    padding: 40px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    gap: 40px;\n\n    /* justify-content: center; */\n}\n\n.inactive {\n    opacity: 50%;\n    pointer-events: none;\n    user-select: none;\n}\n\n.hidden {\n    display: none;\n}\n\n.loading-gif {\n    position: absolute;\n    width: 80px;\n    left: 50%;\n    top: 50%;\n    transform: translateX(-50%) translateY(-50%);\n    z-index: 10;\n}\n\n.search-icon {\n    width: 20px;\n}\n\n/* Header */\n.header{\n    display: flex;\n    gap: 15px;\n    justify-content: space-between;\n    align-items: center;\n    width: clamp(300px, 80%, 1200px);\n}\n\n\n/* Location Button */\n.location-btn{\n    flex-shrink: 0;\n    background-color: var(--color-primary);\n    outline: 0;\n    border: 0;\n    width: 45px;\n    height: 45px;\n    border-radius: 100px;\n    display: grid;\n    place-content: center;\n}\n\n/* Search */\n.search-bar{\n    position: relative;\n    width: 400px;\n    min-width: 200px;\n}\n\n.search-input{\n    background-color: var(--color-dark-2);\n    border-radius: 100px;\n    height: 45px;\n    width: 100%;\n    font-size: 15px;\n    padding-left: 50px;\n    padding-right: 10px;\n}\n\n::placeholder {\n    color: var(--color-text);\n    opacity: 1;\n}\n\n:-ms-input-placeholder {\n    color: var(--color-text);\n}\n\n::-ms-input-placeholder {\n    color: var(--color-text);\n}\n\n.search-icon{\n    position: absolute;\n    left: 18px;\n    top: 50%;\n    transform: translateY(-50%);\n    user-select: none;\n}\n\n.error{\n    color: var(--color-primary);\n    position: absolute;\n    left: 50%;  \n    transform: translateX(-50%);\n    top: 50px;\n    font-size: 13px;\n}\n\n.hidden{\n    display: none;\n}\n\n/* Theme Toggle */\n.theme-toggle{\n    position: relative;\n    display: inline-block;\n}\n\n.theme-toggle-circle{\n    background-color: var(--color-primary);\n    width: 40px;\n    height: 40px;\n    border-radius: 100px;\n    display: grid;\n    place-content: center;\n    transition: all .2s ease-in-out;\n    position: absolute;\n    left: 0px;\n    top: -5px;\n    user-select: none;\n}\n\n.dark > * > .theme-icon{\n    padding-left: 2px;\n}\n\n.theme-toggle.dark .theme-toggle-circle{\n    transform: rotate(0deg);\n    left: 40%;\n}\n\n.theme-toggle.light .theme-toggle-circle {\n    transform: rotate(-180deg);\n    left: 0px;\n}\n\n.theme-toggle-track{\n    background-color: var(--color-dark-2);\n    min-height: 30px;\n    width: 65px;\n    border-radius: 100px;\n}\n\n/* Units Section */\n.units-section{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: -10px;\n}\n\n.units-container{\n    display: flex;\n    gap: 10px;\n    justify-content: center;\n    align-items: center;\n}\n\n.unit-btn{\n    outline: 0;\n    border: 0;\n    border-radius: 100px;\n    width: 100px;\n    background-color: var(--color-dark-2);\n    color: white;\n    height: 35px;\n    font-size: 13px;\n}\n\n.unit-btn.active{\n    background-color: var(--color-primary);\n    text-shadow: 0px 0px 4px #ffffff49;\n    font-weight: 500;\n}\n\n/* Current Section */\n.current-container{\n    display: grid;\n    grid-template-columns: 4fr 5fr 4fr;\n    gap: 12px;\n    width: clamp(300px, 95%, 1400px);\n    position: relative;\n}\n\n.current-left, .current-right{\n    flex: 1;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 12px;\n}\n\n/* Current card */\n.current-card{\n    display: grid;\n    gap: 3px;\n    background-color: var(--color-dark-2);\n    place-content: center;\n    place-items: center;\n    padding: 22px 0px;\n    min-width: 130px;\n}\n\n.current-card-icon{\n    margin-bottom: 2px;\n}\n\n.current-card-value{\n    font-size: 22px;\n    font-weight: 700;\n    text-shadow: 0px 0px 4px #ffffff73;\n}\n\n.current-card-label{\n    font-size: 14px;\n    font-weight: 600;\n    color: var(--color-primary);\n    text-shadow: 0px 0px 2px #524aa86f;\n}\n\n.current-center{\n    flex: 1;\n    display: grid;\n    place-items: center;\n    place-content: center;\n    min-width: 400px;\n    background-color: var(--color-dark-2);\n    text-align: center;\n    padding: 20px 20px;\n}\n\n.current-center-main{\n    display: grid;\n    margin-top: -24px;\n}\n\n.current-center-icon{\n    width: 90px;\n    place-self: center;\n    margin-bottom: -15px;\n}\n\n.current-center-body{\n    font-weight: 600;\n    display: grid;\n}\n\n.current-temp{\n    font-size: 65px;\n    margin-bottom: -10px;\n    text-shadow: 0px 0px 6px #ffffff73;\n}\n\n.current-condition{\n    font-size: 28px;\n    margin-bottom: 8px;\n    color: var(--color-primary);\n    text-shadow: 0px 0px 3px #524aa86f;\n}\n\n.current-location{\n    font-size: 14px;\n    text-shadow: 0px 0px 4px #ffffff73;\n}\n\n.current-center-datetime{\n    color: var(--color-dark-3);\n    font-size: 13px;\n    display:none;\n}\n\n/* Hourly Container */\n.hourly-container{\n    width: clamp(300px, 65%, 1920px);\n    width: clamp(300px, 80%, 1200px);\n    display: grid;\n    gap: 16px;\n\n    margin-top: 10px;\n}\n\n.hourly-container-main{\n    width: 100%;\n}\n\n.set{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    display: none;\n}\n\n.set.active{\n    display: flex;\n}\n\n.hourly-card{\n    flex: 1;\n    display: grid;\n    gap: 10px;\n    place-content: center;\n    place-items: center;\n    min-width: 80px;\n    position: relative;\n}\n\n.hourly-card:not(:last-child)::after {\n    content: '';\n    right: 0px;\n    position: absolute;\n    height: 60%;\n    top: 20px;\n    border-right: 2px solid var(--color-dark-2);\n}\n\n.hourly-time{\n    font-size: 14px;\n    font-weight: 600;\n    color: var(--color-primary);\n}\n\n.hourly-temp{\n    font-size: 22px;\n    font-weight: 700;\n}\n\n.hourly-icon{\n\n}\n\n\n/* Hourly Carousal */\n.hourly-container-carousal{\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.carousal-main{\n    display: flex;\n    gap: 12px;\n    user-select: none;\n}\n\n.dots{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 7px;\n}\n\n.dot{\n    width: 8px;\n    height: 8px;\n    border: 2px solid var(--color-text);\n    border-radius: 100px;\n}\n\n.dot.active{\n    background-color: var(--color-text);\n}\n\n.loading{\n    opacity: 50%;\n    pointer-events: none;\n    user-select: none;\n}\n\n\n/* Light Theme Adjustments */\nbody.light .unit-btn{\n    color: var(--color-text);\n}\n\nbody.light .unit-btn.active {\n    color: var(--color-dark-1)\n}\n\nbody.light .current-card-icon, body.light .search-icon, body.light .left-arrow, body.light .right-arrow{\n    filter: invert(80%);\n}\n\nbody.light .current-card-value, body.light .current-card-label, body.light .current-condition{\n    text-shadow: none;\n}\n\n\n/* Experiment */\n.content {\n    background: #1069AD;\n    background: linear-gradient(135deg, #062d4b, #020c2e);\n}\n\nbody.light .content{\n    background-color: #8BC6EC;\n    background: linear-gradient(135deg, #9fd1f7, #a0b3f1);\n\n    /* background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%); */\n}\n\nbody.light .current-card-icon, body.light .search-icon, body.light .left-arrow, body.light .right-arrow{\n    filter: invert(100%);\n}\n\n\n/* Media Queries */\n@media (max-width: 1100px){\n    .current-container{\n        grid-template-columns: 1fr 1fr;\n    }\n    .current-center{\n        grid-column: 1/-1;\n        grid-row: 1/2;\n    }\n    .current-center{\n        height: 320px;\n        padding-top: 30px;\n    }   \n    .hourly-container{\n        width: 90%;\n    }\n}\n\n@media (max-width: 900px) {\n    .header, .hourly-container, .current-container{\n        width: 100%;\n    }\n}\n\n@media (max-width: 724px) {\n    .hourly-container{\n        gap: 30px;\n    }\n    .carousal-main{\n        justify-content: space-between;\n        width: 30%;\n    }\n    .set{\n        flex-direction: column;\n        /* gap: 10px; */\n    }\n    .hourly-card{\n        display: flex;\n        align-items: center;\n        gap: 30px;\n        justify-content: space-between;\n        width: clamp(240px, 80%, 500px);\n        min-height: 80px;\n    }\n    .hourly-card:not(:last-child)::after{\n    content: none;\n    }\n    .hourly-card:not(:last-child)::before {\n        content: '';\n        position: absolute;\n        border-bottom: 2px solid var(--color-dark-2);\n        height: 100%;\n        width: 100%;\n    }\n    .hourly-time{\n        font-size: 20px;\n    }\n    .hourly-icon{\n        width: 50px;\n    }\n    .dot{\n        width: 10px;\n        height: 10px;\n    }\n    .current-container{\n        \n    }\n    .current-left, .current-right{\n        grid-column: 1/-1;\n    }\n}\n\n@media (max-width: 550px){\n    .content{\n        padding: 25px 20px;\n        gap: 20px;\n    }\n    .units-section{\n        margin-top: -3px;\n    }\n    .current-container{\n        margin: 0px;\n        gap: 5px;\n    }\n    .current-left, .current-right{\n        gap: 5px;\n    }\n    .hourly-container{\n        margin: 0px;\n        margin-top: -10px;\n        gap: 10px;\n    }\n    .current-center {\n        min-width: 320px;\n    }\n}\n\n@media (max-width: 400px) {\n    .header{\n        gap: 8px;\n    }\n    .content {\n        /* padding: 10px 10px; */\n        gap: 15px;\n    }\n    .current-center{\n        min-width: 280px;\n    }\n    .hourly-container{\n        gap: 4px;\n    }\n    .search-input{\n        height: 35px;\n        font-size: 13px;\n        padding-left: 35px;\n    }\n    .search-icon{\n        left: 10px;\n        width: 18px;\n    }\n    .location-btn{\n        width: 28px;\n        height: 28px;\n    }\n    .location-icon{\n        width: 20px;\n    }\n    .theme-toggle{\n        height: 30px;\n        align-items: center;\n        display: flex;\n        align-items: center;\n    }\n    .theme-toggle-track{\n        width: 35px;\n        min-height: 20px;\n    }\n    .theme-toggle-circle{\n        width: 25px;\n        height: 25px;\n        top: 3px;\n    }\n    .theme-toggle.dark .theme-toggle-circle{\n        left: 30%;\n    }\n    .theme-icon{\n        width: 18px;\n    }\n    .unit-btn{\n        height: 30px;\n    }\n    .hourly-time{\n        font-size: 15px;\n    }\n    .hourly-temp {\n        font-size: 20px;\n    }\n    .hourly-icon{\n        width: 40px;\n    }\n    .hourly-card{\n        min-height: 60px;\n    }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/stylesheet/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/stylesheet/style.css":
/*!**********************************!*\
  !*** ./src/stylesheet/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/stylesheet/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/stylesheet/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/javascript/cache.js":
/*!*********************************!*\
  !*** ./src/javascript/cache.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dataCache)\n/* harmony export */ });\nlet data = null;\n\nfunction dataCache(setter) {\n  if (setter) {\n    data = setter;\n    return true;\n  }\n  return data;\n}\n\n\n//# sourceURL=webpack://weather-app/./src/javascript/cache.js?");

/***/ }),

/***/ "./src/javascript/comp.js":
/*!********************************!*\
  !*** ./src/javascript/comp.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ comp)\n/* harmony export */ });\n// A factory that returns a dom element based on the parameters\nfunction comp(type, className, ...properties) {\n  const element = document.createElement(type);\n  if (className) element.className = className;\n  properties.forEach((obj) => {\n    const key = Object.keys(obj)[0];\n    const value = obj[key];\n    element.setAttribute(key, value);\n  });\n  return element;\n}\n\n\n//# sourceURL=webpack://weather-app/./src/javascript/comp.js?");

/***/ }),

/***/ "./src/javascript/displayLocalWeather.js":
/*!***********************************************!*\
  !*** ./src/javascript/displayLocalWeather.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayLocalWeather)\n/* harmony export */ });\n/* harmony import */ var _displayWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayWeather */ \"./src/javascript/displayWeather.js\");\n/* harmony import */ var _getUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getUrl */ \"./src/javascript/getUrl.js\");\n\n\n\nconst locationSuccess = (position) => {\n  const q = `${position.coords.latitude},${position.coords.longitude}`;\n  (0,_displayWeather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_getUrl__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(q));\n};\nconst locationError = (err) => {\n  console.log(err);\n};\n\n// Display Local Weather\nfunction displayLocalWeather() {\n  navigator.geolocation.getCurrentPosition(locationSuccess, locationError, {\n    enableHighAccuracy: true,\n  });\n}\n\n\n//# sourceURL=webpack://weather-app/./src/javascript/displayLocalWeather.js?");

/***/ }),

/***/ "./src/javascript/displayWeather.js":
/*!******************************************!*\
  !*** ./src/javascript/displayWeather.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayWeather),\n/* harmony export */   displayCurrentWeather: () => (/* binding */ displayCurrentWeather),\n/* harmony export */   displayHourlyWeather: () => (/* binding */ displayHourlyWeather)\n/* harmony export */ });\n/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cache */ \"./src/javascript/cache.js\");\n/* harmony import */ var _getCurrentData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getCurrentData */ \"./src/javascript/getCurrentData.js\");\n/* harmony import */ var _getCurrentItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getCurrentItems */ \"./src/javascript/getCurrentItems.js\");\n/* harmony import */ var _getHourlyData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getHourlyData */ \"./src/javascript/getHourlyData.js\");\n/* harmony import */ var _getHourlyItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getHourlyItems */ \"./src/javascript/getHourlyItems.js\");\n/* harmony import */ var _getWeatherData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getWeatherData */ \"./src/javascript/getWeatherData.js\");\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loading */ \"./src/javascript/loading.js\");\n\n\n\n\n\n\n\n\n// Display/Update current weather info. Takes in api response.\nfunction displayCurrentWeather(data) {\n  const filteredData = (0,_getCurrentData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\n  const currentItems = (0,_getCurrentItems__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(filteredData);\n\n  const left = document.querySelector(\".current-left\");\n  const center = document.querySelector(\".current-center\");\n  const right = document.querySelector(\".current-right\");\n\n  left.replaceChildren(...currentItems[0]);\n  center.replaceChildren(...currentItems[1]);\n  right.replaceChildren(...currentItems[2]);\n}\n\n// Display/Update hourly weather info. Takes in api response.\nfunction displayHourlyWeather(data) {\n  const hourlyData = (0,_getHourlyData__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(data);\n  const hourlyItems = (0,_getHourlyItems__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(hourlyData);\n\n  const set1 = document.querySelector(\".set-1\");\n  const set2 = document.querySelector(\".set-2\");\n  const set3 = document.querySelector(\".set-3\");\n\n  set1.replaceChildren(...hourlyItems.slice(0, 8));\n  set2.replaceChildren(...hourlyItems.slice(8, 16));\n  set3.replaceChildren(...hourlyItems.slice(16, 24));\n}\n\n// Stop Loading\n\nfunction displayWeather(src) {\n  (0,_loading__WEBPACK_IMPORTED_MODULE_6__.startLoading)();\n  // Response from API\n  const myWeather = (0,_getWeatherData__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(src);\n\n  // Get current data and display\n  myWeather\n    .then((data) => {\n      if (!data) return;\n      (0,_cache__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data);\n      displayCurrentWeather(data);\n    })\n    .catch((err) => console.log(err));\n\n  // Get hourly data and display\n  myWeather\n    .then((data) => {\n      if (!data) return;\n      displayHourlyWeather(data);\n      (0,_loading__WEBPACK_IMPORTED_MODULE_6__.stopLoading)();\n      console.log(\"past\");\n    })\n    .catch((err) => console.log(err));\n}\n\n\n//# sourceURL=webpack://weather-app/./src/javascript/displayWeather.js?");

/***/ }),

/***/ "./src/javascript/dom.js":
/*!*******************************!*\
  !*** ./src/javascript/dom.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ populateDom)\n/* harmony export */ });\n/* harmony import */ var _comp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comp */ \"./src/javascript/comp.js\");\n/* harmony import */ var _images_location_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/location.svg */ \"./src/images/location.svg\");\n/* harmony import */ var _getSearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getSearchBar */ \"./src/javascript/getSearchBar.js\");\n/* harmony import */ var _getThemeToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getThemeToggle */ \"./src/javascript/getThemeToggle.js\");\n/* harmony import */ var _getUnitsContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getUnitsContainer */ \"./src/javascript/getUnitsContainer.js\");\n/* harmony import */ var _getCarousalMain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getCarousalMain */ \"./src/javascript/getCarousalMain.js\");\n/* harmony import */ var _displayLocalWeather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./displayLocalWeather */ \"./src/javascript/displayLocalWeather.js\");\n\n\n\n\n\n\n\n\nfunction getLocationButton() {\n  const locationButton = (0,_comp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"button\", \"location-btn\");\n\n  const locationIcon = (0,_comp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"img\", \"location-icon\", { src: _images_location_svg__WEBPACK_IMPORTED_MODULE_1__ });\n  locationButton.append(locationIcon);\n\n  locationButton.addEventListener(\"click\", () => {\n    (0,_displayLocalWeather__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n  });\n  return locationButton;\n}\n\n// Add basic dom structure\nfunction populateDom() {\n  const content = document.querySelector(\".content\");\n\n  // content's children\n  const header = (0,_comp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"header\", \"header\");\n  const unitsSection = (0,_comp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"units-section\");\n  const currentContainer = (0,_comp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"current-container\");\n  const hourlyContainer = (0,_comp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"hourly-container\");\n  content.append(header, unitsSection, currentContainer, hourlyContainer);\n\n  // header's children\n  header.append(getLocationButton(), (0,_getSearchBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), (0,_getThemeToggle__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n\n  // unitsSection children\n  unitsSection.append((0,_getUnitsContainer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n\n  // Current Container's children\n  const currentLeft = (0,_comp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"current-left\");\n  const currentCenter = (0,_comp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"current-center\");\n  const currentRight = (0,_comp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"current-right\");\n  currentContainer.append(currentLeft, currentCenter, currentRight);\n\n  // current left, current center and current right children will be generated and added once weather data is fetched\n\n  // hourlyContainerMain => Child elements will be dynamically generated and added\n  const hourlyContainerMain = (0,_comp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"hourly-container-main\");\n  const hourlyContainerCarousal = (0,_comp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"hourly-container-carousal\");\n  const set1 = (0,_comp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"set set-1 active\");\n  const set2 = (0,_comp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"set set-2\");\n  const set3 = (0,_comp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"set set-3\");\n  hourlyContainerMain.append(set1, set2, set3);\n  hourlyContainer.append(hourlyContainerMain, hourlyContainerCarousal);\n\n  // hourlyContainerCarousal\n  hourlyContainerCarousal.append((0,_getCarousalMain__WEBPACK_IMPORTED_MODULE_5__[\"default\"])());\n}\n\n\n//# sourceURL=webpack://weather-app/./src/javascript/dom.js?");

/***/ }),

/***/ "./src/javascript/getCarousalMain.js":
/*!*******************************************!*\
  !*** ./src/javascript/getCarousalMain.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getCarousalMain)\n/* harmony export */ });\n/* harmony import */ var _comp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comp */ \"./src/javascript/comp.js\");\n/* harmony import */ var _images_left_arrow_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/left-arrow.svg */ \"./src/images/left-arrow.svg\");\n/* harmony import */ var _images_right_arrow_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/right-arrow.svg */ \"./src/images/right-arrow.svg\");\n\n\n\n\nfunction getCarousalMain() {\n  const carousalMain = (0,_comp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"carousal-main\");\n\n  // Construct component\n  const leftArrow = (0,_comp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"img\", \"left-arrow\", { src: _images_left_arrow_svg__WEBPACK_IMPORTED_MODULE_1__ });\n  const rightArrow = (0,_comp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"img\", \"right-arrow\", { src: _images_right_arrow_svg__WEBPACK_IMPORTED_MODULE_2__ });\n  const dots = (0,_comp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"dots\");\n  const dot1 = (0,_comp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"dot dot-1 active\");\n  const dot2 = (0,_comp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"dot dot-2\");\n  const dot3 = (0,_comp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"dot dot-3\");\n  dots.append(dot1, dot2, dot3);\n  carousalMain.append(leftArrow, dots, rightArrow);\n\n  // Handle Click Events\n  carousalMain.addEventListener(\"click\", (e) => {\n    const dotsArr = [dot1, dot2, dot3];\n    const curr = dots.querySelector(\".active\");\n    const currIndex = dotsArr.indexOf(curr);\n    const nextIndex = currIndex + 1 > 2 ? 0 : currIndex + 1;\n    const prevIndex = currIndex - 1 < 0 ? 2 : currIndex - 1;\n\n    if (e.target === dot1 || e.target === dot2 || e.target === dot3) {\n      curr.classList.remove(\"active\");\n      e.target.classList.add(\"active\");\n    }\n    if (e.target === rightArrow) {\n      curr.classList.remove(\"active\");\n      dotsArr[nextIndex].classList.add(\"active\");\n    }\n    if (e.target === leftArrow) {\n      curr.classList.remove(\"active\");\n      dotsArr[prevIndex].classList.add(\"active\");\n    }\n\n    const selectedDot = dots.querySelector(\".active\");\n    const indexOfSelectedDot = dotsArr.indexOf(selectedDot);\n    const sets = document.querySelectorAll(\".set\");\n    sets.forEach((set) => {\n      set.classList.remove(\"active\");\n    });\n    document\n      .querySelector(`.set-${indexOfSelectedDot + 1}`)\n      .classList.add(\"active\");\n  });\n  return carousalMain;\n}\n\n\n//# sourceURL=webpack://weather-app/./src/javascript/getCarousalMain.js?");

/***/ }),

/***/ "./src/javascript/getCurrentData.js":
/*!******************************************!*\
  !*** ./src/javascript/getCurrentData.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getCurrentData)\n/* harmony export */ });\n// Returns an obj containing current weather info filtered from the api response\nfunction getCurrentData(data) {\n  const {\n    cloud,\n    temp_c: tempC,\n    temp_f: tempF,\n    is_day: isDay,\n    condition,\n    wind_mph: windMph,\n    wind_kph: windKph,\n    wind_degree: windDegree,\n    wind_dir: windDir,\n    humidity,\n    feelslike_c: feelsLikeC,\n    feelslike_f: feelsLikeF,\n    uv,\n    vis_km: visKm,\n    vis_miles: visMiles,\n  } = data.current;\n  const { name, region, country, localtime } = data.location;\n  const { daily_chance_of_rain: dailyChanceOfRain } =\n    data.forecast.forecastday[0].day;\n  return {\n    cloud,\n    isDay,\n    condition: condition.text,\n    tempC,\n    tempF,\n    feelsLikeC,\n    feelsLikeF,\n    humidity,\n    windMph,\n    windKph,\n    windDegree,\n    windDir,\n    uv,\n    visKm,\n    visMiles,\n    dailyChanceOfRain,\n    weatherIcon: condition.icon,\n\n    name,\n    region,\n    country,\n    localtime,\n  };\n}\n\n\n//# sourceURL=webpack://weather-app/./src/javascript/getCurrentData.js?");

/***/ }),

/***/ "./src/javascript/getCurrentItems.js":
/*!*******************************************!*\
  !*** ./src/javascript/getCurrentItems.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getCurrentItems)\n/* harmony export */ });\n/* harmony import */ var _comp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comp */ \"./src/javascript/comp.js\");\n/* harmony import */ var _images_cloudiness_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/cloudiness.svg */ \"./src/images/cloudiness.svg\");\n/* harmony import */ var _images_uv_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/uv.svg */ \"./src/images/uv.svg\");\n/* harmony import */ var _images_visibility_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/visibility.svg */ \"./src/images/visibility.svg\");\n/* harmony import */ var _images_wind_direction_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/wind-direction.svg */ \"./src/images/wind-direction.svg\");\n/* harmony import */ var _images_feels_like_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/feels-like.svg */ \"./src/images/feels-like.svg\");\n/* harmony import */ var _images_humidity_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/humidity.svg */ \"./src/images/humidity.svg\");\n/* harmony import */ var _images_chance_of_rain_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/chance-of-rain.svg */ \"./src/images/chance-of-rain.svg\");\n/* harmony import */ var _images_wind_speed_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/wind-speed.svg */ \"./src/images/wind-speed.svg\");\n\n\n\n\n\n\n\n\n\n\n// Get current weather card\nfunction getCurrentCard(label, value, icon) {\n  const currentCard = (0,_comp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"current-card\");\n\n  const currentLabel = (0,_comp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"current-card-label\");\n  currentLabel.textContent = label;\n  const currentValue = (0,_comp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"current-card-value\");\n  currentValue.textContent = value;\n  const currentIcon = (0,_comp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"img\", \"current-card-icon\");\n  currentIcon.src = icon;\n\n  currentCard.append(currentIcon, currentValue, currentLabel);\n  return currentCard;\n}\n\n// Get current weather main\nfunction getCurrentCenterMain(obj) {\n  const main = (0,_comp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"current-center-main\");\n\n  // Is the current unit celsius?\n  const isC = document\n    .querySelector(\".celsius-btn\")\n    .classList.contains(\"active\");\n\n  const icon = (0,_comp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"img\", \"current-center-icon\");\n  icon.src = obj.weatherIcon;\n\n  const body = (0,_comp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"current-center-body\");\n  const currentTemp = (0,_comp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"current-temp\");\n  currentTemp.textContent = isC ? `${obj.tempC}°C` : `${obj.tempF}°F`;\n  const currentCondition = (0,_comp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"current-condition\");\n  currentCondition.textContent = obj.condition;\n  const currentLocation = (0,_comp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"current-location\");\n  currentLocation.textContent = obj.region\n    ? `${obj.name}, ${obj.region}, ${obj.country}`\n    : `${obj.name}, ${obj.country}`;\n  console.log(obj);\n  body.append(currentTemp, currentCondition, currentLocation);\n\n  main.append(icon, body);\n  return main;\n}\n\nfunction getCurrentItems(obj) {\n  const currentItemsLeft = [];\n\n  // Is the current unit celsius?\n  const isC = document\n    .querySelector(\".celsius-btn\")\n    .classList.contains(\"active\");\n\n  // Left items\n  const cloudiness = getCurrentCard(\n    \"Cloudiness\",\n    `${obj.cloud} %`,\n    _images_cloudiness_svg__WEBPACK_IMPORTED_MODULE_1__\n  );\n  const uv = getCurrentCard(\"UV Index\", obj.uv, _images_uv_svg__WEBPACK_IMPORTED_MODULE_2__);\n  const visibility = getCurrentCard(\n    \"Visibility\",\n    isC ? `${obj.visKm} km` : `${obj.visMiles} m`,\n    _images_visibility_svg__WEBPACK_IMPORTED_MODULE_3__\n  );\n  const windDirection = getCurrentCard(\n    \"Wind Direction\",\n    obj.windDir,\n    _images_wind_direction_svg__WEBPACK_IMPORTED_MODULE_4__\n  );\n  currentItemsLeft.push(cloudiness, uv, visibility, windDirection);\n  windDirection.querySelector(\n    \"img\"\n  ).style.transform = `rotate(${obj.windDegree}deg)`;\n\n  // Right items\n  const currentItemsRight = [];\n  const feelsLike = getCurrentCard(\n    \"Feels Like\",\n    isC ? `${obj.feelsLikeC} °C` : `${obj.feelsLikeF} °F`,\n    _images_feels_like_svg__WEBPACK_IMPORTED_MODULE_5__\n  );\n  const humidity = getCurrentCard(\n    \"Humidity\",\n    `${obj.humidity} %`,\n    _images_humidity_svg__WEBPACK_IMPORTED_MODULE_6__\n  );\n  const chanceOfRain = getCurrentCard(\n    \"Chance Of Rain\",\n    `${obj.dailyChanceOfRain} %`,\n    _images_chance_of_rain_svg__WEBPACK_IMPORTED_MODULE_7__\n  );\n  const windSpeed = getCurrentCard(\n    \"Wind Speed\",\n    isC ? `${obj.windKph} kph` : `${obj.windMph} mph`,\n    _images_wind_speed_svg__WEBPACK_IMPORTED_MODULE_8__\n  );\n  currentItemsRight.push(feelsLike, humidity, chanceOfRain, windSpeed);\n\n  // Center Items\n  const currentCenterDatetime = (0,_comp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"current-center-datetime\");\n  currentCenterDatetime.textContent = obj.localtime;\n  const currentItemsCenter = [getCurrentCenterMain(obj), currentCenterDatetime];\n\n  return [currentItemsLeft, currentItemsCenter, currentItemsRight];\n}\n\n\n//# sourceURL=webpack://weather-app/./src/javascript/getCurrentItems.js?");

/***/ }),

/***/ "./src/javascript/getHourlyData.js":
/*!*****************************************!*\
  !*** ./src/javascript/getHourlyData.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getHourlyData)\n/* harmony export */ });\n// Format 24 hour time into 12 hours\nfunction formatHours(time) {\n  let res = \"\";\n  if (time === \"12\") res = `12 PM`;\n  else if (time === \"00\") res = `12 AM`;\n  else if (time > 12) res = `${+time % 12} PM`;\n  else res = `${+time} AM`;\n  return res;\n}\n\n// Returns hourly data for the next 24 hours\nfunction getHourlyData(data) {\n  const localTime = data.location.localtime;\n  const currentHour = localTime.split(\" \")[1].split(\":\")[0];\n  const date = localTime.split(\" \")[0];\n\n  const hourlyData = [\n    ...data.forecast.forecastday[0].hour,\n    ...data.forecast.forecastday[1].hour,\n  ];\n  const filteredData = hourlyData\n    .filter((hourData) => {\n      const currDate = hourData.time.split(\" \")[0];\n      const currTime = hourData.time.split(\" \")[1].split(\":\")[0];\n      if (date === currDate && +currTime > +currentHour) return true;\n      if (date !== currDate && +currTime <= +currentHour) return true;\n      return false;\n    })\n    .map((hourData) => {\n      const { temp_c: tempC, temp_f: tempF, condition, time } = hourData;\n      const hours = time.split(\" \")[1].split(\":\")[0];\n      return {\n        tempC,\n        tempF,\n        weatherIcon: condition.icon,\n        time: formatHours(hours),\n      };\n    });\n  return filteredData;\n}\n\n\n//# sourceURL=webpack://weather-app/./src/javascript/getHourlyData.js?");

/***/ }),

/***/ "./src/javascript/getHourlyItems.js":
/*!******************************************!*\
  !*** ./src/javascript/getHourlyItems.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getHourlyItems)\n/* harmony export */ });\n/* harmony import */ var _comp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comp */ \"./src/javascript/comp.js\");\n\n\n// Return an array of dom elements where each element contains an hour's weather info\nfunction getHourlyItems(data) {\n  const hourlyItems = [];\n  data.forEach((hourData) => {\n    const time = (0,_comp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"hourly-time\");\n    time.textContent = hourData.time;\n\n    const temp = (0,_comp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"hourly-temp\");\n    if (document.querySelector(\".celsius-btn\").classList.contains(\"active\"))\n      temp.textContent = `${Math.round(hourData.tempC)} °C`;\n    else temp.textContent = `${Math.round(hourData.tempF)} °F`;\n\n    const icon = (0,_comp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"img\", \"hourly-icon\");\n    icon.src = hourData.weatherIcon;\n\n    const hourlyCard = (0,_comp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"hourly-card\");\n    hourlyCard.append(time, temp, icon);\n    hourlyItems.push(hourlyCard);\n  });\n  return hourlyItems;\n}\n\n\n//# sourceURL=webpack://weather-app/./src/javascript/getHourlyItems.js?");

/***/ }),

/***/ "./src/javascript/getSearchBar.js":
/*!****************************************!*\
  !*** ./src/javascript/getSearchBar.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getSearchBar)\n/* harmony export */ });\n/* harmony import */ var _comp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comp */ \"./src/javascript/comp.js\");\n/* harmony import */ var _images_search_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/search.svg */ \"./src/images/search.svg\");\n/* harmony import */ var _displayWeather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayWeather */ \"./src/javascript/displayWeather.js\");\n/* harmony import */ var _getUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getUrl */ \"./src/javascript/getUrl.js\");\n\n\n\n\n\nfunction getSearchBar() {\n  const searchBar = (0,_comp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"search-bar\");\n\n  const searchInput = (0,_comp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n    \"input\",\n    \"search-input\",\n    { type: \"search\" },\n    { placeholder: \"Search Location\" }\n  );\n  const searchIcon = (0,_comp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"img\", \"search-icon\", { src: _images_search_svg__WEBPACK_IMPORTED_MODULE_1__ });\n  const error = (0,_comp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"error hidden\");\n  error.textContent = \"Place Not Found\";\n  searchBar.append(searchIcon, searchInput, error);\n\n  // Handle search\n  searchInput.addEventListener(\"keydown\", (e) => {\n    if (e.key === \"Enter\" && searchInput.value) {\n      (0,_displayWeather__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_getUrl__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(searchInput.value));\n    }\n    if (!document.querySelector(\".error\").classList.contains(\"hidden\"))\n      document.querySelector(\".error\").classList.add(\"hidden\");\n  });\n\n  return searchBar;\n}\n\n\n//# sourceURL=webpack://weather-app/./src/javascript/getSearchBar.js?");

/***/ }),

/***/ "./src/javascript/getThemeToggle.js":
/*!******************************************!*\
  !*** ./src/javascript/getThemeToggle.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getThemeToggle)\n/* harmony export */ });\n/* harmony import */ var _images_theme_dark_2_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/theme-dark-2.svg */ \"./src/images/theme-dark-2.svg\");\n/* harmony import */ var _images_theme_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/theme.svg */ \"./src/images/theme.svg\");\n/* harmony import */ var _comp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comp */ \"./src/javascript/comp.js\");\n\n\n\n\nfunction getThemeToggle() {\n  const themeToggle = (0,_comp__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"div\", \"theme-toggle dark\");\n\n  // themeToggle's children\n  const themeToggleCircle = (0,_comp__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"div\", \"theme-toggle-circle\");\n  const themeIcon = (0,_comp__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"img\", \"theme-icon\", { src: _images_theme_dark_2_svg__WEBPACK_IMPORTED_MODULE_0__ });\n  themeToggleCircle.append(themeIcon);\n  const themeToggleTrack = (0,_comp__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"div\", \"theme-toggle-track\");\n  themeToggle.append(themeToggleCircle, themeToggleTrack);\n\n  // Add event listener to themeToggle\n  themeToggle.addEventListener(\"click\", () => {\n    if (themeToggle.classList.contains(\"dark\")) {\n      themeToggle.classList.remove(\"dark\");\n      themeToggle.classList.add(\"light\");\n      themeIcon.src = _images_theme_svg__WEBPACK_IMPORTED_MODULE_1__;\n      document.body.classList.add(\"light\");\n    } else {\n      themeToggle.classList.remove(\"light\");\n      themeToggle.classList.add(\"dark\");\n      themeIcon.src = _images_theme_dark_2_svg__WEBPACK_IMPORTED_MODULE_0__;\n      document.body.classList.remove(\"light\");\n    }\n  });\n  return themeToggle;\n}\n\n\n//# sourceURL=webpack://weather-app/./src/javascript/getThemeToggle.js?");

/***/ }),

/***/ "./src/javascript/getUnitsContainer.js":
/*!*********************************************!*\
  !*** ./src/javascript/getUnitsContainer.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getUnitsContainer)\n/* harmony export */ });\n/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cache */ \"./src/javascript/cache.js\");\n/* harmony import */ var _comp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comp */ \"./src/javascript/comp.js\");\n/* harmony import */ var _displayWeather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayWeather */ \"./src/javascript/displayWeather.js\");\n\n\n\n\nfunction getUnitsContainer() {\n  const unitsContainer = (0,_comp__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"div\", \"units-container\");\n\n  // Construct Component\n  const celsiusButton = (0,_comp__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"button\", \"unit-btn celsius-btn active\");\n  celsiusButton.textContent = \"Celsius\";\n  const fahrenheitButton = (0,_comp__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"button\", \"unit-btn fahrenheit-btn\");\n  fahrenheitButton.textContent = \"Fahrenheit\";\n  unitsContainer.append(celsiusButton, fahrenheitButton);\n\n  // Handle Click Events\n  unitsContainer.addEventListener(\"click\", (e) => {\n    if (e.target === celsiusButton) {\n      celsiusButton.classList.add(\"active\");\n      fahrenheitButton.classList.remove(\"active\");\n    } else if (e.target === fahrenheitButton) {\n      fahrenheitButton.classList.add(\"active\");\n      celsiusButton.classList.remove(\"active\");\n    }\n    // Re-render current weather info and hourly weather info\n    const data = (0,_cache__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    if (data) {\n      (0,_displayWeather__WEBPACK_IMPORTED_MODULE_2__.displayCurrentWeather)(data);\n      (0,_displayWeather__WEBPACK_IMPORTED_MODULE_2__.displayHourlyWeather)(data);\n    }\n  });\n  return unitsContainer;\n}\n\n\n//# sourceURL=webpack://weather-app/./src/javascript/getUnitsContainer.js?");

/***/ }),

/***/ "./src/javascript/getUrl.js":
/*!**********************************!*\
  !*** ./src/javascript/getUrl.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getUrl)\n/* harmony export */ });\n/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../key */ \"./key.js\");\n\n\nfunction getUrl(place) {\n  const apiKey = _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  const def = \"New York\";\n  if (place)\n    return `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${place}&days=2`;\n  return `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${def}&days=2`;\n}\n\n\n//# sourceURL=webpack://weather-app/./src/javascript/getUrl.js?");

/***/ }),

/***/ "./src/javascript/getWeatherData.js":
/*!******************************************!*\
  !*** ./src/javascript/getWeatherData.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getWeatherData)\n/* harmony export */ });\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading */ \"./src/javascript/loading.js\");\n\n\nasync function getWeatherData(src) {\n  try {\n    const response = await fetch(src, { mode: \"cors\" });\n    if (!response.ok) throw new Error(\"Invalid Request\");\n    const json = await response.json();\n    return json;\n  } catch (err) {\n    (0,_loading__WEBPACK_IMPORTED_MODULE_0__.stopLoading)();\n    document.querySelector(\".error\").classList.remove(\"hidden\");\n  }\n  return undefined;\n}\n\n\n//# sourceURL=webpack://weather-app/./src/javascript/getWeatherData.js?");

/***/ }),

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stylesheet_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stylesheet/style.css */ \"./src/stylesheet/style.css\");\n/* harmony import */ var _images_loading_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/loading.gif */ \"./src/images/loading.gif\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ \"./src/javascript/dom.js\");\n/* harmony import */ var _displayWeather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayWeather */ \"./src/javascript/displayWeather.js\");\n/* harmony import */ var _getUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getUrl */ \"./src/javascript/getUrl.js\");\n\n\n\n\n\n\n// Add a loading Gif\nconst loading = document.createElement(\"div\");\nconst loadingIcon = document.createElement(\"img\");\nloadingIcon.classList.add(\"loading-gif\");\nloadingIcon.src = _images_loading_gif__WEBPACK_IMPORTED_MODULE_1__;\nloading.classList.add(\"loading-container\", \"hidden\");\nloading.append(loadingIcon);\ndocument.body.append(loading);\n\n(0,_dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_displayWeather__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_getUrl__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n\n\n//# sourceURL=webpack://weather-app/./src/javascript/index.js?");

/***/ }),

/***/ "./src/javascript/loading.js":
/*!***********************************!*\
  !*** ./src/javascript/loading.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   startLoading: () => (/* binding */ startLoading),\n/* harmony export */   stopLoading: () => (/* binding */ stopLoading)\n/* harmony export */ });\n// Start Loading\nfunction startLoading() {\n  document.querySelector(\".loading-container\").classList.remove(\"hidden\");\n\n  document.querySelector(\".current-container\").classList.add(\"loading\");\n  document.querySelector(\".hourly-container\").classList.add(\"loading\");\n  document.querySelector(\".units-container\").classList.add(\"loading\");\n}\n\n// Stop Loading\nfunction stopLoading() {\n  document.querySelector(\".loading-container\").classList.add(\"hidden\");\n\n  document.querySelector(\".current-container\").classList.remove(\"loading\");\n  document.querySelector(\".hourly-container\").classList.remove(\"loading\");\n  document.querySelector(\".units-container\").classList.remove(\"loading\");\n}\n\n\n//# sourceURL=webpack://weather-app/./src/javascript/loading.js?");

/***/ }),

/***/ "./src/images/chance-of-rain.svg":
/*!***************************************!*\
  !*** ./src/images/chance-of-rain.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"202a58da66a73a47c13f.svg\";\n\n//# sourceURL=webpack://weather-app/./src/images/chance-of-rain.svg?");

/***/ }),

/***/ "./src/images/cloudiness.svg":
/*!***********************************!*\
  !*** ./src/images/cloudiness.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"afabe7be2ab60052f565.svg\";\n\n//# sourceURL=webpack://weather-app/./src/images/cloudiness.svg?");

/***/ }),

/***/ "./src/images/feels-like.svg":
/*!***********************************!*\
  !*** ./src/images/feels-like.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"37c5adcf3df5801b48e4.svg\";\n\n//# sourceURL=webpack://weather-app/./src/images/feels-like.svg?");

/***/ }),

/***/ "./src/images/humidity.svg":
/*!*********************************!*\
  !*** ./src/images/humidity.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d7c4c34c6159fa39c681.svg\";\n\n//# sourceURL=webpack://weather-app/./src/images/humidity.svg?");

/***/ }),

/***/ "./src/images/left-arrow.svg":
/*!***********************************!*\
  !*** ./src/images/left-arrow.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d6a820a7360d1f11484c.svg\";\n\n//# sourceURL=webpack://weather-app/./src/images/left-arrow.svg?");

/***/ }),

/***/ "./src/images/loading.gif":
/*!********************************!*\
  !*** ./src/images/loading.gif ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"803f24369a085e35482e.gif\";\n\n//# sourceURL=webpack://weather-app/./src/images/loading.gif?");

/***/ }),

/***/ "./src/images/location.svg":
/*!*********************************!*\
  !*** ./src/images/location.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0415078e2668884fbb23.svg\";\n\n//# sourceURL=webpack://weather-app/./src/images/location.svg?");

/***/ }),

/***/ "./src/images/right-arrow.svg":
/*!************************************!*\
  !*** ./src/images/right-arrow.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"475283d6002b21f6a1aa.svg\";\n\n//# sourceURL=webpack://weather-app/./src/images/right-arrow.svg?");

/***/ }),

/***/ "./src/images/search.svg":
/*!*******************************!*\
  !*** ./src/images/search.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d946be3f66d0f95470d5.svg\";\n\n//# sourceURL=webpack://weather-app/./src/images/search.svg?");

/***/ }),

/***/ "./src/images/theme-dark-2.svg":
/*!*************************************!*\
  !*** ./src/images/theme-dark-2.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4873cb2890cccd77b1f5.svg\";\n\n//# sourceURL=webpack://weather-app/./src/images/theme-dark-2.svg?");

/***/ }),

/***/ "./src/images/theme.svg":
/*!******************************!*\
  !*** ./src/images/theme.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b4369dd37eddf0ba5839.svg\";\n\n//# sourceURL=webpack://weather-app/./src/images/theme.svg?");

/***/ }),

/***/ "./src/images/uv.svg":
/*!***************************!*\
  !*** ./src/images/uv.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e66aeb0350d57dbdd2c7.svg\";\n\n//# sourceURL=webpack://weather-app/./src/images/uv.svg?");

/***/ }),

/***/ "./src/images/visibility.svg":
/*!***********************************!*\
  !*** ./src/images/visibility.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"be1dfdb202c59d8170b9.svg\";\n\n//# sourceURL=webpack://weather-app/./src/images/visibility.svg?");

/***/ }),

/***/ "./src/images/wind-direction.svg":
/*!***************************************!*\
  !*** ./src/images/wind-direction.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"96ca67412d9271f44be0.svg\";\n\n//# sourceURL=webpack://weather-app/./src/images/wind-direction.svg?");

/***/ }),

/***/ "./src/images/wind-speed.svg":
/*!***********************************!*\
  !*** ./src/images/wind-speed.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"51a348935884ff44461f.svg\";\n\n//# sourceURL=webpack://weather-app/./src/images/wind-speed.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/javascript/index.js");
/******/ 	
/******/ })()
;