/**
 * Created by Haroun3amri on 27/04/2017.
 */
var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
_id:String,
title:String,
Author:String,
Genre:String,
price:String,
Rating:String,
imageUrl:String,
});

module.exports = mongoose.model('Book', BookSchema);
