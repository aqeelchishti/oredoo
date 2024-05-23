import { fail } from '@sveltejs/kit';


/*import { AuthApiError } from '@supabase/supabase-js';

//import { superValidate, message } from 'sveltekit-superforms/server';*/

import { signupFormValidationSchema } from '$lib/utils/formValidationSchema.js';


/*export const load = async (event) => {
	const form = await superValidate(event, signupFormValidationSchema);
	return {
		form
	};
};*/

export const actions = {
	default: async ({ /*event,*/ request, /*url,*/ locals: { supabase } }) => {
		await new Promise((fulfil) => setTimeout(fulfil, 1000));

		//const form = await superValidate(event, signupFormValidationSchema);
		const formData = Object.fromEntries(await request.formData());

		try {
			signupFormValidationSchema.parse(formData);
			const { username, email, password } = formData;
			/*const formData = await request.formData();
			const username = formData.get('username');
			const email = formData.get('email');
			const password = formData.get('password');
			const terms = formData.get('terms');*/

			//if (formData.terms) {
			//const { error: err } = await supabase.auth.api.signUpWithEmail({
			//const { error: err } = await supabase.auth.signUpWithPassword({
			const { error: err } = await supabase.auth.signUp({
				username,
				email,
				password
				/*options: {
					emailRedirectTo: `${url.origin}/auth/callback`
				}*/
			});

			if (err) {
				/*if (error instanceof AuthApiError && error.status === 400) {
                    return (
                        fail(400, { email, success: false }),
                        message(form, 'Invalid Credentials.')
                    );
                }*/

				//return fail(500, { email, success: false }), message(form, 'Server error. Try again later.');
				return fail(500, { message: 'Server error. Try again later.', success: false, email });
			}

			return {
				message: 'Please check your email for a magic link to log into the website.',
				success: true
			};
			//return (
			//Please check your email for a magic link to log into the website
			//{ form },
			/*message(form, 'Account created successfully, Login to continue'), { success: true }
			);*/
		} catch (errs) {
			const { fieldErrors: errors } = errs.flatten();
			const { ...rest } = formData;
			/*if (!form.valid) {
				return fail(400, { form, success: false }), message(form, 'Fix form errors.');
			}*/

			return fail(400, {
				message: 'Fix form errors.',
				success: false,
				data: rest,
				errors
			});
			/*return {
				data: rest,
				errors
				//fail(400, { message: 'Server error. Try again later.', success: false, email });
			};*/
		}
		/*} else {
			return {
				message: 'You must accept the terms and conditions.',
				success: false
			};
		}*/
	}
};
