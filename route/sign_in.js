import express from 'express'
const router = express.Router()
import db from '../libs/dbconn.js'
router.get('/',(req,res)=>{
    res.render('admin/sign-in.ejs')
})
router.post('/sign_in',async (req,res)=>{  
    console.log(req.body.Username)
})

export default router