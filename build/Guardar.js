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
  "Z": () => (/* binding */ src)
});

;// CONCATENATED MODULE: ./package.json
const package_namespaceObject = {"i8":"1.0.5"};
;// CONCATENATED MODULE: ./src/LocalStorage.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * @class Local
 * @classdesc Class for dealing with local storage.
 * 
 * @example Local.getAll();
 */
var Local = /*#__PURE__*/function () {
  function Local() {
    _classCallCheck(this, Local);

    this.name = "guardar";

    this._init();
  }
  /**
   * Core function to initialize the local storage api
   * 
   * @returns {void}
   * @memberof Local
   * @private
   */


  _createClass(Local, [{
    key: "_init",
    value: function _init() {
      localStorage.getItem(this.name) || localStorage.setItem(this.name, "{}");
    }
    /**
     * Change the name of data saved in the local storage
     * 
     * @example Local._init("myLocalStorage");
     * 
     * @param {string} newSaveDataName - the name to save the data in the local storage
     * @returns {void}
     * @memberof Local
     */

  }, {
    key: "setName",
    value: function setName() {
      var newSaveDataName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.name;
      this.name = newSaveDataName;

      this._init();
    }
    /**
     * Get all data saved in the local storage
     * 
     * @example Local.getAll();
     * 
     * @returns {object} the data saved in the local storage
     * @memberof Local
     */

  }, {
    key: "getAll",
    value: function getAll() {
      return JSON.parse(localStorage.getItem(this.name));
    }
    /**
     * Get a specific data saved in the local storage
     * 
     * @example Local.getData("myKey");
     * 
     * @param {string} key - key of the data to get
     * @returns {any} the data saved in the local storage
     * @memberof Local
     */

  }, {
    key: "getData",
    value: function getData(key) {
      var data = this.getAll();
      return data[key];
    }
    /**
     * Save/change a specific data by key
     * 
     * @example Local.setData("myKeyString", "myString");
     * @example Local.setData("myKeyBool", true);
     * @example Local.setData("myKeyNumber", 1234567890);
     * @example Local.setData("myKeyObject", {name: "Dog", age: 3,});
     * @example Local.setData("myKeyArr", [1, 2, 3, 4, 5]);
     * 
     * @param {string} key - name of the key
     * @param {any} value value of the item
     * @returns {void}
     * @memberof Local
     */

  }, {
    key: "setData",
    value: function setData(key, value) {
      var saveData = this.getAll();
      saveData[key] = value;
      this.updateAll(saveData);
    }
    /**
     * Save/change all data
     * 
     * @example Local.updateAll({ otherNewData: "Hello World" });
     * 
     * @param {any} data - data to save
     * @returns {void}
     * @memberof Local
     */

  }, {
    key: "updateAll",
    value: function updateAll(data) {
      localStorage.setItem(this.name, JSON.stringify(data));
    }
    /**
     * Delete a specific data by name
     * 
     * @example Local.removeData("myKey");
     * 
     * @param {sting} key - the name of the data to delete
     * @returns {void}
     * @memberof Local
     */

  }, {
    key: "removeData",
    value: function removeData(key) {
      var saveData = this.getAll();
      delete saveData[key];
      this.updateAll(saveData);
    }
    /**
     * Change the name of the local storage
     * 
     * @example Local.changeSaveDataName("myNewLocalStorageName");
     * 
     * @param {sting} name - new name of the local storage
     * @memberof Local
     */

  }, {
    key: "changeSaveDataName",
    value: function changeSaveDataName() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.name;
      var saveData = this.getAll();
      localStorage.removeItem(this.name);
      this.setName(name);
      this.updateAll(saveData);
    }
    /**
     * Delete all data saved in the local storage
     * 
     * @example Local.clear();
     * 
     * @returns {void}
     * @memberof Local
     */

  }, {
    key: "clear",
    value: function clear() {
      this.updateAll({});
    }
    /**
     * Get keys of the stored items
     * 
     * @example Local.keys();
     * 
     * @returns {string[]} return all keys
     * @memberof Local
     */

  }, {
    key: "keys",
    value: function keys() {
      return Object.keys(this.getAll());
    }
    /**
     * Get number of stored items
     * 
     * @example Local.size();
     * 
     * @returns {number} number of stored items
     * @memberof Local
     */

  }, {
    key: "size",
    value: function size() {
      return this.keys().length;
    }
    /**
     * Check if the given key is stored
     * 
     * @example Local.has("myKey");
     * 
     * @param {string} key - key to check
     * @returns {boolean} true if the key is stored
     * @memberof Local
     */

  }, {
    key: "has",
    value: function has(key) {
      return this.keys().includes(key);
    }
    /**
     * Check if the local storage is empty
     * 
     * @example Local.isEmpty();
     * 
     * @returns {boolean} true if the local storage is empty
     * @memberof Local
     */

  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.size() === 0;
    }
  }]);

  return Local;
}();


;// CONCATENATED MODULE: ./src/index.js


/**
 * Get version number
 * 
 * @returns {string} string of current version 
 */

function getVersion() {
  return package_namespaceObject.i8;
}

var Guardar = {
  getVersion: getVersion,
  Local: new Local()
};
/* harmony default export */ const src = (Guardar);
var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__default as default };
