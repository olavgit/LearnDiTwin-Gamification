<script lang="ts" context="module">
	import ResultCard from '$molecules/resultCard.svelte';
	import UserCard from '$molecules/userCard.svelte';
	import { stakeholderStore } from '$store/stakeholder';
</script>

<div class="grid grid-cols-2 gap-4">
	{#each $stakeholderStore as s, stakeholderIndex}
		<UserCard {...s} {stakeholderIndex} />
	{/each}
	<ResultCard />
</div>
