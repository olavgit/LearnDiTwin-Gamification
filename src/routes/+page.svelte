<script lang="ts" context="module">
	import gsap from 'gsap';
	import { onMount } from 'svelte';

	import { db } from '$lib/firebase';
	import { getDocs, collection, onSnapshot } from 'firebase/firestore';

	import StakeholderChooser from '$molecules/stakeholderChooser.svelte';
	import StakeholderInfoCard from '$molecules/stakeholderInfoCard.svelte';
	import StakeholderInputCard from '$molecules/stakeholderInputCard.svelte';
	import ResultCard from '$molecules/resultCard.svelte';

	import { appState } from '$store/app';
	import { stakeholderStore } from '$store/stakeholder';
</script>

<script lang="ts">
	const stakeholdersCollection = collection(db, 'stakeholders');
	let rootElement: HTMLDivElement;

	const animateGsap = (number: number) => {
		const xPercentValue = (-100 / rootElement.children.length) * number;

		gsap.to(rootElement, {
			xPercent: xPercentValue,
			duration: 1,
			ease: 'power2.inOut'
		});
	};

	const fetchFirestore = async () => {
		try {
			const snapshot = await getDocs(stakeholdersCollection);
			const stakeholdersData = snapshot.docs.map((doc) => ({
				id: doc.id,
				values: doc.data().values
			}));
			stakeholderStore.set(stakeholdersData);
		} catch (error) {
			console.error('Error fetching document: ', error);
		}
	};

	const subscribeToFirestore = () =>
		onSnapshot(
			stakeholdersCollection,
			(docSnapshot) => {
				const stakeholdersData = docSnapshot.docs.map((doc) => ({
					id: doc.id,
					values: doc.data().values
				}));
				stakeholderStore.set(stakeholdersData);
			},
			(err) => {
				console.log(`Encountered error: ${err}`);
			}
		);

	onMount(() => {
		fetchFirestore();
		subscribeToFirestore();
	});

	// every time appState changes, animate the rootElement
	$: rootElement && animateGsap($appState);
</script>

<div class="module-page flex" bind:this={rootElement}>
	<div class="h-screen flex justify-center items-center w-screen">
		<StakeholderChooser />
	</div>
	<div class="h-screen flex justify-center items-center w-screen">
		<StakeholderInfoCard />
	</div>
	<div class="h-screen flex justify-center items-center w-screen">
		<StakeholderInputCard />
	</div>
	<div class="h-screen flex justify-center items-center w-screen">
		<ResultCard />
	</div>
</div>

<style lang="postcss">
	.module-page {
		background-image: url('./src/lib/assets/images/cork.jpg');
		background-position: center;
		background-size: contain;
		background-repeat: repeat;
	}
</style>
