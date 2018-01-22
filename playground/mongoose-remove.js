const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// })

//Todo.findOneAndRemove()

//Todo.findByIdAndRemove()
Todo.findByIdAndRemove('5a65c1c562cc2c05a5bbd726').then((todo) => {
  if (!todo) {
    return console.log('Todo not found');
  }

  console.log(todo);
});
