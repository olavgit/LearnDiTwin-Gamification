<script lang="ts" context="module">
	import ButtonMain from '$atoms/buttons/ButtonMain.svelte';
	import Card from '$atoms/Card.svelte';

	import { appState } from '$store/app';
	import { activeStakeholder } from '$store/stakeholder';
</script>

{#if $activeStakeholder}
	<Card class="lg:w-[540px]">
		<h2 class="font-bold text-xl mb-2">{$activeStakeholder.id}</h2>
		<p class="mb-4">
			{$activeStakeholder.description}
		</p>
		<div class="flex gap-x-2">
			<ButtonMain
				theme="red"
				on:click={() => {
					appState.set(1);
				}}>Terug</ButtonMain
			>
			<ButtonMain
				on:click={() => {
					appState.set(3);
				}}>Volgende</ButtonMain
			>
		</div>
	</Card>
{/if}
