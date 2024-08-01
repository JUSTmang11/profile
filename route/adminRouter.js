// const express = require('express')
// const path = require('path')

import express from 'express'
const router = express.Router()
// const { db }= require('../libs/dbconn')
import db  from '../libs/dbconn.js'

async function GetDATABASE(dataname){
    const dataobj = await db.collection(dataname).get().then((snapshot)=>{
        return snapshot.docs.map(doc=> doc.data())
    })
    return dataobj
}

router.get('/', async (req,res)=>{
    const user = await GetDATABASE('User_info_demo')
    // console.log(req.body.value)
    if(user){
        const tim = new Date()
        const timer = `${tim.getHours()}:${tim.getMinutes()}:${tim.getSeconds()}`
        const userRen = {
        "status":true,
        "user":user,
        "time": timer
        }
        res.render('admin/dashboard.ejs',userRen)
    }else{
        res.render('admin/dashboard.ejs',{
            "status":false,
        })
    }
})

router.get('/sign_in',(req,res)=>{

    res.render('admin/sign-in')
})

// ``
export default router
// module.exports = router