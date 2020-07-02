const errorHandler = require('../utils/errorHandler')
const Applicant = require('../models/Applicant')
const Application = require('../models/Application')
const User = require('../models/Users')
const docs = require('../utils/documents')
const moment = require('moment')
const fs = require('fs');
const path = require('path');

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


//===== работа с заявками

module.exports.saveNewApplication = async function (req, res) {
    // console.log('look for image', req.file)

    const data = moment().format('YYYY-MM-DD-HH-mm-ss-SSS')
    var appDir = path.dirname(require.main.filename);
    const dir = path.resolve(appDir, 'apps', `${data}-app`);
    const url = `apps\\${data}-app`

    // console.log('here is a new folder', dir)

    fs.mkdir(dir, {recursive: true}, err => {})

    let appId = '';
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
    // console.log(req.body)
    if (!req.body.applicantId) {
        // console.log('show them classes', req.body.trademarkClasses)
        // console.log('создаем нового ')
        // console.log(person)
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
        let clss = [];
        req.body.trademarkClasses.forEach(element => {
            // console.log('some els', element)
            let el = {
                Id: element.Id,
                Number: element.Number,
                Categories: []
            }
            // console.log('some cats', element.classes)
            if (element.Classes) {
                let cats = [];
                element.Classes.forEach(cl => {
                    let c = {
                        Number: cl.Number,
                        Title: cl.Title
                    }
                    // console.log('this is c', c, cl)
                    cats.push(c)
                })
                el.Categories = cats;
            }
            clss.push(el)
        })
        // console.log('simple', clss)
        // console.log('создаем новую заявку ', req.body.trademarkType)
        const application = new Application({
            status: 'waiting',
            name: req.body.trademarkName,
            type: req.body.trademarkType,
            applicant: appId,
            mode: req.body.applicationMode,
            price: req.body.applicationPrice,
            payed: false,
            tax: req.body.applicationTax,
            logoUrl: req.body.trademarkLogo ? req.body.trademarkLogo : '',
            logoDescr: req.body.trademarkLogoDescription ? req.body.trademarkLogoDescription : '',
            colors: req.body.trademarkColors ? req.body.trademarkColors : '',
            unsecure: req.body.trademarkUnsec ? req.body.trademarkUnsec : '',
            classes: clss,
            options: req.body.applicationCheckOption ? [{option: 'fullCheck', price: 7500}] : [],
            documents: [],
            user: req.user.id

        })
        console.log('we are ready to create documents')
        const tempResult = docs.createDocuments(person, application, dir)
        if (tempResult) {
            application.documents.push({
                type: 'tax',
                url: `${url}\\tax.docx`//path.resolve(dir, 'tax.docx')
            })
            application.documents.push({
                type: 'proxy',
                url: `${url}\\proxy.docx`//path.resolve(dir, 'proxy.docx')
            })
            application.documents.push({
                type: 'permission',
                url: `${url}\\permission.docx`//path.resolve(dir, 'permission.docx')
            })
        }
        console.log('here is docs', application.documents)
        // application.
        // console.log('here is app', application)
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

module.exports.handleLogo = async function (req, res) {

    let appId = '';
    console.log('look for image', req.file)
    // if ()
    res.status(201).json({
        url : req.file? req.file.path : ''
    })

}

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
        // console.log('here our id', req.params.id)
        const app = await Application.findOne({
            user: req.user.id,
            _id: req.params.id
        }).populate('applicant')
        console.log('out candidate', app)
        res.status(200).json(app)
    } catch (e) {
        errorHandler(res, e)
    }

}

//===== работа с заявителями

module.exports.saveNewPerson = async function (req, res) {
    try {
        const person = new Applicant(
            {
                title: req.body.title,
                type: req.body.type,
                name: req.body.name,
                inn: req.body.inn,
                kpp: req.body.kpp,
                ogrn: req.body.ogrn,
                address: req.body.address,
                head: req.body.head,
                display: true,
                user: req.user.id
            }
        )
        await person.save()
        res.status(200).json(person)
    } catch (e) {
        errorHandler(res, e)
    }

}

module.exports.getAllApplicants = async function (req, res) {
    try {
        const apps = await Applicant.find({
            user: req.user.id,
            display: true
        })
        console.log('here are apps', apps)
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

module.exports.updateApplicant = async function (req, res) {
    try {
        console.log('params', req.params.id, req.body)
        const update = {
            title: req.body.title,
            type: req.body.type,
            name: req.body.name,
            inn: req.body.inn,
            kpp: req.body.kpp,
            ogrn: req.body.ogrn,
            address: req.body.address,
            head: req.body.head
        }
        const candidate = await Applicant.findOneAndUpdate({_id: req.params.id}, update, {
            new: true
        })
        console.log('here is a candidate' ,candidate)
        if (candidate) {res.status(200).json(req.body)}
        else {res.status(409)}
        // const app = await Applicant.findOne({
        //     user: req.user.id,
        //     _id: req.params.id
        // })
    } catch (e) {
        errorHandler(res, e)
    }

}

module.exports.removeApplicant = async function (req, res) {
    try {
        // const app = await Applicant.findOne({
        //     user: req.user.id,
        //     _id: req.params.id
        // })
        res.status(200).json({app})
    } catch (e) {
        errorHandler(res, e)
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
