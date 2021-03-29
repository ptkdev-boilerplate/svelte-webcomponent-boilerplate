/**
 * Disable debug
 * =====================
 * Check if configs/config.js has debug to off
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
import * as fs from "fs";
import * as shell from "shelljs";
import { argv } from "yargs";

declare const __dirname;

const path = `${__dirname}/../configs/config.js`;

if (fs.existsSync(path)) {
	if (argv.enable) {
		shell.exec(`sed -i 's/"debug": false/"debug": true/g' ${__dirname}/../configs/config.js`);
	} else {
		shell.exec(`sed -i 's/"debug": true/"debug": false/g' ${__dirname}/../configs/config.js`);
	}
}
