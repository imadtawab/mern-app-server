const mongoose = require("mongoose")

const settingsSchema = new mongoose.Schema({
    categories: {
        type: Array,
    }
})

const Settings = mongoose.model("Settings", settingsSchema)

module.exports = Settings