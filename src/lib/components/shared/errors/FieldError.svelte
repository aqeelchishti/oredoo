<script>
	export let className;
</script>

<span
	class="flex items-center font-medium tracking-wide text-red-500 text-xs ml-1 {className || ''}"
>
	<slot />
</span>
