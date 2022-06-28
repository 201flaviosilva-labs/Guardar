/**
 * @class Session
 * @classdesc Class for dealing with session storage.
 *
 * @example Session.getAll();
 */
export default class Session {
    name: string;
    /**
     * Core function to initialize the session storage api
     *
     * @returns {void}
     * @memberof Session
     * @private
     */
    private _init;
    /**
     * Change the name of data saved in the Session storage
     *
     * @example Session.setName("mySessionStorage");
     *
     * @param {string} name - the name to save the data in the Session storage
     * @returns {void}
     * @memberof Session
     */
    setName(name?: string): void;
    /**
     * Get all data saved in the Session storage
     *
     * @example Session.getAll();
     *
     * @param {boolean} [json=false] - if true, return the data in json format
     * @returns {any} the data saved in the local storage
     * @memberof Session
     */
    getAll(json?: boolean): any;
    /**
     * Get a specific data saved in the Session storage
     *
     * @example Session.getData("myKey");
     *
     * @param {string} key - key of the data to get
     * @returns {any} the data saved in the Session storage
     * @memberof Session
     */
    getData(key: string): any;
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
    setData(key: string, value: any): void;
    /**
     * Save/change all data
     *
     * @example Session.updateAll({ otherNewData: "Hello World" });
     *
     * @param {any} data - data to save
     * @returns {void}
     * @memberof Session
     */
    updateAll(data: any): void;
    /**
     * Delete a specific data by name
     *
     * @example Session.removeData("myKey");
     *
     * @param {sting} key - the name of the data to delete
     * @returns {void}
     * @memberof Session
     */
    removeData(key: sting): void;
    /**
     * Delete all data saved in the Session storage
     *
     * @example Session.clear();
     *
     * @returns {void}
     * @memberof Session
     */
    clear(): void;
    /**
     * Get keys of the stored items
     *
     * @example Session.keys();
     *
     * @returns {string[]} return all keys
     * @memberof Session
     */
    keys(): string[];
    /**
     * Get number of stored items
     *
     * @example Session.size();
     *
     * @returns {number} number of stored items
     * @memberof Session
     */
    size(): number;
    /**
     * Check if the given key is stored
     *
     * @example Session.has("myKey");
     *
     * @param {string} key - key to check
     * @returns {boolean} true if the key is stored
     * @memberof Session
     */
    has(key: string): boolean;
    /**
     * Check if the Session storage is empty
     *
     * @example Session.isEmpty();
     *
     * @returns {boolean} - true if the Session storage is empty
     * @memberof Session
     */
    isEmpty(): boolean;
}
