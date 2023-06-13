<script>
	import Col from "$lib/components/shared/Col.svelte";
	import PostCard from "./PostCard.svelte";

    export let posts;
</script>

<Col className="basis-2/3 max-w-[66.666667%] overflow-visible box-border min-h-[1px] mb-[50px]">
    <div class="static py-0">
        <div class="mb-[30px]">
            <h3 class="text-[30px] capitalize mb-[5px] font-league font-extrabold m-0 leading-[1.4] text-[#191B1D] dark:text-white">Recent Articles </h3>
            <p class="mb-0">Discover the most outstanding articles in all topics of life.</p>
        </div>

        {#each posts as post}
            <PostCard {post}/>
        {/each}

        <!--pagination
        <div class="flex pl-0 rounded-none">
            <div class="text-center mb-[50px] pt-[50px]">
                <ul class="my-0 pl-0 list-none">
                    <li class="inline-block">
                        <a class="block text-center font-bold w-[50px] h-[50px] leading-[50px] rounded-none mr-[3px] border border-solid border-[#E6E7E7]" href="/"><i class="las la-arrow-left"></i></a>
                    </li>
                    <li class="inline-block">
                        <a class="block text-center font-bold w-[50px] h-[50px] leading-[50px] rounded-none mr-[3px] border border-solid border-[#E6E7E7]" href="/" active>1</a>
                    </li>
                    <li class="inline-block">
                        <a class="block text-center font-bold w-[50px] h-[50px] leading-[50px] rounded-none mr-[3px] border border-solid border-[#E6E7E7]" href="/"><i class="las la-arrow-right"></i></a>
                    </li>
                </ul>
            </div>
        </div>-->
    </div>
</Col>