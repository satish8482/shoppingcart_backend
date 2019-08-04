const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = mongoose.model("User");

module.exports.register = (req, res, next) => {
  console.log("inside register fu");

  
  var user = new User();
  user.fullName = req.body.fullName;
  user.email = req.body.email;
  user.password = req.body.password;

  //Encypt the password
  bcrypt.genSalt(10, (err, salt)=> {
    bcrypt.hash(user.password, salt, function(err, hash) {
      if(err) throw err
      user.password=hash;
      user.save()
      .then(user=>res.json(user))
      .catch(err=>console.log(err))
    });
});
};
