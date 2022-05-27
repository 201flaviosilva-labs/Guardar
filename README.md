# Guardar

## Description

A simple lib to work and organize the localstorage.

[![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/guardar)

## Instal

> npm install guardar

## Simple Usage

```javascript
import Guardar from "guardar";

const myData = {
	myString: "Hello World",
	myNumber: 123,
	myBoolean: true,
	myArray: [1, false, "Beep"],
	myObject: {
		name: "Dog",
		age: 3,
		isHappy: true,
		breed: "Dachshund",
	}
}

// To start the localstorage
Guardar.init();

// Save the data
Guardar.setData("myData", myData);

// Get you data
console.log(Guardar.getData("myData"));

```

## API
#### Import

Import the lib to your project:

```javascript
import Guardar from "guardar";
```

#### Init

For the Guardar to work correctly it is necessary to boot it, and for that it is done with this command:

- Parameter 1 {string} [newSaveDataName] (optional): The name of the localstorage.

```javascript
Guardar.init("myLocalStorage");
```

#### Get All

Get all data saved in the local storage

- Returns {any}: A object with all the data saved in the localstorage.

```javascript
Guardar.getAll();
```

#### Get Data

Get a specific data saved in the local storage

 - Parameter 1 {string} [key]: The key of the data.
 - Returns {any}: The data saved in the localstorage of the specified key.

```javascript
Guardar.getData("myKey");
```

#### Set Data

Save/change a specific data by key

 - Parameter 1 {string} [key]: The key of the data.
 - Parameter 2 {any} [value]: The data to save.

```javascript
// Add new data
Guardar.setData("myKeyString", "myString");
Guardar.setData("myKeyBool", true);
Guardar.setData("myKeyNumber", 1234567890);
Guardar.setData("myKeyObject", {name: "Dog", age: 3,});
Guardar.setData("myKeyArr", [1, 2, 3, 4, 5]);

// Update
Guardar.setData("myKeyString", "My String	Updated");
Guardar.setData("myKeyBool", false);
Guardar.setData("myKeyNumber", 0987654321);
Guardar.setData("myKeyObject", {name: "Fox", age: 1, isHappy: true});
Guardar.setData("myKeyArr", ["A", "B", "C", "D", "E"]);
```

#### Update All

Save/change all data saved

- Parameter 1 {any} [data]: The data to save.

```javascript
const newData = { otherNewData: "Hello World" };
Guardar.updateAll(newData);
```

#### Remove Data

Delete a specific data by key

- Parameter 1 {string} [key]: The name of the data.

```javascript
Guardar.removeData("myKey");
```

#### Change Save Data Name

Change the name of the local storage

- Parameter 1 {string} [newSaveDataName]: The new name of the localstorage.

```javascript
Guardar.changeSaveDataName("myNewLocalStorageName");
```

#### Clear

Delete all data saved in the local storage

```javascript
Guardar.clear();
```

#### Keys

Get keys of the stored items

- Returns {string[]}: An array with all the keys saved in the localstorage.

```javascript
Guardar.keys();
```

#### Size

Get number of stored items

- Returns {number}: Number of stored items.

```javascript
Guardar.size();
```

#### Has

Check if the given key is stored

 - Parameter 1 {string} [key]: The key to check.
 - Returns {boolean}: True if the key is stored, false if not.

```javascript
Guardar.has("myKey");
```

#### Is Empty

Check if the local storage is empty

 - Returns {boolean}: True if the local storage is empty.

```javascript
Guardar.isEmpty("myKey");
```

### Get Version

Get the current version of the program.

 - Returns {number}: Number of current version.
 

 ```javascript
Guardar.getVersion();
```

### Table of Contents

| Name               | Description                         | param 1                             | param 2     | return   |
| ------------------ | ----------------------------------- | ----------------------------------- | ----------- | -------- |
| init               | Start Guardar                       | newSaveDataName {string} (optional) | -           | -        |
| getAll             | Get all data                        | -                                   | -           | any      |
| getData            | Get the items of a key              | key {string}                        | -           | any      |
| setData            | Save/change a key                   | key {string}                        | value {any} | -        |
| updateAll          | Save/change all data                | data {any}                          | -           | -        |
| removeData         | Delete a key                        | key  {string}                       | -           | -        |
| changeSaveDataName | Change the name of the localstorage | newSaveDataName {string}            | -           |
| clear              | Delete all data                     | -                                   | -           | -        |
| keys               | Get all keys                        | -                                   | -           | string[] |
| size               | Get number of items                 | -                                   | -           | number   |
| has                | Check if a key is stored            | key {string}                        | -           | boolean  |
| isEmpty            | Check if the local storage is empty | -                                   | -           | boolean  |
| getVersion         | Get number of current version       | -                                   | -           | number   |
