export default Guardar;
declare namespace Guardar {
    export { getVersion };
    export const Local: Local;
}
/**
 * Get version number
 *
 * @returns {string} string of current version
 */
declare function getVersion(): string;
import Local_1 from "./LocalStorage.js";
