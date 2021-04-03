<?php
/*
Plugin Name: {{package.displayName}} - WebComponent
Plugin URI:  {{package.homepage}}
Description: {{package.description}}
Version:     {{package.version}}
Author:      {{package.author}}
Author URI:  {{package.authorUrl}}
License:     MIT
License URI: https://github.com/ptkdev-boilerplate/svelte-webcomponent-boilerplate/main/LICENSE.md
*/
function svelte_webcomponent_boilerplate_load(){
	wp_enqueue_script("svelte_webcomponent_boilerplate", plugins_url('svelte-webcomponent-boilerplate', dirname(__FILE__))."/webcomponent.js", array(), false, true);
}

add_action("wp_enqueue_scripts", "svelte_webcomponent_boilerplate_load");
?>