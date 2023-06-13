//import { posts, postsMeta } from '$lib/stores/store.js';

/*export const load = async ({ fetch, params }) => {
    const page = Number(params.page) || 1;
    const [postsReq, categoriesReq] = await Promise.all([
        fetch(`http://127.0.0.1:1337/api/posts?populate=*&pagination[page]=${page}`),
        fetch('http://127.0.0.1:1337/api/categories?populate=*')
    ]);
    const posts = await postsReq.json();
    const categories = await categoriesReq.json();
    return {
        posts,
        categories
    };
};*/