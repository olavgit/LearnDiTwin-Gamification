<script lang="ts" context="module">
	import { stakeholderStore } from '$store/stakeholder';
	import { collection, doc, runTransaction, addDoc } from "firebase/firestore";
	import {db} from "/src/firebase";
</script>


<script lang="ts">
	export let name: string;
	export let values: number[];
	export let stakeholderIndex: number;

	const onInput = (event: Event, valueIndex: number) => {
		const target = event.target as HTMLInputElement;
		$stakeholderStore[stakeholderIndex].values[valueIndex] = target.valueAsNumber;
	};

	async function onUserSubmit() {
		console.log("aaaaaaaaaaaaaaaaaaaaaaa")
		try {
			const docRef = await addDoc(collection(db, "inputs"), {
				stakeholderIndex: stakeholderIndex,
				values: values,
				name: name
			});
			console.log("Document written with ID: ", docRef.id);
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	}
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
							class="slider align-middle appearance-none w-full cursor-pointer h-0.5"
							on:input={(e) => onInput(e, valueIndex)}
						/></td
					>
					<td>{v * 1000}</td>
					<td>€{v * 50}</td>
				</tr>
			{/each}
		</tbody>
	</table>
	<button on:click={onUserSubmit}>Indienen</button>
</div>

<style lang="postcss">
	.slider {
		background: url('../line.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}

	.slider::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 16px;
		height: 16px;
		border: 0;
		background: url('../circle.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}

	.slider::-moz-range-thumb {
		width: 16px;
		height: 16px;
		border: 0;
		background: url('../circle.png');
	}
	button {
		background-color: #d70a12;
		width: fit-content;
		padding: 5px;
		color: white;
	}
</style>
