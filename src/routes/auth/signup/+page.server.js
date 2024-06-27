import { fail } from '@sveltejs/kit';

import { signupFormValidationSchema } from '$lib/utils/formValidationSchema.js';

/*export const load = async ({ }) => {
	const formData = Object.fromEntries(await request.formData());

		signupFormValidationSchema.parse(formData);
};*/

export const actions = {
	default: async ({ request, url, locals: { supabase } }) => {
		await new Promise((fulfil) => setTimeout(fulfil, 1000));

		const formData = Object.fromEntries(await request.formData());

		try {
			signupFormValidationSchema.parse(formData);
			const { username, email, password } = formData;
			const { error: err } = await supabase.auth.signUp({
				username,
				email,
				password,
				options: {
					emailRedirectTo: `${url.origin}/auth/confirm`
				}
			});

			if (err) {
				return fail(500, {
					message: 'Server error. Try again later.',
					success: false,
					email
				});
			}
			else {
				return {
					message: 'Please check your email for a magic link to log into the website.',
					success: true
				};
			}

		} catch (fieldErrs) {
			const { ...rest } = formData;
			const { fieldErrors: errors } = fieldErrs.flatten();

			return fail(400, {
				message: 'Fix form errors.',
				success: false,
				data: rest,
				errors
			});
		}
	}
};
