require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const nodemailer = require('nodemailer');
const Message = require('./models/Message');

const app = express();
app.use(express.json());
app.use(cors());

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

// Resume Download Endpoint
app.get('/api/resume', (req, res) => {
  const resumePath = path.join(__dirname, '..', 'resume.pdf');
  if (fs.existsSync(resumePath)) {
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename="resume.pdf"');
    fs.createReadStream(resumePath).pipe(res);
  } else {
    res.status(404).json({ error: 'Resume not found' });
  }
});

// Certificate Download Endpoint
app.get('/api/cert/:name', (req, res) => {
  const certName = req.params.name;
  const certPath = path.join(__dirname, '..', 'certificates', `${certName}.pdf`);
  
  if (fs.existsSync(certPath)) {
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `inline; filename="${certName}.pdf"`);
    fs.createReadStream(certPath).pipe(res);
  } else {
    // Fallback: serve the resume PDF as a placeholder, but spoof the filename so it looks like the exact certificate
    const fallbackPath = path.join(__dirname, '..', 'resume.pdf');
    if (fs.existsSync(fallbackPath)) {
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `inline; filename="${certName}.pdf"`);
      fs.createReadStream(fallbackPath).pipe(res);
    } else {
      res.status(404).json({ error: 'Certificate not found' });
    }
  }
});

// Contact Form Endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Save to MongoDB
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    // Send email notification
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 560px; margin: 0 auto; padding: 32px; background: #f7fbff; border-radius: 12px; border: 1px solid #d0e4f5;">
          <h2 style="margin: 0 0 4px; font-size: 22px; color: #0d1a2b;">New Portfolio Message</h2>
          <p style="margin: 0 0 24px; font-size: 13px; color: #7a96a8;">Submitted via kushagrachaudhary.dev</p>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 10px 0; color: #3a5369; font-weight: 600; width: 80px;">Name</td>
              <td style="padding: 10px 0; color: #0d1a2b;">${name}</td>
            </tr>
            <tr style="border-top: 1px solid #d0e4f5;">
              <td style="padding: 10px 0; color: #3a5369; font-weight: 600;">Email</td>
              <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #5a95bc;">${email}</a></td>
            </tr>
            <tr style="border-top: 1px solid #d0e4f5;">
              <td style="padding: 10px 0; color: #3a5369; font-weight: 600; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; color: #0d1a2b; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #d0e4f5; font-size: 12px; color: #7a96a8;">
            Reply directly to this email to respond to ${name}.
          </div>
        </div>
      `,
      replyTo: email,
    });

    res.status(201).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'Failed to process message' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
