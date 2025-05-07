const express = require('express')
const aiController = require('../contoller/ai.controller')
const router = express.Router()


router.get('/get-response', aiController.getResponse)

module.exports = router