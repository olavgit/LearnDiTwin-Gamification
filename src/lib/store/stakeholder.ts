import { writable } from 'svelte/store';

interface Stakeholder {
	name: string;
	values: number[];
}

const stakeholders: Stakeholder[] = [
	{ name: 'Gemeente', values: [0, 0, 0, 0] },
	{ name: 'Vrijwilligers', values: [0, 0, 0, 0] },
	{ name: 'Provincie', values: [0, 0, 0, 0] },
	{ name: 'Studenten', values: [0, 0, 0, 0] }
];

export const stakeholderStore = writable<Stakeholder[]>(stakeholders);
