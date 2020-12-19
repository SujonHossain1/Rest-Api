const router = require('express').Router();
const {
    createTeacher,
    getAllTeachers,
    getSingleTeacher,
    deleteSingleTeacher,
    updateSingleTeacher
} = require('../controllers/teacherController');


router.post('/teachers', createTeacher);
router.get('/teachers', getAllTeachers);
router.get('/teachers/:id', getSingleTeacher);
router.delete('/teachers/:id', deleteSingleTeacher);
router.patch('/teachers/:id', updateSingleTeacher);

module.exports = router;