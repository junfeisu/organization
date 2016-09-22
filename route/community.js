var express = require('express')
var route = express.Router()
var mongo = require('../model/mongo').mongoUse
var model = require('../model/schema').model

route.get('/', function (req, res) {
  res.send("This is community API")
})

// 获取所有社团
route.get('/allcommunity', function (req, res) {
  mongo.search(model.Community, {}, function (err, result) {
    err ? res.status(500).json(err) : res.json(result)
  })
})

// 获取单个社团
route.get('/community', function (req, res) {
  mongo.search(model.Community, {community_id: req.query.community_id}, function (err, result) {
    if (err) {
      console.log('err is ' + JSON.stringify(err))
    }
    err ? res.send(err) : res.json(result)
  })
})

// 添加社团
route.post('/community', function (req, res) {
  console.log(req.body)
  mongo.add(new model['Community'](req.body), function (err, result) {
    err ? res.status(500).json(err) : res.json({msg: "添加社团成功", community:result})
  })
})

module.exports = route