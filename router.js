const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');

router.get('/', userController.home)
router.get('/home-details', userController.homeDetails);


// router.get('/home-details', function(req, res){
//     res.send("./views/home-details")
// })

module.exports = router