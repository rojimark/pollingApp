const express = require('express');
const router = express.Router();

const Pusher = require('pusher');


var pusher = new Pusher({
  appId: '466187',
  key: '7d48794cf2dbf0b61b7d',
  secret: 'a2f695f6ae326e74ac20',
  cluster: 'ap1',
  encrypted: true
});

router.get('/', (req, res) => {
  res.send('Poll')
});

router.post('/', (req, res) => {
  pusher.trigger('os-poll', 'os-vote', {
    points: 1,
    os: req.body.os
  });
  return res.json({ success: true, message: 'Thank you for voting' })
});

module.exports = router;
