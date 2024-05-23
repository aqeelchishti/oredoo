<script>
	import NavItem from '$lib/components/header/nav/NavItem.svelte';
	import SubMenu from '$lib/components/header/nav/SubMenu.svelte';

	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';

	import { showMenu, menus, selected } from '$lib/stores/store.js';

	$: activeUrl = $page.url.pathname;

	$: menus.set([
		{ id: 0, name: 'Home', link: '/' },
		{
			id: 1,
			name: 'Categories',
			link: '',
			subMenu: true,
			menuList: [
				{ id: 0, name: 'Design', link: '/design' },
				{ id: 1, name: 'Technology', link: '/technology' },
				{ id: 2, name: 'Fitness', link: '/fitness' },
				{ id: 3, name: 'Branding', link: '/branding' }
			]
		},
		/*{
			id: 2,
			name: 'Shop',
			link: '',
			subMenu: true,
			menuList: [
				{ id: 0, name: 'Product List', link: '/product-list' },
				{ id: 1, name: 'Prodcut Details', link: '/product-details' },
				{ id: 2, name: 'Cart', link: '/cart' }
			]
		},*/
		{
			id: 3,
			name: 'About',
			link: '',
			subMenu: true,
			menuList: [
				{ id: 0, name: 'Privacy Policy', link: '/privacy-policy' },
				{ id: 1, name: 'Terms & Conditions', link: '/terms-and-conditions' }
			]
		},
		{ id: 4, name: 'Contact', link: '/contact' },
		/*{ id: 5, name: 'Sign Up', link: '/auth/signup' },*/
		{ id: 6, name: 'New Post', link: '/new-post' }
	]);

	$: selectedMenu = $menus[$selected] || '';

	//let act = false;
</script>

<nav class="relative flex flex-wrap items-center justify-between py-[0.5rem] px-[1rem] mobile:!p-0">
	<!--navbar-collapse-->
	<div
		class="!flex basis-auto grow items-center dark:border-[#99999926] mobile:basis-full mobile:bg-white mobile:dark:bg-[#101213] mobile:px-[15px] mobile:pt-[30px] mobile:pb-0 mobile:border-b mobile:border-solid mobile:border-[#E6E7E7] hidden"
	>
		<ul class="flex flex-row mobile:flex-col pl-0 my-0">
			{#each $menus as menu, i}
				{#if menu?.subMenu}
					<NavItem
						name={menu.name}
						link={menu.link}
						on:mouseenter={() => (selected.update(() => i), showMenu.update(() => true))}
						on:mouseleave={() => (selected.update(() => null), showMenu.update(() => false))}
					>
						{#if $showMenu && selectedMenu == menu}
							<ul
								transition:fly={{ y: 28, duration: 200 }}
								class="bg-white dark:bg-[#101213] rounded-none p-5 absolute text-[#212529] text-left bg-clip-padding left-0 z-[1000] min-w-[10rem] mb-0 mx-0 text-base border border-solid border-[#E6E7E7] dark:border-[#99999926] float-none mobile:top-[100%] {$showMenu
									? 'block visible opacity-100'
									: 'hidden invisible opacity-0'} mobile:hidden transition-all duration-[0.3s] delay-0 ease mobile:mt-[0.125rem] mt-2.5"
							>
								{#each selectedMenu?.menuList as item}
									<SubMenu name={item.name} link={item.link} />
								{/each}
							</ul>
						{/if}
					</NavItem>
				{:else}
					<NavItem name={menu.name} link={menu.link} isActive={activeUrl === menu.link} />
				{/if}
			{/each}
		</ul>
	</div>
	<!--/-->
</nav>
