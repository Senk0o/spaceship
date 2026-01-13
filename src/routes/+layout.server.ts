import { NewsRepository } from "$lib/server/db/news";
import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async ({ locals }) => {  
  const latest_news = await NewsRepository.findLatest(3)
  return {
    user: locals.user,
    news: latest_news
  };
}
