var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cel');
var Celebrity = require ('../models/celebrities')

let celebrities = [
{name:'Lily' , occupation:'Actress' ,catchPhrase:'I\'m your super COUAIT !'},
  {name: 'Jade', occupation:'Singer' ,catchPhrase:' Do your own stuff !'},
  {name: 'Ach', occupation:'footballer' ,catchPhrase: ' My favorite friend, my ball!'}

]

Celebrity.create(celebrities, (err, info) => {

  if (err) {
    throw err;
  }
  info.forEach((celebrity) => {
    console.log(celebrity.name)

});
mongoose.connection.close();
});
