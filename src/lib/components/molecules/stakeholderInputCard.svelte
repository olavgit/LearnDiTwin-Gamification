<script lang="ts" context="module">
	import { db } from '$lib/firebase';
	import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

	import ButtonMain from '$atoms/buttons/ButtonMain.svelte';

	import { appState } from '$store/app';
	import { stakeholderStore, activeStakeholder } from '$store/stakeholder';
</script>

<script lang="ts">
	const onInput = (event: Event, index: number) => {
		const target = event.target as HTMLInputElement;
		active!.values[index] = target.valueAsNumber;
		updateFirestore();
	};

	const updateFirestore = async () => {
		try {
			const stakeholderId = active!.id;
			const stakeholderRef = doc(db, 'stakeholders', stakeholderId);
			const docSnapshot = await getDoc(stakeholderRef);

			if (docSnapshot.exists()) {
				await updateDoc(stakeholderRef, {
					values: active!.values
				});
			} else {
				await setDoc(stakeholderRef, {
					values: active!.values
				});
			}
			console.log('Document successfully updated!');
		} catch (error) {
			console.error('Error updating document: ', error);
		}
	};

	$: active = $stakeholderStore.find((stakeholder) => stakeholder.id === $activeStakeholder?.id);
</script>

{#if active}
	<div class="p-10 bg-yellow-100 shadow-lg flex flex-col">
		<div class="font-bold text-2xl mb-4">{active.id}</div>
		<table class="text-left">
			<thead>
				<tr>
					<th>Schaal</th>
					<th>Geholpen mensen</th>
					<th>Kosten</th>
				</tr>
			</thead>
			<tbody>
				{#each active.values as v, i}
					<tr>
						<td
							><input
								type="range"
								value={v}
								min="0"
								max="10"
								class="slider accent-blue-500 align-middle appearance-none w-full cursor-pointer h-1 bg-red-500"
								on:input={(e) => onInput(e, i)}
							/></td
						>
						<td>{v * 1000}</td>
						<td>€{v * 50}</td>
					</tr>
				{/each}
			</tbody>
		</table>

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
				}}>Klaar</ButtonMain
			>
		</div>
	</div>
{/if}
