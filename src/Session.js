/**
 * @class Session
 * @classdesc Class for dealing with session storage.
 * 
 * @example Session.getAll();
 */
export default class Session {
	constructor() {
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
	_init() {
		sessionStorage.getItem(this.name) || sessionStorage.setItem(this.name, "{}");
	}

	/**
	 * Change the name of data saved in the Session storage
	 * 
	 * @example Session._init("mySessionStorage");
	 * 
	 * @param {string} newSaveDataName - the name to save the data in the Session storage
	 * @returns {void}
	 * @memberof Session
	 */
	setName(newSaveDataName = this.name) {
		if (typeof newSaveDataName !== "string") throw new Error("The name must be a string");
		this.name = newSaveDataName;
		this._init();
	}

	/**
	 * Get all data saved in the Session storage
	 * 
	 * @example Session.getAll();
	 * 
	 * @returns {object} the data saved in the Session storage
	 * @memberof Session
	 */
	getAll() {
		return JSON.parse(sessionStorage.getItem(this.name));
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
	getData(key) {
		if (typeof key !== "string") throw new Error("The key must be a string");
		let data = this.getAll();
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
	setData(key, value) {
		if (typeof key !== "string") throw new Error("The key must be a string");
		if (typeof value === "undefined") throw new Error("The value must be defined");
		let saveData = this.getAll();
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
	updateAll(data) {
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
	removeData(key) {
		if (typeof key !== "string") throw new Error("The key must be a string");
		let saveData = this.getAll();
		delete saveData[key];
		this.updateAll(saveData);
	}

	/**
	 * Change the name of the Session storage
	 * 
	 * @example Session.changeSaveDataName("sessionStorageName");
	 * 
	 * @param {sting} name - new name of the Session storage
	 * @memberof Session
	 */
	changeSaveDataName(name = this.name) {
		if (typeof name !== "string") throw new Error("The name must be a string");
		let saveData = this.getAll();
		sessionStorage.removeItem(this.name);
		this.setName(name);
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
	clear() { this.updateAll({}); }

	/**
	 * Get keys of the stored items
	 * 
	 * @example Session.keys();
	 * 
	 * @returns {string[]} return all keys
	 * @memberof Session
	 */
	keys() { return Object.keys(this.getAll()); }

	/**
	 * Get number of stored items
	 * 
	 * @example Session.size();
	 * 
	 * @returns {number} number of stored items
	 * @memberof Session
	 */
	size() { return this.keys().length; }

	/**
	 * Check if the given key is stored
	 * 
	 * @example Session.has("myKey");
	 * 
	 * @param {string} key - key to check
	 * @returns {boolean} true if the key is stored
	 * @memberof Session
	 */
	has(key) {
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
	isEmpty() { return this.size() === 0; }
}
