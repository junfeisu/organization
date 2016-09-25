var mongoose = require('mongoose')
var Schema = mongoose.Schema
var models = {}

SequenceSchema = new Schema({
  _id: String,
  next: {
    type: Number,
    default: 1
  }
})

UsergenerateSchema = new Schema({
  _id: String,
  next: {
    type: Number,
    default: 1
  }
})

function increase (schemaName, callback) {
   return this.collection.findOneAndUpdate(
      {_id: schemaName},
      {$inc: {next: 1}}, 
      {new: true, upsert: true}, 
      callback
    )
}

SequenceSchema.statics.increase = increase

UsergenerateSchema.statics.increase = increase

models.Sequence = mongoose.model('Sequence', SequenceSchema)
models.Usergenerate = mongoose.model('Usergenerate', UsergenerateSchema)

module.exports = models
