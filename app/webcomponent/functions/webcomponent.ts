/**
 * Modules
 * =====================
 * Show hello world text
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
import type { ModuleInterface, ModuleResponseInterface } from "../types/webcomponent.type";

/**
 * Hello World
 * =====================
 * Print hello-world
 *
 * @param {string} text - input string
 *
 * @return {Promise<ModuleResponseInterface>} fn - output string (async), run app()

 */
export default async ({ text }: ModuleInterface): Promise<ModuleResponseInterface> => {
	const app = () => text;

	return {
		app
	};
};
