const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
var userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required:'Full name can\'t be empty'
  },
  email: {
    type: String,
    required:'email can\'t be empty',
    unique:true
  },
  password: {
    type: String,
    required:'password can\'t be empty',
    minlength:[4,'Password must be atleast 4 charecter long']
  }
});

userSchema.path('email').validate((val)=>{
emailRegex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
return emailRegex.test(val)
},'Invalid email')



mongoose.model("User", userSchema);
