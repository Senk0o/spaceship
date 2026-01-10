export type Category = {
	id: string;
	name: string;
	description: string;
};

export const categories: Record<string, Category> = {
	cafeteria: {
		id: 'cafeteria',
		name: 'titre_catégorie',
		description: 'description_catégorie'
	},
	navigation: {
		id: 'navigation',
		name: 'titre_catégorie',
		description: 'description_catégorie'
	},
	communication: {
		id: 'communication',
		name: 'titre_catégorie',
		description: 'description_catégorie'
	},
    admin_1: {
		id: 'admin_1',
		name: 'titre_catégorie',
		description: 'description_catégorie'
	},
    admin_2: {
		id: 'admin_2',
		name: 'titre_catégorie',
		description: 'description_catégorie'
	},
    storage: {
		id: 'storage',
		name: 'titre_catégorie',
		description: 'description_catégorie'
	},
    reactor: {
		id: 'reactor',
		name: 'titre_catégorie',
		description: 'description_catégorie'
	},
    electrical: {
		id: 'electrical',
		name: 'titre_catégorie',
		description: 'description_catégorie'
	},
    medbay: {
		id: 'medbay',
		name: 'titre_catégorie',
		description: 'description_catégorie'
	}
};
