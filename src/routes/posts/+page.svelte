<script>
	import Container from '$lib/components/shared/Container.svelte';
	import Row from '$lib/components/shared/Row.svelte';
	import Col from '$lib/components/shared/Col.svelte';

	import Icon from '$lib/components/shared/Icon.svelte';

	import Pagination from '$lib/components/shared/Pagination.svelte';

	import FilterBar from '$lib/components/posts/FilterBar.svelte';

	import Posts from '$lib/components/posts/Posts.svelte';

	import angleRight from '@iconify/icons-la/angle-right';

	import { onDestroy } from 'svelte';

	import { 
		s_posts,
		s_posts_count,
		s_pages_count,
		s_current_page,
		s_page_size,
		s_category
	} from '$lib/stores/store.js';

    onDestroy(() => {
		s_category.set({});
        s_posts.set([]);
        s_posts_count.set(0);
        s_pages_count.set(0);
        s_current_page.set(1);
        s_page_size.set(1);
	});

	export let data;

	$: $s_posts = data.posts;
	$: $s_posts_count = data.posts_count;
	$: $s_pages_count = data.pages_count;
	$: $s_current_page = data.current_page;
	$: $s_page_size = data.page_size;

</script>

<section class="mt-[85px] bg-[#f1f1f1] dark:bg-[#1B1B1B]">
	<Container>
		<div class="py-[50px] px-0">
			<Row>
				<Col className="basis-full max-w-full">
					<div>
						<h1 class="mb-[10px]">Latest Articles</h1>
						<p class="text-[15px] mb-0 font-medium text-prime dark:text-white">
							<a
								class="text-primeTarns hover:text-prime dark:text-central dark:hover:text-white"
								href="/"
								>Home <Icon
									icon={angleRight}
									iconClass="text-[10px] text-primeTarns hover:text-prime inline-block"
								/></a
							> Posts
						</p>
					</div>
				</Col>
			</Row>
		</div>
	</Container>
</section>

<section>
	<Container>
		<FilterBar current_page={$s_current_page} page_size={$s_page_size} posts_count={$s_posts_count} pages_count={$s_pages_count} goto_pre_link="posts" />
		<Posts posts={$s_posts} />
	</Container>
</section>

<Pagination current_page={$s_current_page} pages_count={$s_pages_count} page_size={$s_page_size}/>
