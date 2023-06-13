<script>
    export let name, link, className='';
</script>

<li class="inline-block mr-5 mb-[15px] last:mb-0">
    <a 
        href={link} 
        class="text-[#191b1d99] hover:text-[#191B1D] dark:text-[#d7d7d7] dark:hover:text-white bg-transparent border-0 p-0 !text-sm font-medium capitalize relative inline-flex w-full whitespace-nowrap {className || ''}"
    >{name}</a>
</li>