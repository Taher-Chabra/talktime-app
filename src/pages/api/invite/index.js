import createHandler from '@/middleware';
import nodemailer from 'nodemailer';

const handler = createHandler();

handler.post(async (req, res) => {
  const data = req.body;
  sendEmail(data);
  res.status(200).send('Email sent');
});

async function sendEmail(data) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: data.receiver,
    subject: 'Meeting Invite',
    text: `You have an email invite from ${data.senderName}. Join the video call and chat using the link below. ${data.meetingLink}`,
    html: `<p>You have an email invite from ${data.senderName}. Join the video call and chat using the link below.</p>
    <a href="${data.meetingLink}">Join Meeting</a>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

export default handler;
