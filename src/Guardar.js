/**
 * @type {string} saveDataName
 */
export let saveDataName = "guardar";

/**
 * Start the local storage
 * 
 * @param {string} newSaveDataName the name to save the data in the local storage
 */
export function init(newSaveDataName = saveDataName) {
	saveDataName = newSaveDataName;
	localStorage.getItem(saveDataName) || localStorage.setItem(saveDataName, "{}");
}

/**
 * Get all data saved in the local storage
 * 
 * @returns {object} the data saved in the local storage
 */
export function getAll() {
	return JSON.parse(localStorage.getItem(saveDataName));
}

/**
 * Get a specific data saved in the local storage
 * 
 * @param {string} key key of the data to get
 * @returns {any} the data saved in the local storage
 */
export function getData(key) {
	let data = getAll();
	return data[key];
}

/**
 * Save/change a specific data by key
 * 
 * @param {string} key name of the key
 * @param {any} value value of the item
 */
export function setData(key, value) {
	let saveData = getAll();
	saveData[key] = value;
	updateAll(saveData);
}

/**
 * Save/change all data
 * 
 * @param {any} data data to save
 */
export function updateAll(data) {
	localStorage.setItem(saveDataName, JSON.stringify(data));
}

/**
 * Delete a specific data by name
 * 
 * @param {sting} key the name of the data to delete
 */
export function removeData(key) {
	let saveData = getAll();
	delete saveData[key];
	updateAll(saveData);
}

/**
 * Change the name of the local storage
 * 
 * @param {sting} name new name of the local storage
 */
export function changeSaveDataName(name = saveDataName) {
	let saveData = getAll();
	localStorage.removeItem(saveDataName);
	init(name);
	updateAll(saveData);
}

/**
 * Delete all data saved in the local storage
 */
export function clear() { updateAll({}); }

/**
 * Get keys of the stored items
 * 
 * @returns {string[]} return all keys
 */
export function keys() { return Object.keys(getAll()); }

/**
 * Get number of stored items
 * 
 * @returns {number} number of stored items
 */
export function size() { return keys().length; }

/**
 * Check if the given key is stored
 * 
 * @param {string} key key to check
 * @returns {boolean} true if the key is stored
 */
export function has(key) { return keys().includes(key); }

/**
 * Check if the local storage is empty
 * 
 * @returns {boolean} true if the local storage is empty
 */
export function isEmpty() { return size() === 0; }

/**
 * Get version number
 * 
 * @returns {number} number of current version 
 */
export function getVersion() {
	var pjson = require('../package.json');
	return(pjson.version);
}

const Guardar = {
	init,
	getAll,
	getData,
	setData,
	updateAll,
	removeData,
	clear,
	changeSaveDataName,
	keys,
	size,
	has,
	isEmpty,
	getVersion,
};

export default Guardar;
