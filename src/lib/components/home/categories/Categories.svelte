<script>
	import Container from '$lib/components/shared/Container.svelte';
	import Row from '$lib/components/shared/Row.svelte';
	import Col from '$lib/components/shared/Col.svelte';

	import CategoryCard from '$lib/components/home/categories/CategoryCard.svelte';

    export let categories;
</script>

<section class="block h-auto">
    <Container>
        <div class="py-[50px] px-0 border-b border-solid border-[#E6E7E7] dark:border-[#99999926]">
            <Row>
                <Col className="max-w-full basis-full mobile:basis-0">
                    <div class="grid grid-cols-10 mobile:grid-cols-5 mobile-0:grid-cols-3 mobile-1:grid-cols-2 grid-rows-[auto] gap-[10px] text-center">
                        {#each categories as category}
                            <CategoryCard {category}/>
                        {/each}
                    </div>
                </Col>
            </Row>
        </div>
    </Container>
</section>
