<script>
	import Icon from '$lib/components/shared/Icon.svelte';
	import longArrowAltRight from '@iconify/icons-la/long-arrow-alt-right';

	import { dateFormat } from '$lib/utils/dateFormat.js';

	export let post;
</script>

<div
	class="group flex items-center border-b border-solid border-b-[#E6E7E7] transition-all duration-[0.4s] ease-in-out delay-0 py-[30px] px-0"
>
	<div class="flex-auto w-[40%] mr-[30px] overflow-hidden">
		<a href={`/posts/${post.slug}`}>
			<img
				class="border-none align-middle w-full h-[318px] overflow-hidden object-cover object-center group-hover:scale-[1.2] transition-all duration-[0.5s] ease-in-out delay-0"
				src={post.image_url}
				alt=""
			/>
		</a>
	</div>

	<div class="flex-auto w-[60%]">
		<h3>
			<a
				class="bg-size-0-5 group-hover:bg-size-100-5 bg-origin-border bg-left-bottom bg-no-repeat inline text-prime dark:text-white bg-gradient-to-r from-prime from-0% to-prime to-100% dark:from-white dark:to-white transition-[background-size] delay-0 duration-[0.5s] ease-in-out"
				href={`/posts/${post.slug}`}>{post.title}</a
			>
		</h3>
		<ul class="flex items-center my-5 mx-0">
			<li class="mb-0 text-sm text-primeTarns capitalize font-medium">
				<img class="rounded-[50%] w-10 h-10 mr-2.5" src={post.authors.avatar_url} alt="" />
			</li>
			<li
				class="mb-0 text-sm text-primeTarns hover:text-prime dark:text-central dark:hover:text-white capitalize font-medium"
			>
				<a href="author.html">{post.authors.first_name} {post.authors.last_name}</a>
			</li>
			<li class="mb-0 text-sm text-primeTarns group-hover:text-prime capitalize font-medium">
				<a href={`/category/${post.categories.slug}`} class="relative text-sm font-semibold">
					<span
						class="inline-block w-[18px] h-[1px] bg-primeTarns dark:bg-central !my-[4px] !mx-[10px]"
					/>
					{post.categories.name}</a
				>
			</li>
			<li class="mb-0 text-sm text-primeTarns capitalize font-medium">
				<span
					class="inline-block w-[18px] h-[1px] bg-primeTarns dark:bg-central !my-[4px] !mx-[10px]"
				/> {dateFormat(post.created_at)}
				
			</li>
		</ul>
		<div class="mb-5">
			<p>{post.description}</p>
		</div>
		<div>
			<a
				href={`/posts/${post.slug}`}
				class="group/link relative inline-flex text-center cursor-pointer align-middle text-primeTarns dark:text-central group-hover:text-prime dark:group-hover:text-white border-0 font-semibold text-sm capitalize rounded-[20px] transition-all duration-[0.3s] delay-0 ease-in-out"
			>
				Continue Reading <Icon
					icon={longArrowAltRight}
					iconClass="mt-0 ml-[5px] text-2xl group-hover/link:translate-x-3 transition-all duration-[0.5s] delay-0 ease-in-out"
				/>
			</a>
		</div>
	</div>
</div>
