export interface Project {
	slug: string;
	title: string;
	/** Client / mission ou projet perso */
	kind: "client" | "perso";
	period: string;
	description: string;
	highlights?: string[];
	tags: string[];
	url?: string;
	github?: string;
	image?: string;
}

export interface Service {
	title: string;
	description: string;
	details: string[];
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

export interface TimelineEntry {
	period: string;
	title: string;
	place: string;
	description?: string;
}

export const projects: Project[] = [
	{
		slug: "profil-public",
		title: "Profil Public",
		kind: "client",
		period: "2023 → aujourd'hui",
		description:
			"Plateforme de recrutement du secteur public : site d'offres, sites carrière et ATS pour les collectivités et hôpitaux. Trois ans sur le produit, d'abord en alternance puis en freelance.",
		highlights: [
			"Multidiffusion des offres vers des jobboards partenaires (flux, API, webhooks)",
			"Fonctionnalités ATS : candidatures, droits, statistiques",
			"Génération d'offres d'emploi assistée par IA",
		],
		tags: ["Nuxt 3", "Vue 3", "Strapi 4", "Node.js", "TypeScript", "API / XML"],
		url: "https://profilpublic.fr",
	},
	{
		slug: "cva-tracking",
		title: "CVA Tracking",
		kind: "client",
		period: "2026",
		description:
			"Suivi public des portefeuilles des gérants invités dans C'est Votre Argent (BFM Business). Le back-office est un Google Sheet ; le site le lit à la volée, l'enrichit des cours Yahoo Finance et se revalide à chaque modification.",
		highlights: [
			"Portefeuilles par gérant, fiches valeurs, archive vidéo",
			"Graphiques de cours annotés des points d'entrée et de sortie",
		],
		tags: ["Next.js", "React 19", "Tailwind CSS", "shadcn/ui", "Google Sheets", "Vercel"],
		url: "https://www.cva-tracking.com/",
	},
	{
		slug: "spinnn",
		title: "Spinnn",
		kind: "perso",
		period: "2026",
		description:
			"Application d'entraînement cycliste indoor, façon Zwift maison. Connexion des capteurs en Web Bluetooth, séances structurées et pilotage du home trainer en mode ERG.",
		highlights: [
			"Cardio, puissance, cadence et vitesse en temps réel (D3.js)",
			"Import de séances .ZWO, synchronisation Intervals.icu, export FIT vers Garmin et Strava",
			"Tests E2E Playwright, mode simulation sans matériel",
		],
		tags: ["Vue 3", "Web Bluetooth", "D3.js", "Hono", "Bun", "Docker"],
		url: "https://www.spinnn.app",
		github: "https://github.com/T-PRAT/Spinnn",
	},
	{
		slug: "mytrailplan",
		title: "MyTrailPlan",
		kind: "perso",
		period: "2026",
		description:
			"Analyse de traces GPX pour préparer une course de trail : profil altimétrique coloré par pente, sections courues ou marchées, allure cible et placement des ravitaillements.",
		highlights: [
			"Simulateur d'allure ajustée à la pente (modèle énergétique de Minetti)",
			"Plan de course interactif avec temps par tronçon et nutrition",
			"Graphiques en SVG natif, sauvegarde des projets, version imprimable",
		],
		tags: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "GPX"],
		url: "https://mytrailplan.com/",
	},
	{
		slug: "ferme-mont-blanc",
		title: "Mont Blanc Fermes Pédagogiques",
		kind: "client",
		period: "2026",
		description:
			"Automatisation des réservations d'une association de fermes pédagogiques. Chaque commande HelloAsso arrive par webhook dans un Google Sheet et reconstruit une vue de suivi par semaine et par créneau.",
		highlights: [
			"Configuration éditable par l'association, sans intervention dev",
			"Sans serveur : tout tourne dans le compte Google du client",
		],
		tags: ["Google Apps Script", "Google Sheets", "HelloAsso", "Webhook"],
	},
	{
		slug: "cabanes-pyrenees",
		title: "Cabanes des Pyrénées",
		kind: "perso",
		period: "2024",
		description:
			"Carte interactive des refuges et cabanes des Pyrénées, avec recherche et localisation. Projet final de la formation 3W Academy.",
		tags: ["React", "Hono", "Bun", "Leaflet", "TypeScript"],
		github: "https://github.com/T-PRAT/cabanes_pyrenees",
	},
];

