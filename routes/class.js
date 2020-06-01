const express = require('express')
const passport = require('passport')
const controller = require('../controllers/class')

const router = express.Router()


router.get('/', passport.authenticate('jwt', {session: false}), controller.getMain)

router.get('/:id', passport.authenticate('jwt', {session: false}), controller.getSingleRecord)

router.get('/children/:id', passport.authenticate('jwt', {session: false}), controller.getChildren)

router.get('/search/', passport.authenticate('jwt', {session: false}), controller.Search)

router.get('/up/:id', passport.authenticate('jwt', {session: false}), controller.stepUp)
// router.post('/register', controller.register)

// router.post('/logout', controller.logout)

module.exports = router
