module.exports = {
    mutipleMongooseToObject: function(mongooseArr){
        return mongooseArr.map(mongoose => mongoose.toObject());
    },
    mongooseToObject: function(mongoose){
        return mongoose.toObject();
    },
};