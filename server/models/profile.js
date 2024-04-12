let mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/mApp', { useUnifiedTopology: true ,  useNewUrlParser: true})
.then(console.log('database connected'))
.catch(err => err)



const profileSchema = mongoose.Schema({
  myFile: String,
  ID    : String,
  dob:Date,
  name:String,
  education:String,
  caste:String,
  gender:String,
  note:String,
  pnumber:Number,
  rasi:Number,
  natchathiram:String
});

module.exports = mongoose.model("profiles", profileSchema);








	



