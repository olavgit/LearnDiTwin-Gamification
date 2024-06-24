<script lang="ts">
	import ButtonMain from '$atoms/buttons/ButtonMain.svelte';
	import Card from '$atoms/Card.svelte';
	import { appState } from '$store/app';
	import { doc, collection, getDocs, writeBatch } from 'firebase/firestore';
	import { db } from '$lib/firebase';

	let selectedFile: File | null = null;
	let fileInput: HTMLInputElement;
	let maatregelen: Array<Record<string, string>> = [];
	let budget: { maximaal: string } | null = null;
	let doel: { maximaal: string } | null = null;

	function handleFileChange(e: Event) {
		const target = e.target as HTMLInputElement;
		const file = target.files?.[0];
		if (!file) {
			return;
		}

		const fileExtension = file.name.split('.').pop()?.toLowerCase();
		const fileType = file.type;
		const validMimeTypes = ['text/csv', 'application/vnd.ms-excel'];

		if (!validMimeTypes.includes(fileType) || fileExtension !== 'csv') {
			alert('Ongeldig of niet-ondersteund bestandstype. Upload een CSV-bestand.');
			target.value = '';
			return;
		}

		selectedFile = file;
	}

	function handleImport() {
		if (!selectedFile) {
			alert('Selecteer een bestand.');
			return;
		}
		readFile();
		alert('Upload successvol.');
		fileInput.value = '';
		selectedFile = null;
	}

	function readFile() {
		const reader = new FileReader();

		reader.onload = function (e: ProgressEvent<FileReader>) {
			try {
				const csv = e.target?.result as string;
				const lines = csv.split('\r').filter((line) => line.trim() !== '');
				if (lines.length < 2) {
					alert('CSV bevat geen data.');
					return;
				}

				const headers = lines[0].split(';');
				const naamIndex = headers.indexOf('naam');
				const maximaalIndex = headers.indexOf('maximaal');

				if (naamIndex === -1 || maximaalIndex === -1) {
					alert('CSV-bestand bevat niet de vereiste headers.');
					return;
				}

				maatregelen = [];
				budget = null;
				doel = null;

				for (let i = 1; i < lines.length; i++) {
					const line = lines[i].split(';').map((field) => field.trim().replace('/r', ''));

					if (!line[naamIndex]) continue;

					if (line[naamIndex].includes('budget')) {
						budget = { maximaal: line[maximaalIndex] };
					} else if (line[naamIndex].includes('doel')) {
						doel = { maximaal: line[maximaalIndex] };
					} else {
						const maatregel: Record<string, string> = {};
						for (let j = 0; j < headers.length; j++) {
							maatregel[headers[j]] = line[j];
						}
						maatregelen.push(maatregel);
					}
				}
			} catch (error) {
				alert('Er is een fout opgetreden tijdens het verwerken van het bestand.');
				console.error(error);
			}
		};

		reader.onerror = function () {
			alert('Er is een fout opgetreden tijdens het lezen van het bestand.');
		};

		reader.onloadend = function () {
			storeFile();
		};

		if (selectedFile) {
			reader.readAsText(selectedFile);
		}
	}

	const storeFile = async () => {
		try {
			const maatregelenIds = maatregelen.map((item) => item.id);
			const maatregelQuerySnapshot = await getDocs(collection(db, 'maatregelen'));

			const batch = writeBatch(db);

			maatregelQuerySnapshot.docs.forEach((doc) => {
				if (!maatregelenIds.includes(doc.id)) {
					batch.delete(doc.ref);
				}
			});

			maatregelen.forEach((item) => {
				const docRef = doc(db, 'maatregelen', item.id);
				batch.set(docRef, item, { merge: true });
			});

			const doelenRef = doc(db, 'doelen', 'taalgroeiers');

			if (budget) {
				batch.set(doelenRef, { budget: budget.maximaal }, { merge: true });
			}

			if (doel) {
				batch.set(doelenRef, { doel: doel.maximaal }, { merge: true });
			}

			await batch.commit();
			console.log('Firestore updated successfully.');
		} catch (error) {
			alert('Er is een fout opgetreden bij het opslaan van het bestand in Firestore.');
			console.error(error);
		}
	};
</script>

<Card>
	<input
		id="file-upload"
		class="hidden"
		type="file"
		accept="text/csv"
		bind:this={fileInput}
		on:change={handleFileChange}
	/>
	<label for="file-upload" class="my-2 bg-blue-500 text-white px-5 rounded-md py-3 cursor-pointer"
		>Selecteer een bestand</label
	>
	{#if selectedFile}
		<p class="font-bold text-center">Geselecteerd Bestand:</p>
		<pre class="text-center">{selectedFile.name}</pre>
	{/if}
	<ButtonMain class="my-2" on:click={handleImport}>Upload</ButtonMain>
	<ButtonMain theme="red" class="my-2" on:click={() => appState.set(0)}>Terug</ButtonMain>
</Card>
