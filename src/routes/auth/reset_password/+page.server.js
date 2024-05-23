import { /*redirect,*/ fail } from '@sveltejs/kit';
import { resetPasswordFormValidationSchema } from '$lib/utils/formValidationSchema.js';
import { AuthApiError } from '@supabase/supabase-js';

export const actions = {
	default: async ({ request, locals: { supabase, getSession } }) => {
		await new Promise((fulfil) => setTimeout(fulfil, 1000));

		const session = await getSession();
		const formData = Object.fromEntries(await request.formData());

		try {
			resetPasswordFormValidationSchema.parse(formData);
			const { password } = formData;
			if (session) {
				const { error: err } = await supabase.auth.updateUser({
					password
				});
				await supabase.auth.signOut();
				//throw redirect(303, '/');
				/*const { error: err } = await supabase.auth.resetPasswordForEmail({
					email,
					redirectTo: 'http://localhost:5173/auth/reset_password'
				});*/

				if (err) {
					console.log(err);
					if (err instanceof AuthApiError && err.status === 400) {
						return fail(400, {
							message: "Account with this email address doesn't exist.",
							success: false
						});
					}
					return fail(500, { message: 'Server error. Try again later.', success: false });
				}
			}

			return {
				message: 'Your password has been successfully updated.',
				success: true
			};
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
