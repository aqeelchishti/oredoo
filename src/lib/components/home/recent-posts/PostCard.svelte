<script>
	import Icon from '$lib/components/shared/Icon.svelte';
	import longArrowAltRight from '@iconify/icons-la/long-arrow-alt-right';

	import { dateFormat } from '$lib/utils/dateFormat.js';

	export let post;
</script>

<div
	class="group py-[30px] px-0 flex items-center border-b border-solid border-[#E6E7E7] dark:border-[#99999926] transition-all duration-[0.4s] delay-0 ease-in-out"
>
	<div class="flex-1 mr-[30px] mb-0 overflow-hidden">
		<a href={`/posts/${post.slug}`}>
			<img
				class="border-none align-middle w-[335px] h-[250px] max-w-full overflow-hidden object-cover object-center group-hover:scale-[1.2] transition-all duration-[0.5s] delay-0 ease-in-out"
				src={post.image_url}
				alt=""
			/>
		</a>
	</div>
	<div class="flex-1 mr-[30px]">
		<ul class="flex items-center my-0">
			<li
				class="mb-0 text-[14px] text-[#191b1d99] dark:text-central group-hover:text-prime dark:group-hover:text-white capitalize font-semibold"
			>
				<a href="/" class="relative">{post.categories.name}</a>
			</li>
			<li class="mb-0 text-[14px] text-[#191b1d99] dark:text-central capitalize font-medium">
				<span
					class="inline-block w-[18px] h-[1px] bg-[#191b1d99] dark:bg-central !my-[4px] !mx-[10px]"
				/>
				{dateFormat(post.created_at)}
			</li>
		</ul>
		<h5 class="my-[20px] mx-0">
			<a
				href={`/posts/${post.slug}`}
				class="bg-size-0-5 group-hover:bg-size-100-5 bg-origin-border bg-left-bottom bg-no-repeat inline text-prime dark:text-white bg-gradient-to-r from-prime from-0% to-prime to-100% dark:from-white dark:to-white transition-[background-size] delay-0 duration-[0.5s] ease-in-out"
				>{post.title}</a
			>
		</h5>

		<div>
			<a
				href={`/posts/${post.slug}`}
				class="group/link relative inline-flex text-center cursor-pointer align-middle text-[#191b1d99] dark:text-central group-hover:text-prime dark:group-hover:text-[#ffffff] border-0 font-semibold text-sm capitalize rounded-[20px] transition-all duration-[0.3s] delay-0 ease-in-out"
			>
				Continue Reading <Icon
					icon={longArrowAltRight}
					iconClass="mt-0 ml-[5px] text-2xl group-hover/link:translate-x-3 transition-all duration-[0.5s] delay-0 ease-in-out"
				/>
			</a>
		</div>
	</div>
</div>
