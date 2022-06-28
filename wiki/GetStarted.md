# Get Started

A simple example of how to use Guardar.

## Instal

`npm install guardar`

## Simple Usage

```javascript
import Guardar from "guardar";
const { LocalInstance as Local, getVersion } = Guardar;

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
console.log(Local.getAll("myData"));
```
