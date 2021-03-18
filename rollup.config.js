import svelte from "rollup-plugin-svelte";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import sveltePreprocess from "svelte-preprocess";
import typescript from "@rollup/plugin-typescript";
import css from "rollup-plugin-css-only";
import copy from "rollup-plugin-copy";
import json from "@rollup/plugin-json";
import config from "./configs/config";
import { spawn } from "child_process";

const production = !config.debug;

function serve() {
	let server;

	function toExit() {
		if (server) {
			server.kill(0);
		}
	}

	return {
		writeBundle() {
			if (server) {
				return;
			}
			server = spawn("npm", ["run", "start", "--", "--dev"], {
				stdio: ["ignore", "inherit", "inherit"],
				shell: true,
			});

			process.on("SIGTERM", toExit);
			process.on("exit", toExit);
		},
	};
}

export default {
	input: "app/core/init.ts",
	output: {
		sourcemap: true,
		format: "iife",
		name: "app",
		file: "dist/webcomponent.js",
	},
	plugins: [
		json(),
		copy({
			targets: [
				{ src: "package.json", dest: "dist" },
				{ src: "README.md", dest: "dist" },
				{ src: "LICENSE.md", dest: "dist" },
				{ src: "assets/**/*", dest: "dist" }
			],
		}),
		svelte({
			preprocess: sveltePreprocess({
				sourceMap: !production,
				scss: { includePaths: ["app/**/*.scss"] },
			}),
			compilerOptions: {
				// enable run-time checks when not in production
				dev: !production,
				customElement: true
			},
		}),
		// we'll extract any component CSS out into
		// a separate file - better for performance
		css({ output: "bundle.css" }),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ["svelte"],
		}),
		commonjs(),
		typescript({
			sourceMap: !production,
			inlineSources: !production,
		}),

		// In dev mode, call `npm run start` once
		// the bundle has been generated
		!production && serve(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload("dist"),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser(),
	],

	watch: {
		clearScreen: false,
	},
};