export const services: Service[] = [
	{
		title: "Développement web fullstack",
		description:
			"Renfort sur un produit existant ou développement d'une fonctionnalité de A à Z, du modèle de données à l'interface.",
		details: [
			"Vue, Nuxt, React, Next.js, TypeScript",
			"Node.js, Strapi, Hono, PostgreSQL",
		],
	},
	{
		title: "Intégrations & automatisations",
		description:
			"Connecter vos outils entre eux : API, flux de données, webhooks, synchronisations, tableaux de suivi qui se mettent à jour seuls.",
		details: [
			"Connecteurs et flux XML / JSON",
			"n8n, Google Apps Script, scripts sur mesure",
		],
	},
	{
		title: "IA dans le produit",
		description:
			"Intégrer des modèles de langage dans un outil métier, avec des sorties structurées et un contrôle des coûts.",
		details: [
			"Génération et extraction de contenu, agents",
			"Sorties structurées, appels d'outils, RAG",
		],
	},
];

export const stack: StackCategory[] = [
	{
		label: "Frontend",
		items: [
			{ name: "Vue 3", weight: 3, icon: "siVuedotjs" },
			{ name: "Nuxt 3", weight: 3, icon: "siNuxt" },
			{ name: "TypeScript", weight: 3, icon: "siTypescript" },
			{ name: "React", weight: 3, icon: "siReact" },
			{ name: "Next.js", weight: 2, icon: "siNextdotjs" },
			{ name: "Tailwind CSS", weight: 2, icon: "siTailwindcss" },
			{ name: "shadcn/ui", weight: 1 },
		],
	},
	{
		label: "Backend",
		items: [
			{ name: "Node.js", weight: 3, icon: "siNodedotjs" },
			{ name: "Strapi", weight: 3, icon: "siStrapi" },
			{ name: "Hono", weight: 2, icon: "siHono" },
			{ name: "Bun", weight: 2, icon: "siBun" },
			{ name: "PostgreSQL", weight: 1, icon: "siPostgresql" },
		],
	},
	{
		label: "Infra & DevOps",
		items: [
			{ name: "Docker", weight: 2, icon: "siDocker" },
			{ name: "Git", weight: 2, icon: "siGit" },
			{ name: "Linux", weight: 2, icon: "siLinux" },
			{ name: "Playwright", weight: 1 },
		],
	},
	{
		label: "IA & Automatisation",
		items: [
			{ name: "LLM & Agents", weight: 2, icon: "siClaude" },
			{ name: "n8n", weight: 2, icon: "siN8n" },
			{ name: "Python", weight: 2, icon: "siPython" },
			{ name: "Apps Script", weight: 1, icon: "siGoogleappsscript" },
		],
	},
	{
		label: "Spécialités",
		items: [
			{ name: "API / XML", weight: 2 },
			{ name: "Web Bluetooth", weight: 2 },
			{ name: "D3.js", weight: 1, icon: "siD3" },
			{ name: "Leaflet", weight: 1, icon: "siLeaflet" },
			{ name: "GPX / FIT", weight: 1 },
			{ name: "Extensions Chrome", weight: 1, icon: "siGooglechrome" },
		],
	},
];

export const experience: TimelineEntry[] = [
	{
		period: "2025 →",
		title: "Développeur fullstack freelance",
		place: "Profil Public, CVA Tracking, associations",
		description:
			"Produits web, intégrations, automatisations.",
	},
	{
		period: "2023 – 2024",
		title: "Développeur fullstack en alternance",
		place: "Profil Public",
		description:
			"Nuxt, Strapi, Tailwind CSS.",
	},
];

export const formation: TimelineEntry[] = [
	{
		period: "2023 – 2024",
		title: "Développeur fullstack, RNCP niveau 5",
		place: "3W Academy",
	},
	{
		period: "2020 – 2021",
		title: "Cursus principal",
		place: "École 42 Lyon",
	},
];

export const profile = {
	name: "Titouan Prat",
	title: "Développeur fullstack freelance",
	positioning: "Vue / Nuxt · Node · Intégrations & IA",
	tagline:
		"Je conçois et développe des produits web, du backend aux interfaces, avec un goût pour les intégrations et l'IA. Je construis aussi des outils pour le trail et le vélo.",
	location: "Toulouse",
	availability: "Disponible · Toulouse ou remote",
	// Assemblé côté client dans Contact.astro pour ne pas exposer l'adresse aux scrapers
	emailUser: "titouan.p",
	emailDomain: "hotmail.fr",
	formspree: "https://formspree.io/f/mrpgoeeq",
	linkedin: "https://www.linkedin.com/in/titouan-prat-3672a9220/",
	github: "https://github.com/T-PRAT",
	bio: "Développeur fullstack basé à Toulouse. Depuis 2023 je travaille sur Profil Public, une plateforme de recrutement du secteur public, d'abord en alternance puis en freelance. J'interviens aussi sur d'autres produits web et des automatisations pour des associations. Le reste du temps je code des outils pour mes propres sports : Spinnn pour le vélo indoor, MyTrailPlan pour le trail. En dehors du code : trail, ski-alpinisme et longues traversées en montagne.",
};
