
const mongoose = require("mongoose")
const studentSchema = new mongoose.Schema(
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
        phone: {
            type: String,
            required: true,
            unique: true
        },
        subject: {
              Maths: {type: Number, required:true, trim:true},
              Science: {type: Number, required:true, trim:true},
              English: {type: Number, required:true, trim:true},
              Hindi:{type:Number,required:true,trim:true},
              SocialScience:{type:Number,required:true,trim:true}
        }
    },
    { timestamps: true },
);

module.exports = mongoose.model('student', studentSchema)
