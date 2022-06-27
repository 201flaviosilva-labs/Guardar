import "./MockStorage.js";
import Guardar from "../src/index.js";
import { version } from "../package.json";

describe("index.js", () => {
	describe("getVersion", () => {
		test("should return version number", () => {
			expect(Guardar.getVersion()).toBe(version);
		});
	});

	describe("Local", () => {
		test("should return Local object", () => {
			expect(Guardar.Local).toBeInstanceOf(Object);
		});
	});

	describe("Session", () => {
		test("should return Session object", () => {
			expect(Guardar.Session).toBeInstanceOf(Object);
		});
	});
});
