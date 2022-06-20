/******/ // The require scope
/******/ var __webpack_require__ = {};
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
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Lr": () => (/* binding */ changeSaveDataName),
  "ZH": () => (/* binding */ clear),
  "ZP": () => (/* binding */ src),
  "go": () => (/* binding */ getAll),
  "Yu": () => (/* binding */ getData),
  "bo": () => (/* binding */ getVersion),
  "e$": () => (/* binding */ has),
  "S1": () => (/* binding */ init),
  "xb": () => (/* binding */ isEmpty),
  "XP": () => (/* binding */ keys),
  "NU": () => (/* binding */ removeData),
  "Rn": () => (/* binding */ saveDataName),
  "a_": () => (/* binding */ setData),
  "dp": () => (/* binding */ size),
  "uy": () => (/* binding */ updateAll)
});

;// CONCATENATED MODULE: ./package.json
const package_namespaceObject = {"i8":"1.0.5"};
;// CONCATENATED MODULE: ./src/index.js

/**
 * The name o will show in the local storage object
 * 
 * @type {string}
 */

var saveDataName = "guardar";
/**
 * Start the local storage
 * 
 * @param {string} newSaveDataName the name to save the data in the local storage
 */

function init() {
  var newSaveDataName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : saveDataName;
  saveDataName = newSaveDataName;
  localStorage.getItem(saveDataName) || localStorage.setItem(saveDataName, "{}");
}
/**
 * Get all data saved in the local storage
 * 
 * @returns {object} the data saved in the local storage
 */

function getAll() {
  return JSON.parse(localStorage.getItem(saveDataName));
}
/**
 * Get a specific data saved in the local storage
 * 
 * @param {string} key key of the data to get
 * @returns {any} the data saved in the local storage
 */

function getData(key) {
  var data = getAll();
  return data[key];
}
/**
 * Save/change a specific data by key
 * 
 * @param {string} key name of the key
 * @param {any} value value of the item
 */

function setData(key, value) {
  var saveData = getAll();
  saveData[key] = value;
  updateAll(saveData);
}
/**
 * Save/change all data
 * 
 * @param {any} data data to save
 */

function updateAll(data) {
  localStorage.setItem(saveDataName, JSON.stringify(data));
}
/**
 * Delete a specific data by name
 * 
 * @param {sting} key the name of the data to delete
 */

function removeData(key) {
  var saveData = getAll();
  delete saveData[key];
  updateAll(saveData);
}
/**
 * Change the name of the local storage
 * 
 * @param {sting} name new name of the local storage
 */

function changeSaveDataName() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : saveDataName;
  var saveData = getAll();
  localStorage.removeItem(saveDataName);
  init(name);
  updateAll(saveData);
}
/**
 * Delete all data saved in the local storage
 */

function clear() {
  updateAll({});
}
/**
 * Get keys of the stored items
 * 
 * @returns {string[]} return all keys
 */

function keys() {
  return Object.keys(getAll());
}
/**
 * Get number of stored items
 * 
 * @returns {number} number of stored items
 */

function size() {
  return keys().length;
}
/**
 * Check if the given key is stored
 * 
 * @param {string} key key to check
 * @returns {boolean} true if the key is stored
 */

function has(key) {
  return keys().includes(key);
}
/**
 * Check if the local storage is empty
 * 
 * @returns {boolean} true if the local storage is empty
 */

function isEmpty() {
  return size() === 0;
}
/**
 * Get version number
 * 
 * @returns {string} string of current version 
 */

function getVersion() {
  return package_namespaceObject.i8;
}
var Guardar = {
  init: init,
  getAll: getAll,
  getData: getData,
  setData: setData,
  updateAll: updateAll,
  removeData: removeData,
  clear: clear,
  changeSaveDataName: changeSaveDataName,
  keys: keys,
  size: size,
  has: has,
  isEmpty: isEmpty,
  getVersion: getVersion
};
/* harmony default export */ const src = (Guardar);
var __webpack_exports__changeSaveDataName = __webpack_exports__.Lr;
var __webpack_exports__clear = __webpack_exports__.ZH;
var __webpack_exports__default = __webpack_exports__.ZP;
var __webpack_exports__getAll = __webpack_exports__.go;
var __webpack_exports__getData = __webpack_exports__.Yu;
var __webpack_exports__getVersion = __webpack_exports__.bo;
var __webpack_exports__has = __webpack_exports__.e$;
var __webpack_exports__init = __webpack_exports__.S1;
var __webpack_exports__isEmpty = __webpack_exports__.xb;
var __webpack_exports__keys = __webpack_exports__.XP;
var __webpack_exports__removeData = __webpack_exports__.NU;
var __webpack_exports__saveDataName = __webpack_exports__.Rn;
var __webpack_exports__setData = __webpack_exports__.a_;
var __webpack_exports__size = __webpack_exports__.dp;
var __webpack_exports__updateAll = __webpack_exports__.uy;
export { __webpack_exports__changeSaveDataName as changeSaveDataName, __webpack_exports__clear as clear, __webpack_exports__default as default, __webpack_exports__getAll as getAll, __webpack_exports__getData as getData, __webpack_exports__getVersion as getVersion, __webpack_exports__has as has, __webpack_exports__init as init, __webpack_exports__isEmpty as isEmpty, __webpack_exports__keys as keys, __webpack_exports__removeData as removeData, __webpack_exports__saveDataName as saveDataName, __webpack_exports__setData as setData, __webpack_exports__size as size, __webpack_exports__updateAll as updateAll };
