const user  = require('../model/user');


exports.login = function () {

}

exports.logout = function () {
    
}

exports.home = function (req, res) {
    res.render('../views/home-guest')
}

exports.homeDetails = function (req, res){
    res.render('../views/home-details')
}