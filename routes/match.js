const express = require('express')
const passport = require('passport')
const controller = require('../controllers/match')

const router = express.Router()

router.get('/', passport.authenticate('jwt', {session: false}), controller.match)
router.post('/search/', passport.authenticate('jwt', {session: false}), controller.search)

module.exports = router
