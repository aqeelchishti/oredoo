import { z } from 'zod';

export const signupFormValidationSchema = z.object({
	username: z
		.string({
			required_error: 'Username is required',
			invalid_type_error: 'Username must be a string'
		})
		.min(4, {
			message: 'Must be 4 or more characters long'
		})
		.max(64, {
			message: 'Must be 64 or fewer characters long'
		}),
	email: z
		.string({
			required_error: 'Email is required'
		})
		.email({
			message: 'Invalid email address'
		})
		.min(6, {
			message: 'Must be 6 or more characters long'
		})
		.max(64, {
			message: 'Must be 64 or fewer characters long'
		}),
	password: z
		.string({
			required_error: 'Password is required'
		})
		.min(8, {
			message: 'Must be 8 or more characters long'
		})
		.max(64, {
			message: 'Must be 64 or fewer characters long'
		}),
	terms: z.enum(['on'], { required_error: 'You must accept the Terms and Conditions' })
	/*terms: z.literal(true, {
        errorMap: () => ({ message: "You must accept the Terms and Conditions" })
    })*/
});

export const loginFormValidationSchema = z.object({
	email: z
		.string({
			required_error: 'Email is required'
		})
		.email({
			message: 'Invalid email address'
		})
		.min(6, {
			message: 'Must be 6 or more characters long'
		})
		.max(64, {
			message: 'Must be 64 or fewer characters long'
		}),
	password: z
		.string({
			required_error: 'Password is required'
		})
		.min(8, {
			message: 'Must be 8 or more characters long'
		})
		.max(64, {
			message: 'Must be 64 or fewer characters long'
		})
});

export const forgetPasswordFormValidationSchema = z.object({
	email: z
		.string({
			required_error: 'Email is required'
		})
		.email({
			message: 'Invalid email address'
		})
		.min(6, {
			message: 'Must be 6 or more characters long'
		})
		.max(64, {
			message: 'Must be 64 or fewer characters long'
		})
});

export const resetPasswordFormValidationSchema = z.object({
	password: z
		.string({
			required_error: 'Password is required'
		})
		.min(8, {
			message: 'Must be 8 or more characters long'
		})
		.max(64, {
			message: 'Must be 64 or fewer characters long'
		})
	/*confirm_password: z
		.string({
			required_error: 'Confirm Password is required'
		})
		.min(8, {
			message: 'Must be 8 or more characters long'
		})
		.max(64, {
			message: 'Must be 64 or fewer characters long'
		})
	*/
});
