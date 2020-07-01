const multer = require('multer')
const moment = require('moment')

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename(req, file, cb) {
        console.log('get a file', file)
        const date = moment().format('YYYY-MM-DD-HH-mm-ss-SSS')
        cb(null, `${date}-${file.originalname}`)
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
        console.log('image is valid')
        cb(null, true)
    } else { cb(null, false) }
}

const limits = {
    fileSize: 2048 * 2048 * 8
}


module.exports = multer({
    storage,
    fileFilter,
    limits
})
