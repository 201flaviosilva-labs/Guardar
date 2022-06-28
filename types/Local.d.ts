/**
 * @class Local
 * @classdesc Class for dealing with local storage.
 *
 * @example Local.getAll();
 */
export default class Local {
    name: string;
    /**
     * Core function to initialize the local storage api
     *
     * @returns {void}
     * @memberof Local
     * @private
     */
    private _init;
    /**
     * Change the name of data saved in the local storage
     *
     * @example Local.setName("myLocalStorage");
     *
     * @param {string} name - the name to save the data in the local storage
     * @returns {void}
     * @memberof Local
     */
    setName(name?: string): void;
    /**
     * Get all data saved in the local storage
     *
     * @example Local.getAll();
     *
     * @param {boolean} [json=false] - if true, return the data in json format
     * @returns {any} the data saved in the local storage
     * @memberof Local
     */
    getAll(json?: boolean): any;
    /**
     * Get a specific data saved in the local storage
     *
     * @example Local.getData("myKey");
     *
     * @param {string} key - key of the data to get
     * @returns {any} the data saved in the local storage
     * @memberof Local
     */
    getData(key: string): any;
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
    setData(key: string, value: any): void;
    /**
     * Save/change all data
     *
     * @example Local.updateAll({ otherNewData: "Hello World" });
     *
     * @param {any} data - data to save
     * @returns {void}
     * @memberof Local
     */
    updateAll(data: any): void;
    /**
     * Delete a specific data by name
     *
     * @example Local.removeData("myKey");
     *
     * @param {sting} key - the name of the data to delete
     * @returns {void}
     * @memberof Local
     */
    removeData(key: sting): void;
    /**
     * Delete all data saved in the local storage
     *
     * @example Local.clear();
     *
     * @returns {void}
     * @memberof Local
     */
    clear(): void;
    /**
     * Get keys of the stored items
     *
     * @example Local.keys();
     *
     * @returns {string[]} return all keys
     * @memberof Local
     */
    keys(): string[];
    /**
     * Get number of stored items
     *
     * @example Local.size();
     *
     * @returns {number} number of stored items
     * @memberof Local
     */
    size(): number;
    /**
     * Check if the given key is stored
     *
     * @example Local.has("myKey");
     *
     * @param {string} key - key to check
     * @returns {boolean} true if the key is stored
     * @memberof Local
     */
    has(key: string): boolean;
    /**
     * Check if the local storage is empty
     *
     * @example Local.isEmpty();
     *
     * @returns {boolean} - true if the local storage is empty
     * @memberof Local
     */
    isEmpty(): boolean;
}
