import "./MockStorage.js";
import Guardar from "../src/index.js";
const { Session } = Guardar;

let SessionInst = null;
const defaultData = {
	myString: "myString",
	myNumber: 42,
	myBool: false,
	myObject: { name: "Dog", age: 3, },
	myArray: [1, 2, 3],
};

const reset = (saveName = "test", startMockData = true) => {
	sessionStorage.clear();
	SessionInst = new Session();
	SessionInst.setName(saveName);
	if (startMockData) sessionStorage.setItem("test", JSON.stringify(defaultData));
};

describe("Session", () => {
	// Set Name
	describe("setName", () => {
		beforeEach(() => reset("guardar", false));

		it("should fail if the name is not a string", () => {
			expect(() => SessionInst.setName(42)).toThrowError("The name must be a string");
		});

		it("Should init the session storage with the default name", () => {
			SessionInst.setName();
			expect(sessionStorage.getItem("guardar")).toBe("{}");
		});

		it("Should init the session storage with the given name", () => {
			SessionInst.setName("test");
			expect(sessionStorage.getItem("test")).toBe("{}");
		});

		it("Should recover de last data", () => {
			SessionInst.setData("last", defaultData);
			SessionInst.setName("test");
			expect(sessionStorage.getItem("test")).toBe(JSON.stringify({ last: defaultData }));
		});
	});

	// Get All
	describe("getAll", () => {
		beforeEach(() => { reset("", false); });

		it("should fail if the json is not a boolean", () => {
			expect(() => SessionInst.getAll(42)).toThrowError("The json must be a boolean");
		});

		it("Should get all the data (string)", () => {
			SessionInst.setData("test", "beep");
			expect(SessionInst.getAll()).toEqual({ test: "beep" });
			expect(SessionInst.getAll(true)).toBe('{"test":"beep"}');
		});

		// Number
		it("Should get all the data (number)", () => {
			SessionInst.setData("test", 1);
			expect(SessionInst.getAll()).toEqual({ "test": 1 });
			expect(SessionInst.getAll(true)).toBe('{"test":1}');
		});

		// Object
		it("Should get all the data (object)", () => {
			const obj = { name: "Dog", age: 3, };
			SessionInst.setData("test", obj);
			expect(SessionInst.getAll()).toEqual({ test: obj });
			expect(SessionInst.getAll(true)).toBe('{"test":{"name":"Dog","age":3}}');
		});

		// Array
		it("Should get all the data (array)", () => {
			const arr = [1, 2, 3];
			SessionInst.setData("test", arr);
			expect(SessionInst.getAll()).toEqual({ test: arr });
			expect(SessionInst.getAll(true)).toBe('{"test":[1,2,3]}');
		});

		// Default Data
		it("Should get all the data (defaultData)", () => {
			SessionInst.setData("test", defaultData);
			expect(SessionInst.getAll()).toEqual({ test: defaultData });
			expect(SessionInst.getAll(true)).toBe(JSON.stringify({ test: defaultData }));
		});
	});

	// Get Data
	describe("getData", () => {
		beforeEach(reset);

		it("should fail if the key is not a string", () => {
			expect(() => SessionInst.getData(42)).toThrowError("The key must be a string");
		});

		it("Should get the data (in this test just a string)", () => {
			expect(SessionInst.getData("myString")).toBe("myString");
		});

		// Number
		it("Should get the data (in this test just a number)", () => {
			expect(SessionInst.getData("myNumber")).toBe(42);
		});

		// Boolean
		it("Should get the data (in this test just a boolean)", () => {
			expect(SessionInst.getData("myBool")).toBe(false);
		});

		// Object
		it("Should get the data (in this test a object)", () => {
			expect(SessionInst.getData("myObject")).toEqual({ name: "Dog", age: 3, });
		});

		// Array
		it("Should get the data (in this test a array)", () => {
			expect(SessionInst.getData("myArray")).toEqual([1, 2, 3]);
		});
	});


	describe("setData", () => {
		beforeEach(reset);

		it("should fail if the key is not a string", () => {
			expect(() => SessionInst.setData(42, "test")).toThrowError("The key must be a string");
		});

		it("should fail if the value is not defined", () => {
			expect(() => SessionInst.setData("test", undefined)).toThrowError("The value must be defined");
		});

		// Change Existing Data
		// String
		it("Should change and get the new data (string)", () => {
			SessionInst.setData("myString", "MyChangedString");
			expect(SessionInst.getData("myString")).toBe("MyChangedString");
		});

		// Number
		it("Should change and get the new data (number)", () => {
			SessionInst.setData("myNumber", 7);
			expect(SessionInst.getData("myNumber")).toBe(7);
		});

		// Boolean
		it("Should change and get the new data (boolean)", () => {
			SessionInst.setData("myBool", true);
			expect(SessionInst.getData("myBool")).toBe(true);
		});

		// Object
		it("Should change and get the new data (object)", () => {
			SessionInst.setData("myObject", { name: "Cat", age: 5, });
			expect(SessionInst.getData("myObject")).toEqual({ name: "Cat", age: 5, });
		});

		// Array
		it("Should change and get the new data (array)", () => {
			SessionInst.setData("myArray", [0, 9, "string", false]);
			expect(SessionInst.getData("myArray")).toEqual([0, 9, "string", false]);
		});
	});

	// Update All
	describe("updateAll", () => {
		beforeEach(reset);

		it("should fail if the data is not defined", () => {
			expect(() => SessionInst.updateAll(undefined)).toThrowError("The data must be defined");
		});

		it("Should change all saved data to the same", () => {
			SessionInst.updateAll(defaultData);
			expect(SessionInst.getAll()).toEqual(defaultData);
		});

		it("Should change all saved data to the new one", () => {
			const newData = {
				myString: "MyChangedString",
				myNumber: 7,
				myBool: true,
				myObject: { name: "Cat", age: 5, },
				myArray: [0, 9, "string", false],
			};
			SessionInst.updateAll(newData);
			expect(SessionInst.getAll()).toEqual(newData);
		});
	});

	// Remove Data
	describe("removeData", () => {
		beforeEach(reset);

		it("should fail if the key is not a string", () => {
			expect(() => SessionInst.removeData(42)).toThrowError("The key must be a string");
		});

		it("Should remove the data by the given key", () => {
			SessionInst.removeData("myString");

			expect(SessionInst.getAll()).toEqual({
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
			SessionInst.clear();
			expect(sessionStorage.getItem("test")).toBe("{}");
		});
	});


	// Keys
	describe("keys", () => {
		beforeEach(reset);

		it("Should return the keys of the save data", () => {
			expect(SessionInst.keys()).toEqual(["myString", "myNumber", "myBool", "myObject", "myArray"]);
		});
	});

	// Size
	describe("size", () => {
		beforeEach(reset);

		it("Should return the number of the keys", () => {
			expect(SessionInst.size()).toBe(5);
		});
	});

	// Has
	describe("has", () => {
		beforeEach(reset);

		it("Should fail if the key is not a string", () => {
			expect(() => SessionInst.has(42)).toThrowError("The key must be a string");
		});

		it("Should return true if the key exists", () => {
			expect(SessionInst.has("myString")).toBe(true);
		});

		it("Should return false if the key doesn't exists", () => {
			expect(SessionInst.has("myString2")).toBe(false);
		});
	});

	// Is Empty
	describe("isEmpty", () => {
		beforeEach(reset);

		it("Should return true (the sessionStorage was cleared)", () => {
			sessionStorage.setItem("test", "{}");
			expect(SessionInst.isEmpty()).toBe(true);
		});

		it("Should return false (the sessionStorage is not cleared)", () => {
			expect(SessionInst.isEmpty()).toBe(false);
		});
	});
});
