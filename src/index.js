const express = require ('express')
const app = express()

const users = []

app.set('view-engine', 'ejs')

.use(express.urlencoded({ extended : false }))
.get('/', (req, res) => {
    res.render('lobby.ejs')
})

.get('/login', (req, res) => {
    console.log("login")
    res.render('login.ejs')
})

.get('/register', (req, res) => {
    console.log('register')
    res.render('register.ejs')
})

.post('/register', (req, res) => {
    users.push({
        id = new Date().getTime()
    })
})

.post('/login', (req, res) => {
    console.log(req.body.password)
})
app.listen(8080)