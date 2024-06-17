<script lang="ts" context="module">
	import { db } from '$lib/firebase';
	import { collection, doc, getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
	import { onMount } from 'svelte';


	import ButtonMain from '$atoms/buttons/ButtonMain.svelte';

	import { appState } from '$store/app';
	import { maatregelenStore } from '$store/maatregelen';
	import type { Maatregelen } from '$store/maatregelen';
	import { stakeholderStore, activeStakeholder } from '$store/stakeholder';
</script>

<script lang="ts">
	onMount(async () => {
		const maatregelenCollection = collection(db, 'maatregelen');
		const maatregelenSnapshot = await getDocs(maatregelenCollection);

		maatregelenStore.set(maatregelenSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Maatregelen[]);
	});

	const calculateValue = (activeValue: number, maatregel: Maatregelen) => {
        return activeValue * maatregel.minimaal * maatregel.effectPerWeek * maatregel.rondesPerJaar;
    };

    const calculateCost = (activeValue: number, maatregel: Maatregelen) => {
        return calculateValue(activeValue, maatregel) * (maatregel.kostenPerPersoonPerDrieMaanden);
    };

	const calculateVrijwilligers = (activeValue: number, maatregel: Maatregelen) => {
		if (activeValue === 0) {
			return 0;
		} else {
			const value = Number(maatregel.minimaal) + (activeValue - 1) * (Number(maatregel.maximaal) - Number(maatregel.minimaal)) / 9;
			return Math.round(value * 100) / 100;
		}
	};

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

	$: totalValue = $maatregelenStore.reduce((sum, maatregel, i) => sum + calculateValue(active?.values?.[i] ?? 0, maatregel), 0);
	$: totalCost = $maatregelenStore.reduce((sum, maatregel, i) => sum + calculateCost(active?.values?.[i] ?? 0, maatregel), 0);
	$: totalVrijwilligers = $maatregelenStore.reduce((sum, maatregel, i) => sum + calculateVrijwilligers(active?.values?.[i] ?? 0, maatregel), 0);

</script>

{#if active}
	<div class="p-10 bg-yellow-100 shadow-lg flex flex-col">
		<div class="font-bold text-2xl mb-4">{active.id}</div>
		<table class="text-left">
			<thead>
				<tr>
					<th class="px-2">Naam</th>
					<th class="px-2">Schaal</th>
					<th class="px-2">Geholpen mensen</th>
					<th class="px-2">Kosten</th>
					<th class="px-2">Vrijwilligers</th>
				</tr>
			</thead>
			<tbody>
				{#each $maatregelenStore as maatregel, i}
				<tr>
					<td class="px-2">{maatregel.naam.charAt(0).toUpperCase() + maatregel.naam.slice(1)}</td>
					<td class="px-2">
						<input
							type="range"
							value={active.values[i]}
							min="0"
							max="10"
							class="slider accent-blue-500 align-middle appearance-none w-full cursor-pointer h-1 bg-red-500"
							on:input={(e) => onInput(e, i)}
						/>
					</td>
					<td class="px-2">{calculateValue(active.values[i], maatregel)}</td>
					<td class="px-2">{calculateCost(active.values[i], maatregel).toLocaleString('nl-NL', { style: 'currency', currency: 'EUR',  minimumFractionDigits: 0, maximumFractionDigits: 0 })}</td>
					<td class="px-2">{calculateVrijwilligers(active.values[i], maatregel)}</td>
				</tr>
				{/each}
				<tr class="font-bold border-t-2 border-black">
                    <td class="px-2 py-1">Totaal</td>
                    <td class="px-2 py-1"></td>
                    <td class="px-2 py-1">{totalValue}</td>
                    <td class="px-2 py-1">{totalCost.toLocaleString('nl-NL', { style: 'currency', currency: 'EUR',  minimumFractionDigits: 0, maximumFractionDigits: 0 })}</td>
                    <td class="px-2 py-1">{totalVrijwilligers}</td>
                </tr>
			</tbody>
		</table>

		<div class="flex gap-x-2">
			<ButtonMain
				theme="red"
				on:click={() => {
					appState.set(2);
				}}>Terug</ButtonMain
			>
			<ButtonMain
				on:click={() => {
					appState.set(4);
				}}>Klaar</ButtonMain
			>
		</div>
	</div>
{/if}
