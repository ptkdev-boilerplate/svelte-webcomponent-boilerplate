/**
 * Check configs.js
 * =====================
 * Check if configs/config.js exist, if don't exist rename .tpl
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
import fs from "fs";
import shell from "shelljs";

const path = "./configs/config.js";


if (!fs.existsSync(path)) {
	shell.cp("-Rf", "./configs/config.js.tpl", "./configs/config.js");
}
