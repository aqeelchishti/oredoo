<script>
	export let isButtonLink = false,
		disabled = false,
		btnClass = '',
		btnType = '',
		btnLink = '',
		//btnTitle = '',
		//iconBefore = false,
		iconAfter = false,
		iconClass = '',
		icon = '';
</script>

{#if isButtonLink === true}
	<a
		href={btnLink}
		class="relative py-2 px-5 text-[15px] text-white bg-prime hover:text-prime hover:bg-white dark:text-prime dark:bg-white dark:hover:text-white dark:hover:bg-prime inline-flex text-center justify-center font-medium capitalize rounded-none z-[1] border border-solid border-prime dark:border-white cursor-pointer whitespace-nowrap align-middle transition-all duration-[0.5s] delay-0 ease-in-out {btnClass}"
	>
		<!--
		{#if iconBefore === true}
			<span
				class="iconify {icon} text-white dark:text-prime mr-[5px] size-[24px] dark:size-[24px] transition-all duration-[0.3s] ease-in-out {iconClass}"
			></span>
		{/if}
		-->
		<slot />
		{#if iconAfter === true}
			<span
				class="iconify {icon} text-white dark:text-prime ml-[5px] size-[24px] dark:size-[24px] transition-all duration-[0.5s] ease-in-out {iconClass}"
			></span>
		{/if}
	</a>
{:else}
	<button
		on:click
		type={btnType}
		{disabled}
		class="relative py-2 px-5 text-[15px] text-white bg-prime hover:text-prime hover:bg-white dark:text-prime dark:bg-white dark:hover:text-white dark:hover:bg-prime inline-flex text-center justify-center font-medium capitalize rounded-none z-[1] border border-solid border-prime dark:border-white cursor-pointer whitespace-nowrap align-middle transition-all duration-[0.5s] delay-0 ease-in-out {btnClass}"
	>
		<!--
		{#if iconBefore === true}
			<span
				class="iconify {icon} text-white dark:text-prime mr-[5px] size-[24px] dark:size-[24px] transition-all duration-[0.3s] ease-in-out {iconClass}"
			></span>
		{/if}
		-->
		<slot />
		{#if iconAfter === true}
			<span
				class="iconify {icon} text-white dark:text-prime ml-[5px] size-[24px] dark:size-[24px] transition-all duration-[0.5s] ease-in-out {iconClass}"
			></span>
		{/if}
	</button>
{/if}
