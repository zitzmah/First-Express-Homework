//******************************* */
//DEPENDENCIES
//Brings thing from libraries and other files
//******************************* */
//require('thing'): it will return the exported value of the library or file we specify

//import the expres library
const express = require("express")

//**************************** */
//Create Express Application Object
//This is the center of our express universe
//**************************** */
//express(): returns an express application object

const app = express()

//*****************************
// ROUTES
// Which function should run for differnt (method/url) pairs
// ****************************
// methods: GET, POST, PUT, DELETE
// url: anything after the domain so xyz.com/cheese -> url: /cheese

// a GET request to the ROOT url or "/" xyz.com/ => "/"
// app.get(url, function)
// function: (request, response) => {}
// req (request): an object with details about the request
// res (response): an object with functions to send the response
app.get("/greeting/:name", (req, res) => {
    // res.send(something) will send the response based on the input
    // an html string: will send back as html
    // js array or object: will send back json
    // string: sends back as text
    const name = req.params.name
    res.send(`<h1>Hello, ${name}</h1>`)
})

//***************************** */
//TIP CALCULATOR
//****************************** */
app.get("/tip/:total/:tipPercentage", (req, res) => {
    const total = req.params.total
    const tipPercentage = req.params.tipPercentage
    const tip = total * (tipPercentage / 100)
    res.send(`<p>${tip}</p>`)
})



//********************************** */
//TURNINGON SERVER LISTENER
//WILL TELL OUR APP TO LISTEN FOR REQUESTS
//ON A CERTAIN PORT
//********************************** */
//app.list(PORT, FUNCTION)
//The function will run after the server tunrs on
app.listen(3000, () => { console.log("server is listening on port 3000") })