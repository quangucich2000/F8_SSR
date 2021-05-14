const Course = require('../models/Course')
const {mongooseToObject} = require('../../ulti/mongoose')

class CourseController {
    //GET / show course
    show(req, res, next) {
        Course.findOne({slug: req.params.slug})
            .then(course => {
                course = mongooseToObject(course);
                res.render('courses/show.hbs', {course})
            })
            .catch(next);
    }
}

module.exports = new CourseController();
