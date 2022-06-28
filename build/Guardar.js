/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ var __webpack_modules__ = ({

/***/ "./src/Local.js":
/*!**********************!*\
  !*** ./src/Local.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Local)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n/**\n * @class Local\n * @classdesc Class for dealing with local storage.\n * \n * @example Local.getAll();\n */\nvar Local = /*#__PURE__*/function () {\n  function Local() {\n    _classCallCheck(this, Local);\n\n    this.name = \"guardar\";\n\n    this._init();\n  }\n  /**\n   * Core function to initialize the local storage api\n   * \n   * @returns {void}\n   * @memberof Local\n   * @private\n   */\n\n\n  _createClass(Local, [{\n    key: \"_init\",\n    value: function _init() {\n      localStorage.getItem(this.name) || localStorage.setItem(this.name, \"{}\");\n    }\n    /**\n     * Change the name of data saved in the local storage\n     * \n     * @example Local.setName(\"myLocalStorage\");\n     * \n     * @param {string} name - the name to save the data in the local storage\n     * @returns {void}\n     * @memberof Local\n     */\n\n  }, {\n    key: \"setName\",\n    value: function setName() {\n      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.name;\n      if (typeof name !== \"string\") throw new Error(\"The name must be a string\");\n      var saveData = this.getAll();\n      localStorage.removeItem(name);\n      localStorage.removeItem(this.name);\n      this.name = name;\n\n      this._init();\n\n      this.updateAll(saveData);\n    }\n    /**\n     * Get all data saved in the local storage\n     * \n     * @example Local.getAll();\n     * \n     * @param {boolean} [json=false] - if true, return the data in json format\n     * @returns {any} the data saved in the local storage\n     * @memberof Local\n     */\n\n  }, {\n    key: \"getAll\",\n    value: function getAll() {\n      var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n      if (typeof json !== \"boolean\") throw new Error(\"The json must be a boolean\");\n      var data = localStorage.getItem(this.name);\n      return json ? data : JSON.parse(data);\n    }\n    /**\n     * Get a specific data saved in the local storage\n     * \n     * @example Local.getData(\"myKey\");\n     * \n     * @param {string} key - key of the data to get\n     * @returns {any} the data saved in the local storage\n     * @memberof Local\n     */\n\n  }, {\n    key: \"getData\",\n    value: function getData(key) {\n      if (typeof key !== \"string\") throw new Error(\"The key must be a string\");\n      var data = this.getAll();\n      return data[key];\n    }\n    /**\n     * Save/change a specific data by key\n     * \n     * @example Local.setData(\"myKeyString\", \"myString\");\n     * @example Local.setData(\"myKeyBool\", true);\n     * @example Local.setData(\"myKeyNumber\", 1234567890);\n     * @example Local.setData(\"myKeyObject\", {name: \"Dog\", age: 3,});\n     * @example Local.setData(\"myKeyArr\", [1, 2, 3, 4, 5]);\n     * \n     * @param {string} key - name of the key\n     * @param {any} value - value of the item\n     * @returns {void}\n     * @memberof Local\n     */\n\n  }, {\n    key: \"setData\",\n    value: function setData(key, value) {\n      if (typeof key !== \"string\") throw new Error(\"The key must be a string\");\n      if (typeof value === \"undefined\") throw new Error(\"The value must be defined\");\n      var saveData = this.getAll();\n      saveData[key] = value;\n      this.updateAll(saveData);\n    }\n    /**\n     * Save/change all data\n     * \n     * @example Local.updateAll({ otherNewData: \"Hello World\" });\n     * \n     * @param {any} data - data to save\n     * @returns {void}\n     * @memberof Local\n     */\n\n  }, {\n    key: \"updateAll\",\n    value: function updateAll(data) {\n      if (typeof data === \"undefined\") throw new Error(\"The data must be defined\");\n      localStorage.setItem(this.name, JSON.stringify(data));\n    }\n    /**\n     * Delete a specific data by name\n     * \n     * @example Local.removeData(\"myKey\");\n     * \n     * @param {sting} key - the name of the data to delete\n     * @returns {void}\n     * @memberof Local\n     */\n\n  }, {\n    key: \"removeData\",\n    value: function removeData(key) {\n      if (typeof key !== \"string\") throw new Error(\"The key must be a string\");\n      var saveData = this.getAll();\n      delete saveData[key];\n      this.updateAll(saveData);\n    }\n    /**\n     * Delete all data saved in the local storage\n     * \n     * @example Local.clear();\n     * \n     * @returns {void}\n     * @memberof Local\n     */\n\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      this.updateAll({});\n    }\n    /**\n     * Get keys of the stored items\n     * \n     * @example Local.keys();\n     * \n     * @returns {string[]} return all keys\n     * @memberof Local\n     */\n\n  }, {\n    key: \"keys\",\n    value: function keys() {\n      return Object.keys(this.getAll());\n    }\n    /**\n     * Get number of stored items\n     * \n     * @example Local.size();\n     * \n     * @returns {number} number of stored items\n     * @memberof Local\n     */\n\n  }, {\n    key: \"size\",\n    value: function size() {\n      return this.keys().length;\n    }\n    /**\n     * Check if the given key is stored\n     * \n     * @example Local.has(\"myKey\");\n     * \n     * @param {string} key - key to check\n     * @returns {boolean} true if the key is stored\n     * @memberof Local\n     */\n\n  }, {\n    key: \"has\",\n    value: function has(key) {\n      if (typeof key !== \"string\") throw new Error(\"The key must be a string\");\n      return this.keys().includes(key);\n    }\n    /**\n     * Check if the local storage is empty\n     * \n     * @example Local.isEmpty();\n     * \n     * @returns {boolean} - true if the local storage is empty\n     * @memberof Local\n     */\n\n  }, {\n    key: \"isEmpty\",\n    value: function isEmpty() {\n      return this.size() === 0;\n    }\n  }]);\n\n  return Local;\n}();\n\n\n\n//# sourceURL=webpack://guardar/./src/Local.js?");

/***/ }),

/***/ "./src/Session.js":
/*!************************!*\
  !*** ./src/Session.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Session)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n/**\n * @class Session\n * @classdesc Class for dealing with session storage.\n * \n * @example Session.getAll();\n */\nvar Session = /*#__PURE__*/function () {\n  function Session() {\n    _classCallCheck(this, Session);\n\n    this.name = \"guardar\";\n\n    this._init();\n  }\n  /**\n   * Core function to initialize the session storage api\n   * \n   * @returns {void}\n   * @memberof Session\n   * @private\n   */\n\n\n  _createClass(Session, [{\n    key: \"_init\",\n    value: function _init() {\n      sessionStorage.getItem(this.name) || sessionStorage.setItem(this.name, \"{}\");\n    }\n    /**\n     * Change the name of data saved in the Session storage\n     * \n     * @example Session.setName(\"mySessionStorage\");\n     * \n     * @param {string} name - the name to save the data in the Session storage\n     * @returns {void}\n     * @memberof Session\n     */\n\n  }, {\n    key: \"setName\",\n    value: function setName() {\n      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.name;\n      if (typeof name !== \"string\") throw new Error(\"The name must be a string\");\n      var saveData = this.getAll();\n      sessionStorage.removeItem(name);\n      sessionStorage.removeItem(this.name);\n      this.name = name;\n\n      this._init();\n\n      this.updateAll(saveData);\n    }\n    /**\n     * Get all data saved in the Session storage\n     * \n     * @example Session.getAll();\n     * \n     * @param {boolean} [json=false] - if true, return the data in json format\n     * @returns {any} the data saved in the local storage\n     * @memberof Session\n     */\n\n  }, {\n    key: \"getAll\",\n    value: function getAll() {\n      var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n      if (typeof json !== \"boolean\") throw new Error(\"The json must be a boolean\");\n      var data = sessionStorage.getItem(this.name);\n      return json ? data : JSON.parse(data);\n    }\n    /**\n     * Get a specific data saved in the Session storage\n     * \n     * @example Session.getData(\"myKey\");\n     * \n     * @param {string} key - key of the data to get\n     * @returns {any} the data saved in the Session storage\n     * @memberof Session\n     */\n\n  }, {\n    key: \"getData\",\n    value: function getData(key) {\n      if (typeof key !== \"string\") throw new Error(\"The key must be a string\");\n      var data = this.getAll();\n      return data[key];\n    }\n    /**\n     * Save/change a specific data by key\n     * \n     * @example Session.setData(\"myKeyString\", \"myString\");\n     * @example Session.setData(\"myKeyBool\", true);\n     * @example Session.setData(\"myKeyNumber\", 1234567890);\n     * @example Session.setData(\"myKeyObject\", {name: \"Dog\", age: 3,});\n     * @example Session.setData(\"myKeyArr\", [1, 2, 3, 4, 5]);\n     * \n     * @param {string} key - name of the key\n     * @param {any} value - value of the item\n     * @returns {void}\n     * @memberof Session\n     */\n\n  }, {\n    key: \"setData\",\n    value: function setData(key, value) {\n      if (typeof key !== \"string\") throw new Error(\"The key must be a string\");\n      if (typeof value === \"undefined\") throw new Error(\"The value must be defined\");\n      var saveData = this.getAll();\n      saveData[key] = value;\n      this.updateAll(saveData);\n    }\n    /**\n     * Save/change all data\n     * \n     * @example Session.updateAll({ otherNewData: \"Hello World\" });\n     * \n     * @param {any} data - data to save\n     * @returns {void}\n     * @memberof Session\n     */\n\n  }, {\n    key: \"updateAll\",\n    value: function updateAll(data) {\n      if (typeof data === \"undefined\") throw new Error(\"The data must be defined\");\n      sessionStorage.setItem(this.name, JSON.stringify(data));\n    }\n    /**\n     * Delete a specific data by name\n     * \n     * @example Session.removeData(\"myKey\");\n     * \n     * @param {sting} key - the name of the data to delete\n     * @returns {void}\n     * @memberof Session\n     */\n\n  }, {\n    key: \"removeData\",\n    value: function removeData(key) {\n      if (typeof key !== \"string\") throw new Error(\"The key must be a string\");\n      var saveData = this.getAll();\n      delete saveData[key];\n      this.updateAll(saveData);\n    }\n    /**\n     * Delete all data saved in the Session storage\n     * \n     * @example Session.clear();\n     * \n     * @returns {void}\n     * @memberof Session\n     */\n\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      this.updateAll({});\n    }\n    /**\n     * Get keys of the stored items\n     * \n     * @example Session.keys();\n     * \n     * @returns {string[]} return all keys\n     * @memberof Session\n     */\n\n  }, {\n    key: \"keys\",\n    value: function keys() {\n      return Object.keys(this.getAll());\n    }\n    /**\n     * Get number of stored items\n     * \n     * @example Session.size();\n     * \n     * @returns {number} number of stored items\n     * @memberof Session\n     */\n\n  }, {\n    key: \"size\",\n    value: function size() {\n      return this.keys().length;\n    }\n    /**\n     * Check if the given key is stored\n     * \n     * @example Session.has(\"myKey\");\n     * \n     * @param {string} key - key to check\n     * @returns {boolean} true if the key is stored\n     * @memberof Session\n     */\n\n  }, {\n    key: \"has\",\n    value: function has(key) {\n      if (typeof key !== \"string\") throw new Error(\"The key must be a string\");\n      return this.keys().includes(key);\n    }\n    /**\n     * Check if the Session storage is empty\n     * \n     * @example Session.isEmpty();\n     * \n     * @returns {boolean} - true if the Session storage is empty\n     * @memberof Session\n     */\n\n  }, {\n    key: \"isEmpty\",\n    value: function isEmpty() {\n      return this.size() === 0;\n    }\n  }]);\n\n  return Session;\n}();\n\n\n\n//# sourceURL=webpack://guardar/./src/Session.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../package.json */ \"./package.json\");\n/* harmony import */ var _Local_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Local.js */ \"./src/Local.js\");\n/* harmony import */ var _Session_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Session.js */ \"./src/Session.js\");\n\n\n\n/**\n * Get version number\n * \n * @example Guardar.getVersion(); // \"2.0.0\"\n * @returns {string} string of current version \n */\n\nfunction getVersion() {\n  return _package_json__WEBPACK_IMPORTED_MODULE_0__.version;\n}\n\nvar Guardar = {\n  getVersion: getVersion,\n  Local: _Local_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  Session: _Session_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  LocalInstance: new _Local_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](),\n  SessionInstance: new _Session_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]()\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Guardar);\n\n//# sourceURL=webpack://guardar/./src/index.js?");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"name\":\"guardar\",\"version\":\"1.0.5\",\"description\":\"A simple lib to work and organize the browser storage\",\"author\":\"201flaviosilva\",\"homepage\":\"https://201flaviosilva.github.io/Guardar/\",\"main\":\"build/Guardar.js\",\"license\":\"MIT\",\"scripts\":{\"clear\":\"rm -rf docs && rm -rf build && rm -rf types\",\"test\":\"jest\",\"start:test\":\"jest --watchAll\",\"jsDoc\":\"jsdoc -c jsdoc.conf.json\",\"types\":\"npx -p typescript tsc src/**.js --declaration --allowJs --emitDeclarationOnly --outDir types\",\"compile\":\"webpack --mode production && webpack --mode development\",\"build\":\"npm run clear && npm run jsDoc && npm run compile && npm run types\",\"bump\":\"np\"},\"devDependencies\":{\"@babel/core\":\"^7.18.5\",\"@babel/plugin-transform-modules-commonjs\":\"^7.18.2\",\"@babel/preset-env\":\"^7.18.2\",\"babel-loader\":\"^8.2.5\",\"clean-jsdoc-theme\":\"^4.0.7\",\"jest\":\"^28.1.1\",\"jsdoc\":\"^3.6.10\",\"np\":\"^7.6.1\",\"typescript\":\"^4.7.4\",\"webpack\":\"^5.73.0\",\"webpack-cli\":\"^4.10.0\"},\"keywords\":[\"storage\",\"browser\",\"localStorage\",\"sessionStorage\"],\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/201flaviosilva/Guardar.git\"},\"bugs\":{\"url\":\"https://github.com/201flaviosilva/Guardar/issues\"}}');\n\n//# sourceURL=webpack://guardar/./package.json?");

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module can't be inlined because the eval devtool is used.
/******/ var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ var __webpack_exports__default = __webpack_exports__["default"];
/******/ export { __webpack_exports__default as default };
/******/ 
