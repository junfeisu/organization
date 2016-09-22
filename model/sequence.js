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

function modify (query, sort, doc, options, callback) {
  return this.collection.findAndModify(query, sort, doc, options, callback)
}

function increase (schemaName, callback) {
   return this.collection.findAndModify(
      {_id: schemaName},
      [], 
      {$inc: {next: 1}}, 
      {new: true, upsert: true}, 
      callback
    )
}

SequenceSchema.statics.findAndModify = modify

SequenceSchema.statics.increase = increase

UsergenerateSchema.statics.findAndModify = modify

UsergenerateSchema.statics.increase = increase

models.Sequence = mongoose.model('Sequence', SequenceSchema)
models.Usergenerate = mongoose.model('Usergenerate', UsergenerateSchema)

module.exports = models
