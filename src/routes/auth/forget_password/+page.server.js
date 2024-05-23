import { fail } from '@sveltejs/kit';
import { forgetPasswordFormValidationSchema } from '$lib/utils/formValidationSchema.js';
import { AuthApiError } from '@supabase/supabase-js';

export const actions = {
	default: async ({ request, url, locals: { supabase } }) => {
		await new Promise((fulfil) => setTimeout(fulfil, 1000));

		const formData = Object.fromEntries(await request.formData());

		try {
			forgetPasswordFormValidationSchema.parse(formData);
			const { email } = formData;
			const { error: err } = await supabase.auth.resetPasswordForEmail(email, {
				redirectTo: `${url.origin}/auth/callback?next=/auth/reset_password`
			});

			if (err) {
				if (err instanceof AuthApiError && err.status === 400) {
					return fail(400, {
						message: "Account with this email address doesn't exist.",
						success: false,
						email
					});
				}
				return fail(500, { message: 'Server error. Try again later.', success: false, email });
			}

			return {
				message: 'Please check your email for a reset password link.',
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
