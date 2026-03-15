const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, resetUrl } = req.body;

  if (!email || !resetUrl) {
    return res.status(400).json({ error: 'Email and resetUrl are required' });
  }

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Reset Your humanfire Password',
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 40px; text-align: center;">
    <h1 style="color: #ffffff; margin: 0;">Password Reset Request</h1>
  </div>

  <div style="padding: 40px; background: #ffffff;">
    <p style="color: #334155; font-size: 16px; line-height: 1.6;">
      You requested to reset your password. Click the button below to create a new password:
    </p>

    <div style="text-align: center; margin: 40px 0;">
      <a href="${resetUrl}" style="display: inline-block; background: linear-gradient(135deg, #B82E2B, #B9472C); color: #ffffff; padding: 16px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">Reset Password</a>
    </div>

    <p style="color: #64748b; font-size: 14px; line-height: 1.6;">
      This link will expire in 1 hour. If you didn't request this, please ignore this email.
    </p>

    <p style="color: #94a3b8; font-size: 12px; margin-top: 30px;">
      If the button doesn't work, copy and paste this link into your browser:<br>
      <a href="${resetUrl}" style="color: #B82E2B; word-break: break-all;">${resetUrl}</a>
    </p>
  </div>

  <div style="padding: 20px; background: #f1f5f9; text-align: center;">
    <p style="color: #64748b; font-size: 12px; margin: 0;">
      &copy; 2025 humanfire. All rights reserved.
    </p>
  </div>
</div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Failed to send reset email:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
};
