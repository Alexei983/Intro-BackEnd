import express from "express"
import mongoose from "mongoose"
import Post from "./Post.js"
import router from "./router.js"

const PORT = 5000
const DB_URL = "mongodb+srv://user:user@cluster0.gwop5oq.mongodb.net/?retryWrites=true&w=majority"

const app = express()

app.use(express.json)
app.use('/api', router)

async function startApp(){
    try{
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log("SERVER START"))
    } catch (e) {
        console.log(e)
    }
}

startApp()