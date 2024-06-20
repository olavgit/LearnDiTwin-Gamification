<script lang='ts' context='module'>
	import ButtonMain from '$atoms/buttons/ButtonMain.svelte';
	import Card from '$atoms/Card.svelte';
	import { db } from '../../firebase';
	import { collection, getDocs, updateDoc } from 'firebase/firestore';
	import { writable } from 'svelte/store';
	import Popup from '../atoms/popup.svelte';
	import Modal from 'svelte-simple-modal';
	import { appState } from '$store/app';
</script>

<script lang='ts'>
	let settingsOpen = false;



	const modal = writable(null);


	const resetFirestore = async () => {
		const measuresCollection = collection(db, 'stakeholders');
		const snapshot = await getDocs(measuresCollection);
		try{
			let empty = [];
			const valuesSize = snapshot.docs[0].data().values.length;
			for (let i = 0; i < valuesSize; i++) empty.push(0);

			for (const stakeholderDoc of snapshot.docs) {
				// why's my ide giving me an error here stfu
				await updateDoc(stakeholderDoc.ref, {
					values: empty
				});
			}
			modal.set(Popup)
		}catch (error){
			modal.set(Popup)
		}
	};
</script>

<Card>
	<Modal show={$modal}>
	</Modal>
	{#if !settingsOpen}
		<div>
			<ButtonMain on:click={() => appState.set(1)}>Start</ButtonMain>
			<ButtonMain on:click={() => (settingsOpen = !settingsOpen)}>Instellingen</ButtonMain>
		</div>
	{/if}
	{#if settingsOpen}
		<div>
			<ButtonMain on:click={resetFirestore}>Reset de firestore</ButtonMain>
			<ButtonMain theme='red' on:click={() => (settingsOpen = !settingsOpen)}>Terug</ButtonMain>
		</div>
	{/if}
</Card>
