<script>
	import Container from '$lib/components/shared/Container.svelte';
	import Row from '$lib/components/shared/Row.svelte';
	import Col from '$lib/components/shared/Col.svelte';

	import Button from '$lib/components/shared/buttons/Button.svelte';
	import Link from '$lib/components/shared/links/Link.svelte';

	import Input from '$lib/components/shared/inputs/Input.svelte';
	import CheckboxInput from '$lib/components/shared/inputs/CheckboxInput.svelte';

	import FieldError from '$lib/components/shared/errors/FieldError.svelte';
	import Alert from '$lib/components/shared/errors/Alert.svelte';

	//import { superForm } from 'sveltekit-superforms/client';
	//import { signupFormValidationSchema } from '$lib/utils/formValidationSchema.js';

	import checkCircle from '@iconify/icons-heroicons/check-circle';
	import xCircle from '@iconify/icons-heroicons/x-circle';

	import { enhance } from '$app/forms';

	export let form;

	let loading = false;

	console.log(form);

	/*const { form, enhance, errors, delayed, message } = superForm(data.form, {
		//resetForm: true,
		validators: signupFormValidationSchema
	});*/
</script>

<section class="block mt-[85px] p-[100px]">
	<Container>
		<Row>
			<Col className="basis-6/12 max-w-[50%] mobile0:basis-8/12 mobile0:max-w-[66.666667%] !m-auto">
				<div class="border border-solid border-[#E6E7E7] dark:border-[#99999926] p-[30px]">
					<h4
						class="mb-5 text-2xl text-prime dark:text-white font-league leading-6 font-extrabold m-0"
					>
						Sign up
					</h4>
					<!--className:alert-success={$page.status == 200}
							className:alert-error={$page.status >= 400}-->
					<!--{#if $message}-->

					<!--
						className={$page.status == 200
								? 'alert-success'
								: $page.status >= 400
								? 'alert-error'
								: ''}
							icon={$page.status == 200 ? checkCircle : $page.status >= 400 ? xCircle : ''}
							text={form?.message}
					-->
					{#if form?.message}
						<Alert
							className={form?.success ? 'alert-success' : 'alert-error'}
							icon={form?.success ? checkCircle : xCircle}
							text={form?.message}
						/>
					{/if}
					<form
						method="POST"
						class="block"
						use:enhance={() => {
							loading = true;
							return async ({ update }) => {
								loading = false;
								await update();
							};
						}}
					>
						<div class="mb-4">
							<!--
								className={$errors.username
									? 'border-red-500 focus:border-red-500'
									: 'border-[#E6E7E7] dark:border-[#99999926] focus:border-prime dark:focus:border-white'}

								className="border-[#E6E7E7] dark:border-[#99999926] focus:border-prime dark:focus:border-white"

								bind:value={form.username}
							-->
							<Input
								type="text"
								placeholder="Username*"
								name="username"
								className={form?.errors?.username
									? 'border-red-500 focus:border-red-500'
									: 'border-[#E6E7E7] dark:border-[#99999926] focus:border-prime dark:focus:border-white'}
								value={form?.data?.username}
							/>
							{#if form?.errors?.username}
								<FieldError>{form?.errors?.username[0]}</FieldError>
							{/if}
							<!--{#if $errors.username}
								<FieldError>{$errors.username[0]}</FieldError>
							{/if}-->
						</div>
						<div class="mb-4">
							<!--
								className={$errors.email
									? 'border-red-500 focus:border-red-500'
									: 'border-[#E6E7E7] dark:border-[#99999926] focus:border-prime dark:focus:border-white'}

								className="border-[#E6E7E7] dark:border-[#99999926] focus:border-prime dark:focus:border-white"
									
								bind:value={form.email}
							-->
							<Input
								type="email"
								placeholder="Email Address*"
								name="email"
								className={form?.errors?.email
									? 'border-red-500 focus:border-red-500'
									: 'border-[#E6E7E7] dark:border-[#99999926] focus:border-prime dark:focus:border-white'}
								value={form?.data?.email}
							/>
							{#if form?.errors?.email}
								<FieldError>{form?.errors?.email[0]}</FieldError>
							{/if}
							<!--{#if $errors.email}
								<FieldError>{$errors.email[0]}</FieldError>
							{/if}-->
						</div>
						<div class="mb-4">
							<!--
								className={$errors.password
									? 'border-red-500 focus:border-red-500'
									: 'border-[#E6E7E7] dark:border-[#99999926] focus:border-prime dark:focus:border-white'}

								className="border-[#E6E7E7] dark:border-[#99999926] focus:border-prime dark:focus:border-white"
							-->
							<Input
								type="password"
								placeholder="Password*"
								name="password"
								className={form?.errors?.password
									? 'border-red-500 focus:border-red-500'
									: 'border-[#E6E7E7] dark:border-[#99999926] focus:border-prime dark:focus:border-white'}
							/>
							{#if form?.errors?.password}
								<FieldError>{form?.errors?.password[0]}</FieldError>
							{/if}
							<!--{#if $errors.password}
								<FieldError>{$errors.password[0]}</FieldError>
							{/if}-->
						</div>
						<div class="mb-4 mt-5 flex items-center">
							<!--state={form?.terms}-->
							<CheckboxInput name="terms">
								Agree to our <Link href="/">terms &amp; conditions</Link>
							</CheckboxInput>
							{#if form?.errors?.terms}
								<FieldError>{form?.errors?.terms[0]}</FieldError>
							{/if}
							<!--{#if $errors.terms}
								<FieldError>{$errors.terms[0]}</FieldError>
							{/if}-->
						</div>
						<div class="mb-4">
							<Button
								btnClass="w-full my-[10px] px-[24px] py-[8px] text-[16px] leading-[24px] disabled:opacity-50 disabled:cursor-not-allowed"
								disabled={loading ? true : false}
								busy={loading}
							>
								{#if loading}
									Signing Up <span class="ml-4 loading loading-dots loading-md" />
								{:else}
									Sign Up
								{/if}
							</Button>
						</div>
						<p class="!text-center my-0">
							Already have an account? <Link href="/auth/login">Login</Link>
						</p>
					</form>
				</div>
			</Col>
		</Row>
	</Container>
</section>
