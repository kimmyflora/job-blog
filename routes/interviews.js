var express = require('express');
var router = express.Router();
const interviewCtrl = require('../controllers/interviews')

// get request to interviews 
router.get('/', interviewCtrl.index)

//get requests to  /interviews/new
router.get('/new', interviewCtrl.new)

//Post request to /movies
router.post('/', interviewCtrl.create)

//
router.get('/:id', interviewCtrl.show)

module.exports = router