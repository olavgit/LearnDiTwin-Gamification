<script lang="ts" context="module">
	import gsap from 'gsap';
	import { Tooltip } from '@svelte-plugins/tooltips';

	import { maatregelenStore } from '$store/maatregelen';
	import { stakeholderStore } from '$store/stakeholder';
	import { resultsPerTeamOpen } from '$store/app';
</script>

<script lang="ts">
	import ButtonMain from '$atoms/buttons/ButtonMain.svelte';

	export let averages: number[] = [];

	const sentimentMarge = 1;

	const calculateSentiment = (stakeholderVals: number[]) => {
		const deviations = [];
		for (let i = 0; i < averages.length; i++) {
			const deviation = averages[i] - stakeholderVals[i];
			deviations.push(deviation);
		}
		const sumOfDeviations = deviations.reduce((partialSum, a) => partialSum + a, 0);
		const averageDeviation = sumOfDeviations / deviations.length;
		return averageDeviation;
	};

	function gsapIn(node: HTMLElement) {
		let tl = gsap.timeline().fromTo(
			node,
			{ yPercent: 200 },
			{
				yPercent: 0,
				duration: 0.48,
				ease: 'power1.inOut'
			}
		);

		return {
			duration: tl.totalDuration() * 1000,
			tick: (t: number) => {
				tl.progress(t);
			}
		};
	}

	function gsapOut(node: HTMLElement) {
		let tl = gsap.timeline().fromTo(
			node,
			{ yPercent: 0 },
			{
				yPercent: -200,
				duration: 0.48,
				ease: 'power2.inOut'
			}
		);

		return {
			duration: tl.totalDuration() * 1000,
			tick: (t: number) => {
				tl.progress(1 - t);
			}
		};
	}
</script>

<div class="p-14 bg-white shadow-lg items-start absolute flex flex-col" in:gsapIn out:gsapOut>
	<p class="font-bold text-xl mb-2">Resultaten per team</p>

	<div class="grid grid-cols-2 gap-4 mb-4">
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
	<ButtonMain theme="red" on:click={() => resultsPerTeamOpen.set(!$resultsPerTeamOpen)}
		>Sluit</ButtonMain
	>
</div>
