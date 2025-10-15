<script lang="ts">
	import { fade } from 'svelte/transition';

	const lastUpdated = 'October 14, 2025';
</script>

<svelte:head>
	<title>Privacy Policy | Bozzles Ark Vets</title>
	<meta
		name="description"
		content="Privacy Policy for Bozzles Ark Vets. Learn how we collect, use, and protect your personal information."
	/>
	<meta name="robots" content="index, follow" />
</svelte:head>

<div class="legal-page" transition:fade={{ duration: 300 }}>
	<div class="container">
		<nav class="breadcrumb" aria-label="Breadcrumb">
			<a href="/">Home</a>
			<span aria-hidden="true">/</span>
			<span aria-current="page">Privacy Policy</span>
		</nav>

		<header class="legal-header">
			<h1>Privacy Policy</h1>
			<p class="last-updated">Last updated: {lastUpdated}</p>
		</header>

		<article class="legal-content">
			<section id="introduction">
				<h2>1. Introduction</h2>
				<p>
					Bozzles Ark Vets ("we", "our", "us") is committed to protecting the privacy and security
					of your personal information. This Privacy Policy explains how we collect, use, disclose,
					and safeguard your information when you visit our website or use our veterinary services.
				</p>
				<div class="info-box info-box-primary">
					<h3>Practice Details</h3>
					<p>
						<strong>Bozzles Ark Vets</strong><br />
						39 Jersey Way, Barwell, LE9 8HR<br />
						Registered Veterinary Practice (RCVS)
					</p>
				</div>
			</section>

			<section id="information-collection">
				<h2>2. Information We Collect</h2>

				<h3>2.1 Personal Information</h3>
				<p>When you use our services, we may collect the following personal information:</p>
				<ul>
					<li>Contact details (name, address, email, phone number)</li>
					<li>Pet information (name, species, breed, age, medical history)</li>
					<li>Appointment and booking information</li>
					<li>Payment and billing information</li>
					<li>Emergency contact details</li>
					<li>Communication preferences</li>
					<li>Insurance information (where applicable)</li>
				</ul>

				<h3>2.2 Automatically Collected Information</h3>
				<p>When you visit our website, we automatically collect:</p>
				<ul>
					<li>IP address and device information</li>
					<li>Browser type and version</li>
					<li>Pages visited and time spent on site</li>
					<li>Referring website or source</li>
					<li>Cookies and similar tracking technologies</li>
				</ul>

				<h3>2.3 Veterinary Records</h3>
				<p>
					As a veterinary practice, we maintain comprehensive clinical records including:
					examination findings, diagnoses, treatments prescribed, surgical notes, laboratory results,
					imaging studies, and vaccination history.
				</p>
			</section>

			<section id="data-usage">
				<h2>3. How We Use Your Information</h2>
				<p>We process your personal data for the following purposes:</p>

				<div class="usage-grid">
					<div class="usage-card">
						<h4>🏥 Service Delivery</h4>
						<p>To provide veterinary care and treatment to your pet</p>
					</div>
					<div class="usage-card">
						<h4>📅 Appointment Management</h4>
						<p>To schedule, confirm, and manage appointments</p>
					</div>
					<div class="usage-card">
						<h4>💬 Communications</h4>
						<p>To send appointment reminders, health updates, and practice information</p>
					</div>
					<div class="usage-card">
						<h4>⚖️ Legal Obligations</h4>
						<p>To comply with RCVS and regulatory requirements</p>
					</div>
					<div class="usage-card">
						<h4>🚑 Emergency Care</h4>
						<p>To provide emergency veterinary services when needed</p>
					</div>
					<div class="usage-card">
						<h4>💳 Billing</h4>
						<p>To process payments and maintain financial records</p>
					</div>
				</div>
			</section>

			<section id="legal-basis">
				<h2>4. Legal Basis for Processing (UK GDPR)</h2>
				<p>Under UK GDPR and Data Protection Act 2018, we process your data based on:</p>

				<div class="legal-basis-list">
					<div class="basis-item">
						<h4>Contract Performance</h4>
						<p>
							Processing necessary to provide veterinary services under our contract with you when you
							book an appointment or engage our services.
						</p>
					</div>
					<div class="basis-item">
						<h4>Legal Obligation</h4>
						<p>
							RCVS requirements mandate that we maintain clinical records for a minimum of 6 years. We
							also have obligations under veterinary medicines regulations and animal welfare
							legislation.
						</p>
					</div>
					<div class="basis-item">
						<h4>Vital Interests</h4>
						<p>
							Emergency treatment of your pet where consent cannot be obtained, or to protect animal
							welfare.
						</p>
					</div>
					<div class="basis-item">
						<h4>Legitimate Interests</h4>
						<p>
							Practice management, quality improvement, fraud prevention, and direct marketing to
							existing clients (where not objected to).
						</p>
					</div>
					<div class="basis-item">
						<h4>Consent</h4>
						<p>
							Marketing communications to non-clients, optional services, and non-essential data
							processing (which you can withdraw at any time).
						</p>
					</div>
				</div>
			</section>

			<section id="data-sharing">
				<h2>5. Data Sharing and Disclosure</h2>
				<p>We may share your information with:</p>

				<ul>
					<li>
						<strong>Referral Veterinarians:</strong> When specialist care is required
					</li>
					<li>
						<strong>Laboratories:</strong> For diagnostic testing
					</li>
					<li>
						<strong>Insurance Companies:</strong> With your consent, for insurance claims
					</li>
					<li>
						<strong>Veterinary Defence Organizations:</strong> For professional indemnity purposes
					</li>
					<li>
						<strong>Legal Authorities:</strong> When required by law or to protect animal welfare
					</li>
					<li>
						<strong>Service Providers:</strong> IT systems, payment processors (under strict data
						processing agreements)
					</li>
				</ul>

				<div class="info-box info-box-warning">
					<p>
						<strong>Important:</strong> We never sell your personal data to third parties for marketing
						purposes.
					</p>
				</div>
			</section>

			<section id="your-rights">
				<h2>6. Your Rights Under UK GDPR</h2>
				<p>You have the following rights regarding your personal data:</p>

				<div class="rights-grid">
					<div class="right-card">
						<h4>📋 Right to Access</h4>
						<p>Request copies of your personal data and information about how we process it.</p>
					</div>
					<div class="right-card">
						<h4>✏️ Right to Rectification</h4>
						<p>Request correction of inaccurate or incomplete data.</p>
					</div>
					<div class="right-card">
						<h4>🗑️ Right to Erasure</h4>
						<p>Request deletion of your data (subject to legal retention requirements).</p>
					</div>
					<div class="right-card">
						<h4>🚫 Right to Restriction</h4>
						<p>Request that we limit how we use your data in certain circumstances.</p>
					</div>
					<div class="right-card">
						<h4>📦 Right to Data Portability</h4>
						<p>Receive your data in a structured, commonly used format.</p>
					</div>
					<div class="right-card">
						<h4>⛔ Right to Object</h4>
						<p>Object to processing based on legitimate interests or direct marketing.</p>
					</div>
					<div class="right-card">
						<h4>🔄 Withdraw Consent</h4>
						<p>Withdraw consent for marketing communications at any time.</p>
					</div>
					<div class="right-card">
						<h4>👤 Automated Decision-Making</h4>
						<p>Not be subject to decisions based solely on automated processing.</p>
					</div>
				</div>

				<div class="info-box info-box-warning">
					<h3>Important Note on Data Retention</h3>
					<p>
						Under RCVS guidance, clinical records must be retained for a minimum of 6 years. This is
						a legal requirement, and we cannot delete clinical information during this period except
						in exceptional circumstances.
					</p>
				</div>

				<p class="exercise-rights-text">
					To exercise any of these rights, please contact our Data Protection Contact using the
					details in Section 10.
				</p>
			</section>

			<section id="data-retention">
				<h2>7. Data Retention Periods</h2>
				<p>We retain personal data for the following periods:</p>

				<div class="retention-table">
					<table>
						<thead>
							<tr>
								<th>Data Type</th>
								<th>Retention Period</th>
								<th>Legal Basis</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Clinical Records</td>
								<td>Minimum 6 years from last treatment</td>
								<td>RCVS Professional Conduct</td>
							</tr>
							<tr>
								<td>Financial Records</td>
								<td>7 years from end of financial year</td>
								<td>HMRC Requirements</td>
							</tr>
							<tr>
								<td>Consent Records</td>
								<td>Duration of consent + 7 years</td>
								<td>Legal Defence</td>
							</tr>
							<tr>
								<td>Marketing Consent</td>
								<td>Until withdrawn or 3 years of inactivity</td>
								<td>PECR Regulations</td>
							</tr>
							<tr>
								<td>Website Analytics</td>
								<td>26 months</td>
								<td>Google Analytics Default</td>
							</tr>
							<tr>
								<td>CCTV Footage</td>
								<td>30 days</td>
								<td>ICO Guidance</td>
							</tr>
						</tbody>
					</table>
				</div>

				<p>
					After the retention period expires, we securely delete or anonymize your data unless we
					are legally required to retain it for longer.
				</p>
			</section>

			<section id="data-security">
				<h2>8. Data Security Measures</h2>
				<p>We implement robust technical and organizational measures to protect your data:</p>

				<div class="security-grid">
					<div class="security-item">
						<span class="security-icon">🔒</span>
						<h4>Encryption</h4>
						<p>SSL/TLS encryption for data transmission. Encrypted storage for sensitive records.</p>
					</div>
					<div class="security-item">
						<span class="security-icon">🔐</span>
						<h4>Access Controls</h4>
						<p>Role-based access, multi-factor authentication, and regular access reviews.</p>
					</div>
					<div class="security-item">
						<span class="security-icon">🛡️</span>
						<h4>Network Security</h4>
						<p>Firewalls, intrusion detection, regular security patches and updates.</p>
					</div>
					<div class="security-item">
						<span class="security-icon">💾</span>
						<h4>Backups</h4>
						<p>Regular encrypted backups stored securely offsite with tested recovery procedures.</p>
					</div>
					<div class="security-item">
						<span class="security-icon">👨‍💼</span>
						<h4>Staff Training</h4>
						<p>Mandatory data protection training, confidentiality agreements, and clear policies.</p>
					</div>
					<div class="security-item">
						<span class="security-icon">🔍</span>
						<h4>Audits</h4>
						<p>Regular security audits, penetration testing, and compliance assessments.</p>
					</div>
				</div>

				<div class="info-box info-box-error">
					<h3>Data Breach Notification</h3>
					<p>
						In the unlikely event of a data breach that poses a risk to your rights and freedoms,
						we will notify you and the ICO within 72 hours, as required by UK GDPR.
					</p>
				</div>
			</section>

			<section id="international-transfers">
				<h2>9. International Data Transfers</h2>
				<p>
					We primarily process data within the UK. If we transfer data internationally, we ensure
					adequate safeguards are in place:
				</p>
				<ul>
					<li>UK adequacy decisions (for approved countries)</li>
					<li>Standard Contractual Clauses approved by the ICO</li>
					<li>UK GDPR Article 49 derogations (where applicable)</li>
				</ul>
				<p>
					Any third-party service providers with access to your data are carefully vetted and bound
					by data processing agreements compliant with UK GDPR.
				</p>
			</section>

			<section id="contact-complaints">
				<h2>10. Contact & Complaints</h2>
				<p>
					For any privacy-related queries, to exercise your rights, or to raise a concern, please
					contact us:
				</p>

				<div class="contact-box">
					<h3>Data Protection Contact</h3>
					<p>
						<strong>Email:</strong> privacy@bozzlesarkvets.co.uk<br />
						<strong>Phone:</strong> 01455 710 796<br />
						<strong>Post:</strong> Data Protection Officer<br />
						Bozzles Ark Vets<br />
						39 Jersey Way<br />
						Barwell<br />
						LE9 8HR
					</p>
					<p class="response-time">We aim to respond to all requests within 5 working days.</p>
				</div>

				<h3>Right to Lodge a Complaint</h3>
				<p>
					You have the right to lodge a complaint with the Information Commissioner's Office (ICO)
					if you believe we have not handled your data appropriately:
				</p>
				<div class="contact-box">
					<p>
						<strong>Information Commissioner's Office</strong><br />
						Wycliffe House<br />
						Water Lane<br />
						Wilmslow<br />
						Cheshire<br />
						SK9 5AF<br /><br />
						<strong>Helpline:</strong> 0303 123 1113<br />
						<strong>Website:</strong>
						<a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk </a>
						<br />
						<strong>Report online:</strong>
						
						<a href="https://ico.org.uk/make-a-complaint"
							target="_blank"
							rel="noopener noreferrer">ico.org.uk/make-a-complaint</a>
					</p>
				</div>
			</section>

			<section id="children">
				<h2>11. Children's Privacy</h2>
				<p>
					Our services are provided to pet owners. We do not knowingly collect personal information
					from children under 13 without parental consent. If you are under 18, please ensure a
					parent or guardian is involved in your interactions with our practice.
				</p>
			</section>

			<section id="updates">
				<h2>12. Updates to This Policy</h2>
				<p>
					We may update this Privacy Policy from time to time to reflect changes in our practices,
					legal requirements, or business operations. Material changes will be notified via:
				</p>
				<ul>
					<li>Prominent notice on our website</li>
					<li>Email to registered clients (where we have consent)</li>
					<li>In-person notification at your next appointment</li>
				</ul>
				<p>
					The "Last Updated" date at the top of this policy indicates when it was last revised. We
					encourage you to review this policy periodically.
				</p>
			</section>

			<section id="rcvs-compliance">
				<h2>13. RCVS Professional Standards</h2>
				<p>
					As a registered veterinary practice, we adhere to the Royal College of Veterinary
					Surgeons (RCVS) Code of Professional Conduct, which includes requirements for:
				</p>
				<ul>
					<li>Maintaining accurate and comprehensive clinical records</li>
					<li>Client confidentiality and data protection</li>
					<li>Professional indemnity insurance</li>
					<li>Appropriate communication with clients and referring veterinarians</li>
					<li>Ethical handling of veterinary information</li>
				</ul>
				<p>
					More information about RCVS standards can be found at
					<a href="https://www.rcvs.org.uk" target="_blank" rel="noopener noreferrer"
						>rcvs.org.uk</a
					>
				</p>
			</section>
		</article>

		<aside class="quick-links">
			<h3>Related Policies</h3>
			<nav aria-label="Related policies">
				<a href="/legal/terms" class="quick-link">Terms of Service</a>
				<a href="/legal/cookies" class="quick-link">Cookie Policy</a>
				<a href="/legal/accessibility" class="quick-link">Accessibility Statement</a>
			</nav>
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
		transition: color 0.2s;
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

	.legal-content section:last-child {
		margin-bottom: 0;
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

	.legal-content ul,
	.legal-content ol {
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
		transition: color 0.2s;
	}

	.legal-content a:hover {
		color: #2c5282;
	}

	/* Info Boxes */
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

	.info-box-primary h3 {
		color: #2c5282;
		margin-top: 0;
	}

	.info-box-warning {
		background-color: #fffbeb;
		border-color: #fbbf24;
	}

	.info-box-error {
		background-color: #fef2f2;
		border-color: #ef4444;
	}

	.info-box p {
		margin-bottom: 0.5rem;
	}

	.info-box p:last-child {
		margin-bottom: 0;
	}

	/* Usage Grid */
	.usage-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1rem;
		margin: 1.5rem 0;
	}

	.usage-card {
		background-color: #f7fafc;
		padding: 1.25rem;
		border-radius: 8px;
		border-left: 4px solid #3182ce;
	}

	.usage-card h4 {
		margin-top: 0;
		margin-bottom: 0.5rem;
		color: #1a3c6e;
	}

	.usage-card p {
		margin-bottom: 0;
		font-size: 0.875rem;
	}

	/* Legal Basis List */
	.legal-basis-list {
		margin: 1.5rem 0;
	}

	.basis-item {
		background-color: #f7fafc;
		padding: 1.25rem;
		border-radius: 8px;
		margin-bottom: 1rem;
		border-left: 4px solid #2c5282;
	}

	.basis-item h4 {
		color: #1a3c6e;
		margin-top: 0;
		margin-bottom: 0.5rem;
	}

	.basis-item p {
		margin-bottom: 0;
	}

	/* Rights Grid */
	.rights-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		gap: 1rem;
		margin: 1.5rem 0;
	}

	.right-card {
		background-color: #f7fafc;
		padding: 1.25rem;
		border-radius: 8px;
		text-align: center;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.right-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.right-card h4 {
		margin-top: 0;
		margin-bottom: 0.5rem;
		color: #1a3c6e;
		font-size: 1rem;
	}

	.right-card p {
		margin-bottom: 0;
		font-size: 0.875rem;
	}

	/* Retention Table */
	.retention-table {
		overflow-x: auto;
		margin: 1.5rem 0;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.875rem;
	}

	thead {
		background-color: #1a3c6e;
		color: white;
	}

	th,
	td {
		padding: 0.75rem;
		text-align: left;
		border: 1px solid #e2e8f0;
	}

	tbody tr:nth-child(even) {
		background-color: #f7fafc;
	}

	tbody tr:hover {
		background-color: #ebf8ff;
	}

	/* Security Grid */
	.security-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1.5rem;
		margin: 1.5rem 0;
	}

	.security-item {
		text-align: center;
		padding: 1.5rem;
		background-color: #f7fafc;
		border-radius: 8px;
	}

	.security-icon {
		font-size: 2.5rem;
		display: block;
		margin-bottom: 0.75rem;
	}

	.security-item h4 {
		margin-top: 0;
		margin-bottom: 0.5rem;
		color: #1a3c6e;
	}

	.security-item p {
		margin-bottom: 0;
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

	.contact-box p {
		margin-bottom: 0.5rem;
	}

	.response-time {
		margin-top: 1rem;
		font-style: italic;
		color: #718096;
		font-size: 0.875rem;
	}

	/* Quick Links Sidebar */
	.quick-links {
		background-color: #ffffff;
		padding: 1.5rem;
		border-radius: 12px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
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

	.exercise-rights-text {
		margin-top: 1.5rem;
		padding: 1rem;
		background-color: #ebf8ff;
		border-radius: 6px;
		border-left: 4px solid #3182ce;
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

		.usage-grid,
		.rights-grid,
		.security-grid {
			grid-template-columns: 1fr;
		}

		.retention-table {
			font-size: 0.75rem;
		}

		th,
		td {
			padding: 0.5rem;
		}
	}
</style>