import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ locals: { supabase /*, session*/ } }) => {
		//if (session) {
			await supabase.auth.signOut();
		//}
		redirect(307, '/');
	}
};

/*
export const load = async ({ locals: { supabase, session } }) => {
	if (session) {
		await supabase.auth.signOut();
	}
	throw redirect(303, '/');
};
*/