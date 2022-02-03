(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.guardar = {}));
})(this, (function (exports) { 'use strict';

	/**
	 * @type {string} saveDataName
	 */
	exports.saveDataName = "guardar";
	/**
	 * Start the local storage
	 * 
	 * @param {string} newSaveDataName the name to save the data in the local storage
	 */

	function init() {
	  var newSaveDataName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exports.saveDataName;
	  exports.saveDataName = newSaveDataName;
	  localStorage.getItem(exports.saveDataName) || localStorage.setItem(exports.saveDataName, "{}");
	}
	/**
	 * Get all data saved in the local storage
	 * 
	 * @returns {object} the data saved in the local storage
	 */

	function getAll() {
	  return JSON.parse(localStorage.getItem(exports.saveDataName));
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
	  localStorage.setItem(exports.saveDataName, JSON.stringify(data));
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
	  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exports.saveDataName;
	  var saveData = getAll();
	  localStorage.removeItem(exports.saveDataName);
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
	  print: print
	};

	exports.changeSaveDataName = changeSaveDataName;
	exports.clear = clear;
	exports["default"] = Guardar;
	exports.getAll = getAll;
	exports.getData = getData;
	exports.has = has;
	exports.init = init;
	exports.isEmpty = isEmpty;
	exports.keys = keys;
	exports.removeData = removeData;
	exports.setData = setData;
	exports.size = size;
	exports.updateAll = updateAll;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
