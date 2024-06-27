import { redirect } from '@sveltejs/kit';

export const GET = async ({ url, locals: { supabase } }) => {
	const code = url.searchParams.get('code');
	const next = url.searchParams.get('next') ?? '/';

	if (code) {
		const { error } = await supabase.auth.exchangeCodeForSession(code);
		if (!error) {
			throw redirect(303, `/${next.slice(1)}`);
		}
	}

	// return the user to an error page with instructions
	throw redirect(303, '/auth/auth-code-error');
	
	/*
	const token_hash = url.searchParams.get('token_hash');
	const type = url.searchParams.get('type') | null;
	const next = url.searchParams.get('next') ?? '/';

	const redirectTo = new URL(url);
	redirectTo.pathname = next;
	redirectTo.searchParams.delete('token_hash');
	redirectTo.searchParams.delete('type');
	

	if (token_hash && type) {
		const { error } = await supabase.auth.verifyOtp({ token_hash, type });
		if (!error) {
			//redirectTo.searchParams.delete('next');
			redirect(303, redirectTo);
			//throw redirect(303, `/${next.slice(1)}`);
		}
	}

	redirectTo.pathname = '/auth/auth-error-code';
	redirect(303, redirectTo);
	*/
};
