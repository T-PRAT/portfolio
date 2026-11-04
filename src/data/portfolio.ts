import type { ImageMetadata } from "astro";
import profilPublicImage from "../assets/projects/profil-public.webp";
import cvaTrackingPortefeuilleImage from "../assets/projects/cva-tracking-portefeuille.webp";
import cvaTrackingArticlesImage from "../assets/projects/cva-tracking-articles.webp";
import spinnnAccueilImage from "../assets/projects/spinnn-accueil.webp";
import spinnnGuideImage from "../assets/projects/spinnn-guide.webp";
import spinnnImage from "../assets/projects/spinnn.webp";
import mytrailplanImage from "../assets/projects/mytrailplan.webp";

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
	/** Captures placées dans src/assets/projects/, la première est affichée d'abord */
	images?: { src: ImageMetadata; alt: string }[];
	/** Libellé affiché à la place de « Mission client » / « Projet perso » */
	kindLabel?: string;
	/** Précision affichée dans la carte */
	note?: string;
	/** Page détaillée du projet */
	caseUrl?: string;
	/** Libellé du lien vers la page détaillée (par défaut « Mon rôle dans le projet ») */
	caseLabel?: string;
}

export interface Service {
	title: string;
	description: string;
	details: string[];
	proof: string;
	proofUrl: string;
}

export interface TimelineEntry {
	period: string;
	title: string;
	place: string;
	description?: string;
	/** Détail affiché sur le CV */
	details?: string[];
}

export const projects: Project[] = [
	{
		slug: "profil-public",
		title: "Profil Public",
		kind: "client",
		kindLabel: "Contribution en équipe",
		period: "2023 → aujourd'hui",
		description:
			"Contribution à une plateforme de recrutement du secteur public, au sein de l'équipe de développement. D'abord en alternance, puis sur des missions freelance régulières.",
		highlights: [
			"Participation à certaines interfaces et fonctionnalités de l'ATS",
			"Corrections et évolutions ciblées sur un produit existant",
		],
		tags: ["Nuxt 3", "Vue 3", "Strapi 4", "Node.js", "TypeScript", "API / XML"],
		url: "https://profilpublic.fr",
		caseUrl: "/projets/profil-public/",
		images: [{ src: profilPublicImage, alt: "Page publique de la plateforme Profil Public" }],
	},
	{
		slug: "cva-tracking",
		title: "CVA Tracking",
		kind: "client",
		period: "2026",
		description:
			"Rendre les portefeuilles des gérants de l'émission C'est Votre Argent (BFM Business) faciles à explorer. Le contenu est géré depuis Google Sheets, puis enrichi des cours boursiers sur le site.",
		highlights: [
			"Une mise à jour du contenu sans passer par un développeur",
			"Des graphiques reliant achats, ventes et extraits de l'émission",
			"Un espace personnel pour suivre ses valeurs favorites et recevoir un récapitulatif hebdomadaire par e-mail",
			"Transcription automatique des émissions avec détection des interlocuteurs, et brouillons d'articles rédigés par IA puis relus avant publication",
		],
		tags: ["Next.js", "React 19", "Tailwind CSS", "shadcn/ui", "Google Sheets", "Vercel"],
		url: "https://www.cva-tracking.com/",
		caseUrl: "/projets/cva-tracking/",
		caseLabel: "Le projet en détail",
		images: [
			{ src: cvaTrackingPortefeuilleImage, alt: "Positions d'un portefeuille de gérant sur CVA Tracking" },
			{ src: cvaTrackingArticlesImage, alt: "Page des articles d'analyse sur CVA Tracking" },
		],
	},
	{
		slug: "ferme-mont-blanc",
		title: "Mont Blanc Fermes Pédagogiques",
		kind: "client",
		period: "2026",
		description:
			"Une association de fermes pédagogiques autour du Mont-Blanc recevait ses réservations par HelloAsso, puis les recopiait à la main dans un tableur.",
		highlights: [
			"Chaque réservation arrive automatiquement dans un Google Sheet, regroupée par semaine, ferme et créneau",
			"Réservations téléphone, espèces et agences fusionnées dans la même vue, sans doublons",
			"Libellés, seuils et couleurs modifiables par l'association, sans intervention de ma part",
		],
		tags: ["Google Apps Script", "Google Sheets", "HelloAsso", "Webhook"],
	},
	{
		slug: "spinnn",
		title: "Spinnn",
		kind: "perso",
		period: "2026",
		description:
			"Suivre une séance de vélo indoor depuis son navigateur : capteurs Bluetooth, métriques en direct et résistance du home trainer pilotée automatiquement.",
		highlights: [
			"Cardio, puissance, cadence et vitesse en temps réel (D3.js)",
			"Import de séances .ZWO, synchronisation Intervals.icu, export FIT vers Garmin et Strava",
			"Un guide propose une séance selon le temps disponible et l'objectif, parmi une bibliothèque intégrée",
		],
		tags: ["Vue 3", "TypeScript", "Web Bluetooth", "D3.js", "Convex", "Cloudflare Workers"],
		url: "https://www.spinnn.app",
		note: "La connexion Bluetooth nécessite un navigateur Chromium compatible.",
		images: [
			{ src: spinnnAccueilImage, alt: "Page d'accueil de Spinnn" },
			{ src: spinnnGuideImage, alt: "Guide de choix d'une séance selon le temps disponible et l'objectif dans Spinnn" },
			{ src: spinnnImage, alt: "Vue d'une séance en cours dans Spinnn : temps du bloc, puissance, cadence et fréquence cardiaque" },
		],
	},
	{
		slug: "mytrailplan",
		title: "MyTrailPlan",
		kind: "perso",
		period: "2026",
		description:
			"Transformer la trace GPX d'un trail en plan de course : estimer son allure, préparer ses ravitaillements et emporter une stratégie imprimable le jour J.",
		highlights: [
			"Simulateur d'allure ajustée à la pente (modèle énergétique de Minetti)",
			"Plan de course interactif avec temps par tronçon et nutrition",
		],
		tags: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "GPX"],
		url: "https://mytrailplan.com/",
		images: [{ src: mytrailplanImage, alt: "Interface de préparation de course MyTrailPlan" }],
	},
];

