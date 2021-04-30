<svelte:options tag="svelte-webcomponent-boilerplate" />

<script lang="ts">
	/**
	 * Svelte WebComponent Boilerplate
	 * =====================
	 *
	 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
	 *
	 * @license: MIT License
	 *
	 */
	import webcomponent from "@app/functions/webcomponent";

	export let header: string; // headerText || $$props["header-text"] if you use dash separator
	export let flip: string;
	export let footer: string;

	async function getHelloWorld() {
		const { app } = await webcomponent({ text: "hello-world" });

		return app();
	}
</script>

<div id="webcomponent" part="webcomponent">
	{header}
	<div id="flip" part="flip">
		<div part="div-1"><div part="div-1-1">{flip.split(",")[0]}</div></div>
		<div part="div-2"><div part="div-2-2">{flip.split(",")[1]}</div></div>
		<div part="div-3"><div part="div-3-3">{flip.split(",")[2]}</div></div>
	</div>
	{footer}<br /><br />
	{#await getHelloWorld()}
		<p>loading</p>
	{:then data}
		<p>{data}</p>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
</div>

<style lang="scss">
	@import "../styles/webcomponent.scss";
</style>
