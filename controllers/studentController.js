const Student = require("../models/Student");

const createStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        const result = await student.save()
        res.status(201).send(result);
    } catch (err) {
        res.status(500).send(err);
    }
}


const getAllStudents =  (req, res) => {
    Student.find({})
        .then(result => res.send(result))
        .catch(err => res.send(err));
}

const updateStudent = (req, res) => {
    const _id = req.params.id;
    Student.findOneAndUpdate({ _id }, {
        $set: req.body
    }, {
        new: true,
        useFindAndModify: false
    })
        .then(result => res.send(result))
        .catch(err => res.send(err));
}


const deleteStudent = (req, res) => {
    const _id = req.params.id;
    Student.findOneAndDelete({ _id })
        .then(result => res.send(result))
        .catch(err => res.send(err));
}

const getSingleStudent = (req, res) => {
    Student.findOne({ _id: req.params.id })
        .then(result => res.send(result))
        .catch(err => res.send(err));
}

module.exports = { createStudent, getAllStudents, updateStudent, deleteStudent, getSingleStudent }