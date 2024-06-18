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

export function calculateValue(activeValue: number, maatregel: Maatregelen) {
    return activeValue * maatregel.minimaal * maatregel.effectPerWeek * maatregel.rondesPerJaar;
};

export function calculateCost (activeValue: number, maatregel: Maatregelen)  {
    return calculateValue(activeValue, maatregel) * (maatregel.kostenPerPersoonPerDrieMaanden);
};

export function calculateVrijwilligers (activeValue: number, maatregel: Maatregelen) {
    if (activeValue === 0) {
        return 0;
    } else {
        const value = Number(maatregel.minimaal) + (activeValue - 1) * (Number(maatregel.maximaal) - Number(maatregel.minimaal)) / 9;
        return Math.round(value * 100) / 100;
    }
};

export const maatregelenStore = writable<Maatregelen[]>([]);
