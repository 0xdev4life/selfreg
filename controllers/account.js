const errorHandler = require('../utils/errorHandler')
const Applicant = require('../models/Applicant')
const Application = require('../models/Application')
const User = require('../models/Users')

module.exports.getAllApplications = async function (req, res) {
    try {
        const apps = await Application.find({
            user: req.user.id
        }).select('status date name type logoUrl applicant').populate('applicant')
        res.status(200).json(apps)
    } catch (e) {
        errorHandler(res, e)
    }

}
module.exports.getApplicationById = async function (req, res) {
    try {
        const app = await Application.findOne({
            user: req.user.id,
            _id: req.params.id
        })
        res.status(200).json({app})
    } catch (e) {
        errorHandler(res, e)
    }

}
module.exports.getAllApplicants = async function (req, res) {
    try {
        const apps = await Applicant.find({
            user: req.user.id
        })
        res.status(200).json(apps)
    } catch (e) {
        errorHandler(res, e)
    }

}
module.exports.getApplicantById = async function (req, res) {
    try {
        const app = await Applicant.findOne({
            user: req.user.id,
            _id: req.params.id
        })
        res.status(200).json({app})
    } catch (e) {
        errorHandler(res, e)
    }

}
module.exports.getMain = async function (req, res) {
    try {
        console.log('prepare...', req.user.id)
        let appCount = 0
        await Application.find({
            user: req.user.id
        }).count((err, count) => {
            appCount = count
        })
        console.log('apps count is', appCount)
        const candidate = await User.findOne({_id: req.user.id})
        console.log('name is', candidate.username)
        res.status(200).json({
            name: candidate.username,
            apps: appCount
        })
    } catch (e) {
        errorHandler(res, e)
    }

}

module.exports.saveNewPerson = async function (req, res) {
    try {
        const person =new Applicant(
            {}
        )
        await person.save()
        res.status(200).json()
    } catch (e) {
        errorHandler(res, e)
    }

}
module.exports.saveNewApplication = async function (req, res) {

    let appId = '';
    if (!req.body.applicantId) {
        console.log('создаем нового ')
        const person = new Applicant(
            {
                title: req.body.applicantSavingName ? req.body.applicantSavingName : '.' + req.body.applicantName,
                type: req.body.applicantType,
                name: req.body.applicantName,
                inn: req.body.applicantInn,
                kpp: req.body.applicantKpp,
                ogrn: req.body.applicantOgrn ? req.body.applicantOgrn : '',
                address: req.body.applicantAddress,
                head: req.body.applicantHead ? req.body.applicantHead : '',
                display: req.body.applicantCanSave,
                user: req.user.id
            }
        )
        console.log(person)
        try {
            await person.save()
            appId = person.id
        } catch (e) {
            errorHandler(res, e)
            appId = null
        }
    } else {
        appId = req.body.applicantId
    }
    if (appId) {
        console.log('создаем новую заявку ', req.body.trademarkType)
        const application = new Application({
            status: 'created',
            name: req.body.trademarkName,
            type: req.body.trademarkType,
            applicant: appId,
            mode: req.body.applicationMode,
            price: req.body.applicationPrice,
            tax: req.body.applicationTax,
            logoUrl: req.body.trademarkLogo ? req.body.trademarkLogo : '',
            logoDescr: req.body.trademarkLogoDescription ? req.body.trademarkLogoDescription : '',
            colors: req.body.trademarkColors ? req.body.trademarkColors : '',
            unsecure: req.body.trademarkUnsec ? req.body.trademarkUnsec : '',
            // classes: req.body.trademarkName.map(c =>c.Classes).flat().map(elem => ({id : elem.value})),
            options: req.body.applicationCheckOption ? [{option: 'fullCheck', price: 7500}] : [],
            documents: [],
            user: req.user.id

        })
        // application.
        console.log('here is app', application)
        // application.applicant = newPerson.select() _id.toString()
        try {
            console.log('adding id')
            await application.save()
            console.log('сохранено')
            res.status(200).json({status: 'ok'})
        } catch (e) {
            errorHandler(res, e)
        }


    } else {
        console.log('cant save new user')
        res.status(500).json({status: 'ok'})
    }

}
//
//
//
//
//
//
//
//
//
//
//
//
//
