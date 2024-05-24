<script>
	import Container from '$lib/components/shared/Container.svelte';
	import Row from '$lib/components/shared/Row.svelte';
	import Col from '$lib/components/shared/Col.svelte';

	import IconButton from '$lib/components/shared/buttons/IconButton.svelte';

	import Menu from '$lib/components/footer/Menu.svelte';
	import MenuItem from '$lib/components/footer/MenuItem.svelte';

	import paperPlane from '@iconify/icons-fa6-solid/paper-plane';
</script>

<div class="bg-[#1B1B1B]">
	<div>
		<div class="py-[100px] px-0">
			<Container>
				<Row>
					<Menu title="Menu">
						<MenuItem name="Home" link="/" />
						<MenuItem name="About" link="/" />
						<MenuItem name="Contact" link="/" />
					</Menu>
					<!--newsletter-->
					<Col className="basis-1/2 max-w-[50%]">
						<div class="text-center">
							<div class="mb-[30px]">
								<h3
									class="text-white text-[28px] font-league font-extrabold leading-[1.4] mx-0 mt-0 mb-[10px]"
								>
									Subscribe To Our Newsletter
								</h3>
								<p class="text-[#d0d0d0] my-0">
									Sign up for free and be the first to get notified about new posts.
								</p>
							</div>
							<form action="/" class="newslettre-form">
								<div class="flex items-center justify-end">
									<div class="relative w-full mb-0 mr-0">
										<input
											type="email"
											class="block w-full h-[48px] bg-white text-prime py-0 px-[20px] mb-0 text-base font-normal leading-normal bg-clip-padding overflow-visible rounded-none cursor-pointer border border-solid border-white transition-all duration-[0.5s] delay-0 ease-in-out"
											placeholder="Your Email Adress"
											required="required"
										/>
									</div>
									<IconButton
										icon={paperPlane}
										iconClass="text-[13px] leading-[35px] text-white antialiased inline-block mb-[2px]"
										btnClass="absolute bg-[#1B1B1B] w-[35px] h-[35px] rounded-none font-normal mt-0 mr-[5px] border-0 cursor-pointer overflow-visible transition-all duration-[0.7s] delay-0 ease-in-out"
									/>
								</div>
							</form>
						</div>
					</Col>
					<!--/-->
					<Menu title="Follow us">
						<MenuItem name="Facebook" link="/" />
						<MenuItem name="Instagram" link="/" />
						<MenuItem name="Youtube" link="/" />
					</Menu>
				</Row>
			</Container>
		</div>
		<!--footer-copyright-->
		<div class="border-t border-solid border-[#99999926]">
			<Container>
				<Row>
					<Col className="basis-full max-w-[100%]">
						<div class="text-center py-[30px] px-0">
							<p class="text-[#d0d0d0] mb-0 text-[15px]">
								© 2024, Oredoo, All Rights Reserved.
							</p>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
		<!--/-->
	</div>
</div>
