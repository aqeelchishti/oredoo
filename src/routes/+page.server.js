import { supabase } from '$lib/supabase/supabaseClient';

export const load = async () => {
	const [posts, categories] = await Promise.all([
		supabase.from('posts').select(
			`
					*,
					categories (*),
					authors (*)
				`
		),
		supabase.from('categories').select()
	]);
	return {
		posts: posts.data ?? [],
		categories: categories.data ?? []
	};
};
