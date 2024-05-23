import { error } from '@sveltejs/kit';
import { supabase } from '$lib/supabase/supabaseClient';

export const load = async ({ params }) => {

	const post = await supabase
		.from('posts')
		.select('*, categories (*), authors (*)')
		.eq('slug', params.slug)
		.single();

	if (post) {
		return {
			post: post.data ?? []
		};
	}

	throw error(404, 'Not Found');
};

//const { data } = await supabase.from('posts').select();
	/*const [posts, categories] = await Promise.all([
        supabase.from('posts').select(`
            *,
            categories (*),
            authors (*)
        `),
        supabase.from('categories').select()
    ]);*/

