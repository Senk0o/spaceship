import { CrewRepository } from '$lib/server/db/crew';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.user) {
		throw redirect(302, '/login');
	}

	const crew = await CrewRepository.findById(locals.user.crewId)

	return {
		crew
	};
};