const express = require('express')
const passport = require('passport')
const controller = require('../controllers/account')

const router = express.Router()

router.post('/', passport.authenticate('jwt', {session: false}), controller.saveNewApplication)
router.post('/personal/', passport.authenticate('jwt', {session: false}), controller.saveNewPerson)

router.get('/apps/', passport.authenticate('jwt', {session: false}), controller.getAllApplications)
router.get('/apps/:id', passport.authenticate('jwt', {session: false}), controller.getApplicationById)
router.get('/personal/', passport.authenticate('jwt', {session: false}), controller.getAllApplicants)
router.get('/personal/:id', passport.authenticate('jwt', {session: false}), controller.getApplicantById)
router.get('/', passport.authenticate('jwt', {session: false}), controller.getMain)



module.exports = router
