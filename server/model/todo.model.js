const mongoose = require("mongoose");
const validator = require("validator");

const todoSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            // required: [true, "Please Enter User Name"],
            trim: true,
        },
        email: {
            type: String,
            required: [true, "please Enter your email"],
            unique: true,
            validate: [validator.isEmail, "Please Enter a Valid Email"],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Todo", todoSchema);
