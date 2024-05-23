import { error } from '@sveltejs/kit';
import { supabase } from '$lib/supabase/supabaseClient';

export const load = async ({ url, params }) => {
	let current_page = Number(url.searchParams.get('page') || 1);
	let page_size = Number(url.searchParams.get('size') || 1);

	let start = (current_page - 1) * page_size;
	let end = current_page * page_size - 1;

	const category = await supabase
		.from('categories')
		.select('*')
		.eq('slug', params.slug)
		.single();
		
	const posts = await supabase
		.from('posts')
		.select(
			`
				*,
				categories!inner (name),
				authors (*)
			`,
			{ count: 'exact' }
		)
		.filter('categories.name', 'eq', category.data.name)
		.range(start, end);

	if (category) {
		return {
			category: category.data ?? [],
			posts: posts.data ?? [],
			posts_count: posts.count,
			pages_count: Math.ceil(posts.count / page_size),
			current_page,
			page_size
		};
	}

	throw error(404, 'Not Found');
};

/*
const [category, posts] = await Promise.all([
		supabase.from('categories')
		.select('*')
		.eq('slug', params.slug)
		.single(),
		
		supabase.from('posts')
		.select(
			`
			*,
			categories!inner (*),
			authors (*)
		`,
			{ count: 'exact' }
		)
		.filter('categories.name', 'eq', category)
		.range(start, end)
	]);
*/