import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";

const umd = {
	input: "src/Guardar.js",
	output: {
		name: "guardar",
		file: "dist/Guardar.umd.js", // Universal Module Definition
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
	// umd,
	{
		input: "src/Guardar.js",
		output: [ // https://betterprogramming.pub/what-are-cjs-amd-umd-esm-system-and-iife-3633a112db62
			{ file: "dist/Guardar.esm.js", format: "es" }, // ES Module
			{ file: "dist/Guardar.cjs.js", format: "cjs" }, // CommonJS (Node)
			// { file: "dist/Guardar.amd.js", format: "amd" }, // Asynchronous Module Definition
			// { file: "dist/Guardar.system.js", format: "system" }, // 
			// { file: "dist/Guardar.iife.js", format: "iife" }, // IIFE (vanilla) probably useless
		],
		plugins: [
			babel({
				exclude: ["node_modules/**"],
			}),
		],
	},
];
