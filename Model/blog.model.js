const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    id: {
        required: true,
        type: String
    },
    title: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    image: {
        required: true,
        type: Buffer
    },
    user: {
        required: true,
        type: String
    }
}, {
    timestamps: true // Enable automatic generation of createdAt and updatedAt fields
});

module.exports = mongoose.model("blogtable", blogSchema);