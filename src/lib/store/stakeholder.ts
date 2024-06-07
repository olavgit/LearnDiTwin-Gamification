import { writable } from 'svelte/store';

interface Stakeholder {
	id: string;
	values: number[];
}

export const stakeholderStore = writable<Stakeholder[]>([]);
export const activeStakeholder = writable<Stakeholder | null>(null);
