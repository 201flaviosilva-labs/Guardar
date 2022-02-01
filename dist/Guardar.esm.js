var saveDataName = "guardar";
function init() {
  var newSaveDataName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : saveDataName;
  saveDataName = newSaveDataName;
  localStorage.getItem(saveDataName) || localStorage.setItem(saveDataName, "{}");
}
function getAll() {
  return JSON.parse(localStorage.getItem(saveDataName));
}
function getData(name) {
  var data = getAll();
  return data[name];
}
function setData(name, value) {
  var saveData = getAll();
  saveData[name] = value;
  updateAll(saveData);
}
function updateAll(data) {
  localStorage.setItem(saveDataName, JSON.stringify(data));
}
function removeData(name) {
  var saveData = getAll();
  delete saveData[name];
  updateAll(saveData);
}
function clear() {
  // localStorage.removeItem(saveDataName);
  updateAll({});
}
function changeSaveDataName(name) {
  var saveData = getAll();
  localStorage.removeItem(saveDataName);
  init(name);
  updateAll(saveData);
}
function keys() {
  return Object.keys(getAll());
}
function size() {
  return keys().length;
}
function has(name) {
  return keys().includes(name);
}
function print() {
  console.log(getAll());
}
var Guardar = {
  init: init,
  getAll: getAll,
  getData: getData,
  setData: setData,
  updateAll: updateAll,
  removeData: removeData,
  clear: clear,
  changeSaveDataName: changeSaveDataName,
  keys: keys,
  size: size,
  has: has,
  print: print
};

export { changeSaveDataName, clear, Guardar as default, getAll, getData, has, init, keys, print, removeData, saveDataName, setData, size, updateAll };
