const getGoals = (req,res) => {
    res.status(200).json({
        message : "Get Goals"
    })
}
const setGoals = (req,res) => {
    console.log(req,body)

    res.status(200).json({
        message : "Set Goal",
        data: req.body
    })
}

module.exports = {getGoals, setGoals}

const updateGoal = (req, res) => {
    res.status(200).json({
        message: `Update goal ${req.params.id}`
    })
}

const deleteGoal = (req, res) => {
    res.status(200).json({
        message: `Delete goal ${req.params.id}`
    })
}

module.exports = { getGoals, setGoals, updateGoal, deleteGoal, }
