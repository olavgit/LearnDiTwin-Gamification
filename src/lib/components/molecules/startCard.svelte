<script lang='ts' context='module'>
	import ButtonMain from '$atoms/buttons/ButtonMain.svelte';
	import Card from '$atoms/Card.svelte';
	import { db } from '../../firebase';
	import { collection, getDocs, updateDoc } from 'firebase/firestore';

	import { appState } from '$store/app';
	import logo from '/src/lib/assets/bob_game_logo.png'
</script>

<script lang='ts'>

	let settingsOpen = false;

	const resetFirestore = async () => {
		const measuresCollection = collection(db, 'stakeholders');
		const snapshot = await getDocs(measuresCollection);

		let empty = [];
		const valuesSize = snapshot.docs[0].data().values.length;
		for (let i = 0; i < valuesSize; i++) empty.push(0);

		console.log();
		for (const stakeholderDoc of snapshot.docs) {
			// why's my ide giving me an error here stfu
			await updateDoc(stakeholderDoc.ref, {
				values: empty
			});
		}
		alert('Alle schalen staan weer op 0!');
	};
</script>

<Card>
	{#if !settingsOpen}
		<div class="lg:max-w-[400px] text-center" >

			<p>
				<img src={logo} alt="bob game logo" width="200"  class="mx-auto">

				Welkom in de BOB-Game! Hier zul je op basis van je eigen aangewezen rol meedenken over een probleem en en samen met je medespelers tot een besluit komen over welke maatregelen genomen moeten worden.
			</p>
			<ButtonMain on:click={() => appState.set(1)}>Start</ButtonMain>
			<ButtonMain on:click={() => (settingsOpen = !settingsOpen)}>Instellingen</ButtonMain>
		</div>
	{/if}
	{#if settingsOpen}
		<div>
			<ButtonMain on:click={resetFirestore}>Reset Schalen</ButtonMain>
			<ButtonMain on:click={() => appState.set(5)}>Upload CSV</ButtonMain>
			<ButtonMain theme='red' on:click={() => (settingsOpen = !settingsOpen)}>Terug</ButtonMain>
		</div>
	{/if}
</Card>
