<script lang="ts" context="module">
	import { collection, getDocs, updateDoc } from 'firebase/firestore';
	import { db } from '../../firebase';

	import ButtonMain from '$atoms/buttons/ButtonMain.svelte';
	import Card from '$atoms/Card.svelte';

	import { appState } from '$store/app';
</script>

<script lang="ts">
	let settingsOpen = false;

	const resetFirestore = async () => {
		const measuresCollection = collection(db, 'stakeholders');
		const snapshot = await getDocs(measuresCollection);

		let empty = [];
		const valuesSize = snapshot.docs[0].data().values.length;
		for (let i = 0; i < valuesSize; i++) empty.push(0);

		for (const stakeholderDoc of snapshot.docs) {
			await updateDoc(stakeholderDoc.ref, {
				values: empty
			});
		}

		alert('Alle sliders zijn gereset!');
	};
</script>

<Card class="gap-y-4 lg:w-[540px] items-center">
	<img src="/bob-logo.png" alt="Logo van de BOB-Game" class="w-48" />
	{#if !settingsOpen}
		<div class="text-center">
			<h1 class="font-bold text-xl mb-2">Welkom bij de BOB-Game!</h1>
			<p class="mb-4">
				Hier zul je op basis van je eigen aangewezen rol meedenken over een probleem en samen met je
				medespelers tot een besluit komen over welke maatregelen genomen moeten worden.
			</p>
			<div class="flex gap-x-2 justify-center">
				<ButtonMain theme="green" on:click={() => appState.set(1)}>Start</ButtonMain>
				<ButtonMain on:click={() => (settingsOpen = !settingsOpen)}>Instellingen</ButtonMain>
			</div>
		</div>
	{/if}
	{#if settingsOpen}
		<div class="text-center">
			<p class="font-bold text-xl mb-4">Instellingen</p>
			<div class="flex gap-x-2 justify-center">
				<ButtonMain on:click={resetFirestore}>Reset sliders</ButtonMain>
				<ButtonMain on:click={() => appState.set(5)}>Wijzig brondata (.csv)</ButtonMain>
				<ButtonMain theme="red" on:click={() => (settingsOpen = !settingsOpen)}>Terug</ButtonMain>
			</div>
		</div>
	{/if}
</Card>
