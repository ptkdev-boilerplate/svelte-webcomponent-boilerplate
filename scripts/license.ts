/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * Add license on bundle
 * =====================
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
import * as fs from "fs";
const pkg = require("../package.json");

declare const __dirname;

const license = `// WebComponent: ${pkg.displayName} v${pkg.version}
// Author: ${pkg.author}
// License: ${pkg.license}
// ${pkg.homepage}
`;

const js = fs.readFileSync(`${__dirname}/../dist/webcomponent.js`).toString();
fs.unlinkSync(`${__dirname}/../dist/webcomponent.js`);
fs.writeFileSync(`${__dirname}/../dist/webcomponent.js`, `${license}${js}`, { encoding: "utf8" });
