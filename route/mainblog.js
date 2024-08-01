import express from 'express'
const router = express.Router()

router.get('/',(req,res)=>{
    res.render('bloger/main.ejs')
})

export default router