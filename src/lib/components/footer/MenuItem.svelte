<script>
    export let name, link, className='';
</script>

<li class="mb-[5px]">
    <a 
        class="text-[#d0d0d0] text-[15px] capitalize no-underline bg-transparent {className || ''}" 
        href={link}
    >{name}</a>
</li>