/**
 * Start the local storage
 *
 * @param {string} newSaveDataName the name to save the data in the local storage
 */
export function init(newSaveDataName?: string): void;
/**
 * Get all data saved in the local storage
 *
 * @returns {object} the data saved in the local storage
 */
export function getAll(): object;
/**
 * Get a specific data saved in the local storage
 *
 * @param {string} key key of the data to get
 * @returns {any} the data saved in the local storage
 */
export function getData(key: string): any;
/**
 * Save/change a specific data by key
 *
 * @param {string} key name of the key
 * @param {any} value value of the item
 */
export function setData(key: string, value: any): void;
/**
 * Save/change all data
 *
 * @param {any} data data to save
 */
export function updateAll(data: any): void;
/**
 * Delete a specific data by name
 *
 * @param {sting} key the name of the data to delete
 */
export function removeData(key: sting): void;
/**
 * Change the name of the local storage
 *
 * @param {sting} name new name of the local storage
 */
export function changeSaveDataName(name?: sting): void;
/**
 * Delete all data saved in the local storage
 */
export function clear(): void;
/**
 * Get keys of the stored items
 *
 * @returns {string[]} return all keys
 */
export function keys(): string[];
/**
 * Get number of stored items
 *
 * @returns {number} number of stored items
 */
export function size(): number;
/**
 * Check if the given key is stored
 *
 * @param {string} key key to check
 * @returns {boolean} true if the key is stored
 */
export function has(key: string): boolean;
/**
 * Check if the local storage is empty
 *
 * @returns {boolean} true if the local storage is empty
 */
export function isEmpty(): boolean;
/**
 * Get version number
 *
 * @returns {string} string of current version
 */
export function getVersion(): string;
/**
 * The name o will show in the local storage object
 *
 * @type {string}
 */
export let saveDataName: string;
export default Guardar;
declare namespace Guardar {
    export { init };
    export { getAll };
    export { getData };
    export { setData };
    export { updateAll };
    export { removeData };
    export { clear };
    export { changeSaveDataName };
    export { keys };
    export { size };
    export { has };
    export { isEmpty };
    export { getVersion };
}
