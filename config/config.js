//check env
var env=process.env.NODE_ENV || 'development';

// fetch config file

var config= require('./config.json');
var envCong= config[env];

//add config to procee env
Object.keys(envCong).forEach(key=> process.env[key]=envCong[key])