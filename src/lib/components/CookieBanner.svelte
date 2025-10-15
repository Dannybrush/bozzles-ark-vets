<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	interface CookiePreferences {
		essential: boolean;
		functional: boolean;
		analytics: boolean;
		marketing: boolean;
	}

	let showBanner = $state(false);
	let showSettings = $state(false);

	let preferences = $state<CookiePreferences>({
		essential: true,
		functional: false,
		analytics: false,
		marketing: false
	});

	// Check if user has already set preferences
	$effect(() => {
		const consent = getCookie('cookie_consent');
		if (!consent) {
			// Delay showing banner slightly for better UX
			setTimeout(() => {
				showBanner = true;
			}, 1000);
		} else {
			loadPreferences();
		}
	});

	function getCookie(name: string): string | null {
		if (typeof document === 'undefined') return null;
		const value = `; ${document.cookie}`;
		const parts = value.split(`; ${name}=`);
		if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
		return null;
	}

	function setCookie(name: string, value: string, days: number) {
		if (typeof document === 'undefined') return;
		const expires = new Date(Date.now() + days * 864e5).toUTCString();
		document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Lax`;
	}

	function loadPreferences() {
		const saved = getCookie('cookie_consent');
		if (saved) {
			try {
				preferences = JSON.parse(decodeURIComponent(saved));
			} catch (e) {
				console.error('Failed to parse cookie preferences', e);
			}
		}
	}

	function savePreferences() {
		const prefString = encodeURIComponent(JSON.stringify(preferences));
		setCookie('cookie_consent', prefString, 365);
		
		// Initialize or disable tracking based on preferences
		if (preferences.analytics) {
			initializeAnalytics();
		}
		if (preferences.marketing) {
			initializeMarketing();
		}
		
		showBanner = false;
		showSettings = false;
	}

	function acceptAll() {
		preferences = {
			essential: true,
			functional: true,
			analytics: true,
			marketing: true
		};
		savePreferences();
	}

	function acceptEssential() {
		preferences = {
			essential: true,
			functional: false,
			analytics: false,
			marketing: false
		};
		savePreferences();
	}

	function initializeAnalytics() {
		// Initialize Google Analytics or other analytics
		if (typeof window !== 'undefined' && window.gtag) {
			window.gtag('consent', 'update', {
				analytics_storage: 'granted'
			});
		}
	}

	function initializeMarketing() {
		// Initialize marketing pixels
		if (typeof window !== 'undefined' && window.gtag) {
			window.gtag('consent', 'update', {
				ad_storage: 'granted'
			});
		}
	}
</script>

{#if showBanner}
	<div
		class="cookie-banner"
		transition:fly={{ y: 100, duration: 500, easing: cubicOut }}
		role="dialog"
		aria-labelledby="cookie-banner-title"
		aria-describedby="cookie-banner-description"
	>
		<div class="cookie-banner-content">
			<div class="cookie-banner-text">
				<h3 id="cookie-banner-title">🍪 Cookie Notice</h3>
				<p id="cookie-banner-description">
					We use essential cookies to ensure our website functions properly and optional cookies to
					enhance your experience. You can choose which cookies to accept below.
				</p>
				<a href="/legal/cookie-policy" class="cookie-link">View our Cookie Policy</a>
			</div>

			{#if !showSettings}
				<div class="cookie-banner-actions">
					<button
						class="btn-cookie btn-cookie-primary"
						onclick={acceptAll}
						aria-label="Accept all cookies"
					>
						Accept All
					</button>
					<button
						class="btn-cookie btn-cookie-secondary"
						onclick={acceptEssential}
						aria-label="Accept essential cookies only"
					>
						Essential Only
					</button>
					<button
						class="btn-cookie btn-cookie-outline"
						onclick={() => (showSettings = true)}
						aria-label="Customize cookie preferences"
					>
						Customize
					</button>
				</div>
			{:else}
				<div class="cookie-settings" transition:fade={{ duration: 200 }}>
					<div class="cookie-option">
						<div class="cookie-option-header">
							<label class="cookie-label">
								<input
									type="checkbox"
									bind:checked={preferences.essential}
									disabled
									aria-describedby="essential-desc"
								/>
								<span class="cookie-option-title">Essential Cookies</span>
								<span class="cookie-badge">Required</span>
							</label>
						</div>
						<p id="essential-desc" class="cookie-option-desc">
							Required for the website to function. Cannot be disabled.
						</p>
					</div>

					<div class="cookie-option">
						<div class="cookie-option-header">
							<label class="cookie-label">
								<input
									type="checkbox"
									bind:checked={preferences.functional}
									aria-describedby="functional-desc"
								/>
								<span class="cookie-option-title">Functional Cookies</span>
							</label>
						</div>
						<p id="functional-desc" class="cookie-option-desc">
							Remember your preferences and provide enhanced features.
						</p>
					</div>

					<div class="cookie-option">
						<div class="cookie-option-header">
							<label class="cookie-label">
								<input
									type="checkbox"
									bind:checked={preferences.analytics}
									aria-describedby="analytics-desc"
								/>
								<span class="cookie-option-title">Analytics Cookies</span>
							</label>
						</div>
						<p id="analytics-desc" class="cookie-option-desc">
							Help us understand how you use our website to improve your experience.
						</p>
					</div>

					<div class="cookie-option">
						<div class="cookie-option-header">
							<label class="cookie-label">
								<input
									type="checkbox"
									bind:checked={preferences.marketing}
									aria-describedby="marketing-desc"
								/>
								<span class="cookie-option-title">Marketing Cookies</span>
							</label>
						</div>
						<p id="marketing-desc" class="cookie-option-desc">
							Deliver relevant advertisements based on your interests.
						</p>
					</div>

					<div class="cookie-settings-actions">
						<button class="btn-cookie btn-cookie-primary" onclick={savePreferences}>
							Save Preferences
						</button>
						<button
							class="btn-cookie btn-cookie-outline"
							onclick={() => (showSettings = false)}
						>
							Cancel
						</button>
					</div>
				</div>
			{/if}
		</div>
	</div>
{/if}

<style>
	.cookie-banner {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #ffffff;
		border-top: 4px solid #1a3c6e;
		box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.15);
		padding: 1.5rem;
		z-index: 9999;
		max-height: 90vh;
		overflow-y: auto;
	}

	.cookie-banner-content {
		max-width: 1200px;
		margin: 0 auto;
	}

	.cookie-banner-text {
		margin-bottom: 1.5rem;
	}

	.cookie-banner-text h3 {
		font-size: 1.25rem;
		font-weight: bold;
		color: #1a3c6e;
		margin-bottom: 0.5rem;
	}

	.cookie-banner-text p {
		color: #4a5568;
		margin-bottom: 0.75rem;
		line-height: 1.6;
	}

	.cookie-link {
		color: #3182ce;
		text-decoration: underline;
		font-size: 0.875rem;
		transition: color 0.2s;
	}

	.cookie-link:hover {
		color: #2c5282;
	}

	.cookie-banner-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.btn-cookie {
		padding: 0.75rem 1.5rem;
		border-radius: 8px;
		font-weight: 600;
		font-size: 0.875rem;
		border: none;
		cursor: pointer;
		transition: all 0.2s;
	}

	.btn-cookie-primary {
		background-color: #1a3c6e;
		color: white;
	}

	.btn-cookie-primary:hover {
		background-color: #15325a;
		transform: translateY(-1px);
	}

	.btn-cookie-secondary {
		background-color: #e2e8f0;
		color: #1a3c6e;
	}

	.btn-cookie-secondary:hover {
		background-color: #cbd5e0;
	}

	.btn-cookie-outline {
		background-color: transparent;
		color: #1a3c6e;
		border: 2px solid #1a3c6e;
	}

	.btn-cookie-outline:hover {
		background-color: #f7fafc;
	}

	.cookie-settings {
		margin-top: 1.5rem;
		padding-top: 1.5rem;
		border-top: 1px solid #e2e8f0;
	}

	.cookie-option {
		margin-bottom: 1.25rem;
		padding: 1rem;
		background-color: #f7fafc;
		border-radius: 8px;
	}

	.cookie-option-header {
		margin-bottom: 0.5rem;
	}

	.cookie-label {
		display: flex;
		align-items: center;
		cursor: pointer;
		font-weight: 600;
		color: #1a3c6e;
	}

	.cookie-label input[type='checkbox'] {
		margin-right: 0.75rem;
		width: 18px;
		height: 18px;
		cursor: pointer;
	}

	.cookie-label input[type='checkbox']:disabled {
		cursor: not-allowed;
	}

	.cookie-option-title {
		flex: 1;
	}

	.cookie-badge {
		background-color: #4ade80;
		color: #166534;
		padding: 0.25rem 0.75rem;
		border-radius: 12px;
		font-size: 0.75rem;
		font-weight: 600;
	}

	.cookie-option-desc {
		color: #718096;
		font-size: 0.875rem;
		margin: 0;
		padding-left: 2rem;
	}

	.cookie-settings-actions {
		display: flex;
		gap: 0.75rem;
		margin-top: 1.5rem;
	}

	@media (max-width: 768px) {
		.cookie-banner {
			padding: 1rem;
		}

		.cookie-banner-actions,
		.cookie-settings-actions {
			flex-direction: column;
		}

		.btn-cookie {
			width: 100%;
		}
	}
</style>