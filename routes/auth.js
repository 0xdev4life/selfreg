const express = require('express')
const passport = require('passport')
const controller = require('../controllers/auth')

const router = express.Router()


router.post('/login', controller.login)

router.post('/register', controller.register)

router.post('/check', controller.check)

router.patch('/update', passport.authenticate('jwt', {session: false}), controller.update)

router.patch('/edit', passport.authenticate('jwt', {session: false}), controller.edit)

module.exports = router
