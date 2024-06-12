import { writable } from 'svelte/store';

export const appState = writable<number>(0);
