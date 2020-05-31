const express = require('express')
const controller = require('../controllers/class')

const router = express.Router()


router.get('/', controller.getMain)

router.get('/:id', controller.getSingleRecord)

router.get('/children/:id', controller.getChildren)

router.get('/search/', controller.Search)

router.get('/up/:id', controller.stepUp)
// router.post('/register', controller.register)

// router.post('/logout', controller.logout)

module.exports = router
