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
router.get('/carts',function(req,res,next){
    db.Order.find(function (err,orders){
        if(err) {
            res.send(err);
        }
        res.json(orders);

    });
});
//------------------------------------------------------------------------//
//Get Single cart
router.get('/cart/:id',function(req,res,next){
    db.Order.findOne({_id: mongojs.ObjectId(req.params.id)},function(err,cart){
        if(err){
            res.send(err);
        }
        res.json(cart);
    });
});
//-----------------------------------------------------------------------//
//Add Order
router.post('/cart',function(req,res,next){
    var order = req.body;
    if(!order.title){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    }
    else
    {
        db.Order.save(order,function(err,order){
            if(err){
                res.send(err);
            }
            res.json(order);
        });
    }
});
//-----------------------------------------------------------------------//
//Delete Cart
router.delete('/cart/:id',function(req,res,next){
    db.Order.remove({_id: mongojs.ObjectId(req.params.id())},function(err,cart){
        if(err){
            res.send(err);
        }
        res.json(cart);
    });
});

//-----------------------------------------------------------------------//
//Update book
router.put('/cart/:id',function(req,res,next){
    var order = req.body;
    var updOrder={};
    if(order.Category){
        updOrder.Category = order.Category;
    }
    if(order.title)
    {
        updOrder.title=order.title;

    }
    if(!updOrder)
    {
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    }
    else
    {
        db.order.update({_id: mongojs.ObjectId(req.params.id)},function(err,book){
            if(err){
                res.send(err);
            }
            res.json(order);
        });
    }

});



module.exports = router;


