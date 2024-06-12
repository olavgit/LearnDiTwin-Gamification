<script lang="ts" context="module">
	import UserCard from '$molecules/userCard.svelte';
	import { activeStakeholder } from '$store/stakeholder';
	import Card from '$molecules/Card.svelte';
	import ButtonMain from '$atoms/buttons/ButtonMain.svelte';
	import { appState } from '$store/app';
</script>

<script lang="ts">
	let activeSlide = 0;
</script>

{#if $activeStakeholder && activeSlide === 0}
	<Card>
		<h2 class="font-bold text-2xl">{$activeStakeholder.id}</h2>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>

		<div class="flex gap-x-2">
			<ButtonMain
				theme="red"
				on:click={() => {
					appState.set('splash');
				}}>Terug</ButtonMain
			>
			<ButtonMain
				on:click={() => {
					activeSlide = 1;
				}}>Klaar</ButtonMain
			>
		</div>
	</Card>
{/if}
{#if activeSlide === 1}
	<UserCard />
{/if}
