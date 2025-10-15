<script lang="ts">
	import { fade } from 'svelte/transition';

	const lastUpdated = 'October 14, 2025';
</script>

<svelte:head>
	<title>Terms of Service | Bozzles Ark Vets</title>
	<meta
		name="description"
		content="Terms of Service for Bozzles Ark Vets. Read our terms and conditions for using our veterinary services."
	/>
	<meta name="robots" content="index, follow" />
</svelte:head>

<div class="legal-page" transition:fade={{ duration: 300 }}>
	<div class="container">
		<nav class="breadcrumb" aria-label="Breadcrumb">
			<a href="/">Home</a>
			<span aria-hidden="true">/</span>
			<span aria-current="page">Terms of Service</span>
		</nav>

		<header class="legal-header">
			<h1>Terms of Service</h1>
			<p class="last-updated">Last updated: {lastUpdated}</p>
		</header>

		<article class="legal-content">
			<section id="agreement">
				<h2>1. Agreement to Terms</h2>
				<p>
					By accessing or using Bozzles Ark Vets' website, booking appointments, or utilizing our
					veterinary services, you agree to be bound by these Terms of Service and all applicable
					laws and regulations. If you do not agree with any part of these terms, you may not access
					our services.
				</p>
				<p>
					These terms constitute a legally binding agreement between you (the "Client") and Bozzles
					Ark Vets (the "Practice", "we", "us", "our").
				</p>
				<div class="info-box info-box-primary">
					<p>
						<strong>Practice Details:</strong><br />
						Bozzles Ark Vets<br />
						39 Jersey Way, Barwell, LE9 8HR<br />
						Registered with the Royal College of Veterinary Surgeons (RCVS)
					</p>
				</div>
			</section>

			<section id="veterinary-services">
				<h2>2. Veterinary Services</h2>

				<h3>2.1 Professional Standards</h3>
				<p>
					All veterinary services are provided in accordance with the RCVS (Royal College of
					Veterinary Surgeons) Code of Professional Conduct for Veterinary Surgeons and relevant UK
					legislation including:
				</p>
				<ul>
					<li>Veterinary Surgeons Act 1966</li>
					<li>Veterinary Medicines Regulations 2013</li>
					<li>Animal Welfare Act 2006</li>
					<li>Data Protection Act 2018</li>
				</ul>

				<h3>2.2 Scope of Services</h3>
				<p>We provide veterinary services including, but not limited to:</p>
				<ul>
					<li>Consultations and examinations</li>
					<li>Diagnostic testing and imaging</li>
					<li>Surgical procedures</li>
					<li>Preventative care (vaccinations, parasite control)</li>
					<li>Emergency and critical care</li>
					<li>Dental procedures</li>
					<li>Hospitalization</li>
					<li>End of life care</li>
				</ul>

				<h3>2.3 Veterinary-Client-Patient Relationship (VCPR)</h3>
				<p>
					A valid VCPR must exist before we can provide treatment. This requires that we have:
				</p>
				<ul>
					<li>Sufficient knowledge of your pet through examination or regular care</li>
					<li>Assumed responsibility for clinical judgments regarding your pet's health</li>
					<li>Availability for follow-up care or emergency coverage</li>
				</ul>

				<h3>2.4 Limitations and Referrals</h3>
				<p>
					We reserve the right to refer cases to specialist veterinarians when we determine it is in
					the best interest of your pet. We are not obligated to provide services beyond our
					clinical competence or available facilities.
				</p>
			</section>

			<section id="appointments">
				<h2>3. Appointments and Cancellations</h2>

				<h3>3.1 Booking Appointments</h3>
				<ul>
					<li>Appointments are subject to availability</li>
					<li>Online bookings are confirmed via email or SMS</li>
					<li>First appointments require completion of registration forms</li>
					<li>We may request advance payment or deposit for certain procedures</li>
				</ul>

				<h3>3.2 Cancellation Policy</h3>
				<div class="info-box info-box-warning">
					<p>
						<strong>24-Hour Cancellation Notice Required:</strong> Appointments cancelled with less
						than 24 hours' notice may be subject to a cancellation fee of up to 50% of the
						consultation fee.
					</p>
				</div>
				<ul>
					<li>Cancellations must be made by phone or email</li>
					<li>Repeated missed appointments may result in advance payment requirements</li>
					<li>Emergency cancellations will be considered on a case-by-case basis</li>
				</ul>

				<h3>3.3 Emergency Appointments</h3>
				<p>
					Emergency appointments are prioritized based on clinical urgency. We cannot guarantee
					immediate availability for non-emergency cases presenting as emergencies.
				</p>

				<h3>3.4 Late Arrivals</h3>
				<p>
					If you arrive more than 15 minutes late for your appointment, we may need to reschedule
					to accommodate other clients. The cancellation policy may apply.
				</p>
			</section>

			<section id="client-responsibilities">
				<h2>4. Client Responsibilities</h2>

				<h3>4.1 Accurate Information</h3>
				<p>You agree to:</p>
				<ul>
					<li>Provide complete and accurate information about your pet's health history</li>
					<li>Disclose all previous treatments, medications, and allergies</li>
					<li>Inform us of any behavioral issues that may affect examination or treatment</li>
					<li>Update contact information promptly</li>
				</ul>

				<h3>4.2 Treatment Compliance</h3>
				<p>You are responsible for:</p>
				<ul>
					<li>Following prescribed treatment plans and medication instructions</li>
					<li>Administering medications as directed</li>
					<li>Attending follow-up appointments as recommended</li>
					<li>Monitoring your pet's condition and reporting concerns promptly</li>
				</ul>

				<h3>4.3 Pet Handling and Safety</h3>
				<ul>
					<li>
						Ensure your pet is appropriately restrained (leash/carrier) when visiting the practice
					</li>
					<li>Inform staff of any aggressive or fearful behavior</li>
					<li>Supervise your pet in waiting areas</li>
					<li>
						You are liable for any injury or damage caused by your pet on practice premises
					</li>
				</ul>

				<h3>4.4 Consent for Treatment</h3>
				<p>
					By bringing your pet to the practice, you confirm you have authority to consent to
					treatment. For co-owned pets, we may require written consent from all owners for
					significant procedures.
				</p>
			</section>

			<section id="fees-payment">
				<h2>5. Fees and Payment</h2>

				<h3>5.1 Payment Terms</h3>
				<div class="payment-box">
					<p><strong>Payment is due at the time of service</strong></p>
					<p>
						Unless alternative credit arrangements have been agreed in writing, full payment is
						required when you collect your pet or at the conclusion of the consultation.
					</p>
				</div>

				<h3>5.2 Accepted Payment Methods</h3>
				<ul>
					<li>Cash</li>
					<li>Debit and credit cards (Visa, Mastercard, American Express)</li>
					<li>Bank transfer (for invoiced amounts)</li>
					<li>Pet insurance direct claims (where available)</li>
				</ul>

				<h3>5.3 Estimates and Pricing</h3>
				<ul>
					<li>Written estimates provided for procedures expected to exceed £200</li>
					<li>Estimates are not guarantees - final costs may vary based on clinical findings</li>
					<li>Fee schedule available upon request</li>
					<li>Prices subject to change with reasonable notice</li>
				</ul>

				<h3>5.4 Insurance Claims</h3>
				<p>
					While we may assist with insurance claim forms, you remain responsible for payment
					regardless of whether your insurance claim is approved. We recommend checking your policy
					coverage before proceeding with treatment.
				</p>

				<h3>5.5 Overdue Accounts</h3>
				<ul>
					<li>Invoices are due within 14 days unless otherwise agreed</li>
					<li>Interest may be charged on overdue accounts at 8% per annum above Bank of England base rate</li>
					<li>Administration fees may apply for late payment reminders</li>
					<li>
						Overdue accounts may be referred to debt collection agencies (costs passed to debtor)
					</li>
					<li>We reserve the right to refuse further treatment until accounts are settled</li>
				</ul>

				<h3>5.6 Deposits</h3>
				<p>
					We may require deposits for:
				</p>
				<ul>
					<li>Surgical procedures</li>
					<li>Hospitalization</li>
					<li>Out-of-hours care</li>
					<li>Clients with overdue accounts</li>
				</ul>
			</section>

			<section id="medical-records">
				<h2>6. Medical Records and Information</h2>

				<h3>6.1 Record Ownership and Retention</h3>
				<p>
					Clinical records are the property of Bozzles Ark Vets and are retained in accordance with
					RCVS requirements (minimum 6 years from last treatment).
				</p>

				<h3>6.2 Access to Records</h3>
				<p>
					You are entitled to request copies of your pet's medical records under the Data
					Protection Act 2018. A reasonable administrative fee may apply.
				</p>

				<h3>6.3 Third-Party Access</h3>
				<ul>
					<li>We require written authorization to release records to third parties</li>
					<li>
						Emergency situations may necessitate sharing information without prior consent to
						protect animal welfare
					</li>
					<li>We may share information with referral veterinarians involved in your pet's care</li>
				</ul>

				<h3>6.4 Clinical Information for Insurance</h3>
				<p>
					By submitting insurance claims, you authorize us to provide necessary clinical
					information to insurance companies.
				</p>
			</section>

			<section id="liability">
				<h2>7. Limitation of Liability</h2>

				<div class="info-box info-box-warning">
					<h3>Important Notice</h3>
					<p>
						Veterinary medicine involves inherent risks and uncertainties. While we strive to
						provide the highest standard of care, outcomes cannot be guaranteed.
					</p>
				</div>

				<h3>7.1 Standard of Care</h3>
				<p>
					We undertake to exercise reasonable skill and care consistent with a competent veterinary
					practitioner. This does not guarantee specific outcomes or successful treatment.
				</p>

				<h3>7.2 Limitations</h3>
				<p>Our liability is limited as follows:</p>
				<ul>
					<li>
						We are not liable for consequential losses (e.g., breeding value, competition
						earnings, emotional distress)
					</li>
					<li>
						Our liability is limited to the direct costs of services provided, up to a maximum of
						£5,000 per incident
					</li>
					<li>
						We are not liable for complications arising from failure to follow post-treatment
						instructions
					</li>
					<li>We are not liable for pre-existing conditions that were undisclosed</li>
				</ul>

				<h3>7.3 Exclusions</h3>
				<p>Nothing in these terms excludes or limits liability for:</p>
				<ul>
					<li>Death or personal injury caused by negligence</li>
					<li>Fraud or fraudulent misrepresentation</li>
					<li>Breach of statutory duties that cannot be excluded by law</li>
				</ul>

				<h3>7.4 Professional Indemnity</h3>
				<p>
					We maintain professional indemnity insurance as required by the RCVS. Details available
					upon request.
				</p>
			</section>

			<section id="controlled-drugs">
				<h2>8. Controlled Drugs and Medicines</h2>

				<h3>8.1 Prescription Requirements</h3>
				<p>
					Prescription-only medicines (POM-V) can only be supplied to clients with whom we have
					established a valid VCPR. We comply with all Veterinary Medicines Regulations.
				</p>

				<h3>8.2 Written Prescriptions</h3>
				<p>
					You may request a written prescription to obtain medicines elsewhere. A prescription fee
					will apply. We are not obligated to prescribe medicines we consider clinically
					inappropriate.
				</p>

				<h3>8.3 Controlled Drugs</h3>
				<p>
					Schedule 2 and 3 controlled drugs are subject to strict legal requirements. We maintain
					detailed records and may require identification for dispensing.
				</p>
			</section>

			<section id="complaints">
				<h2>9. Complaints Procedure</h2>

				<h3>9.1 Internal Complaints</h3>
				<p>We take complaints seriously. If you are dissatisfied with our service:</p>
				<ol>
					<li>Speak to the veterinary surgeon or staff member involved</li>
					<li>If unresolved, request to speak with the Practice Manager</li>
					<li>Submit a formal written complaint to: complaints@bozzlesarkvets.co.uk</li>
				</ol>
				<p>We aim to acknowledge complaints within 2 working days and resolve within 10 working days.</p>

				<h3>9.2 External Review</h3>
				<p>If our response is unsatisfactory, you may contact:</p>
				<div class="contact-box">
					<p>
						<strong>Veterinary Client Mediation Service</strong><br />
						Website: <a href="https://www.vetmediation.co.uk" target="_blank" rel="noopener">vetmediation.co.uk</a>
					</p>
					<p>
						<strong>Royal College of Veterinary Surgeons (RCVS)</strong><br />
						For professional conduct concerns<br />
						Website: <a href="https://www.rcvs.org.uk" target="_blank" rel="noopener">rcvs.org.uk</a>
					</p>
				</div>
			</section>

			<section id="website-use">
				<h2>10. Website Use and Intellectual Property</h2>

				<h3>10.1 Acceptable Use</h3>
				<p>When using our website, you agree not to:</p>
				<ul>
					<li>Attempt unauthorized access to systems or data</li>
					<li>Transmit viruses, malware, or harmful code</li>
					<li>Use automated systems to scrape or data mine content</li>
					<li>Submit false information in booking forms</li>
					<li>Use the website for any unlawful purpose</li>
				</ul>

				<h3>10.2 Intellectual Property</h3>
				<p>
					All content on this website (text, images, logos, graphics, videos) is owned by Bozzles
					Ark Vets or licensed to us. Unauthorized reproduction, distribution, or commercial use is
					prohibited.
				</p>

				<h3>10.3 User-Generated Content</h3>
				<p>
					By submitting reviews, testimonials, or other content, you grant us a non-exclusive,
					royalty-free license to use, reproduce, and display such content for promotional purposes.
				</p>

				<h3>10.4 Website Availability</h3>
				<p>
					We do not guarantee uninterrupted website availability. We reserve the right to suspend
					or modify website features without notice for maintenance or improvements.
				</p>
			</section>

			<section id="confidentiality">
				<h2>11. Confidentiality and Data Protection</h2>
				<p>
					We are committed to protecting your privacy and handling your data in accordance with UK
					GDPR and Data Protection Act 2018. Please refer to our
					<a href="/legal/privacy">Privacy Policy</a> for detailed information on how we collect,
					use, and protect your personal data.
				</p>
			</section>

			<section id="termination">
				<h2>12. Termination of Services</h2>

				<h3>12.1 Client Termination</h3>
				<p>
					You may terminate your relationship with us at any time. Outstanding fees must be settled
					before records are transferred.
				</p>

				<h3>12.2 Practice Termination</h3>
				<p>We reserve the right to terminate our services if:</p>
				<ul>
					<li>Payment obligations are not met</li>
					<li>You fail to comply with treatment recommendations, endangering your pet</li>
					<li>Abusive or threatening behavior toward staff</li>
					<li>Breach of these terms</li>
				</ul>
				<p>
					Termination will be with reasonable notice except in cases of serious misconduct.
					Emergency care obligations will be met during any notice period.
				</p>
			</section>

			<section id="indemnity">
				<h2>13. Client Indemnity</h2>
				<p>
					You agree to indemnify and hold harmless Bozzles Ark Vets, its staff, and veterinarians
					from any claims, damages, or expenses arising from:
				</p>
				<ul>
					<li>Your pet's actions causing injury or property damage</li>
					<li>Your provision of false or incomplete information</li>
					<li>Your failure to follow treatment instructions</li>
					<li>Your breach of these terms</li>
				</ul>
			</section>

			<section id="governing-law">
				<h2>14. Governing Law and Jurisdiction</h2>
				<p>
					These Terms of Service are governed by the laws of England and Wales. Any disputes arising
					from these terms or our services will be subject to the exclusive jurisdiction of the
					courts of England and Wales.
				</p>
			</section>

			<section id="changes">
				<h2>15. Changes to Terms</h2>
				<p>
					We reserve the right to modify these terms at any time. Material changes will be notified
					via our website and, where practicable, by email. Continued use of our services after
					changes constitutes acceptance of the modified terms.
				</p>
			</section>

			<section id="severability">
				<h2>16. Severability</h2>
				<p>
					If any provision of these terms is found to be invalid or unenforceable, the remaining
					provisions will continue in full force and effect.
				</p>
			</section>

			<section id="contact">
				<h2>17. Contact Information</h2>
				<p>For questions about these Terms of Service, please contact us:</p>
				<div class="contact-box">
					<p>
						<strong>Bozzles Ark Vets</strong><br />
						39 Jersey Way<br />
						Barwell<br />
						LE9 8HR<br /><br />
						<strong>Email:</strong> info@bozzlesarkvets.co.uk<br />
						<strong>Phone:</strong> 01455 710 796<br />
						<strong>Emergency Line:</strong> [Emergency Number]
					</p>
				</div>
			</section>

			<div class="acceptance-notice">
				<p>
					<strong>By using our services, you acknowledge that you have read, understood, and agree
					to be bound by these Terms of Service.</strong>
				</p>
			</div>
		</article>

		<aside class="quick-links">
			<h3>Related Policies</h3>
			<nav aria-label="Related policies">
				<a href="/legal/privacy" class="quick-link">Privacy Policy</a>
				<a href="/legal/cookies" class="quick-link">Cookie Policy</a>
				<a href="/legal/accessibility" class="quick-link">Accessibility Statement</a>
			</nav>
		</aside>
	</div>
</div>

<style>
	/* Reuse styles from Privacy Policy with specific additions */
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

	.info-box p {
		margin-bottom: 0.5rem;
	}

	.info-box p:last-child {
		margin-bottom: 0;
	}

	.payment-box {
		background-color: #f0fdf4;
		border-left: 4px solid #4ade80;
		padding: 1.25rem;
		border-radius: 8px;
		margin: 1.5rem 0;
	}

	.payment-box p {
		margin-bottom: 0.5rem;
	}

	.payment-box p:first-child {
		font-size: 1.125rem;
		font-weight: 600;
		color: #166534;
	}

	.contact-box {
		background-color: #f7fafc;
		padding: 1.5rem;
		border-radius: 8px;
		border-left: 4px solid #1a3c6e;
		margin: 1.5rem 0;
	}

	.contact-box p {
		margin-bottom: 0.75rem;
	}

	.acceptance-notice {
		background-color: #fef2f2;
		border: 2px solid #ef4444;
		padding: 1.5rem;
		border-radius: 8px;
		margin-top: 2rem;
		text-align: center;
	}

	.acceptance-notice p {
		color: #991b1b;
		font-size: 1.125rem;
		margin: 0;
	}

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
	}
</style>