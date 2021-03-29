/**
 * Jest Tests
 * =====================
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
import webcomponent from "../functions/webcomponent";

test("show hello world", async () => {
	const { app } = await webcomponent({ text: "hello-world" });

	expect(app()).toBe("hello-world");
});
