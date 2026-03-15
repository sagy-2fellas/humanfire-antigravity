const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || 'sagy@2fellasmedia.com';

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { type, data } = req.body;

  if (!type || !data) {
    return res.status(400).json({ error: 'type and data are required' });
  }

  const subjects = {
    contact: 'New Contact/Demo Request',
    newsletter: 'New Newsletter Subscriber',
    workshop: 'New Workshop Registration',
  };

  const subject = subjects[type] || 'New Form Submission';

  const rows = Object.entries(data)
    .filter(([key]) => key !== 'id' && key !== 'status' && key !== 'source')
    .map(([key, value]) => {
      const label = key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      const displayValue = Array.isArray(value) ? value.join(', ') : (value || 'Not provided');
      return `
        <tr>
          <td style="padding: 10px 14px; font-weight: 600; color: #555; text-transform: uppercase; font-size: 12px; border-bottom: 1px solid #eee; width: 140px;">${label}</td>
          <td style="padding: 10px 14px; color: #333; border-bottom: 1px solid #eee;">${displayValue}</td>
        </tr>`;
    })
    .join('');

  const html = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 30px; text-align: center;">
    <h1 style="color: #ffffff; margin: 0; font-size: 20px;">${subject}</h1>
  </div>
  <div style="padding: 24px; background: #ffffff;">
    <table style="width: 100%; border-collapse: collapse;">
      ${rows}
    </table>
    <p style="color: #94a3b8; font-size: 12px; margin-top: 24px; text-align: center;">
      Submitted at ${new Date().toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg' })}
    </p>
  </div>
  <div style="padding: 16px; background: #f1f5f9; text-align: center;">
    <p style="color: #64748b; font-size: 12px; margin: 0;">&copy; 2025 humanfire</p>
  </div>
</div>`;

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: NOTIFY_EMAIL,
      subject,
      html,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Failed to send notification:', error);
    return res.status(500).json({ error: 'Failed to send notification' });
  }
};
