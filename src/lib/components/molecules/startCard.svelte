<script lang='ts' context='module'>
	import ButtonMain from '$atoms/buttons/ButtonMain.svelte';
	import Card from '$atoms/Card.svelte';
	import { db } from '../../firebase';
	import { collection, getDocs, updateDoc } from 'firebase/firestore';
	
	import { appState } from '$store/app';
  </script>
	
  <script lang='ts'>
	let settingsOpen = false;
	
	const resetFirestore = async () => {
	  const measuresCollection = collection(db, 'stakeholders');
	  const snapshot = await getDocs(measuresCollection);
	
	  let empty = [];
	  const valuesSize = snapshot.docs[0].data().values.length;
	  for (let i = 0; i < valuesSize; i++) empty.push(0);
	
	  for (const stakeholderDoc of snapshot.docs) {
		await updateDoc(stakeholderDoc.ref, {
		  values: empty
		});
	  }
	  alert('Alle schalen staan weer op 0!');
	};
  </script>
	
  <style>
	Card {
	  background-color: transparent !important; 
	  box-shadow: none !important;
	  border: none !important; 
	}
	
	.logo-container {
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  height: 160px; 
	  margin-bottom: 10px; 
	}
	
	main {
	  border: none; 
	}
	
	.logo-image {
	  width: 200px; 
	  height: auto; 
	  border: none; 
	}
	
	img {
	  border: none; 
	}
	
	.text-center {
	  margin-bottom: 8px; 
	}
	
	.button-container {
	  margin-top: 20px;
	  margin-bottom: -16px; 
	}
  
	.welcome-text {
	  font-weight: bold;
	  margin-top: 20px; 
	}
  </style>
	
  <Card>
	<div class="logo-container">
	  <main>
		<img src="/bob_logo.png" alt="BOB-game Logo" class="logo-image" />
	  </main>
	</div>
	
	{#if !settingsOpen}
	  <div class="lg:max-w-[400px] text-center">
		<p class="text-center welcome-text">
		  Welkom bij de BOB-Game! <!-- Dikgedrukte welkomsttekst -->
		</p>
		<p class="text-center">
		  Hier zul je op basis van je eigen aangewezen rol meedenken over een probleem en samen met je medespelers tot een besluit komen over welke maatregelen genomen moeten worden.
		</p>
		<div class="button-container">
		  <ButtonMain on:click={() => appState.set(1)}>Start</ButtonMain>
		  <ButtonMain on:click={() => (settingsOpen = !settingsOpen)}>Instellingen</ButtonMain>
		</div>
	  </div>
	{/if}
	{#if settingsOpen}
	  <div class="button-container">
		<ButtonMain on:click={resetFirestore}>Reset Schalen</ButtonMain>
		<ButtonMain on:click={() => appState.set(5)}>Upload CSV</ButtonMain>
		<ButtonMain theme='red' on:click={() => (settingsOpen = !settingsOpen)}>Terug</ButtonMain>
	  </div>
	{/if}
  </Card>
  