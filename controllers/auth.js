const bcrypt       = require('bcryptjs')
const jwt          = require('jsonwebtoken')
const User         = require('../models/Users.js')
const keys         = require('../config/keys')
const errorHandler = require('../utils/errorHandler')



//===== mongo style
module.exports.login = async function (req, res) {

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
                name: candidate.username
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
//         if (+values.rows[0].count !== 0) {
//             const passwordResult = bcrypt.compareSync(req.body.password, values.rows[0]['pass'])
//             if (passwordResult) {
//                 res.status(200).json({
//                     authenticated: true,
//                     token: "ok",
//                     expire: 3600000
//                 })
//             } else {
//                 res.status(401).json({
//                     authenticated: false,
//                 })
//             }
//
//         } else {
//             res.status(401).json({
//                 authenticated: +values.rows[0].count
//             })
//             console.log(values.rows[0].count)
//         }
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
