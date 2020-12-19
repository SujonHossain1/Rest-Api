const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    studentName: {
        type: String,
        trim: true,
        minlength: 1,
        required: true,
    },
    studentEmail: {
        type: String,
        trim: true,
        unique: [true, "Email Address Already Present"],
        required: true,
    },
    studentPassword: {
        type: String,
        required:true,
        minlength: 5
    },
    studentPhone: {
        type: Number,
        required: true,
        unique: true,
        trim: true,
    },
    studentRegisterNo: {
        type: Number,
    },
    studentGPA: {
        type: Number,
        default: 0,
    },
    studentSubject: {
        type: String,
        trim: true,
    },
    studentGender: {
        type: String,
        trim: true,
        default: 'male',
    },
    studentBirthday: {
        type: Date,
        default: Date.now
    },
    studentAddress: {
        type: String,
        trim: true
    }

})

const Student = new mongoose.model('Student', StudentSchema);
module.exports = Student;