<script lang="ts" context="module">
	import ButtonBase from './ButtonBase.svelte';
	import { getClasses } from '$lib/utils/css';
</script>

<script lang="ts">
	export { className as class };

	export let theme: 'blue' | 'red' | 'green' = 'blue';
	export let href: string | undefined = undefined;
	export let target: '_blank' | undefined = undefined;

	let className = '';

	$: classes = getClasses([
		theme === 'blue' && 'bg-blue-500 hover:bg-blue-600 text-white',
		theme === 'red' && 'bg-red-500 hover:bg-red-600 text-white',
		theme === 'green' && 'bg-green-500 hover:bg-green-600 text-white',
		className
	]);
</script>

<ButtonBase
	class="button-main px-5 transition-colors duration-300 ease-in-out rounded-md py-3 {classes}"
	{href}
	{target}
	on:click
>
	<slot />
</ButtonBase>
