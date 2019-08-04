const mongoose= require('mongoose');
mongoose.connect(process.env.MONGODB_URL,{ useNewUrlParser: true },(err)=>{
    if(!err){console.log('Mogoose connected successfully');
    }
    else{console.log('Error in MongoDB connection : '+ JSON.stringify(err,undefined,2))}
});

require('./user.model')