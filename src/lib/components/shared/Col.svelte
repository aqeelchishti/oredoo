<script>
	export let className = '';
</script>

<div class="relative grow-0 shrink-0 w-full px-[15px] {className || ''}">
	<slot />
</div>
