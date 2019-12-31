const express = require('express');
let Burger = require('../models/burger.js')
const router = express.Router();

router.get("/", function(req, res){
    Burger.all(function(data){
        //res.json(data);
        res.render("index", {burger:data})
    })
 
})

router.post("api/burgers"){


}

router.put("api/burger/id", function(req,res)){


}

module.exports = router