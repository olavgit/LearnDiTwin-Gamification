<script lang="ts" context="module">
	import { Tooltip } from '@svelte-plugins/tooltips';

	import Card from '$atoms/Card.svelte';

	import { maatregelenStore } from '$store/maatregelen';
	import { stakeholderStore } from '$store/stakeholder';
</script>

<script lang="ts">
	export let averages: number[] = [];

	const sentimentMarge = 1;

	const calculateSentiment = (stakeholderVals: number[]) => {
		console.log(stakeholderVals);
		const deviations = [];
		for (let i = 0; i < averages.length; i++) {
			const deviation = averages[i] - stakeholderVals[i];
			deviations.push(deviation);
		}
		const sumOfDeviations = deviations.reduce((partialSum, a) => partialSum + a, 0);
		const averageDeviation = sumOfDeviations / deviations.length;
		console.log(averageDeviation);
		console.log(deviations);
		return averageDeviation;
	};
</script>

<Card>
	<p class="font-bold text-xl mb-2">Resultaten per team</p>
	<div class="grid grid-cols-2 gap-4">
		{#each $stakeholderStore as stakeholder}
			<div class="bg-yellow-50">
				<p class="font-bold">
					{stakeholder.id}
				</p>
				{#each stakeholder.values as value, index}
					<p class="capitalize">
						{$maatregelenStore[index].naam}: {value}
					</p>
				{/each}

				<Tooltip
					content="Het sentiment geeft aan hoe een vertegenwoordiger zich voelt over de gemaakte keuzes."
					action="click"><u>Sentiment:</u></Tooltip
				>
				{#if calculateSentiment(stakeholder.values) > sentimentMarge || calculateSentiment(stakeholder.values) < -sentimentMarge}
					:(
				{:else if calculateSentiment(stakeholder.values) === sentimentMarge || calculateSentiment(stakeholder.values) === -sentimentMarge}
					:|
				{:else}
					:)
				{/if}
			</div>
		{/each}
	</div>
</Card>
