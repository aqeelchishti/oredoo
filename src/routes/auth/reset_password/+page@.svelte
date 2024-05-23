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

	import checkCircle from '@iconify/icons-heroicons/check-circle';
	import xCircle from '@iconify/icons-heroicons/x-circle';

	//import { superForm } from 'sveltekit-superforms/client';
	//import { loginFormValidationSchema } from '$lib/utils/formValidationSchema.js';

	import { enhance } from '$app/forms';

	export let form;

	let loading = false;

	console.log(form);
	console.log(form?.data);

	/*let { session } = data;
	$: ({ session } = data);*/

	/*const { form, errors, delayed, message, enhance } = superForm(data.form, {
		validators: loginFormValidationSchema
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
						Reset Password
					</h4>
					<!--{#if $message}
						<span class="text-green-500">{$message}</span>
					{/if}-->
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
								className={$errors.password
									? 'border-red-500 focus:border-red-500'
									: 'border-[#E6E7E7] dark:border-[#99999926] focus:border-prime dark:focus:border-white'}
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

						<!--<div class="mb-4 mt-5 flex items-center">
							<CheckboxInput name="remember">Remember Me</CheckboxInput>
							<Link href="/auth/forget_password">Forget Password?</Link>
						</div>-->
						<div class="mb-4">
							<Button
								btnClass="w-full my-[10px] px-[24px] py-[8px] text-[16px] leading-[24px]"
								disabled={loading ? true : false}
								busy={loading}
							>
								{#if loading}
									Updating <span class="ml-4 loading loading-dots loading-md" />
								{:else}
									Update Password
								{/if}
							</Button>
						</div>
					</form>
				</div>
			</Col>
		</Row>
	</Container>
</section>
