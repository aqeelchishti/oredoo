<script>
	export let className;
</script>

<li
	class="capitalize mb-0 text-sm font-medium text-[#191b1d99] dark:text-[#d7d7d7] {className || ''}"
>
	<slot />
</li>
