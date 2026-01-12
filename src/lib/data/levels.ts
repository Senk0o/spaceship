export type Level = {
	name: string;
	level: string;
	description: string;
	link: string;
	duration?: number;
};

export const levels: Record<string, Level> = {
	formation_beginner: {
		name: 'Initiation à la formation',
		level: 'beginner',
		description: "Découvrez les bases pour former vos équipes aux bonnes pratiques du numérique responsable.",
		link: 'beginner',
		duration: 5,
	},
	formation_intermediate: {
		name: 'Renforcement des compétences en formation',
		level: 'intermediate',
		description: "Approfondissez vos compétences pour former efficacement vos équipes aux enjeux du numérique responsable.",
		link: 'intermediate',
		duration: 15,
	},
	formation_expert: {
		name: 'Maîtrise de la formation',
		level: 'expert',
		description: "Devenez un expert dans la formation au numérique responsable et guidez vos équipes vers des pratiques durables.",
		link: 'expert',
		duration: 20,
	}
};
