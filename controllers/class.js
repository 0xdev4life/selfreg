const errorHandler = require('../utils/errorHandler')
const Class = require('../models/Classes')


module.exports.getMain = async function (req, res) {
    try {
        const classes = await Class.find({
            MainclassId: '0'
        })
        console.log('returning array of', classes.length)
        res.status(200).json(classes)
    } catch (e) {
        errorHandler(res, e)
    }

}

module.exports.getSingleRecord = async function (req, res) {
    try {
        const record = await Class.findOne({
            ClassId: req.params.id
        })
        console.log('this is it', record)
        res.status(200).json(record)
    } catch (e) {
        errorHandler(res, e)
    }

}

module.exports.getChildren = async function (req, res) {
    try {
        console.log('getting children from id =', req.params.id)
        const classes = await Class.find({
            ParentId: req.params.id
        })
        res.status(200).json(classes)
    } catch (e) {
        errorHandler(res, e)
    }

}

module.exports.stepUp = async function (req, res) {
    try {
        // console.log('param', req.params.id)
        const parent = await Class.findOne({
            ParentId: req.params.id
        })
        // const grandParent = await Class.findOne({
        //     ParentId: parent.ParentId
        // })
        const upLevel = await Class.find({
            ParentId: parent.ParentId
        })
        res.status(200).json(upLevel)
    } catch (e) {
        errorHandler(res, e)
    }

}

module.exports.Search = async function (req, res) {
    try {
        console.log('query', req.query.q)
        res.status(200).json(req.query)
    } catch (e) {
        errorHandler(res, e)
    }

}
