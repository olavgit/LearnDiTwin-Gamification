<script lang="ts" context="module">
	import { stakeholderStore } from '$store/stakeholder';
</script>

<script lang="ts">
	export let name: string;
	export let values: number[];
	export let stakeholderIndex: number;

	const onInput = (event: Event, valueIndex: number) => {
		const target = event.target as HTMLInputElement;
		$stakeholderStore[stakeholderIndex].values[valueIndex] = target.valueAsNumber;
	};
</script>

<div class="p-10 bg-yellow-100 shadow-lg flex flex-col">
	<div class="font-bold text-2xl mb-4">{name}, {stakeholderIndex}</div>
	<table class="text-left">
		<thead>
			<tr>
				<th>Schaal</th>
				<th>Geholpen mensen</th>
				<th>Kosten</th>
			</tr>
		</thead>
		<tbody>
			{#each values as v, valueIndex}
				<tr>
					<td
						><input
							type="range"
							value={v}
							min="0"
							max="10"
							class="appearance-none w-full cursor-pointer accent-green-500 bg-black h-0.5"
							on:input={(e) => onInput(e, valueIndex)}
						/></td
					>
					<td>{v * 1000}</td>
					<td>€{v * 50}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
