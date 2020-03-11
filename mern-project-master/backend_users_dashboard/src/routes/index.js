const express = require('express')
const router = express.Router()
const userRoutes = require('./user.route')

router.get('/status' , (req,res) => {
    res.json({
        message : 'OK',
        timestamp : new Date().toISOString(),
        IP : req.ip,
        URL : req.originalUrl
    })
})

router.use('/user', userRoutes)

module.exports = router;