export const services: Service[] = [
	{
		title: "Créer votre application",
		description:
			"Vous avez une idée ou un besoin métier ? Je vous aide à définir une première version utile et à la transformer en application web accessible à vos utilisateurs.",
		details: [
			"Cadrage, interfaces et développement",
			"Première version et mise en production",
		],
		proof: "Exemple : CVA Tracking",
		proofUrl: "#cva-tracking",
	},
	{
		title: "Faire évoluer votre produit",
		description:
			"Votre application existe déjà ? J'interviens sur des besoins ciblés : ajouter une fonctionnalité, améliorer un parcours ou corriger un problème.",
		details: [
			"Fonctionnalités et expérience utilisateur",
			"Corrections, tests et évolutions",
		],
		proof: "Exemple : Profil Public",
		proofUrl: "#profil-public",
	},
	{
		title: "Outiller votre activité",
		description:
			"Un suivi compliqué ou des tâches répétitives ? Je développe un outil adapté à votre fonctionnement, en m'appuyant autant que possible sur ce que vous utilisez déjà.",
		details: [
			"Tableaux de suivi et outils de gestion",
			"Automatisation de tâches ciblées",
		],
		proof: "Exemple : suivi des réservations d'une association",
		proofUrl: "#ferme-mont-blanc",
	},
];

export const experience: TimelineEntry[] = [
	{
		period: "2025 →",
		title: "Développeur d'applications web freelance",
		place: "Profil Public, CVA Tracking, associations",
		description:
			"Applications web, évolutions de produits et outils sur mesure.",
		details: [
			"Profil Public : évolutions ciblées de l'ATS et interventions sur des échanges de données partenaires (France Travail / SMOT, FHF, Smartforum).",
			"CVA Tracking : site Next.js, données Google Sheets, graphiques financiers, espace personnel, transcription automatique des émissions et génération d'articles par IA.",
			"Mont Blanc Fermes Pédagogiques : automatisation du suivi des réservations HelloAsso.",
		],
	},
	{
		period: "2023 – 2024",
		title: "Développeur fullstack en alternance",
		place: "Profil Public",
		description:
			"Participation au développement au sein de l'équipe : interfaces, fonctionnalités ciblées et correctifs. Nuxt, Strapi, Tailwind CSS.",
		details: [
			"Participation au développement au sein de l'équipe : interfaces Nuxt / Vue, fonctionnalités de suivi des candidatures et correctifs Strapi.",
			"Contribution à une fonctionnalité de génération d'offres assistée par IA.",
		],
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
	title: "Développeur d'applications web freelance",
	positioning: "Applications web · Évolutions de produits · Outils sur mesure",
	tagline:
		"Je transforme vos idées en applications concrètes, de la conception à la mise en production.",
	location: "Toulouse",
	availability: "Disponible · Toulouse ou à distance",
	// Assemblé côté client dans Contact.astro pour ne pas exposer l'adresse aux scrapers
	emailUser: "titouan.p",
	emailDomain: "hotmail.fr",
	formspree: "https://formspree.io/f/mrpgoeeq",
	linkedin: "https://www.linkedin.com/in/titouan-prat-3672a9220/",
	github: "https://github.com/T-PRAT",
	bio: "Développeur web basé à Toulouse, je crée et fais évoluer des applications pour des clients et pour mes propres usages. J'ai appris les fondamentaux de la programmation à l'École 42 Lyon, puis suivi la formation fullstack de la 3W Academy en alternance, au sein de l'équipe de développement de Profil Public. J'ai ensuite poursuivi avec des missions freelance régulières. Aujourd'hui, je m'appuie sur des agents IA pour l'implémentation et me concentre sur le besoin, les choix de réalisation et la validation du résultat. Côté projets personnels : Spinnn pour le vélo indoor et MyTrailPlan pour le trail. En dehors du travail : trail, ski-alpinisme et longues traversées en montagne.",
};
