const errorHandler = require('../utils/errorHandler')
const tools        = require('../utils/trademarkCatcher')

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

module.exports.search = async function (req, res) {
    console.log('we are ready to search')
    try {
        // console.log('query', req.query.q)
        // console.log(req.body)

        const result = await tools.remoteSearch(req.body)

        console.log(result.length)


        res.status(200).json(result)
    } catch (e) {
        errorHandler(res, e)
    }

}

