//express
const express = require("express")
// app
const app = express()

// .env
require('dotenv').config();

// connect to DATABASE
const mongoose = require("mongoose")
mongoose.connect(process.env.DB).then(() => {
    console.log("DB connected ...");
    // Listen | `${PORT}`
    app.listen(process.env.PORT || 3001,() => {
        console.log(`## Server Started : http://localhost:${process.env.PORT}`)
    })
}).catch((err)=> console.log(err))

// cors
const cors = require("cors")
app.use(cors())

// JSON
app.use(express.json())

// Import Routes | Products
const ProductsRoutes = require("./routes/Products_Routes")
app.use("/products", ProductsRoutes);

// GET /=
app.use((req , res) => {
    res.status(404).json({
        message: "this page not found",
        status: 404
    })
})
