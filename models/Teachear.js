const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 255,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: [true, "Email Address already present"],
        validate(value) {
            if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value))) {
                throw new Error("Email is invalid");
            }
        }
    },
    phone: {
        type: Number,
        trim: true,
        min: 10,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Miniman 6 characters must be password"]
    },
    subject: {
        type: String,
        required: true,
        trim: true,
    },
    address: {
        street: {
            type: String,
            trim: true,
        },
        suite: {
            type: String,
            trim: true,
        },
        city: {
            type: String,
            trim: true,
        },
        zipcode: {
            type: Number,
            trim: true,
        }
    }

})

// create a document for a teacherSchema 
const Teacher = new mongoose.model("Teacher", teacherSchema);
module.exports = Teacher;