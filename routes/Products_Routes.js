// express
const express = require("express")

// Route
const route = express.Router()

// Schema
const Product = require("../models/products_schema")
const Settings = require("../models/settings_schema")

// GET ALL Products
route.get("/", (req , res) => {
    Product.find().then((docs) => {
        res.json(docs)
    }).catch((err) => console.log(err))
})

// GET Products By Gategorie
route.get("/categories/:categorie", (req , res) => {
        Product.find({category: req.params.categorie}).then((docs) => {
            // if (docs.length) {
                res.json(docs)
            // }
            // else{
            //     res.redirect("/products")
            // }
        }).catch((err) => console.log(err))
})
route.get("/settings/categories", (req , res) => {
    Settings.findById(_id= process.env.SETTINGS_ID).then((docs) => {
        res.json(docs.categories)
    }).catch(err => console.log(err))
})

// GET ONE Products
route.get("/:id", (req , res) => {
    Product.findById(req.params.id).then((docs) => {
        if(docs) {
            res.json(docs)
        }else{
            res.status(404).json({
                message: "this product is not found",
                status: 404
            })
        }
        
    }).catch((err) => {
        // res.redirect("/")
        res.status(404).json({
            message: "this product is not found",
            status: 404
        })
        console.log(err)
    })
})

// Exporting the router module
module.exports = route;