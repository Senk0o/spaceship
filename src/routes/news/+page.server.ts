import { NewsRepository } from '$lib/server/db/news';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    const news = await NewsRepository.getAll()
    return {news}
}