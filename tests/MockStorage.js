class StorageMock { // Reference: https://stackoverflow.com/questions/32911630/how-do-i-deal-with-localstorage-in-jest-tests
	constructor() { this.store = {}; }
	clear() { this.store = {}; }
	getItem(key) { return this.store[key] || null; }
	setItem(key, value) { this.store[key] = String(value); }
	removeItem(key) { delete this.store[key]; }
}
global.localStorage = new StorageMock;
global.sessionStorage = new StorageMock;
