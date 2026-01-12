// import { error } from '@sveltejs/kit';
import { categories } from '$lib/data/categories';

export function load({ params }) {
	const categoryArray = Object.values(categories)
	const categoryAct = categoryArray.find((category) => category.link === params.category);

	if (!categoryAct) throw error(404);

	return {
		categoryAct
	};
}
