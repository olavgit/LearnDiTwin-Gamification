<script lang="ts">
	export let el: HTMLElement | undefined = undefined;
	export let href: string | undefined = undefined;
	export let target: '_blank' | undefined = undefined;
	export { className as class };

	let className = '';
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	class="button-base {className}"
	{href}
	{target}
	role="button"
	tabindex="0"
	{...$$restProps}
	on:click
	bind:this={el}
>
	<slot />
</svelte:element>
