const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator'); 
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, require: true},
    description: { type: String},
    videoId: { type: String, require: true},
    level: { type: String},
    image:  { type: String},
    slug: { type: String, slug: 'name', unique: true, },
}, {
    timestamps: true,
});

//Add plug in
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { 
    overrideMethods: 'all',
    deletedAt : true ,
});;

module.exports = mongoose.model('Course', Course);