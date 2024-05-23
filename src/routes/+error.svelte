<script>
	import Container from '$lib/components/shared/Container.svelte';
	import Row from '$lib/components/shared/Row.svelte';
	import Col from '$lib/components/shared/Col.svelte';

	import LinkButton from '$lib/components/shared/buttons/LinkButton.svelte';

	import { page } from '$app/stores';
</script>

<section class="mt-[85px]">
	<Container>
		<Row>
			<Col className="basis-8/12 max-w-[66.666667%] !m-auto">
				<div class="py-[50px] px-0 text-center">
					<h3>Oops... {$page.status}!</h3>
					<p class="mt-5 mb-[30px]">{$page.error.message}</p>
					<LinkButton link="/" btnClass="px-[24px] py-[8px] text-[16px] leading-[24px]"
						>Back to homepage</LinkButton
					>
				</div>
			</Col>
		</Row>
	</Container>
</section>
