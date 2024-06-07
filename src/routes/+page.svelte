<script lang="ts" context="module">
	import ResultCard from '$molecules/resultCard.svelte';
	import UserCard from '$molecules/userCard.svelte';
	import UserChooser from '$molecules/userChooser.svelte';
	import { appState } from '$store/app';
</script>

<div class="h-screen w-full flex justify-center items-center">
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
