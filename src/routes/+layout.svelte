<script>
    import Header from '$lib/components/header/Header.svelte';
    import Footer from '$lib/components/footer/Footer.svelte';

    import '$lib/assets/styles/app.css';

    import { classList } from 'svelte-body';

    import { posts, categories } from '$lib/stores/store.js';

    import postImage01 from "$lib/assets/images/hero/slide-1.jpg";
    import postImage02 from "$lib/assets/images/hero/slide-2.jpg";
    import postImage03 from "$lib/assets/images/hero/slide-3.jpg";
    import postImage04 from "$lib/assets/images/hero/slide-4.jpg";

    import catImage01 from "$lib/assets/images/categories/01.jpg";
    import catImage02 from "$lib/assets/images/categories/02.jpg";
    import catImage03 from "$lib/assets/images/categories/03.jpg";
    import catImage04 from "$lib/assets/images/categories/04.jpg";

    $: categories.set([
        {id: 0, name: 'Design', image: catImage01},
        {id: 1, name: 'Technology', image: catImage02},
        {id: 2, name: 'Fitness', image: catImage03},
        {id: 3, name: 'Branding', image: catImage04},
    ]);

    $: posts.set([ 
        { 
            id: 0, 
            title: 'Design is as much an act of spacing as an act of marking.', 
            img_url: postImage01, 
            author: 'Meriam Smith', 
            category: 'Design', 
            description: '', 
            date_posted: 'March 20 ,2022'
        },
        { 
            id: 1, 
            title: 'Food is symbolic of love when words are inadequate', 
            img_url: postImage02, 
            author: 'Meriam Smith', 
            category: 'Fitness', 
            description: '', 
            date_posted: 'Fabuary 10 ,2022' 
        },
        { 
            id: 2, 
            title: 'Your genetics load the gun your lifestyle pulls the trigger.', 
            img_url: postImage03, 
            author: 'Meriam Smith', 
            category: 'Branding', 
            description: '', 
            date_posted: 'August 08 ,2022' 
        },
        { 
            id: 3, 
            title: 'Brand yourself for the career you want, not the job you have', 
            img_url: postImage04, 
            author: 'Meriam Smith', 
            category: 'Branding', 
            description: '', 
            date_posted: 'Fabuary 10 ,2022' 
        }
    ]);
</script>

<svelte:head>
    <title>Ordeoo Blog App</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <!-- Rubik Font CDN -->
    <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <!-- Font Awesome Icons CDN -->

    <!-- Line Awesome Icons CDN -->
    <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css">
</svelte:head>

<svelte:body use:classList={"block font-rubik text-base leading-[1.5] bg-white dark:bg-[#101213] text-[#191b1d99] dark:text-[#d7d7d7] font-normal relative"} />

<Header/>
<slot/>
<Footer/>