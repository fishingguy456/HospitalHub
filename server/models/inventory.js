const mongoose = require("mongoose");

const InventorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
    count: {
        type: Number,
        required: true,
    },
});

const Inventory = mongoose.model("hospitalData", InventorySchema);
module.exports = Inventory;