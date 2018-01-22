var mongoose = require('mongoose');


mongoose.Promise = global.Promise;
//mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');
mongoose.connect('mongodb://dbuser:M2305lab##@ds111608.mlab.com:11608/todoapp');

module.exports = {
  mongoose,

}
