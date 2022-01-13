const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const port = 8080;
const blogRouter = require('./blogRouter')


app.use(bodyParser.json())

app.use('/blog', blogRouter)

app.get('/', (req, res) =>{
    res.status(200).json({message: "API UP!"})
})







app.listen(port, () => {
    console.log("Server is Listening!")
})