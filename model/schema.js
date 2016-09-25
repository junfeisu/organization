var mongoose = require('mongoose')
var Sequence = require('./sequence').Sequence
var Usergenerate = require('./sequence').Usergenerate
var Schema = mongoose.Schema
mongoose.connect('mongodb://localhost/organization')
var communitySchema = new Schema({
    community_name: {
      type: String,
      reuqired: true,
      unique: true
    },
    community_id: {
      type: Number,
      index: {unique: true},
      reuqired: true
    },
    community_logo: {
      type: String,
      reuqired: true,
      default : 'http://7xrp7o.com1.z0.glb.clouddn.com/sjfblog.png'
    },
    community_desc: {
      type: String,
      required: true
    },
    community_QQ: {
      type: String,
      required: false
    },
    community_wechat: {
      type: String,
      required: false
    },
    community_weibo: {
      type: String,
      required: false
    },
    community_phone: {
      type: String,
      required: false
    },
    head: {
      type: String,
      required: true
    },
    category: {
      type: Number,
      required: true
    },
    department: [{
      name: {
        type: String,
        required: true
      },
      desc: {
        type: String,
        required: true
      }
    }],
    created: {
      type: Date,
      default: Date.now
    }
  }, {versionKey: false})
var userSchema = new Schema({
    username: {
      type: String,
      required: true,
      unique: true
    },
    student_id: {
      type: String,
      required: true
    },
    mobile: {
      type: 'String',
      requreid: true,
      unique: true
    },
    birthday: {
      type: String,
      required: false
    },
    photo: {
      type: String,
      required: true,
      default: 'http://7xrp7o.com1.z0.glb.clouddn.com/sjfblog.png'
    },
    user_id: {
      type: Number,
      required: true,
      index: {unique: true}
    },
    password: {
      type: String,
      required: true,
      default: '123456'
    },
    community: {
      community_id: {
        type: String,
        required: true
      },
      department: {
        name: {
          type: String,
          required: true
        },
        jobposition: {
          type: String,
          required: true
        }
      }
    }
  }, {versionKey: false})

communitySchema.pre('save', function(next) {
  var self = this
  console.log('self.community_id is ' + self.community_id)
  if (this.isNew) {
    Sequence.increase('Community', function(err, res) {
      if (err) {
        console.log('err is' + JSON.stringify(err))
      } else{
        self.community_id = res.value.next
        next()
      }
    })
  } else {
    next()
  }
})

userSchema.pre('save', function(next) {
  var self = this
  if (this.isNew) {
    Usergenerate.increase('User', function(err, result) {
      if (err) {
        console.log('err is' + JSON.stringify(err))
      } else{
        self.user_id = result.value.next
        next()
      }
    })
  } else {
    next()
  }
})

exports.model = {
  Community: mongoose.model('Community', communitySchema),
  User: mongoose.model('User', userSchema)
}
