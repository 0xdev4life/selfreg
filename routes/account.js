const express = require('express')
const passport = require('passport')
const upload = require('../middleware/upload')
const controller = require('../controllers/account')

const router = express.Router()

router.get('/', passport.authenticate('jwt', {session: false}), controller.getMain)

//===== работаем с заявками
router.post('/', passport.authenticate('jwt', {session: false}), upload.single('image'), controller.saveNewApplication)
router.post('/logo', passport.authenticate('jwt', {session: false}), upload.single('image'), controller.handleLogo)

router.get('/apps/', passport.authenticate('jwt', {session: false}), controller.getAllApplications)

router.get('/apps/:id', passport.authenticate('jwt', {session: false}), controller.getApplicationById)

//===== работаем с заявителями


router.post('/applicants/', passport.authenticate('jwt', {session: false}), controller.saveNewPerson)

router.get('/applicants/', passport.authenticate('jwt', {session: false}), controller.getAllApplicants)

router.get('/applicants/:id', passport.authenticate('jwt', {session: false}), controller.getApplicantById)

router.patch('/applicants/:id', passport.authenticate('jwt', {session: false}), controller.updateApplicant)

router.delete('/applicants/:id', passport.authenticate('jwt', {session: false}), controller.removeApplicant)




module.exports = router
