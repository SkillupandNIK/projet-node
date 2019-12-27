'use strict'

const express = require ('express')
const fs = require ('fs')

const app = express()

app.set('view-engine', 'ejs')
.use(express.json())
.use(express.urlencoded({ extended : false }))

var raw_users = fs.readFileSync('users.json')
var users = JSON.parse(raw_users)
console.log("users", users, "?")

app.get('/', (req, res) => {
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

.get('/connected', (req, res) => {
    console.log('connected')
    res.render('connected.ejs')
    alert('connected')
})

.post('/login', (req, res) => {
    const user = users.find(user => users.email = req.body.email)
    
    if (user == null)
        return res.status(400).send('Pas d\'utilisateur associé à cette adresse mail')
    else {
        if (req.body.password == user.password)
        {
            console.log('ok')
            res.redirect('connected')
        }
        else
            console.log('pas ok')
            //res.send('Pas autorisé')
            res.redirect('/login')
    }
    

    res.status(201).send()
    res.redirect('/lobby')
})

.post('/register', (req, res) => {
    //try {
        users.push({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
        })

        raw_users = JSON.stringify(users, null, 2)
        fs.writeFile('users.json', raw_users)
        res.redirect('/loggin')
    //}
    //catch {
    //    res.redirect('/register')
    //}
    //res.status(201).send()
    
}).listen(8080)