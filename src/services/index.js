const express = require("express")
const app = express.Router()
// Utils
const { join } = require("path");
const dbPath = join(__dirname, "questions.json")

const fs = require("fs-extra");

const uniqid = require("uniqid");

app.post('/', async (req, res, next) => {
    try {
        const qArray = await fs.readJson(dbPath);
        let chosenOnes = [];
        for (let i = 0; i <= 4; i++) {
            let randomQ = Math.floor(Math.random() * qArray.length);
            chosenOnes.push(qArray[randomQ])
        }
        if (chosenOnes.length === 5) {
            res.send("Exam created")
        } else {
            res.send("Error 500, Server error")
        }
    } catch (err) {
        console.log(err)
        //next(err)
    }
});

module.exports = app