import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";

const buildFolder = "dist/"; // used for deploy in github pages

const umd = {
	input: "src/Guardar.js",
	output: {
		name: "guardar",
		file: buildFolder + "Guardar.umd.js", // Universal Module Definition
		format: "umd",
	},
	plugins: [
		resolve(),
		commonjs(),
		babel({
			exclude: ["node_modules/**"],
		}),
	],
};

export default [
	umd,
	{
		input: "src/Guardar.js",
		output: [ // https://betterprogramming.pub/what-are-cjs-amd-umd-esm-system-and-iife-3633a112db62
			{ file: buildFolder + "Guardar.esm.js", format: "es" }, // ES Module
			{ file: buildFolder + "Guardar.cjs.js", format: "cjs" }, // CommonJS (Node)
			{ file: buildFolder + "Guardar.amd.js", format: "amd" }, // Asynchronous Module Definition
			{ file: buildFolder + "Guardar.system.js", format: "system" }, // 
			{ file: buildFolder + "Guardar.iife.js", format: "iife" }, // IIFE (vanilla) probably useless
		],
		plugins: [
			babel({
				exclude: ["node_modules/**"],
			}),
		],
	},
];
