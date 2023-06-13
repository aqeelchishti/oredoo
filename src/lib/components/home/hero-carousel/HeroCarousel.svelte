<script>
    import Slide from '$lib/components/home/hero-carousel/Slide.svelte';

    import { Splide, SplideTrack, SplideSlide } from '@splidejs/svelte-splide';
    import '@splidejs/svelte-splide/css';

    export let posts;
</script>

<section class="block h-auto mt-[85px] mb-0 p-0 bg-[#f1f1f1] dark:bg-[#1B1B1B]">
    <div class="w-full max-w-[1482px] mx-auto">
        <div class="relative border-0 w-full block overflow-hidden mb-0">
            <Splide
                options={{
                    rewind: true,
                    autoplay: true,
                    type   : 'loop',
                    pagination: false,
                    perPage: 3,
                    perMove: 1,
                    speed: 1200,
                    flickMaxPages: 1,
                    arrows: false,
                    gap: '0px'
                }}
                hasTrack={ false }
            >
                <SplideTrack>
                    {#each posts.slice(0, 2) as post}
                        <SplideSlide>
                            <Slide {post}/>
                        </SplideSlide>
                    {/each}
                </SplideTrack>
            </Splide>
        </div>
    </div>
</section>
