// const express = require('express')
import express from 'express';
const router = express.Router()

// router.get('/home',(req,res)=>{
//     res.redirect('/home');
// })

router.get('/',(req,res)=>{
    res.render('webpage/index')
})

// router.get('/Artifact',(req,res)=>{
//     res.render('user/form_Artifact')
// })

// export { router }
// module.exports = router
export default router

