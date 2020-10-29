const errorHandler = require('../utils/errorHandler')

module.exports.match = async function (req, res) {
    console.log('we are ready to match')
    try {
        // console.log('query', req.query.q)
        const resp = {
            state: 'accept'
        }
        console.log(resp)
        res.status(200).json(resp)
    } catch (e) {
        errorHandler(res, e)
    }

}
