<script lang="ts" context="module">
	import ButtonMain from '$atoms/buttons/ButtonMain.svelte';

	import { appState } from '$store/app';
	import { stakeholderStore, activeStakeholder } from '$store/stakeholder';
</script>

<script lang="ts">
	const activeIndex = $stakeholderStore.indexOf($activeStakeholder!);

	const onInput = (event: Event, index: number) => {
		const target = event.target as HTMLInputElement;
		active.values[index] = target.valueAsNumber;
	};

	$: active = $stakeholderStore[activeIndex];
</script>

<div class="p-10 bg-yellow-100 shadow-lg flex flex-col">
	<div class="font-bold text-2xl mb-4">{active.name}</div>
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
				appState.set('splash');
			}}>Terug</ButtonMain
		>
		<ButtonMain
			on:click={() => {
				appState.set('result');
			}}>Klaar</ButtonMain
		>
	</div>
</div>
