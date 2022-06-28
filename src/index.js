import { version } from "../package.json";
import Local from "./Local.js";
import Session from "./Session.js";

/**
 * Get version number
 * 
 * @example Guardar.getVersion(); // "2.0.0"
 * @returns {string} string of current version 
 */
function getVersion() { return version; }

const Guardar = {
	getVersion,
	Local,
	Session,
	LocalInstance: new Local(),
	SessionInstance: new Session(),
};

export default Guardar;
