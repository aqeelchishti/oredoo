<script>
	import Container from '$lib/components/shared/Container.svelte';
	import Logo from '$lib/components/header/Logo.svelte';
	import Nav from '$lib/components/header/nav/Nav.svelte';

	import Button from '$lib/components/shared/buttons/Button.svelte';
	import LinkButton from '$lib/components/shared/buttons/LinkButton.svelte';
	import IconButton from '$lib/components/shared/buttons/IconButton.svelte';

	import ThemeSwitch from '$lib/components/header/ThemeSwitch.svelte';

	import sunIcon from '@iconify/icons-la/sun';
	import moonIcon from '@iconify/icons-la/moon';
	import searchIcon from '@iconify/icons-la/search';
	import barsIcon from '@iconify/icons-la/bars';

	import { slide } from 'svelte/transition';
	import { enhance } from '$app/forms';

	import oredooLogoDark from '$lib/assets/images/logo-dark.png';
	import oredooLogoLight from '$lib/assets/images/logo-light.png';

	let isOpenMobileNav = false;

	export let className, data_session;
</script>

<header
	class="h-[85px] bg-white dark:bg-[#101213] border-b border-solid border-[#E6E7E7] dark:border-[#99999926] fixed right-0 left-0 z-[1030] block flex-row flex-nowrap justify-start mobile:flex-col mobile:flex-wrap mobile:justify-center {className ||
		''}"
>
	<Container>
		<div class="flex h-[85px] justify-center items-center">
			<Logo logoDark={oredooLogoDark} logoLight={oredooLogoLight} />
			<div
				transition:slide
				class="{isOpenMobileNav
					? ''
					: 'mobile:hidden'} !ml-auto !mr-auto mobile:bg-white mobile:absolute mobile:top-[85px] mobile:w-[100%] mobile:left-0 mobile:right-0"
			>
				<Nav />
			</div>
			<!--header-right-->
			<div class="items-center flex ml-auto">
				<!--theme-switch-->
				<ThemeSwitch
					iconLight={moonIcon}
					iconDark={sunIcon}
					iconClass="text-prime dark:text-white bg-transparent w-[20px] h-[20px] text-xl leading-[20px]"
					btnClass="w-[35px] h-[35px] p-[8px] inline-block text-center cursor-pointer"
				/>

				<!--search-icon-->
				<IconButton
					icon={searchIcon}
					iconClass="text-xl leading-[35px] text-prime dark:text-white"
					btnClass="w-[35px] h-[35px] rounded-[20px] mx-[10px] p-[8px] text-center inline-block cursor-pointer text-prime transition-all delay-0 ease-in-out"
				/>

				{#if !data_session}
					<!--button-get-started-->
					<LinkButton link="auth/signup" btnClass="px-[20px] py-[0px] text-[15px] leading-[38px]"
						>Get Started</LinkButton
					>
				{:else}
					<!--button-logout-->
					<form action="/logout" method="POST" use:enhance>
						<Button btnType="submit" btnClass="px-[20px] py-[0px] text-[15px] leading-[38px]"
							>Logout</Button
						>
					</form>
				{/if}
			</div>
			<!--navbar-toggler-->
			<IconButton
				on:click={() => (isOpenMobileNav = !isOpenMobileNav)}
				icon={barsIcon}
				iconClass="text-xl leading-[35px] text-prime dark:text-white"
				btnClass="relative w-[35px] h-[35px] ml-[15px] p-[7px] hidden text-center mobile:inline-block cursor-pointer text-prime"
			/>
			<!--/-->
		</div>
	</Container>
</header>