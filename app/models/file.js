// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var fileSchema = new Schema({
  fname:String,
  
});

fileSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('File', fileSchema);
