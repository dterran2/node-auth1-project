const express = require('express')
const bcrypt = require ('bcryptjs')
const Users = require('./users-models')
const {restrict} = require('./users-middleware')

const router = express.Router()

router.get('/users', restrict(), async (req, res, next) => {
    try {
        res.json(await Users.find())
    }catch (err) {
        next(err)
    }
})




module.exports = router