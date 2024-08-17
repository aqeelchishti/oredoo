<script>
	import Container from '$lib/components/shared/Container.svelte';
	import Logo from '$lib/components/header/Logo.svelte';
	import Nav from '$lib/components/header/nav/Nav.svelte';

	import Button from '$lib/components/shared/buttons/Button.svelte';
	import IconButton from '$lib/components/shared/buttons/IconButton.svelte';

	import { slide } from 'svelte/transition';
	import { enhance } from '$app/forms';

	import oredooLogoDark from '$lib/assets/images/logo-dark.png';
	import oredooLogoLight from '$lib/assets/images/logo-light.png';

	export let className, dataSession;

	let isOpenMobileNav = false;

	let isDark = false;

	function handleToggleTheme() {
		isDark = !isDark;

		isDark
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}
</script>

<header
	class="h-[85px] bg-white top-0 dark:bg-[#101213] border-b border-solid border-[#E6E7E7] dark:border-[#99999926] fixed right-0 left-0 z-[1030] block flex-row flex-nowrap justify-start mobile:flex-col mobile:flex-wrap mobile:justify-center {className ||
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
			<div class="flex items-center gap-3 ml-auto">
				<!--theme-switcher-->
				<IconButton on:click={handleToggleTheme} icon={isDark === true ? 'la--moon' : 'la--sun'} />

				<!--search-icon-->
				<IconButton icon="la--search" iconClass="text-xl" />

				{#if !dataSession}
					<!--button-get-started-->
					<Button isButtonLink={true} btnLink="/auth/signup">Get Started</Button>
				{:else}
					<!--button-logout-->
					<form action="/logout" method="POST" use:enhance>
						<Button btnType="submit" btnLink="/auth/signup">Logout</Button>
					</form>
				{/if}
			</div>
			<!--mobile-navbar-toggler-->
			<IconButton
				on:click={() => (isOpenMobileNav = !isOpenMobileNav)}
				icon="la--bars"
				iconClass="text-xl leading-[35px] text-prime dark:text-white"
				btnClass="relative w-[35px] h-[35px] ml-[15px] p-[7px] hidden text-center mobile:inline-block cursor-pointer text-prime"
			/>
		</div>
	</Container>
</header>
