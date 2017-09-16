/**
 * Created by Haroun3amri on 23/02/2017.
 */
var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/Yabs');
//-----------------------------------------------------------------------//
//Get All books
router.get('/books',function(req,res,next){
    db.books.find(function (err,books){
        if(err) {
            res.send(err);
        }
        res.json(books);

    });
});
//------------------------------------------------------------------------//
//Get Single Book By title
router.get('/book/title/:title',function(req,res,next){
    db.books.find({title:req.params.title},function(err,book){
        if(err){
            res.send(err);
        }
        res.json(book);
    });
});
//-----------------------------------------------------------------------//
//Get Single Book By Category
router.get('/book/Category/:category',function(req,res,next){
    db.books.find({Category:req.params.Category},function(err,book){
        if(err){
            res.send(err);
        }
        res.json(book);
    });
});
//-----------------------------------------------------------------------//
//Get Single Book By Author
router.get('/book/Author/:Author',function(req,res,next){
    db.books.find({Author:req.params.Author.id},function(err,book){
        if(err){
            res.send(err);
        }
        res.json(book);
    });
});
//-----------------------------------------------------------------------//
//Get Single Book
router.get('/book/:id',function(req,res,next){
    db.books.findOne({_id: mongojs.ObjectId(req.params.id)},function(err,book){
        if(err){
            res.send(err);
        }
        res.json(book);
    });
});

//-----------------------------------------------------------------------//
//Add Book
router.post('/book',function(req,res,next){
    var book = req.body;
    if(!book.title){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    }
    else
    {
        db.books.save(book,function(err,book){
            if(err){
                res.send(err);
            }
            res.json(book);
        });
    }
});
//-----------------------------------------------------------------------//
//Delete Book
router.delete('/book/:id',function(req,res,next){
    db.books.remove({_id: mongojs.ObjectId(req.params.id)},function(err,book){
        if(err){
            res.send(err);
        }
        res.json(book);
    });
});

//-----------------------------------------------------------------------//
//Update book
router.put('/book/:id',function(req,res,next){
  var book = req.body;
    var updBook={};
    if(book.Category){
        updBook.Category = book.Category;
    }
    if(book.title)
    {
        updBook.title=book.title;

    }
    if(!updBook)
    {
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    }
    else
    {
        db.books.update({_id: mongojs.ObjectId(req.params.id)},function(err,book){
        if(err){
            res.send(err);
        }
        res.json(book);
    });
    }

});



module.exports = router;

