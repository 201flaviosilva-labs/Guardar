/**
 * @class Local
 * @classdesc Class for dealing with local storage.
 * 
 * @example Local.getAll();
 */
export default class Local {
	constructor() {
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
	_init() {
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
	setName(name = this.name) {
		if (typeof name !== "string") throw new Error("The name must be a string");
		const saveData = this.getAll();
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
	getAll(json = false) {
		if (typeof json !== "boolean") throw new Error("The json must be a boolean");
		const data = localStorage.getItem(this.name);
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
	getData(key) {
		if (typeof key !== "string") throw new Error("The key must be a string");
		let data = this.getAll();
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
	 * @example Local.updateAll({ otherNewData: "Hello World" });
	 * 
	 * @param {any} data - data to save
	 * @returns {void}
	 * @memberof Local
	 */
	updateAll(data) {
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
	removeData(key) {
		if (typeof key !== "string") throw new Error("The key must be a string");
		let saveData = this.getAll();
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
	clear() { this.updateAll({}); }

	/**
	 * Get keys of the stored items
	 * 
	 * @example Local.keys();
	 * 
	 * @returns {string[]} return all keys
	 * @memberof Local
	 */
	keys() { return Object.keys(this.getAll()); }

	/**
	 * Get number of stored items
	 * 
	 * @example Local.size();
	 * 
	 * @returns {number} number of stored items
	 * @memberof Local
	 */
	size() { return this.keys().length; }

	/**
	 * Check if the given key is stored
	 * 
	 * @example Local.has("myKey");
	 * 
	 * @param {string} key - key to check
	 * @returns {boolean} true if the key is stored
	 * @memberof Local
	 */
	has(key) {
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
	isEmpty() { return this.size() === 0; }
}
