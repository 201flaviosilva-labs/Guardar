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
const package_namespaceObject = {"i8":"2.0.0"};
;// CONCATENATED MODULE: ./src/Local.js
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
     * @example Local.setName("myLocalStorage");
     * 
     * @param {string} name - the name to save the data in the local storage
     * @returns {void}
     * @memberof Local
     */

  }, {
    key: "setName",
    value: function setName() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.name;
      if (typeof name !== "string") throw new Error("The name must be a string");
      var saveData = this.getAll();
      localStorage.removeItem(name);
      localStorage.removeItem(this.name);
      this.name = name;

      this._init();

      this.updateAll(saveData);
    }
    /**
     * Get all data saved in the local storage
     * 
     * @example Local.getAll();
     * 
     * @param {boolean} [json=false] - if true, return the data in json format
     * @returns {any} the data saved in the local storage
     * @memberof Local
     */

  }, {
    key: "getAll",
    value: function getAll() {
      var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (typeof json !== "boolean") throw new Error("The json must be a boolean");
      var data = localStorage.getItem(this.name);
      return json ? data : JSON.parse(data);
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
      if (typeof key !== "string") throw new Error("The key must be a string");
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
     * @param {any} value - value of the item
     * @returns {void}
     * @memberof Local
     */

  }, {
    key: "setData",
    value: function setData(key, value) {
      if (typeof key !== "string") throw new Error("The key must be a string");
      if (typeof value === "undefined") throw new Error("The value must be defined");
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
      if (typeof data === "undefined") throw new Error("The data must be defined");
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
      if (typeof key !== "string") throw new Error("The key must be a string");
      var saveData = this.getAll();
      delete saveData[key];
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
      if (typeof key !== "string") throw new Error("The key must be a string");
      return this.keys().includes(key);
    }
    /**
     * Check if the local storage is empty
     * 
     * @example Local.isEmpty();
     * 
     * @returns {boolean} - true if the local storage is empty
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


;// CONCATENATED MODULE: ./src/Session.js
function Session_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Session_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Session_createClass(Constructor, protoProps, staticProps) { if (protoProps) Session_defineProperties(Constructor.prototype, protoProps); if (staticProps) Session_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * @class Session
 * @classdesc Class for dealing with session storage.
 * 
 * @example Session.getAll();
 */
var Session = /*#__PURE__*/function () {
  function Session() {
    Session_classCallCheck(this, Session);

    this.name = "guardar";

    this._init();
  }
  /**
   * Core function to initialize the session storage api
   * 
   * @returns {void}
   * @memberof Session
   * @private
   */


  Session_createClass(Session, [{
    key: "_init",
    value: function _init() {
      sessionStorage.getItem(this.name) || sessionStorage.setItem(this.name, "{}");
    }
    /**
     * Change the name of data saved in the Session storage
     * 
     * @example Session.setName("mySessionStorage");
     * 
     * @param {string} name - the name to save the data in the Session storage
     * @returns {void}
     * @memberof Session
     */

  }, {
    key: "setName",
    value: function setName() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.name;
      if (typeof name !== "string") throw new Error("The name must be a string");
      var saveData = this.getAll();
      sessionStorage.removeItem(name);
      sessionStorage.removeItem(this.name);
      this.name = name;

      this._init();

      this.updateAll(saveData);
    }
    /**
     * Get all data saved in the Session storage
     * 
     * @example Session.getAll();
     * 
     * @param {boolean} [json=false] - if true, return the data in json format
     * @returns {any} the data saved in the local storage
     * @memberof Session
     */

  }, {
    key: "getAll",
    value: function getAll() {
      var json = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (typeof json !== "boolean") throw new Error("The json must be a boolean");
      var data = sessionStorage.getItem(this.name);
      return json ? data : JSON.parse(data);
    }
    /**
     * Get a specific data saved in the Session storage
     * 
     * @example Session.getData("myKey");
     * 
     * @param {string} key - key of the data to get
     * @returns {any} the data saved in the Session storage
     * @memberof Session
     */

  }, {
    key: "getData",
    value: function getData(key) {
      if (typeof key !== "string") throw new Error("The key must be a string");
      var data = this.getAll();
      return data[key];
    }
    /**
     * Save/change a specific data by key
     * 
     * @example Session.setData("myKeyString", "myString");
     * @example Session.setData("myKeyBool", true);
     * @example Session.setData("myKeyNumber", 1234567890);
     * @example Session.setData("myKeyObject", {name: "Dog", age: 3,});
     * @example Session.setData("myKeyArr", [1, 2, 3, 4, 5]);
     * 
     * @param {string} key - name of the key
     * @param {any} value - value of the item
     * @returns {void}
     * @memberof Session
     */

  }, {
    key: "setData",
    value: function setData(key, value) {
      if (typeof key !== "string") throw new Error("The key must be a string");
      if (typeof value === "undefined") throw new Error("The value must be defined");
      var saveData = this.getAll();
      saveData[key] = value;
      this.updateAll(saveData);
    }
    /**
     * Save/change all data
     * 
     * @example Session.updateAll({ otherNewData: "Hello World" });
     * 
     * @param {any} data - data to save
     * @returns {void}
     * @memberof Session
     */

  }, {
    key: "updateAll",
    value: function updateAll(data) {
      if (typeof data === "undefined") throw new Error("The data must be defined");
      sessionStorage.setItem(this.name, JSON.stringify(data));
    }
    /**
     * Delete a specific data by name
     * 
     * @example Session.removeData("myKey");
     * 
     * @param {sting} key - the name of the data to delete
     * @returns {void}
     * @memberof Session
     */

  }, {
    key: "removeData",
    value: function removeData(key) {
      if (typeof key !== "string") throw new Error("The key must be a string");
      var saveData = this.getAll();
      delete saveData[key];
      this.updateAll(saveData);
    }
    /**
     * Delete all data saved in the Session storage
     * 
     * @example Session.clear();
     * 
     * @returns {void}
     * @memberof Session
     */

  }, {
    key: "clear",
    value: function clear() {
      this.updateAll({});
    }
    /**
     * Get keys of the stored items
     * 
     * @example Session.keys();
     * 
     * @returns {string[]} return all keys
     * @memberof Session
     */

  }, {
    key: "keys",
    value: function keys() {
      return Object.keys(this.getAll());
    }
    /**
     * Get number of stored items
     * 
     * @example Session.size();
     * 
     * @returns {number} number of stored items
     * @memberof Session
     */

  }, {
    key: "size",
    value: function size() {
      return this.keys().length;
    }
    /**
     * Check if the given key is stored
     * 
     * @example Session.has("myKey");
     * 
     * @param {string} key - key to check
     * @returns {boolean} true if the key is stored
     * @memberof Session
     */

  }, {
    key: "has",
    value: function has(key) {
      if (typeof key !== "string") throw new Error("The key must be a string");
      return this.keys().includes(key);
    }
    /**
     * Check if the Session storage is empty
     * 
     * @example Session.isEmpty();
     * 
     * @returns {boolean} - true if the Session storage is empty
     * @memberof Session
     */

  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.size() === 0;
    }
  }]);

  return Session;
}();


;// CONCATENATED MODULE: ./src/index.js



/**
 * Get version number
 * 
 * @example Guardar.getVersion(); // "2.0.0"
 * @returns {string} string of current version 
 */

function getVersion() {
  return package_namespaceObject.i8;
}

var Guardar = {
  getVersion: getVersion,
  Local: Local,
  Session: Session,
  LocalInstance: new Local(),
  SessionInstance: new Session()
};
/* harmony default export */ const src = (Guardar);
var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__default as default };
