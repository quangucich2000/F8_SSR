
class SiteController{

    //GET / News
    index(req, res){
        res.render('home')
    }

    //GET / News:slug
    search(req, res){
        res.render('search')
    }

}

module.exports = new SiteController