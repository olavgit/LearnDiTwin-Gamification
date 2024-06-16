<script lang="ts" context="module">
	import ButtonMain from '$atoms/buttons/ButtonMain.svelte';
	import Card from '$atoms/Card.svelte';

	import { appState } from '$store/app';
	import { activeStakeholder } from '$store/stakeholder';
</script>

{#if $activeStakeholder}
	<Card>
		<h2 class="font-bold text-2xl">{$activeStakeholder.id}</h2>
		<p>
			{$activeStakeholder.description}
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
