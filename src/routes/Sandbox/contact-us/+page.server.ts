// src/routes/contact/+page.server.js
export const actions = {
    default: async ({ request }) => {
      // Get form data
      const formData = await request.formData();
      const name = formData.get('name');
      const email = formData.get('email');
      const phone = formData.get('phone');
      const subject = formData.get('subject');
      const message = formData.get('message');
      
      // Validate the form data
      if (!name || !email || !message) {
        return {
          success: false,
          message: 'Please fill out all required fields'
        };
      }
      
      try {
        // In a real application, you would send the data to your email service or API here
        // For example:
        // await sendEmailToStaff({ name, email, phone, subject, message });
        
        // For demonstration purposes, we're just returning a success message
        return {
          success: true,
          message: 'Thank you for your message! We will get back to you soon.'
        };
      } catch (error) {
        console.error('Error sending contact form:', error);
        return {
          success: false,
          message: 'An error occurred. Please try again later.'
        };
      }
    }
  };