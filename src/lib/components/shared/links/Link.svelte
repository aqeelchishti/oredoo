<script>
	export let href, linkClass;
</script>

<a
	{href}
	class="text-prime dark:text-white ml-auto font-normal no-underline hover:underline {linkClass ||
		''}"
>
	<slot />
</a>
