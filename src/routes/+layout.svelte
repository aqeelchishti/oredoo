<script>
	//import EmailConfirmMessageBar from '$lib/components/header/EmailConfirmMessageBar.svelte';
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import Loading from '$lib/components/shared/Loading.svelte';

	import '$lib/styles/app.css';

	// NProgress Loading Bar
	import '$lib/styles/loading-bar.css';
	import NProgress from 'nprogress';

	import { navigating } from '$app/stores';

	import { classList } from 'svelte-body';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { redirect } from '@sveltejs/kit';
	
	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (event === 'PASSWORD_RECOVERY') {
				throw redirect(302, '/auth/callback?next=/auth/reset_password');
			} else {
				if (_session?.expires_at !== session?.expires_at) {
					invalidate('supabase:auth');
				}
			}
		});
		
		//console.log(data.session);
		//console.log(session);
		//console.log(supabase.auth.getUser().data.user);

		return () => subscription.unsubscribe();
	});

	NProgress.configure({
		minimum: 0.2,
		showSpinner: false,
		speed: 50,
		trickleSpeed: 100,
		easing: 'ease'
	});

	$: {
		if ($navigating) {
			NProgress.start();
		} else {
			NProgress.done();
		}
	}

	let isPageLoaded = false;

	onMount(() => {
		isPageLoaded = true;
	})
</script>

<svelte:head>
	<title>Oredoo - Technology Blog App</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<!-- Rubik Font CDN -->
	<link
		href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap"
		rel="stylesheet"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap"
		rel="stylesheet"
	/>
	<!-- Font Awesome Icons CDN -->

	<!-- Line Awesome Icons CDN -->
	<link
		rel="stylesheet"
		href="https://maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css"
	/>
</svelte:head>

<svelte:body
	use:classList={'block font-rubik text-base leading-[1.5] bg-white dark:bg-[#101213] text-[#191b1d99] dark:text-[#d7d7d7] font-normal relative'}
/>

<!--Loading-->
{#if !isPageLoaded}
	<Loading />
{/if}

<Header className={'top-0'} data_session={data.session}/>

<slot />

<Footer />