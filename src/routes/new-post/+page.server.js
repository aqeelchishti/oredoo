import { redirect } from '@sveltejs/kit';

export const load = async ({ locals: { safeGetSession } }) => {
	//const next = url.searchParams.get('next') ?? '/new-post';
	const { session, user } = await safeGetSession();

	if (!session && !user) {
		redirect(307, `/auth/login`);
	}
};