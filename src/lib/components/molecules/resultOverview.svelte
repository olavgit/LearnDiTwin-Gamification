<script lang="ts" context="module">
	import gsap from 'gsap';
	import { Tooltip } from '@svelte-plugins/tooltips';

	import { maatregelenStore } from '$store/maatregelen';
	import { stakeholderStore } from '$store/stakeholder';
	import { resultsPerTeamOpen } from '$store/app';
</script>

<script lang="ts">
	import ButtonMain from '$atoms/buttons/ButtonMain.svelte';
	import { TEXT } from '$assets/text';

	export let averages: number[] = [];

	const calculateSentiment = (stakeholderVals: number[]) => {
        const deviations = [];
        for (let i = 0; i < averages.length; i++) {
            const deviation = Math.abs(averages[i] - stakeholderVals[i]);
            deviations.push(deviation);
        }
        const sumOfDeviations = deviations.reduce((partialSum, a) => partialSum + a, 0);
        const averageDeviation = sumOfDeviations / (deviations.length);

        const maxDeviation = 10;
        let score = 10 - (averageDeviation / maxDeviation * 9);
        score = Math.max(1, Math.min(score, 10));

        return score;
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
	<p class="font-bold text-xl">{TEXT.resultaat_per_team_titel}</p>
	<p class="mb-6">{TEXT.resultaat_per_team_beschrijving}</p>

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
				<p 	
					class:bg-red-300={calculateSentiment(stakeholder.values) < 8}
					class:bg-green-300={calculateSentiment(stakeholder.values) >= 8}>
						<Tooltip
							content="Het sentiment geeft aan hoe een vertegenwoordiger zich voelt over de gemaakte keuzes. "
							action="click"><u>Sentiment:</u></Tooltip>
						{calculateSentiment(stakeholder.values).toFixed(2)}
				</p>
			</div>
		{/each}
	</div>
	<ButtonMain theme="red" on:click={() => resultsPerTeamOpen.set(!$resultsPerTeamOpen)}
		>Sluit</ButtonMain
	>
</div>
