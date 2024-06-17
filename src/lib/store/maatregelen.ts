import { writable } from 'svelte/store';

export interface Maatregelen {
	id: string;
    naam: string;
	minimaal: number;
    maximaal: number;
    effectPerWeek: number;
    kostenPerUur: number;
    geholpenUurPerWeek: number;
    hulpduurInWeken: number;
    rondesPerJaar: number;
    kostenPerPersoonPerDrieMaanden: number;
}

export const maatregelenStore = writable<Maatregelen[]>([]);
