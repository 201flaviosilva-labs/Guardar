export default Guardar;
declare namespace Guardar {
    export { getVersion };
    export const Local: Local;
    export const Session: Session;
}
/**
 * Get version number
 *
 * @returns {string} string of current version
 */
declare function getVersion(): string;
import Local_1 from "./Local.js";
import Session_1 from "./Session.js";
