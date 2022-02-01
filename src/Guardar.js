export let saveDataName = "guardar";

export function init(newSaveDataName = saveDataName) {
	saveDataName = newSaveDataName;
	localStorage.getItem(saveDataName) || localStorage.setItem(saveDataName, "{}");
}

export function getAll() {
	return JSON.parse(localStorage.getItem(saveDataName));
}

export function getData(name) {
	let data = getAll();
	return data[name];
}

export function setData(name, value) {
	let saveData = getAll();
	saveData[name] = value;
	updateAll(saveData);
}

export function updateAll(data) {
	localStorage.setItem(saveDataName, JSON.stringify(data));
}

export function removeData(name) {
	let saveData = getAll();
	delete saveData[name];
	updateAll(saveData);
}

export function clear() {
	// localStorage.removeItem(saveDataName);
	updateAll({});
}

export function changeSaveDataName(name) {
	let saveData = getAll();
	localStorage.removeItem(saveDataName);
	init(name);
	updateAll(saveData);
}

export function keys() { return Object.keys(getAll()); }
export function size() { return keys().length; }
export function has(name) { return keys().includes(name); }
export function print() { console.log(getAll()); }

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
	print,
};

export default Guardar;
