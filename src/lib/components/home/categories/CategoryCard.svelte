<script>
    export let category;
</script>

<!--
<a class="relative block" href={category.attributes.slug}>
    <div class="relative overflow-hidden mb-[8px]">
        <img class="h-auto rounded-none max-w-full border-none align-middle	transition-all duration-[0.5s] delay-0 ease-in-out hover:scale-[1.2]" src={category.attributes.image.data.attributes.url} alt="{category.attributes.slug}">
    </div>
    <p class="my-0 text-[#191B1D] dark:text-[#d7d7d7] dark:hover:text-[white] capitalize font-medium text-[14px]">{category.attributes.name}</p>
</a>
-->
<a class="relative block" href="/">
    <div class="relative overflow-hidden mb-[8px]">
        <img class="h-auto rounded-none max-w-full border-none align-middle	transition-all duration-[0.5s] delay-0 ease-in-out hover:scale-[1.2]" src={category.image} alt="">
    </div>
    <p class="my-0 text-[#191B1D] dark:text-[#d7d7d7] dark:hover:text-[white] capitalize font-medium text-[14px]">{category.name}</p>
</a>