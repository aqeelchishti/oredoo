<script>
	import Container from '$lib/components/shared/Container.svelte';
	import Row from '$lib/components/shared/Row.svelte';
	import Col from '$lib/components/shared/Col.svelte';

	import Icon from '$lib/components/shared/Icon.svelte';

	import arrowLeft from '@iconify/icons-la/arrow-left';
	import arrowRight from '@iconify/icons-la/arrow-right';

	export let pages_count, current_page, page_size;

</script>

<!--pagination-->
<div class="flex pl-0 list-none rounded-none">
	<Container>
		<div class="text-center mb-[50px] pt-[50px]">
			<Row>
				<Col className="basis-full max-w-full">
					<div>
						<ul class="my-0 pl-0 list-none">
							<li class="inline-block">
								{#if current_page > 1 }
									<a
										class="block w-[50px] h-[50px] border border-solid border-[#E6E7E7] hover:bg-prime dark:hover:bg-white hover:text-white dark:hover:text-prime text-center font-bold leading-[50px] rounded-none mr-[3px] transition-all duration-[0.5s] ease-in-out delay-0"
										href="?page={current_page - 1}&size={page_size}"><Icon icon={arrowLeft} iconClass="inline-block" />
									</a>
								{:else}
									<button disabled class="block cursor-not-allowed w-[50px] h-[50px] border border-solid border-[#E6E7E7] text-center font-bold leading-[50px] rounded-none mr-[3px] transition-all duration-[0.5s] ease-in-out delay-0">
										<Icon icon={arrowLeft} iconClass="inline-block" />
									</button>
								{/if}
							</li>
							{#each Array(pages_count) as _, index}
								<li class="inline-block">
									<!--on:click={page === index + 1}   <!--on:click={page === index + 1}  on:click={() => posts_page.set(index)}-->
									<a
										class="block w-[50px] h-[50px] border border-solid border-[#E6E7E7] hover:bg-prime dark:hover:bg-white hover:text-white dark:hover:text-prime text-center font-bold leading-[50px] rounded-none mr-[3px] transition-all duration-[0.5s] ease-in-out delay-0 { (current_page == (index+1)) ? 'bg-prime text-white dark:bg-white dark:text-prime' : ''}"
										href="?page={index + 1}&size={page_size}">{index + 1}</a
									>
								</li>
							{/each}
							<li class="inline-block">
								{#if current_page < pages_count }
									<a
										class="block w-[50px] h-[50px] border border-solid border-[#E6E7E7] hover:bg-prime dark:hover:bg-white hover:text-white dark:hover:text-prime text-center font-bold leading-[50px] rounded-none mr-[3px] transition-all duration-[0.5s] ease-in-out delay-0"
										href="?page={current_page + 1}&size={page_size}"><Icon icon={arrowRight} iconClass="inline-block" /></a
									>
								{:else}
									<button disabled class="block cursor-not-allowed w-[50px] h-[50px] border border-solid border-[#E6E7E7] text-center font-bold leading-[50px] rounded-none mr-[3px] transition-all duration-[0.5s] ease-in-out delay-0">
										<Icon icon={arrowRight} iconClass="inline-block" />
									</button>
								{/if}
							</li>
						</ul>
					</div>
				</Col>
			</Row>
		</div>
	</Container>
</div>
