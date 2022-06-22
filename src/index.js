import { version } from "../package.json";
import Local from "./LocalStorage.js";

/**
 * Get version number
 * 
 * @returns {string} string of current version 
 */
function getVersion() { return version; }

const Guardar = {
	getVersion,
	Local: new Local(),
};

export default Guardar;
