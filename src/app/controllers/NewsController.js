class NewsController {
    //GET / News
    index(req, res) {
        res.render('news');
    }

    //GET / News:slug
    show(req, res) {
        res.send('new detail');
    }
}

module.exports = new NewsController();
