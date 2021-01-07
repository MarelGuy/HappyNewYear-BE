const express = require("express")
const app = express()

const port = process.env.PORT || 3001

const cors = require("cors");

const questionsRoutes = require("./services")

const {
    unauthorized,
    forbidden,
    notFound,
    badRequestHandler,
    catchAll
} = require("./errhandler")

//middleware section
app.use(express.json())
app.use(cors())

//routes section
app.use("/exams", questionsRoutes)

//err handler section
app.use(unauthorized)
app.use(forbidden)
app.use(notFound)
app.use(badRequestHandler)
app.use(catchAll)

app.listen(port, () => {
    console.log(`Server started on port:`, port);
});