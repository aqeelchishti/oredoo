<script>
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import Loader from '$lib/components/shared/Loader.svelte';

	import '$lib/styles/app.css';

	// NProgress Loading Bar
	import '$lib/styles/loading-bar.css';
	import NProgress from 'nprogress';

	import { classList } from 'svelte-body';

	import { navigating } from '$app/stores';
	import { goto, invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;
	$: ({ session, supabase } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (!newSession) {
				setTimeout(() => {
					goto('/', { invalidateAll: true });
				});
			}
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
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
	});
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
{#if !isPageLoaded && $navigating}
	<Loader />
{/if}

<Header dataSession={data.session} />

<slot />

<Footer />
