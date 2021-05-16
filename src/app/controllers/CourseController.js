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

    //GET / show course/create
    create(req, res, next) {
        res.render('courses/create')
    }

    //GET / show course/store
    store(req, res, next) {
        //res.json(req.body)
        const formData  = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course.save()
            .then(()=>res.redirect('/'))
            .catch(err => {
                
            })
    }
}

module.exports = new CourseController();
