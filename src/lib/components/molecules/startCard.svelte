<script lang="ts" context="module">
	import ButtonMain from '$atoms/buttons/ButtonMain.svelte';
	import Card from '$atoms/Card.svelte';

	import { appState } from '$store/app';
</script>

<script lang="ts">
	let settingsOpen = false;

	const resetFirestore = () => {
		console.log('Hier mag de reset firestore functie');
	};
</script>

<Card>
	{#if !settingsOpen}
		<div>
			<ButtonMain on:click={() => appState.set(1)}>Start</ButtonMain>
			<ButtonMain on:click={() => (settingsOpen = !settingsOpen)}>Instellingen</ButtonMain>
		</div>
	{/if}
	{#if settingsOpen}
		<div>
			<ButtonMain on:click={resetFirestore}>Reset de firestore</ButtonMain>
			<ButtonMain theme="red" on:click={() => (settingsOpen = !settingsOpen)}>Terug</ButtonMain>
		</div>
	{/if}
</Card>
