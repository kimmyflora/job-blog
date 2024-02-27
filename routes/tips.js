const express = require('express')
const router = express.Router();
const tipsCtrl = require('../controllers/tips')


//router to create a new tip for the interview post 
router.post('/interviews/:id/tips', tipsCtrl.create)

//router to be able to delete 
router.delete('/tips/:id', tipsCtrl.delete)


module.exports = router;