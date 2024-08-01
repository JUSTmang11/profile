// const express = require('express')
// const path = require('path')

import express from 'express'
const router = express.Router()
// const { db }= require('../dbconn')
import db  from '../libs/dbconn.js'

router.get('/',(req,res)=>{
    res.render('user/form_Artifact',{
        uid:'',
        name:'',
        info:''
    })
})

router.post('/add',(req,res)=>{
    let { uid , name ,charec} = req.body
    if (uid) {
        db.collection('User_info_demo').add({
            uid:uid,
            name:name,
            charector:charec
        })
    }
    res.redirect('/Artifact')
})

// module.exports = router
export default router