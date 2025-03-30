import 'dotenv/config'

// This file is kept for backwards compatibility
// Email sending is now handled directly in the client
// through the contact-form.tsx component

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  console.log("Email function called from server (for backward compatibility)");
  console.log("Actual email sending is now handled in the client with Emailjs");
  return true;
}