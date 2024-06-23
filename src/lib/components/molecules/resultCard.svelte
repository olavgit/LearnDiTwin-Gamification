<script lang="ts" context="module">
    import ButtonMain from '$atoms/buttons/ButtonMain.svelte';
    import Card from '$atoms/Card.svelte';
    import { Tooltip, tooltip } from '@svelte-plugins/tooltips';

    import {maatregelenStore, calculateCost, calculateValue, calculateVrijwilligers} from '$store/maatregelen';
    import {appState} from '$store/app';
    import {stakeholderStore} from '$store/stakeholder';
</script>

<script lang="ts">
    const sentimentMarge = 1;
    let averages: number[] = [];
    let totalValue = 0;
    let totalCost = 0;
    let totalVrijwilligers = 0;
    let stakeholders = [];

    let autoHideTooltip = true;

    setTimeout(() => {
        autoHideTooltip = false;
    }, 5000);

    const calculateAverages = () => {
        let sumArray: number[] = [];
        let numStakeholders = $stakeholderStore.length;

        $stakeholderStore.forEach((stakeholder) => {
            stakeholder.values.forEach((value, index) => {
                if (!sumArray[index]) {
                    sumArray[index] = 0;
                }
                sumArray[index] += value;
            });
        });

        averages = sumArray.map((sum) => sum / numStakeholders);
    };

    const calculateTotals = () => {
        totalValue = $maatregelenStore.reduce((sum, maatregel, i) => sum + calculateValue(averages[i] ?? 0, maatregel), 0);
        totalCost = $maatregelenStore.reduce((sum, maatregel, i) => sum + calculateCost(averages[i] ?? 0, maatregel), 0);
        totalVrijwilligers = $maatregelenStore.reduce((sum, maatregel, i) => sum + calculateVrijwilligers(averages[i] ?? 0, maatregel), 0);
    };

    const getStakeholders = () => {
        stakeholders = [];
        $stakeholderStore.forEach((stakeholder) => {
            stakeholders.push(stakeholder)
        });

    }

    const calculateSentiment = (stakeholder) => {
        const deviations = [];
        for (let i = 0; i < averages.length; i++) {
            const deviation =  averages[i] - stakeholder.values[i]
            deviations.push(deviation)
        }
        const sumOfDeviations = deviations.reduce((partialSum, a) => partialSum + a, 0);
        const averageDeviation = sumOfDeviations / deviations.length;
        return averageDeviation;
    }

    $: if ($maatregelenStore.length && $stakeholderStore.length) {
        calculateAverages();
        calculateTotals();
        getStakeholders();
    }


</script>
<Card>
    <div class="flex flex-row m">
        <div class="border-2 rounded p-2">
            <div class="font-bold text-2xl mb-4">Resultaat</div>
            {#each averages as average, index}
                <div>
                    <span>{$maatregelenStore[index].naam.charAt(0).toUpperCase() + $maatregelenStore[index].naam.slice(1)}
                        heeft een gemiddelde schaal van {average.toFixed(2)}</span>
                </div>
            {/each}
            <div class="py-2">
                <p> Geholpen mensen per jaar: {totalValue}</p>
                <p>Kosten per jaar: {totalCost.toLocaleString('nl-NL', {
                    style: 'currency',
                    currency: 'EUR',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                })}</p>
                <p>Aantal vrijwilligers per jaar: {totalVrijwilligers}</p>
            </div>
            <div>
                <ButtonMain
                        theme="red"
                        on:click={() => {
            appState.set(0);
        }}>Terug
                </ButtonMain>
            </div>
        </div>
        <div class="grid grid-cols-2 justify-between">
            {#each stakeholders as stakeholder}
                <div class="border-2 rounded">
                    <p class="border-y-2 px-2">
                        Team <b>{stakeholder.id}</b> heeft het volgende gestemd:
                    </p>
                    {#if $maatregelenStore.length}
                        {#each stakeholder.values as value, index}
                            <p>{$maatregelenStore[index].naam.charAt(0).toUpperCase() + $maatregelenStore[index].naam.slice(1)}
                                : {value}</p>
                        {/each}
                    {/if}

                    <Tooltip
                            content="Het sentiment geeft aan hoe een vertegenwoordiger zich voelt over de gemaakte keuzes."
                            action="click"
                    ><u>Sentiment:</u></Tooltip
                    > {#if calculateSentiment(stakeholder)> sentimentMarge || calculateSentiment(stakeholder) < -sentimentMarge}
                    :(
                    {:else if calculateSentiment(stakeholder) === sentimentMarge || calculateSentiment(stakeholder) === -sentimentMarge}
                    :|
                    {:else}
                    :)
                    {/if}
                </div>
            {/each}
        </div>
        <div class="example">

        </div>
    </div>
</Card>


