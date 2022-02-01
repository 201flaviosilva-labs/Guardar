# Guardar

## Description

A simple lob to deal and organize the localstorage.

## Instal

> npm install guardar

## Usage

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

Guardar.init();
Guardar.setData("myData", myData);
console.log(Guardar.getData("myData"));

```
