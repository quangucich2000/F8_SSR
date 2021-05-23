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

    //[POST] /course/store
    store(req, res, next) {
        req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(req.body);
        course.save()
            .then(()=>res.redirect('/me/stored/courses'))
            .catch(err => {
                
            })
    }

    //[PUT] /courses/:id
    update(req, res, next){
        Course.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
    }

    //[PATCH] /courses/:id/restore
    restore(req, res, next){
        Course.restore({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }

    //[DELETE] /courses/:id
    destroy(req, res, next){
        Course.delete({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }

    //[DELETE] /courses/:id/force
    foceDestroy(req, res, next){
        Course.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }
}

module.exports = new CourseController();
