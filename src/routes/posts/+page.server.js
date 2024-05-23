import { supabase } from '$lib/supabase/supabaseClient';

export const load = async ({ url }) => {
	let current_page = Number(url.searchParams.get('page') || 1);
	let page_size = Number(url.searchParams.get('size') || 1);

	let start = (current_page - 1) * page_size;
	let end = current_page * page_size - 1;

	let posts_query = supabase
		.from('posts')
		.select(
			`
			*,
			categories (*),
			authors (*)
		`,
			{ count: 'exact' }
		)
		.range(start, end);

	const posts = await posts_query;

	return {
		posts: posts.data ?? [],
		posts_count: posts.count,
		pages_count: Math.ceil(posts.count / page_size),
		current_page,
		page_size
	};
}

/*
export const actions = {
	default: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());

		const { change_page_size } = formData;

		const changePageSize = (p_count, c_page, p_size) => {
			if (p_count >= c_page) {
				redirect(303, `/posts?page=${1}&size=${p_size}`);
			} else {
				redirect(303, `/posts?page=${c_page}&size=${p_size}`);
			}
		};

		return {
			change_page_size,
			changePageSize
		};
	}
}
*/