/**
 * Interfaces
 * =====================
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */

export interface ModuleInterface {
	/**
	 *
	 * @param { String } text - input text
	 *
	 */
	text: string
}

export interface ModuleResponseInterface {
	/**
	 *
	 * @return {fn} string - run app() for output text
	 *
	 */
	app(): string
}
