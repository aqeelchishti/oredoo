<script>
	import Col from '$lib/components/shared/Col.svelte';

	import PostCard from '$lib/components/home/recent-posts/PostCard.svelte';

	//import { page } from '$app/stores';

	export let posts;

	//$: postPage = parseInt(page.url.page === 1);
</script>

<Col
				className="basis-2/3 max-w-[66.666667%] overflow-visible box-border min-h-[1px] mb-[50px]"
			>
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
									<a
										class="block text-center font-bold w-[50px] h-[50px] leading-[50px] rounded-none mr-[3px] border border-solid border-[#E6E7E7]"
										href={`/posts?page=1&size=1`}
										active
									>
										<!--?page=${$page.params.page}"-->
										View all</a
									>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</Col>
		
