<script>
	import Col from '$lib/components/shared/Col.svelte';

	import PostCard from '$lib/components/home/recent-posts/PostCard.svelte';
	import Button from '$lib/components/shared/buttons/Button.svelte';

	//import { page } from '$app/stores';

	export let posts;

	//$: postPage = parseInt(page.url.page === 1);
</script>

<Col className="basis-2/3 max-w-[66.666667%] overflow-visible box-border min-h-[1px] mb-[50px]">
	<div class="static py-0">
		<div class="mb-[30px]">
			<h3 class="!text-[30px] mb-[5px]">Recent Articles</h3>
			<p class="mb-0">Discover the most outstanding articles in all topics of life.</p>
		</div>

		{#each posts as post}
			<PostCard {post} />
		{/each}

		<!--pagination-->
		<div class="flex pl-0 rounded-none">
			<div class="text-center mb-[50px] pt-[50px]">
				<ul class="my-0 pl-0 list-none">
					<li class="inline-block">
						<!--{`/posts?page=${page.url}`}-->
						<!--?page=${$page.params.page}"-->
						<Button
							isButtonLink={true}
							btnLink={`/posts?page=1&size=1`}
							btnClass="group/link"
							iconAfter={true}
							icon="la--long-arrow-alt-right"
							iconClass="group-hover/link:translate-x-3 group-hover/link:text-prime dark:group-hover/link:text-white"
							>View all</Button
						>
					</li>
				</ul>
			</div>
		</div>
	</div>
</Col>
