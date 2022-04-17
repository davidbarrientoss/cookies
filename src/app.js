const express= require("express")
const app= express()

let PORT = process.env.PORT||8080

const server = app.listen(PORT,()=>{
    console.log("listening")}
)

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(express.static('./public'));

app.set("views","./views")
app.set("view engine","ejs")

const sessionRouter = require("./routes/sessions")
app.use("/",sessionRouter)

