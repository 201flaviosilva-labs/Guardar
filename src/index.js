import { version } from "../package.json";
import Local from "./Local.js";
import Session from "./Session.js";

/**
 * Get version number
 * 
 * @returns {string} string of current version 
 */
function getVersion() { return version; }

const Guardar = {
	getVersion,
	Local: new Local(),
	Session: new Session(),
};

export default Guardar;
