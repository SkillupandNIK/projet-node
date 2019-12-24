'use strict'

const express = require ('express')
const fs = require ('fs')

const app = express()

const raw_users = fs.readFileSync('users.json')
const users = JSON.parse(raw_users)
console.log(users)

let user1 = { email : 'hugo@yo', password : 'pass'}

let data = JSON.stringify(user1)
//fs.writeFileSync('users.json', data)

app.set('view-engine', 'ejs')

.use(express.json())
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
        //id = new Date.now()
    })
    console.log("hello register")
})

.post('/login', (req, res) => {
    const user = { email : req.body.email, password : req.body.password }
    users.push(user)
    res.status(201)
})

.listen(8080)