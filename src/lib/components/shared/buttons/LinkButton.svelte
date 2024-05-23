<script>
	export let link, btnClass;
</script>

<a
	href={link}
	class="relative text-white bg-prime hover:text-prime hover:bg-white dark:text-prime dark:bg-white dark:hover:text-white dark:hover:bg-prime inline-flex text-center justify-center font-medium capitalize rounded-none z-[1] border border-solid border-prime dark:border-white cursor-pointer whitespace-nowrap align-middle transition-all duration-[0.5s] delay-0 ease-in-out {btnClass ||
		''}"
>
	<slot />
</a>
