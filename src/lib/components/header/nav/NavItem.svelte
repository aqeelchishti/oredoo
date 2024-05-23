<script>
	export let name,
		link,
		isActive = false,
		className = '';
</script>

<li class="relative" on:mouseenter on:mouseleave>
	<a
		href={link}
		on:click
		active={isActive}
		class="text-prime dark:text-white bg-transparent font-medium !text-base mr-[30px] ml-0 my-0 mobile:mx-0 mobile:mt-0 mobile:mb-[20px] inline-block relative capitalize p-0 z-[1] transition-all duration-[0.5s] delay-0 ease-in-out hover:before:h-[1px] hover:before:absolute hover:before:content-[''] hover:before:left-0 hover:before:bottom-[-31px] hover:before:w-full hover:before:rounded-[20px] hover:before:block hover:before:z-[-1] hover:before:bg-prime dark:hover:before:bg-white {isActive
			? "before:h-[1px] before:absolute before:content-[''] before:left-0 before:bottom-[-31px] before:w-full before:rounded-[20px] before:block before:z-[-1] before:bg-prime dark:before:bg-white"
			: ''} {className || ''}"
	>
		{name}
	</a>
	<slot />
</li>
