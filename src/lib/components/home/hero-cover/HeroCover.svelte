<script>
	import Row from '$lib/components/shared/Row.svelte';
    import Col from "$lib/components/shared/Col.svelte";
	import Container from "$lib/components/shared/Container.svelte";

    import Icon from '$lib/components/shared/Icon.svelte';
	import longArrowAltRight from '@iconify/icons-la/long-arrow-alt-right';

    import { dateFormat } from '$lib/utils/dateFormat.js';

    export let posts;

    $: post = posts[posts.length - 1];
    $: console.log(posts);
    $: console.log(post);
</script>

<section class="group relative overflow-hidden bg-[#F1F1F1] dark:bg-[#1B1B1B] h-[645px] mt-[85px] mb-0 p-0">
        <div class="absolute bg-cover bg-center right-0 top-0 bottom-0 left-auto w-[50%] h-[645px] overflow-hidden p-[50px] z-[2]" style="background-image: url({post.image_url})"> </div>
        <Container>
            <div class="flex items-center h-[645px] z-[9999]">
                <Row>
                    <Col className="max-w-[50%] basis-1/2">
                        <div>
                            <h2 class="leading-[1.4]">
                                <a class="bg-size-0-5 group-hover:bg-size-100-5 bg-origin-border bg-left-bottom bg-no-repeat inline text-prime dark:text-white bg-gradient-to-r from-prime dark:from-white from-0% to-prime dark:to-white to-100% transition-[background-size] delay-0 duration-[0.5s] ease-in-out" href={`/posts/${post.slug}`}>{post.title}</a>
                            </h2>  
                            <ul class="flex items-center py-[30px] px-0">
                                <li class="mb-0 text-sm text-primeTarns dark:text-central capitalize font-medium">
                                    <img class="rounded-[50%] w-10 h-10 mr-2.5" src={post.authors.avatar_url} alt="">
                                </li>
                                <li class="mb-0 text-sm text-prime dark:text-central capitalize font-medium"> 
                                    <a href="author.html">{post.authors.first_name} {post.authors.last_name}</a>
                                </li>
                                <li class="mb-0 text-sm text-primeTarns group-hover:text-prime dark:text-central dark:hover:text-white dark:group-hover:text-white capitalize font-medium">
                                    <a href={`/category/${post.categories.slug}`} class="relative text-base font-semibold">
                                        <span 
                                            class="inline-block w-[18px] h-[1.5px] bg-primeTarns dark:bg-central !my-[4px] !mx-[10px]" 
                                        /> {post.categories.name}
                                    </a>
                                </li>
                                <li class="mb-0 text-sm text-prime dark:text-central capitalize font-medium">
                                    <span 
                                        class="inline-block w-[18px] h-[1px] bg-primeTarns dark:bg-central !my-[4px] !mx-[10px]" 
                                    /> {dateFormat(post.created_at)}
                                </li>
                            </ul>
                            <div class="mb-[50px]">
                                <p class="text-primeTarns dark:text-central">{post.description}</p>
                            </div>
                            <div>
                                <a href={`/posts/${post.slug}`} class="group/link relative inline-flex text-center align-middle whitespace-nowrap cursor-pointer leading-6 text-white bg-prime group-hover:text-prime group-hover:bg-[#F1F1F1] dark:text-prime dark:bg-white dark:group-hover:text-white dark:group-hover:bg-[#1B1B1B] text-base font-medium capitalize rounded-none z-[1] py-2 px-5 border border-solid border-prime dark:border-white transition-all duration-[0.3s] delay-0 ease-in-out">Read More
                                    <Icon
                                        icon={longArrowAltRight}
                                        iconClass="mt-0 ml-[5px] text-2xl group-hover/link:translate-x-3 transition-all duration-[0.5s] delay-0 ease-in-out"
                                    />
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
</section>