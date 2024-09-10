const express = require('express')
const router = express.Router()
const {getGoals, setGoals, updateGoal, deleteGoal} = require('../controllers/goalController')

router.get('/', getGoals)
router.post('/', setGoals)

router.put('/',(req,res) => {
    res.json({
        message: "ini update"
    })    
})

module.exports = router