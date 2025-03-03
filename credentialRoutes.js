const express = require('express');
const router = express.Router();
const credentialController = require('../controllers/credentialController');

router.post('/issue', credentialController.issueCredential);
router.get('/verify/:address', credentialController.verifyCredential);

module.exports = router;
