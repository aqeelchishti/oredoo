<script>
	import Container from '$lib/components/shared/Container.svelte';
	import Row from '$lib/components/shared/Row.svelte';
	import Col from '$lib/components/shared/Col.svelte';
	import PostMetaLi from '$lib/components/shared/list-items/PostMetaLi.svelte';

	import { dateFormat } from '$lib/utils/dateFormat.js';

	export let data;

	$: post = data.post;

	console.log(post);
</script>

<section class="block h-auto mt-[85px] mb-[50px] !pt-0">
	<div class="mb-[30px]">
		<img
			class="max-w-full w-full h-[700px] overflow-hidden object-cover object-center align-middle border-none"
			src={post.image_url}
			alt=""
		/>
	</div>

	<!--style="position: relative; overflow: visible; box-sizing: border-box; min-height: 1px;"-->
	<Container>
		<Row>
			<Col className="basis-full max-w-full">
				<div class="py-0 px-[50px]">
					<div class="mb-[30px]">
						<h2>{post.title}</h2>
						<ul class="flex items-center mt-5 mb-0">
							<PostMetaLi>
								<img
									class="rounded-[50%] w-10 h-10 mr-2.5 max-w-full align-middle border-none"
									src={post.authors.avatar_url}
									alt=""
								/>
							</PostMetaLi>
							<PostMetaLi>
								<a class="hover:text-prime dark:hover:text-white" href="/"
									>{post.authors.first_name} {post.authors.last_name}</a
								>
							</PostMetaLi>
							<PostMetaLi>
								<a href="/" class="relative font-semibold hover:text-prime dark:hover:text-white">
									<span class="inline-block w-[18px] h-[1px] bg-[#191b1d99] !my-1 !mx-2.5" />
									{post.categories.name}</a
								>
							</PostMetaLi>
							<PostMetaLi>
								<span class="inline-block w-[18px] h-[1px] bg-[#191b1d99] !my-1 !mx-2.5" />
								{dateFormat(post.created_at)}
							</PostMetaLi>
						</ul>
					</div>

					<!--post-single-content->
					<div class="pb-[30px]">
						<p>
							Its sometimes her behaviour are contented. Do listening am eagerness oh objection
							collected. Together gay feelings continue juvenile had off Unknown may service subject
							her letters one bed. Child years noise ye in forty. Loud in this in both hold. My
							entrance me is disposal bachelor remember relation.
						</p>
						<div class="image-groupe">
							<div class="image">
								<img src="assets/img/blog/25.jpg" alt="" />
							</div>
							<div class="image">
								<img src="assets/img/blog/21.jpg" alt="" />
							</div>
						</div>

						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
							dolor Unknown may service in reprehenderit in voluptate velit esse cillum dolore eu
							fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Lorem ipsum
							dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
							ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor Unknown
							may service in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
							pariatur. Excepteur sint occaecat cupidatat non proident.
						</p>

						<div class="quote">
							<div>
								<i class="las la-quote-left" />
							</div>
							<div>
								<p>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam corrupti
									voluptatum, tenetur tempore suscipit veniam molestiae exercitationem, praesentium
									ea molestias doloremque alias voluptatibus fuga quibusdam placeat aspernatur,
									harum blanditiis iure.
								</p>
								<small>Henry David Thoreau.</small>
							</div>
						</div>

						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
							dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
							Excepteur sint occaecat cupidatat non proident.
						</p>
						<h4>Leave it better than you found it</h4>

						<p>
							Oh acceptance apartments up sympathize astonished delightful. Waiting him new lasting
							towards. Continuing melancholy especially so to. Me unpleasing impossible in
							attachment announcing so astonished. What ask leaf may nor upon door. Tended remain my
							do stairs. Oh smiling amiable am so visited cordial in offices hearted.
						</p>
						<div class="image-groupe">
							<div class="image">
								<img src="assets/img/blog/13.jpg" alt="" />
							</div>
							<div class="image">
								<img src="assets/img/blog/3.jpg" alt="" />
							</div>
							<div class="image">
								<img src="assets/img/blog/11.jpg" alt="" />
							</div>
						</div>

						<p>
							Oh acceptance apartments up sympathize astonished delightful. Waiting him new lasting
							towards. Continuing melancholy especially so to. Me unpleasing impossible in
							attachment announcing so astonished. What ask leaf may nor upon door. Tended remain my
							do stairs. Oh smiling amiable am so visited cordial in offices hearted. Oh acceptance
							apartments up sympathize astonished delightful. Waiting him new lasting towards.
							Continuing melancholy especially so to. Me unpleasing impossible in attachment
							announcing so astonished. What ask leaf may nor upon door. Tended remain my do stairs.
							Oh smiling amiable am so visited cordial in offices hearted. Waiting him new lasting
							towards. Continuing melancholy especially so to. Me unpleasing impossible in
							attachment announcing so astonished. What ask leaf may nor upon door. Tended remain my
							do stairs. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
							dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
							in culpa qui officia deserunt mollit anim id est laborum.
						</p>

						<ul class="list">
							<li>Digital design is like painting, except the paint never dries.</li>
							<li>Creativity is only as obscure as your reference</li>
							<li>Whitespace is like air: it is necessary for design to breathe.</li>
							<li>You don’t have to be ‘a creative’ to be creative.</li>
							<li>The best way to predict the future is to create it</li>
						</ul>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
							dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
							dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						</p>
					</div>-->

					<!--post-single-bottom->
					<div class="post-single-bottom">
						<div class="tags">
							<p>Tags:</p>
							<ul class="list-inline">
								<li>
									<a href="blog-layout-2.html">brading</a>
								</li>
								<li>
									<a href="blog-layout-2.html">marketing</a>
								</li>
								<li>
									<a href="blog-layout-3.html">tips</a>
								</li>
								<li>
									<a href="blog-layout-4.html">design</a>
								</li>
								<li>
									<a href="blog-layout-5.html">business </a>
								</li>
							</ul>
						</div>
						<div class="social-media">
							<p>Share on :</p>
							<ul class="list-inline">
								<li>
									<a href="#">
										<i class="fab fa-facebook" />
									</a>
								</li>
								<li>
									<a href="#">
										<i class="fab fa-instagram" />
									</a>
								</li>
								<li>
									<a href="#">
										<i class="fab fa-twitter" />
									</a>
								</li>
								<li>
									<a href="#">
										<i class="fab fa-youtube" />
									</a>
								</li>
								<li>
									<a href="#">
										<i class="fab fa-pinterest" />
									</a>
								</li>
							</ul>
						</div>
					</div>

					<!-post-single-author->
					<div class="post-single-author">
						<div class="authors-info">
							<div class="image">
								<a href="author.html" class="image">
									<img src="assets/img/author/1.jpg" alt="" />
								</a>
							</div>
							<div class="content">
								<h4>sarah smith</h4>
								<p>
									Etiam vitae dapibus rhoncus. Eget etiam aenean nisi montes felis pretium donec
									veni. Pede vidi condimentum et aenean hendrerit. Quis sem justo nisi varius.
								</p>
								<div class="social-media">
									<ul class="list-inline">
										<li>
											<a href="#">
												<i class="fab fa-facebook" />
											</a>
										</li>
										<li>
											<a href="#">
												<i class="fab fa-instagram" />
											</a>
										</li>
										<li>
											<a href="#">
												<i class="fab fa-twitter" />
											</a>
										</li>
										<li>
											<a href="#">
												<i class="fab fa-youtube" />
											</a>
										</li>
										<li>
											<a href="#">
												<i class="fab fa-pinterest" />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<!-post-single-Related posts->
					<div class="post-single-next-previous">
						<div class="row">
							<!-prevvious post->
							<div class="col-md-6">
								<div class="small-post">
									<div class="small-post-image">
										<a href="post-single.html">
											<img src="assets/img/blog/1.jpg" alt="..." />
										</a>
									</div>

									<div class="small-post-content">
										<small>
											<a href="post-single.html">
												<i class="las la-arrow-left" />Previous post</a
											></small
										>

										<p>
											<a href="post-single.html"
												>You can’t build a reputation on what you are going to do.</a
											>
										</p>
									</div>
								</div>
							</div>
							<!-/->

							<!-next post->
							<div class="col-md-6">
								<div class="small-post">
									<div class="small-post-image">
										<a href="post-single.html">
											<img src="assets/img/blog/2.jpg" alt="..." />
										</a>
									</div>

									<div class="small-post-content">
										<small>
											<a href="post-single.html">Next post <i class="las la-arrow-right" /></a>
										</small>
										<p>
											<a href="post-single.html"
												>Brand yourself for the career you want, not the job you have</a
											>
										</p>
									</div>
								</div>
							</div>
							<!-/->
						</div>
					</div>
					<!-post-single-Ads->
					<div class="post-single-ads">
						<div class="ads">
							<img src="assets/img/ads/ads.jpg" alt="" aijelb359="" />
						</div>
					</div>

					<!-post-single-comments->
					<div class="post-single-comments">
						<!-Comments->
						<h4>3 Comments</h4>
						<ul class="comments">
							<!-comment1->
							<li class="comment-item pt-0">
								<img src="assets/img/other/user1.jpg" alt="" />
								<div class="content">
									<div class="meta">
										<ul class="list-inline">
											<li><a href="#">Nirmaine Nicole</a></li>
											<li class="slash" />
											<li>3 Months Ago</li>
										</ul>
									</div>
									<p>
										Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus at
										doloremque adipisci eum placeat quod non fugiat aliquid sit similique!
									</p>
									<a href="#" class="btn-reply"><i class="las la-reply" /> Reply</a>
								</div>
							</li>
							
						</ul>
						<!-Leave-comments->
						<div class="comments-form">
							<h4>Leave a Reply</h4>
							<!-form->
							<form class="form" action="#" method="POST" id="main_contact_form">
								<p>Your email adress will not be published ,Requied fileds are marked*.</p>
								<div class="alert alert-success contact_msg" style="display: none" role="alert">
									Your message was sent successfully.
								</div>
								<div class="row">
									<div class="col-md-6">
										<div class="form-group">
											<input
												type="text"
												name="name"
												id="name"
												class="form-control"
												placeholder="Name*"
												required="required"
											/>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<input
												type="email"
												name="email"
												id="email"
												class="form-control"
												placeholder="Email*"
												required="required"
											/>
										</div>
									</div>
									<div class="col-md-12">
										<div class="form-group">
											<textarea
												name="message"
												id="message"
												cols="30"
												rows="5"
												class="form-control"
												placeholder="Message*"
												required="required"
											/>
										</div>
									</div>

									<div class="col-lg-12">
										<div class="mb-20">
											<input name="name" type="checkbox" value="1" required="required" />
											<label for="name"
												><span
													>save my name , email and website in this browser for the next time I
													comment.</span
												></label
											>
										</div>

										<button type="submit" name="submit" class="btn-custom"> Send Comment </button>
									</div>
								</div>
							</form>
							<!-/->
						</div>
					</div>-->
				</div>
			</Col>
		</Row>
	</Container>
</section>
