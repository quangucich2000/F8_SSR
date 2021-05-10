const Course = require('../models/Course')

class SiteController {
    //GET / Home
    index(req, res) {
        Course.find({}, function(err, courses){
            if(!err){
                res.json(courses)
            }
            else res.status(400).json({error: "co loi !!!"})
        })
        //res.render('home');
    }

    //GET / Search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
