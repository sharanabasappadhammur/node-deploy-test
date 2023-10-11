import express from "express"
import serveless from "serverless-http"


const app = express()
const router = express.Router()

router.get("/", (req,res)=>{
    res.send("hello")
})

app.use("/.netlify/functions/api", router)
module.exports.handler = serveless(app)