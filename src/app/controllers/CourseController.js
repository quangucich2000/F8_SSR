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

    //GET / show course/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit', {
                course: mongooseToObject(course),
            }))
            .catch(next)
        
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

    //[PUT] /courses/:id
    update(req, res, next){
        Course.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
    }
}

module.exports = new CourseController();
