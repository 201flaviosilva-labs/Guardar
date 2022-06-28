export default Guardar;
declare namespace Guardar {
    export { getVersion };
    export { Local };
    export { Session };
    export const LocalInstance: Local;
    export const SessionInstance: Session;
}
/**
 * Get version number
 *
 * @example Guardar.getVersion(); // "2.0.0"
 * @returns {string} string of current version
 */
declare function getVersion(): string;
import Local from "./Local.js";
import Session from "./Session.js";
