<script lang="ts">
    let selectedFile: File | null = null;
    let fileInput: HTMLInputElement;
    let maatregelen: Array<Record<string, string>> = [];
    let budget: { maximaal: string } | null = null;

    function handleFileChange(e: Event) {
        const target = e.target as HTMLInputElement;
        const file = target.files?.[0];
        if (!file) {
            return;
        }

        const fileType = file.type;
        if (fileType !== 'text/csv') {
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

        reader.onload = function(e: ProgressEvent<FileReader>) {
            try {
                const csv = e.target?.result as string;
                const lines = csv.split('\n').filter(line => line.trim() !== '');
                if (lines.length < 2) {
                    alert('CSV bevat geen data.');
                    return;
                }

                const headers = lines[0].split(';');
                const naamIndex = headers.indexOf('naam');
                const maximaalIndex = headers.indexOf('maximaal');

                if (naamIndex === -1 || maximaalIndex === -1) {
                    alert('CSV file does not contain required headers.');
                    return;
                }

                maatregelen = [];
                budget = null;

                for (let i = 1; i < lines.length; i++) {
                    const line = lines[i].split(';');

                    if (!line[naamIndex]) continue;

                    if (line[naamIndex].includes('budget')) {
                        budget = { maximaal: line[maximaalIndex] };
                    } else {
                        const maatregel: Record<string, string> = {};
                        for (let j = 0; j < headers.length; j++) {
                            maatregel[headers[j]] = line[j];
                        }
                        maatregelen.push(maatregel);
                    }
                }
            } catch (error) {
                alert('An error occurred while processing the file.');
                console.error(error);
            }
        };

        reader.onerror = function() {
            alert('An error occurred while reading the file.');
        };

        reader.onloadend = function() {
            storeFile();
        };

        if (selectedFile) {
            reader.readAsText(selectedFile);
        }
    }

    function storeFile(){
        localStorage.setItem('maatregelen', JSON.stringify(maatregelen));
        localStorage.setItem('budget', JSON.stringify(budget));
    }
</script>

<main>
    <label for="file-upload" class="upload-label">Selecteer een bestand</label>
    <input id="file-upload" class="file-upload" type="file" accept="text/csv" bind:this={fileInput} on:change={handleFileChange} />
    {#if selectedFile}
        <p>Geselecteerd Bestand:</p>
        <pre>{selectedFile.name}</pre>
    {/if}
    <button class="upload-button" on:click={handleImport}>Upload</button>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        font-family: 'Hk Grotesk', sans-serif;
    }

    input[type='file'] {
        display: none;
    }

    .upload-button, .upload-label {
        padding: 0.5rem 1rem;
        margin: 0.5rem;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
        color: #fff;
        background-color: #d70a12;
        cursor: pointer;
    }
</style>