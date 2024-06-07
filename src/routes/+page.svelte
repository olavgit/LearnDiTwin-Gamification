<script lang="ts" context="module">
	import ResultCard from '$molecules/resultCard.svelte';
	import UserCard from '$molecules/userCard.svelte';
	import UserChooser from '$molecules/userChooser.svelte';
	import { appState } from '$store/app';
</script>

<div class="grid grid-cols-2 gap-4">
	{#if $appState === 'splash'}
		<UserChooser />
	{/if}
	{#if $appState === 'selected'}
		<UserCard />
	{/if}
	{#if $appState === 'result'}
		<ResultCard />
	{/if}
</div>
