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
	import "./webcomponent";

	export let header; // $$props["header-text"] if you use dash separator
	export let flip;
	export let footer;
</script>

<div id="webcomponent" part="webcomponent">
	{header}
	<div id="flip" part="flip">
		<div part="div-1"><div part="div-1-1">{flip.split(",")[0]}</div></div>
		<div part="div-2"><div part="div-2-2">{flip.split(",")[1]}</div></div>
		<div part="div-3"><div part="div-3-3">{flip.split(",")[2]}</div></div>
	</div>
	{footer}
</div>

<style lang="scss">
	@import "./webcomponent.scss";
</style>
