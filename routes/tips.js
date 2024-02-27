const express = require('express')
const router = express.Router();
const tipsCtrl = require('../controllers/tips')

router.post('/interviews/:id/tips', tipsCtrl.create)


module.exports = router;