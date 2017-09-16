/**
 * Created by Haroun3amri on 28/02/2017.
 */
/**
 * Created by Haroun3amri on 23/02/2017.
 */
var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/Yabs');
//-----------------------------------------------------------------------//
//Get All Carts
router.get('/histories',function(req,res,next){
    db.History.find(function (err,histories){
        if(err) {
            res.send(err);
        }
        res.json(histories);

    });
});
//------------------------------------------------------------------------//



//Get Single Book
router.get('/history/:id',function(req,res,next){
    db.History.findOne({_id: mongojs.ObjectId(req.params.id)},function(err,history){
        if(err){
            res.send(err);
        }
        res.json(history);
    });
});

//-----------------------------------------------------------------------//
//Add Order
router.post('/history',function(req,res,next){
    var history = req.body;
    /*if(!history._id){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    }
    else
    {*/
        db.History.save(history,function(err,history){
            if(err){
                res.send(err);
            }
            res.json(history);
        });
    //}
});
//-----------------------------------------------------------------------//
//Delete Book
router.delete('/history/:id',function(req,res,next){
    db.History.remove({_id: mongojs.ObjectId(req.params.id)},function(err,history){
        if(err){
            res.send(err);
        }
        res.json(history);
    });
});

//-----------------------------------------------------------------------//
//Update book
router.put('/history/:id',function(req,res,next){
    var history = req.body;
    var updhistory={};
    if(history.Category){
        updhistor.Category = history.Category;
    }
    if(history.title)
    {
        updhistory.title=history.title;

    }
    if(!updhistory)
    {
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    }
    else
    {
        db.History.update({_id: mongojs.ObjectId(req.params.id)},function(err,history){
            if(err){
                res.send(err);
            }
            res.json(history);
        });
    }

});



module.exports = router;


