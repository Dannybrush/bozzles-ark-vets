import { writable } from 'svelte/store';
import type { CookiePreferences } from '$lib/data/legal';

const COOKIE_NAME = 'cookie_consent';
const COOKIE_EXPIRY_DAYS = 365;

function createCookieStore() {
	const defaultPreferences: CookiePreferences = {
		essential: true,
		functional: false,
		analytics: false,
		marketing: false
	};

	const { subscribe, set, update } = writable<CookiePreferences>(defaultPreferences);

	return {
		subscribe,
		set,
		update,
		
		// Load preferences from cookie
		load: () => {
			if (typeof document === 'undefined') return;
			
			const consent = getCookie(COOKIE_NAME);
			if (consent) {
				try {
					const preferences = JSON.parse(decodeURIComponent(consent));
					set(preferences);
				} catch (e) {
					console.error('Failed to parse cookie preferences', e);
				}
			}
		},
		
		// Save preferences to cookie
		save: (preferences: CookiePreferences) => {
			if (typeof document === 'undefined') return;
			
			const prefString = encodeURIComponent(JSON.stringify(preferences));
			setCookie(COOKIE_NAME, prefString, COOKIE_EXPIRY_DAYS);
			set(preferences);
			
			// Trigger analytics/marketing initialization based on preferences
			initializeTracking(preferences);
		},
		
		// Accept all cookies
		acceptAll: () => {
			const allAccepted: CookiePreferences = {
				essential: true,
				functional: true,
				analytics: true,
				marketing: true
			};
			
			if (typeof document !== 'undefined') {
				const prefString = encodeURIComponent(JSON.stringify(allAccepted));
				setCookie(COOKIE_NAME, prefString, COOKIE_EXPIRY_DAYS);
			}
			
			set(allAccepted);
			initializeTracking(allAccepted);
		},
		
		// Accept only essential cookies
		acceptEssential: () => {
			const essentialOnly: CookiePreferences = {
				essential: true,
				functional: false,
				analytics: false,
				marketing: false
			};
			
			if (typeof document !== 'undefined') {
				const prefString = encodeURIComponent(JSON.stringify(essentialOnly));
				setCookie(COOKIE_NAME, prefString, COOKIE_EXPIRY_DAYS);
			}
			
			set(essentialOnly);
		}
	};
}

// Helper functions
function getCookie(name: string): string | null {
	if (typeof document === 'undefined') return null;
	
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);
	
	if (parts.length === 2) {
		return parts.pop()?.split(';').shift() || null;
	}
	
	return null;
}

function setCookie(name: string, value: string, days: number): void {
	if (typeof document === 'undefined') return;
	
	const expires = new Date(Date.now() + days * 864e5).toUTCString();
	document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Lax; Secure`;
}

function initializeTracking(preferences: CookiePreferences): void {
	if (typeof window === 'undefined') return;
	
	// Initialize Google Analytics
	if (preferences.analytics && window.gtag) {
		window.gtag('consent', 'update', {
			analytics_storage: 'granted'
		});
	}
	
	// Initialize marketing pixels
	if (preferences.marketing && window.gtag) {
		window.gtag('consent', 'update', {
			ad_storage: 'granted',
			ad_user_data: 'granted',
			ad_personalization: 'granted'
		});
	}
	
	// Initialize Facebook Pixel
	if (preferences.marketing && window.fbq) {
		window.fbq('consent', 'grant');
	}
}

export const cookiePreferences = createCookieStore();

// Type augmentation for window object
declare global {
	interface Window {
		gtag?: (...args: any[]) => void;
		fbq?: (...args: any[]) => void;
	}
}