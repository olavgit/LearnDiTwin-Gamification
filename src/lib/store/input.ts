import { writable } from 'svelte/store';

interface User {
	name: string;
	values: number[];
}

const users: User[] = [
	{ name: 'User 1', values: [0, 0, 0, 0] },
	{ name: 'User 2', values: [0, 0, 0, 0] },
	{ name: 'User 3', values: [0, 0, 0, 0] },
	{ name: 'User 4', values: [0, 0, 0, 0] }
];

export const userStore = writable<User[]>(users);
