import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { CrewRepository } from '$lib/server/db/crew';

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.user) {
		throw redirect(302, '/login');
	}

	return {
		user: locals.user,
		crew : locals.user.crewId ? await CrewRepository.findById(locals.user.crewId) : ''
	};
};