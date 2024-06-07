import { writable } from 'svelte/store';

export type AppState = 'splash' | 'selected' | 'result';

export const appState = writable<AppState>('splash');
