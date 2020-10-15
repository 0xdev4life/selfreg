const bcrypt       = require('bcryptjs')
const jwt          = require('jsonwebtoken')
const User         = require('../models/Users.js')
const keys         = require('../config/keys')
const errorHandler = require('../utils/errorHandler')



//===== mongo style
module.exports.login = async function (req, res) {
    try {
        console.log('login in...')
        console.log(req.body)
        const candidate = await User.findOne({email: req.body.email})

        if (candidate) {
            const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
            if (passwordResult) {
                const token = jwt.sign({
                    email:  candidate.email,
                    userId: candidate._id
                }, keys.jwt, {expiresIn: keys.ExpireTime})
                return await res.status(200).json({
                    token: `Bearer ${token}`,
                    name: candidate.username,
                    email: candidate.email
                })
            } else {
                return await res.status(401).json({
                    action: "UNAUTHORIZED"
                })
            }
        }
        else {
            return await res.status(404).json({
                action: "NOT_FOUND"
            })
        }
    } catch (e) {
        errorHandler(e, req)
    }

}

module.exports.register = async function (req, res) {

    const candidate = await User.findOne({email: req.body.email})
    if (candidate) {
        res.status(409).json({
            action: "EMAIL_ALREADY_EXISTS"
        })
    } else {
        const salt = await bcrypt.genSalt(12)
        const password = await bcrypt.hash(req.body.password, salt)
        const user = new User({
            email: req.body.email,
            password: password,
            username: req.body.username
        })
        try {
            await user.save()
            res.status(200).json({
                action: password
            })
        }
        catch (e) {
            errorHandler(e, req)
        }
    }
}

module.exports.check = async function (req, res) {

    const candidate = await User.findOne({_id: req.user.id})
    if (candidate) {
        console.log('password', candidate)
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
        if (passwordResult) {

            res.send(true)
        } else {
            res.send(false)
        }
    }
}

module.exports.update = async function (req, res) {

    console.log('новый запрос', req.user, req.body)
    const candidate = await User.findOne({_id: req.user.id})
    if (candidate) {
        console.log('old', candidate)
        const passwordResult = bcrypt.compareSync(req.body.old, candidate.password)
        if (passwordResult) {
            const salt = await bcrypt.genSalt(12)
            const password = await bcrypt.hash(req.body.password, salt)
            const filter = {_id: req.user.id}
            const update = {password: password}
            let doc = await User.findOneAndUpdate(filter, update, {
                new: true
            });
            console.log('new', doc)
            res.status(200).json(
                {action: 'SUCCESS'}
            )
        } else {
            console.log('wrong pass')
            res.status(409).json({
                action: "WRONG_PASSWORD"
            })
        }
        // res.status(409).json({
        //     action: "EMAIL_ALREADY_EXISTS"
        // })
    }
}

module.exports.edit = async function (req, res) {

    // console.log('новый запрос', req.user, req.body)
    const update = {username: req.body.username, email: req.body.email}
    const candidate = await User.findOneAndUpdate({_id: req.user.id}, update, {
        new: true
    })
    // console.log(candidate)
    if (candidate) {res.status(200).json(req.body)}
    else {res.status(409)}
}
//===== postgres style
// const { Pool, Client } = require('pg')
// const client = new Client({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'trademark',
//     password: 'root',
//     port: 5432,
// })
// client.connect()
//     .catch(error => console.log('LOL', error))
//
//
// module.exports.login = async function (req, res) {
//     const params = [req.body.email]
//     const text = 'SELECT pass FROM users WHERE email = $1'
//     await client.query(text, params, (err, values) => {
//         if (err) {
//             return console.log(err.stack)
//         }
        if (+values.rows[0].count !== 0) {
            const passwordResult = bcrypt.compareSync(req.body.password, values.rows[0]['pass'])
            if (passwordResult) {
                res.status(200).json({
                    authenticated: true,
                    token: "ok",
                    expire: 3600000
                })
            } else {
                res.status(401).json({
                    authenticated: false,
                })
            }

        } else {
            res.status(401).json({
                authenticated: +values.rows[0].count
            })
            console.log(values.rows[0].count)
        }
//     })
//
//
// }
//
// // client.end()
//
// module.exports.register = async function (req, res) {
//     const salt = await bcrypt.genSalt(12)
//     const password =  await bcrypt.hash(req.body.password, salt)
//     const params = [req.body.email, password, req.body.username]
//     const text = 'INSERT INTO users(email, pass, username) VALUES($1, $2, $3)'
//     await client.query(text, params, (err, values) => {
//         if (err){
//
//             if (+err.code === 23505) {
//                 // console.log('Ошибка',err.stack)
//                 return res.status(409).json({
//                     result: "email exists"
//                 })
//             }
//             return res.status(503).json({
//                 result: "unexpected error"
//             })
//         }
//         return res.status(200).json({
//             result: "done"
//         })
//     })
// }
//
// module.exports.logout = function (req, res) {
//     client.end()
// }
