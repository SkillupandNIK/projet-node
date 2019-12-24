'use strict'

const express = require ('express')
const fs = require ('fs')

const app = express()

const users = [
    { email : 'hugo@dores.fr', password : 'password' }
]

//let user1 = { email : 'hugo@yo', password : 'pass'}


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
    const user = users.find(user => user.email = req.body.email)
    
    if (user == null)
        return res.status(400).send('Pas d\'utilisateur associé à cette adresse mail')

    if (req.body.password == user.password)
        console.log('ok')
    else
        console.log('pas ok')
        //res.send('Pas autorisé')

    res.status(201).send()
    //res.redirect('lobby.ejs')
})

.post('/register', async (req, res) => {
    //try {

        users.push({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password})

        let data = JSON.stringify(users)
        fs.writeFile('users.json', data)
        res.redirect('lobby.ejs')
    //}
    //catch {
    //    res.redirect('/register')
    //}
    //res.status(201).send()
    
}).listen(8080)