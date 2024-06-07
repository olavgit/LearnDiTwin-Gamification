<script lang="ts" context="module">
	import ButtonMain from '$atoms/buttons/ButtonMain.svelte';

	import { appState } from '$store/app';
	import { activeStakeholder, stakeholderStore } from '$store/stakeholder';
</script>

<div class="p-10 bg-yellow-100 shadow-lg flex flex-col">
	<div class="font-bold text-2xl mb-4">Kies je stakeholder</div>
	<div class="flex gap-x-2">
		{#each $stakeholderStore as s}
			<ButtonMain
				on:click={() => {
					activeStakeholder.set(s);
					appState.set('selected');
				}}
			>
				{s.name}
			</ButtonMain>
		{/each}
	</div>
</div>
