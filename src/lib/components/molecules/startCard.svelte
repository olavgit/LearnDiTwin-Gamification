<script lang="ts" context="module">
	import { collection, getDocs, updateDoc } from 'firebase/firestore';
	import { db } from '../../firebase';

	import ButtonMain from '$atoms/buttons/ButtonMain.svelte';
	import Card from '$atoms/Card.svelte';
	import bobLogo from '$assets/logo/bob-logo.png';

	import { appState } from '$store/app';
	import { TEXT } from '$assets/text';
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
	<img src={bobLogo} alt="Logo van de BOB-Game" class="w-48" />
	{#if !settingsOpen}
		<div class="text-center">
			<h1 class="font-bold text-xl mb-2">{TEXT.start_titel}</h1>
			<p class="mb-4">
				{TEXT.start_beschrijving}
			</p>
			<div class="flex gap-x-2 justify-center">
				<ButtonMain theme="green" on:click={() => appState.set(1)}>Start</ButtonMain>
				<ButtonMain href="https://photos.app.goo.gl/aDYZgySVrSQGbZKG9" target="_blank"
					>Achtergrond informatie</ButtonMain
				>
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
