const app = require('./app')

const port = process.env.PORT || 3000

console.log('Preparing...')

app.listen(port, () => {
    console.log(`Server run on ${port} port...`)
})



