var express = require('express')
var route = express.Router()
var model = require('../model/schema').model
var mongo = require('../model/mongo').mongoUse

route.get('/', function (req, res) {
  res.send('This is the user API')
})

// 通过成员id或者社团部门获取成员
route.get('/user', function (req, res) {
  var message = {
    user_id: 1,
    community: {}
  }
  if (typeof req.query.user_id === 'undefined') {
    message.community = req.query.community
    delete message.user_id
  } else if (typeof req.query.community === 'undefined') {
    console.log('123')
    message.user_id = +req.query.user_id
    delete message.community
  }
  console.log('the message is ' + JSON.stringify(message))
  mongo.search(model.User, message, function (err, result) {
    err ? res.status(500).json(err) : res.json(result)
  })
})

// 添加成员
route.post('/user', function (req, res) {
  mongo.add(new model['User'](req.body), function (err, result) {
    err ? res.status(500).json(err) : res.json({message: "添加成员成功",user: result})
  })
})

module.exports = route
