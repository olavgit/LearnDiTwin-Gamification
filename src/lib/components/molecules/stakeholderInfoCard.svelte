<script lang="ts" context="module">
	import ButtonMain from '$atoms/buttons/ButtonMain.svelte';
	import Card from '$atoms/Card.svelte';

	import { appState } from '$store/app';
	import { activeStakeholder } from '$store/stakeholder';
</script>

{#if $activeStakeholder}
	<Card>
		<h2 class="font-bold text-2xl">{$activeStakeholder.id}</h2>
		<p class="lg:max-w-[400px]">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>

		<div class="flex gap-x-2">
			<ButtonMain
				theme="red"
				on:click={() => {
					appState.set(0);
				}}>Terug</ButtonMain
			>
			<ButtonMain
				on:click={() => {
					appState.set(2);
				}}>Klaar</ButtonMain
			>
		</div>
	</Card>
{/if}
