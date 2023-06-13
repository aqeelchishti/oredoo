<script>
    import HeroCarousel from "$lib/components/home/hero-carousel/HeroCarousel.svelte";
	import RecentPosts from "$lib/components/home/recent-posts/RecentPosts.svelte";

    import Categories from "$lib/components/home/categories/Categories.svelte";

    import Container from '$lib/components/shared/Container.svelte';
	import Row from '$lib/components/shared/Row.svelte';

    import { posts, categories } from '$lib/stores/store.js';

    //export let data;

</script>

<HeroCarousel posts={$posts}/>

<Categories categories={$categories}/>

<section class="block pt-[50px]">
    <Container>
        <Row>
            <RecentPosts posts={$posts}/>
        </Row>
    </Container> 
</section>

