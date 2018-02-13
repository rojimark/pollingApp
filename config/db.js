const mongoose = require('mongoose');

// Map global promises
mongoose.Promise = global.Promise;

//Mongoose Connect
mongoose.connect
('mongodb://admin:admin@ds235418.mlab.com:35418/pusherpull')
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));
