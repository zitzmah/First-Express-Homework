//******************************** */
//   DEPENDENCIES
//******************************** */
const express = require("express")

const app = express()

//****************************** */
// ROUTES
//********************************* */
app.get("/", (req, res) => {
    res.send(`<h1>99 Bottles of beer on the wall</h1><a href="http://localhost:3000/98">take one down, pass it around</a>`)
})

app.get("/:number_of_bottles", (req, res) => {
    const numberOfBottles = req.params.number_of_bottles
    if (numberOfBottles > 0) {
        res.send(`<h1>${numberOfBottles} Bottles of beer on the wall</h1> <a href="http://localhost:3000/${(numberOfBottles - 1)}">take one down, pass it around</a>`)
    } else {
        res.send(`<h1>${numberOfBottles} Bottles of beer on the wall</h1> <a href="http://localhost:3000/">start over</a>`)
    }
})
//********************************** */
//  TURN ON SERVER LISTENER
//********************************** */
app.listen(3000, () => { console.log("server is listening on port 3000") })