import { writable } from "svelte/store";

export interface Doelen {
    doel : number;
    budget: number;
}

export const doelenStore = writable<Doelen[]>([]);