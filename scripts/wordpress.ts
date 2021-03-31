/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * Wordpress Package
 * =====================
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
import * as fs from "fs";
import * as shell from "shelljs";
import nunjucks from "nunjucks";
const pkg = require("../package.json");

declare const __dirname;

nunjucks.configure({
	autoescape: false,
});

let html = nunjucks.render(`${__dirname}/../wordpress/readme.txt`, { package: pkg });
fs.writeFileSync(`${__dirname}/../dist/readme.txt`, html, "utf8");

html = nunjucks.render(`${__dirname}/../wordpress/svelte_webcomponent_boilerplate.php`, { package: pkg });
fs.writeFileSync(`${__dirname}/../dist/svelte_webcomponent_boilerplate.php`, html, "utf8");

shell.mkdir("-p", `${__dirname}/../build/${pkg.name.replace("@ptkdev/", "")}/`);
shell.mkdir("-p", `${__dirname}/../dist/wordpress/`);
shell.cp("-R", `${__dirname}/../dist/*`, `${__dirname}/../build/${pkg.name.replace("@ptkdev/", "")}/`);

shell.exec(`cd build && zip -r ../dist/wordpress/${pkg.name.replace("@ptkdev/", "")}-wordpress-plugin.zip .`);

shell.rm("-r", `${__dirname}/../build`);
shell.rm("-r", `${__dirname}/../dist/svelte_webcomponent_boilerplate.php`);
shell.rm("-r", `${__dirname}/../dist/readme.txt`);
