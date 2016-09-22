var express = require('express')
var route = express.Router()

route.get('/', function(req, res) {
    res.json({
        "$auth": {
            "algorithm": "HS256",
            "cookie": null,
            "expiration": 172800,
            "header": "Authorization",
            "refresh": true
        },
        "community": {
            "get_allcommunity": {},
            "post_community": {},
            "get_community": {}
        },
        "user": {
            "get": {},
            "get_user": {},
            "post_user": {}
        }
    })
})

module.exports = route
