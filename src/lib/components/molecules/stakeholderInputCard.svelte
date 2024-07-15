<script lang="ts" context="module">
	import { db } from '$lib/firebase';
	import { collection, doc, getDoc, onSnapshot, setDoc, updateDoc } from 'firebase/firestore';
	import { onMount } from 'svelte';

	import ButtonMain from '$atoms/buttons/ButtonMain.svelte';
	import Card from '$atoms/Card.svelte';

	import { appState } from '$store/app';
	import {
		maatregelenStore,
		calculateCost,
		calculateValue,
		calculateVrijwilligers
	} from '$store/maatregelen';
	import type { Maatregelen } from '$store/maatregelen';
	import { doelenStore } from '$store/doelen';
	import { stakeholderStore, activeStakeholder } from '$store/stakeholder';
	import { TEXT } from '$assets/text';
</script>

<script lang="ts">
	onMount(() => {
		const maatregelenCollection = collection(db, 'maatregelen');
		const doelenCollection = collection(db, 'doelen');

		onSnapshot(maatregelenCollection, (snapshot) => {
			maatregelenStore.set(
				snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Maatregelen[]
			);
		});

		onSnapshot(doelenCollection, (snapshot) => {
			doelenStore.set(
				snapshot.docs.map((doc) => ({
					doel: Number(doc.data().doel),
					budget: Number(doc.data().budget),
					...doc.data()
				}))
			);
		});
	});

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

	$: totalValue = $maatregelenStore.reduce(
		(sum, maatregel, i) => sum + calculateValue(active?.values?.[i] ?? 0, maatregel),
		0
	);
	$: totalCost = $maatregelenStore.reduce(
		(sum, maatregel, i) => sum + calculateCost(active?.values?.[i] ?? 0, maatregel),
		0
	);
	$: totalVrijwilligers = $maatregelenStore.reduce(
		(sum, maatregel, i) => sum + calculateVrijwilligers(active?.values?.[i] ?? 0, maatregel),
		0
	);
	$: percentageDoel = (totalValue / $doelenStore[0]?.doel) * 100;
	$: percentageBudget = (totalCost / $doelenStore[0]?.budget) * 100;
</script>

{#if active}
	<Card class="lg:w-4/5">
		<div class="font-bold text-2xl">Team {active.id}</div>
		<p class="mb-6">
			{TEXT.stakeholder_beschrijving}
		</p>
		<table class="text-left mb-2">
			<thead>
				<tr>
					<th class="pr-4">Maatregel</th>
					<th class="pr-4">Schaal</th>
					<th class="pr-4">Geholpen mensen</th>
					<th class="pr-4">Kosten</th>
					<th>Vrijwilligers</th>
				</tr>
			</thead>
			<tbody>
				{#each $maatregelenStore as maatregel, i}
					<tr>
						<td class="pr-4">{maatregel.naam.charAt(0).toUpperCase() + maatregel.naam.slice(1)}</td>
						<td class="pr-4">
							<input
								type="range"
								value={active.values[i]}
								min="0"
								max="10"
								class="slider accent-blue-500 align-middle appearance-none w-full cursor-pointer h-1 bg-red-500"
								on:input={(e) => onInput(e, i)}
							/>
						</td>
						<td class="pr-4">{calculateValue(active.values[i], maatregel)}</td>
						<td class="pr-4"
							>{calculateCost(active.values[i], maatregel).toLocaleString('nl-NL', {
								style: 'currency',
								currency: 'EUR',
								minimumFractionDigits: 0,
								maximumFractionDigits: 0
							})}</td
						>
						<td>{calculateVrijwilligers(active.values[i], maatregel)}</td>
					</tr>
				{/each}
				<tr class="font-bold border-t-2 border-black">
					<td class="pr-4">Totaal</td>
					<td class="pr-4"></td>
					<td class="pr-4">{totalValue}</td>
					<td class="pr-4"
						>{totalCost.toLocaleString('nl-NL', {
							style: 'currency',
							currency: 'EUR',
							minimumFractionDigits: 0,
							maximumFractionDigits: 0
						})}</td
					>
					<td>{totalVrijwilligers}</td>
				</tr>
				<tr>
					<td class="pr-4"></td>
					<td class="pr-4"></td>
					<td
						class="pr-4"
						class:bg-red-300={percentageDoel < 100}
						class:bg-green-300={percentageDoel >= 100}>{percentageDoel.toFixed(0)}% van het doel</td
					>
					<td
						class="pr-4"
						class:bg-red-300={percentageBudget > 100}
						class:bg-green-300={percentageBudget <= 100}
						>{percentageBudget.toFixed(0)}% van het budget</td
					>
					<td></td>
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
	</Card>
{/if}
