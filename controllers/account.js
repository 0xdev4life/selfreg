const errorHandler = require('../utils/errorHandler')
const Applicant = require('../models/Applicant')
const Application = require('../models/Application')

module.exports.getAllApplications = async function (req, res) {
    try {

        res.status(200).json({type: 'response'})
    } catch (e) {
        errorHandler(res, e)
    }

}
module.exports.getApplicationById = async function (req, res) {
    try {

        res.status(200).json()
    } catch (e) {
        errorHandler(res, e)
    }

}
module.exports.getAllApplicants = async function (req, res) {
    try {

        res.status(200).json()
    } catch (e) {
        errorHandler(res, e)
    }

}
module.exports.getApplicantById = async function (req, res) {
    try {

        res.status(200).json()
    } catch (e) {
        errorHandler(res, e)
    }

}
module.exports.getMain = async function (req, res) {
    try {

        res.status(200).json()
    } catch (e) {
        errorHandler(res, e)
    }

}

// module.exports.saveNewApplication = async function (req, res) {
//     try {
//         // consol.log('welcome at register')
//         // console.log('extracting user id', req.user.id)
//         // const person =new Applicant(
//         //     {
//         //         title: req.body.applicantSavingName ? req.body.applicantSavingName : req.body.applicantName,
//         //         type: req.body.applicantType,
//         //         name: req.body.applicantName,
//         //         inn: req.body.applicantInn,
//         //         kpp: req.body.applicantKpp,
//         //         ogrn: req.body.applicantOgrn ? req.body.applicantOgrn : '',
//         //         address: req.body.applicantAddress,
//         //         head: req.body.applicantHead ? req.body.applicantHead : '',
//         //         // user: req.user.id
//         //     }
//         // )
//         // await person.save((err, p) => {
//         //
//         // })
//         // const application =new Application(
//         //     {}
//         // )
//         // await application.save()
//         // console.log('new applicant', Applicant)
//         res.status(200).json({Applicant: 'ok'})
//     } catch (e) {
//         errorHandler(res, e)
//     }
//
// }
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
