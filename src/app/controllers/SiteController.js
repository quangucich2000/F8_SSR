const Course = require('../models/Course')
const {mutipleMongooseToObject} = require('../../ulti/mongoose')

class SiteController {
    //GET / Home
    index(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                })
            })
            .catch(next);   
    }

    //GET / Search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
