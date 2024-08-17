<script>
	import HeroCarousel from '$lib/components/home/hero-carousel/HeroCarousel.svelte';
	import HeroCover from '$lib/components/home/hero-cover/HeroCover.svelte';
	import Categories from '$lib/components/home/categories/Categories.svelte';
	import RecentPosts from '$lib/components/home/recent-posts/RecentPosts.svelte';
	import SideBar from '$lib/components/home/side-bar/SideBar.svelte';

	import Container from '$lib/components/shared/Container.svelte';
	import Row from '$lib/components/shared/Row.svelte';

	export let data;

	$: posts = data.posts;
	$: categories = data.categories;

	//let isHeroCarousel = false;
</script>

<!--{#if isHeroCarousel}
	<HeroCarousel {posts} />
{:else}-->
<HeroCover {posts} />
<!--{/if}-->

<!-- Hero Layout Toggle 
<div class="px-5 py-5">
	<p>Hero Layout:</p>
	<div class="flex flex-row gap-2">
		<span>Cover</span>
		<input
			type="checkbox"
			class="toggle [--tglbg:white] bg-prime border-prime focus:ring-0"
			bind:checked={isHeroCarousel}
		/>
		<span>Carousel</span>
	</div>
</div>
-->

<Categories {categories} />

<section class="block pt-[50px]">
	<Container>
		<Row>
			<RecentPosts {posts} />
			<SideBar {posts} />
		</Row>
	</Container>
</section>
