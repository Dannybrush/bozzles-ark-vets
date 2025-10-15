// Cookie consent types
export interface CookiePreferences {
	essential: boolean;
	functional: boolean;
	analytics: boolean;
	marketing: boolean;
}

export interface CookieCategory {
	id: keyof CookiePreferences;
	title: string;
	description: string;
	required: boolean;
	cookies: CookieDefinition[];
}

export interface CookieDefinition {
	name: string;
	purpose: string;
	duration: string;
	provider?: string;
}

// Legal pages metadata
export interface LegalPageMeta {
	title: string;
	description: string;
	lastUpdated: string;
	path: string;
}

export const LEGAL_PAGES: LegalPageMeta[] = [
	{
		title: 'Privacy Policy',
		description: 'How we collect, use, and protect your personal information',
		lastUpdated: '2025-10-14',
		path: '/legal/privacy'
	},
	{
		title: 'Terms of Service',
		description: 'Terms and conditions for using our veterinary services',
		lastUpdated: '2025-10-14',
		path: '/legal/terms'
	},
	{
		title: 'Accessibility Statement',
		description: 'Our commitment to digital accessibility',
		lastUpdated: '2025-10-14',
		path: '/legal/accessibility'
	},
	{
		title: 'Cookie Policy',
		description: 'How we use cookies and manage your preferences',
		lastUpdated: '2025-10-14',
		path: '/legal/cookies'
	}
];

// Cookie categories configuration
export const COOKIE_CATEGORIES: CookieCategory[] = [
	{
		id: 'essential',
		title: 'Essential Cookies',
		description: 'Required for the website to function properly',
		required: true,
		cookies: [
			{
				name: 'session_id',
				purpose: 'Maintains user session across pages',
				duration: 'Session'
			},
			{
				name: 'cookie_consent',
				purpose: 'Stores your cookie preferences',
				duration: '1 year'
			},
			{
				name: 'csrf_token',
				purpose: 'Security token to prevent attacks',
				duration: 'Session'
			}
		]
	},
	{
		id: 'functional',
		title: 'Functional Cookies',
		description: 'Enhanced features and personalization',
		required: false,
		cookies: [
			{
				name: 'booking_data',
				purpose: 'Remembers booking form data',
				duration: '7 days'
			},
			{
				name: 'language_pref',
				purpose: 'Stores language preference',
				duration: '6 months'
			}
		]
	},
	{
		id: 'analytics',
		title: 'Analytics Cookies',
		description: 'Help us understand website usage',
		required: false,
		cookies: [
			{
				name: '_ga',
				purpose: 'Google Analytics user tracking',
				duration: '2 years',
				provider: 'Google'
			},
			{
				name: '_gid',
				purpose: 'Google Analytics session tracking',
				duration: '24 hours',
				provider: 'Google'
			}
		]
	},
	{
		id: 'marketing',
		title: 'Marketing Cookies',
		description: 'Deliver relevant advertisements',
		required: false,
		cookies: [
			{
				name: '_fbp',
				purpose: 'Facebook Pixel tracking',
				duration: '3 months',
				provider: 'Facebook'
			}
		]
	}
];