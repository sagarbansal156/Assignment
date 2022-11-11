
const mongoose = require("mongoose")
const teacherSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            enum: ["Mr", "Mrs", "Miss"],
            required: true

        },
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            trim: true,
            unique: true,
            required: true

        },
        password: {
            type: String,
            required: true,
            minLen: 8,
            maxLen: 15
        },
    },
    { timestamps: true },
);

module.exports = mongoose.model('teacher', teacherSchema)
