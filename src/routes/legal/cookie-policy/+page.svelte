<script lang="ts">
	import { fade } from 'svelte/transition';

	const lastUpdated = 'October 14, 2025';

	// Cookie preferences state (would integrate with CookieBanner component)
	let showPreferences = $state(false);

	let preferences = $state({
		essential: true,
		functional: false,
		analytics: false,
		marketing: false
	});

	function openPreferences() {
		showPreferences = true;
	}

	function savePreferences() {
		// This would integrate with actual cookie management
		showPreferences = false;
		alert('Cookie preferences saved!');
	}
</script>

<svelte:head>
	<title>Cookie Policy | Bozzles Ark Vets</title>
	<meta
		name="description"
		content="Cookie Policy for Bozzles Ark Vets. Learn about how we use cookies and manage your preferences."
	/>
	<meta name="robots" content="index, follow" />
</svelte:head>

<div class="legal-page" transition:fade={{ duration: 300 }}>
	<div class="container">
		<nav class="breadcrumb" aria-label="Breadcrumb">
			<a href="/">Home</a>
			<span aria-hidden="true">/</span>
			<span aria-current="page">Cookie Policy</span>
		</nav>

		<header class="legal-header">
			<h1>Cookie Policy</h1>
			<p class="last-updated">Last updated: {lastUpdated}</p>
		</header>

		<div class="content-wrapper">
			<article class="legal-content">
				<section id="what-are-cookies">
					<h2>What Are Cookies?</h2>
					<p>
						Cookies are small text files that are placed on your computer or mobile device when you
						visit a website. They are widely used to make websites work more efficiently and provide
						information to the website owners.
					</p>
					<p>
						Cookies help websites remember information about your visit, such as your preferred
						language and other settings. This can make your next visit easier and the site more
						useful to you.
					</p>
					<div class="info-box info-box-primary">
						<h3>Key Points About Cookies</h3>
						<ul>
							<li>Cookies are not programs and cannot contain viruses</li>
							<li>They cannot access other information on your device</li>
							<li>You have control over which cookies are set</li>
							<li>You can delete cookies at any time</li>
						</ul>
					</div>
				</section>

				<section id="how-we-use">
					<h2>How We Use Cookies</h2>
					<p>
						Bozzles Ark Vets uses cookies to improve your experience on our website, understand how
						you interact with our content, and provide personalized services. We use cookies for:
					</p>
					<ul>
						<li>Essential website functionality</li>
						<li>Remembering your preferences and settings</li>
						<li>Understanding how you use our website (analytics)</li>
						<li>Providing relevant content and services</li>
						<li>Improving our website and services</li>
						<li>Marketing and advertising (with your consent)</li>
					</ul>
				</section>

				<section id="types-of-cookies">
					<h2>Types of Cookies We Use</h2>

					<div class="cookie-type-card cookie-essential">
						<div class="cookie-type-header">
							<span class="cookie-icon">🔒</span>
							<h3>1. Strictly Necessary Cookies</h3>
							<span class="cookie-badge badge-essential">Always Active</span>
						</div>
						<p>
							These cookies are essential for the website to function properly. They enable core
							functionality such as security, network management, and accessibility. You cannot opt
							out of these cookies.
						</p>
						<h4>Purpose:</h4>
						<ul>
							<li>Maintain your session as you navigate between pages</li>
							<li>Authenticate users and prevent fraudulent use</li>
							<li>Remember your cookie consent choices</li>
							<li>Enable secure areas of the website</li>
							<li>Balance website load across servers</li>
						</ul>
						<div class="cookie-details">
							<p><strong>Legal Basis:</strong> Legitimate interest (essential functionality)</p>
							<p><strong>Duration:</strong> Session or up to 1 year</p>
							<p><strong>Can be disabled:</strong> No (required for website to function)</p>
						</div>
					</div>

					<div class="cookie-type-card cookie-functional">
						<div class="cookie-type-header">
							<span class="cookie-icon">⚙️</span>
							<h3>2. Functional Cookies</h3>
							<span class="cookie-badge badge-functional">Optional</span>
						</div>
						<p>
							These cookies enable enhanced functionality and personalization. They may be set by us
							or by third-party providers whose services we use on our website.
						</p>
						<h4>Purpose:</h4>
						<ul>
							<li>Remember your language and region preferences</li>
							<li>Store information you've entered in forms</li>
							<li>Remember your accessibility settings (font size, contrast)</li>
							<li>Provide live chat support features</li>
							<li>Remember your booking preferences</li>
						</ul>
						<div class="cookie-details">
							<p><strong>Legal Basis:</strong> Consent</p>
							<p><strong>Duration:</strong> Up to 2 years</p>
							<p><strong>Can be disabled:</strong> Yes (may affect functionality)</p>
						</div>
					</div>

					<div class="cookie-type-card cookie-analytics">
						<div class="cookie-type-header">
							<span class="cookie-icon">📊</span>
							<h3>3. Analytics and Performance Cookies</h3>
							<span class="cookie-badge badge-analytics">Optional</span>
						</div>
						<p>
							These cookies help us understand how visitors interact with our website by collecting
							and reporting information anonymously. This helps us improve the website's performance
							and user experience.
						</p>
						<h4>Purpose:</h4>
						<ul>
							<li>Count visits and measure traffic sources</li>
							<li>Understand which pages are most and least popular</li>
							<li>Track how visitors move around the website</li>
							<li>Identify technical issues and errors</li>
							<li>Test different versions of pages (A/B testing)</li>
							<li>Measure campaign effectiveness</li>
						</ul>
						<h4>Services Used:</h4>
						<ul>
							<li>Google Analytics (anonymized IP addresses)</li>
							<li>Microsoft Clarity (session recordings, heatmaps)</li>
						</ul>
						<div class="cookie-details">
							<p><strong>Legal Basis:</strong> Consent</p>
							<p><strong>Duration:</strong> Up to 26 months</p>
							<p><strong>Can be disabled:</strong> Yes</p>
							<p><strong>Data anonymized:</strong> Yes</p>
						</div>
					</div>

					<div class="cookie-type-card cookie-marketing">
						<div class="cookie-type-header">
							<span class="cookie-icon">📢</span>
							<h3>4. Marketing and Targeting Cookies</h3>
							<span class="cookie-badge badge-marketing">Optional</span>
						</div>
						<p>
							These cookies track your online activity to help deliver more relevant advertising and
							limit the number of times you see an advertisement. They remember that you visited our
							website and may be shared with other organizations such as advertisers.
						</p>
						<h4>Purpose:</h4>
						<ul>
							<li>Deliver relevant advertisements based on your interests</li>
							<li>Limit the number of times you see the same advertisement</li>
							<li>Measure the effectiveness of advertising campaigns</li>
							<li>Enable social media integration and content sharing</li>
							<li>Build profiles of user interests</li>
							<li>Show you content that may be relevant to you</li>
						</ul>
						<h4>Services Used:</h4>
						<ul>
							<li>Google Ads and DoubleClick</li>
							<li>Facebook Pixel</li>
							<li>LinkedIn Insight Tag</li>
						</ul>
						<div class="cookie-details">
							<p><strong>Legal Basis:</strong> Consent</p>
							<p><strong>Duration:</strong> Up to 2 years</p>
							<p><strong>Can be disabled:</strong> Yes</p>
							<p><strong>Third parties:</strong> May share data with advertising networks</p>
						</div>
					</div>
				</section>

				<section id="third-party-cookies">
					<h2>Third-Party Cookies</h2>
					<p>
						Some cookies on our website are set by third-party services that appear on our pages.
						These organizations have their own privacy policies and cookie policies:
					</p>

					<div class="third-party-table">
						<table>
							<thead>
								<tr>
									<th>Service Provider</th>
									<th>Purpose</th>
									<th>Cookie Type</th>
									<th>Privacy Policy</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Google Analytics</td>
									<td>Website analytics and performance tracking</td>
									<td>Analytics</td>
									<td>
										<a
											href="https://policies.google.com/privacy"
											target="_blank"
											rel="noopener noreferrer">View Policy</a
										>
									</td>
								</tr>
								<tr>
									<td>Google Maps</td>
									<td>Display practice location and directions</td>
									<td>Functional</td>
									<td>
										<a
											href="https://policies.google.com/privacy"
											target="_blank"
											rel="noopener noreferrer">View Policy</a
										>
									</td>
								</tr>
								<tr>
									<td>Facebook Pixel</td>
									<td>Social media integration and advertising</td>
									<td>Marketing</td>
									<td>
										<a
											href="https://www.facebook.com/privacy"
											target="_blank"
											rel="noopener noreferrer">View Policy</a
										>
									</td>
								</tr>
								<tr>
									<td>Microsoft Clarity</td>
									<td>Session recordings and heatmaps</td>
									<td>Analytics</td>
									<td>
										<a
											href="https://privacy.microsoft.com/privacystatement"
											target="_blank"
											rel="noopener noreferrer">View Policy</a
										>
									</td>
								</tr>
								<tr>
									<td>YouTube</td>
									<td>Embedded video content</td>
									<td>Marketing</td>
									<td>
										<a
											href="https://policies.google.com/privacy"
											target="_blank"
											rel="noopener noreferrer">View Policy</a
										>
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					<div class="info-box info-box-warning">
						<p>
							<strong>Note:</strong> We do not control these third-party cookies. Please refer to
							the respective third-party privacy policies for information about how they use cookies.
						</p>
					</div>
				</section>

				<section id="cookies-we-set">
					<h2>Specific Cookies We Set</h2>
					<p>Below is a detailed list of the cookies we use on our website:</p>

					<div class="cookie-table">
						<table>
							<thead>
								<tr>
									<th>Cookie Name</th>
									<th>Type</th>
									<th>Purpose</th>
									<th>Duration</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><code>session_id</code></td>
									<td><span class="type-badge type-essential">Essential</span></td>
									<td>Maintains user session across pages</td>
									<td>Session</td>
								</tr>
								<tr>
									<td><code>cookie_consent</code></td>
									<td><span class="type-badge type-essential">Essential</span></td>
									<td>Stores your cookie preferences</td>
									<td>1 year</td>
								</tr>
								<tr>
									<td><code>csrf_token</code></td>
									<td><span class="type-badge type-essential">Essential</span></td>
									<td>Prevents cross-site request forgery attacks</td>
									<td>Session</td>
								</tr>
								<tr>
									<td><code>booking_data</code></td>
									<td><span class="type-badge type-functional">Functional</span></td>
									<td>Remembers partially completed booking forms</td>
									<td>7 days</td>
								</tr>
								<tr>
									<td><code>language_pref</code></td>
									<td><span class="type-badge type-functional">Functional</span></td>
									<td>Stores language preference</td>
									<td>6 months</td>
								</tr>
								<tr>
									<td><code>accessibility_settings</code></td>
									<td><span class="type-badge type-functional">Functional</span></td>
									<td>Remembers accessibility preferences</td>
									<td>1 year</td>
								</tr>
								<tr>
									<td><code>_ga</code></td>
									<td><span class="type-badge type-analytics">Analytics</span></td>
									<td>Google Analytics - distinguishes users</td>
									<td>2 years</td>
								</tr>
								<tr>
									<td><code>_gid</code></td>
									<td><span class="type-badge type-analytics">Analytics</span></td>
									<td>Google Analytics - distinguishes users</td>
									<td>24 hours</td>
								</tr>
								<tr>
									<td><code>_gat</code></td>
									<td><span class="type-badge type-analytics">Analytics</span></td>
									<td>Google Analytics - throttles request rate</td>
									<td>1 minute</td>
								</tr>
								<tr>
									<td><code>_fbp</code></td>
									<td><span class="type-badge type-marketing">Marketing</span></td>
									<td>Facebook Pixel - tracks visits</td>
									<td>3 months</td>
								</tr>
								<tr>
									<td><code>_gcl_au</code></td>
									<td><span class="type-badge type-marketing">Marketing</span></td>
									<td>Google AdSense - conversion tracking</td>
									<td>3 months</td>
								</tr>
							</tbody>
						</table>
					</div>
				</section>

				<section id="managing-cookies">
					<h2>Managing Your Cookie Preferences</h2>
					<p>You have several options to control and manage cookies:</p>

					<h3>1. Our Cookie Consent Tool</h3>
					<p>
						You can accept or reject non-essential cookies using our cookie banner when you first
						visit the website. You can change your preferences at any time by clicking the button
						below:
					</p>
					<button class="btn-manage-cookies" onclick={openPreferences}>
						Manage Cookie Preferences
					</button>

					<h3>2. Browser Settings</h3>
					<p>Most web browsers allow you to control cookies through their settings. You can:</p>
					<ul>
						<li>View which cookies are stored on your device</li>
						<li>Delete all cookies or specific cookies</li>
						<li>Block cookies from specific websites</li>
						<li>Block all third-party cookies</li>
						<li>Block all cookies (not recommended - may break website functionality)</li>
						<li>Clear all cookies when you close your browser</li>
					</ul>

					<div class="browser-instructions">
						<h4>Browser-Specific Instructions:</h4>
						<div class="browser-grid">
							<div class="browser-card">
								<h5>🌐 Google Chrome</h5>
								<p>Settings → Privacy and security → Cookies and other site data</p>
								<a
									href="https://support.google.com/chrome/answer/95647"
									target="_blank"
									rel="noopener noreferrer">View Guide</a
								>
							</div>
							<div class="browser-card">
								<h5>🦊 Mozilla Firefox</h5>
								<p>Options → Privacy & Security → Cookies and Site Data</p>
								<a
									href="https://support.mozilla.org/kb/enhanced-tracking-protection-firefox-desktop"
									target="_blank"
									rel="noopener noreferrer">View Guide</a
								>
							</div>
							<div class="browser-card">
								<h5>🧭 Safari</h5>
								<p>Preferences → Privacy → Manage Website Data</p>
								<a
									href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
									target="_blank"
									rel="noopener noreferrer">View Guide</a
								>
							</div>
							<div class="browser-card">
								<h5>🌊 Microsoft Edge</h5>
								<p>Settings → Cookies and site permissions → Manage and delete cookies</p>
								<a
									href="https://support.microsoft.com/microsoft-edge/delete-cookies-63947406-40ac-c3b8-57b9-2a946a29ae09"
									target="_blank"
									rel="noopener noreferrer">View Guide</a
								>
							</div>
						</div>
					</div>

					<div class="info-box info-box-warning">
						<h3>⚠️ Impact of Blocking Cookies</h3>
						<p>
							If you block or delete cookies, some features of our website may not function
							properly:
						</p>
						<ul>
							<li>You may need to log in each time you visit</li>
							<li>Your preferences may not be saved</li>
							<li>Some interactive features may not work</li>
							<li>Online booking may not function correctly</li>
						</ul>
					</div>

					<h3>3. Third-Party Opt-Out Tools</h3>
					<p>You can opt out of interest-based advertising from participating companies:</p>
					<ul>
						<li>
							<a href="https://www.youronlinechoices.com/uk" target="_blank" rel="noopener"
								>Your Online Choices</a
							> (EU)
						</li>
						<li>
							<a href="https://www.networkadvertising.org/choices/" target="_blank" rel="noopener"
								>Network Advertising Initiative</a
							>
						</li>
						<li>
							<a href="https://optout.aboutads.info/" target="_blank" rel="noopener"
								>Digital Advertising Alliance</a
							>
						</li>
						<li>
							<a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener"
								>Google Analytics Opt-out Browser Add-on</a
							>
						</li>
					</ul>

					<h3>4. Mobile Device Settings</h3>
					<p>You can manage advertising tracking on mobile devices:</p>
					<ul>
						<li>
							<strong>iOS:</strong> Settings → Privacy → Advertising → Limit Ad Tracking
						</li>
						<li>
							<strong>Android:</strong> Settings → Google → Ads → Opt out of Ads Personalization
						</li>
					</ul>
				</section>

				<section id="do-not-track">
					<h2>Do Not Track (DNT) Signals</h2>
					<p>
						We respect Do Not Track (DNT) browser signals. When we detect a DNT signal is enabled:
					</p>
					<ul>
						<li>We do not set non-essential cookies (analytics, marketing)</li>
						<li>We disable tracking features and personalization</li>
						<li>Essential cookies required for website functionality will still be set</li>
						<li>Third-party services that respect DNT will also be disabled</li>
					</ul>
					<p>
						To enable DNT in your browser, check your browser's privacy settings. Note that not all
						websites and services honor DNT signals.
					</p>
				</section>

				<section id="changes">
					<h2>Changes to This Cookie Policy</h2>
					<p>We may update this Cookie Policy from time to time to reflect changes in:</p>
					<ul>
						<li>The cookies we use</li>
						<li>Technology and industry standards</li>
						<li>Legal or regulatory requirements</li>
						<li>Our business operations</li>
					</ul>
					<p>We will notify you of any material changes by:</p>
					<ul>
						<li>Posting the updated policy on our website with a new "Last Updated" date</li>
						<li>Displaying a notification on the website</li>
						<li>Requesting renewed consent where required by law</li>
					</ul>
					<p>
						We encourage you to review this Cookie Policy periodically to stay informed about how we
						use cookies.
					</p>
				</section>

				<section id="contact">
					<h2>Questions and Contact Information</h2>
					<p>
						If you have questions about our use of cookies or this Cookie Policy, please contact us:
					</p>

					<div class="contact-box">
						<h3>Data Protection Contact</h3>
						<p>
							<strong>Email:</strong> privacy@bozzlesarkvets.co.uk<br />
							<strong>Phone:</strong> [Practice Phone Number]<br />
							<strong>Post:</strong> Data Protection Officer<br />
							Bozzles Ark Vets<br />
							39 Jersey Way<br />
							Barwell<br />
							LE9 8HR
						</p>
					</div>

					<p>
						For more information about your privacy rights, please see our
						<a href="/legal/privacy">Privacy Policy</a>.
					</p>
				</section>

				<div class="related-links">
					<h3>Related Information</h3>
					<div class="links-grid">
						<a href="/legal/privacy" class="related-link">
							<span class="link-icon">🔒</span>
							<span>Privacy Policy</span>
						</a>
						<a href="/legal/terms" class="related-link">
							<span class="link-icon">📄</span>
							<span>Terms of Service</span>
						</a>
						<a href="/legal/accessibility" class="related-link">
							<span class="link-icon">♿</span>
							<span>Accessibility Statement</span>
						</a>
						<a href="https://ico.org.uk/your-data-matters/online/cookies/" class="related-link">
							<span class="link-icon">ℹ️</span>
							<span>ICO: Cookies Explained</span>
						</a>
					</div>
				</div>
			</article>

			<aside class="quick-links">
				<h3>Cookie Management</h3>
				<button class="quick-link-button" onclick={openPreferences}>
					⚙️ Manage Cookie Preferences
				</button>

				<div class="preferences-info">
					<h4>Your Current Settings</h4>
					<div class="preference-status">
						<div class="pref-item">
							<span>Essential Cookies:</span>
							<span class="status-on">Always On</span>
						</div>
						<div class="pref-item">
							<span>Functional Cookies:</span>
							<span class={preferences.functional ? 'status-on' : 'status-off'}>
								{preferences.functional ? 'Enabled' : 'Disabled'}
							</span>
						</div>
						<div class="pref-item">
							<span>Analytics Cookies:</span>
							<span class={preferences.analytics ? 'status-on' : 'status-off'}>
								{preferences.analytics ? 'Enabled' : 'Disabled'}
							</span>
						</div>
						<div class="pref-item">
							<span>Marketing Cookies:</span>
							<span class={preferences.marketing ? 'status-on' : 'status-off'}>
								{preferences.marketing ? 'Enabled' : 'Disabled'}
							</span>
						</div>
					</div>
				</div>

				<h3>Related Policies</h3>
				<nav aria-label="Related policies">
					<a href="/legal/privacy" class="quick-link">Privacy Policy</a>
					<a href="/legal/terms" class="quick-link">Terms of Service</a>
					<a href="/legal/accessibility" class="quick-link">Accessibility Statement</a>
				</nav>
			</aside>
		</div>
	</div>
