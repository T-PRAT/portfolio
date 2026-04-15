export interface Project {
	slug: string;
	title: string;
	description: string;
	tags: string[];
	url?: string;
	github?: string;
	image?: string;
}

export interface StackItem {
	name: string;
	weight: 1 | 2 | 3;
	icon?: string; // simple-icons key (e.g. "siReact")
}

export interface StackCategory {
	label: string;
	items: StackItem[];
}

export const projects: Project[] = [
	{
		slug: "profil-public",
		title: "Profil Public",
		description:
			"Plateforme SaaS ATS de recrutement. Gestion des offres, candidatures et suivi RH pour le marché français.",
		tags: ["Nuxt 3", "Vue 3", "Strapi", "TypeScript", "Docker"],
		url: "https://profilpublic.fr",
	},
	{
		slug: "cva-tracking",
		title: "CVA Tracking",
		description:
			"Dashboard SaaS de veille médiatique financière avec agrégation multi-source et synchronisation Google Sheets.",
		tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
		url: "https://www.cva-tracking.com/",
	},
	{
		slug: "spinnn",
		title: "Spinnn",
		description:
			"Application d'entraînement cycliste en temps réel. Connexion de capteurs Bluetooth (cardio, puissance, cadence) et visualisation D3.js.",
		tags: ["Vue 3", "Web Bluetooth API", "D3.js", "TypeScript", "Docker"],
		url: "https://www.spinnn.app",
		github: "https://github.com/T-PRAT/Spinnn",
	},
	{
		slug: "mytrailplan",
		title: "MyTrailPlan",
		description:
			"Outil d'analyse de traces GPX pour le trail running. Import, visualisation du profil et planification d'effort.",
		tags: ["React", "TypeScript", "Tailwind CSS", "GPX"],
		url: "https://mytrailplan.com/",
		github: "https://github.com/T-PRAT/mytrailplan",
	},
	{
		slug: "cabanes-pyrenees",
		title: "Cabanes des Pyrénées",
		description:
			"Application cartographique listant les refuges et cabanes des Pyrénées, avec recherche et localisation.",
		tags: ["React", "Hono", "Bun", "Leaflet", "TypeScript"],
		github: "https://github.com/T-PRAT/cabanes_pyrenees",
	},
];

export const stack: StackCategory[] = [
	{
		label: "Frontend",
		items: [
			{ name: "React", weight: 3, icon: "siReact" },
			{ name: "Next.js", weight: 3, icon: "siNextdotjs" },
			{ name: "Vue 3", weight: 3, icon: "siVuedotjs" },
			{ name: "Nuxt 3", weight: 3, icon: "siNuxt" },
			{ name: "TypeScript", weight: 3, icon: "siTypescript" },
			{ name: "Tailwind CSS", weight: 2, icon: "siTailwindcss" },
			{ name: "shadcn/ui", weight: 1 },
		],
	},
	{
		label: "Backend",
		items: [
			{ name: "Node.js", weight: 3, icon: "siNodedotjs" },
			{ name: "PostgreSQL", weight: 3, icon: "siPostgresql" },
			{ name: "Hono", weight: 2, icon: "siHono" },
			{ name: "Supabase", weight: 2, icon: "siSupabase" },
			{ name: "Strapi", weight: 1, icon: "siStrapi" },
		],
	},
	{
		label: "Infra & DevOps",
		items: [
			{ name: "Docker", weight: 2, icon: "siDocker" },
			{ name: "Git", weight: 2, icon: "siGit" },
			{ name: "Linux", weight: 2, icon: "siLinux" },
		],
	},
	{
		label: "AI & Automatisation",
		items: [
			{ name: "n8n", weight: 2, icon: "siN8n" },
			{ name: "Python", weight: 2, icon: "siPython" },
			{ name: "RAG", weight: 1 },
			{ name: "Playwright", weight: 1 },
		],
	},
	{
		label: "Spécialités",
		items: [
			{ name: "Leaflet", weight: 2, icon: "siLeaflet" },
			{ name: "Web Bluetooth", weight: 2 },
			{ name: "Extensions Chrome/Firefox", weight: 1, icon: "siGooglechrome" },
			{ name: "GPX", weight: 1 },
		],
	},
];

export const profile = {
	name: "Titouan Prat",
	title: "Développeur Fullstack Freelance",
	tagline:
		"Je conçois et développe des produits web — du backend robuste aux interfaces soignées.",
	location: "Toulouse",
	email: "contact@tprat.fr",
	linkedin: "https://www.linkedin.com/in/titouan-prat-3672a9220/",
	github: "https://github.com/titouanprat",
	bio: "Développeur fullstack freelance basé à Toulouse, je travaille sur des produits web de A à Z. Formé à l'École 42 Lyon (C, algorithmique, Unix) puis en alternance à la 3W Academy (RNCP niveau 5), j'interviens aussi bien sur l'architecture backend que sur des interfaces pensées pour les utilisateurs. En dehors du code : trail, vélo et randonnées en montagne.",
	formation: [
		{
			school: "3W Academy",
			diploma: "Développeur web (alternance)",
			year: "2023",
		},
		{
			school: "École 42 Lyon",
			diploma: "Piscine + projets système & web",
			year: "2021",
		},
	],
};
