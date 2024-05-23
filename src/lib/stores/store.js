import { writable } from 'svelte/store';

export const menus = writable([]);
export const selected = writable({});
export const showMenu = writable(false);

export const success = writable(false);

export const s_posts = writable([]);
export const s_posts_count = writable(0);
export const s_pages_count = writable(0);
export const s_current_page = writable(1);
export const s_page_size = writable(1);
export const s_category = writable({});
