import "./MockStorage.js";
import Guardar from "../src/index.js";
const { Local } = Guardar;

let LocalInst = null;
const defaultData = {
	myString: "myString",
	myNumber: 42,
	myBool: false,
	myObject: { name: "Dog", age: 3, },
	myArray: [1, 2, 3],
};

const reset = (saveName = "test", startMockData = true) => {
	localStorage.clear();
	LocalInst = new Local();
	LocalInst.setName(saveName);
	if (startMockData) localStorage.setItem("test", JSON.stringify(defaultData));
};

describe("Local", () => {
	// Set Name
	describe("setName", () => {
		beforeEach(() => reset("guardar", false));

		it("should fail if the name is not a string", () => {
			expect(() => LocalInst.setName(42)).toThrowError("The name must be a string");
		});

		it("Should init the local storage with the default name", () => {
			LocalInst.setName();
			expect(localStorage.getItem("guardar")).toBe("{}");
		});

		it("Should init the local storage with the given name", () => {
			LocalInst.setName("test");
			expect(localStorage.getItem("test")).toBe("{}");
		});

		it("Should recover de last data", () => {
			LocalInst.setData("last", defaultData);
			LocalInst.setName("test");
			expect(localStorage.getItem("test")).toBe(JSON.stringify({ last: defaultData }));
		});
	});

	// Get All
	describe("getAll", () => {
		beforeEach(() => { reset("", false); });

		it("should fail if the json is not a boolean", () => {
			expect(() => LocalInst.getAll(42)).toThrowError("The json must be a boolean");
		});

		it("Should get all the data (string)", () => {
			LocalInst.setData("test", "beep");
			expect(LocalInst.getAll()).toEqual({ test: "beep" });
			expect(LocalInst.getAll(true)).toBe('{"test":"beep"}');
		});

		// Number
		it("Should get all the data (number)", () => {
			LocalInst.setData("test", 1);
			expect(LocalInst.getAll()).toEqual({ "test": 1 });
			expect(LocalInst.getAll(true)).toBe('{"test":1}');
		});

		// Object
		it("Should get all the data (object)", () => {
			const obj = { name: "Dog", age: 3, };
			LocalInst.setData("test", obj);
			expect(LocalInst.getAll()).toEqual({ test: obj });
			expect(LocalInst.getAll(true)).toBe('{"test":{"name":"Dog","age":3}}');
		});

		// Array
		it("Should get all the data (array)", () => {
			const arr = [1, 2, 3];
			LocalInst.setData("test", arr);
			expect(LocalInst.getAll()).toEqual({ test: arr });
			expect(LocalInst.getAll(true)).toBe('{"test":[1,2,3]}');
		});

		// Default Data
		it("Should get all the data (defaultData)", () => {
			LocalInst.setData("test", defaultData);
			expect(LocalInst.getAll()).toEqual({ test: defaultData });
			expect(LocalInst.getAll(true)).toBe(JSON.stringify({ test: defaultData }));
		});
	});

	// Get Data
	describe("getData", () => {
		beforeEach(reset);

		it("should fail if the key is not a string", () => {
			expect(() => LocalInst.getData(42)).toThrowError("The key must be a string");
		});

		it("Should get the data (in this test just a string)", () => {
			expect(LocalInst.getData("myString")).toBe("myString");
		});

		// Number
		it("Should get the data (in this test just a number)", () => {
			expect(LocalInst.getData("myNumber")).toBe(42);
		});

		// Boolean
		it("Should get the data (in this test just a boolean)", () => {
			expect(LocalInst.getData("myBool")).toBe(false);
		});

		// Object
		it("Should get the data (in this test a object)", () => {
			expect(LocalInst.getData("myObject")).toEqual({ name: "Dog", age: 3, });
		});

		// Array
		it("Should get the data (in this test a array)", () => {
			expect(LocalInst.getData("myArray")).toEqual([1, 2, 3]);
		});
	});


	describe("setData", () => {
		beforeEach(reset);

		it("should fail if the key is not a string", () => {
			expect(() => LocalInst.setData(42, "test")).toThrowError("The key must be a string");
		});

		it("should fail if the value is not defined", () => {
			expect(() => LocalInst.setData("test", undefined)).toThrowError("The value must be defined");
		});

		// Change Existing Data
		// String
		it("Should change and get the new data (string)", () => {
			LocalInst.setData("myString", "MyChangedString");
			expect(LocalInst.getData("myString")).toBe("MyChangedString");
		});

		// Number
		it("Should change and get the new data (number)", () => {
			LocalInst.setData("myNumber", 7);
			expect(LocalInst.getData("myNumber")).toBe(7);
		});

		// Boolean
		it("Should change and get the new data (boolean)", () => {
			LocalInst.setData("myBool", true);
			expect(LocalInst.getData("myBool")).toBe(true);
		});

		// Object
		it("Should change and get the new data (object)", () => {
			LocalInst.setData("myObject", { name: "Cat", age: 5, });
			expect(LocalInst.getData("myObject")).toEqual({ name: "Cat", age: 5, });
		});

		// Array
		it("Should change and get the new data (array)", () => {
			LocalInst.setData("myArray", [0, 9, "string", false]);
			expect(LocalInst.getData("myArray")).toEqual([0, 9, "string", false]);
		});
	});

	// Update All
	describe("updateAll", () => {
		beforeEach(reset);

		it("should fail if the data is not defined", () => {
			expect(() => LocalInst.updateAll(undefined)).toThrowError("The data must be defined");
		});

		it("Should change all saved data to the same", () => {
			LocalInst.updateAll(defaultData);
			expect(LocalInst.getAll()).toEqual(defaultData);
		});

		it("Should change all saved data to the new one", () => {
			const newData = {
				myString: "MyChangedString",
				myNumber: 7,
				myBool: true,
				myObject: { name: "Cat", age: 5, },
				myArray: [0, 9, "string", false],
			};
			LocalInst.updateAll(newData);
			expect(LocalInst.getAll()).toEqual(newData);
		});
	});

	// Remove Data
	describe("removeData", () => {
		beforeEach(reset);

		it("should fail if the key is not a string", () => {
			expect(() => LocalInst.removeData(42)).toThrowError("The key must be a string");
		});

		it("Should remove the data by the given key", () => {
			LocalInst.removeData("myString");

			expect(LocalInst.getAll()).toEqual({
				myNumber: 42,
				myBool: false,
				myObject: { name: "Dog", age: 3, },
				myArray: [1, 2, 3],
			});
		});
	});

	// Clear
	describe("clear", () => {
		beforeEach(reset);

		it("Should clear the save data", () => {
			LocalInst.clear();
			expect(localStorage.getItem("test")).toBe("{}");
		});
	});


	// Keys
	describe("keys", () => {
		beforeEach(reset);

		it("Should return the keys of the save data", () => {
			expect(LocalInst.keys()).toEqual(["myString", "myNumber", "myBool", "myObject", "myArray"]);
		});
	});

	// Size
	describe("size", () => {
		beforeEach(reset);

		it("Should return the number of the keys", () => {
			expect(LocalInst.size()).toBe(5);
		});
	});

	// Has
	describe("has", () => {
		beforeEach(reset);

		it("Should fail if the key is not a string", () => {
			expect(() => LocalInst.has(42)).toThrowError("The key must be a string");
		});

		it("Should return true if the key exists", () => {
			expect(LocalInst.has("myString")).toBe(true);
		});

		it("Should return false if the key doesn't exists", () => {
			expect(LocalInst.has("myString2")).toBe(false);
		});
	});

	// Is Empty
	describe("isEmpty", () => {
		beforeEach(reset);

		it("Should return true (the localStorage was cleared)", () => {
			localStorage.setItem("test", "{}");
			expect(LocalInst.isEmpty()).toBe(true);
		});

		it("Should return false (the localStorage is not cleared)", () => {
			expect(LocalInst.isEmpty()).toBe(false);
		});
	});
});
