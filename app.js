import express from 'express';

import UserRouter from './route/userouter.js';
import AdminRouter from './route/adminRouter.js';
import artifact from './route/artifact.js';
import board from './route/webboard.js'
import sign from './route/sign_in.js'
import blog from './route/mainblog.js'

import flash from 'express-flash';
import session from 'express-session';

const PORT = 8080
const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.static('src'))
app.use(express.json())
app.use(express.urlencoded({ extended :true }))

app.use(session({
    cookie:{max:60000},
    store: new session.MemoryStore,
    saveUninitialized: true,
    resave:'true',
    secret:'secret'
}))
app.use(flash())

app.use('/home',UserRouter)
app.use('/adminDashbord',AdminRouter)
app.use('/Artifact',artifact)
app.use('/board',board)
app.use('/sign',sign)
app.use('/blog',blog)


//default page

app.get('/',(req,res)=>{
    res.redirect('/home')
})
app.get('/gensh',(req,res)=>{
    res.render('webpage/gensh.ejs')
})
app.listen(PORT,()=>{
    console.log("Run server on port 8080")
})

// // ` `