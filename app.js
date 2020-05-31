const express          = require('express')
const mongoose         = require('mongoose')
const passport         = require('passport')
const path             = require('path')
const authRoutes       = require('./routes/auth')
const classRoutes      = require('./routes/class')
const accountRoutes    = require('./routes/account')
const bodyParser       = require('body-parser')
const cors             = require('cors')
const morgan           = require('morgan')
const { Pool, Client } = require('pg')
const keys             = require('./config/keys')

mongoose.connect(keys.MongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(() => console.log('Mongo Remote connected'))
    .catch(error => console.log(error))


const app = express()

console.log('here is the env', process.env)


app.use(passport.initialize())
require('./middleware/passport')(passport)



app.use(morgan('dev'))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(cors())
app.use('/api/auth', authRoutes)
app.use('/api/class', classRoutes)
app.use('/api/account', accountRoutes)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('views/dist/self-register-mark-II'))
    app.get('*', (req, res) => {


        res.sendFile(
            path.resolve(
                __dirname, 'views', 'dist', 'self-register-mark-II', 'index.html'
            )
        )
    })
}




module.exports = app
