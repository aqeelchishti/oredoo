<script>
	import Col from '$lib/components/shared/Col.svelte';
    
    import Icon from '@iconify/svelte';

    import searchIcon from '@iconify/icons-la/search';

    export let posts;
</script>

<Col className="basis-1/3 max-w-[33.333333%] relative overflow-visible box-border min-h-[1px]">
    <div class="py-0 static transform-none top-0 after:content-[''] after:table after:clear-both">
        <div class="pb-[30px] pl-[30px] border-l border-solid border-[#E6E7E7] dark:border-[#99999926]">
            <!--search-->
            <div class="py-[30px] px-0 border-b border-[#E6E7E7] dark:border-[#99999926]">
                <div class="mb-5">
                    <h5 class="capitalize font-extrabold">Search</h5>
                </div>
                <div>
                    <form class="flex items-center" action="">
                        <input class="w-full py-[15px] pr-5 pl-[10px] border border-[#E6E7E7] dark:border-[#99999926] focus:ring-0 focus:border-[#E6E7E7] dark:focus:border-[#99999926]" type="search" id="gsearch" name="gsearch" placeholder="Search ....">
                        <a href="search.html" class="block w-[35px] h-[35px] text-center rounded-none -ml-[45px] bg-prime dark:bg-white">
                            <Icon icon={searchIcon} class="leading-[35px] font-[900] text-white dark:text-prime justify-center align-middle" />
                        </a>
                    </form>
                </div>
            </div>

            <!--popular-posts-->
            <div class="py-[30px] px-0 border-b border-[#E6E7E7] dark:border-[#99999926]">
                <div class="mb-5">
                    <h5 class="capitalize font-extrabold">Popular Articles</h5>
                </div>
            
                <ul class="widget-popular-posts">
                    {#each posts as post}
                        <li class="small-post">
                            <div class="small-post-image">
                                <a href="post-single.html">
                                    <img src="assets/img/blog/1.jpg" alt="">
                                    <small class="nb">1</small>
                                </a>
                            </div>
                            <div class="small-post-content">
                                <p>
                                    <!--<a href="post-single.html">Everything is designed. Few things are designed well.</a>-->
                                </p>
                                <small> <span class="slash"></span>3 mounth ago</small>
                            </div>
                        </li>
                    {/each}
                </ul>
            </div>

            <!--newslatter->
            <div class="widget widget-newsletter">
                <h5>Subscribe To Our Newsletter</h5>
                <p>No spam, notifications only about new products, updates.</p>
                <form action="#" class="newslettre-form">
                    <div class="form-flex">
                        <div class="form-group">
                            <input type="email" class="form-control" placeholder="Your Email Adress" required="required">
                        </div>
                        <button class="btn-custom" type="submit">Subscribe now</button>
                    </div>
                </form>
            </div>
            -->

            <!--stay connected
            <div class="widget ">
                <div class="widget-title">
                    <h5>Stay connected</h5>
                </div>
                
                <div class="widget-stay-connected">
                    <div class="list">
                        <div class="item color-facebook">
                            <a href="#"><i class="fab fa-facebook"></i></a>
                            <p>Facebook 12k</p>
                        </div>

                        <div class="item color-instagram">
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <p>instagram 102k</p>
                        </div>

                        <div class="item color-twitter">
                                <a href="#"><i class="fab fa-twitter"></i></a>
                            <p>twitter 22k</p>
                        </div>

                        <div class="item color-youtube">
                            <a href="#"><i class="fab fa-youtube"></i></a>
                            <p>Youtube 120k</p>
                        </div>

                        <div class="item color-dribbble">
                            <a href="#"><i class="fab fa-dribbble"></i></a>
                            <p>dribbble 17k</p> 
                        </div>

                        <div class="item color-pinterest">
                            <a href="#"><i class="fab fa-pinterest"></i></a>
                            <p>pinterest 10k</p> 
                        </div>
                    </div>
                </div>
            </div>
            -->
            
            <!--Ads
            <div class="widget pb-0">
                <div class="widget-ads">
                    <img src="assets/img/ads/ads2.jpg" alt="">
                </div>
            </div>-->
        </div>
    </div>
</Col>