# Guardar

## Table of Contents
- [Guardar](#guardar)
	- [Table of Contents](#table-of-contents)
	- [Description](#description)
	- [Simple Example](#simple-example)
		- [Instal](#instal)
		- [Simple Usage](#simple-usage)
	- [Community Links](#community-links)

## Description

A simple lib to work and organize the localstorage.

[![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/guardar)
[![GitHub](https://img.shields.io/badge/github-CB3837?style=for-the-badge&logo=github&logoColor=white)](https://github.com/201flaviosilva-labs/Guardar)


## Simple Example

Please check the [wiki](https://github.com/201flaviosilva-labs/Guardar/wiki) and the [API](https://201flaviosilva-labs.github.io/Guardar/) to see how to use this lib.

### Instal

`npm install guardar`

### Simple Usage

```javascript
import Guardar from "guardar"; // import Guardar to the project
const { LocalInstance as Local, getVersion } = Guardar; // set the LocalInstance as Local and get the version of the library

console.log(getVersion()); // "2.0.0"

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

// Save the data
Local.setData("myData", myData);

// Get you data
console.log(Local.getData("myData"));
console.log(Local.getAll());
```

## Community Links
- [NPM package page](https://www.npmjs.com/package/guardar);
- [Wiki (Documentation)](https://github.com/201flaviosilva-labs/Guardar/wiki);
- - [Getting Started](https://github.com/201flaviosilva-labs/Guardar/wiki/GetStarted);
- - [Cheat Sheet](https://github.com/201flaviosilva-labs/Guardar/wiki/CheatSheet);
- - [Available Commands](https://github.com/201flaviosilva-labs/Guardar/wiki/AvailableCommands);
- - [Custom Build](https://github.com/201flaviosilva-labs/Guardar/wiki/CustomBuild);
- [JS Docs API](https://201flaviosilva-labs.github.io/Guardar/);
- [GitHub](https://github.com/201flaviosilva-labs/Guardar);
  - [Issues](https://github.com/201flaviosilva-labs/Guardar/issues);
  - [Pull Requests](https://github.com/201flaviosilva-labs/Guardar/pulls);
- [Code Sandbox Examples](https://codesandbox.io/examples/package/guardar);
- [CHANGELOG](./CHANGELOG.md);
