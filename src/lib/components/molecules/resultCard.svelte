<script lang="ts" context="module">
	import ButtonMain from '$atoms/buttons/ButtonMain.svelte';
	import Card from '$atoms/Card.svelte';
	import ResultOverview from './resultOverview.svelte';

	import {
		maatregelenStore,
		calculateCost,
		calculateValue,
		calculateVrijwilligers
	} from '$store/maatregelen';
	import { appState, resultsPerTeamOpen } from '$store/app';
	import { stakeholderStore } from '$store/stakeholder';
</script>

<script lang="ts">
	let averages: number[] = [];
	let totalValue = 0;
	let totalCost = 0;
	let totalVrijwilligers = 0;
	let stakeholders = [];

	const calculateAverages = () => {
		let sumArray: number[] = [];
		let numStakeholders = $stakeholderStore.length;

		$stakeholderStore.forEach((stakeholder) => {
			stakeholder.values.forEach((value, index) => {
				if (!sumArray[index]) {
					sumArray[index] = 0;
				}
				sumArray[index] += value;
			});
		});

		averages = sumArray.map((sum) => sum / numStakeholders);
	};

	const calculateTotals = () => {
		totalValue = $maatregelenStore.reduce(
			(sum, maatregel, i) => sum + calculateValue(averages[i] ?? 0, maatregel),
			0
		);
		totalCost = $maatregelenStore.reduce(
			(sum, maatregel, i) => sum + calculateCost(averages[i] ?? 0, maatregel),
			0
		);
		totalVrijwilligers = $maatregelenStore.reduce(
			(sum, maatregel, i) => sum + calculateVrijwilligers(averages[i] ?? 0, maatregel),
			0
		);
	};

	const getStakeholders = () => {
		stakeholders = [];
		$stakeholderStore.forEach((stakeholder) => {
			stakeholders.push(stakeholder);
		});
	};

	$: if ($maatregelenStore.length && $stakeholderStore.length) {
		calculateAverages();
		calculateTotals();
		getStakeholders();
	}
</script>

<Card class="items-start">
	<div class="font-bold text-2xl mb-4">Resultaat</div>
	<table class="mb-4">
		<tr>
			<td class="font-bold pr-4">Maatregel</td>

			<td class="font-bold">Schaal</td>
		</tr>
		{#each averages as average, i}
			<tr>
				<td class="pr-4">
					Gemiddelde inzet {$maatregelenStore[i].naam}
				</td>

				<td>{average.toFixed(2)}</td>
			</tr>
		{/each}
		<tr>
			<td class="font-bold">Geholpen mensen per jaar</td>
			<td>{totalValue}</td>
		</tr>
		<tr>
			<td class="font-bold pr-4">Kosten per jaar</td>

			<td>
				{totalCost.toLocaleString('nl-NL', {
					style: 'currency',
					currency: 'EUR',
					minimumFractionDigits: 0,
					maximumFractionDigits: 0
				})}
			</td>
		</tr>
		<tr>
			<td class="font-bold pr-4">Aantal vrijwilligers per jaar</td>
			<td>{totalVrijwilligers}</td>
		</tr>
	</table>
	<div class="flex gap-x-2 justify-center">
		<ButtonMain
			theme="red"
			on:click={() => {
				appState.set(3);
			}}
			>Terug
		</ButtonMain>
		<ButtonMain on:click={() => resultsPerTeamOpen.set(!$resultsPerTeamOpen)}
			>Resultaten per team</ButtonMain
		>
	</div>
</Card>
{#if $resultsPerTeamOpen}
	<ResultOverview {averages} />
{/if}
