import { fail } from '@sveltejs/kit';
import { loginFormValidationSchema } from '$lib/utils/formValidationSchema.js';
import { AuthApiError } from '@supabase/supabase-js';

export const actions = {
	default: async ({ request, locals: { supabase } }) => {
		await new Promise((fulfil) => setTimeout(fulfil, 1000));

		const formData = Object.fromEntries(await request.formData());

		try {
			loginFormValidationSchema.parse(formData);
			const { email, password } = formData;
			const { error: err } = await supabase.auth.signInWithPassword({
				email,
				password
			});

			if (err) {
				if (err instanceof AuthApiError && err.status === 400) {
					return fail(400, { message: 'Invalid Credentials.', success: false, email });
				}
				return fail(500, { message: 'Server error. Try again later.', success: false, email });
			}
			else {
				return {
					message: 'Successfully Logged In.',
					success: true
				};
			}
			/*
			else {
				return redirect(303, '/');
			}
			*/

		} catch (fieldErrs) {
			const { ...rest } = formData;
			const { fieldErrors: errors } = fieldErrs.flatten();
			//const { fieldErrors: errors } = fieldErrs;

			console.log(errors);

			return fail(400, {
				message: 'Fix form errors.',
				success: false,
				data: rest,
				errors
			});
		}
	}
};
