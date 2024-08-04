// const { initializeApp, cert } = require('firebase-admin/app')
// const { getFirestore } = require('firebase-admin/firestore')

// const serviceAccount = require('./accound.json')
import { initializeApp, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import fs from 'fs'
import path from 'path'
const __dirname = path.resolve();
// const serviceAccount = JSON.parse(fs.readFileSync('../../Nodelearnong/accound.json', 'utf8'))

const serviceAccount = JSON.parse(fs.readFileSync( __dirname+"/accound.json",'utf8'))


initializeApp({
    credential: cert(serviceAccount)
})

const db = getFirestore()

// export { db }
export default db
// module.exports = db
