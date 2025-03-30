import mail from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  console.warn("SENDGRID_API_KEY environment variable is not set, emails will be logged but not sent");
} else {
  mail.setApiKey(process.env.SENDGRID_API_KEY);
}

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  try {
    // Log email for development purposes
    console.log("--------- EMAIL DETAILS ---------");
    console.log(`To: ${params.to}`);
    console.log(`From: ${params.from}`);
    console.log(`Subject: ${params.subject}`);
    console.log("--------------------------------");
    
    if (process.env.SENDGRID_API_KEY) {
      // Send the email using SendGrid if API key is available
      await mail.send({
        to: params.to,
        from: params.from,
        subject: params.subject,
        text: params.text || '',
        html: params.html || '',
      });
      console.log("Email sent successfully via SendGrid!");
    } else {
      console.log("SendGrid API key not found. Email would have been sent in production.");
    }
    
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}
