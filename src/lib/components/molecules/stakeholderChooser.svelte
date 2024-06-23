<script lang="ts" context="module">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	import ButtonMain from '$atoms/buttons/ButtonMain.svelte';
	import Card from '$atoms/Card.svelte';
	import Loading from '$atoms/Loading.svelte';

	import { appState } from '$store/app';
	import { activeStakeholder, stakeholderStore } from '$store/stakeholder';
</script>

<script>
	const loadingError = writable(false);
	const timeoutDuration = 5000; // Timeout duration in milliseconds

	onMount(() => {
		const timeout = setTimeout(() => {
			loadingError.set(true);
		}, timeoutDuration);

		// Clear the timeout if stakeholders load successfully
		const unsubscribe = stakeholderStore.subscribe((value) => {
			if (value.length > 0) {
				clearTimeout(timeout);
			}
		});

		return () => {
			clearTimeout(timeout);
			unsubscribe();
		};
	});
</script>

<Card>
	<div class="font-bold text-xl mb-4">Selecteer de rol die je vertegenwoordigd</div>
	<div class="flex gap-x-2">
		{#if $loadingError}
			<p class="text-red-500">Er is iets misgegaan bij het ophalen van de data.</p>
		{:else if $stakeholderStore.length === 0}
			<Loading />
		{/if}
		{#each $stakeholderStore as s}
			<ButtonMain
				on:click={() => {
					activeStakeholder.set(s);
					appState.set(2);
				}}
			>
				{s.id}
			</ButtonMain>
		{/each}
		<ButtonMain
			theme="red"
			on:click={() => {
				appState.set(0);
			}}
		>
			Terug
		</ButtonMain>
	</div>
</Card>
