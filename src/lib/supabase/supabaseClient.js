import { createClient } from '@supabase/supabase-js';
//import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$app/environment'
//import { writable } from 'svelte/store';

const options = {
	auth: {
		autoRefreshToken: true,
		persistSession: true,
		detectSessionInUrl: true
	}
};
export const supabase = createClient(
	'https://elyvdcuwolghrehvahdm.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVseXZkY3V3b2xnaHJlaHZhaGRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk0MDc4MzgsImV4cCI6MjAwNDk4MzgzOH0.og3doc1_tX2IKg9GIeAnCxqFH488mfQKgSO6D0LKKoQ',
	options
);
//export const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, options);

/*
export const currentUser = writable(async () => (await supabase.auth.getUser()).data.user);

supabase.auth.onAuthStateChange(async () => {
	currentUser.set((await supabase.auth.getUser()).data.user);
});
*/
