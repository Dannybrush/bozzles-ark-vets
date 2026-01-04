/**
 * Server-side Contact Form Handler
 * Handles form submission with validation and email sending
 */

import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
  /**
   * Handle contact form submission
   */
  default: async ({ request }) => {
    const data = await request.formData();
    
    const name = data.get('name')?.toString().trim() || '';
    const email = data.get('email')?.toString().trim() || '';
    const phone = data.get('phone')?.toString().trim() || '';
    const subject = data.get('subject')?.toString() || 'general';
    const message = data.get('message')?.toString().trim() || '';
    
    // Server-side validation
    const errors: Record<string, string> = {};
    
    if (!name) {
      errors.name = 'Name is required';
    } else if (name.length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }
    
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (phone && !/^[\d\s\-\+\(\)]+$/.test(phone)) {
      errors.phone = 'Please enter a valid phone number';
    }
    
    if (!message) {
      errors.message = 'Message is required';
    } else if (message.length < 10) {
      errors.message = 'Message must be at least 10 characters';
    } else if (message.length > 2000) {
      errors.message = 'Message must be less than 2000 characters';
    }
    
    // Return validation errors
    if (Object.keys(errors).length > 0) {
      return fail(400, {
        errors,
        values: { name, email, phone, subject, message }
      });
    }
    
    // Rate limiting check (basic implementation)
    // In production, use a proper rate limiting solution like upstash/ratelimit
    const submissionKey = `contact_${email}`;
    // TODO: Implement rate limiting with Redis or similar
    
    try {
      // Send email notification
      await sendContactEmail({
        name,
        email,
        phone,
        subject,
        message
      });
      
      // Log submission (optional)
      console.log('Contact form submitted:', {
        name,
        email,
        subject,
        timestamp: new Date().toISOString()
      });
      
      return {
        success: true,
        message: 'Thank you for your message! We\'ll get back to you within 24 hours.'
      };
    } catch (error) {
      console.error('Error processing contact form:', error);
      
      return fail(500, {
        error: 'Sorry, something went wrong. Please try calling us directly at 01455 710 796.',
        values: { name, email, phone, subject, message }
      });
    }
  }
} satisfies Actions;

/**
 * Send contact form email
 * TODO: Implement with your email service (SendGrid, Mailgun, Resend, etc.)
 */
async function sendContactEmail(data: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}): Promise<void> {
  // Example using Resend (https://resend.com)
  /*
  import { Resend } from 'resend';
  
  const resend = new Resend(process.env.RESEND_API_KEY);
  
  await resend.emails.send({
    from: 'Contact Form <noreply@bozzlesarkvets.co.uk>',
    to: 'care@bozzlesarkvets.co.uk',
    replyTo: data.email,
    subject: `New Contact Form: ${getSubjectLabel(data.subject)}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>From:</strong> ${data.name} (${data.email})</p>
      ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
      <p><strong>Subject:</strong> ${getSubjectLabel(data.subject)}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><small>Sent via Bozzles Ark Vets contact form at ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}</small></p>
    `
  });
  */
  
  // For development: Just log the email
  console.log('Email would be sent:', {
    to: 'care@bozzlesarkvets.co.uk',
    from: data.email,
    subject: `Contact Form: ${getSubjectLabel(data.subject)}`,
    body: data.message
  });
  
  // Simulate async operation
  await new Promise(resolve => setTimeout(resolve, 500));
}

/**
 * Get human-readable subject label
 */
function getSubjectLabel(subject: string): string {
  const labels: Record<string, string> = {
    general: 'General Inquiry',
    appointment: 'Appointment Request',
    emergency: 'Emergency',
    billing: 'Billing Question',
    prescription: 'Prescription Refill',
    feedback: 'Feedback or Complaint',
    other: 'Other'
  };
  
  return labels[subject] || subject;
}