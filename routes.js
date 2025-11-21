const express = require('express');
const router = express.Router();
const sendMail = require('./mailSender');

router.post('/book', async (req, res) => {
  const { userEmail, message } = req.body;
  try {
    await sendMail({
      to: userEmail,
      subject: 'Thank you for booking!',
      text: 'We received your booking. We’ll reply soon!'
    });
    res.send({ success: true });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.post('/contact', async (req, res) => {
  const { userEmail, message } = req.body;
  try {
    await sendMail({
      to: userEmail,
      subject: 'Contact Received',
      text: 'We received your message. We’ll reply soon!'
    });
    res.send({ success: true });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
