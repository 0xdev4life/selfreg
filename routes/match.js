const express = require('express')
const passport = require('passport')
const controller = require('../controllers/match')

const router = express.Router()

router.get('/', passport.authenticate('jwt', {session: false}), controller.match)

module.exports = router
