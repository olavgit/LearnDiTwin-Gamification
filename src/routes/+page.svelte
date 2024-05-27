<script lang="ts" context="module">
	import { userStore } from '$lib/store/input';
	import { get, derived } from 'svelte/store';
</script>

<script lang="ts">
	let users = get(userStore);

	function handleInputChange(userIndex: number, fieldIndex: number, value: string) {
		userStore.update((users) => {
			const newValue = parseInt(value, 10) || 0; // Convert the input to a number or 0 if NaN
			users[userIndex].values[fieldIndex] = newValue;
			return users;
		});

		console.log(
			users.map((user) => `Name: ${user.name}, Values: ${user.values.join(', ')}`).join('\n')
		);
	}

	const averages = derived(userStore, ($userStore) => {
		const numFields = $userStore[0]?.values.length || 0;
		const sums = Array(numFields).fill(0);
		const counts = Array(numFields).fill(0);

		$userStore.forEach((user) => {
			user.values.forEach((value, index) => {
				sums[index] += value;
				counts[index] += 1;
			});
		});

		return sums.map((sum, index) => sum / counts[index]);
	});
</script>

<div class="grid grid-cols-2 gap-4">
	{#each $userStore as user, userIndex}
		<div class="flex flex-col bg-green-300">
			<div class="font-bold text-2xl mb-4">{user.name}</div>

			{#each user.values as value, fieldIndex}
				<input
					type="number"
					class="input-field"
					bind:value
					on:input={(event) => handleInputChange(userIndex, fieldIndex, event.target.value)}
				/>
			{/each}
		</div>
	{/each}
	<div class="col-span-2 bg-blue-200">
		<div class="font-bold text-2xl mb-4">Uitkomst</div>
		{#each $averages as average, index}
			<div>Field {index + 1}: {average.toFixed(2)}</div>
		{/each}
	</div>
</div>
