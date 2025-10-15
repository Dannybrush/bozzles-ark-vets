<script lang="ts">
	import { fade } from 'svelte/transition';

	const lastUpdated = 'October 14, 2025';
</script>

<svelte:head>
	<title>Accessibility Statement | Bozzles Ark Vets</title>
	<meta
		name="description"
		content="Accessibility Statement for Bozzles Ark Vets. Learn about our commitment to digital accessibility and WCAG compliance."
	/>
	<meta name="robots" content="index, follow" />
</svelte:head>

<div class="legal-page" transition:fade={{ duration: 300 }}>
	<div class="container">
		<nav class="breadcrumb" aria-label="Breadcrumb">
			<a href="/">Home</a>
			<span aria-hidden="true">/</span>
			<span aria-current="page">Accessibility Statement</span>
		</nav>

		<header class="legal-header">
			<h1>Accessibility Statement</h1>
			<p class="last-updated">Last updated: {lastUpdated}</p>
		</header>

		<article class="legal-content">
			<section id="features">
				<h2>Accessibility Features</h2>
				<p>Our website includes the following accessibility features:</p>

				<div class="features-grid">
					<div class="feature-card">
						<span class="feature-icon">⌨️</span>
						<h4>Keyboard Navigation</h4>
						<p>Full keyboard navigation support with visible focus indicators on all interactive elements.</p>
					</div>
					<div class="feature-card">
						<span class="feature-icon">🎨</span>
						<h4>Color Contrast</h4>
						<p>Minimum 4.5:1 contrast ratio for normal text and 3:1 for large text and UI components.</p>
					</div>
					<div class="feature-card">
						<span class="feature-icon">🖼️</span>
						<h4>Alternative Text</h4>
						<p>Descriptive alt text for all meaningful images, icons, and graphics.</p>
					</div>
					<div class="feature-card">
						<span class="feature-icon">📱</span>
						<h4>Responsive Design</h4>
						<p>Mobile-friendly layout that works at various screen sizes and zoom levels up to 200%.</p>
					</div>
					<div class="feature-card">
						<span class="feature-icon">🔤</span>
						<h4>Semantic HTML</h4>
						<p>Proper HTML5 semantic elements for clear document structure and navigation.</p>
					</div>
					<div class="feature-card">
						<span class="feature-icon">🏷️</span>
						<h4>Form Labels</h4>
						<p>Clear labels, instructions, and error messages for all form inputs.</p>
					</div>
					<div class="feature-card">
						<span class="feature-icon">🎯</span>
						<h4>Focus Management</h4>
						<p>Logical tab order and skip navigation links to bypass repetitive content.</p>
					</div>
					<div class="feature-card">
						<span class="feature-icon">🔊</span>
						<h4>ARIA Support</h4>
						<p>ARIA landmarks, roles, and properties where appropriate for screen reader compatibility.</p>
					</div>
					<div class="feature-card">
						<span class="feature-icon">📝</span>
						<h4>Clear Language</h4>
						<p>Plain English content with clear headings and well-organized information.</p>
					</div>
					<div class="feature-card">
						<span class="feature-icon">🎬</span>
						<h4>Media Accessibility</h4>
						<p>Captions and transcripts for video content where applicable.</p>
					</div>
					<div class="feature-card">
						<span class="feature-icon">⏸️</span>
						<h4>Motion Control</h4>
						<p>Ability to pause, stop, or hide moving, blinking, or auto-updating content.</p>
					</div>
					<div class="feature-card">
						<span class="feature-icon">📏</span>
						<h4>Consistent Layout</h4>
						<p>Consistent navigation, layout, and interaction patterns throughout the site.</p>
					</div>
				</div>
			</section>

			<section id="assistive-tech">
				<h2>Assistive Technology Compatibility</h2>
				<p>
					This website is designed to be compatible with the following assistive technologies:
				</p>

				<div class="tech-list">
					<div class="tech-item">
						<h4>🎤 Screen Readers</h4>
						<ul>
							<li>JAWS (Job Access With Speech)</li>
							<li>NVDA (NonVisual Desktop Access)</li>
							<li>VoiceOver (macOS/iOS)</li>
							<li>TalkBack (Android)</li>
							<li>Narrator (Windows)</li>
						</ul>
					</div>
					<div class="tech-item">
						<h4>🔍 Screen Magnification</h4>
						<ul>
							<li>ZoomText</li>
							<li>MAGic</li>
							<li>Built-in browser zoom (up to 200%)</li>
							<li>Operating system magnifiers</li>
						</ul>
					</div>
					<div class="tech-item">
						<h4>🗣️ Speech Recognition</h4>
						<ul>
							<li>Dragon NaturallySpeaking</li>
							<li>Windows Speech Recognition</li>
							<li>macOS Dictation</li>
						</ul>
					</div>
					<div class="tech-item">
						<h4>⌨️ Alternative Input</h4>
						<ul>
							<li>Switch devices</li>
							<li>Eye tracking systems</li>
							<li>Keyboard-only navigation</li>
							<li>Voice control</li>
						</ul>
					</div>
				</div>

				<h3>Recommended Browsers</h3>
				<p>For the best accessibility experience, we recommend using the latest versions of:</p>
				<ul>
					<li>Google Chrome with ChromeVox (screen reader extension)</li>
					<li>Mozilla Firefox with NVDA</li>
					<li>Safari with VoiceOver (macOS/iOS)</li>
					<li>Microsoft Edge with Narrator</li>
				</ul>
			</section>

			<section id="limitations">
				<h2>Known Limitations</h2>
				<p>
					Despite our best efforts to ensure accessibility, some limitations may exist. We are
					aware of the following issues and are working to address them:
				</p>

				<div class="info-box info-box-warning">
					<h3>Current Known Issues</h3>
					<ul>
						<li>
							<strong>Third-Party Content:</strong> Some embedded third-party content (maps, booking widgets)
							may not be fully accessible. We are working with providers to improve accessibility.
						</li>
						<li>
							<strong>PDF Documents:</strong> Some older PDF documents may not be fully tagged for accessibility.
							We are systematically updating these files.
						</li>
						<li>
							<strong>Historical Media:</strong> Some legacy images and videos may lack comprehensive alt
							text or captions. We are actively adding these.
						</li>
						<li>
							<strong>Complex Forms:</strong> The appointment booking system is being enhanced for improved
							screen reader compatibility.
						</li>
					</ul>
				</div>

				<p>
					If you encounter any accessibility barriers not listed here, please report them using the
					contact information in Section 8.
				</p>
			</section>

			<section id="physical-access">
				<h2>Physical Accessibility of Our Practice</h2>
				<p>
					In addition to digital accessibility, our veterinary practice facilities include the
					following accessibility features:
				</p>

				<div class="physical-features">
					<div class="physical-card">
						<h4>♿ Building Access</h4>
						<ul>
							<li>Ground floor entrance with no steps</li>
							<li>Automatic entrance doors</li>
							<li>Wide doorways (minimum 850mm)</li>
							<li>Level access throughout practice</li>
							<li>Non-slip flooring</li>
						</ul>
					</div>
					<div class="physical-card">
						<h4>🅿️ Parking</h4>
						<ul>
							<li>Designated accessible parking spaces</li>
							<li>Close proximity to entrance</li>
							<li>Clearly marked bays</li>
							<li>Level surface</li>
						</ul>
					</div>
					<div class="physical-card">
						<h4>🚻 Facilities</h4>
						<ul>
							<li>Accessible toilet with grab rails</li>
							<li>Emergency pull cord</li>
							<li>Wide corridors for wheelchair access</li>
							<li>Adequate turning space</li>
						</ul>
					</div>
					<div class="physical-card">
						<h4>👂 Hearing Support</h4>
						<ul>
							<li>Hearing loop system at reception</li>
							<li>Clear signage throughout</li>
							<li>Visual alerts available</li>
							<li>Quiet consultation rooms</li>
						</ul>
					</div>
					<div class="physical-card">
						<h4>👁️ Visual Support</h4>
						<ul>
							<li>Good lighting throughout</li>
							<li>High contrast signage</li>
							<li>Large print materials available</li>
							<li>Clear, simple layouts</li>
						</ul>
					</div>
					<div class="physical-card">
						<h4>🐕‍🦺 Assistance Animals</h4>
						<ul>
							<li>Guide dogs welcome</li>
							<li>Assistance dogs welcome</li>
							<li>Designated waiting areas</li>
							<li>Water bowls provided</li>
						</ul>
					</div>
				</div>

				<p class="access-note">
					<strong>Special Requirements:</strong> If you have specific accessibility needs for your
					visit, please contact us in advance so we can make appropriate arrangements.
				</p>
			</section>

			<section id="testing">
				<h2>Testing and Evaluation</h2>
				<p>We regularly assess the accessibility of our website using:</p>

				<h3>Automated Testing Tools</h3>
				<ul>
					<li>WAVE (Web Accessibility Evaluation Tool)</li>
					<li>axe DevTools browser extension</li>
					<li>Lighthouse accessibility audits</li>
					<li>Color contrast analyzers (WebAIM, Stark)</li>
					<li>HTML5 and ARIA validators</li>
				</ul>

				<h3>Manual Testing</h3>
				<ul>
					<li>Keyboard-only navigation testing</li>
					<li>Screen reader testing (NVDA, JAWS, VoiceOver)</li>
					<li>Mobile device and responsive design testing</li>
					<li>Zoom and magnification testing (up to 400%)</li>
					<li>Focus order and skip link functionality</li>
					<li>Form submission and error handling</li>
				</ul>

				<h3>User Testing</h3>
				<p>
					We engage users with disabilities in our testing process to ensure real-world
					accessibility. If you would like to participate in accessibility testing, please contact
					us.
				</p>

				<div class="info-box info-box-primary">
					<p>
						<strong>Accessibility Audits:</strong> We conduct comprehensive accessibility audits
						every 6 months and address identified issues promptly.
					</p>
				</div>
			</section>

			<section id="training">
				<h2>Staff Training and Awareness</h2>
				<p>
					We are committed to accessibility awareness across our organization:
				</p>
				<ul>
					<li>All staff receive disability awareness training</li>
					<li>Web development team trained in WCAG 2.2 standards</li>
					<li>Content creators trained in accessible writing and document creation</li>
					<li>Regular updates on accessibility best practices</li>
					<li>Dedicated accessibility champion within the team</li>
				</ul>
			</section>

			<section id="feedback">
				<h2>Feedback and Contact Information</h2>
				<p>
					We welcome your feedback on the accessibility of our website and services. If you
					encounter accessibility barriers, please let us know:
				</p>

				<div class="contact-box">
					<h3>Accessibility Coordinator</h3>
					<p>
						<strong>Email:</strong> accessibility@bozzlesarkvets.co.uk<br />
						<strong>Phone:</strong> 01455 710 796<br />
						<strong>Post:</strong> Accessibility Team<br />
						Bozzles Ark Vets<br />
						39 Jersey Way<br />
						Barwell<br />
						LE9 8HR
					</p>
					<p class="response-commitment">
						We aim to respond to accessibility feedback within <strong>3 business days</strong> and
						provide a resolution within <strong>10 business days</strong>.
					</p>
				</div>

				<h3>When Contacting Us, Please Include:</h3>
				<ul>
					<li>The web page URL where you experienced the issue</li>
					<li>A description of the problem</li>
					<li>The assistive technology you were using (if applicable)</li>
					<li>Your browser and operating system</li>
					<li>Any error messages you received</li>
				</ul>
			</section>

			<section id="alternative-formats">
				<h2>Alternative Formats</h2>
				<p>
					If you require information from our website in an alternative format, we can provide:
				</p>
				<ul>
					<li>Large print documents</li>
					<li>Audio recordings</li>
					<li>Braille documents (upon request)</li>
					<li>Easy Read versions</li>
					<li>Email or postal correspondence</li>
					<li>Phone consultations to explain information</li>
				</ul>
				<p>
					Please contact us using the details above, and we will work to provide the information in
					your preferred format within a reasonable timeframe (typically 5-10 business days).
				</p>
			</section>

			<section id="technical">
				<h2>Technical Specifications</h2>
				<p>
					The accessibility of this website relies on the following technologies working in
					conjunction with your web browser and assistive technologies:
				</p>
				<ul>
					<li>HTML5 for semantic structure</li>
					<li>CSS3 for visual presentation and responsive design</li>
					<li>JavaScript for interactive components (with graceful degradation)</li>
					<li>WAI-ARIA for enhanced accessibility information</li>
					<li>SVG for scalable graphics and icons</li>
				</ul>

				<h3>Progressive Enhancement</h3>
				<p>
					Our website is built using progressive enhancement principles, ensuring core content and
					functionality are available even when JavaScript is disabled or unavailable.
				</p>
			</section>

			<section id="enforcement">
				<h2>Enforcement and Complaints</h2>
				<p>
					We take accessibility compliance seriously. If you are not satisfied with our response to
					your accessibility concerns, you have the right to escalate your complaint:
				</p>

				<h3>UK Equality and Human Rights Commission (EHRC)</h3>
				<div class="contact-box">
					<p>
						<strong>Website:</strong>
						<a href="https://www.equalityhumanrights.com" target="_blank" rel="noopener"
							>equalityhumanrights.com</a
						><br />
						<strong>Phone:</strong> 0808 800 0082<br />
						<strong>Textphone:</strong> 0808 800 0084
					</p>
				</div>

				<h3>Equality Advisory and Support Service (EASS)</h3>
				<div class="contact-box">
					<p>
						<strong>Website:</strong>
						<a href="https://www.equalityadvisoryservice.com" target="_blank" rel="noopener"
							>equalityadvisoryservice.com</a
						><br />
						<strong>Phone:</strong> 0808 800 0082<br />
						<strong>Post:</strong> FREEPOST EASS HELPLINE FPN6521
					</p>
				</div>
			</section>

			<section id="updates">
				<h2>Updates to This Statement</h2>
				<p>
					We review and update this accessibility statement regularly to reflect improvements to our
					website and changes in accessibility standards. This statement was last updated on
					{lastUpdated}.
				</p>
				<p>
					We continuously work to improve the accessibility of our website. If you notice any
					improvements or ongoing issues, please let us know.
				</p>
			</section>

			<section id="commitment-ongoing">
				<h2>Our Ongoing Commitment</h2>
				<div class="commitment-box">
					<p>
						Accessibility is not a one-time achievement but an ongoing commitment. We pledge to:
					</p>
					<ul>
						<li>Regularly audit and test our website for accessibility</li>
						<li>Promptly address reported accessibility issues</li>
						<li>Include accessibility in all new features and content</li>
						<li>Engage with the disability community for feedback</li>
						<li>Stay current with evolving accessibility standards</li>
						<li>Train our team on accessibility best practices</li>
						<li>Make accessibility a core part of our organizational culture</li>
					</ul>
				</div>
			</section>
		</article>

		<aside class="quick-links">
			<h3>Related Policies</h3>
			<nav aria-label="Related policies">
				<a href="/legal/privacy" class="quick-link">Privacy Policy</a>
				<a href="/legal/terms" class="quick-link">Terms of Service</a>
				<a href="/legal/cookies" class="quick-link">Cookie Policy</a>
			</nav>

			<div class="help-box">
				<h4>Need Help?</h4>
				<p>
					If you're having difficulty accessing our website or services, please contact our
					accessibility team.
				</p>
				<a href="mailto:accessibility@bozzlesarkvets.co.uk" class="help-button"
					>Contact Accessibility Team</a
				>
			</div>
		</aside>
	</div>
