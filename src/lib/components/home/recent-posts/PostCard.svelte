<script>
	import Icon from '$lib/components/shared/Icon.svelte';

    import longArrowAltRight from '@iconify/icons-la/long-arrow-alt-right';

    export let post;
</script>  

<div class="group py-[30px] px-0 flex items-center border-b border-solid border-[#E6E7E7] dark:border-[#99999926] transition-all duration-[0.4s] delay-0 ease-in-out"> 
    <div class="flex-1 mr-[30px] overflow-hidden">
        <a href="post-single.html">
            <!--{#each post.attributes.images.data.slice(0,1) as image}
                <img 
                    class="border-none align-middle w-[335px] h-[250px] max-w-full overflow-hidden object-cover object-center group-hover:scale-[1.2] transition-all duration-[0.5s] delay-0 ease-in-out" 
                    src={image.attributes.url} alt=""
                />
            {/each}-->
                <img 
                    class="border-none align-middle w-[335px] h-[250px] max-w-full overflow-hidden object-cover object-center group-hover:scale-[1.2] transition-all duration-[0.5s] delay-0 ease-in-out" 
                    src={post.img_url} alt=""
                />
        </a>
    </div>
    <div class="flex-1 mr-[30px]">
        <ul class="flex items-center my-0"> 
            <li class="mb-0 text-[14px] text-[#191b1d99] dark:text-[#d7d7d7] group-hover:text-[#191B1D] dark:group-hover:text-white capitalize font-semibold">
                <!--{#each post.attributes.categories.data as category}
                    <a href="/{category.attributes.slug}" class="relative">{category.attributes.name}</a>
                {/each}-->
                <a href="/" class="relative">{post.category}</a>
            </li>
            <li class="mb-0 text-[14px] text-[#191b1d99] dark:text-[#d7d7d7] capitalize font-medium"> 
                <span class="inline-block w-[18px] h-[1px] bg-[#191b1d99] dark:bg-[#d7d7d7] !my-[4px] !mx-[10px]"></span> february 10 ,2022
            </li>
        </ul>
        <h5 class="my-[20px] mx-0 text-[20px] font-league font-extrabold leading-[1.4] text-[#191B1D] dark:text-white">
            <!--<a 
                href="/{post.attributes.slug}"
                class="bg-size-0-5 group-hover:bg-size-100-5 bg-origin-border bg-left-bottom bg-no-repeat inline text-[#191B1D] dark:text-[#ffffff] bg-gradient-to-r from-[#191B1D] from-0% to-[#191B1D] to-100% dark:from-[#ffffff] dark:to-[#ffffff] transition-[background-size] delay-0 duration-[0.5s] ease-in-out"
            >{post.attributes.title}</a>-->
            <a 
                href="/"
                class="bg-size-0-5 group-hover:bg-size-100-5 bg-origin-border bg-left-bottom bg-no-repeat inline text-[#191B1D] dark:text-[#ffffff] bg-gradient-to-r from-[#191B1D] from-0% to-[#191B1D] to-100% dark:from-[#ffffff] dark:to-[#ffffff] transition-[background-size] delay-0 duration-[0.5s] ease-in-out"
            >{post.title}</a>
        </h5> 

        <div>
            <a 
                href="/" 
                class="group/link relative inline-flex text-center cursor-pointer align-middle text-[#191b1d99] dark:text-[#d7d7d7] group-hover:text-[#191B1D] dark:group-hover:text-[#ffffff] border-0 font-semibold text-sm capitalize rounded-[20px] transition-all duration-[0.3s] delay-0 ease-in-out"
            >
            Continue Reading <Icon icon={longArrowAltRight} iconClass="mt-0 ml-[5px] text-2xl group-hover/link:translate-x-3 transition-all duration-[0.5s] delay-0 ease-in-out" />
        </a>
        </div>
    </div>
</div>