</div>

{#if showPreferences}
	<div
		class="modal-overlay"
		onclick={() => (showPreferences = false)}
		transition:fade
		role="presentation"
	>
		<div
			class="modal-content"
			onclick={(e) => e.stopPropagation()}
			role="dialog"
			aria-labelledby="modal-title"
			aria-modal="true"
		>
			<h2 id="modal-title">Cookie Preferences</h2>
			<p>Choose which cookies you want to allow:</p>

			<div class="preference-options">
				<div class="pref-option">
					<label>
						<input type="checkbox" bind:checked={preferences.essential} disabled />
						<div>
							<strong>Essential Cookies</strong>
							<span class="required-badge">Required</span>
							<p>Necessary for the website to function</p>
						</div>
					</label>
				</div>

				<div class="pref-option">
					<label>
						<input type="checkbox" bind:checked={preferences.functional} />
						<div>
							<strong>Functional Cookies</strong>
							<p>Enhanced features and personalization</p>
						</div>
					</label>
				</div>

				<div class="pref-option">
					<label>
						<input type="checkbox" bind:checked={preferences.analytics} />
						<div>
							<strong>Analytics Cookies</strong>
							<p>Help us understand website usage</p>
						</div>
					</label>
				</div>

				<div class="pref-option">
					<label>
						<input type="checkbox" bind:checked={preferences.marketing} />
						<div>
							<strong>Marketing Cookies</strong>
							<p>Relevant advertisements and content</p>
						</div>
					</label>
				</div>
			</div>

			<div class="modal-actions">
				<button class="btn-primary" onclick={savePreferences}>Save Preferences</button>
				<button class="btn-secondary" onclick={() => (showPreferences = false)}>Cancel</button>
			</div>
		</div>
	</div>
{/if}

<style>
	.legal-page {
		background-color: #f7fafc;
		min-height: 100vh;
		padding: 2rem 1rem;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr 300px;
		gap: 2rem;
	}

	.breadcrumb {
		grid-column: 1 / -1;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 2rem;
		font-size: 0.875rem;
		color: #718096;
	}

	.breadcrumb a {
		color: #3182ce;
		text-decoration: none;
	}

	.breadcrumb a:hover {
		color: #2c5282;
		text-decoration: underline;
	}

	.legal-header {
		grid-column: 1 / -1;
		background-color: #ffffff;
		padding: 2.5rem;
		border-radius: 12px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
		margin-bottom: 2rem;
	}

	.legal-header h1 {
		font-size: 2.5rem;
		color: #1a3c6e;
		margin-bottom: 0.5rem;
	}

	.last-updated {
		color: #718096;
		font-size: 0.875rem;
	}

	.legal-content {
		background-color: #ffffff;
		padding: 2.5rem;
		border-radius: 12px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
	}

	.legal-content section {
		margin-bottom: 3rem;
	}

	.legal-content h2 {
		font-size: 1.75rem;
		color: #1a3c6e;
		margin-bottom: 1rem;
		padding-bottom: 0.5rem;
		border-bottom: 2px solid #e2e8f0;
	}

	.legal-content h3 {
		font-size: 1.25rem;
		color: #2c5282;
		margin-top: 1.5rem;
		margin-bottom: 0.75rem;
	}

	.legal-content h4 {
		font-size: 1.1rem;
		color: #1a3c6e;
		margin-bottom: 0.5rem;
		font-weight: 600;
	}

	.legal-content p {
		color: #4a5568;
		line-height: 1.7;
		margin-bottom: 1rem;
	}

	.legal-content ul {
		color: #4a5568;
		line-height: 1.7;
		margin-bottom: 1rem;
		padding-left: 1.5rem;
	}

	.legal-content li {
		margin-bottom: 0.5rem;
	}

	.legal-content a {
		color: #3182ce;
		text-decoration: underline;
	}

	.legal-content a:hover {
		color: #2c5282;
	}

	.info-box {
		padding: 1.25rem;
		border-radius: 8px;
		margin: 1.5rem 0;
		border-left: 4px solid;
	}

	.info-box-primary {
		background-color: #ebf8ff;
		border-color: #3182ce;
	}

	.info-box-warning {
		background-color: #fffbeb;
		border-color: #fbbf24;
	}

	.info-box h3 {
		margin-top: 0;
		color: #1a3c6e;
	}

	/* Cookie Type Cards */
	.cookie-type-card {
		border-radius: 8px;
		padding: 1.5rem;
		margin-bottom: 1.5rem;
		border-left: 4px solid;
	}

	.cookie-essential {
		background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
		border-color: #4ade80;
	}

	.cookie-functional {
		background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
		border-color: #60a5fa;
	}

	.cookie-analytics {
		background: linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%);
		border-color: #a78bfa;
	}

	.cookie-marketing {
		background: linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%);
		border-color: #fb923c;
	}

	.cookie-type-header {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 1rem;
	}

	.cookie-icon {
		font-size: 1.75rem;
	}

	.cookie-type-header h3 {
		flex: 1;
		margin: 0;
	}

	.cookie-badge {
		padding: 0.25rem 0.75rem;
		border-radius: 12px;
		font-size: 0.75rem;
		font-weight: 600;
		white-space: nowrap;
	}

	.badge-essential {
		background-color: #4ade80;
		color: #166534;
	}

	.badge-functional,
	.badge-analytics,
	.badge-marketing {
		background-color: #fbbf24;
		color: #78350f;
	}

	.cookie-details {
		margin-top: 1rem;
		padding-top: 1rem;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
		font-size: 0.875rem;
	}

	.cookie-details p {
		margin-bottom: 0.5rem;
	}

	/* Tables */
	.third-party-table,
	.cookie-table {
		overflow-x: auto;
		margin: 1.5rem 0;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.875rem;
		background-color: white;
	}

	thead {
		background-color: #1a3c6e;
		color: white;
	}

	th {
		padding: 0.75rem;
		text-align: left;
		font-weight: 600;
	}

	td {
		padding: 0.75rem;
		border-bottom: 1px solid #e2e8f0;
	}

	tbody tr:hover {
		background-color: #f7fafc;
	}

	code {
		background-color: #f7fafc;
		padding: 0.2rem 0.4rem;
		border-radius: 4px;
		font-family: 'Courier New', monospace;
		font-size: 0.875em;
		color: #e53e3e;
	}

	.type-badge {
		display: inline-block;
		padding: 0.25rem 0.5rem;
		border-radius: 4px;
		font-size: 0.75rem;
		font-weight: 600;
	}

	.type-essential {
		background-color: #dcfce7;
		color: #166534;
	}

	.type-functional {
		background-color: #dbeafe;
		color: #1e40af;
	}

	.type-analytics {
		background-color: #ede9fe;
		color: #6b21a8;
	}

	.type-marketing {
		background-color: #ffedd5;
		color: #9a3412;
	}

	/* Buttons */
	.btn-manage-cookies {
		background-color: #1a3c6e;
		color: white;
		padding: 0.875rem 1.5rem;
		border: none;
		border-radius: 8px;
		font-weight: 600;
		font-size: 1rem;
		cursor: pointer;
		transition: all 0.2s;
		margin: 1rem 0;
	}

	.btn-manage-cookies:hover {
		background-color: #15325a;
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(26, 60, 110, 0.3);
	}

	/* Browser Instructions */
	.browser-instructions {
		margin: 1.5rem 0;
	}

	.browser-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1rem;
		margin-top: 1rem;
	}

	.browser-card {
		background-color: #f7fafc;
		padding: 1.25rem;
		border-radius: 8px;
		border: 2px solid #e2e8f0;
	}

	.browser-card h5 {
		margin-top: 0;
		margin-bottom: 0.5rem;
		color: #1a3c6e;
		font-size: 1rem;
	}

	.browser-card p {
		font-size: 0.875rem;
		margin-bottom: 0.75rem;
		color: #718096;
	}

	.browser-card a {
		font-size: 0.875rem;
	}

	/* Contact Box */
	.contact-box {
		background-color: #f7fafc;
		padding: 1.5rem;
		border-radius: 8px;
		border-left: 4px solid #1a3c6e;
		margin: 1.5rem 0;
	}

	.contact-box h3 {
		margin-top: 0;
		color: #1a3c6e;
	}

	/* Related Links */
	.related-links {
		margin-top: 2rem;
		padding-top: 2rem;
		border-top: 2px solid #e2e8f0;
	}

	.related-links h3 {
		color: #1a3c6e;
		margin-bottom: 1rem;
	}

	.links-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
	}

	.related-link {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 1rem;
		background-color: #f7fafc;
		border-radius: 8px;
		text-decoration: none;
		color: #2c5282;
		transition: all 0.2s;
		border: 2px solid transparent;
	}

	.related-link:hover {
		background-color: #ebf8ff;
		border-color: #3182ce;
		transform: translateY(-2px);
	}

	.link-icon {
		font-size: 1.5rem;
	}

	/* Sidebar */
	.quick-links {
		background-color: #ffffff;
		padding: 1.5rem;
		border-radius: 12px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
		align-self: start;
		position: sticky;
		top: 2rem;
	}

	.quick-links h3,
	.quick-links h4 {
		font-size: 1.125rem;
		color: #1a3c6e;
		margin-bottom: 1rem;
	}

	.quick-link-button {
		width: 100%;
		background-color: #1a3c6e;
		color: white;
		padding: 0.875rem 1rem;
		border: none;
		border-radius: 8px;
		font-weight: 600;
		font-size: 0.875rem;
		cursor: pointer;
		transition: all 0.2s;
		margin-bottom: 1.5rem;
		text-align: left;
	}

	.quick-link-button:hover {
		background-color: #15325a;
		transform: translateY(-1px);
	}

	.preferences-info {
		background-color: #f7fafc;
		padding: 1rem;
		border-radius: 8px;
		margin-bottom: 1.5rem;
	}

	.preferences-info h4 {
		margin-top: 0;
		margin-bottom: 0.75rem;
		font-size: 0.875rem;
		color: #2c5282;
	}

	.preference-status {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.pref-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 0.75rem;
		padding: 0.5rem;
		background-color: white;
		border-radius: 4px;
	}

	.status-on {
		color: #166534;
		background-color: #dcfce7;
		padding: 0.25rem 0.5rem;
		border-radius: 4px;
		font-weight: 600;
	}

	.status-off {
		color: #991b1b;
		background-color: #fee2e2;
		padding: 0.25rem 0.5rem;
		border-radius: 4px;
		font-weight: 600;
	}

	.quick-links nav {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.quick-link {
		display: block;
		padding: 0.75rem 1rem;
		background-color: #f7fafc;
		color: #2c5282;
		text-decoration: none;
		border-radius: 6px;
		transition: all 0.2s;
		font-weight: 500;
		font-size: 0.875rem;
	}

	.quick-link:hover {
		background-color: #ebf8ff;
		transform: translateX(4px);
	}

	/* Modal */
	.modal-overlay {
		position: fixed;
		inset: 0;
		background-color: rgba(0, 0, 0, 0.6);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 9999;
		padding: 1rem;
	}

	.modal-content {
		background-color: white;
		padding: 2rem;
		border-radius: 12px;
		max-width: 500px;
		width: 100%;
		max-height: 90vh;
		overflow-y: auto;
		box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
	}

	.modal-content h2 {
		color: #1a3c6e;
		margin-top: 0;
		margin-bottom: 0.5rem;
	}

	.modal-content > p {
		color: #718096;
		margin-bottom: 1.5rem;
	}

	.preference-options {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	.pref-option {
		background-color: #f7fafc;
		padding: 1rem;
		border-radius: 8px;
		border: 2px solid #e2e8f0;
		transition: border-color 0.2s;
	}

	.pref-option:hover {
		border-color: #3182ce;
	}

	.pref-option label {
		display: flex;
		gap: 1rem;
		cursor: pointer;
		align-items: start;
	}

	.pref-option input[type='checkbox'] {
		margin-top: 0.25rem;
		width: 18px;
		height: 18px;
		cursor: pointer;
	}

	.pref-option input[type='checkbox']:disabled {
		cursor: not-allowed;
	}

	.pref-option strong {
		display: block;
		color: #1a3c6e;
		margin-bottom: 0.25rem;
	}

	.pref-option p {
		margin: 0;
		font-size: 0.875rem;
		color: #718096;
	}

	.required-badge {
		display: inline-block;
		background-color: #4ade80;
		color: #166534;
		padding: 0.125rem 0.5rem;
		border-radius: 4px;
		font-size: 0.75rem;
		font-weight: 600;
		margin-left: 0.5rem;
	}

	.modal-actions {
		display: flex;
		gap: 0.75rem;
		justify-content: flex-end;
	}

	.btn-primary,
	.btn-secondary {
		padding: 0.75rem 1.5rem;
		border-radius: 8px;
		font-weight: 600;
		font-size: 0.875rem;
		cursor: pointer;
		transition: all 0.2s;
		border: none;
	}

	.btn-primary {
		background-color: #1a3c6e;
		color: white;
	}

	.btn-primary:hover {
		background-color: #15325a;
	}

	.btn-secondary {
		background-color: #e2e8f0;
		color: #2c5282;
	}

	.btn-secondary:hover {
		background-color: #cbd5e0;
	}

	@media (max-width: 1024px) {
		.container {
			grid-template-columns: 1fr;
		}

		.quick-links {
			position: static;
		}
	}

	@media (max-width: 768px) {
		.legal-page {
			padding: 1rem 0.5rem;
		}

		.legal-header,
		.legal-content,
		.quick-links {
			padding: 1.5rem;
		}

		.legal-header h1 {
			font-size: 2rem;
		}

		.legal-content h2 {
			font-size: 1.5rem;
		}

		.browser-grid,
		.links-grid {
			grid-template-columns: 1fr;
		}

		table {
			font-size: 0.75rem;
		}

		th,
		td {
			padding: 0.5rem;
		}

		.modal-content {
			padding: 1.5rem;
		}

		.modal-actions {
			flex-direction: column;
		}

		.btn-primary,
		.btn-secondary {
			width: 100%;
		}
	}
</style>