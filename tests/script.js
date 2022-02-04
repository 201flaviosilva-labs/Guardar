import Guardar from "../../src/guardar.js";
// import Guardar from "../../dist/lib/Guardar.esm.js";

// Check if are in Random
const URLParams = new URLSearchParams(window.location.search);
if (URLParams.get("random") !== "false") window.location.href = location.protocol + '//' + location.host + location.pathname + "?random=false";

const defaultData = {
	myString: "myString",
	myNumber: 42,
	myBool: false,
	myObject: { name: "Dog", age: 3, },
	myArray: [1, 2, 3],
};

const reset = () => {
	localStorage.clear();
	Guardar.init("test");
	localStorage.setItem("test", JSON.stringify(defaultData));
};

describe("Beep", () => {
	console.log("Change random to false, to run sequentially the tests");
	it("Should be true", () => {
		expect(true).toBe(true);
	});
});

// Init function
describe("Init", () => {
	beforeEach(() => { localStorage.clear(); });

	it("Init - Should init the local storage with the default name", () => {
		Guardar.init();
		expect(localStorage.getItem("guardar")).toBe("{}");
	});

	it("Init - Should init the local storage with the given name", () => {
		Guardar.init("test");
		expect(localStorage.getItem("test")).toBe("{}");
	});

	it("Init - Should recover de last data", () => {
		localStorage.setItem("test", JSON.stringify(defaultData));
		Guardar.init("test");
		expect(localStorage.getItem("test")).toEqual(JSON.stringify(defaultData));
	});
});

// Get All function
describe("Get All", () => {
	beforeEach(() => {
		localStorage.clear();
		Guardar.init("test");
	});

	// String
	it("Get All - Should get all the data (in this test just a string)", () => {
		Guardar.setData("test", "test");
		expect(Guardar.getAll()).toEqual({ "test": "test" });
	});

	// Number
	it("Get All - Should get all the data (in this test just a number)", () => {
		Guardar.setData("test", 1);
		expect(Guardar.getAll()).toEqual({ "test": 1 });
	});

	// Object
	it("Get All - Should get all the data (in this test a object)", () => {
		const obj = { name: "Dog", age: 3, };
		Guardar.setData("test", obj);
		expect(Guardar.getAll()).toEqual({ "test": obj });
	});

	// Array
	it("Get All - Should get all the data (in this test a array)", () => {
		const arr = [1, 2, 3];
		Guardar.setData("test", arr);
		expect(Guardar.getAll()).toEqual({ "test": arr });
	});

	// Array
	it("Get All - Should get all the data (in this test the defaultData)", () => {
		localStorage.setItem("test", JSON.stringify(defaultData));
		expect(Guardar.getAll()).toEqual(defaultData);
	});
});

// Get Data function
describe("Get Data", () => {
	beforeEach(reset);

	// Get Data
	// String
	it("Get Data - Should get the data (in this test just a string)", () => {
		expect(Guardar.getData("myString")).toBe("myString");
	});

	// Number
	it("Get Data - Should get the data (in this test just a number)", () => {
		expect(Guardar.getData("myNumber")).toBe(42);
	});

	// Boolean
	it("Get Data - Should get the data (in this test just a boolean)", () => {
		expect(Guardar.getData("myBool")).toBe(false);
	});

	// Object
	it("Get Data - Should get the data (in this test a object)", () => {
		expect(Guardar.getData("myObject")).toEqual({ name: "Dog", age: 3, });
	});

	// Array
	it("Get Data - Should get the data (in this test a array)", () => {
		expect(Guardar.getData("myArray")).toEqual([1, 2, 3]);
	});
});


describe("Set Data", () => {
	beforeEach(reset);

	// Change Existing Data
	// String
	it("Set Data - Should change and get the new data (in this test a different string)", () => {
		Guardar.setData("myString", "MyChangedString");
		expect(Guardar.getData("myString")).toBe("MyChangedString");
	});

	// Number
	it("Set Data - Should change and get the new data (in this test a different number)", () => {
		Guardar.setData("myNumber", 7);
		expect(Guardar.getData("myNumber")).toBe(7);
	});

	// Boolean
	it("Set Data - Should change and get the new data (in this test a different boolean)", () => {
		Guardar.setData("myBool", true);
		expect(Guardar.getData("myBool")).toBe(true);
	});

	// Object
	it("Set Data - Should change and get the new data (in this test a different object)", () => {
		Guardar.setData("myObject", { name: "Cat", age: 5, });
		expect(Guardar.getData("myObject")).toEqual({ name: "Cat", age: 5, });
	});

	// Array
	it("Set Data - Should change and get the new data (in this test a different array)", () => {
		Guardar.setData("myArray", [0, 9, "string", false]);
		expect(Guardar.getData("myArray")).toEqual([0, 9, "string", false]);
	});
});

// Update All function
describe("Update All", () => {
	beforeEach(reset);

	it("Update All - Should change all saved data to the same", () => {
		Guardar.updateAll(defaultData);
		expect(Guardar.getAll()).toEqual(defaultData);
	});

	it("Update All - Should change all saved data to the new one", () => {
		const newData = {
			myString: "MyChangedString",
			myNumber: 7,
			myBool: true,
			myObject: { name: "Cat", age: 5, },
			myArray: [0, 9, "string", false],
		};
		Guardar.updateAll(newData);
		expect(Guardar.getAll()).toEqual(newData);
	});
});

// Remove Data function
describe("Remove Data", () => {
	beforeEach(reset);

	it("Remove Data - Should remove the data by the given key", () => {
		Guardar.removeData("myString");

		expect(Guardar.getAll()).toEqual({
			myNumber: 42,
			myBool: false,
			myObject: { name: "Dog", age: 3, },
			myArray: [1, 2, 3],
		});
	});
});

// Change Save Data Name function
describe("Change Save Data Name", () => {
	beforeEach(reset);

	it("Change Save Data Name - Should change the name of the save data", () => {
		Guardar.changeSaveDataName("newTest");
		expect(localStorage.getItem("newTest")).toEqual(JSON.stringify(defaultData));
	});
});

// Clear function
describe("Clear", () => {
	beforeEach(reset);

	it("Clear - Should clear the save data", () => {
		Guardar.clear();
		expect(localStorage.getItem("test")).toBe("{}");
	});
});


// Keys function
describe("Keys", () => {
	beforeEach(reset);

	it("Keys - Should return the keys of the save data", () => {
		expect(Guardar.keys()).toEqual(["myString", "myNumber", "myBool", "myObject", "myArray"]);
	});
});

// Size function
describe("Size", () => {
	beforeEach(reset);

	it("Size - Should return the number of the keys", () => {
		expect(Guardar.size()).toBe(5);
	});
});

// Has function
describe("Has", () => {
	beforeEach(reset);

	it("Has - Should return true if the key exists", () => {
		expect(Guardar.has("myString")).toBe(true);
	});

	it("Has - Should return false if the key doesn't exists", () => {
		expect(Guardar.has("myString2")).toBe(false);
	});
});

// Is Empty function
describe("Is Empty", () => {
	beforeEach(reset);

	it("Is Empty - Should return true (the localStorage was cleared)", () => {
		localStorage.setItem("test", "{}");
		expect(Guardar.isEmpty()).toBe(true);
	});

	it("Is Empty - Should return false (the localStorage is not cleared)", () => {
		expect(Guardar.isEmpty()).toBe(false);
	});
});
