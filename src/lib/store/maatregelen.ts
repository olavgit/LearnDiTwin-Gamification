import { writable } from 'svelte/store';

interface Maatregelen {
	id: string;
    naam: string;
	minimaal: number;
    maximaal: number;
    effectPerWeek: number;
    kostenPerUur: number;
    geholpenUurPerWeek: number;
    hulpduurInWeken: number;
    rondesPerJaar: number;
    kostenPerPersoonPer3Maanden: number;
}

export const maatregelenStore = writable<Maatregelen[]>([]);