</div>

<style>
	.legal-page {
		background-color: #f7fafc;
		min-height: 100vh;
		padding: 2rem 1rem;
	}

	.container {
		max-width: 1000px;
		margin: 0 auto;
	}

	.breadcrumb {
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
		margin-bottom: 2rem;
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

	.conformance-box {
		background: linear-gradient(135deg, #ebf8ff 0%, #f7fafc 100%);
		padding: 1.5rem;
		border-radius: 8px;
		border-left: 4px solid #3182ce;
		margin: 1.5rem 0;
	}

	.conformance-box h3 {
		margin-top: 0;
		color: #1a3c6e;
	}

	.conformance-status {
		margin: 1rem 0;
	}

	.status-badge {
		display: inline-block;
		background-color: #fbbf24;
		color: #78350f;
		padding: 0.5rem 1rem;
		border-radius: 6px;
		font-weight: 600;
		font-size: 0.875rem;
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1.25rem;
		margin: 1.5rem 0;
	}

	.feature-card {
		background-color: #f7fafc;
		padding: 1.25rem;
		border-radius: 8px;
		text-align: center;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.feature-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.feature-icon {
		font-size: 2rem;
		display: block;
		margin-bottom: 0.75rem;
	}

	.feature-card h4 {
		margin-top: 0;
		margin-bottom: 0.5rem;
		color: #1a3c6e;
		font-size: 1rem;
	}

	.feature-card p {
		margin-bottom: 0;
		font-size: 0.875rem;
	}

	.tech-list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1.5rem;
		margin: 1.5rem 0;
	}

	.tech-item {
		background-color: #f7fafc;
		padding: 1.5rem;
		border-radius: 8px;
		border-left: 4px solid #2c5282;
	}

	.tech-item h4 {
		margin-top: 0;
		color: #1a3c6e;
	}

	.tech-item ul {
		margin-bottom: 0;
	}

	.physical-features {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1.5rem;
		margin: 1.5rem 0;
	}

	.physical-card {
		background: linear-gradient(135deg, #f7fafc 0%, #ffffff 100%);
		padding: 1.5rem;
		border-radius: 8px;
		border: 2px solid #e2e8f0;
	}

	.physical-card h4 {
		margin-top: 0;
		color: #1a3c6e;
		margin-bottom: 1rem;
	}

	.physical-card ul {
		margin-bottom: 0;
		font-size: 0.875rem;
	}

	.access-note {
		background-color: #ebf8ff;
		padding: 1rem;
		border-radius: 6px;
		border-left: 4px solid #3182ce;
		margin-top: 1.5rem;
	}

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

	.response-commitment {
		margin-top: 1rem;
		padding-top: 1rem;
		border-top: 1px solid #e2e8f0;
		font-size: 0.875rem;
	}

	.commitment-box {
		background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
		padding: 1.5rem;
		border-radius: 8px;
		border-left: 4px solid #4ade80;
		margin: 1.5rem 0;
	}

	.commitment-box p {
		font-weight: 500;
		color: #166534;
	}

	.commitment-box ul {
		color: #15803d;
	}

	.quick-links {
		background-color: #ffffff;
		padding: 1.5rem;
		border-radius: 12px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
		margin-bottom: 1.5rem;
	}

	.quick-links h3 {
		font-size: 1.25rem;
		color: #1a3c6e;
		margin-bottom: 1rem;
	}

	.quick-links nav {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
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
	}

	.quick-link:hover {
		background-color: #ebf8ff;
		transform: translateX(4px);
	}

	.help-box {
		background-color: #f7fafc;
		padding: 1.5rem;
		border-radius: 8px;
		margin-top: 1.5rem;
	}

	.help-box h4 {
		color: #1a3c6e;
		margin-top: 0;
		margin-bottom: 0.75rem;
	}

	.help-box p {
		font-size: 0.875rem;
		color: #4a5568;
		margin-bottom: 1rem;
	}

	.help-button {
		display: inline-block;
		background-color: #1a3c6e;
		color: white;
		padding: 0.75rem 1.25rem;
		border-radius: 6px;
		text-decoration: none;
		font-weight: 500;
		font-size: 0.875rem;
		transition: background-color 0.2s;
	}

	.help-button:hover {
		background-color: #15325a;
	}

	@media (max-width: 768px) {
		.legal-page {
			padding: 1rem 0.5rem;
		}

		.legal-header,
		.legal-content {
			padding: 1.5rem;
		}

		.legal-header h1 {
			font-size: 2rem;
		}

		.legal-content h2 {
			font-size: 1.5rem;
		}

		.features-grid,
		.tech-list,
		.physical-features {
			grid-template-columns: 1fr;
		}
	}
</style>