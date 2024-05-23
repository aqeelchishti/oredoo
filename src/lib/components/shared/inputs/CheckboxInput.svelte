<script>
	export let className, name;
	//state = false;
</script>

<!--
	bind:checked={state}
	on:toggle={() => (state = !state)}
-->

<div class="flex relative min-h-[1.5rem]">
	<input
		{name}
		type="checkbox"
		class="my-[5px] mr-[10px] text-blue-600 focus:outline-none focus:border-prime dark:focus:border-white focus:ring-white dark:focus:ring-prime focus:ring-0 transition-[color] duration-[0.3s] delay-0 {className ||
			''}"
		id="checkbox"
	/>
	<label class="inline-block relative mb-0 align-top" for="checkbox">
		<slot />
	</label>
</div>
