const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.send("User List")
})

router.get('/new',(req, res) => {
    res.send("User New Form")  
})

router.post('/', (req, res) => {
    res.send('Create user')
})

const users = [{name: "Sam"}, {name: "Karan"}]
router.param("id", (req, res, next, id) => {
    console.log(id)
    next()
})

module.exports = router