//******************************* */
//DEPENDENCIES
//******************************* */

//import the express library
const express = require("express")

//**************************** */
//Create Express Application Object
//**************************** */

const app = express()

//*****************************
// ROUTES
// Which function should run for differnt (method/url) pairs
// ****************************

app.get("/greeting/:name", (req, res) => {
    const name = req.params.name
    res.send(`<h1>Hello, ${name}</h1>`)
})

//***************************** */
//   TIP CALCULATOR
//****************************** */
app.get("/tip/:total/:tipPercentage", (req, res) => {
    const total = req.params.total
    const tipPercentage = req.params.tipPercentage
    const tip = total * (tipPercentage / 100)
    res.send(`<p>${tip}</p>`)
})

//******************************* */
//  MAGIC EIGHT BALL
//******************************* */
app.get("/magic/:question", (req, res) => {
    const question = req.params.question
    const response = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]
    //res.send(`<p>${question}</p>`)
    res.send(`<h1>${question}</h1><h1>${response[Math.floor(Math.random() * 10)]}</h1>`)
})

//********************************** */
//TURNINGON SERVER LISTENER
//********************************** */
app.listen(3000, () => { console.log("server is listening on port 3000") })