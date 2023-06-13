<script>
    export let post;
</script>

<div class="relative w-full">
    <div class="group relative after:absolute after:content-[''] after:left-0 after:bottom-0 after:w-full after:h-full after:bg-cover after:bg-no-repeat after:bg-center after:bg-gradient-to-b after:from-[#11111100] after:from-0% after:via-[#11111199] after:via-80% after:to-[#111111] after:to-100% transition-all duration-[0.4s] delay-0 ease-in-out">
        <div class="overflow-hidden">
            <!--{#each post.attributes.images.data as image}
                <img src={image.attributes.url} alt="" class="block w-full h-[645px] object-cover"/>
            {/each}-->
            <img src={post.img_url} alt="" class="block w-full h-[645px] object-cover"/>
        </div>
        <div class="absolute text-center bottom-0 left-0 p-[30px] z-[1]">
            <div>
                <!--{#each post.attributes.categories.data as category}
                    <a href="/{category.attributes.slug}" class="text-sm font-medium capitalize text-[#eee] group-hover:text-[#191B1D] py-[3px] px-[13px] bg-transparent group-hover:bg-white border border-solid border-[#d0d0d0] rounded-[20px] transition-all duration-[0.4s] delay-0 ease-in-out">{category.attributes.name}</a>
                {/each}-->
                <a href="/" class="text-sm font-medium capitalize text-[#eee] group-hover:text-[#191B1D] py-[3px] px-[13px] bg-transparent group-hover:bg-white border border-solid border-[#d0d0d0] rounded-[20px] transition-all duration-[0.4s] delay-0 ease-in-out">{post.category}</a>
            </div>
            <h4 class="px-0 pt-[30px] pb-[25px] text-[#191B1D] text-2xl font-extrabold font-league leading-[1.4] break-words">
                <!--<a href="/{post.attributes.slug}" class="bg-size-0-5 group-hover:bg-size-100-5 bg-origin-border bg-left-bottom bg-no-repeat inline bg-gradient-to-r from-[#ffffff] from-0% to-[#ffffff] to-100% text-white transition-[background-size] delay-0 duration-[0.5s] ease-in-out">{post.attributes.title}</a>-->
                <a href="/" class="bg-size-0-5 group-hover:bg-size-100-5 bg-origin-border bg-left-bottom bg-no-repeat inline bg-gradient-to-r from-[#ffffff] from-0% to-[#ffffff] to-100% text-white transition-[background-size] delay-0 duration-[0.5s] ease-in-out">{post.title}</a>
            </h4>                                         
            <ul class="justify-center flex items-center text-[#d0d0d0] capitalize font-medium text-[13px]">
                <li class="mb-0">
                    <!--<a class="group-hover:text-white" href="/">Mariam </a>-->
                    <a class="group-hover:text-white" href="/">{post.author} </a>
                </li>
                <li class="mb-0">
                    <!--<span class="inline-block w-[18px] h-[1px] bg-[#eee] !my-[4px] !mx-[10px]"></span> {post.attributes.publishedAt}-->
                    <span class="inline-block w-[18px] h-[1px] bg-[#eee] !my-[4px] !mx-[10px]"></span> {post.date_posted}
                </li> 
            </ul>
        </div>   
    </div>
</div>