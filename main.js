import express from "express"
import path from "path"
import mongoose from "mongoose"
import { fileURLToPath } from "url"
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


mongoose.connect("mongodb://localhost:27017//bookmyshow").then(() => {
    console.log("Connected to MongoDB")
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err)
})


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const port = 2010
app.use(express.static(path.join(__dirname, "public")))


app.get("/",(req,res)=>{
    res.sendFile("./public/home.html" , {root : __dirname})
})

app.get("/search",(req,res)=>{
    // console.log("Search request received");
    res.sendFile("./public/search.html", { root: __dirname })
})


app.get("/move",(req,res)=>{
    res.sendFile("./public/move.html", { root: __dirname })
})

app.get("/sign",(req,res)=>{
    res.sendFile("./public/sign.html", { root: __dirname })
})

app.listen(port , ()=>{
    console.log("app runing in port",port)
}) 