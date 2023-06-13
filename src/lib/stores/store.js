import { writable } from 'svelte/store';

export const menus = writable([]);
export const selected = writable({});
export const showMenu = writable(false);

export const posts = writable([]);
//export const postsMeta = writable({});
//export const postsCurrentPageNumber = writable(1);
//export const postsCurrentPageSize = writable(20);

export const categories = writable([]);
