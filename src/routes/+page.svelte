<script lang="ts" context="module">
	import { db } from '$lib/firebase';
	import ResultCard from '$molecules/resultCard.svelte';
	import UserCard from '$molecules/userCard.svelte';
	import UserChooser from '$molecules/userChooser.svelte';
	import { stakeholderStore } from '$store/stakeholder';

	import { appState } from '$store/app';
	import { getDocs, collection } from 'firebase/firestore';
	import { onMount } from 'svelte';
</script>

<script lang="ts">
	async function fetchFirestore() {
		try {
			const stakeholdersCollection = collection(db, 'stakeholders');
			const snapshot = await getDocs(stakeholdersCollection);
			const stakeholdersData = snapshot.docs.map((doc) => ({
				id: doc.id,
				values: doc.data().values
			}));
			stakeholderStore.set(stakeholdersData);
		} catch (error) {
			console.error('Error fetching document: ', error);
		}
	}

	onMount(() => {
		fetchFirestore();
	});
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
