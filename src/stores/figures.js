import { writable } from "svelte/store";
import { readable } from 'svelte/store';

export const figures = writable([]);

export const ids = writable(0);

export const addTime = writable(0);

export const interval = writable(6000);

export const delta = writable(1.7);

export const types = readable({1:"square",2:"triangle"});