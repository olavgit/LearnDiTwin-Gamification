<script lang="ts" context="module">
	import ButtonMain from '$atoms/buttons/ButtonMain.svelte';

	import { appState } from '$store/app';
	import { stakeholderStore } from '$store/stakeholder';
</script>

<script lang="ts">
	let averages: number[] = [];

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

	$: $stakeholderStore && calculateAverages();
</script>

<div class="p-10 bg-blue-100 shadow-lg flex flex-col">
	<div class="font-bold text-2xl mb-4">Resultaat</div>
	{#each averages as average, index}
		<div>
			<span>Maatregel {index + 1} heeft een gemiddelde schaal van</span>
			{average}
		</div>
	{/each}
	<div>
		<ButtonMain
			theme="red"
			on:click={() => {
				appState.set(0);
			}}>Terug</ButtonMain
		>
	</div>
</div>
