// runtime can't be in strict mode because a global variable is assign and maybe created.
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["instrumentation"],{

/***/ "./instrumentation.ts":
/*!****************************!*\
  !*** ./instrumentation.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   register: () => (/* binding */ register)\n/* harmony export */ });\n/* harmony import */ var _vercel_otel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vercel/otel */ \"./node_modules/@vercel/otel/dist/index.edge.js\");\n\nfunction register() {\n    (0,_vercel_otel__WEBPACK_IMPORTED_MODULE_0__.registerOTel)(\"next-app\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbnN0cnVtZW50YXRpb24udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMkM7QUFFcEMsU0FBU0M7SUFDZEQsMERBQVlBLENBQUM7QUFDZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9pbnN0cnVtZW50YXRpb24udHM/ZDdkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWdpc3Rlck9UZWwgfSBmcm9tIFwiQHZlcmNlbC9vdGVsXCJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlcigpIHtcclxuICByZWdpc3Rlck9UZWwoXCJuZXh0LWFwcFwiKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJyZWdpc3Rlck9UZWwiLCJyZWdpc3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./instrumentation.ts\n");

/***/ }),

/***/ "./node_modules/@vercel/otel/dist/index.edge.js":
/*!******************************************************!*\
  !*** ./node_modules/@vercel/otel/dist/index.edge.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   registerOTel: () => (/* binding */ registerOTel)\n/* harmony export */ });\nconst registerOTel = (serviceName) => {\n    // We don't support OTel on edge yet\n    void serviceName;\n};\n//# sourceMappingURL=index.edge.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHZlcmNlbC9vdGVsL2Rpc3QvaW5kZXguZWRnZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHZlcmNlbC9vdGVsL2Rpc3QvaW5kZXguZWRnZS5qcz9lZDQ3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCByZWdpc3Rlck9UZWwgPSAoc2VydmljZU5hbWUpID0+IHtcbiAgICAvLyBXZSBkb24ndCBzdXBwb3J0IE9UZWwgb24gZWRnZSB5ZXRcbiAgICB2b2lkIHNlcnZpY2VOYW1lO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVkZ2UuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@vercel/otel/dist/index.edge.js\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./instrumentation.ts"));
/******/ (_ENTRIES = typeof _ENTRIES === "undefined" ? {} : _ENTRIES).middleware_instrumentation = __webpack_exports__;
/******/ }
]);