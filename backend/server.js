
const express = require ('express');
const app = express();
const port = 5000;
const logRequest = require('./middleware/logs.js')
const { errorHandler } = require('./middleware/errormiddleware.js')

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(logRequest)
app.use(errorHandler)

app.use('/api/goals', require ('./routes/goalroutes.js'))

app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`)
})