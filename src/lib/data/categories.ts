import type { Level } from './levels';
import { levels } from './levels';

export type Category = {
	id: string;
	name: string;
	description: string;
	short_description?: string;
	link: string;
	levels?: Level[];
	icon: string;
};

export const categories: Record<string, Category> = {
	cafeteria: {
		id: 'cafeteria',
		name: 'Formation',
		description: 'Apprenez à former et à sensibiliser vos équipes aux bonnes pratiques du numérique responsable.',
		short_description: 'Parcours et ressources pour monter en compétences.',
		link: 'formation',
		levels: [levels.formation_beginner, levels.formation_intermediate, levels.formation_expert],
		icon: '🎓'
	},
	navigation: {
		id: 'navigation',
		name: 'Parcours UX',
		description: 'Conception d’expériences claires et efficaces.',
		link: 'ux-course',
		icon: '🧭'
	},
	communication: {
		id: 'communication',
		name: 'Sensibilisation',
		description: 'Actions et communications pour mobiliser les équipes.',
		link: 'awareness',
		icon: '🔔'
	},
    admin_1: {
		id: 'admin_1',
		name: 'Améliorer l\'impact de mes services numériques',
		description: 'Conception et exploitation de services accessibles et responsables.',
		link: 'improve-digital-services-impact',
		icon: '🖥️'
	},
    admin_2: {
		id: 'admin_2',
		name: 'Achats',
		description: 'Approvisionnement responsable et critères de sélection.',
		link: 'purchases',
		icon: '🛒'
	},
    storage: {
		id: 'storage',
		name: 'Gestion de la fin de vie des équipements',
		description: 'Recyclage, réemploi et réduction des déchets électroniques.',
		link: 'equipment-end-of-life-management',
		icon: '♻️'
	},
    reactor: {
		id: 'reactor',
		name: 'Equipements',
		description: 'Choix durable, maintenance et gestion du parc matériel.',
		link: 'equipment',
		icon: '💻'
	},
    electrical: {
		id: 'electrical',
		name: 'Usages',
		description: 'Analyse des comportements pour améliorer les services.',
		link: 'usages',
		icon: '🔍'
	},
    medbay: {
		id: 'medbay',
		name: 'Accessibilité : conformité',
		description: 'Rendre les services utilisables par le plus grand nombre.',
		link: 'accessibility-compliance',
		icon: '♿️'
	}
};
