<script>
	export let isButtonLink = false,
		disabled = false,
		btnClass = '',
		btnType = '',
		btnLink = '',
		iconClass = '',
		icon;
</script>

{#if isButtonLink === true}
	<a
		href={btnLink}
		class="flex p-[8px] text-center justify-center content-center cursor-pointer {btnClass}"
	>
		<span
			class="iconify {icon} text-prime dark:text-white size-[20px] dark:size-[20px] transition-all duration-[0.3s] ease-in-out {iconClass}"
		></span>
	</a>
{:else}
	<button
		on:click
		type={btnType}
		{disabled}
		class="flex p-[8px] text-center justify-center content-center cursor-pointer {btnClass}"
	>
		<span
			class="iconify {icon} text-prime dark:text-white size-[20px] dark:size-[20px] transition-all duration-[0.3s] ease-in-out {iconClass}"
		></span>
	</button>
{/if}
