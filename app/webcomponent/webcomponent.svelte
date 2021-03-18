<svelte:options tag="svelte-webcomponentboilerplate" />

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

	export let title;
</script>

<h1>{title}</h1>

<style lang="scss">
	@import "./webcomponent.scss";
</style>
