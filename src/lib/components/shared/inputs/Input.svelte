<script>
	export let type, placeholder, name, value, className;

	const typeAction = (node) => {
		node.type = type;
	};
</script>

<input
	use:typeAction
	{placeholder}
	{name}
	bind:value
	class="bg-white dark:bg-[#101213] border border-solid rounded-none w-full font-normal leading-[1.5] h-[calc(1.5em+0.75rem+2px)] px-5 py-[25px] text-base text-prime dark:text-[white] inline-block mb-[5px] bg-clip-border focus:outline-none focus:ring-0 {className ||
		''}"
/>
