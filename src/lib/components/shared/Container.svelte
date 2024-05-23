<script>
	export let className = '';
</script>

<div class="w-full max-w-[1140px] px-[15px] mx-auto mobile:flex-wrap {className || ''}">
	<slot />
</div>
